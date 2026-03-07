---
title: "Maestro Dimensiones"
sidebar:
  order: 0
---

Este proceso coordina la carga de todas las dimensiones del Data Warehouse.

## Flujo de Trabajo
Se ejecutan de forma secuencial (o paralela según configuración interna) las siguientes cargas:

1. [Dim Material](../dim-material/)
2. [Dim Chofer](../dim-chofer/)
3. [Dim Proveedor](../dim-proveedor/)
4. [Dim Planta](../dim-planta/)
5. [Dim Usuario](../dim-usuario/)
6. [Dim Vehículo](../dim-vehiculo/)
7. [Dim Procedencia](../dim-procedencia/)
8. [Dim Circuito](../dim-circuito/)
9. [Dim Stock Almacén](../dim-stock-almacen/)
10. [Dim Campaña](../dim-campana/)
