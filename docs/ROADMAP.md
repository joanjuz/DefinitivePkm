# Roadmap maestro — PokeJuz

Actualizado: **2026-11-06, America/Guatemala**, tras publicar `v0.15.0-preview.1`. Documento estratégico vivo; las prioridades no implican fechas comprometidas. Esta actualización factual se prepara para revisión y no autoriza releases, merges ni despliegues adicionales.

Este es el único roadmap maestro del ecosistema. [VISION.md](VISION.md) define el propósito; [DECISIONES.md](DECISIONES.md) conserva las decisiones de producto/web y [COMMUNITY.md](COMMUNITY.md), los compromisos con la comunidad. Los repositorios de cada aplicación mantienen código, incidencias, contratos técnicos y resultados de pruebas. Los objetivos originales se conservan; una propuesta solo pasa a «en desarrollo» al aceptar su alcance y criterios.

## Estado inmediato

| Iniciativa | Estado comprobado | Siguiente paso real |
| --- | --- | --- |
| Definitive Randomizer `0.14.0-preview.3` | **Publicada** como pre-release, con ZIP y `SHA256SUMS.txt`; tag en `9f7b5a2` | Retirar la tarea histórica de generar ese paquete. No regenerar ni publicar otra versión por esta actualización |
| Definitive Randomizer `0.15.0-preview.1` | **Publicada como prerelease**, tag en `462291e9f3adcc0cbc20a710bc23977af1a5af5b`; ZIP y cuatro documentos/manifiesto descargados y cotejados con los originales aprobados | Mantener la clasificación preliminar. No publicar otra versión ni cambiar la descarga destacada por esta actualización documental |
| Definitive Game Data v1 USUM | **Implementado y publicado**: exportador Randomizer PR #47, importador por partida Tracker PR #20; Randomizer `0.14.0-preview.4` y Tracker `1.3.0` | Conservar contrato y límites; ampliar familias solo en entregas propias. Ya no es el siguiente bloque por implementar |
| Mentas Gen7 USUM | **Fases 1, 1.1 y 2 integradas y publicadas** en `0.15.0-preview.1` mediante PR #50/#52/#53 | Confirmación del propietario en emulador para Ultra Sol; sin prueba jugable equivalente acreditada en Ultra Luna. No ampliar a Sol/Luna ni Gen6 |
| Editor de eventos DS, fase 1 | **Implementación en revisión**, [Randomizer PR #55](https://github.com/joanjuz/Definitive-Randomizer/pull/55), perfil inicial Platino `CPUE/1` | Lectura y edición acotada de NPC, checkpoints y restauración; sin integración/publicación ni prueba jugable declaradas. El propietario realizará la prueba manual |
| Corrección H1 de Undo / templates | **Integrada y distribuida en Preview 3**: las operaciones deshechas dejan de exportarse como vigentes | Conservar regresiones existentes; no volver a implementarla |
| Seguridad de transacciones H2/H3 | **Correcciones integradas**, PR #45; reproducción determinista PR #44. Retención por handle, recuperación y guardados individuales cubiertos | Ya no es «investigación posterior». Mantener límites declarados y cerrar evidencia representativa pendiente, sin certificar todos los sistemas de archivos ni cortes físicos |
| Botón Deshacer tras verificar historial | **PR #46 integrado** en `main` (`d530b7e`), CI aprobado y validación manual confirmada por el propietario | Cerrado como desarrollo. No atribuirlo al ZIP de Preview 3, cuyo tag es anterior |
| Primera versión estable WPF del Randomizer | **Objetivo prioritario, pendiente**. La estable WinForms v4.17.1 es otra línea | Aceptación acotada del alcance anunciado, compatibilidad, recuperación e instalación; publicar solo con autorización |
| Progressive Tracker | **v1.3.0 estable publicada**, incluida importación DGD v1 por partida USUM; conserva la base de v1.2.0 | Priorizar incompatibilidades reproducibles; no duplicar importadores, perfiles, recuperación o presets existentes. Sin cambios de código Tracker en esta entrega |
| PokeJuz como centro del ecosistema | Visión/roadmap/comunidad documentados; web implementada con publicación previa autorizada registrada | Mantener la planificación aquí. Esta tarea no despliega la web ni cambia la descarga destacada fijada por el propietario |

**Distribución y código son estados distintos.** H2/H3 y #46 son posteriores al tag de Preview 3. No se presentan como disponibles en ese paquete ni se utiliza la existencia de una release como prueba de todos sus escenarios jugables.

Fuentes de cierre: [Preview 3](https://github.com/joanjuz/Definitive-Randomizer/releases/tag/v0.14.0-preview.3), [PR #40/H1](https://github.com/joanjuz/Definitive-Randomizer/pull/40), [PR #42, auditoría histórica sin cambios de producción](https://github.com/joanjuz/Definitive-Randomizer/pull/42), [PR #44](https://github.com/joanjuz/Definitive-Randomizer/pull/44), [PR #45](https://github.com/joanjuz/Definitive-Randomizer/pull/45), [PR #46](https://github.com/joanjuz/Definitive-Randomizer/pull/46), [CI #46](https://github.com/joanjuz/Definitive-Randomizer/actions/runs/42019211637) y [Tracker v1.2.0](https://github.com/joanjuz/NuzlockeTracker/releases/tag/v1.2.0).

## Definitive Randomizer

### Base funcional ya implementada

- **3DS:** edición/randomización de Pokémon, movimientos, aprendizajes, evoluciones, entrenadores, encuentros, objetos y tiendas; instalaciones de combate, Global Template, Batch, extracción/rebuild y herramientas específicas según X/Y, ORAS, Sol/Luna y USUM. No se presupone paridad de parches entre familias. El balance/mecánicas Progressive está excluido de Sol/Luna por decisión del propietario.
- **DS:** fases 0–14 implementadas y confirmadas en juego por el propietario el 31/10/2026: entrenadores, encuentros, iniciales, objetos/tiendas, datos, evoluciones, estáticos/intercambios, movimientos huevo/tutores, ajustes, Global y Batch. Hay seis perfiles exactos: Diamante `ADAE/5`, Platino `CPUE/1`, HeartGold `IPKE/0`, Negro `IRBO/0`, Blanco ES `IRAS/0` y Blanco 2 `IRDO/0`. Las mejoras posteriores de interfaz/reglas/Level Up tienen evidencia y límites propios; no heredan automáticamente toda la validación jugable anterior.
- **Switch:** Espada y Escudo 1.3.2 ya tienen editores de datos, entrenadores, encuentros, objetos, tiendas, movimientos/Level Up/evoluciones, compatibilidad MT/TR/tutores, Global/Batch de mods y runtime/caps propios por título. No siguen pendientes por aparecer así en una hoja histórica. No se declaran partida completa, hardware/Atmosphère ni soporte completo de DLC.
- **Historial y seguridad:** historial legible, exportación, restauración/deshacer 3DS y correcciones H1/H2/H3/#46 implementadas. No se extrapola automáticamente el contrato de restauración 3DS a DS/Switch.
- **DGD v1 y mentas USUM:** exportación/importación de datos aplicados ya distribuida; mentas funcionales, iconos opcionales locales, distribución y Global/Batch ya distribuidos. Las mentas cambian la naturaleza real y no se instalan automáticamente durante replay. Los iconos oficiales no vienen empaquetados.

El detalle y las diferencias por familia permanecen en el [índice técnico del Randomizer](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/INDICE.md), no en una matriz estratégica duplicada.

### Corto plazo: estabilidad con un cierre finito

- Conservar como completadas Preview 3, H1 y las correcciones integradas H2/H3/#46. No reabrir investigación genérica de concurrencia, rollback o historial sin un defecto nuevo.
- Cerrar únicamente las evidencias faltantes del alcance estable: un ciclo representativo real de guardar/deshacer/reabrir/rebuild para las rutas transaccionales recientes y una cobertura de exportación DS proporcional a cambios nuevos. Aprovechar resultados existentes; no repetir toda la matriz por rutina.
- Documentar compatibilidad real por juego/revisión, fuentes de evidencia y limitaciones; declarar estable un alcance concreto en lugar de esperar soporte de todas las funciones futuras.
- Atender como bloqueador cualquier pérdida/corrupción reproducible. El cuelgue USUM de pétalos puede bloquear historia, pero sigue sin reproducción ni causa determinada; reabrirlo con evidencia nueva, sin detener todo el desarrollo. El primer combate de Paul tiene protección; los dobles Switch posteriores siguen sin guard runtime para un solo Pokémon utilizable y conservan 0 % por defecto. El movimiento Z del primer Tilo es diagnóstico localizado, no un bloqueo global demostrado.

### Funciones nuevas y prioridades propuestas

| Objetivo original o ampliación | Estado y resultado esperado | Prioridad y dependencias |
| --- | --- | --- |
| **Mentas Gen 7** | **Completado el alcance USUM publicado:** 21 objetos funcionales, instalación/historial/deshacer, iconos opcionales, tiendas normales/BP, EI/EB y Pickup, Global Template y Batch | PR #50/#52/#53 y release `0.15.0-preview.1`; prueba satisfactoria del propietario en Ultra Sol. Ultra Luna conserva evidencia automatizada, no prueba jugable equivalente. Regalos/recompensas y pools de objetos equipados no se anuncian como implementados |
| **Caramelos raros y repelentes** | Conservar el objetivo de entrega inicial, NPC o consumo no decreciente. Los editores/presets existentes permiten configurar inventarios, pero no demuestran un suministro inicial ni consumo infinito | Media; definir primero una modalidad. Distinguir 999 unidades de «infinito»; si cambia consumo requiere parche y prueba jugable propia |
| **Randomización DS avanzada** | Base existente conservada; bloque actual delimitado al editor de eventos CPUE/1 con consulta técnica de DSPRE | Misma prioridad alta. Nuevos perfiles Negro 2/SoulSilver/Perla y otras capacidades siguen pendientes; esta fase no amplía juegos ni inicia una auditoría general |
| **Editor de eventos DS** | **Fase 1 en revisión:** Platino CPUE/1, mapas y eventos, edición X/Y/dirección de NPC, checkpoints persistentes y restauración; objetos de fondo, warps y scripts en consulta | Alta y habilitador del mapa visual. Sin prueba jugable declarada ni merge autorizado; añadir/eliminar NPC, editar destinos, scripts completos y geometría quedan para fases posteriores. No equivale a Field Items ni a paridad completa con DSPRE |
| **Editor visual de mapas DS** | Objetivo de largo plazo, sin implementación acreditada. Vista espacial con selección/edición de eventos y después geometría/colisiones conforme se validen | Depende del editor de eventos, referencias de mapa, recursos y guardado reversible; facilidad de uso superior al flujo con múltiples herramientas |
| **Mentas Gen 6** | Investigación posterior, no implementadas | Después de Gen7 y con diseño específico; no trasladar offsets, código ni conclusiones |
| **Paridad de aprendizajes Switch** | MT/TR y Level Up ya implementados; faltan movimientos huevo y Sanity/Follow de compatibilidad. Sigue pendiente guard runtime de dobles y ampliar cronología específica de Escudo | Candidatos técnicos posteriores; no sustituyen mentas, eventos, mapas ni integración Tracker en la visión maestra |

## Progressive Tracker

### Avances que no deben volver a planificarse como nuevos

- Distribución Windows estable v1.2.0; perfiles de partida aislados y dos ventanas, recuperación de sesión, Soul Link Companion y conexión directa.
- Importación local de CSV pk3DS para movimientos, estadísticas base y evoluciones; actualización de referencias informativas y persistencia por perfil. Los CSV describen configuración deseada y no certifican lo aplicado a la ROM.
- Catálogo JSON local con metadatos modificados; el validador actual está limitado a `Ultra Moon 1.0`. No equivale al contrato Definitive Game Data.
- OBS con presets fijados por fuente, estilos de muerte/animación, marcos, capas de datos/estadísticas y copia de configuración. Su implementación no acredita toda escena real de OBS.

### Trabajo realmente pendiente

- Fiabilidad y compatibilidad por emulador, juego, revisión y ROM hack; mantener una lista de combinaciones verificadas. Perfiles de memoria para X/Y/ORAS/USUM 1.0 no implican soporte de Sol/Luna, DS o Switch. Lime3DS tiene evidencia básica de los seis títulos; la confirmación del propietario de Azahar conserva su alcance, sin inventar una matriz completa.
- Descubrimiento de procesos y mensajes de error más claros cuando haya un caso reproducible, siempre con lectura de RAM, sin escritura.
- Mejorar OBS y recuperación de sesiones ante necesidades demostradas, reutilizando las funciones existentes.
- Mantener la importación **Definitive Game Data v1 ya publicada**, sin sustituir lecturas RAM ni requerir instalar/ejecutar el Randomizer para usar Tracker. Ampliaciones del contrato o de familias se delimitarán por separado.

Referencias: [arquitectura de código de Tracker](https://github.com/joanjuz/NuzlockeTracker/tree/master/tracker), [CSV y sesiones](https://github.com/joanjuz/NuzlockeTracker/blob/master/docs/PK3DS_TEMPLATES_SESIONES.md) y [notas v1.2.0](https://github.com/joanjuz/NuzlockeTracker/blob/master/docs/releases/v1.2.0.md).

## Interoperabilidad: Definitive Game Data

**DGD v1 para USUM está implementado, integrado y publicado**, no pendiente de empezar. El exportador del Randomizer (PR #47) y el importador por partida del Tracker (PR #20) se entregaron en Randomizer `v0.14.0-preview.4` y Tracker `v1.3.0`; se conservan en Randomizer `v0.15.0-preview.1`.

- Exporta el estado realmente guardado de especies/formas, estadísticas base, tipos, habilidades, propiedades básicas de movimientos y evoluciones. No exporta casillas pendientes ni reconstruye el resultado desde el historial; refleja deshacer y archivos vigentes.
- El JSON se valida y persiste por partida en Tracker; se puede reemplazar o retirar. No sustituye naturaleza, estadísticas vivas ni otras lecturas RAM. Las aplicaciones siguen siendo independientes.
- La revisión instalada no se deduce de una extracción: revisión desconocida queda explícita y requiere aceptación del consumidor. El fingerprint de datos no certifica por sí solo la ROM que ejecuta el emulador.
- El contrato no incluye ROMs, gráficos, efectos avanzados de movimientos, parches de combate ni nuevas lecturas de RAM DS/Switch. Se mantienen límites de identidad, formas y precedencia con referencias/CSV. No se amplía el alcance por publicar esta actualización.
- Hay evidencia de compilación, validación de esquema, exportación C# e importación Python, persistencia, aislamiento y retirada; la confirmación manual del propietario está documentada en las notas de la entrega. No se presenta como una nueva prueba ejecutada para este roadmap.

Fuentes: [Randomizer PR #47](https://github.com/joanjuz/Definitive-Randomizer/pull/47), [Tracker PR #20](https://github.com/joanjuz/NuzlockeTracker/pull/20), [Randomizer v0.14.0-preview.4](https://github.com/joanjuz/Definitive-Randomizer/releases/tag/v0.14.0-preview.4), [Tracker v1.3.0](https://github.com/joanjuz/NuzlockeTracker/releases/tag/v1.3.0) y [contrato v1](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/contracts/DEFINITIVE_GAME_DATA_V1.md).

Ampliar el contrato a otras familias o propiedades sigue siendo trabajo futuro con productor/consumidor compatibles. No se reabre el MVP completado ni se cambian las prioridades estratégicas de perfiles, mapas o Hub.

### Mentas Gen7: cierre publicado

Las fases 1, 1.1 y 2 están integradas por [PR #50](https://github.com/joanjuz/Definitive-Randomizer/pull/50), [PR #52](https://github.com/joanjuz/Definitive-Randomizer/pull/52) y [PR #53](https://github.com/joanjuz/Definitive-Randomizer/pull/53), y publicadas en [v0.15.0-preview.1](https://github.com/joanjuz/Definitive-Randomizer/releases/tag/v0.15.0-preview.1), commit `462291e9f3adcc0cbc20a710bc23977af1a5af5b`. El paquete y sus cinco assets se descargaron y cotejaron con los originales aprobados durante la publicación.

El propietario confirmó las mentas, iconos, distribución, Global Template, Batch Builder y ROM generada en el emulador en **Ultra Sol**. No se acredita una prueba jugable equivalente en **Ultra Luna**, todos los casos manuales, Sol/Luna ni Gen6. Los iconos son una descarga opcional local desde PokéAPI y no se empaquetan. Las mentas cambian la naturaleza real. [Documentación de fase 2 y límites](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/MENTAS_GEN7_USUM_FASE2.md).

## Perfiles y Definitive Hub

**Estado:** objetivo preservado; Global Template/Batch y perfiles de partida de Tracker son bases parciales, no un perfil transversal ni Hub implementado.

1. Exportar un **perfil local** desde cambios de un proyecto, con dependencias, autoría, revisión y procedencia. Usar los contratos técnicos existentes sin mezclar recetas 3DS/DS/Switch.
2. Importar, previsualizar diferencias y aplicar solo secciones compatibles, con historial y deshacer donde esté soportado; definir reversibilidad antes de anunciarla en otra plataforma.
3. Investigar perfiles de ROM hacks populares, inicialmente DS y trabajos de Drayano, indicando cobertura y limitaciones reales. Licencias/permisos de datos y parches son dependencias, no tareas completadas por investigar el formato.
4. Combinar perfiles con reglas explícitas de prioridad y conflictos; no decidir sobrescrituras silenciosas.
5. Biblioteca comunitaria en línea **solo después** del formato/importación local y de la política de contenidos. Definitive Hub permanece concepto; no requiere construir cuentas, backend ni alojar contenidos ahora.
6. Futuro **paquete de desafío** para Randomizer y Tracker, sin ROMs, apoyado en DGD y perfiles versionados.

## Orden de ejecución propuesto

| Fase | Resultado | Dependencias / salida |
| --- | --- | --- |
| 0 · cierre actual | Preview 3 reconocida como publicada; H1/H2/H3/#46 con estado correcto; #46 ya integrado | Hecho como cierre administrativo; no nueva release |
| 1 · interoperabilidad | **DGD v1 USUM completado y publicado** | Randomizer PR #47 / release `0.14.0-preview.4`; Tracker PR #20 / release `1.3.0`. Ampliaciones no incluidas siguen pendientes |
| 2 · capacidad jugable | **Mentas Gen7 USUM completadas y publicadas** | PR #50/#52/#53 / release `0.15.0-preview.1`. Confirmación jugable del propietario solo en Ultra Sol; no extenderla a Ultra Luna |
| 3 · DS avanzado | **En curso: editor de eventos fase 1, Platino CPUE/1** | Entrega acotada, reversible y revisable; prueba del propietario pendiente. No portar offsets entre títulos. Editor reversible habilita mapa visual posterior |
| 4 · perfiles locales | Exportar/importar/comparar y resolver conflictos de perfiles | DGD más recetas/dependencias/versiones; validación local antes de Hub |
| 5 · expansión | Editor visual de mapas DS; biblioteca Hub; paquete de desafío | Eventos y recursos de mapa para el primero; perfiles y política comunitaria para los otros. Entregas separadas, sin abrirlas simultáneamente |

La **versión estable sigue siendo prioritaria** como aceptación del alcance actual: se cierra en el siguiente punto de integración que satisfaga los criterios, sin esperar a mentas, mapas o Hub y sin publicar sin autorización. Caramelos/repelentes, mentas Gen6 y paridad Switch permanecen en la cartera; ordenarlos por demanda y dependencias al terminar un bloque. No se eliminan por carecer aún de fecha.

## Comunidad y sostenibilidad

- YouTube **en español**: demostraciones útiles, tutoriales y diarios de desarrollo; Shorts derivados, sin prometer calendario rígido. Reservar la campaña principal para una estable.
- Donaciones completamente voluntarias (Ko-fi y posible GitHub Sponsors).
- Software gratuito, sin anuncios intrusivos ni funciones esenciales de pago.
- Sugerencias y problemas mediante repositorios/Discussions; medir descargas y participación sin telemetría invasiva y sin confundir descargas con usuarios únicos.
- Respetar autoría/licencias y no compartir ROMs, partidas ajenas ni recursos extraídos. La política completa permanece en [COMMUNITY.md](COMMUNITY.md).

## Criterios para pasar a versión estable

- Instalación y ejecución limpias desde ZIP oficial; versión y SHA comprobables. La futura publicación es una acción distinta que requiere autorización.
- Regresiones CI y pruebas funcionales representativas por juego dentro del alcance declarado, reutilizando evidencia vigente.
- Restauración y fallos de guardado manejados sin pérdida silenciosa; revisar los límites reales de la solución, sin exigir protección imposible frente a todo fallo físico.
- Matriz de compatibilidad y limitaciones explícitas, incluido el estado de incidencias de historia y modos experimentales.
- Manual breve para principiantes, copias de seguridad y reportes de errores.
- Sin bloqueadores conocidos de pérdida/corrupción dentro del alcance anunciado. Un fallo crítico reproducido se corrige antes de declarar estable; un objetivo futuro no bloquea indefinidamente la estabilidad actual.

## Gestión y pruebas proporcionales

Las ideas permanecen aquí hasta convertirse en propuestas delimitadas. Cada aplicación conserva sus issues/PR y documentación técnica; PokeJuz mantiene decisiones transversales. Revisar este documento cuando haya hitos reales, evitando matrices e informes duplicados.

- Rama/PR por entrega funcional; no implementar tres módulos simultáneamente.
- Durante desarrollo: compilación y pruebas específicas. Antes de integrar un bloque importante: una pasada completa de las suites requeridas sobre el SHA final, aprovechando el CI y sin duplicarla por rutina. Repetir después solo lo justificado por nuevos cambios o fallos.
- Mantener rigor para escrituras binarias, transacciones, reconstrucción y compatibilidad: roundtrip, bytes ajenos, rechazos, recuperación, fuentes intactas y replay.
- Automatización suficiente para formularios/contratos de bajo riesgo. Pruebas manuales focalizadas para runtime, persistencia o comportamiento no demostrable por automatización; no exigir campañas generales por retoques pequeños.
- No publicar releases ni desplegar web/Worker como efecto lateral de documentación o merge. La descarga destacada fijada en DECISIONES no se cambia automáticamente.

Esta actualización corrige el estado de DGD v1 y mentas con PR, releases y validaciones documentadas, e identifica la fase 1 del editor de eventos DS como implementación en revisión. No modifica prioridades ajenas, código de Tracker, la web ni la descarga destacada. Las pruebas del módulo DS pertenecen a su PR; no se declaran aquí pruebas jugables nuevas ni un merge, release o despliegue adicional.
