# PokeJuz

Web en español para Definitive Randomizer y Pokémon Tracker Progressive. Primera versión basada en el mockup Dark Graphite aprobado: portada compacta, capturas reales, funciones, requisitos y descargas oficiales gratuitas.

## Desarrollo local

Requiere Node.js 22.22 o posterior; se recomienda Node.js 24.

```powershell
npm install
npm run sync:releases
npm run dev
```

Abrir `http://127.0.0.1:4321/DefinitivePkm/`.

```powershell
npm run check
npm run build
npm run preview
```

## Páginas

- `/`: presentación de ambos productos y estadísticas de descargas.
- `/definitive-randomizer/`: funciones, requisitos, capturas y descarga de v0.8.0-preview.1.
- `/pokemon-tracker-progressive/`: funciones, compatibilidad e instrucciones.
- `/privacidad/`: tratamiento de analítica y servicios externos.

Todas las rutas se sirven bajo `/DefinitivePkm/` por defecto.

## Actualizar la información

- Productos y textos: `src/data/products.ts`.
- La versión destacada del Randomizer está fijada a `v0.8.0-preview.1`; para cambiarla, actualizar `featuredVersion` en los productos y `featuredTag` en el script de sincronización.
- Metadatos y contadores de GitHub: `npm run sync:releases`.
- Ocho capturas originales aportadas por el propietario: `src/assets/`; Astro genera las versiones optimizadas. Las páginas de producto incluyen galerías ampliables.
- Colores, tipografía y responsive: `src/styles/global.css`.

Las estadísticas cuentan ZIP oficiales, incluidas previews. Cada cifra conserva la fecha real de consulta. No son usuarios únicos. El script mantiene el resumen anterior si GitHub no responde.

## GitHub Pages

Configurado para `https://joanjuz.github.io/DefinitivePkm/`. El workflow de `.github/workflows/pages.yml` **solo se ejecuta manualmente**. No se publica al instalar, compilar o hacer push.

Cuando se autorice la publicación: seleccionar GitHub Actions en Settings → Pages y ejecutar el workflow. Para un dominio propio o cambio de nombre, ajustar `SITE_URL` y `BASE_PATH` en la configuración de compilación. No se ha configurado un dominio personalizado.

## Analítica privada opcional

No se recopilan visitas mientras `PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` esté vacío. Para habilitar Cloudflare Web Analytics, usar el identificador público del beacon de una propiedad creada en la cuenta del administrador. En local se configura en `.env`; en Actions, como variable de repositorio con el mismo nombre. **Nunca introducir un token API de cuenta.** Las visitas solo aparecen en el panel privado del proveedor.

## Referencias

- [Definitive Randomizer](https://github.com/joanjuz/Definitive-Randomizer)
- [Pokémon Tracker Progressive](https://github.com/joanjuz/NuzlockeTracker)
- [GitHub de joanjuz](https://github.com/joanjuz)
- [Ko-fi](https://ko-fi.com/joanjuz)

Decisiones, fuentes y procedencia de las capturas: [docs/DECISIONES.md](docs/DECISIONES.md).
