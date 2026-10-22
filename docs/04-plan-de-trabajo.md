# 📅 Documento 4 — Plan de Trabajo

> **Proyecto:** FestejARG
> **Etapa:** Organización del desarrollo del frontend

---

## 1. Fases del proyecto

| Fase | Objetivo | Entregable |
|---|---|---|
| **Fase 0 — Documentación** | Planificar antes de codear | Esta carpeta `docs/` ✅ |
| **Fase 1 — Frontend estático** | Sitio navegable con datos fijos | Web funcionando en el navegador |
| **Fase 2 — Backend (futuro)** | Proveedores, pagos, reservas | Base de datos + servidor |

> Nos enfocamos en completar la **Fase 1**.

---

## 2. Tareas de la Fase 1 (frontend)

| N° | Tarea | Depende de | Estimado |
|---|---|---|---|
| 1 | Definir paleta de colores y tipografías | Documentación | 0.5 día |
| 2 | Hacer wireframes de las pantallas (Figma) | Tarea 1 | 1 día |
| 3 | Armar estructura base HTML + CSS (header, footer, menú) | Tarea 2 | 1 día |
| 4 | Construir la página de **Inicio** | Tarea 3 | 1 día |
| 5 | Construir la página de **Servicios** (categorías) | Tarea 3 | 1 día |
| 6 | Cargar datos de proveedores en `datos.js` | Tarea 3 | 0.5 día |
| 7 | Construir **Listado por categoría** (tarjetas) | Tareas 5, 6 | 1 día |
| 8 | Construir **Ficha de proveedor** | Tarea 7 | 1 día |
| 9 | Construir **Formulario de contacto** + Formspree | Tarea 3 | 1 día |
| 10 | Botón flotante de WhatsApp | Tarea 3 | 0.25 día |
| 11 | Ajustar diseño **responsive** (mobile-first) | Todas las anteriores | 1 día |
| 12 | Probar en celular y corregir | Tarea 11 | 0.5 día |
| 13 | Publicar en **GitHub Pages** | Tarea 12 | 0.5 día |

**Total estimado Fase 1:** ~10-11 días de trabajo.

---

## 3. Orden recomendado

```
Documentación ✅
      ↓
Colores + wireframes
      ↓
Estructura base (header/footer/menú)
      ↓
Inicio → Servicios → Datos → Categoría → Ficha → Contacto
      ↓
Responsive + pruebas en celular
      ↓
Publicar en GitHub Pages
```

---

## 4. Definición de "terminado" para la Fase 1

- [ ] Las 5 páginas principales están hechas y se navega entre ellas
- [ ] Se ve bien en celular (mobile-first)
- [ ] El formulario envía las solicitudes
- [ ] El botón de WhatsApp funciona
- [ ] El sitio está publicado online

---

## 5. Próximos pasos inmediatos

1. Definir el **nombre y los colores** de la marca.
2. Conseguir datos de **3-4 proveedores de ejemplo** por categoría.
3. Empezar por el **header, footer y menú** (se usan en todas las páginas).

> 🔄 Este plan se ajusta a medida que avanzamos. Si una tarea lleva más o menos, se actualiza.
