---
title: "Dim Material"
sidebar:
  order: 1
---

## Procesos ETL

Este documento detalla la lógica de extracción de datos para la tabla **Dim Material**.

### Flujo del Paquete

```mermaid
graph TD
    Package_Execute_SQL_Task["Creación de tablas dim y stg"] --> Package_Data_Flow["Data Flow"]
    Package_Data_Flow["Data Flow"] --> Package_Execute_SQL_Task_1["Carga Final (Execute SQL Task 1)"]
```

### 1. Extracción (Source)
A continuación se muestra la consulta de origen utilizada en el paquete SSIS:

```sql
SELECT * FROM MovMatAlicorp.dbo.gntMateriales

```

### 2. Creación de tablas dim y stg
Si ya existe la tabla **dim_material** creada, solo se procede a borrar (truncate) la tabla **stg_dim_material** para prepararla para la nueva carga.

```sql
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[dim_material]') AND type in (N'U'))
BEGIN
CREATE TABLE [dim_material] (
[material_id] varchar(20) NOT NULL,
[material_nombre] varchar(100)
CONSTRAINT PK_dim_material PRIMARY KEY CLUSTERED ([material_id])
)
END
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[stg_dim_material]') AND type in (N'U'))
BEGIN
SELECT TOP 0 * INTO stg_dim_material FROM dim_material;
END
ELSE
BEGIN
TRUNCATE TABLE stg_dim_material;
END
```

### 3. Data Flow Task
El Data Flow maneja internamente dos pasos clave:
1. **Lectura de la fuente**: Obtención de datos según la consulta de origen.
2. **Vaciado en la tabla stg**: Inserción de los datos en la tabla temporal **stg_dim_material**.

### 4. Carga Final (Execute SQL Task 1)
Como último paso, el **Execute SQL Task 1** lee los valores recogidos en la tabla **stg_dim_material** y los pasa a la tabla **dim_material** real.

```sql
BEGIN TRANSACTION;
DELETE FROM dim_material;
INSERT INTO dim_material SELECT * FROM stg_dim_material;
COMMIT;
```

