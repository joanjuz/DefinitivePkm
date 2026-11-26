# Actualización de funcionalidades de PokeJuz

Revisión: 25 de noviembre de 2026 (Guatemala). Rama creada desde `origin/main`, commit `48a5e3a7deb430e43431cfb6266f3c201658c8be`.

## Implementación

Se conserva Astro 7.4, TypeScript, CSS propio, Manrope y la paleta Graphite. No se añaden dependencias. `FeatureSection.astro` comparte título, descripción, disponibilidad, compatibilidad, validación y documentación; sus slots permiten esquemas, capturas y detalles específicos. Las composiciones alternan texto y visualización con orden de lectura textual primero en móvil.

Se añaden cinco secciones de Randomizer (mapas/eventos, Progressive BST, habilidades especiales, caramelos y plantillas/historial) y cinco de Tracker (equipo/cajas, Soul Link, análisis/constructor, OBS y Nuzlocke/progreso). Mega Ability Sync conserva su diseño, esquema y límites. La portada enlaza directamente a las funciones; las explicaciones completas quedan en cada producto.

Los esquemas son HTML/CSS propios y llevan explicación textual. Los ejemplos BST y equipos virtuales se identifican como ilustrativos. Todas las capturas proceden de los archivos originales del sitio, con la ampliación existente; no son capturas nuevas de v1.6.0. No se han añadido recursos de Pokémon descargados ni imágenes generadas.

`Layout.astro` se revisó y conserva el idioma español, metadatos, canonical, fuente local, salto al contenido y analítica opcional existentes. `PokechuSection.astro`, sus capturas, enlaces y funciones no tienen cambios respecto a la base.

## Fuentes y decisiones editoriales

Tracker se contrasta con la documentación del tag [v1.6.0](https://github.com/joanjuz/NuzlockeTracker/releases/tag/v1.6.0): [README](https://github.com/joanjuz/NuzlockeTracker/blob/v1.6.0/README.md), [Soul Link](https://github.com/joanjuz/NuzlockeTracker/blob/v1.6.0/docs/SOUL_LINK.md), [análisis y equipos](https://github.com/joanjuz/NuzlockeTracker/blob/v1.6.0/docs/ANALISIS_Y_EQUIPOS.md), [OBS](https://github.com/joanjuz/NuzlockeTracker/blob/v1.6.0/docs/OBS_OVERLAYS.md) y [límites de nivel](https://github.com/joanjuz/NuzlockeTracker/blob/v1.6.0/docs/LIMITES_NIVEL.md). Su README actual valida principalmente Lime3DS: se corrige la antigua afirmación de compatibilidad probada con Azahar.

Para Randomizer, la estable continúa anclada al commit aprobado de [1.0.0](https://github.com/joanjuz/Definitive-Randomizer/releases/tag/v1.0.0). Las funciones posteriores se contrastaron con `main` (`75c2d5cc0c07688f7cf573d75eee7336f2c2155f` al consultar el árbol), especialmente:

- [Mapas Gen6](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/MAPAS_3DS_GEN6.md), [Gen7](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/MAPAS_3DS_GEN7.md), [orientación 3DS](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/MAPAS_3DS_ORIENTACION_ENTRENADORES.md), [enfermeras](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/MAPAS_3DS_ENFERMERA.md) y [zonas de captura/hierba](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/MAPAS_3DS_ZONAS_CAPTURA.md).
- [Orientación y visión DS](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/NDS_ENTRENADORES_ORIENTACION_VISION.md) y [objetos, warps y activadores DS](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/NDS_EVENTOS_OBJETOS_WARPS_ACTIVADORES.md).
- [Escalado](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/ESCALADO_CRONOLOGIA_HISTORIA.md) y [Global/Batch](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/HITO_16_GLOBAL_TEMPLATE_BATCH.md).
- [Multitipo](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/MULTITIPO_OTRAS_ESPECIES_USUM.md), [Disfraz](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/DISFRAZ_OTRAS_ESPECIES_USUM.md) y [Sistema Alfa](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/SISTEMA_ALFA_OTRAS_ESPECIES_USUM.md).
- [Caramelos en OR](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/CARAMELOS_RAROS_PERSONALIZADOS_OR.md) y [USUM](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/CARAMELOS_RAROS_PERSONALIZADOS_USUM.md).

La documentación de mapas contiene párrafos históricos con estados anteriores; se usa la evidencia posterior de cada operación. Por ejemplo, la enfermera USUM está confirmada en Ultra Luna con la rutina de Lylia y no con las primeras implementaciones de Centro Pokémon.

La numeración `1.1.0-preview.3` procede del encargo del propietario. No se encontró una release pública ni ZIP de esa versión en GitHub. El sitio la identifica como línea de acceso anticipado y avisa de que el desarrollo documentado puede avanzar respecto al paquete entregado. Antes de distribuir una compilación concreta, contrastar sus notas y `VERSION.txt`. No se inventa una descarga ni una fecha de Preview.

Ko-fi rechazó la consulta automatizada (403); se conserva [el enlace general autorizado](https://ko-fi.com/joanjuz). No se pudo verificar un producto directo.

## Versiones y descargas

`npm run sync:releases` y `npm run verify:launch` consultaron las fuentes reales. No se editó manualmente `releases.json`: Randomizer `v1.0.0`, Tracker `v1.6.0`, Preview pública `null`. El snapshot conserva fecha real de consulta y suma de ZIP: 175 descargas de Randomizer (18 assets históricos) y 23 de Tracker (9 assets históricos). Son descargas de archivos, no usuarios.

Los dos ZIP estables respondieron HTTP 200. Los enlaces de documentación respondieron 200 salvo algunas consultas limitadas por GitHub (429); sus recursos también se contrastaron mediante el conector GitHub. No se interpretó un 429 como enlace inexistente. Todas las anclas locales y enlaces de portada a funciones existen.

## Validación

| Comprobación | Resultado |
| --- | --- |
| `npm ci` con lockfile | Correcto; sin modificar dependencias |
| `npm test` | 30/30, sin omisiones |
| `npm run check` | 24 archivos, 0 errores, 0 advertencias, 0 hints |
| `npm run build` | Correcto, cinco páginas y recursos optimizados |
| `npm run verify:launch` | Correcto con consulta fresca de GitHub; no despliega |
| Playwright/Chromium | Portada y ambos productos a 1440, 768 y 390 px |
| Desbordamiento horizontal | Ninguno: scrollWidth coincide con viewport en las nueve combinaciones |
| Imágenes | Todas las imágenes con recurso cargan; todas tienen atributo alt |
| Anclas/IDs | Sin anclas rotas ni IDs duplicados |
| Consola y recursos locales | Sin errores de JavaScript/console ni respuestas HTTP de error |
| Teclado | Salto al main, Enter en desplegables de Pokechu y galerías; Escape cierra el diálogo y restaura el foco |
| Pokechu | Sin cambios de código/recursos; web pública y enlaces de Pokédex/progreso responden 200; portada del juego carga con sus minijuegos |

Se revisaron las capturas de escritorio, tablet y móvil, junto con las reglas de Web Interface Guidelines para foco, semántica, imágenes, tamaños, lectura y movimiento reducido. Los diagramas no introducen animaciones, controles falsos ni dependencias. La revisión editorial conserva el vocabulario del producto y elimina promesas genéricas; las limitaciones están junto a cada función.

La comprobación de Pokechu es de acceso y conservación de su integración; no se ha realizado una partida completa de cada minijuego. La accesibilidad se revisó con inspección y teclado, sin una auditoría formal de lector de pantalla.

## Evidencias visuales

- [Portada 1440](home-1440.png), [768](home-768.png), [390](home-390.png).
- [Randomizer 1440](definitive-randomizer-1440.png), [768](definitive-randomizer-768.png), [390](definitive-randomizer-390.png).
- [Tracker 1440](pokemon-tracker-progressive-1440.png), [768](pokemon-tracker-progressive-768.png), [390](pokemon-tracker-progressive-390.png).
- [Mapas 1440](mapas-1440.png), [768](mapas-768.png), [390](mapas-390.png).
- [Soul Link 1440](soul-link-1440.png), [768](soul-link-768.png), [390](soul-link-390.png).

## Pendientes ajenos a esta actualización

La instalación informa de avisos de seguridad del lockfile existente. `npm audit --omit=dev` identifica Astro 7.4.0 (una dependencia con severidad agregada moderada): [inyección en nombres de etiquetas dinámicas](https://github.com/advisories/GHSA-mh32-jxcr-mh9f) y [endpoint de imágenes de @astrojs/node](https://github.com/advisories/GHSA-r3h5-4585-7x3w). Este proyecto genera archivos estáticos y no usa ese adaptador; los nombres dinámicos actuales son constantes internas h2/h3. Conviene revisar la actualización de Astro en un cambio separado. No se ejecutó `audit fix` ni se cambió la arquitectura.

No se ha fusionado el PR, ejecutado el workflow de Pages ni publicado producción.
