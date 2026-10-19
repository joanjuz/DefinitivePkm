# Validación de la primera versión

Fecha: 16 de octubre de 2026.

## Comprobaciones ejecutadas

- Instalación con npm: 0 vulnerabilidades notificadas.
- `npm run sync:releases`: consulta correcta de ambos repositorios; 21 descargas de tres ZIP de Randomizer y 2 de un ZIP del Tracker. El JSON guarda la hora real de cada consulta, no estos valores como constantes de interfaz.
- `npm run check`: 14 archivos, 0 errores, 0 advertencias y 0 sugerencias.
- Generación estática con Astro: cinco páginas, sitemap y ocho variantes WebP de las dos capturas.
- Lint de design-taste-frontend: 0 fallos y 0 advertencias.
- Chrome sin ventana mediante playwright-cli: inicio a 1440, 768, 390 y 320 píxeles, sin desbordamiento horizontal ni imágenes de carga inmediata rotas. Fuentes locales cargadas y títulos principales en un máximo de dos líneas.
- Páginas de ambos productos y privacidad comprobadas a 1440, 390 y 320 píxeles.
- Seis destinos internos responden correctamente, incluidas las imágenes originales que se amplían.
- Apertura de funciones, apertura de captura, cierre con Escape y restitución del foco comprobados.
- El primer Tab permite saltar al contenido y Enter enfoca el contenido principal.
- Sitemap con la URL y base correctas para GitHub Pages.
- Sin errores de JavaScript ni respuestas HTTP de error en los recursos locales revisados.
- Enlace del pie verificado: «Herramientas de joanjuz» → https://github.com/joanjuz.
- No se carga un script de visitas cuando falta el identificador de analítica.
- Revisión independiente de metadatos de descargas, requisitos, compatibilidad y rutas: sin hallazgos accionables.

## Revisión visual y límites del inspector

Se revisaron las capturas de escritorio y móvil y se aumentó a 14 píxeles el texto secundario pequeño. El texto descriptivo usa 16 píxeles. Se mantuvieron la portada compacta y las secciones alternadas del mockup aprobado.

El inspector genérico de diseño marca tres preferencias de su sistema que entran en conflicto con esta referencia aprobada: las etiquetas que explican la función de cada programa, el mínimo arbitrario de cuatro imágenes y el mínimo de ocho elementos animados durante carga/scroll. Se conservan las dos etiquetas informativas, las dos capturas reales y el comportamiento estático aprobado; no se añaden imágenes de relleno ni animaciones para satisfacer esos umbrales. También se conserva la ausencia de video, porque no se proporcionó una demostración real.

La ejecución sin excepciones tiene esos tres avisos de tipo FAIL y el aviso de falta de video. La ejecución con las excepciones explícitas `eyebrow,few-pictures,still-page` comprueba el resto de reglas; no equivale a que la ejecución original no tuviera hallazgos. Las excepciones obedecen a la aprobación expresa del mockup, que prevalece sobre las preferencias de las skills.

## Pendiente de configuración externa

- Analítica privada: introducir el identificador público de Cloudflare Web Analytics en una propiedad de la cuenta del propietario. Sin ese dato se mantiene desactivada.
- Publicación: todavía no se ejecutó el workflow ni se modificaron las opciones de GitHub Pages.

No se hicieron commit ni push. Las pruebas de navegador posteriores a las capturas se ejecutaron sin ventanas y sin controlar el escritorio del usuario.

## Actualización de capturas y compatibilidad

El mismo 16 de octubre se sustituyeron las imágenes iniciales por ocho capturas proporcionadas por el propietario: dos de Randomizer y seis del Tracker. La captura de Batch con una ruta local quedó fuera de los assets públicos. Se añadió la galería ampliable a ambas páginas de producto y se ajustó la resolución seleccionada por el navegador para imágenes de ancho completo.

Se incorporó Azahar en las descripciones, los requisitos y las instrucciones, a partir de la confirmación del propietario. Se verificó la release oficial `v0.8.0-preview.1` mediante la API de GitHub y se fijó como descarga destacada del Randomizer, sin promoción de la versión estable anterior.

Comprobaciones de esta actualización:

- Sincronización de releases correcta, incluidos los metadatos separados de la versión fijada.
- Astro check: 0 errores, 0 advertencias y 0 sugerencias.
- Compilación estática correcta; 40 variantes optimizadas de las ocho capturas.
- Lint de diseño: 0 fallos, 0 advertencias.
- Inicio y páginas de producto revisados a 1440, 768, 390 y 320 píxeles, sin desbordamientos.
- Verificación del enlace destacado exacto a `https://github.com/joanjuz/Definitive-Randomizer/releases/tag/v0.8.0-preview.1`.
- Azahar visible en inicio y en la página del Tracker.
- Carga de todas las miniaturas y originales; apertura y cierre con Escape de cada imagen comprobados.
- Sin errores de JavaScript o recursos locales en los recorridos ejecutados.
- Revisión visual de la portada actualizada y la galería del Tracker.

No se controló el escritorio ni se ejecutaron las aplicaciones para esta actualización. No se realizaron commit, push ni publicación.

## Ajuste responsive posterior a la publicación

Se comprobaron inicio, ambos productos y privacidad a 320, 390, 768, 960, 1440, 1920, 2560, 3840 y 6880 px, sin desbordamiento horizontal ni límite de ancho en el body. Se revisaron capturas en móvil, escritorio y un viewport de 6880 × 3124 equivalente al espacio CSS de la captura del propietario al 25 %. También se comprobó texto al 200 % a 640 px en inicio y ambos productos. Las comprobaciones se ejecutaron en Chrome sin controlar el escritorio.


## Integración de Pokechu · 19 de octubre de 2026

Astro check: 0 errores, advertencias y sugerencias. Compilación correcta con 55 variantes de imágenes. Lint de diseño: 0 fallos y advertencias. Inspector a 1440, 768 y 390 px: 0 fallos con las excepciones documentadas del diseño aprobado (eyebrow, few-pictures y still-page); permanece el aviso de ausencia de video.

Chrome: portada a 320, 390, 768, 1440, 2560 y 6880 px sin desbordamientos. Tres capturas de Pokechu cargadas y ampliadas con cierre mediante Escape en cada ancho. Galería de Randomizer y enlace de navegación desde una página de producto comprobados. Sin errores de JavaScript o respuestas locales HTTP fallidas. Destino oficial de Pokechu verificado con respuesta HTTP 200.
