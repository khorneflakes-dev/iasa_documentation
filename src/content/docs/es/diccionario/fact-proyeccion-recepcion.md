---
title: "Fact Proyección Recepción"
sidebar:
  order: 17
---

Registra las proyecciones de recepción de materiales por planta, campaña y material dentro del sistema logístico de IASA. Cada registro incluye el objetivo inicial y ajustado en toneladas, la fecha proyectada, y los datos de auditoría de creación y modificación, permitiendo el análisis y seguimiento del cumplimiento de metas de recepción.

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| proy_rec_id | `BIGINT` | Identificador único de la proyección de recepción |
| planta_id | `VARCHAR(20)` | Identificador de la planta asociada |
| cam_id | `VARCHAR(20)` | Identificador de la campaña |
| material_id | `VARCHAR(20)` | Identificador del material |
| fecha | `DATE` | Fecha de la proyección |
| objetivo_inicial | `INT` | Objetivo inicial en toneladas |
| objetivo_ajustado | `INT` | Objetivo ajustado en toneladas |
| fecha_hora_creacion | `DATETIME` | Fecha y hora de creación del registro |
| fecha_hora_modificacion | `DATETIME` | Fecha y hora de la última modificación |
| usuario_id_creador | `VARCHAR(100)` | Identificador del usuario que creó el registro |
| usuario_id_modificacion | `VARCHAR(100)` | Identificador del usuario que realizó la última modificación |

## Origen (Base de Datos)
- **Base de Datos:** `MovMatAlicorp`
- **Tabla:** `sclProyeccionRecepciones`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
cada 10 minutos
