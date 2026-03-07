---
title: "Fact Planta"
sidebar:
  order: 15
---

Consolida los tiempos de ciclo de cada vehículo a lo largo de las distintas etapas del proceso dentro de la planta: portería de ingreso y salida, pesaje, descarga y laboratorio. Cada fila representa el paso completo de un vehículo por la planta, enlazado por un identificador de guía único, y constituye la principal fuente para el análisis de tiempos operacionales, cuellos de botella y eficiencia global del proceso de recepción de materiales.

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| gui_id | `UNIQUEIDENTIFIER` | Identificador único de plantas |
| vehiculo_id | `VARCHAR(20)` | Identificador único de plantas |
| circuito_id | `VARCHAR(20)` | Identificador único de plantas |
| planta_id | `VARCHAR(20)` | Identificador único de plantas |
| material_id | `VARCHAR(20)` | Identificador único de plantas |
| estado | `VARCHAR(1)` | Estado o indicador de estado |
| fecha_hora_peso_salida | `DATETIME` | Registro de fecha/hora (fecha hora peso salida) |
| fecha_hora_ingreso_porteria | `DATETIME` | Registro de fecha/hora (fecha hora ingreso porteria) |
| fecha_hora_salida_porteria | `DATETIME` | Registro de fecha/hora (fecha hora salida porteria) |
| fecha_hora_ingreso_pesaje | `DATETIME` | Registro de fecha/hora (fecha hora ingreso pesaje) |
| fecha_hora_salida_pesaje | `DATETIME` | Registro de fecha/hora (fecha hora salida pesaje) |
| fecha_hora_ingreso_descarga | `DATETIME` | Nombre o descripción de plantas |
| fecha_hora_salida_descarga | `DATETIME` | Nombre o descripción de plantas |
| fecha_hora_creacion_laboratorio | `DATETIME` | Registro de fecha/hora (fecha hora creacion laboratorio) |
| fecha_hora_aprobacion_laboratorio | `DATETIME` | Registro de fecha/hora (fecha hora aprobacion laboratorio) |

## Origen (Base de Datos)
- **Base de Datos:** `MovMatAlicorp`
- **Tablas:** `rmtRecepcionTxn`, `rmtPorteriaTxn`, `rmtPesajesTxn`, `rmtControlDescargaTxn`, `rmtLaboratorioTxn`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
cada 10 minutos
