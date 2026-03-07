---
title: "Dim Proveedor"
sidebar:
  order: 3
---

Contiene el catálogo de proveedores que suministran materiales a las plantas IASA. Incluye datos de identificación y contacto como dirección, cédula de identidad y zona geográfica, así como el código de empresa y el identificador en el sistema de precios, permitiendo relacionar cada recepción con el proveedor responsable del suministro.

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| proveedor_id | `VARCHAR(20)` | Identificador único de proveedores |
| nombre | `VARCHAR(100)` | Nombre o descripción de proveedores |
| direccion | `VARCHAR(100)` | Información sobre direccion |
| prc_id | `VARCHAR(20)` | Identificador único de proveedores |
| ci | `VARCHAR(20)` | Información sobre ci |
| zona | `VARCHAR(2)` | Información sobre zona |
| emp_codigo | `VARCHAR(20)` | Información sobre emp codigo |

## Origen (Base de Datos)
- **Base de Datos:** `MovMatAlicorp`
- **Tabla:** `gntProveedores`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
1 hora
