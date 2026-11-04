# Roadmap maestro — PokeJuz

Actualizado: **2026-11-04**. Documento estratégico vivo; las prioridades no implican fechas comprometidas.

## Estado inmediato

| Iniciativa | Estado | Criterio para avanzar |
| --- | --- | --- |
| Definitive Randomizer `0.14.0-preview.3` | Paquete final pendiente de generar y verificar | SHA del commit, manifiesto SHA-256, ejecutables, arranque y comprobaciones finales |
| Corrección H1 de Undo / templates | Integrada en main | Incluida en la siguiente distribución validada |
| Seguridad de transacciones H2/H3 | Investigación posterior | Reproducción determinista y solución sin sobrescribir datos externos |
| Primera versión estable del Randomizer | Objetivo prioritario, sin fecha | Matriz de juegos, pruebas funcionales, recuperación, instalación y documentación |
| Progressive Tracker | Disponible; evolución enfocada en compatibilidad | Pruebas por emulador/juego/revisión y diagnósticos claros |
| PokeJuz como centro del ecosistema | Planificación | Roadmap y visión documentados; publicación web sujeta a revisión |

## Definitive Randomizer

### Corto plazo
- Completar preview 3 y preparar condiciones comprobables de estabilidad.
- Revisar concurrencia, rollback, recuperación y exportación DS.
- Documentar compatibilidad real por juego y revisión.

### Funciones nuevas
- **Mentas Gen 7:** estudiar el trabajo de terceros en `pk3DS But Mostly for USUM`, licencia y compatibilidad; modelarlas como objetos normales que puedan aparecer en tiendas, field items, regalos y randomizadores después de aplicar el parche.
- **Caramelos raros y repelentes:** investigar entrega inicial, NPC o consumo no decreciente, diferenciando 999 unidades de «infinito».
- **Randomización DS avanzada:** comparar sistemáticamente capacidades y controles con DSPRE; priorizar mejoras de entrenadores, encuentros, objetos y eventos.
- **Editor de eventos DS:** añadir/editar NPC, objetos, warps y scripts con validación y guardado reversible.
- **Editor visual de mapas DS:** objetivo de largo plazo, después del editor de eventos, empezando por DS; facilidad de uso superior al flujo manual con múltiples aplicaciones.
- **Mentas Gen 6:** investigación posterior, no asumir portabilidad de Gen 7.

## Progressive Tracker

- Priorizar fiabilidad y compatibilidad con emuladores, revisiones y ROM hacks; registrar combinaciones verificadas.
- Mejorar descubrimiento de procesos y mensajes de error sin acceso de escritura a memoria.
- Simplificar configuración de OBS y recuperación de sesiones sin duplicar funciones ya existentes.
- Leer un **formato de datos de juego versionado** exportado por Definitive Randomizer, manteniendo funcionamiento independiente.

## Interoperabilidad: Definitive Game Data

Contrato propuesto, aún no implementado:
- `schemaVersion` y versiones de productores/consumidores.
- Juego base, región/revisión y fingerprints/identificadores compatibles.
- Tablas normalizadas de especies, tipos, movimientos, evoluciones y estadísticas modificadas.
- Validación, documentación, compatibilidad hacia atrás y lectura sin modificar ROM ni partida.
- Extensiones futuras para reglas de desafíos y metadatos de perfiles.

## Perfiles y Definitive Hub

1. Exportar un **perfil local** desde cambios de un proyecto (con dependencias y revisión).
2. Importar, previsualizar diferencias y aplicar solo secciones compatibles, con historial y deshacer.
3. Investigar perfiles de ROM hacks populares, inicialmente DS y los trabajos de Drayano, indicando cobertura y limitaciones reales; los datos y parches de terceros requieren licencias/permisos adecuados.
4. Permitir combinar perfiles con reglas explícitas de prioridad y conflictos.
5. Biblioteca comunitaria en línea, solo después de validar el formato, la importación local y la política de contenidos.
6. Futuro **paquete de desafío** compatible con Randomizer y Tracker, sin ROMs.

## Comunidad y sostenibilidad

- YouTube **en español**: demostraciones útiles, tutoriales y diarios de desarrollo; Shorts derivados, sin prometer calendario rígido.
- Donaciones completamente voluntarias (Ko-fi y posible GitHub Sponsors).
- Software gratuito, sin anuncios intrusivos ni funciones esenciales de pago.
- Recoger sugerencias y problemas mediante repositorios/Discussions; medir descargas y participación sin telemetría invasiva.

## Criterios para pasar a versión estable

- Instalación y ejecución limpias desde ZIP oficial; versión y SHA comprobables.
- Regresiones CI y pruebas manuales representativas por juego.
- Restauración y fallos de guardado manejados sin pérdida silenciosa de datos.
- Matriz de compatibilidad y limitaciones explícitas.
- Manual breve para principiantes, copias de seguridad y reportes de errores.
- Sin bloqueadores conocidos de pérdida/corrupción de datos dentro del alcance anunciado.

## Gestión

Las ideas permanecen aquí hasta que se conviertan en propuestas delimitadas. Cada aplicación mantiene sus issues/PR propios. PokeJuz conserva decisiones transversales. Revisar trimestral o mensualmente según avance, registrando cambios importantes y sin marcar una función como publicada hasta confirmar su release.
