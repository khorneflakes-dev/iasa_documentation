---
title: Monitoreo
sidebar:
  order: 3
---

Esta sección centraliza las consultas SQL para monitorear el estado y diagnosticar errores de ejecución de los paquetes SSIS directamente desde el catálogo `SSISDB`.

:::note
Estas consultas deben ejecutarse en **SSMS** conectado a la instancia de SQL Server donde está desplegado el catálogo, usando **Windows Authentication** con un usuario que tenga al menos el rol `ssis_admin` o `db_datareader` en `SSISDB`.
:::

---

## 📊 Estado General de Ejecuciones

Usa esta consulta para obtener un resumen de todas las ejecuciones recientes de paquetes SSIS: cuándo iniciaron, cuándo terminaron, cuánto duraron y cuál fue su resultado.

```sql
USE SSISDB;
GO

SELECT
    execution_id,
    folder_name,
    project_name,
    package_name,
    start_time,
    end_time,
    DATEDIFF(ss, start_time, end_time) AS duration_seconds,
    CASE [status]
        WHEN 1 THEN 'Created'
        WHEN 2 THEN 'Running'
        WHEN 3 THEN 'Canceled'
        WHEN 4 THEN 'Failed'
        WHEN 5 THEN 'Pending'
        WHEN 6 THEN 'Ended Unexpectedly'
        WHEN 7 THEN 'Succeeded'
        WHEN 8 THEN 'Stopping'
        WHEN 9 THEN 'Completed'
    END AS execution_status
FROM catalog.executions
ORDER BY start_time DESC;
```

### Guía de estados

| Estado | Descripción |
|---|---|
| `Created` | La ejecución fue creada pero aún no ha iniciado. |
| `Running` | El paquete se está ejecutando en este momento. |
| `Canceled` | La ejecución fue cancelada manualmente. |
| `Failed` | El paquete terminó con errores. Revisar mensajes de error. |
| `Pending` | En espera de recursos para iniciar. |
| `Ended Unexpectedly` | El proceso fue interrumpido de forma inesperada (p. ej. caída del servicio). |
| `Succeeded` | Ejecución completada sin errores. |
| `Stopping` | En proceso de detención. |
| `Completed` | Finalizó (puede incluir advertencias). |

:::tip
Filtra por proyecto para reducir el ruido. Agrega al final de la consulta:
```sql
WHERE project_name = 'SSIS_IASA'
```
:::

---

## 🔍 Diagnóstico de Errores por Paquete

Cuando una ejecución muestra el estado `Failed` o `Ended Unexpectedly`, usa esta consulta para obtener el detalle de los mensajes de error, advertencia y fallos de tareas asociados a un paquete específico.

El ejemplo a continuación está configurado para el paquete **Maestro Facts**; cambia el valor de `e.package_name` para consultar cualquier otro paquete.

```sql
USE SSISDB;
GO

SELECT
    em.operation_id         AS Execution_ID,
    em.message_time,
    e.package_name,
    e.project_name,
    em.message_source_name  AS Component_Name,
    em.message,
    CASE em.message_type
        WHEN 120 THEN 'Error'
        WHEN 110 THEN 'Warning'
        WHEN 70  THEN 'Information'
        WHEN 90  THEN 'Task Failed'
    END AS Message_Type
FROM catalog.event_messages em
JOIN catalog.executions e ON em.operation_id = e.execution_id
WHERE em.message_type IN (120, 90)
  AND e.package_name = '00_maestro_facts.dtsx'
ORDER BY em.message_time DESC;
```

### Referencia de `message_type`

| Código | Tipo | Cuándo aparece |
|---|---|---|
| `120` | `Error` | Fallo crítico que detiene el paquete. |
| `110` | `Warning` | Advertencia no bloqueante; el paquete continúa. |
| `70` | `Information` | Mensaje informativo del flujo de ejecución. |
| `90` | `Task Failed` | Una tarea específica dentro del paquete falló. |

### Paquetes disponibles para filtrar

Reemplaza el valor de `e.package_name` con cualquiera de los siguientes:

| Paquete | Descripción |
|---|---|
| `00_maestro_dims.dtsx` | Orquestador de todas las dimensiones |
| `00_maestro_facts.dtsx` | Orquestador de todas las tablas de hechos |
| `01_dim_material.dtsx` … `10_dim_campana.dtsx` | Cargas individuales de dimensiones |
| `11_fact_porteria.dtsx` … `15_fact_planta.dtsx` | Cargas individuales de hechos |

---

## 🕵️ Consulta Combinada: Errores de la Última Ejecución

Si solo quieres ver los errores de la **ejecución más reciente** de un paquete maestro, usa esta versión que filtra automáticamente por el `execution_id` más alto:

```sql
USE SSISDB;
GO

DECLARE @last_exec INT = (
    SELECT MAX(execution_id)
    FROM catalog.executions
    WHERE project_name = 'SSIS_IASA'
      AND package_name = '00_maestro_facts.dtsx'
);

SELECT
    em.message_time,
    em.message_source_name  AS componente,
    em.message,
    CASE em.message_type
        WHEN 120 THEN 'Error'
        WHEN 90  THEN 'Task Failed'
        WHEN 110 THEN 'Warning'
    END AS tipo
FROM catalog.event_messages em
WHERE em.operation_id = @last_exec
  AND em.message_type IN (120, 90, 110)
ORDER BY em.message_time ASC;
```

:::tip
Cambiar `00_maestro_facts.dtsx` por `00_maestro_dims.dtsx` en la variable `@last_exec` para diagnosticar el último run del maestro de dimensiones.
:::
