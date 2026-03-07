---
title: "Dim Campana"
sidebar:
  order: 10
---

Contiene la información de las campañas de acopio de materiales, incluyendo el período de vigencia (fecha de inicio y fecha de fin) y el material asociado a cada campaña. Permite segmentar y analizar los movimientos de recepción por ciclo de cosecha o campaña comercial, facilitando el seguimiento de volúmenes y condiciones de compra por período.

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| cam_id | `VARCHAR(20)` | Identificador único de campañas |
| material_id | `VARCHAR(20)` | Identificador único de campañas |
| nombre | `VARCHAR(100)` | Nombre o descripción de campañas |
| fecha_inicio | `DATETIME` | Registro de fecha/hora (fecha inicio) |
| fecha_fin | `DATETIME` | Registro de fecha/hora (fecha fin) |

## Origen (Base de Datos)
- **Base de Datos:** `MovMatAlicorp`
- **Tabla:** `rmtCampañas`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
1 hora
