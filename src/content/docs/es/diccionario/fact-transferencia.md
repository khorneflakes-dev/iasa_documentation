---
title: "Fact Transferencia"
sidebar:
  order: 14
---

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| transferencia_id | `INT` | Identificador único de transferencia |
| planta_id | `VARCHAR(20)` | Identificador único de transferencia |
| correlativo_txn | `VARCHAR(16)` | Número secuencial o correlativo de la transacción |
| fecha_doc | `DATETIME` | Registro de fecha/hora (fecha doc) |
| ttx_id | `VARCHAR(20)` | Identificador único de transferencia |
| estado | `VARCHAR(1)` | Estado o indicador de estado |
| material_id | `VARCHAR(20)` | Identificador único de transferencia |
| peso_ingreso | `BIGINT` | Información sobre peso ingreso |
| peso_salida | `BIGINT` | Información sobre peso salida |
| peso_neto | `BIGINT` | Información sobre peso neto |
| grado | `FLOAT` | Información sobre grado |
| fecha_hora_peso_salida | `DATETIME` | Registro de fecha/hora (fecha hora peso salida) |
| observaciones | `VARCHAR(100)` | Información sobre observaciones |
| usuario_id_cerrado | `VARCHAR(20)` | Identificador único de transferencia |
| usuario_id_anulado | `VARCHAR(20)` | Identificador único de transferencia |
| motivo_anulacion | `VARCHAR(100)` | Información sobre motivo anulacion |
| fecha_hora_anulacion | `DATETIME` | Registro de fecha/hora (fecha hora anulacion) |
| circuito_id | `VARCHAR(20)` | Identificador único de transferencia |
| ttx_destino_siguiente | `VARCHAR(20)` | Información sobre ttx destino siguiente |
| gui_id | `UNIQUEIDENTIFIER` | Identificador único de transferencia |
| impresion | `BIT` | Información sobre impresion |
| numero_nota_manual | `VARCHAR(20)` | Información sobre numero nota manual |
| nota_manual | `BIT` | Información sobre nota manual |
| vehiculo_id | `VARCHAR(20)` | Identificador único de transferencia |
| cam_id | `VARCHAR(20)` | Identificador único de transferencia |
| sincronizacion | `DATETIME` | Información sobre sincronizacion |
| planta_id_destno | `VARCHAR(20)` | Identificador único de transferencia |

## Origen (Base de Datos)
`MovMatAlicorp`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
cada 10 minutos
