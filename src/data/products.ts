import randomizerImage from '../assets/definitive-randomizer.png';
import trackerImage from '../assets/pokemon-tracker.png';
import randomizerStart from '../assets/randomizer-inicio.png';
import trackerBoxes from '../assets/tracker-cajas.png';
import trackerRoutes from '../assets/tracker-rutas.png';
import trackerAnalysis from '../assets/tracker-analisis.png';
import trackerObs from '../assets/tracker-obs.png';
import trackerConnection from '../assets/tracker-conexion.png';
import type { ImageMetadata } from 'astro';
import snapshot from './releases.json';

export interface Release {
  version: string;
  url: string;
  publishedAt: string;
  prerelease?: boolean;
  assets: { name: string; url: string }[];
}
export interface ReleaseSummary {
  repositoryUrl: string;
  releasesUrl: string;
  checkedAt: string;
  stable: Release | null;
  preview: Release | null;
  featured?: Release | null;
  totalDownloads: number;
  countedAssets: number;
}
const releases = snapshot as Record<string, ReleaseSummary>;

export interface ProductScreenshot {
  title: string;
  image: ImageMetadata;
  alt: string;
  caption: string;
}

export const products = [
  {
    id: 'randomizer',
    slug: 'definitive-randomizer',
    name: 'Definitive Randomizer',
    titleLines: ['Definitive', 'Randomizer'],
    category: 'Edición de juegos de Nintendo 3DS',
    description: 'Edita Pokémon, movimientos, entrenadores y encuentros. Configura la randomización y los límites de nivel para ajustar la progresión del juego.',
    compatibility: 'Las funciones Progressive se centran en Ultra Sol y Ultra Luna.',
    features: [
      'Edición de estadísticas, tipos y habilidades.',
      'Randomización de equipos de entrenadores y encuentros salvajes.',
      'Plantillas reutilizables y generación por lotes con Batch ROM Builder.',
      'Límites de nivel para jugadores y entrenadores.',
    ],
    requirements: ['Windows x64.', 'Archivos del juego extraídos a partir de tu propia copia.', 'La distribución incluye .NET; no requiere instalarlo por separado.'],
    games: 'X/Y, Rubí Omega/Zafiro Alfa, Sol/Luna y Ultra Sol/Ultra Luna. Las funciones disponibles dependen del juego y la versión.',
    steps: ['Descarga el ZIP de Definitive Randomizer v0.8.0-preview.1.', 'Extrae todo el contenido y conserva las carpetas y DLL junto al ejecutable.', 'Abre DefinitiveRandomizer.exe.', 'Abre una carpeta de juego extraído y configura los cambios. Conserva una copia original aparte.'],
    note: 'La descarga destacada es Definitive Randomizer v0.8.0-preview.1, con la interfaz que muestran estas capturas. Esta versión se distribuye como preview para pruebas.',
    image: randomizerImage,
    imageAlt: 'Definitive Randomizer v0.8.0-preview.1 con Bulbasaur seleccionado, estadísticas base, tipos e inspector del editor.',
    imageCaption: 'v0.8.0-preview.1 · Editor de Pokémon con proyecto cargado',
    gallery: [{
      title: 'Editor al iniciar',
      image: randomizerStart,
      alt: 'Definitive Randomizer al iniciar: navegación lateral de editores, formulario de Pokémon e inspector, sin proyecto cargado.',
      caption: 'v0.8.0-preview.1 · Editor antes de abrir un proyecto',
    }],
    featuredVersion: 'v0.8.0-preview.1',
    release: releases.randomizer,
  },
  {
    id: 'tracker',
    slug: 'pokemon-tracker-progressive',
    name: 'Pokémon Tracker Progressive',
    titleLines: ['Pokémon Tracker', 'Progressive'],
    category: 'Equipo y cajas en vivo',
    description: 'Consulta tu equipo y tus cajas en vivo desde Lime3DS o Azahar. Revisa movimientos y habilidades, y registra los Pokémon debilitados de la partida.',
    compatibility: 'Probado en Lime3DS y Azahar · Juegos compatibles en versión 1.0.',
    features: [
      'Lectura del equipo, las cajas y los PS desde el emulador.',
      'Estadísticas, movimientos, objetos y habilidades.',
      'Rutas, registro de Pokémon debilitados y Living Dex.',
      'Análisis ofensivo y defensivo del equipo.',
      'Diseño de overlays para OBS con sprites, motes y barras de vida.',
    ],
    requirements: ['Windows 10 u 11 de 64 bits.', 'Microsoft Edge WebView2 Runtime.', 'Lime3DS o Azahar y un juego compatible en versión 1.0 para la lectura en vivo.', 'El ejecutable incluye sus dependencias; no requiere Python ni Node.js.'],
    games: 'Juegos compatibles: X/Y, Rubí Omega/Zafiro Alfa y Ultra Sol/Ultra Luna 1.0. Lectura probada en Lime3DS y Azahar; la compatibilidad puede variar según el juego y la versión del emulador.',
    steps: ['Descarga y extrae PokemonTracker-Windows-x64.zip.', 'Abre PokemonTracker.exe.', 'Inicia el juego en Lime3DS o Azahar.', 'En Conexión, selecciona el juego y el proceso del emulador.'],
    note: 'Soul Link es opcional y requiere configuración adicional. Consulta las instrucciones del repositorio antes de vincular partidas; las funciones pueden variar según el juego.',
    image: trackerImage,
    imageAlt: 'Pokémon Tracker Progressive con el equipo de Ultra Sol, PS, estadísticas, habilidades, objetos y movimientos de la última sesión guardada.',
    imageCaption: 'Equipo actual · Última lectura guardada',
    gallery: [
      { title: 'Cajas', image: trackerBoxes, alt: 'Vista de cajas del Tracker con buscador de Pokémon, selector de caja y opción Living Dex.', caption: 'Cajas · Búsqueda y Living Dex' },
      { title: 'Rutas', image: trackerRoutes, alt: 'Registro de rutas de Alola con Pokémon por zona y controles para marcar fósiles, muertes e intercambios.', caption: 'Rutas · Historial de capturas por zona' },
      { title: 'Análisis', image: trackerAnalysis, alt: 'Tabla de análisis defensivo del equipo con efectividades, debilidades, resistencias e inmunidades.', caption: 'Análisis · Efectividad defensiva del equipo' },
      { title: 'OBS', image: trackerObs, alt: 'Editor de overlays de OBS con controles de composición, sprites, tipografía y barras de vida.', caption: 'OBS · Configuración del overlay del equipo' },
      { title: 'Conexión', image: trackerConnection, alt: 'Pantalla de conexión del Tracker con selector de juego, emulador y proceso, y sección de plantillas pk3DS Progressive.', caption: 'Conexión · Juego, emulador y proceso' },
    ],
    featuredVersion: null,
    release: releases.tracker,
  },
] as const;

export type Product = (typeof products)[number];
export function primaryRelease(product: Product): Release | null {
  const { stable, preview, featured } = product.release;
  if (product.featuredVersion) {
    const pinned = [featured, preview, stable].find(release => release?.version === product.featuredVersion);
    if (!pinned) throw new Error(`Faltan metadatos para la versión destacada ${product.featuredVersion}. Ejecuta npm run sync:releases.`);
    return pinned;
  }
  return stable ?? preview;
}
export function isPreview(product: Product, release: Release | null): boolean {
  return release?.prerelease ?? Boolean(release && release.version === product.release.preview?.version);
}
export function sitePath(path = ''): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
export function formatDate(value: string): string {
  return new Intl.DateTimeFormat('es-GT', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'America/Guatemala' }).format(new Date(value));
}
