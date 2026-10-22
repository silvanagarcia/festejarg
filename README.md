# 🎉 FestejARG — Plataforma de Contratación de Servicios para Eventos

> Proyecto web para contratar todo lo necesario para una fiesta: salón, sonido, catering, fotógrafo y más, desde un solo lugar.

---

## 📌 ¿Qué es este proyecto?

Una página web donde las personas que están organizando un evento (casamiento, cumpleaños de 15, cumpleaños, fiesta de egresados, etc.) pueden **explorar y contactar proveedores de servicios** en un solo lugar, en vez de buscar cada uno por separado por WhatsApp, Instagram o recomendaciones.

## 👤 Autoría

- **Autor/a:** [Tu Nombre]
- **Tipo:** Proyecto personal
- **Etapa actual:** Frontend funcional con datos simulados

---

## 📂 Estructura de la documentación

Toda la planificación vive en la carpeta `docs/`. Se recomienda leerla en este orden:

| Orden | Documento | ¿Qué contiene? |
|---|---|---|
| 1 | [`docs/01-relevamiento.md`](docs/01-relevamiento.md) | Problema, usuarios, funcionalidades y límites |
| 2 | [`docs/02-arquitectura-y-tecnologias.md`](docs/02-arquitectura-y-tecnologias.md) | Arquitectura técnica y stack elegido |
| 3 | [`docs/03-mapa-del-sitio.md`](docs/03-mapa-del-sitio.md) | Páginas del sitio y navegación |
| 4 | [`docs/04-plan-de-trabajo.md`](docs/04-plan-de-trabajo.md) | Fases, tareas y tiempos estimados |

---

## 🗂️ Estructura del código (frontend)

```
festejarg/
├── README.md
├── docs/                  → documentación del proyecto
└── frontend/              → el sitio web
    ├── index.html         → página de inicio
    ├── servicios.html     → listado de categorías
    ├── categoria.html     → proveedores de una categoría
    ├── proveedor.html     → ficha de un proveedor
    ├── como-funciona.html → paso a paso
    ├── contacto.html      → formulario de presupuesto
    ├── css/
    │   └── estilos.css
    └── js/
        ├── datos.js       → datos simulados (categorías y proveedores)
        ├── main.js        → menú y grilla de categorías
        ├── categoria.js   → render de proveedores por categoría
        ├── proveedor.js   → render de la ficha de proveedor
        └── contacto.js    → validación del formulario
```

---

## 🚀 ¿Cómo arranco?

1. Leé la documentación de la carpeta `docs/` (empezá por el relevamiento).
2. Abrí `frontend/index.html` en el navegador para ver el sitio.
3. Editá los archivos de `frontend/` para construir cada página.

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 (tema oscuro, Flexbox, Grid, responsive)
- JavaScript (sin frameworks, datos simulados en `datos.js`)

> 💡 Esta documentación es un **documento vivo**: se actualiza a medida que el proyecto cambia.
