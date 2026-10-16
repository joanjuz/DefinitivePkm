# PokeJuz: primera implementación

## Diseño y contenido

La referencia es el segundo mockup aprobado en este chat: Dark Graphite, portada compacta, secciones alternadas, azul suave para Definitive Randomizer y rojo apagado para Pokémon Tracker Progressive. El nombre elegido para esta versión es PokeJuz. El pie incluye «Herramientas de joanjuz» y enlaza al perfil general de GitHub.

El diseño aprobado prevalece sobre las propuestas aleatorias y la generación de nuevos diseños de las skills. No se generan sustitutos de las capturas. Se conservan la composición, la tipografía y los colores aprobados, aumentando el tamaño del texto de lectura para la web real.

Se aplican design-taste-frontend, image-to-code, copywriting, no-ai-slop y revisión de web-design-guidelines. La web no utiliza una plantilla de componentes ni un framework de JavaScript de cliente. La interactividad se limita a ampliar imágenes y abrir detalles de funciones.

## Tecnología

Astro 7 estático, TypeScript y CSS propio. Manrope se sirve localmente con Fontsource. Astro genera WebP de las capturas con varios tamaños. No hay base de datos, cuentas de usuario ni servidor de producción.

`site` y `base` están configurados para `https://joanjuz.github.io/DefinitivePkm/`. Todos los enlaces internos y recursos respetan esa base. `SITE_URL` y `BASE_PATH` permiten cambiarla si se renombra el repositorio o se añade un dominio propio.

## Fuentes de producto

Se consultaron los LEEME de las dos distribuciones facilitadas y las releases oficiales de ambos repositorios. Algunas instrucciones locales estaban desactualizadas: el Tracker ya tiene una release estable v0.24.0, mientras que su LEEME todavía menciona artefactos experimentales de Actions. Para la distribución y compatibilidad se priorizan las notas de esa release.

- https://github.com/joanjuz/Definitive-Randomizer/releases
- https://github.com/joanjuz/NuzlockeTracker/releases

La descarga destacada de Definitive Randomizer está fijada por petición del propietario a `v0.8.0-preview.1`. No cambia automáticamente al publicarse otra preview o una nueva estable. La sincronización conserva los metadatos de esa versión por separado y las instrucciones visibles corresponden a su ejecutable actual.

El propietario confirmó que el Tracker también está probado en Azahar. La web presenta Lime3DS y Azahar, sin inventar una matriz de pruebas de todas las combinaciones de juego y versión del emulador. Los juegos anunciados siguen siendo X/Y, ORAS y USUM 1.0; no se añade Sol/Luna al Tracker.

## Imágenes

Se sustituyeron las capturas iniciales por las imágenes originales aportadas por el propietario en el chat. Se conservan sin recreaciones ni alteraciones de contenido; Astro genera las variantes WebP para servirlas con eficiencia.

- `definitive-randomizer.png`: editor de Pokémon de v0.8.0-preview.1 con Bulbasaur seleccionado y proyecto cargado. Es la imagen principal del Randomizer.
- `randomizer-inicio.png`: editor sin proyecto, usado como captura adicional.
- `pokemon-tracker.png`: Equipo, usado como imagen principal del Tracker.
- `tracker-cajas.png`, `tracker-rutas.png`, `tracker-analisis.png`, `tracker-obs.png` y `tracker-conexion.png`: galería de funciones en la página del Tracker.

Las ocho imágenes están en `src/assets/`. La captura adicional de Batch aportada por el propietario se dejó fuera de los assets y de las páginas porque muestra una ruta local. Las capturas de OBS y Conexión incluidas no muestran tokens ni credenciales; la dirección de loopback es una referencia local de la propia aplicación. Los pies del Tracker describen la lectura guardada, sin presentarla como una conexión activa.

Las imágenes Pokémon que aparecen forman parte de la interfaz capturada; no se copiaron sprites independientes ni archivos de juego. Los nombres y recursos de Pokémon pertenecen a sus titulares. Las aplicaciones son proyectos comunitarios independientes.

## Descargas verificables

`scripts/sync-releases.mjs` consulta todas las páginas de releases públicas y suma únicamente los ZIP distribuibles de Windows. Incluye previews, excluye hashes y archivos automáticos de código fuente. Guarda únicamente metadatos públicos en `src/data/releases.json`.

El script solo escribe una respuesta completa por repositorio. Una caída de red conserva el resumen previo y su fecha original; nunca inventa un cero. Sin datos previos, la generación falla. Cada producto muestra la fecha de su última consulta correcta, en America/Guatemala.

Las cifras representan descargas de archivos y pueden bajar si se eliminan assets. No representan usuarios o instalaciones únicas. Se actualizan al ejecutar `npm run build` o `npm run sync:releases`. No hay consultas de estadísticas desde el navegador ni un token de GitHub en el cliente.

## Visitas privadas

La integración opcional usa Cloudflare Web Analytics, que también puede utilizarse en GitHub Pages. Sin el identificador público del beacon no se carga analítica, y la página de privacidad lo indica. No se inventó ni se creó una cuenta de administrador.

Para activarla, el propietario debe crear la propiedad del sitio en su cuenta de Cloudflare e introducir su identificador de beacon en `PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN`. Es un identificador público, no un token API ni una credencial. El panel de estadísticas permanece en la cuenta de Cloudflare y no se expone una API de visitas en esta web.

## Publicación

El workflow se ejecuta únicamente de forma manual. No tiene eventos push ni schedule para evitar publicaciones involuntarias. Antes de publicarlo, el propietario deberá seleccionar GitHub Actions en Settings → Pages y ejecutar el workflow cuando autorice el lanzamiento.

La implementación inicial se preparó sin commit, push ni despliegue. El propietario autorizó después la publicación de esta versión en GitHub Pages. Los despliegues siguientes siguen requiriendo ejecutar el workflow manualmente.

## Adaptación a pantallas grandes

Se elimina el límite global de 1920 px para que las secciones ocupen el ancho disponible. A partir de ese ancho se aumenta progresivamente la tipografía con una fórmula que combina rem y vw, manteniendo los límites de lectura en caracteres. Capturas, visor e iconos acompañan esa escala. No se detecta ni se bloquea el zoom del navegador.
