---
title: "Fact Porteria"
sidebar:
  order: 11
---

Registra los eventos de entrada y salida de vehículos en la portería de cada planta. Cada registro representa una transacción de control de acceso, incluyendo los usuarios responsables del ingreso, salida y eventual anulación, el estado de la operación, los datos del vehículo y chofer, y las marcas de tiempo correspondientes. Es la tabla fuente para el análisis de flujo de vehículos, control de accesos y auditoría de operaciones de portería.

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| porteria_id | `INT` | Identificador único de portería |
| correlativo_txn | `VARCHAR(16)` | Número secuencial o correlativo de la transacción |
| planta_id | `VARCHAR(20)` | Identificador único de portería |
| vehiculo_id | `VARCHAR(20)` | Identificador único de portería |
| usuario_id_ingreso | `VARCHAR(20)` | Identificador único de portería |
| usuario_id_salida | `VARCHAR(20)` | Identificador único de portería |
| usuario_id_anulacion | `VARCHAR(20)` | Identificador único de portería |
| ttx_id | `VARCHAR(20)` | Identificador único de portería |
| estado | `VARCHAR(1)` | Estado o indicador de estado |
| fecha_doc | `DATETIME` | Registro de fecha/hora (fecha doc) |
| fecha_hora_ingreso | `DATETIME` | Registro de fecha/hora (fecha hora ingreso) |
| fecha_hora_salida | `DATETIME` | Registro de fecha/hora (fecha hora salida) |
| fecha_hora_anulacion | `DATETIME` | Registro de fecha/hora (fecha hora anulacion) |
| motivo_anulacion | `VARCHAR(100)` | Información sobre motivo anulacion |
| circuito_id | `VARCHAR(20)` | Identificador único de portería |
| observacion | `VARCHAR(500)` | Información sobre observacion |
| chata | `BIT` | Información sobre chata |
| gui_id | `UNIQUEIDENTIFIER` | Identificador único de portería |
| ttx_destino_siguiente | `VARCHAR(20)` | Información sobre ttx destino siguiente |
| orden_manual | `VARCHAR(20)` | Información sobre orden manual |
| sincronizacion | `DATETIME` | Información sobre sincronizacion |
| chofer_id | `VARCHAR(20)` | Identificador único de portería |
| bal_id | `VARCHAR(20)` | Identificador único de portería |

## Origen (Base de Datos)
- **Base de Datos:** `MovMatAlicorp`
- **Tabla:** `rmtPorteriaTxn`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
cada 10 minutos
