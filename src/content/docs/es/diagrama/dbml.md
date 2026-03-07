---
title: DBML
sidebar:
  order: 2
---

Este es el código DBML para el esquema Kimball IASA. Puedes copiar y pegar este código en herramientas como <a href="https://chartdb.io" target="_blank" rel="noopener noreferrer">ChartDB</a>, <a href="https://dbdiagram.io" target="_blank" rel="noopener noreferrer">dbdiagram.io</a> o <a href="https://dbdocs.io" target="_blank" rel="noopener noreferrer">dbdocs.io</a> si deseas generar tu propio diagrama interactivo o exportarlo en otros formatos.

```dbml
Table "public"."fact_transferencia" {
  "transferencia_id" int [pk, not null]
  "planta_id" varchar(20) [ref: > "public"."dim_planta"."planta_id"]
  "planta_id_destno" varchar(20) [ref: > "public"."dim_planta"."planta_id"]
  "material_id" varchar(20) [ref: > "public"."dim_material"."material_id"]
  "vehiculo_id" varchar(20) [ref: > "public"."dim_vehiculo"."vehiculo_id"]
  "cam_id" varchar(20) [ref: > "public"."dim_campana"."cam_id"]
  "circuito_id" varchar(20) [ref: > "public"."dim_circuito"."circuito_id"]
  "usuario_id_cerrado" varchar(20) [ref: > "public"."dim_usuario"."usuario_id"]
  "usuario_id_anulado" varchar(20) [ref: > "public"."dim_usuario"."usuario_id"]
  "correlativo_txn" varchar(16)
  "fecha_doc" timestamp
  "estado" varchar(1)
  "peso_neto" bigint
  "grado" float
  "gui_id" uuid
}

Table "public"."fact_recepcion" {
  "recepcion_id" int [pk, not null]
  "planta_id" varchar(20) [ref: > "public"."dim_planta"."planta_id"]
  "planta_id_origen" varchar(20) [ref: > "public"."dim_planta"."planta_id"]
  "proveedor_id" varchar(20) [ref: > "public"."dim_proveedor"."proveedor_id"]
  "material_id" varchar(20) [ref: > "public"."dim_material"."material_id"]
  "vehiculo_id" varchar(20) [ref: > "public"."dim_vehiculo"."vehiculo_id"]
  "circuito_id" varchar(20) [ref: > "public"."dim_circuito"."circuito_id"]
  "cam_id" varchar(20) [ref: > "public"."dim_campana"."cam_id"]
  "usuario_id_cerrado" varchar(20) [ref: > "public"."dim_usuario"."usuario_id"]
  "correlativo_txn" varchar(16)
  "fecha_doc" timestamp
  "peso_neto" bigint
  "grado" float
  "gui_id" uuid
}

Table "public"."fact_parqueo" {
  "parqueo_id" int [pk, not null]
  "planta_id" varchar(20) [ref: > "public"."dim_planta"."planta_id"]
  "circuito_id" varchar(20) [ref: > "public"."dim_circuito"."circuito_id"]
  "chofer_id" varchar(20) [ref: > "public"."dim_chofer"."chofer_id"]
  "vehiculo_id" varchar(20) [ref: > "public"."dim_vehiculo"."vehiculo_id"]
  "correlativo_txn" varchar(16)
  "fecha_doc" timestamp
  "estado" varchar(1)
  "gui_id" uuid
}

Table "public"."dim_proveedor" {
  "proveedor_id" varchar(20) [pk, not null]
  "nombre" varchar(100)
  "direccion" varchar(100)
  "prc_id" varchar(20)
  "ci" varchar(20)
}

Table "public"."fact_planta" {
  "gui_id" uuid [pk, not null]
  "planta_id" varchar(20) [ref: > "public"."dim_planta"."planta_id"]
  "vehiculo_id" varchar(20) [ref: > "public"."dim_vehiculo"."vehiculo_id"]
  "circuito_id" varchar(20) [ref: > "public"."dim_circuito"."circuito_id"]
  "material_id" varchar(20) [ref: > "public"."dim_material"."material_id"]
  "estado" varchar(1)
  "fecha_hora_peso_salida" timestamp
  "fecha_hora_ingreso_porteria" timestamp
  "fecha_hora_salida_porteria" timestamp
}

Table "public"."dim_circuito" {
  "circuito_id" varchar(20) [pk, not null]
  "nombre" varchar(100)
}

Table "public"."dim_stock_almacen" {
  "centro_id" varchar(4) [not null]
  "almacen_id" varchar(4) [not null]
  "material_id" varchar(20) [not null, ref: > "public"."dim_material"."material_id"]
  "planta_id" varchar(20) [not null, ref: > "public"."dim_planta"."planta_id"]
  "capacidad" numeric
  "stock_libre" numeric
  "fecha_modificacion" timestamp

  Indexes {
    (centro_id, almacen_id, material_id, planta_id) [pk]
  }
}

Table "public"."dim_vehiculo" {
  "vehiculo_id" varchar(20) [pk, not null]
  "marca" varchar(20)
  "color" varchar(20)
  "tipo" varchar(30)
  "ejes" int
  "capacidad" int
  "propietario" bit
}

Table "public"."dim_material" {
  "material_id" varchar(20) [pk, not null]
  "material_nombre" varchar(100)
}

Table "public"."dim_chofer" {
  "chofer_id" varchar(20) [pk, not null]
  "nombre" varchar(100)
}

Table "public"."dim_planta" {
  "planta_id" varchar(20) [pk, not null]
  "nombre" varchar(100)
  "propietario" varchar(1)
  "sap_id" varchar(20)
  "cen_codigo" varchar(4)
  "cen_codigo_recepcion" varchar(4)
}

Table "public"."dim_campana" {
  "cam_id" varchar(20) [pk, not null]
  "material_id" varchar(20) [ref: > "public"."dim_material"."material_id"]
  "nombre" varchar(100)
  "fecha_inicio" timestamp
  "fecha_fin" timestamp
}

Table "public"."dim_procedencia" {
  "procedencia_id" varchar(20) [pk, not null]
  "procedencia_nombre" varchar(100)
  "procedencia_zona" varchar(1)
}

Table "public"."fact_porteria" {
  "porteria_id" int [pk, not null]
  "planta_id" varchar(20) [ref: > "public"."dim_planta"."planta_id"]
  "vehiculo_id" varchar(20) [ref: > "public"."dim_vehiculo"."vehiculo_id"]
  "chofer_id" varchar(20) [ref: > "public"."dim_chofer"."chofer_id"]
  "circuito_id" varchar(20) [ref: > "public"."dim_circuito"."circuito_id"]
  "usuario_id_ingreso" varchar(20) [ref: > "public"."dim_usuario"."usuario_id"]
  "usuario_id_salida" varchar(20) [ref: > "public"."dim_usuario"."usuario_id"]
  "correlativo_txn" varchar(16)
  "fecha_doc" timestamp
  "estado" varchar(1)
  "gui_id" uuid
}

Table "public"."dim_usuario" {
  "usuario_id" varchar(20) [pk, not null]
  "usuario_corr_id" int [unique]
  "planta_id" varchar(20) [ref: > "public"."dim_planta"."planta_id"]
  "activo" bit
  "fecha_validez" date
}

```
