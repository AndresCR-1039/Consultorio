# NovoDentist — Prototipo Web

> **Sitio de demostración** — Prototipo de diseño para un consultorio odontológico.  
> No es un producto en producción. No tiene backend ni base de datos.

## 🔧 Stack Técnico

| Herramienta | Propósito |
|-------------|-----------|
| **Vite** | Servidor de desarrollo con Hot Module Replacement |
| **HTML/CSS/JS** | Vanilla, sin frameworks UI adicionales |
| **CSS Custom Properties** | Design system con tokens de color, tipografía y espaciado |
| **Google Fonts** | Outfit (display) + Inter (body) |

### ¿Por qué este stack?

Se eligió Vite + vanilla JS porque:
- **Simplicidad máxima** — No hay overhead de frameworks como React o Vue.
- **Cero configuración de backend** — El sitio es 100% client-side.
- **ES Modules nativos** — Permite organizar código por archivos sin bundler pesado.
- **Ejecución inmediata** — Un solo comando para empezar (`npm run dev`).
- **Portabilidad** — Se puede desplegar como archivos estáticos en Vercel, Netlify o GitHub Pages.

## 🚀 Instalación y ejecución

### Requisitos previos
- [Node.js](https://nodejs.org/) versión 18 o superior.
- npm (viene incluido con Node.js).

### Pasos

```bash
# 1. Clonar o descargar el proyecto
# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173` (o el puerto que indique la terminal).

### Construir para producción (opcional)

```bash
npm run build
npm run preview
```

## 📁 Estructura del proyecto

```
Consultorio/
├── index.html                  # Punto de entrada HTML
├── package.json                # Dependencias y scripts
├── public/                     # Assets estáticos (favicon, etc.)
│   ├── favicon.svg
│   └── images/                 # Imágenes del sitio
│       ├── servicios/          # Imágenes de servicios
│       ├── equipo/             # Fotos del equipo
│       ├── promociones/        # Imágenes de promociones
│       └── blog/               # Imágenes de artículos
├── src/
│   ├── main.js                 # Punto de entrada JavaScript
│   ├── data/                   # Datos mock (JSON-like)
│   │   ├── index.js            # Barrel export
│   │   ├── config.js           # WhatsApp, info del consultorio
│   │   ├── servicios.js        # 9 servicios odontológicos
│   │   ├── equipo.js           # 4 perfiles del equipo
│   │   ├── promociones.js      # 3 promociones
│   │   ├── blog.js             # 3 artículos
│   │   ├── faq.js              # 7 preguntas frecuentes
│   │   └── testimonios.js      # 4 testimonios
│   └── styles/
│       ├── index.css           # Design system + tokens
│       └── landing.css         # Estilos de la landing temporal
└── Archivos/                   # Documentación del proyecto
    ├── spec.md                 # Especificación técnica
    ├── roadmap.md              # Hoja de ruta
    └── TODO.md                 # Checklist de tareas
```

## 🎨 Design System

Los tokens de diseño están definidos como CSS Custom Properties en `src/styles/index.css`:

- **Paleta:** Azul primario, azul petróleo, turquesa de acento, gris neutro, blanco cálido.
- **Tipografía:** Outfit (títulos) + Inter (cuerpo).
- **Componentes base:** Botones (primario, secundario, WhatsApp), tarjetas, utilidades de layout.
- **Responsive:** Mobile-first con breakpoints en 768px (tablet) y 1280px (desktop).

## 📋 Estado del desarrollo

- [x] **Fase 0** — Fundaciones (setup, tokens, datos mock)
- [x] **Fase 1** — Esqueleto y navegación (Header sticky, Footer, hash router)
- [x] **Fase 2** — Páginas núcleo (Home con hero visual, catálogo de Servicios, perfiles de Equipo)
- [x] **Fase 3** — Flujo WhatsApp (Botón flotante global, CTAs dinámicos con mensajes prellenados)
- [x] **Fase 4** — Contenido secundario (Listado de Promociones, Galería interactiva, lector de Blog, FAQ acordeón y Convenios genéricos)
- [x] **Fase 5** — Contacto y formulario (Formulario con validación JS e inyección de éxito, horarios y mapa simulado)
- [x] **Fase 6** — Pulido y QA (Optimización de carga lazy loading, revisión semántica H1, foco de accesibilidad, compilación final)
- [x] **Fase 7** — Entrega (Guía de presentación comercial y documentación final en [Guía de Presentación](file:///c:/Users/User/Consultorio/Archivos/Guia_Presentacion.md))

## ⚠️ Nota importante

Este es un **prototipo de demostración**. No es un sitio en producción:
- No envía datos reales a ningún servidor.
- Los datos de contacto, nombres y testimonios son ficticios.
- Las imágenes son ilustrativas y no corresponden a pacientes reales.
- El formulario de contacto es simulado.
