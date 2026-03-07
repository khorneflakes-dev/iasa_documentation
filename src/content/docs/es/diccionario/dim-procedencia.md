---
title: "Dim Procedencia"
sidebar:
  order: 7
---

Registra el origen geográfico o comercial de los materiales recibidos en las plantas. Cada registro incluye un identificador único, un nombre descriptivo y la zona de procedencia, permitiendo segmentar los análisis de recepción por región de origen y facilitando la trazabilidad territorial de los suministros.

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| procedencia_id | `VARCHAR(20)` | Identificador único de procedencias |
| procedencia_nombre | `VARCHAR(100)` | Nombre o descripción de procedencias |
| procedencia_zona | `VARCHAR(1)` | Información sobre procedencia zona |

## Origen (Base de Datos)
- **Base de Datos:** `MovMatAlicorp`
- **Tabla:** `gntProcedencias`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
1 hora
