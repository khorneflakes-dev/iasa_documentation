---
title: "Dim Chofer"
sidebar:
  order: 2
---

Almacena el catálogo de choferes registrados en el sistema de transporte, con su identificador único y nombre completo. Sirve como referencia para identificar al conductor responsable en los eventos de portería, parqueo y recepción, permitiendo el análisis de operaciones segmentado por chofer.

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| chofer_id | `VARCHAR(20)` | Identificador único de choferes |
| nombre | `VARCHAR(100)` | Nombre o descripción de choferes |

## Origen (Base de Datos)
- **Base de Datos:** `MovMatAlicorp`
- **Tablas:** `rmtPorteriaTxn`, `rmtRecepcionTxn`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
1 hora
