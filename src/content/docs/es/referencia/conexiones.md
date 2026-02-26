---
title: "Conexiones de Datos"
---

El proyecto utiliza gestores de conexión (.conmgr) para centralizar el acceso a las fuentes y destinos de datos.

## Conexiones Principales

| Nombre de Conexión | Descripción | Tipo |
| :--- | :--- | :--- |
| `db_analitica` | Destino final de los datos transformados (Data Warehouse). | SQL Server (OLEDB) |
| `db_mirror`    | Réplica (Mirroring) de la base de datos transaccional de origen. | SQL Server (OLEDB) |

## Configuración de Entornos

Las conexiones se configuran dinámicamente mediante archivos `.dtsConfig` o parámetros de proyecto en SSIS para apuntar a los diferentes entornos:

- **Desarrollo:** Servidor local de desarrollo.
- **Producción:** Servidor en la nube Azure u On-Premise IASA.

## Recomendaciones de Seguridad
- Se recomienda el uso de **Autenticación de Windows** siempre que sea posible.
- Si se usa Autenticación SQL, las contraseñas deben estar cifradas mediante el nivel de protección del paquete.
