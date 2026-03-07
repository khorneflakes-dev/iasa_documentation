---
title: "Dim Stock Almacen"
sidebar:
  order: 9
---

Representa el estado del inventario por combinación de centro logístico, almacén, material y planta. Almacena la capacidad máxima permitida y el stock libre disponible en un momento dado, junto con la fecha de última modificación, el estado de disponibilidad y el período de apertura y cierre vigente, siendo la fuente principal para el análisis de capacidad y ocupación de almacenes.

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| centro_id | `VARCHAR(4)` | Identificador del centro logístico (SAP) |
| almacen_id | `VARCHAR(4)` | Identificador de ubicación de almacén física |
| material_id | `VARCHAR(20)` | Código único de material o producto |
| planta_id | `VARCHAR(20)` | Referencia a la bodega o planta física |
| capacidad | `DECIMAL` | Volumen o peso máximo permitido |
| stock_libre | `DECIMAL` | Cantidad de material actualmente disponible |
| fecha_modificacion | `DATETIME` | Última actualización en el sistema origen |
| estado | `VARCHAR(1)` | Indicador de disponibilidad (A: Activo, I: Inactivo) |
| periodo_disp_apertura | `DATETIME` | Inicio de periodo de validez de apertura |
| periodo_disp_cierre | `DATETIME` | Cierre de periodo de validez de apertura |

## Origen (Base de Datos)
- **Base de Datos:** `MovMatAlicorp`
- **Tabla:** `gntStockAlmacen`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
1 hora
