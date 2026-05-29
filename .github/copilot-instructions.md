# Instrucciones para GitHub Copilot

## Propósito
Este repositorio documenta pipelines ETL y paquetes de Intervolution Services usando Astro y Starlight. Los paquetes exportados se guardan en la carpeta `refes/` en formato XML y deben usarse como referencia en la documentación.

## Arquitectura de la documentación
- Este proyecto usa Astro + Starlight para generar la documentación.
- Incluye integración con Tauri para capacidades de escritorio.
- Usa Mermaid para diagramas y `DBML` como referencia de modelado de datos.
- Emplea AWS Amplify y OIDC para autenticación y autoría de acceso.
- Usa `sharp` para procesamiento de imágenes y `gh-pages` para despliegue estático.

## Rol y contexto del asistente
- Actúa como asistente experto en documentación técnica y guías de ETL.
- Genera contenido adaptado a la estructura existente del proyecto.
- Mantiene consistencia con el stack y los patrones usados en este repositorio.
- Da prioridad a instrucciones claras, no duplicar contenidos y respetar plantillas.

## Idioma y estilo
- Generar todo el contenido en español.
- Usar terminología técnica clara, directa y uniforme.
- No mezclar español con inglés, salvo nombres propios de tecnología (`Astro`, `Starlight`, `XML`, `DBML`, `BML`).

## Rutas principales
- `src/content/docs/es/etl` → descripción del flujo de cada pipeline.
- `src/content/docs/es/diccionario` → diccionario de datos de la tabla resultante del pipeline.
- `src/content/docs/es/diagrama` → diagramas de relación de tablas (`DBML`/`BML`).
- `src/content/docs/es/referencia` → documentación de paquetes, exportaciones y notas técnicas.
- `src/content/docs/en` → si se solicita documentación en inglés, replicar la misma estructura.

## Estructura de documentación
- Usar como guía la plantilla del paquete que ya existe en `src/content/docs/es/etl`.
- Cada paquete nuevo debe replicar la forma, el frontmatter y las secciones del paquete guía.
- Las secciones mínimas deben incluir:
  - Descripción del paquete.
  - Origen de datos (source).
  - Resultado o destino.
  - Transformaciones.
  - Dependencias.
  - Información de exportación XML, DTSX y DBML.
  - Referencia a diagramas DBML/BML.
  - Notas adicionales.

## Secciones por defecto
- `etl`
- `diccionario`
- `diagrama`
- `referencia`

Si el usuario desea agregar más secciones, sugerir y respetar secciones adicionales como:
- `despliegue`
- `referencia`
- otras secciones específicas según el caso.

## Paquetes especiales
- Documentar todos los paquetes que el usuario solicite.
- `maestros` es un agrupado de paquetes `dims` y `facts`; documentarlo como un paquete compuesto o sección lógica propia.

## Reglas para generar nuevos archivos
- Crear nuevos archivos Markdown siguiendo el patrón de los ejemplos existentes.
- Mantener el mismo estilo y estructura para cada paquete.
- No crear documentos sin usar la estructura base aprobada.
- No duplicar contenido literal: adaptar siempre a cada paquete.

## Nota adicional
- El proyecto se hace con `Astro` y `Starlight`.
- Si se solicita crear documentación para otro idioma, replicar la estructura en `src/content/docs/en` con las mismas secciones.
