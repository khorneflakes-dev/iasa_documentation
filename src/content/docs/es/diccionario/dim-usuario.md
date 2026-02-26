---
title: "Dim Usuario"
sidebar:
  order: 5
---

## Diccionario de Datos

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| usuario_corr_id | `INT` | Identificador único de usuarios |
| usuario_id | `VARCHAR(30)` | Identificador único de usuarios |
| planta_id | `VARCHAR(20)` | Identificador único de usuarios |
| activo | `BIT` | Información sobre activo |
| fecha_validez | `DBDATE` | Registro de fecha/hora (fecha validez) |
| empresa_default | `VARCHAR(100)` | Información sobre empresa default |
| num_dias_atras_bus_sync | `INT` | Información sobre num dias atras bus sync |
| todas_plantas | `BIT` | Información sobre todas plantas |
| autentica_windows | `BIT` | Información sobre autentica windows |
| caducidad_dias_contrasena | `INT` | Información sobre caducidad dias contrasena |
| cantidad_bloqueo_fallidos | `INT` | Información sobre cantidad bloqueo fallidos |

## Origen (Base de Datos)
`MovMatAlicorp`

## Destino (Base de Datos)
`db_Analitica_IASA`

## Frecuencia de Actualización
1 hora
