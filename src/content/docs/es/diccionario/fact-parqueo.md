---
title: "Fact Parqueo"
sidebar:
  order: 12
---

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| parqueo_id | `INT` | Identificador único de parqueo |
| correlativo_txn | `VARCHAR(16)` | Número secuencial o correlativo de la transacción |
| ttx_id | `VARCHAR(20)` | Identificador único de parqueo |
| circuito_id | `VARCHAR(20)` | Identificador único de parqueo |
| planta_id | `VARCHAR(20)` | Identificador único de parqueo |
| estado | `VARCHAR(1)` | Estado o indicador de estado |
| fecha_doc | `DATETIME` | Registro de fecha/hora (fecha doc) |
| gui_id | `UNIQUEIDENTIFIER` | Identificador único de parqueo |
| fecha_hora_ingreso | `DATETIME` | Registro de fecha/hora (fecha hora ingreso) |
| fecha_hora_salida | `DATETIME` | Registro de fecha/hora (fecha hora salida) |
| chofer_id | `VARCHAR(20)` | Identificador único de parqueo |
| transporte_id | `VARCHAR(20)` | Identificador único de parqueo |
| vehiculo_id | `VARCHAR(20)` | Identificador único de parqueo |
| rut_codigo | `VARCHAR(6)` | Información sobre rut codigo |
| tip_id | `INT` | Identificador único de parqueo |
| observaciones | `VARCHAR(500)` | Información sobre observaciones |
| pla_id | `INT` | Identificador único de parqueo |
| ttx_destino_siguinte | `VARCHAR(20)` | Información sobre ttx destino siguinte |
| con_id | `VARCHAR(12)` | Identificador único de parqueo |
| inspeccion | `VARCHAR(2)` | Información sobre inspeccion |
| estado_cola | `VARCHAR(2)` | Estado o indicador de estado cola |
| motivo_ingreso | `VARCHAR(500)` | Información sobre motivo ingreso |
| peso_recibir | `DECIMAL` | Información sobre peso recibir |

## Origen (Base de Datos)
`MovMatAlicorp`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
cada 10 minutos
