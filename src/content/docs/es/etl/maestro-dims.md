---
title: "Maestro Dimensiones"
sidebar:
  order: 0
---

Este proceso coordina la carga de todas las dimensiones del Data Warehouse.

## Flujo de Trabajo
Se ejecutan de forma secuencial (o paralela según configuración interna) las siguientes cargas:

1. [Dim Material](/es/etl/dim-material/)
2. [Dim Chofer](/es/etl/dim-chofer/)
3. [Dim Proveedor](/es/etl/dim-proveedor/)
4. [Dim Planta](/es/etl/dim-planta/)
5. [Dim Usuario](/es/etl/dim-usuario/)
6. [Dim Vehículo](/es/etl/dim-vehiculo/)
7. [Dim Procedencia](/es/etl/dim-procedencia/)
8. [Dim Circuito](/es/etl/dim-circuito/)
9. [Dim Stock Almacén](/es/etl/dim-stock-almacen/)
10. [Dim Campaña](/es/etl/dim-campana/)
