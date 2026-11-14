# Verificación web del lanzamiento 1.0.0

Revisión del 13/11/2026, America/Guatemala (14/11 UTC). Solo se modifica el repositorio de la web.

## Fuentes y disponibilidad

- [Release estable v1.0.0](https://github.com/joanjuz/Definitive-Randomizer/releases/tag/v1.0.0): pública, no draft ni prerelease. Al empezar la revisión devolvía 404; se publicó durante el trabajo a las 01:31:29 UTC. Se volvió a consultar antes de activar la descarga.
- La etiqueta resuelve a `533487a19ab345f8421e5ec912ed0cff69674af6`. El asset público `BUILD_PROVENANCE.json` declara ese mismo commit, versión 1.0.0, distribución pública y paquete autocontenido win-x64.
- ZIP `DefinitiveRandomizer-1.0.0-win-x64.zip`: asset subido, 164340226 bytes. Petición HTTP de un byte: **206**, sin descargar ni ejecutar la aplicación. La web enlaza a la release confirmada, no a un nombre de archivo supuesto.
- [Tracker v1.4.0](https://github.com/joanjuz/NuzlockeTracker/releases/tag/v1.4.0): pública y estable. ZIP oficial: petición de un byte **206**. Se conservan las funciones anteriores, las seis capturas y la confirmación previa del propietario sobre Azahar; no se extrapola a todos los juegos/revisiones del emulador. Se añaden las funciones documentadas de DGD y límites manuales informativos.
- [Ko-fi oficial](https://ko-fi.com/joanjuz): enlace proporcionado por el propietario. HTTPS responde **403 con desafío Cloudflare**, tanto con HTTP como en Chromium. No se pudo confirmar el contenido del perfil desde este entorno. Se conserva el enlace general y no se afirma que la preview pueda descargarse.
- La API de releases devuelve **404** para `v1.1.0-preview.1`. La web indica «En preparación» y no crea enlaces de descarga de la preview.

Fuentes de compatibilidad y uso, fijadas al commit aprobado:

- [Matriz pública](https://github.com/joanjuz/Definitive-Randomizer/blob/533487a19ab345f8421e5ec912ed0cff69674af6/docs/3ds-progressive/COMPATIBILIDAD_PUBLICA.md).
- [Notas 1.0.0](https://github.com/joanjuz/Definitive-Randomizer/blob/533487a19ab345f8421e5ec912ed0cff69674af6/docs/3ds-progressive/RELEASE_1.0.0.md).
- [Primeros pasos](https://github.com/joanjuz/Definitive-Randomizer/blob/533487a19ab345f8421e5ec912ed0cff69674af6/docs/3ds-progressive/PRIMEROS_PASOS.md).
- [Notas 1.1 Preview](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/RELEASE_1.1.0_PREVIEW_1.md) y [Mega Ability Sync](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/MEGA_ABILITY_SYNC_USUM.md), consultadas durante la revisión. La confirmación jugable corresponde a dos Ultra Luna con el parche corregido; los otros escenarios se identifican como pendientes.
- [README del Tracker v1.4.0](https://github.com/joanjuz/NuzlockeTracker/blob/v1.4.0/README.md).

## Decisiones

Se conserva Astro 7, Manrope local, CSS propio, Dark Graphite y los acentos azul/rojo. La comparación da prioridad visual a la estable gratuita; Ko-fi tiene un enlace secundario y un estado de preparación. No hay precios, activaciones ni promesas de exclusividad. Ambas líneas se presentan como GPLv3.

Mega Ability Sync tiene una sección horizontal propia, un esquema HTML/SVG de dos jugadores con el parche en ambos, el caso confirmado y las limitaciones. El esquema explica el requisito y no imita la interfaz ni representa una conexión universal. Las otras cuatro novedades se presentan como una lista editorial compacta, con su alcance 3DS/USUM.

No hay capturas nuevas autorizadas de 1.0.0 o Mega Ability Sync en el sitio. Las dos capturas existentes del Randomizer mantienen su versión original v0.8.0 y llevan «Captura histórica». Queda pendiente recibir capturas actuales del propietario para reemplazarlas. No se generaron imágenes ni se copiaron archivos de juegos o aplicaciones.

El sincronizador separa familia, canal, versión y assets. Selecciona la estable WPF v1.x más alta por orden numérico. Las previews no son alternativas a la descarga estable. Una nueva familia mayor requiere cambiar explícitamente la política. Se suman todos los ZIP históricos reconocidos, también WinForms y previews, con fecha real de consulta. Si falla GitHub se conservan cifra y fecha; sin caché válida se falla. El guardado del resumen es atómico. Los errores de consulta de una aplicación no impiden actualizar la otra.

`build:pages` exige una consulta nueva y una estable WPF publicada, y comprueba el commit aprobado cuando la seleccionada es v1.0.0. La compilación normal permite revisar el estado pendiente sin inventar disponibilidad. Pages sigue siendo manual; el nuevo CI de PR no despliega.

## Pruebas ejecutadas

- `npm.cmd ci --ignore-scripts`: instalación desde lockfile. No se cambian dependencias. La auditoría de npm informa incidencias moderadas preexistentes; no se aplicó una actualización de framework dentro de este cambio.
- `npm.cmd test`: **30 pruebas aprobadas**, cero fallidas, omitidas o canceladas, mediante `node:test`, sin dependencias nuevas.
- `npm.cmd run check`: **0 errores, 0 advertencias, 0 hints**.
- `npm.cmd run build` y `npm.cmd run build:pages`: compilación estática correcta; cinco páginas, sitemap y 55 variantes optimizadas de imágenes.
- Chromium mediante Playwright CLI sobre `astro preview`: **248 comprobaciones aprobadas**, anchos **320, 390, 768 y 1440 px**. Portada, Randomizer, Tracker y privacidad responden 200; sin desbordamiento horizontal, errores de consola, excepciones o recursos fallidos.
- Se verifican descarga v1.0.0, Tracker v1.4.0, enlaces Ko-fi generales, ausencia de descargas falsas de preview, textos de canal y limitaciones, todas las capturas visibles y las cinco imágenes de la galería del Tracker.
- Teclado: primer foco en «Saltar al contenido», salto al main, apertura del visor con Enter, cierre con Escape y retorno del foco; desplegable de funciones con Enter y navegación a compatibilidad y Mega Ability Sync.
- Todos los enlaces internos y recursos consultados respetan `/DefinitivePkm/` y responden correctamente. Canonical y sitemap mantienen el dominio público y la base. Se comprueba `prefers-reduced-motion`.
- Enlaces externos: las 16 URL restantes responden **200**. Ko-fi es la única comprobación inconclusa por el desafío de Cloudflare.
- Revisión de web-design-guidelines: HTML semántico, nombres de enlaces/botones, foco visible, tabla con caption y cabeceras, contraste, dimensiones/alt de imágenes, responsive y movimiento reducido.
- Revisión editorial con copywriting/no-ai-slop: textos en español, sin eslóganes ni cifras inventadas; se distingue implementación de validación jugable y disponibilidad de distribución.

Regresiones cubiertas en `scripts/sync-releases.test.mjs`:

| Requisito | Prueba exacta |
| --- | --- |
| Separar estable, preview y WinForms | `stable WPF wins over newer previews and legacy WinForms` |
| No recomendar una preview si falta la estable | `missing stable never promotes an old preview` |
| Versiones futuras en orden numérico | `future versions use numeric order rather than publication dates` |
| Contador histórico sin fuentes ni drafts | `historical totals exclude drafts, sources and checksums` |
| Tracker independiente | `tracker selects its own stable independently` |
| Caché antigua sin recomendaciones obsoletas | `migration keeps old counts and dates but removes old recommendations` |
| No aceptar una estable con otro commit | `wrong approved commit blocks stable verification` |
| Consultar toda la paginación | `pagination includes every page and verifies approved commit` |
| Rechazar totales parciales | `incomplete pagination rejects a partial total` |
| No fabricar ceros ante errores | `API errors and malformed responses reject instead of returning zero` |
| Conservar fecha y contador, actualizar el otro producto | `network failure preserves verified totals while tracker still updates` |
| No desplegar sin consulta nueva y estable publicada | `deployment gate requires a fresh published stable` |

## Revisión visual

Lint de los tres componentes nuevos: **0 FAIL, 0 WARN**. Inspector de navegador en 1440/768/390: sin problemas de contraste, imágenes rotas ni desbordamientos. Se corrigieron el texto menor de 13 px del esquema y la posición del botón estable en móvil.

Excepciones explícitas a las heurísticas de design-taste-frontend: `few-pictures` (solo existen dos capturas autorizadas), `still-page` (el proyecto pide transiciones discretas, se mantiene su movimiento) y `eyebrow` (falso positivo sobre el enlace funcional «Todas las herramientas», que se conserva por navegación). Con esas excepciones: **0 FAIL**. Se mantienen las advertencias de variedad de tamaños tipográficos por consistencia con la identidad existente y ausencia de vídeo porque no hay uno autorizado. Se aplica la excepción de la skill para componentes dentro de un diseño existente, sin sortear otra dirección visual.

Valoración visual interna, sin atribuirla a una evaluación externa: diseño 8/10, usabilidad 8/10, creatividad 7/10, contenido 9/10 (ponderado 7.9/10). La limitación principal son las capturas históricas; no se ocultan ni se alteran.

## Capturas reales del sitio

- [Portada completa, escritorio](home-1440.png).
- Randomizer: [escritorio](randomizer-1440.png), [tablet](randomizer-768.png), [móvil](randomizer-390.png).
- Mega Ability Sync: [escritorio](mega-sync-1440.png), [tablet](mega-sync-768.png), [móvil](mega-sync-390.png).
- [Tracker, escritorio](tracker-1440.png).

Las capturas muestran la compilación estática local revisada; no son mockups. Los contadores reflejan la fecha mostrada y pueden variar en el siguiente build.
