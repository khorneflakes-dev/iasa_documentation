---
title: "Dim Material"
sidebar:
  order: 1
---

Contiene el catálogo de materiales o productos manejados en las plantas IASA. Cada material posee un identificador único y un nombre descriptivo, y actúa como dimensión de análisis transversal en las tablas de recepciones, transferencias, campañas y control de stock de almacén.

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| material_id | `VARCHAR(20)` | Identificador único de materiales |
| material_nombre | `VARCHAR(100)` | Nombre o descripción de materiales |

## Origen (Base de Datos)
- **Base de Datos:** `MovMatAlicorp`
- **Tabla:** `gntMateriales`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
1 hora
