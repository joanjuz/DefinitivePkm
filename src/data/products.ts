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
  sourceCommit?: string;
}
export interface ReleaseSummary {
  repositoryUrl: string;
  releasesUrl: string;
  checkedAt: string;
  stable: Release | null;
  preview: Release | null;
  schemaVersion?: number;
  family?: string;
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
    category: 'Edición y randomización · Nintendo 3DS, DS y Switch',
    description: 'Edita y randomiza Pokémon en Nintendo 3DS, DS y Switch. Configura la progresión, guarda plantillas y genera proyectos con la nueva interfaz WPF.',
    compatibility: 'Juegos y revisiones concretas. Las funciones disponibles dependen de cada plataforma.',
    features: [
      'Edición de estadísticas, tipos y habilidades.',
      'Randomización de equipos de entrenadores y encuentros salvajes.',
      'Plantillas reutilizables y generación por lotes con Batch ROM Builder.',
      'Límites de nivel para jugadores y entrenadores.',
      'Progressive BST para configurar la progresión de los encuentros.',
      'Mentas y Player Level Caps en Ultra Sol y Ultra Luna compatibles.',
      'Proyectos persistentes de Nintendo DS y exportación de mods de Espada/Escudo 1.3.2.',
    ],
    requirements: ['Windows x64. La guía oficial no concreta una versión mínima de Windows.', 'Una copia propia de un juego y revisión admitidos: extracción ya descifrada en 3DS, archivo .nds en DS o extracción 1.3.2 en Espada/Escudo.', 'El ZIP incluye .NET y las dependencias; conserva todas sus carpetas. No incluye ni descarga juegos.'],
    games: 'Consulta la compatibilidad por plataforma más abajo antes de preparar tu proyecto. Las pruebas con archivos y las pruebas dentro del juego tienen alcances distintos.',
    steps: ['Descarga el ZIP de la versión estable indicada en esta página y comprueba el SHA-256 con SHA256SUMS.txt.', 'Extrae el ZIP completo en una carpeta nueva, sin copiarlo sobre una versión anterior. Conserva las DLL y todas las carpetas incluidas.', 'Abre DefinitiveRandomizer.exe. En «Abrir proyecto…», selecciona el archivo .nds o la carpeta extraída de 3DS o Switch.', 'Trabaja con copias y respalda proyectos y partidas. Guarda antes de reconstruir la ROM de 3DS, exportar una ROM nueva de DS o generar el mod de Switch.'],
    note: 'La estable es la opción recomendada para la mayoría de usuarios. El balance Eris-Ultranova es opcional y no se activa automáticamente. Las capturas conservadas corresponden a una preview anterior; no muestran las novedades de 1.1.',
    image: randomizerImage,
    imageAlt: 'Definitive Randomizer v0.8.0-preview.1 con Bulbasaur seleccionado, estadísticas base, tipos e inspector del editor.',
    imageCaption: 'Captura histórica · v0.8.0-preview.1 · Editor con proyecto cargado',
    gallery: [{
      title: 'Editor al iniciar',
      image: randomizerStart,
      alt: 'Definitive Randomizer al iniciar: navegación lateral de editores, formulario de Pokémon e inspector, sin proyecto cargado.',
      caption: 'Captura histórica · v0.8.0-preview.1 · Editor antes de abrir un proyecto',
    }],
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
      'Importación de Definitive Game Data de Ultra Sol/Ultra Luna por partida.',
      'Etapas y límites de nivel manuales con avisos informativos, sin modificar la partida.',
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
    release: releases.tracker,
  },
] as const;

export type Product = (typeof products)[number];
export function primaryRelease(product: Product): Release | null {
  const { stable, schemaVersion, family } = product.release;
  if (!stable || stable.prerelease || schemaVersion !== 2) return null;
  if (product.id === 'randomizer' && (family !== 'wpf-v1' || !/^v1\.\d+\.\d+$/.test(stable.version))) return null;
  return stable;
}
export function sitePath(path = ''): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
export function formatDate(value: string): string {
  return new Intl.DateTimeFormat('es-GT', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'America/Guatemala' }).format(new Date(value));
}
