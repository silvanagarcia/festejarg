# 🗺️ Documento 3 — Mapa del Sitio

> **Proyecto:** FestejARG
> **Etapa:** Planificación de páginas y navegación

---

## 1. Mapa del sitio (Fase 1)

Cada caja es una página HTML que vamos a crear. Las flechas muestran cómo navega el usuario.

```
                    ┌─────────────────────┐
                    │     index.html      │
                    │   Página de Inicio  │
                    └──────────┬──────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        ▼                      ▼                      ▼
┌───────────────┐    ┌──────────────────┐    ┌───────────────┐
│ servicios.html│    │ como-funciona.html│    │ contacto.html │
│  Categorías   │    │  Cómo Funciona    │    │  Presupuesto  │
└───────┬───────┘    └──────────────────┘    └───────────────┘
        │
        ▼
┌────────────────────┐
│   categoria.html    │
│ Proveedores de una  │
│   categoría elegida │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│   proveedor.html    │
│  Ficha de detalle   │
│   de un proveedor   │
└────────────────────┘
```

---

## 2. Detalle de cada página

| Página | Archivo | ¿Qué contiene? | Prioridad |
|---|---|---|---|
| **Inicio** | `index.html` | Presentación, acceso a categorías, buscador, llamada a la acción | Alta |
| **Servicios** | `servicios.html` | Las 6 categorías con ícono y foto | Alta |
| **Categoría** | `categoria.html` | Tarjetas de proveedores de esa categoría | Alta |
| **Proveedor** | `proveedor.html` | Ficha: fotos, qué incluye, zona, botón contacto | Alta |
| **Contacto** | `contacto.html` | Formulario de solicitud de presupuesto | Alta |
| **Cómo funciona** | `como-funciona.html` | Paso a paso de cómo contratar | Media |

---

## 3. Elementos presentes en TODAS las páginas

- **Header fijo** con logo + menú de navegación (Inicio · Servicios · Cómo funciona · Contacto)
- **Botón flotante de WhatsApp** (esquina inferior derecha)
- **Footer** con logo chico, links a categorías, redes sociales y copyright

---

## 4. Flujo típico del usuario

```
1. Entra al INICIO
2. Toca "Ver servicios" o una categoría (ej: Salones)
3. Ve el LISTADO de proveedores de salones
4. Toca un proveedor → ve la FICHA con fotos y detalles
5. Toca "Pedir presupuesto" → va al FORMULARIO
6. Completa y envía → recibe confirmación
```

> 💡 La cantidad de páginas define cuánto trabajo hay. Más páginas = más tiempo. Por eso arrancamos por las de prioridad Alta.
