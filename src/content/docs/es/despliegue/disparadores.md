---
title: Disparadores
sidebar:
  order: 2
---

Esta sección detalla la configuración de los **Jobs de SQL Server Agent** que automatizan la ejecución periódica de los paquetes SSIS. Estos Jobs actúan como los disparadores programados del ETL y deben configurarse **después** de haber realizado el [despliegue de los paquetes](../paquetes/) en el catálogo `SSISDB`.

---

## 🗓️ Jobs Configurados

Se crean **dos Jobs independientes**, uno por cada paquete maestro:

| Job | Paquete | Frecuencia | Propósito |
|---|---|---|---|
| `SSIS_IASA - Maestro Dimensiones` | `00_maestro_dims.dtsx` | Cada **1 hora** | Actualiza todas las dimensiones del DW |
| `SSIS_IASA - Maestro Facts` | `00_maestro_facts.dtsx` | Cada **10 minutos** | Actualiza todas las tablas de hechos del DW |

---

## 1️⃣ Crear un Nuevo Job

Los pasos de **General** son idénticos para ambos Jobs; solo cambia el nombre y la descripción.

1. En SSMS, expande **SQL Server Agent > Jobs** en el Object Explorer.
2. Haz clic derecho sobre **Jobs** y selecciona **New Job...**.
3. Completa la pestaña **General**:

| Campo | Job Dimensiones | Job Facts |
|---|---|---|
| **Name** | `SSIS_IASA - Maestro Dimensiones` | `SSIS_IASA - Maestro Facts` |
| **Description** | `Ejecuta el maestro de dimensiones del ETL IASA cada hora.` | `Ejecuta el maestro de hechos del ETL IASA cada 10 minutos.` |
| **Enabled** | ✅ Activado | ✅ Activado |

:::note
El campo **Owner** se autocompleta con el usuario de Windows actual. Si necesitas que el Job sea propiedad de una cuenta de servicio dedicada, cámbialo aquí con el botón `...`.
:::

---

## 2️⃣ Configuración del Paso de Ejecución (Step)

El Step es el núcleo del Job: le indica qué paquete SSIS ejecutar y desde qué catálogo.

1. Ve a la pestaña **Steps** y haz clic en **New...**.
2. Configura los campos como se indica a continuación:

| Campo | Valor |
|---|---|
| **Step name** | `Ejecutar Maestro` (o nombre descriptivo) |
| **Type** | `SQL Server Integration Services Package` |
| **Run as** | `SQL Server Agent Service Account` |
| **Package source** | `SSIS Catalog` |
| **Server** | Nombre de la instancia SQL Server |
| **Package** (Maestro Dims) | `/SSISDB/ETL_Master_Altitud/SSIS_IASA/00_maestro_dims.dtsx` |
| **Package** (Maestro Facts) | `/SSISDB/ETL_Master_Altitud/SSIS_IASA/00_maestro_facts.dtsx` |

3. Haz clic en el botón **`...`** junto al campo **Package** para navegar visualmente por el catálogo y seleccionar el paquete correspondiente.

### ⚙️ Pestaña Configurations (Entorno)

Dentro del Step, en la pestaña **Configurations**:

- Si tienes un **Environment** configurado en el catálogo (con variables como rutas o cadenas de conexión), marca la casilla **Environment** y selecciona el entorno correspondiente.
- Esto asegura que el paquete use los valores de **producción del servidor** y no los locales de desarrollo.

:::caution
Si no se asigna un entorno y las variables de entorno no están configuradas en el catálogo, el paquete puede conectarse a bases de datos incorrectas o fallar por parámetros vacíos.
:::

### 🔁 Acción en caso de error (Advanced)

En la pestaña **Advanced** del Step, configura el comportamiento ante fallos:

| Campo | Valor recomendado |
|---|---|
| **On success action** | `Go to the next step` |
| **On failure action** | `Quit the job reporting failure` |
| **Retry attempts** | `1` |
| **Retry interval (minutes)** | `2` |

---

## 3️⃣ Definición del Horario (Schedule)

### 🕐 Job Maestro Dimensiones — cada hora

1. Ve a la pestaña **Schedules** y haz clic en **New...**.
2. Configura el horario:

| Campo | Valor |
|---|---|
| **Name** | `Cada hora` |
| **Schedule type** | `Recurring` |
| **Frequency (Occurs)** | `Daily` |
| **Daily frequency** | `Occurs every: 1 hour(s)` |
| **Duration — Start date** | Fecha de activación en producción |
| **Start time** | `00:00:00` |
| **End time** | `23:59:59` |

---

### ⏱️ Job Maestro Facts — cada 10 minutos

1. Ve a la pestaña **Schedules** y haz clic en **New...**.
2. Configura el horario:

| Campo | Valor |
|---|---|
| **Name** | `Cada 10 minutos` |
| **Schedule type** | `Recurring` |
| **Frequency (Occurs)** | `Daily` |
| **Daily frequency** | `Occurs every: 10 minute(s)` |
| **Duration — Start date** | Fecha de activación en producción |
| **Start time** | `00:00:00` |
| **End time** | `23:59:59` |

:::tip
Para activar o desactivar temporalmente un Job sin eliminarlo, puedes desmarcar el checkbox **Enabled** en la configuración del Schedule o en la pestaña **General** del Job. Esto es útil durante mantenimientos.
:::

---

## 4️⃣ Guardar y Verificar

1. Una vez configurados **General**, **Steps** y **Schedules**, haz clic en **OK** para guardar el Job.
2. El Job aparecerá en la lista **SQL Server Agent > Jobs**.

### ▶️ Prueba de ejecución manual

Antes de que el horario automático tome el control, ejecuta cada Job manualmente para validar que todo funciona:

1. Haz clic derecho sobre el Job en la lista y selecciona **Start Job at Step...**.
2. Confirma y espera a que finalice.
3. Revisa el resultado en **View History**:

| Estado | Significado |
|---|---|
| ✅ `Succeeded` | El Job y sus Steps finalizaron sin errores. |
| ❌ `Failed` | Al menos un Step falló; revisa el mensaje de error en el historial. |
| ⚠️ `Cancelled` | El Job fue detenido manualmente antes de completarse. |

:::caution
Si el Job falla con **"Access is denied"** o **"Package not found"**, verifica que la cuenta de servicio del SQL Server Agent tenga el rol `ssis_admin` en `SSISDB` y permisos `db_datareader`/`db_datawriter` en las bases de datos origen y destino.
:::

:::tip
Para un diagnóstico detallado de errores por paquete y consultas de monitoreo sobre el catálogo `SSISDB`, consulta la sección [Monitoreo](../monitoreo/).
:::

---

## 📋 Resumen de Referencia Rápida

| Paso | Acción |
|---|---|
| 1 | Crear Job → pestaña **General**: nombre y descripción |
| 2 | Pestaña **Steps** → Type: SSIS Package, Source: SSIS Catalog, seleccionar `.dtsx` |
| 3 | Pestaña **Configurations** → asignar entorno si aplica |
| 4 | Pestaña **Advanced** → configurar reintentos y acción ante error |
| 5 | Pestaña **Schedules** → Dims: cada 1 hora / Facts: cada 10 minutos |
| 6 | Ejecutar manualmente y verificar historial (**View History**) |
| 7 | Revisar errores detallados en [Monitoreo](../monitoreo/) |