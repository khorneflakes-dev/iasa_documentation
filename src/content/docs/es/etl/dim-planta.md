---
title: "Dim Planta"
sidebar:
  order: 4
---

## Procesos ETL

Este documento detalla la lógica de extracción de datos para la tabla **Dim Planta**.

### Flujo del Paquete

```mermaid
graph TD
    Package_Execute_SQL_Task["Creación de tablas dim y stg"] --> Package_Data_Flow_Task["Data Flow Task"]
    Package_Data_Flow_Task["Data Flow Task"] --> Package_Execute_SQL_Task_1["Carga Final (Execute SQL Task 1)"]
```

### 1. Extracción (Source)
A continuación se muestra la consulta de origen utilizada en el paquete SSIS:

```sql
SELECT *
FROM [MovMatAlicorp].[dbo].[gntPlantas]

```

### 2. Creación de tablas dim y stg
Si ya existe la tabla **dim_planta** creada, solo se procede a borrar (truncate) la tabla **stg_dim_planta** para prepararla para la nueva carga.

```sql
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[dim_planta]') AND type in (N'U'))
BEGIN
CREATE TABLE [dim_planta] (
[planta_id] varchar(20) NOT NULL,
[nombre] varchar(100),
[propietario] varchar(1),
[sap_id] varchar(20),
[cen_codigo] varchar(4),
[cen_codigo_recepcion] varchar(4)
CONSTRAINT PK_dim_planta PRIMARY KEY CLUSTERED ([planta_id])
)
END
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[stg_dim_planta]') AND type in (N'U'))
BEGIN
SELECT TOP 0 * INTO stg_dim_planta FROM dim_planta;
END
ELSE
BEGIN
TRUNCATE TABLE stg_dim_planta;
END
```

### 3. Data Flow Task
El Data Flow Task maneja internamente dos pasos clave:
1. **Lectura de la fuente**: Obtención de datos según la consulta de origen.
2. **Vaciado en la tabla stg**: Inserción de los datos en la tabla temporal **stg_dim_planta**.

### 4. Carga Final (Execute SQL Task 1)
Como último paso, el **Execute SQL Task 1** lee los valores recogidos en la tabla **stg_dim_planta** y los pasa a la tabla **dim_planta** real.

```sql
BEGIN TRANSACTION;
DELETE FROM dim_planta;
INSERT INTO dim_planta SELECT * FROM stg_dim_planta;
COMMIT;
```

