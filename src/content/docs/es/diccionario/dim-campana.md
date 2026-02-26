---
title: "Dim Campana"
sidebar:
  order: 10
---

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| cam_id | `VARCHAR(20)` | Identificador único de campañas |
| material_id | `VARCHAR(20)` | Identificador único de campañas |
| nombre | `VARCHAR(100)` | Nombre o descripción de campañas |
| fecha_inicio | `DATETIME` | Registro de fecha/hora (fecha inicio) |
| fecha_fin | `DATETIME` | Registro de fecha/hora (fecha fin) |

## Origen (Base de Datos)
`MovMatAlicorp`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
1 hora
