---
title: "Fact Camiones Cola"
sidebar:
  order: 16
---

Registra la información de los camiones en cola dentro del sistema logístico de IASA. Cada registro contiene el identificador del camión, la planta asociada, la fecha y hora del evento, la cantidad, así como los datos de auditoría de creación y modificación, permitiendo el seguimiento y análisis del flujo de vehículos en espera en las instalaciones.

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| col_id | `INT` | Identificador único del registro de cola |
| planta_id | `VARCHAR(20)` | Identificador de la planta asociada |
| camion_id | `VARCHAR(20)` | Identificador único del camión |
| fecha_hora | `DATETIME` | Fecha y hora del evento en cola |
| cantidad | `DECIMAL(18,4)` | Cantidad registrada en el evento |
| fecha_hora_creacion | `DATETIME` | Fecha y hora de creación del registro |
| fecha_hora_modificacion | `DATETIME` | Fecha y hora de la última modificación |
| usuario_id_creador | `VARCHAR(100)` | Identificador del usuario que creó el registro |
| usuario_id_modificacion | `VARCHAR(100)` | Identificador del usuario que realizó la última modificación |

## Origen (Base de Datos)
- **Base de Datos:** `MovMatAlicorp`
- **Tabla:** `sclCamionesCola`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
cada 10 minutos
