---
title: "Dim Circuito"
sidebar:
  order: 8
---

Registra los circuitos o rutas logísticas definidos dentro del sistema operacional. Cada circuito agrupa una secuencia de pasos operacionales (portería, parqueo, pesaje, descarga) que un vehículo debe seguir para completar una transacción, siendo una dimensión clave para clasificar y analizar el flujo de materiales por tipo de proceso.

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| circuito_id | `VARCHAR(20)` | Identificador único de circuitos |
| nombre | `VARCHAR(100)` | Nombre o descripción de circuitos |

## Origen (Base de Datos)
- **Base de Datos:** `MovMatAlicorp`
- **Tabla:** `gntCircuito`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
1 hora
