---
title: "Fact Recepcion"
sidebar:
  order: 13
---

Almacena los eventos de recepción de materiales en las plantas, incluyendo los pesos de ingreso, salida y neto, el grado de calidad del material y los resultados parciales de análisis de laboratorio (humedad, impureza, aceite, grano dañado, quemado, partido, entre otros). Integra referencias a SAP para la gestión de pedidos, entradas de mercancía y lotes de inspección, siendo la tabla central del modelo analítico para el seguimiento de volúmenes recibidos y la calidad de los materiales acopiados.

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| recepcion_id | `INT` | Identificador único de recepción |
| planta_id | `VARCHAR(20)` | Identificador único de recepción |
| correlativo_txn | `VARCHAR(16)` | Número secuencial o correlativo de la transacción |
| fecha_doc | `DATETIME` | Registro de fecha/hora (fecha doc) |
| ttx_id | `VARCHAR(20)` | Identificador único de recepción |
| estado | `VARCHAR(1)` | Estado o indicador de estado |
| proveedor_id | `VARCHAR(20)` | Identificador único de recepción |
| material_id | `VARCHAR(20)` | Identificador único de recepción |
| peso_salida | `BIGINT` | Información sobre peso salida |
| peso_neto | `BIGINT` | Información sobre peso neto |
| grado | `FLOAT` | Información sobre grado |
| peso_liquido | `R4` | Información sobre peso liquido |
| fecha_hora_peso_salida | `DATETIME` | Registro de fecha/hora (fecha hora peso salida) |
| observaciones | `VARCHAR(100)` | Información sobre observaciones |
| usuario_id_cerrado | `VARCHAR(20)` | Identificador único de recepción |
| usuario_id_anulado | `VARCHAR(20)` | Identificador único de recepción |
| pedido_sap | `VARCHAR(16)` | Información sobre pedido sap |
| entrada_mercancia_sap | `VARCHAR(16)` | Información sobre entrada mercancia sap |
| gestion_em | `VARCHAR(4)` | Información sobre gestion em |
| lote_inspeccion_sap | `VARCHAR(16)` | Información sobre lote inspeccion sap |
| motivo_anulacion | `VARCHAR(100)` | Información sobre motivo anulacion |
| fecha_hora_anulacion | `DATETIME` | Registro de fecha/hora (fecha hora anulacion) |
| circuito_id | `VARCHAR(20)` | Identificador único de recepción |
| ttx_destino_siguiente | `VARCHAR(20)` | Información sobre ttx destino siguiente |
| gui_id | `UNIQUEIDENTIFIER` | Identificador único de recepción |
| impresion | `BIT` | Información sobre impresion |
| numero_remision | `VARCHAR(16)` | Información sobre numero remision |
| peso_remision | `INT` | Información sobre peso remision |
| planta_id_origen | `VARCHAR(20)` | Identificador único de recepción |
| nota_manual | `BIT` | Información sobre nota manual |
| bal_id | `VARCHAR(20)` | Identificador único de recepción |
| vehiculo_id | `VARCHAR(20)` | Identificador único de recepción |
| sap | `BIT` | Información sobre sap |
| cam_id | `VARCHAR(20)` | Identificador único de recepción |
| peso_ingreso | `BIGINT` | Información sobre peso ingreso |
| desicion_empleo_sap | `BIT` | Información sobre desicion empleo sap |
| numero_nota_manual | `VARCHAR(20)` | Información sobre numero nota manual |
| lab_humedad_parcial | `FLOAT` | Información sobre lab humedad parcial |
| lab_impureza_parcial | `FLOAT` | Información sobre lab impureza parcial |
| lab_aceite_parcial | `FLOAT` | Información sobre lab aceite parcial |
| lab_danado_parcial | `FLOAT` | Información sobre lab danado parcial |
| lab_quemado_parcial | `FLOAT` | Información sobre lab quemado parcial |
| lab_partido_parcial | `FLOAT` | Información sobre lab partido parcial |
| lab_grabico_parcial | `FLOAT` | Información sobre lab grabico parcial |
| lab_graenfe_parcial | `FLOAT` | Información sobre lab graenfe parcial |
| lab_grainma1_parcial | `FLOAT` | Información sobre lab grainma1 parcial |
| lab_grainma2_parcial | `FLOAT` | Información sobre lab grainma2 parcial |

## Origen (Base de Datos)
- **Base de Datos:** `MovMatAlicorp`
- **Tablas:** `rmtRecepcionTxn`, `rmtLaboratorioTxn`, `rmtLaboratorioDetalleTxn`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
cada 10 minutos
