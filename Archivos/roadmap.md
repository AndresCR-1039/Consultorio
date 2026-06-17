# Roadmap de Desarrollo — Prototipo NovoDentist

**Basado en:** spec.md v1.0
**Objetivo del roadmap:** secuenciar la implementación en fases con dependencias claras, para que se pueda construir de forma incremental, validar en cada etapa y mostrar avances tangibles antes de tener el sitio 100% completo.

---

## Visión general de fases

```
Fase 0: Fundaciones
   │
   ▼
Fase 1: Esqueleto y navegación
   │
   ▼
Fase 2: Páginas núcleo (Home, Servicios, Equipo)
   │
   ▼
Fase 3: Flujo de WhatsApp (transversal, se conecta a todo lo anterior)
   │
   ▼
Fase 4: Contenido secundario (Promociones, Galería, Blog, FAQ, Convenios)
   │
   ▼
Fase 5: Contacto y formulario
   │
   ▼
Fase 6: Pulido, responsive y QA final
   │
   ▼
Fase 7: Entrega y presentación
```

Cada fase asume que la anterior está terminada y aceptada. Las fases 2 y 4 contienen ítems que podrían paralelizarse si hay más de un desarrollador, pero al ser un prototipo individual se recomienda seguir el orden secuencial.

---

## Fase 0 — Fundaciones (Setup del proyecto)

**Objetivo:** Tener el proyecto inicializado, con el sistema de diseño definido y los datos mock estructurados antes de construir cualquier página.

- **Stack Técnico:** Configurar proyecto con Vite y Vanilla HTML/CSS/JS (sin frameworks).
- **Design System:** Definir variables/tokens CSS para la paleta de colores (azul primario, turquesa, etc.), tipografía (Outfit + Inter) y componentes comunes.
- **Datos:** Estructurar modelos de datos mock para servicios, equipo, promociones, blog, testimonios y FAQs.
- **WhatsApp:** Centralizar constante de teléfono y función constructora de enlaces en `src/data/config.js`.

---

## Fase 1 — Esqueleto y navegación

**Objetivo:** Crear la estructura base del sitio y la navegación básica (enlaces a páginas y secciones) sin errores 404 ni enlaces rotos.

- **Header / Navbar:** Sticky header con logo y menú responsive (hamburguesa en móviles).
- **Footer:** Mapa del sitio, datos de contacto resumidos, nota legal del prototipo y enlaces a redes.
- **Páginas Base:** Archivos HTML/JS para las 8 vistas requeridas.
- **Routing/Navegación:** Configurar enlaces e interactividad para navegar entre vistas.
- **Componentes comunes:** Estilos CSS reutilizables para botones y tarjetas.

---

## Fase 2 — Páginas núcleo (Home, Servicios, Equipo)

**Objetivo:** Implementar la visual y el contenido definitivo de las páginas de mayor impacto y conversión.

- **Home:** Hero banner con CTA, sección "Sobre nosotros", listado de servicios destacados, testimonios y CTA de cierre.
- **Servicios:** Catálogo de 9 tratamientos con imágenes y botones de agendamiento.
- **Equipo:** Perfil destacado de Natalia y los 3 perfiles adicionales con foto y biografía.

---

## Fase 3 — Flujo de agendamiento por WhatsApp (transversal)

**Objetivo:** Conectar todos los llamados a la acción con enlaces dinámicos a WhatsApp.

- **Botón Flotante Global:** Botón fijo de WhatsApp en la esquina inferior derecha.
- **CTAs Dinámicos:** Generación de enlaces con mensajes prellenados contextuales (según el servicio seleccionado en el catálogo).
- **Parámetros seguros:** Uso de `target="_blank"` y `rel="noopener noreferrer"`.

---

## Fase 4 — Contenido secundario (Promociones, Galería, Blog, FAQ, Convenios)

**Objetivo:** Implementar las secciones informativas y de apoyo para robustecer el sitio.

- **Promociones:** Mostrar las 3 ofertas con sus vigencias correspondientes.
- **Galería:** Comparadores de "Antes y Después" para tratamientos estéticos con aviso obligatorio de imágenes ilustrativas.
- **Blog:** Listado de artículos y vistas detalladas con el contenido educativo de 3+ párrafos.
- **FAQ:** Acordeón interactivo para resolver preguntas frecuentes.
- **Convenios:** Mostrar convenios con nombres y logotipos genéricos (ficticios).

---

## Fase 5 — Contacto y formulario

**Objetivo:** Implementar el canal de comunicación y agendamiento web simulado.

- **Formulario de contacto:** Captura de datos con validación básica en frontend.
- **Feedback:** Mensaje de éxito al enviar el formulario (sin recarga de página).
- **Información complementaria:** Mapa estático, horarios detallados y datos físicos del consultorio.

---

## Fase 6 — Pulido, responsive y QA final

**Objetivo:** Garantizar la calidad técnica, visual y de rendimiento del prototipo.

- **Diseño Responsivo:** Pruebas exhaustivas en viewport móvil (375px), tablet (768px) y desktop (1280px+).
- **Accesibilidad:** Alt en imágenes, contrastes AA y navegación por teclado.
- **Rendimiento:** Carga diferida de imágenes con `loading="lazy"`.
- **Compatibilidad:** Pruebas en navegadores modernos. Cero errores en consola.

---

## Fase 7 — Entrega y presentación

**Objetivo:** Finalizar los entregables y presentar la demo interactiva.

- **README:** Documentación completa de instalación y ejecución.
- **Demo en vivo:** Despliegue opcional en hosting gratuito (ej. Vercel / Netlify).
- **Feedback:** Presentación del prototipo al cliente y levantamiento de requerimientos finales.
