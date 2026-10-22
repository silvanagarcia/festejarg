// ============================================================
// Página de categoría: muestra los proveedores de la categoría
// elegida, leída del parámetro ?cat= de la URL.
// ============================================================

// 1. Leer el parámetro "cat" de la URL (ej: categoria.html?cat=salones)
const params = new URLSearchParams(window.location.search);
const catId = params.get("cat");

// 2. Buscar los datos de esa categoría
const categoria = CATEGORIAS.find(c => c.id === catId);

// 3. Completar el encabezado de la página
const tituloCategoria = document.getElementById("tituloCategoria");
const descCategoria = document.getElementById("descCategoria");
const gridProveedores = document.getElementById("gridProveedores");

if (categoria) {
    tituloCategoria.textContent = `${categoria.icono} ${categoria.nombre}`;
    descCategoria.textContent = categoria.descripcion;
} else {
    tituloCategoria.textContent = "Categoría no encontrada";
    descCategoria.textContent = "Elegí una categoría desde la página de servicios.";
}

// 4. Filtrar los proveedores de esa categoría
const proveedores = PROVEEDORES.filter(p => p.categoria === catId);

// 5. Mostrar las tarjetas (o un mensaje si no hay proveedores todavía)
if (proveedores.length === 0) {
    gridProveedores.innerHTML = `
        <p class="sin-resultados">
            Todavía no hay proveedores cargados en esta categoría.
            ¡Pronto sumamos más! Mientras tanto, podés
            <a href="contacto.html">pedir tu presupuesto</a>.
        </p>`;
} else {
    gridProveedores.innerHTML = proveedores.map(p => `
        <a class="card-proveedor" href="proveedor.html?id=${p.id}">
            <h3>${p.nombre}</h3>
            <p class="zona">📍 ${p.zona}</p>
            <p>${p.descripcion}</p>
            ${p.precioDesde ? `<p class="precio-tag">Desde ${p.precioDesde}</p>` : ""}
            <span class="ver-mas">Ver ficha →</span>
        </a>
    `).join("");
}
