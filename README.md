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
npm test
npm run build
npm run preview
```

## Páginas

- `/`: presentación de ambos productos y estadísticas de descargas.
- `/definitive-randomizer/`: estable WPF gratuita, comparación con 1.1 Preview, Mega Ability Sync, compatibilidad y descarga verificada.
- `/pokemon-tracker-progressive/`: funciones, compatibilidad e instrucciones.
- `/privacidad/`: tratamiento de analítica y servicios externos.

Todas las rutas se sirven bajo `/DefinitivePkm/` por defecto.

## Actualizar la información

- Productos y textos: `src/data/products.ts`.
- La descarga principal selecciona estables WPF v1.x por versión numérica, con ZIP oficial publicado. WinForms v4.x y previews antiguas solo participan en el contador histórico. La etiqueta v1.0.0 debe resolver al commit aprobado. La preview enlaza a la página general de Ko-fi, sin suponer una descarga publicada.
- Metadatos y contadores de GitHub: `npm run sync:releases`.
- Ocho capturas originales aportadas por el propietario: `src/assets/`; Astro genera las versiones optimizadas. Las páginas de producto incluyen galerías ampliables.
- Colores, tipografía y responsive: `src/styles/global.css`.

Las estadísticas cuentan ZIP oficiales, incluidas previews. Cada cifra conserva la fecha real de consulta. No son usuarios únicos. El script mantiene el resumen anterior si GitHub no responde.

## GitHub Pages

Configurado para `https://joanjuz.github.io/DefinitivePkm/`. El workflow de `.github/workflows/pages.yml` **solo se ejecuta manualmente**. No se publica al instalar, compilar o hacer push.

Cuando se autorice la publicación: seleccionar GitHub Actions en Settings → Pages y ejecutar el workflow. Para un dominio propio o cambio de nombre, ajustar `SITE_URL` y `BASE_PATH` en la configuración de compilación. No se ha configurado un dominio personalizado.

El workflow ejecuta `npm test`, `npm run check` y `npm run build:pages`. Esta última orden exige una consulta nueva de GitHub y una estable WPF publicada; bloquea el despliegue si falla la consulta o falta la estable. `npm run build` permite revisar el estado pendiente y conserva contadores verificados ante errores. El workflow de PR comprueba pruebas, tipos y compilación sin publicar.

Evidencias del lanzamiento: [docs/validation/v1.0.0/README.md](docs/validation/v1.0.0/README.md).

## Analítica privada opcional

No se recopilan visitas mientras `PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` esté vacío. Para habilitar Cloudflare Web Analytics, usar el identificador público del beacon de una propiedad creada en la cuenta del administrador. En local se configura en `.env`; en Actions, como variable de repositorio con el mismo nombre. **Nunca introducir un token API de cuenta.** Las visitas solo aparecen en el panel privado del proveedor.

## Referencias

- [Definitive Randomizer](https://github.com/joanjuz/Definitive-Randomizer)
- [Pokémon Tracker Progressive](https://github.com/joanjuz/NuzlockeTracker)
- [GitHub de joanjuz](https://github.com/joanjuz)
- [Ko-fi](https://ko-fi.com/joanjuz)

Decisiones, fuentes y procedencia de las capturas: [docs/DECISIONES.md](docs/DECISIONES.md).
