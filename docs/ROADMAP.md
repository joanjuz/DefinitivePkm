# Roadmap maestro — PokeJuz

Actualizado: **2026-11-05, America/Guatemala**. Documento estratégico vivo; las prioridades no implican fechas comprometidas. Esta actualización es una **propuesta para revisión**, sin autorización de nuevas implementaciones, releases o despliegues.

Este es el único roadmap maestro del ecosistema. [VISION.md](VISION.md) define el propósito; [DECISIONES.md](DECISIONES.md) conserva las decisiones de producto/web y [COMMUNITY.md](COMMUNITY.md), los compromisos con la comunidad. Los repositorios de cada aplicación mantienen código, incidencias, contratos técnicos y resultados de pruebas. Los objetivos originales se conservan; una propuesta solo pasa a «en desarrollo» al aceptar su alcance y criterios.

## Estado inmediato

| Iniciativa | Estado comprobado | Siguiente paso real |
| --- | --- | --- |
| Definitive Randomizer `0.14.0-preview.3` | **Publicada** como pre-release, con ZIP y `SHA256SUMS.txt`; tag en `9f7b5a2` | Retirar la tarea histórica de generar ese paquete. No regenerar ni publicar otra versión por esta actualización |
| Corrección H1 de Undo / templates | **Integrada y distribuida en Preview 3**: las operaciones deshechas dejan de exportarse como vigentes | Conservar regresiones existentes; no volver a implementarla |
| Seguridad de transacciones H2/H3 | **Correcciones integradas**, PR #45; reproducción determinista PR #44. Retención por handle, recuperación y guardados individuales cubiertos | Ya no es «investigación posterior». Mantener límites declarados y cerrar evidencia representativa pendiente, sin certificar todos los sistemas de archivos ni cortes físicos |
| Botón Deshacer tras verificar historial | **PR #46 integrado** en `main` (`d530b7e`), CI aprobado y validación manual confirmada por el propietario | Cerrado como desarrollo. No atribuirlo al ZIP de Preview 3, cuyo tag es anterior |
| Primera versión estable WPF del Randomizer | **Objetivo prioritario, pendiente**. La estable WinForms v4.17.1 es otra línea | Aceptación acotada del alcance anunciado, compatibilidad, recuperación e instalación; publicar solo con autorización |
| Progressive Tracker | **v1.2.0 estable publicada**; lectura Gen6/USUM, perfiles de partida, Soul Link, importación informativa y OBS implementados | Priorizar incompatibilidades reproducibles y datos de juego modificados; no duplicar perfiles, recuperación de sesión ni presets OBS existentes |
| PokeJuz como centro del ecosistema | Visión/roadmap/comunidad documentados; web implementada con publicación previa autorizada registrada | Mantener la planificación aquí. Esta tarea no despliega la web ni cambia la descarga destacada fijada por el propietario |

**Distribución y código son estados distintos.** H2/H3 y #46 son posteriores al tag de Preview 3. No se presentan como disponibles en ese paquete ni se utiliza la existencia de una release como prueba de todos sus escenarios jugables.

Fuentes de cierre: [Preview 3](https://github.com/joanjuz/Definitive-Randomizer/releases/tag/v0.14.0-preview.3), [PR #40/H1](https://github.com/joanjuz/Definitive-Randomizer/pull/40), [PR #42, auditoría histórica sin cambios de producción](https://github.com/joanjuz/Definitive-Randomizer/pull/42), [PR #44](https://github.com/joanjuz/Definitive-Randomizer/pull/44), [PR #45](https://github.com/joanjuz/Definitive-Randomizer/pull/45), [PR #46](https://github.com/joanjuz/Definitive-Randomizer/pull/46), [CI #46](https://github.com/joanjuz/Definitive-Randomizer/actions/runs/42019211637) y [Tracker v1.2.0](https://github.com/joanjuz/NuzlockeTracker/releases/tag/v1.2.0).

## Definitive Randomizer

### Base funcional ya implementada

- **3DS:** edición/randomización de Pokémon, movimientos, aprendizajes, evoluciones, entrenadores, encuentros, objetos y tiendas; instalaciones de combate, Global Template, Batch, extracción/rebuild y herramientas específicas según X/Y, ORAS, Sol/Luna y USUM. No se presupone paridad de parches entre familias. El balance/mecánicas Progressive está excluido de Sol/Luna por decisión del propietario.
- **DS:** fases 0–14 implementadas y confirmadas en juego por el propietario el 31/10/2026: entrenadores, encuentros, iniciales, objetos/tiendas, datos, evoluciones, estáticos/intercambios, movimientos huevo/tutores, ajustes, Global y Batch. Hay seis perfiles exactos: Diamante `ADAE/5`, Platino `CPUE/1`, HeartGold `IPKE/0`, Negro `IRBO/0`, Blanco ES `IRAS/0` y Blanco 2 `IRDO/0`. Las mejoras posteriores de interfaz/reglas/Level Up tienen evidencia y límites propios; no heredan automáticamente toda la validación jugable anterior.
- **Switch:** Espada y Escudo 1.3.2 ya tienen editores de datos, entrenadores, encuentros, objetos, tiendas, movimientos/Level Up/evoluciones, compatibilidad MT/TR/tutores, Global/Batch de mods y runtime/caps propios por título. No siguen pendientes por aparecer así en una hoja histórica. No se declaran partida completa, hardware/Atmosphère ni soporte completo de DLC.
- **Historial y seguridad:** historial legible, exportación, restauración/deshacer 3DS y correcciones H1/H2/H3/#46 implementadas. No se extrapola automáticamente el contrato de restauración 3DS a DS/Switch.

El detalle y las diferencias por familia permanecen en el [índice técnico del Randomizer](https://github.com/joanjuz/Definitive-Randomizer/blob/main/docs/3ds-progressive/INDICE.md), no en una matriz estratégica duplicada.

### Corto plazo: estabilidad con un cierre finito

- Conservar como completadas Preview 3, H1 y las correcciones integradas H2/H3/#46. No reabrir investigación genérica de concurrencia, rollback o historial sin un defecto nuevo.
- Cerrar únicamente las evidencias faltantes del alcance estable: un ciclo representativo real de guardar/deshacer/reabrir/rebuild para las rutas transaccionales recientes y una cobertura de exportación DS proporcional a cambios nuevos. Aprovechar resultados existentes; no repetir toda la matriz por rutina.
- Documentar compatibilidad real por juego/revisión, fuentes de evidencia y limitaciones; declarar estable un alcance concreto en lugar de esperar soporte de todas las funciones futuras.
- Atender como bloqueador cualquier pérdida/corrupción reproducible. El cuelgue USUM de pétalos puede bloquear historia, pero sigue sin reproducción ni causa determinada; reabrirlo con evidencia nueva, sin detener todo el desarrollo. El primer combate de Paul tiene protección; los dobles Switch posteriores siguen sin guard runtime para un solo Pokémon utilizable y conservan 0 % por defecto. El movimiento Z del primer Tilo es diagnóstico localizado, no un bloqueo global demostrado.

### Funciones nuevas y prioridades propuestas

| Objetivo original o ampliación | Estado y resultado esperado | Prioridad y dependencias |
| --- | --- | --- |
| **Mentas Gen 7** | **Pendiente de investigación delimitada e implementación.** Objetos normales utilizables, incluidos en tiendas, field items, regalos y pools de randomización después de instalar el parche | Alta por impacto jugable. Identificar revisión del trabajo `pk3DS But Mostly for USUM`, licencia y atribución; verificar ejecutables, efecto sobre estadísticas/naturaleza y persistencia. Empezar por un perfil USUM; no anunciar Sol/Luna por compartir generación |
| **Caramelos raros y repelentes** | Conservar el objetivo de entrega inicial, NPC o consumo no decreciente. Los editores/presets existentes permiten configurar inventarios, pero no demuestran un suministro inicial ni consumo infinito | Media; definir primero una modalidad. Distinguir 999 unidades de «infinito»; si cambia consumo requiere parche y prueba jugable propia |
| **Randomización DS avanzada** | Amplia base implementada; comparación concreta con DSPRE y selección de diferencias útiles aún pendientes | Alta después del bloque inmediato. Nuevos perfiles Negro 2/SoulSilver/Perla, capacidades de entrenadores/encuentros/objetos y edición de eventos por juego. Comparar solo lo necesario para decidir una entrega, sin auditoría completa indefinida |
| **Editor de eventos DS** | Pendiente: añadir/editar NPC, objetos, warps y scripts con validación, diferencias e historial reversible | Alta y habilitador del mapa visual. Primer perfil y formato definidos antes de escribir; no confundir edición de Field Items/iniciales con editor general de eventos |
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
- Consumir **Definitive Game Data** exportado desde el estado aplicado del Randomizer, sin sustituir lecturas RAM ni requerir instalar/ejecutar el Randomizer para usar Tracker.

Referencias: [arquitectura de código de Tracker](https://github.com/joanjuz/NuzlockeTracker/tree/master/tracker), [CSV y sesiones](https://github.com/joanjuz/NuzlockeTracker/blob/master/docs/PK3DS_TEMPLATES_SESIONES.md) y [notas v1.2.0](https://github.com/joanjuz/NuzlockeTracker/blob/master/docs/releases/v1.2.0.md).

## Interoperabilidad: Definitive Game Data

**Estado: parcialmente preparada por importadores/catálogos existentes; contrato común y exportación/importación de extremo a extremo aún no implementados.** Propuesta de siguiente bloque funcional. No es un Global Template, un perfil de memoria ni un paquete de ROM.

Contrato propuesto:

- `schemaVersion` y versiones de productores/consumidores, identificador estable del documento y procedencia.
- Juego base, región/revisión y fingerprints con algoritmo y alcance explícitos. Distinguir extracción/proyecto de ROM reconstruida; no presentar un fingerprint de datos como prueba automática del juego cargado en RAM.
- Tablas normalizadas de especies/formas, tipos, movimientos, evoluciones y estadísticas modificadas. Semántica de IDs, formas y métodos por generación, sin depender de nombres traducidos.
- Exportación del **estado aplicado actual**, incluyendo ediciones manuales y efecto de deshacer; nunca de casillas sin aplicar ni operaciones ya revertidas.
- Validación, documentación y compatibilidad hacia atrás. Distinguir tabla completa de sección parcial, omisión y eliminación explícita; no inferirlas de una celda vacía.
- Lectura sin modificar ROM, partida o memoria. Sin binarios extraídos, sprites, partidas, credenciales, rutas privadas ni contenido de terceros sin permiso. El contrato habilita metadatos normalizados locales, no su redistribución indiscriminada.
- Extensiones futuras para reglas de desafíos y metadatos de perfiles, preservando funcionamiento independiente.

### Siguiente bloque listo para delimitar: DGD v1 para USUM

**Recomendación:** iniciar este bloque antes que un runtime nuevo. Impacto alto para quienes combinan Randomizer/Tracker, dificultad media-alta y dependencias ya disponibles: lectores de datos actuales, CSV/catálogos, perfiles de partida e identidad USUM. No necesita tocar hooks, ARM9, ROMs ni servicios remotos. Además prepara perfiles y Hub sin exigir todavía una biblioteca en línea.

No empieza en esta propuesta. Tras aprobar el alcance, secuencia de PR, **uno activo cada vez**:

1. **Contrato y exportador Randomizer:** US/UM con revisión explícitamente reconocida; exportar JSON de datos realmente aplicados de especies/formas/tipos, movimientos, estadísticas base y evoluciones. Un solo contrato documentado en el repositorio productor, enlazado por el consumidor. Nuevo servicio de exportación, sin reescribir motores ni historial.
2. **Importador Tracker:** validar juego/esquema/IDs y persistir por partida, mostrar diferencias/procedencia y permitir retirar el catálogo. Importación atómica y convivencia explícita con CSV anteriores; una importación fallida conserva el estado previo.
3. **Integración:** comprobar datos normalizados contra lo mostrado en fichas/análisis; fijar precedencia entre referencia, CSV y DGD y advertir de identidad no comprobable. Ampliar después a XY/ORAS; DS/Switch solo cuando exista consumidor compatible, sin prometer lectura de RAM nueva.

Archivos previstos en Randomizer: `3DS.Progressive.App/Services/GameProjectSession.cs`, `GameMoveService.cs`, `GamePersonalBatchService.cs`, `GameEvolutionService.cs`, lectores Core utilizados por ellos y un nuevo servicio/escritor DGD; punto de exportación en las vistas actuales. Revisar `EffectiveHistory.cs` solo si hace falta consultar procedencia, sin convertirlo en fuente de verdad de los datos exportados.

Archivos previstos en Tracker: `tracker/catalog.py`, `tracker/templates.py`, `tracker/reference.py`, `tracker/service.py`, `tracker/api/state.py` y la interfaz de importación existente en `web/`. Nuevos casos en las suites de ambos repositorios; nombres y ubicación final se fijan al abrir cada PR. No tocar offsets de memoria, overlays OBS ni sincronización remota para habilitar este MVP.

Riesgos principales: identidad/formas incompatibles, confundir naturaleza/datos RAM con estadísticas base, métodos de evolución mal traducidos, catálogo de una partida aplicado a otra, precedencia CSV ambigua y exportar intenciones en lugar del estado vigente.

Criterios de aceptación del bloque:

- En copias US/UM compatibles, cambiar tipo, potencia, estadísticas base y una evolución; exportar/importar y ver los mismos valores por especie/forma. Deshacer un cambio y reexportar refleja su restauración.
- Cada paquete identifica alcance, productor, revisión y fingerprints; una revisión incompatible se rechaza o queda explícitamente sin vincular, nunca se asocia silenciosamente por nombre del juego.
- Esquema mayor desconocido, IDs/formas inválidos, truncado y límites de tamaño se rechazan sin reemplazar el catálogo válido. Extensiones opcionales siguen una política explícita de compatibilidad.
- Datos del perfil A no aparecen en B; reiniciar conserva A. Retirar DGD devuelve la referencia/CSV según la precedencia documentada. CSV previos siguen funcionando.
- Tracker muestra qué valores proceden de DGD y cuáles de RAM/referencia; el importador no convierte una lista de estadísticas base en PS actuales ni altera el juego.
- Mismas tablas vigentes generan el mismo contenido normalizado al excluir metadatos variables. La exportación/importación no cambia hashes de fuente ni modifica archivos de partida/memoria.
- Una prueba de integración con archivos aislados demuestra el recorrido completo. Automatización basta para este contrato de datos; juego manual solo si se incorpora posteriormente un parche o comportamiento que el contrato no puede acreditar.

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
| 1 · próximo desarrollo | Definitive Game Data v1 USUM: exportación aplicada e importación por partida | Aprobar alcance anterior; PR secuenciales productor/consumidor; integración automatizada |
| 2 · capacidad jugable | Mentas Gen7, primer perfil USUM | Fuente/revisión/licencia, diseño de efecto/objetos y persistencia; parche aislado con prueba jugable focalizada antes de ampliar juegos |
| 3 · DS avanzado | Elegir y entregar un perfil nuevo o una diferencia funcional concreta con DSPRE; después editor de eventos para un juego | Perfil/CRC y formatos propios; no portar offsets entre títulos. Editor reversible habilita mapa visual |
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

Esta propuesta se basa en lectura completa de los cuatro documentos maestros, revisión del código/documentación de ambas aplicaciones, metadatos de releases y CI del PR #46. No se volvieron a ejecutar builds, suites, juegos ni el ZIP publicado: la comprobación remota acredita publicación y assets, no una nueva validación de arranque o integridad descargada. No se inició ninguna implementación funcional.
