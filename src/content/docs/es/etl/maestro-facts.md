---
title: "Maestro Hechos"
sidebar:
  order: 11
---

Este proceso coordina la carga de todas las tablas de hechos después de que las dimensiones han sido procesadas correctamente.

## Flujo de Trabajo
Se ejecutan secuencialmente las siguientes cargas:

11. [Fact Portería](/es/etl/fact-porteria/)
12. [Fact Parqueo](/es/etl/fact-parqueo/)
13. [Fact Recepción](/es/etl/fact-recepcion/)
14. [Fact Transferencia](/es/etl/fact-transferencia/)
15. [Fact Planta](/es/etl/fact-planta/)
