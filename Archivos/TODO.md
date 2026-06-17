# TODO — Desarrollo del Prototipo Web NovoDentist

> **Fuente:** `spec.md` v1.0 + `roadmap.md`
> Cada tarea incluye la referencia a la sección de la spec correspondiente.
> Las fases son secuenciales: cada fase asume que la anterior está terminada.

---

## Fase 0 — Fundaciones (Setup del proyecto)

**Criterio de salida:** Proyecto corriendo localmente (aunque vacío de contenido), tokens de color/tipografía aplicados, archivos de datos mock creados con su estructura definida.

### Stack y estructura

- [x] Elegir stack técnico (HTML/CSS/JS puro o framework simple sin backend) y justificar la elección en un comentario o en el README *(Spec §3)*
- [x] Si se usa framework con build step: configurar proyecto con instrucciones claras de instalación/ejecución *(Spec §3)*
- [x] Crear estructura de carpetas separando: páginas, estilos, datos (mock data), assets/imágenes *(Spec §8)*
- [x] Crear archivo `README.md` con instrucciones de instalación y ejecución local *(Spec §10)*
- [x] Verificar que el proyecto se ejecuta localmente con un comando simple (sin backend, sin BD, sin variables de entorno) *(Spec §3)*

### Design System — Tokens de diseño

- [x] Definir paleta de 4-6 colores en hex como variables CSS (`--color-*`): *(Spec §4.2)*
  - [x] Azul primario (confianza clínica, tono medio, no saturado en exceso)
  - [x] Azul oscuro o petróleo (texto/headers, contraste)
  - [x] Blanco / casi blanco (fondo dominante)
  - [x] Acento secundario cálido (verde menta o turquesa) para CTAs de WhatsApp y elementos de éxito/promoción
  - [x] Gris neutro para texto secundario y bordes
- [x] Elegir tipografía de display/títulos (sans-serif geométrica o humanista, moderna) *(Spec §4.3)*
- [x] Elegir tipografía de cuerpo (distinta o mismo familia en otro peso) *(Spec §4.3)*
- [x] Definir escala tipográfica consistente como variables/clases CSS: h1, h2, h3, body, caption *(Spec §4.3)*
- [x] Verificar que los colores cumplen contraste AA como mínimo *(Spec §4.6)*

### Modelo de datos mock

- [x] Crear archivo/módulo de datos para **Servicios** con estructura: `{ id, nombre, descripcion, imagen }` — incluir los 9 servicios de la spec *(Spec §8, §6.2)*:
  1. Blanqueamiento dental
  2. Prótesis oral
  3. Ortodoncia
  4. Limpieza dental / profilaxis
  5. Endodoncia
  6. Implantes dentales
  7. Odontología estética
  8. Odontopediatría
  9. Extracciones
- [x] Crear archivo/módulo de datos para **Equipo** con estructura: `{ id, nombre, cargo, descripcion, foto, destacado: boolean }` — incluir 4 perfiles *(Spec §8, §6.3)*:
  1. Natalia [Apellido ficticio] — Odontóloga General / Directora Clínica (destacado: true)
  2. [Nombre ficticio] — Odontólogo/a Ortodoncia
  3. [Nombre ficticio] — Asistente dental
  4. [Nombre ficticio] — Recepción / Atención al paciente
- [x] Crear archivo/módulo de datos para **Promociones** con estructura: `{ id, titulo, descripcion, vigencia, imagen }` — incluir 3 promociones *(Spec §8, §6.4)*:
  1. 20% de descuento en blanqueamiento dental
  2. Valoración inicial gratuita
  3. Plan de ortodoncia con cuota inicial reducida
- [x] Crear archivo/módulo de datos para **Blog** con estructura: `{ id, titulo, fecha, resumen, contenido, imagen }` — incluir 3 artículos *(Spec §8, §6.6)*:
  1. "Cómo cepillarte correctamente los dientes"
  2. "¿Cada cuánto debes visitar al odontólogo?"
  3. "Mitos y verdades sobre el blanqueamiento dental"
  - Cada artículo debe tener contenido completo de mínimo 3 párrafos, original y coherente
- [x] Crear archivo/módulo de datos para **FAQ** con estructura: `{ id, pregunta, respuesta }` — incluir mínimo 5 preguntas *(Spec §8, §6.7)*:
  1. ¿Qué métodos de pago aceptan?
  2. ¿Atienden urgencias odontológicas?
  3. ¿Trabajan con seguros o EPS?
  4. ¿Cómo puedo cancelar o reprogramar una cita?
  5. ¿Atienden niños?
- [x] Crear archivo/módulo de datos para **Testimonios** con estructura: `{ id, nombre, frase, valoracion }` — incluir 3-4 testimonios ficticios *(Spec §8, §6.1)*

### Constante de WhatsApp

- [x] Centralizar el número de WhatsApp en UNA SOLA constante/variable reutilizable: `573000000000` (formato colombiano, claramente ficticio) *(Spec §7.2)*
- [x] Verificar que cambiar el número sea un cambio de una sola línea *(Spec §7.2)*

---

## Fase 1 — Esqueleto y navegación

**Criterio de salida:** Se puede navegar desde el header y footer a cualquier página sin errores 404 ni enlaces rotos, en escritorio y móvil.

### Header / Navbar

- [x] Construir componente Header/Navbar reutilizable, presente en todas las páginas *(Spec §5)*
- [x] Incluir logo "NovoDentist" que enlace siempre a Inicio *(Spec §5)*
- [x] Incluir menú de navegación con enlaces a las 7 secciones: Inicio, Servicios, Equipo, Galería, Blog, FAQ, Contacto *(Spec §5)*
- [x] Hacer el header sticky (visible al hacer scroll) *(Roadmap Fase 1)*
- [x] Implementar menú hamburguesa para móvil (colapso responsive del header) *(Spec §4.5)*
- [x] Verificar que el menú hamburguesa funciona en touch y mouse *(Spec §4.5)*

### Footer

- [x] Construir componente Footer reutilizable, presente en todas las páginas *(Spec §5)*
- [x] Incluir mapa del sitio con enlaces a todas las secciones *(Spec §5)*
- [x] Incluir iconos/enlaces de redes sociales placeholder (Instagram, Facebook) *(Spec §5)*
- [x] Incluir datos de contacto resumidos *(Spec §5)*
- [x] Incluir nota discreta: "Sitio de demostración — prototipo de diseño." *(Spec §5)*

### Páginas vacías y enrutamiento

- [x] Crear página vacía: Inicio (Home) *(Spec §5)*
- [x] Crear página vacía: Servicios *(Spec §5)*
- [x] Crear página vacía: Equipo / Nosotros *(Spec §5)*
- [x] Crear página vacía: Promociones *(Spec §5)*
- [x] Crear página vacía: Galería Antes/Después *(Spec §5)*
- [x] Crear página vacía: Blog / Consejos *(Spec §5)*
- [x] Crear página vacía: Preguntas Frecuentes (FAQ) *(Spec §5)*
- [x] Crear página vacía: Contacto / Agendamiento *(Spec §5)*
- [x] Configurar enrutamiento entre todas las páginas *(Spec §5)*
- [x] Verificar navegación completa sin enlaces rotos (click-through de todas las páginas) *(Spec §10)*

### Componentes base (estilos reutilizables)

- [x] Crear estilo/componente de **Botón primario** (CTA principal, ej. "Agendar cita") *(Spec §4.4)*
- [x] Crear estilo/componente de **Botón secundario** *(Spec §4.4)*
- [x] Crear estilo/componente de **Tarjeta (card) genérica** para servicios, equipo, promociones, blog *(Spec §4.4)*

---

## Fase 2 — Páginas núcleo (Home, Servicios, Equipo)

**Criterio de salida:** Home, Servicios y Equipo están visualmente terminadas y responsive, con todo el contenido textual e imágenes definitivas (no placeholders tipo lorem ipsum).

### 2.1 Página de Inicio (Home)

- [x] Implementar sección **Hero**: imagen de alta calidad (clínica/sonrisa/equipo dental, usar imagen de stock), titular principal, subtítulo breve, botón CTA primario "Agendar cita por WhatsApp" *(Spec §6.1)*
- [x] Implementar bloque **"Sobre NovoDentist"**: 2-3 frases describiendo la propuesta de valor *(Spec §6.1)*
- [x] Implementar **Resumen de servicios**: grid de 4-6 tarjetas con ícono/imagen, nombre del servicio, enlace "Ver todos los servicios" hacia la página de Servicios *(Spec §6.1)*
- [x] Implementar **Promociones destacadas**: carrusel o grid con 2-3 promociones (usando datos mock) *(Spec §6.1)*
- [x] Implementar **Testimonios**: 3-4 tarjetas con nombre ficticio, frase de reseña, valoración en estrellas (visual) *(Spec §6.1)*
- [x] Implementar **CTA final**: banner de cierre con botón "Agendar cita por WhatsApp" *(Spec §6.1)*
- [x] Verificar que el bloque de servicios muestra mínimo 4 tratamientos y enlaza correctamente a Servicios *(Spec §6.1 CA)*
- [x] Verificar que las promociones coinciden con las de la página de Promociones (mismos datos, no duplicados) *(Spec §6.1 CA)*
- [x] Verificar que la página es legible y usable en viewport de 375px *(Spec §6.1 CA)*

### 2.2 Página de Servicios

- [x] Implementar grid con las **9 tarjetas de servicio** (una por cada servicio del catálogo) *(Spec §6.2)*
- [x] Cada tarjeta debe incluir: imagen o ícono, nombre, descripción breve, botón "Agendar este servicio" *(Spec §6.2)*
- [x] Grid responsive: 3 columnas en escritorio, 2 en tablet, 1 en móvil *(Spec §6.2)*
- [x] Verificar que los 9 servicios de la tabla de la spec están presentes, sin omisiones *(Spec §6.2 CA)*

### 2.3 Página de Equipo / Nosotros

- [x] Implementar **tarjeta de Natalia** con tratamiento visual destacado (tarjeta más grande o prominente) *(Spec §6.3)*
- [x] Implementar **3 tarjetas de perfiles adicionales** (inventar nombres, apellidos y descripciones profesionales coherentes) *(Spec §6.3)*
- [x] Cada perfil debe tener: foto de stock, nombre, cargo, descripción *(Spec §6.3 CA)*
- [x] Implementar sección **"Misión" o "Nuestra historia"** (2-3 frases) *(Spec §6.3)*
- [x] Verificar que Natalia aparece como primer perfil o con tratamiento visual destacado *(Spec §6.3 CA)*

---

## Fase 3 — Flujo de agendamiento por WhatsApp (transversal)

**Criterio de salida:** Todos los botones de WhatsApp definidos abren correctamente `wa.me` con el mensaje correcto en pestaña nueva. El botón flotante es visible en todas las páginas.

### Botón flotante global

- [x] Implementar botón flotante de WhatsApp (ícono WhatsApp, color verde `#25D366` o similar) *(Spec §7.1)*
- [x] Posición fija en esquina inferior derecha (`position: fixed`) *(Spec §7.1)*
- [x] Z-index suficiente para no quedar oculto detrás de otros elementos *(Spec §7.1)*
- [x] Efecto hover: ligero scale o sombra como retroalimentación visual *(Spec §7.1)*
- [x] Visible en **todas las páginas** (las 8) *(Spec §7.1)*
- [x] Al hacer clic, abrir `wa.me` con mensaje genérico: "Hola, quiero agendar una cita en NovoDentist." *(Spec §7.2)*

### Conexión de CTAs de WhatsApp

- [x] Conectar **CTA del hero** (Home) → mensaje genérico *(Spec §7.2)*
- [x] Conectar **CTA final** (Home) → mensaje genérico *(Spec §7.2)*
- [x] Conectar **botón "Agendar este servicio"** en cada una de las 9 tarjetas de Servicios → mensaje dinámico: "Hola, quiero agendar una cita para [Nombre del servicio]." *(Spec §7.2)*

### Verificaciones de WhatsApp

- [x] Verificar que TODOS los enlaces usan el formato: `https://wa.me/<NUMERO>?text=<MENSAJE_URL_ENCODED>` *(Spec §7.2)*
- [x] Verificar `target="_blank"` en todos los enlaces de WhatsApp *(Spec §7.2)*
- [x] Verificar `rel="noopener noreferrer"` en todos los enlaces de WhatsApp *(Spec §7.2)*
- [x] Verificar que el número de WhatsApp se toma de la constante centralizada (no hardcodeado por botón) *(Spec §7.2, §7.3 CA)*
- [x] Verificar que cada botón de servicio genera un mensaje distinto y correcto según el servicio *(Spec §7.3 CA)*

---

## Fase 4 — Contenido secundario (Promociones, Galería, Blog, FAQ, Convenios)

**Criterio de salida:** Las 4 páginas/secciones nuevas existen, tienen contenido completo (no placeholders), y los datos de Promociones coinciden entre Home y su página dedicada.

### 4.1 Promociones

- [x] Construir página/sección de Promociones con las 3 promociones del mock data *(Spec §6.4)*
- [x] Cada promoción muestra: imagen, título, descripción, condición/vigencia (visibles sin interacción adicional) *(Spec §6.4 CA)*
- [x] Diferenciar visualmente las promociones del resto del contenido (badge, color de acento, o marco distintivo) *(Spec §6.4 CA)*
- [x] Verificar que los datos de promociones en Home coinciden exactamente con los de la página de Promociones *(Spec §6.1 CA, §6.4)*

### 4.2 Galería Antes/Después

- [x] Implementar mínimo **3 pares de imágenes** antes/después (usar imágenes de stock ilustrativas) *(Spec §6.5)*
- [x] Cada par debe indicar el tratamiento asociado (ej. "Blanqueamiento dental", "Carillas") *(Spec §6.5)*
- [x] Presentar comparación visual clara (lado a lado o slider, a discreción) *(Spec §6.5 CA)*
- [x] Incluir **aviso obligatorio y visible**: "Las imágenes son ilustrativas de ejemplo y no corresponden a pacientes reales de la clínica" *(Spec §6.5)*
- [x] Verificar que el aviso es legible, no oculto en letra diminuta *(Spec §6.5 CA)*

### 4.3 Blog / Consejos

- [x] Implementar vista de **listado** con los 3 artículos: imagen de portada, título, fecha ficticia, resumen (2-3 líneas) *(Spec §6.6)*
- [x] Implementar **vista de detalle** del artículo (página individual o modal/expansión) *(Spec §6.6)*
- [x] Cada artículo de detalle debe tener cuerpo de texto de mínimo 3 párrafos, original y coherente con el título *(Spec §6.6)*
- [x] Verificar que los 3 artículos son accesibles desde el listado *(Spec §6.6 CA)*
- [x] Verificar que el contenido es original (no copiado), coherente y libre de errores evidentes *(Spec §6.6 CA)*

### 4.4 FAQ (Preguntas Frecuentes)

- [x] Implementar las **5 preguntas mínimas** de la spec en formato acordeón *(Spec §6.7)*
- [x] El acordeón permite expandir/colapsar cada pregunta al hacer clic *(Spec §6.7)*
- [x] Verificar que el acordeón funciona con teclado (accesible) *(Spec §6.7 CA)*
- [x] Verificar que funciona con mouse y touch *(Spec §6.7 CA)*

### 4.5 Convenios / Seguros

- [x] Implementar sección con mínimo **3 convenios genéricos/ficticios** (ej. "Convenio Salud Plus", "EPS Bienestar Total") *(Spec §6.8)*
- [x] Mostrar logos o nombres de los convenios *(Spec §6.8)*
- [x] Incluir nota aclaratoria visible: "Convenios de ejemplo para fines de presentación del prototipo." *(Spec §6.8)*
- [x] Verificar que **NO se usan nombres ni logos de aseguradoras reales** colombianas *(Spec §6.8 CA)*
- [x] Decidir si vive como sección propia o dentro de la página de Contacto *(Spec §6.8)*

---

## Fase 5 — Contacto y formulario

**Criterio de salida:** El formulario no permite enviarse con campos requeridos vacíos, muestra confirmación visual al completarse correctamente, y el botón de WhatsApp funciona de forma independiente.

### Formulario de contacto

- [x] Construir formulario con campos *(Spec §6.9)*:
  - [x] **Nombre completo** (requerido)
  - [x] **Teléfono** (requerido)
  - [x] **Motivo de consulta** — selector (`<select>`) con las 9 opciones de servicios + "Otro" (requerido)
  - [x] **Mensaje adicional** (opcional, textarea)
- [x] Implementar **validación frontend**: campos requeridos no pueden enviarse vacíos *(Spec §6.9)*
- [x] Mostrar **mensaje de error claro** junto al campo correspondiente cuando falta un campo requerido *(Spec §6.9)*
- [x] Implementar **confirmación simulada** al enviar con campos válidos: mensaje "¡Gracias! Te contactaremos pronto." o modal de éxito *(Spec §6.9)*
- [x] La confirmación NO debe recargar la página ni redirigir a URL externa *(Spec §6.9 CA)*
- [x] El formulario NO debe enviar datos a ningún servidor real *(Spec §2.2)*

### Botón de WhatsApp en Contacto

- [x] Agregar botón **"Agendar cita por WhatsApp"** prominente, independiente del formulario *(Spec §6.9)*
- [x] Conectar con enlace `wa.me` y mensaje genérico: "Hola, quiero agendar una cita en NovoDentist." *(Spec §7.2)*
- [x] Verificar que funciona de forma independiente al formulario *(Spec §6.9 CA)*

### Contenido adicional de Contacto

- [x] Agregar **mapa de ubicación**: imagen estática o embed genérico (sin geolocalización real) *(Spec §6.9)*
- [x] Agregar **horarios de atención**: tabla o lista (ej. Lunes a Viernes 8am-6pm, Sábados 8am-1pm) *(Spec §6.9)*
- [x] Agregar **datos de contacto**: dirección de ejemplo, teléfono de ejemplo, correo de ejemplo, redes sociales placeholders *(Spec §6.9)*
- [x] Insertar bloque de **Convenios/Seguros** si se decidió ubicarlo aquí *(Spec §6.8)*

---

## Fase 6 — Pulido, responsive y QA final

**Criterio de salida:** El checklist final de aceptación de la spec (sección 11) está 100% marcado. Cero errores en consola.

### Responsive

- [x] Probar las 8 páginas en viewport **375px** (móvil) *(Spec §4.5)*
- [x] Probar las 8 páginas en viewport **768px** (tablet) *(Spec §4.5)*
- [x] Probar las 8 páginas en viewport **1280px+** (escritorio) *(Spec §4.5)*
- [x] Verificar que la navegación colapsa a menú hamburguesa en móvil *(Spec §4.5)*

### Accesibilidad mínima

- [x] Verificar contraste de texto AA en todas las combinaciones de color/fondo *(Spec §4.6)*
- [x] Verificar que todos los botones e inputs son **navegables por teclado** con foco visible *(Spec §4.6)*
- [x] Verificar que todas las imágenes tienen atributo `alt` descriptivo *(Spec §4.6)*
- [x] Verificar jerarquía semántica de encabezados: un solo `<h1>` por página *(Spec §4.6)*

### Consistencia visual

- [x] Verificar que todos los botones usan los estilos del design system (no estilos sueltos/improvisados) *(Spec §9)*
- [x] Verificar que todas las tarjetas usan el componente card genérico *(Spec §9)*
- [x] Verificar que todos los espaciados y colores derivan de los tokens CSS *(Spec §9)*
- [x] Verificar código limpio: nombres de archivos, carpetas, clases CSS e IDs en un idioma consistente (español o inglés, no mezcla) *(Spec §9)*

### Microinteracciones y animaciones

- [x] Verificar hover en botones (efecto visual) *(Roadmap Fase 6)*
- [x] Verificar hover en tarjetas (efecto visual) *(Roadmap Fase 6)*
- [x] Verificar transiciones suaves, sin exceso de animación *(Roadmap Fase 6)*

### QA técnico

- [x] Abrir consola del navegador y navegar **todas las páginas**: cero errores y cero warnings *(Spec §9)*
- [x] Verificar compatibilidad en **Chrome** (última versión) *(Spec §9)*
- [x] Verificar compatibilidad en **Firefox** (última versión) *(Spec §9)*
- [x] Verificar compatibilidad en **Safari** (última versión) *(Spec §9)*
- [x] Verificar que las imágenes no above-the-fold tengan `loading="lazy"` *(Spec §9)*

### Recorrido completo punta a punta

- [x] Navegar: Inicio → Servicios → Equipo → Promociones → Galería → Blog → FAQ → Contacto, sin errores *(Spec §10)*
- [x] Verificar que no hay enlaces rotos en todo el sitio *(Spec §10)*

### Checklist final de aceptación (Spec §11)

- [x] Las 8 páginas/secciones principales existen y son navegables desde el header
- [x] El botón flotante de WhatsApp está presente y funcional en todas las páginas
- [x] Los 9 servicios del catálogo están completos con su botón de agendamiento individual
- [x] Natalia y 3 perfiles adicionales están presentes en Equipo
- [x] Las 3 promociones de ejemplo están visibles y coinciden entre Home y la sección de Promociones
- [x] La galería antes/después incluye el aviso de "imágenes ilustrativas"
- [x] El blog tiene mínimo 3 artículos accesibles
- [x] El FAQ tiene mínimo 5 preguntas en formato acordeón funcional
- [x] Los convenios mostrados son genéricos/ficticios, no marcas reales
- [x] El formulario de contacto valida campos requeridos y muestra confirmación simulada
- [x] El sitio es responsive en móvil, tablet y escritorio
- [x] No hay errores en consola del navegador
- [x] El número de WhatsApp está centralizado en una sola variable/constante

---

## Fase 7 — Entrega y presentación

- [x] Escribir/actualizar `README.md` con instrucciones completas de instalación y ejecución local *(Spec §10)*
- [x] Preparar entorno de demostración (local o desplegado en hosting estático gratuito: Vercel, Netlify, GitHub Pages) *(Roadmap Fase 7)*
- [x] Preparar guion breve de presentación (1-2 min): qué es prototipo vs. producto final, decisiones de diseño *(Roadmap Fase 7)*
- [x] Recoger feedback del dueño del consultorio y documentar decisiones *(Roadmap Fase 7)*

---

## Resumen de dependencias críticas

> - **Fase 3 (WhatsApp)** depende de que existan los botones visuales creados en Fases 1 y 2.
> - El **botón de WhatsApp de Contacto** depende de que la Fase 5 haya creado esa página.
> - **Fase 6 (QA)** no debe iniciarse hasta que todas las páginas tengan contenido real.
> - **Fase 7** depende de la aprobación humana externa (dueño del consultorio).

---

**Total de tareas: ~120+**
**Idioma del sitio: Español (Colombia)**
**Backend requerido: Ninguno — todo es client-side**
