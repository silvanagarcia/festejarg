# 🏗️ Documento 2 — Arquitectura y Tecnologías

> **Proyecto:** FestejARG
> **Etapa:** Definición técnica (antes de programar)

---

## 1. Arquitectura del proyecto (Fase 1 — solo frontend)

En esta primera versión **no necesitamos backend ni base de datos**, porque:

- La información de los proveedores la cargamos nosotros (es info fija).
- El formulario de contacto lo resolvemos con un **servicio externo** (ej: Formspree) o un link directo a WhatsApp.

```
┌─────────────┐        ┌──────────────────────────┐
│   Usuario   │ ─────> │  Navegador (celu/compu)  │
└─────────────┘        └────────────┬─────────────┘
                                    │
                                    ▼
                    ┌───────────────────────────────┐
                    │   Archivos del sitio web       │
                    │   HTML + CSS + JavaScript      │
                    │   (alojados en GitHub Pages)   │
                    └───────────────┬───────────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    ▼                               ▼
        ┌──────────────────────┐      ┌──────────────────────┐
        │  WhatsApp (contacto) │      │  Formspree (formu-    │
        │                      │      │  lario de presupuesto)│
        └──────────────────────┘      └──────────────────────┘
```

> 💡 Cuando el proyecto crezca (que los proveedores se registren solos, pagos, reservas con calendario), **ahí sí** vamos a necesitar backend y base de datos. Eso queda para una **Fase 2**.

---

## 2. ¿Por qué no usamos backend todavía?

| Si el sitio necesita... | ¿Backend? | En nuestro caso |
|---|---|---|
| Mostrar servicios y proveedores (info fija) | No | ✅ La info está en el HTML/JS |
| Formulario de contacto | No necesariamente | ✅ Usamos Formspree o link a WhatsApp |
| Que proveedores se registren solos | Sí | ⏳ Fase 2 |
| Pagos online | Sí | ⏳ Fase 2 |
| Reservas con disponibilidad real | Sí | ⏳ Fase 2 |

---

## 3. Tecnologías elegidas

| Categoría | Tecnología | ¿Para qué la uso? | ¿Por qué esta? |
|---|---|---|---|
| Estructura | **HTML5** | Crear el contenido de las páginas | Es el estándar, no hay alternativa |
| Diseño | **CSS3** | Estilos, colores, diseño responsive | Estándar para estilos web |
| Interactividad | **JavaScript** | Menú, filtros, armar las tarjetas de proveedores | Lenguaje nativo del navegador |
| Íconos | **Font Awesome** | Íconos de categorías y redes | Gratis y fácil de usar |
| Tipografías | **Google Fonts** | Fuentes de la marca | Gratis, amplio catálogo |
| Formularios | **Formspree** | Recibir solicitudes de presupuesto sin backend | Gratis, sin servidor |
| Hosting | **GitHub Pages** | Publicar el sitio en internet | Gratis y confiable |
| Diseño/Bocetos | **Figma / Excalidraw** | Wireframes de las pantallas | Gratis |
| Diagramas | **draw.io** | Mapa del sitio y arquitectura | Gratis y online |

---

## 4. Organización de archivos del frontend

```
frontend/
├── index.html              → página de inicio
├── servicios.html          → listado de categorías
├── categoria.html          → proveedores de una categoría
├── contacto.html           → formulario de presupuesto
├── css/
│   └── estilos.css         → todos los estilos
├── js/
│   ├── main.js             → lógica general (menú, etc.)
│   └── datos.js            → datos de los proveedores (array)
└── assets/
    └── img/                → logo, fotos de servicios
```

> 💡 En Fase 1 los datos de los proveedores viven en `js/datos.js` como un array de JavaScript. Cuando llegue el backend, esos datos vendrán de una base de datos.
