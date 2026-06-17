# Especificación técnica (SPEC) — Prototipo Web NovoDentist

**Versión:** 1.0
**Tipo de documento:** Especificación funcional y técnica para desarrollo asistido por IA
**Estado:** Listo para implementación

---

## 1. Resumen ejecutivo

NovoDentist es un consultorio odontológico. Se requiere un **prototipo de sitio web** de varias páginas, sin backend real, cuyo único propósito es **demostración visual y de flujo** para que la persona dueña del consultorio decida si aprueba el desarrollo del proyecto definitivo. Toda funcionalidad que en producción requeriría backend (envío de formularios, agendamiento real, autenticación) debe **simularse en el frontend** sin necesidad de servidor, base de datos ni APIs externas de pago.

Este documento es la fuente única de verdad para la implementación. Donde la spec no especifique un detalle, la IA implementadora debe tomar la decisión más simple y consistente con el resto del documento, y dejar constancia de esa decisión en un comentario en el código.

---

## 2. Objetivos y no-objetivos

### 2.1 Objetivos (in scope)

- Sitio multi-página, estático, responsive, navegable.
- Permitir simular el agendamiento de citas vía WhatsApp desde múltiples puntos del sitio.
- Comunicar los servicios odontológicos ofrecidos.
- Presentar al equipo humano de la clínica.
- Mostrar promociones vigentes.
- Resolver dudas frecuentes (FAQ).
- Mostrar una galería de antes/después de tratamientos estéticos.
- Incluir un blog/sección de consejos con artículos de ejemplo.
- Mostrar convenios/seguros con los que trabaja la clínica.
- Capturar datos de contacto mediante un formulario simulado.

### 2.2 No-objetivos (out of scope, explícito)

- No habrá backend, base de datos, ni persistencia real de datos entre sesiones.
- No habrá autenticación de usuarios ni panel de administración.
- No se integrará con la API oficial de WhatsApp Business; el "envío" será un enlace `https://wa.me/` que abre WhatsApp con un mensaje prellenado.
- No se procesarán pagos.
- No se requiere SEO avanzado, analítica, ni integración con CMS.
- No se requiere internacionalización (i18n); el sitio es monolingüe en español (Colombia).
- No se requiere cumplimiento normativo real de datos de salud (HIPAA, Habeas Data, etc.); es un prototipo de demostración, no un producto en producción.

---

## 3. Stack técnico

- La implementación queda a discreción de la IA desarrolladora, priorizando **simplicidad, portabilidad y cero dependencias de infraestructura**.
- Restricciones obligatorias sobre esa elección:
  - Debe poder ejecutarse y visualizarse abriendo archivos estáticos o con un comando simple de servidor de desarrollo (sin pasos de configuración de backend, bases de datos, ni variables de entorno secretas).
  - Debe funcionar completamente en el navegador (client-side).
  - Si se usa un framework con build step (ej. React/Vite), debe incluir instrucciones claras de instalación y ejecución en un archivo `README.md`.
  - El código debe organizarse por páginas/secciones de forma clara (un componente o archivo por sección, no todo en un solo archivo monolítico salvo que el stack elegido sea HTML/CSS/JS puro de bajo volumen).

---

## 4. Lineamientos de diseño (Design System)

### 4.1 Dirección estética
Clínica, moderna, confiable. Debe transmitir higiene, profesionalismo y calidez humana (no fría/corporativa en exceso).

### 4.2 Paleta de color (tokens)
La IA debe definir 4-6 colores concretos en hex dentro de esta dirección, por ejemplo (ajustables, pero deben mantenerse en esta familia):
- Azul primario (confianza clínica) — tono medio, no saturado en exceso.
- Azul oscuro o petróleo (texto/headers, contraste).
- Blanco / casi blanco como fondo dominante.
- Un acento secundario cálido (ej. verde menta o turquesa) para CTAs de WhatsApp y elementos de éxito/promoción.
- Gris neutro para texto secundario y bordes.

Estos colores deben declararse como variables CSS (custom properties) reutilizables en todo el sitio, no hardcodeados por componente.

### 4.3 Tipografía
- Una tipografía de display/títulos con personalidad moderna (sans-serif geométrica o humanista).
- Una tipografía de cuerpo legible, distinta de la de títulos si aporta jerarquía, o la misma familia en otro peso si el contraste de pesos es suficiente.
- Escala tipográfica definida y consistente (mínimo: h1, h2, h3, body, caption).

### 4.4 Componentes base reutilizables
Definir como componentes/estilos reutilizables (no reimplementar en cada página):
- Botón primario (CTA principal, ej. "Agendar cita")
- Botón secundario
- Tarjeta (card) genérica para servicios, equipo, promociones, blog
- Header/navbar
- Footer
- Botón flotante de WhatsApp

### 4.5 Responsive
- Mobile-first o adaptado correctamente a 3 breakpoints mínimos: móvil (~375px), tablet (~768px), escritorio (~1280px+).
- Navegación debe colapsar a menú hamburguesa en móvil.

### 4.6 Accesibilidad mínima
- Contraste de texto AA como mínimo.
- Todos los botones e inputs deben ser navegables por teclado y tener foco visible.
- Imágenes con atributo `alt` descriptivo.
- Jerarquía semántica de encabezados correcta (un solo `h1` por página).

---

## 5. Arquitectura de información (mapa del sitio)

```
/
├── Inicio (Home)
├── Servicios
├── Equipo / Nosotros
├── Promociones        (puede ser sección embebida en Home + página propia si hay >3 promos)
├── Galería Antes/Después
├── Blog / Consejos
│   └── Artículo individual (vista de detalle, puede ser modal o página)
├── Preguntas Frecuentes (FAQ)
└── Contacto / Agendamiento
```

Navegación principal (header, visible en todas las páginas): Inicio, Servicios, Equipo, Galería, Blog, FAQ, Contacto.
El logo "NovoDentist" en el header siempre enlaza a Inicio.

Footer (presente en todas las páginas) debe incluir: mapa del sitio (enlaces a todas las secciones), redes sociales (placeholders: Instagram, Facebook), datos de contacto resumidos, y una nota discreta: "Sitio de demostración — prototipo de diseño."

---

## 6. Especificación funcional por página

Cada sección a continuación define: **propósito, contenido requerido, comportamiento esperado y criterios de aceptación**.

### 6.1 Página: Inicio (Home)

**Propósito:** Convertir visitantes en contactos agendados; dar la primera impresión de marca.

**Contenido requerido:**
1. **Hero:** imagen de alta calidad (clínica, sonrisa, o equipo dental — usar imagen de stock de Unsplash o similar), titular principal, subtítulo breve, botón CTA primario "Agendar cita por WhatsApp".
2. **Bloque "Sobre NovoDentist":** 2-3 frases describiendo la propuesta de valor de la clínica.
3. **Resumen de servicios:** grid de 4-6 tarjetas con ícono/imagen, nombre del servicio y enlace "Ver todos los servicios" hacia `/servicios`.
4. **Promociones destacadas:** carrusel o grid con 2-3 promociones (ver sección 6.4 — Modelo de datos de Promociones).
5. **Testimonios:** 3-4 tarjetas con nombre de paciente (ficticio), una frase corta de reseña, y valoración en estrellas (puede ser visual, no funcional).
6. **CTA final:** banner de cierre con botón "Agendar cita por WhatsApp".

**Criterios de aceptación:**
- [ ] El botón CTA del hero y el del cierre disparan el flujo de WhatsApp (sección 7).
- [ ] El bloque de servicios muestra mínimo 4 tratamientos y enlaza correctamente a `/servicios`.
- [ ] Las promociones mostradas coinciden en datos con las de la página/sección de Promociones (no datos distintos duplicados).
- [ ] La página es completamente legible y usable en viewport de 375px de ancho.

### 6.2 Página: Servicios

**Propósito:** Listar de forma clara todos los tratamientos ofrecidos.

**Contenido requerido — catálogo completo de servicios (mínimo, usar exactamente estos 9):**

| # | Servicio | Descripción breve sugerida |
|---|----------|------------------------------|
| 1 | Blanqueamiento dental | Tratamiento estético para dientes más blancos y luminosos. |
| 2 | Prótesis oral | Reemplazo de piezas dentales perdidas, fijas o removibles. |
| 3 | Ortodoncia | Corrección de la posición dental con brackets o alineadores. |
| 4 | Limpieza dental / profilaxis | Remoción de placa y sarro para prevenir enfermedades orales. |
| 5 | Endodoncia | Tratamiento de conducto para salvar piezas dañadas internamente. |
| 6 | Implantes dentales | Reemplazo permanente de raíces dentales perdidas. |
| 7 | Odontología estética | Carillas y diseño de sonrisa personalizado. |
| 8 | Odontopediatría | Atención odontológica especializada para niños. |
| 9 | Extracciones | Remoción quirúrgica de piezas dentales cuando es necesario. |

**Comportamiento esperado:**
- Cada tarjeta de servicio tiene un botón "Agendar este servicio" que abre el flujo de WhatsApp con mensaje prellenado específico al servicio (ver sección 7.2).
- Disposición en grid responsive (3 columnas en escritorio, 2 en tablet, 1 en móvil).

**Criterios de aceptación:**
- [ ] Los 9 servicios de la tabla están presentes, sin omisiones.
- [ ] Cada tarjeta tiene imagen o ícono, nombre, descripción y botón de acción.
- [ ] El mensaje prellenado de WhatsApp menciona el nombre exacto del servicio.

### 6.3 Página: Equipo / Nosotros

**Propósito:** Generar confianza mostrando al personal humano de la clínica.

**Modelo de datos — Equipo (usar exactamente estos perfiles):**

| Nombre | Cargo | Detalle |
|--------|-------|---------|
| Natalia [Apellido a definir por la IA] | Odontóloga General / Directora Clínica | Especialidad y años de experiencia a definir por la IA de forma coherente (ej. "Especialista en estética dental, 10 años de experiencia"). |
| [Nombre ficticio 2] | Odontólogo/a — Ortodoncia | Perfil ficticio adicional. |
| [Nombre ficticio 3] | Asistente dental | Perfil ficticio adicional. |
| [Nombre ficticio 4] | Recepción / Atención al paciente | Perfil ficticio adicional. |

Nota: la IA debe inventar apellidos y descripciones breves coherentes y profesionales para los 4 perfiles, manteniendo a Natalia como la figura principal (puede tener una tarjeta visualmente destacada o de mayor tamaño).

**Contenido requerido adicional:**
- Sección breve de "Misión" o "Nuestra historia" (2-3 frases).

**Criterios de aceptación:**
- [ ] Natalia aparece como primer perfil o con tratamiento visual destacado.
- [ ] Los 4 perfiles tienen foto (de stock), nombre, cargo y descripción.

### 6.4 Sección/Página: Promociones

**Modelo de datos (usar exactamente estas 3 promociones de ejemplo, o equivalentes coherentes si la IA decide variar el copy):**

| Título | Descripción | Vigencia/condición |
|--------|-------------|---------------------|
| 20% de descuento en blanqueamiento dental | Aplica solo durante este mes. | Válido hasta fin de mes en curso. |
| Valoración inicial gratuita | Primera consulta de diagnóstico sin costo para pacientes nuevos. | Solo nuevos pacientes. |
| Plan de ortodoncia con cuota inicial reducida | Financiación especial para iniciar tratamiento de ortodoncia. | Sujeto a evaluación previa. |

**Criterios de aceptación:**
- [ ] Cada promoción muestra imagen, título, descripción y condición/vigencia visibles sin necesidad de interacción adicional.
- [ ] Visualmente diferenciadas del resto del contenido (badge, color de acento, o marco distintivo).

### 6.5 Página: Galería Antes/Después

**Propósito:** Mostrar resultados de tratamientos estéticos.

**Contenido requerido:**
- Mínimo 3 pares de imágenes "antes/después" (usar imágenes de stock ilustrativas, no reales de pacientes).
- Cada par debe indicar el tratamiento asociado (ej. "Blanqueamiento dental", "Carillas").
- **Aviso obligatorio y visible:** texto que indique claramente que las imágenes son ilustrativas de ejemplo y no corresponden a pacientes reales de la clínica (requisito ético y legal mínimo).

**Criterios de aceptación:**
- [ ] El aviso de "imágenes ilustrativas" está presente y es legible, no oculto en letra diminuta.
- [ ] Cada par antes/después se presenta con comparación visual clara (lado a lado o slider, a discreción de la IA).

### 6.6 Página: Blog / Consejos

**Contenido requerido:**
- Mínimo 3 artículos de ejemplo, cada uno con: imagen de portada, título, fecha (ficticia), resumen breve (2-3 líneas).
- Temas sugeridos: "Cómo cepillarte correctamente los dientes", "¿Cada cuánto debes visitar al odontólogo?", "Mitos y verdades sobre el blanqueamiento dental".
- Vista de detalle del artículo: puede implementarse como página individual o modal/expansión en la misma vista. Debe contener un cuerpo de texto de ejemplo (mínimo 3 párrafos) coherente con el título.

**Criterios de aceptación:**
- [ ] Los 3 artículos son accesibles desde un listado.
- [ ] El contenido de cada artículo es original (no copiado de fuentes externas), coherente y libre de errores evidentes.

### 6.7 Página: Preguntas Frecuentes (FAQ)

**Modelo de datos (usar exactamente estas preguntas, mínimo):**

| Pregunta | Respuesta sugerida |
|----------|---------------------|
| ¿Qué métodos de pago aceptan? | Efectivo, tarjeta débito/crédito y transferencia. |
| ¿Atienden urgencias odontológicas? | Sí, contamos con atención prioritaria para urgencias; contáctanos por WhatsApp. |
| ¿Trabajan con seguros o EPS? | Trabajamos con los convenios listados en la sección de Convenios. Consulta disponibilidad para tu caso. |
| ¿Cómo puedo cancelar o reprogramar una cita? | Escríbenos por WhatsApp con al menos 24 horas de anticipación. |
| ¿Atienden niños? | Sí, contamos con atención de odontopediatría. |

**Comportamiento esperado:**
- Formato acordeón (clic para expandir/colapsar cada pregunta).

**Criterios de aceptación:**
- [ ] Las 5 preguntas mínimas están presentes.
- [ ] El acordeón funciona correctamente con teclado (accesible) y mouse/touch.

### 6.8 Sección: Convenios / Seguros

Puede integrarse como bloque dentro de la página de Contacto o como sección propia.

**Contenido requerido:**
- Mínimo 3 logos o nombres de aseguradoras/planes (pueden ser ficticios o genéricos tipo "Convenio Salud Plus", "EPS Bienestar Total" — evitar usar nombres de marcas reales de EPS colombianas para no implicar afiliaciones falsas).
- Breve nota aclaratoria: "Convenios de ejemplo para fines de presentación del prototipo."

**Criterios de aceptación:**
- [ ] No se usan nombres ni logos de aseguradoras reales/existentes.
- [ ] La nota aclaratoria está visible.

### 6.9 Página: Contacto / Agendamiento

**Contenido requerido:**
1. **Formulario de contacto simulado** con campos: Nombre completo (requerido), Teléfono (requerido), Motivo de consulta (selector con las 9 opciones de servicios + "Otro") (requerido), Mensaje adicional (opcional).
2. **Botón de envío** que, al hacer clic con campos válidos, muestra una confirmación visual (ej. mensaje "¡Gracias! Te contactaremos pronto." o modal de éxito) sin enviar datos a ningún servidor real.
3. **Validación de formulario en frontend:** campos requeridos no pueden enviarse vacíos; debe mostrarse mensaje de error claro junto al campo correspondiente.
4. **Botón "Agendar cita por WhatsApp"** prominente, independiente del formulario.
5. **Mapa de ubicación:** imagen estática de mapa o embed genérico (no requiere geolocalización real).
6. **Horarios de atención:** tabla o lista simple (ej. Lunes a Viernes 8am-6pm, Sábados 8am-1pm).
7. **Datos de contacto:** dirección de ejemplo, teléfono de ejemplo, correo de ejemplo, redes sociales (placeholders).

**Criterios de aceptación:**
- [ ] El formulario no permite "enviarse" con campos requeridos vacíos y muestra retroalimentación clara.
- [ ] Tras un envío válido, se muestra confirmación visual sin recargar a una URL externa ni perder los demás elementos de la página.
- [ ] El botón de WhatsApp funciona de forma independiente al formulario.

---

## 7. Especificación: Flujo de agendamiento por WhatsApp

### 7.1 Botón flotante global
- Debe existir un botón flotante (ícono de WhatsApp, color verde reconocible `#25D366` o similar) anclado en la esquina inferior derecha, visible en **todas las páginas** mientras el usuario navega (posición `fixed`).
- Debe tener z-index suficiente para no quedar oculto detrás de otros elementos.
- Al pasar el mouse (hover) debe dar retroalimentación visual (ligero scale o sombra).

### 7.2 Mecánica de enlace
- Todos los CTAs de WhatsApp (botón flotante, botones de hero, botones por servicio, botón de página de contacto) deben usar el formato de enlace estándar:
  `https://wa.me/<NUMERO>?text=<MENSAJE_URL_ENCODED>`
- **Número de teléfono:** usar un número de placeholder/ejemplo, claramente ficticio pero con formato colombiano válido (ej. `573000000000`). Debe estar centralizado en una sola constante/variable en el código (no repetido hardcodeado en cada botón), de modo que cambiarlo a futuro por el número real sea un cambio de una sola línea.
- **Mensaje prellenado por contexto:**
  - Desde el botón flotante o el hero genérico: `"Hola, quiero agendar una cita en NovoDentist."`
  - Desde un botón de servicio específico: `"Hola, quiero agendar una cita para [Nombre del servicio]."`
  - Desde la página de contacto: `"Hola, quiero agendar una cita en NovoDentist."`
- Los enlaces deben abrir en una nueva pestaña (`target="_blank"`, con `rel="noopener noreferrer"`).

### 7.3 Criterios de aceptación
- [ ] El número de WhatsApp está centralizado en una sola constante reutilizada en todo el sitio.
- [ ] Cada botón de servicio genera un mensaje distinto y correcto según el servicio.
- [ ] Todos los enlaces de WhatsApp abren en pestaña nueva.

---

## 8. Modelo de datos del prototipo

Aunque no hay backend, el contenido dinámico (servicios, equipo, promociones, blog, FAQ) debe estructurarse como **datos separados de la presentación** (por ejemplo, arrays/objetos JS o JSON, no texto hardcodeado disperso en el HTML), de forma que:
- Sea fácil para un desarrollador futuro reemplazar estos datos por una fuente real (CMS o base de datos) sin reescribir la UI.
- Cada "entidad" tenga una estructura consistente:
  - **Servicio:** `{ id, nombre, descripcion, imagen }`
  - **Miembro del equipo:** `{ id, nombre, cargo, descripcion, foto, destacado: boolean }`
  - **Promoción:** `{ id, titulo, descripcion, vigencia, imagen }`
  - **Artículo de blog:** `{ id, titulo, fecha, resumen, contenido, imagen }`
  - **Pregunta FAQ:** `{ id, pregunta, respuesta }`
  - **Testimonio:** `{ id, nombre, frase, valoracion }`

---

## 9. Requisitos no funcionales

- **Rendimiento:** imágenes optimizadas o cargadas con `loading="lazy"` donde no sean above-the-fold.
- **Consistencia visual:** todos los botones, tarjetas y espaciados deben derivar de los tokens de diseño definidos en la sección 4, no de valores improvisados por componente.
- **Código limpio:** nombres de archivos, carpetas, clases CSS e identificadores en español o inglés de forma consistente (elegir uno y mantenerlo en todo el proyecto).
- **Sin errores de consola:** la consola del navegador no debe mostrar errores ni warnings al navegar por todas las páginas.
- **Compatibilidad:** debe funcionar correctamente en las últimas versiones de Chrome, Firefox y Safari.

---

## 10. Entregables esperados

1. Código fuente completo del prototipo, organizado por carpetas/archivos según el stack elegido.
2. Archivo `README.md` con instrucciones de instalación (si aplica) y ejecución local.
3. Todas las páginas/secciones de la sección 6 implementadas y enlazadas entre sí sin enlaces rotos.
4. El sitio debe poder recorrerse de inicio a fin (Inicio → Servicios → Equipo → Galería → Blog → FAQ → Contacto) sin errores de navegación.

---

## 11. Checklist final de aceptación (resumen ejecutivo para QA manual)

- [ ] Las 8 páginas/secciones principales existen y son navegables desde el header.
- [ ] El botón flotante de WhatsApp está presente y funcional en todas las páginas.
- [ ] Los 9 servicios del catálogo están completos con su botón de agendamiento individual.
- [ ] Natalia y 3 perfiles adicionales están presentes en Equipo.
- [ ] Las 3 promociones de ejemplo están visibles y coinciden entre Home y la sección de Promociones.
- [ ] La galería antes/después incluye el aviso de "imágenes ilustrativas".
- [ ] El blog tiene mínimo 3 artículos accesibles.
- [ ] El FAQ tiene mínimo 5 preguntas en formato acordeón funcional.
- [ ] Los convenios mostrados son genéricos/ficticios, no marcas reales.
- [ ] El formulario de contacto valida campos requeridos y muestra confirmación simulada.
- [ ] El sitio es responsive en móvil, tablet y escritorio.
- [ ] No hay errores en consola del navegador.
- [ ] El número de WhatsApp está centralizado en una sola variable/constante.
