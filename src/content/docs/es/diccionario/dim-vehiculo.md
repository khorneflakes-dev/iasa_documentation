---
title: "Dim Vehiculo"
sidebar:
  order: 6
---

Almacena el catálogo de vehículos de transporte registrados en el sistema, con atributos físicos como marca, color, tipo de carrocería, número de ejes y capacidad de carga. El campo propietario indica si el vehículo pertenece a la empresa o a un transportista externo, siendo la dimensión de referencia para identificar la unidad de transporte en los eventos de portería, parqueo y recepción.

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| vehiculo_id | `VARCHAR(20)` | Identificador único de vehículos |
| marca | `VARCHAR(20)` | Información sobre marca |
| color | `VARCHAR(20)` | Información sobre color |
| tipo | `VARCHAR(30)` | Información sobre tipo |
| ejes | `INT` | Información sobre ejes |
| capacidad | `INT` | Información sobre capacidad |
| propietario | `BIT` | Información sobre propietario |

## Origen (Base de Datos)
- **Base de Datos:** `MovMatAlicorp`
- **Tabla:** `gntVehiculos`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
1 hora
