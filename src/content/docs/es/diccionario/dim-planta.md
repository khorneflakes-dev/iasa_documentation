---
title: "Dim Planta"
sidebar:
  order: 4
---

Almacena la información de las plantas o bodegas físicas donde se realizan los procesos de recepción, pesaje, transferencia y almacenamiento de materiales. Incluye el código SAP asociado, los códigos de centro logístico utilizados en la integración con SAP y la indicación de si la planta pertenece directamente a la empresa, siendo la dimensión geográfica principal del modelo analítico.

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| planta_id | `VARCHAR(20)` | Identificador único de plantas |
| nombre | `VARCHAR(100)` | Nombre o descripción de plantas |
| propietario | `VARCHAR(1)` | Información sobre propietario |
| sap_id | `VARCHAR(20)` | Identificador único de plantas |
| cen_codigo | `VARCHAR(4)` | Información sobre cen codigo |
| cen_codigo_recepcion | `VARCHAR(4)` | Información sobre cen codigo recepcion |

## Origen (Base de Datos)
- **Base de Datos:** `MovMatAlicorp`
- **Tabla:** `gntPlantas`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
1 hora
