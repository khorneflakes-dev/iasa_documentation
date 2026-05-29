---
title: "Fact Proyección Transferencia"
sidebar:
  order: 18
---

Registra las proyecciones de transferencia de materiales entre plantas dentro del sistema logístico de IASA. Cada registro incluye la planta de origen, la planta de destino, la campaña, el material, la fecha proyectada y el objetivo en toneladas, junto con los datos de auditoría, permitiendo el análisis del cumplimiento de metas de transferencia entre instalaciones.

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| proy_trans_id | `BIGINT` | Identificador único de la proyección de transferencia |
| planta_id_origen | `VARCHAR(20)` | Identificador de la planta de origen |
| planta_id_destino | `VARCHAR(20)` | Identificador de la planta de destino |
| cam_id | `VARCHAR(20)` | Identificador de la campaña |
| material_id | `VARCHAR(20)` | Identificador del material |
| fecha | `DATE` | Fecha de la proyección |
| objetivo | `INT` | Objetivo de transferencia en toneladas |
| fecha_hora_creacion | `DATETIME` | Fecha y hora de creación del registro |
| fecha_hora_modificacion | `DATETIME` | Fecha y hora de la última modificación |
| usuario_id_creador | `VARCHAR(100)` | Identificador del usuario que creó el registro |
| usuario_id_modificacion | `VARCHAR(100)` | Identificador del usuario que realizó la última modificación |

## Origen (Base de Datos)
- **Base de Datos:** `MovMatAlicorp`
- **Tabla:** `sclProyeccionTransferencia`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
cada 10 minutos
