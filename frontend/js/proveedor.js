// ============================================================
// Ficha de proveedor: muestra el detalle del proveedor cuyo
// id viene en el parámetro ?id= de la URL.
// ============================================================

// 1. Leer el id de la URL (ej: proveedor.html?id=1)
const params = new URLSearchParams(window.location.search);
const provId = Number(params.get("id"));

// 2. Buscar el proveedor por id
const proveedor = PROVEEDORES.find(p => p.id === provId);

// 3. Buscar a qué categoría pertenece (para el botón "volver")
const ficha = document.getElementById("ficha");

if (!proveedor) {
    ficha.innerHTML = `
        <div class="page-header">
            <h1>Proveedor no encontrado</h1>
            <p>No encontramos ese proveedor.</p>
            <a href="servicios.html" class="volver">← Volver a servicios</a>
        </div>`;
} else {
    const categoria = CATEGORIAS.find(c => c.id === proveedor.categoria);
    const nombreCat = categoria ? categoria.nombre : "Servicios";

    document.title = `${proveedor.nombre} — FestejARG`;

    // Lista de puntos destacados (si el proveedor los tiene)
    const destacadosHTML = (proveedor.destacados || [])
        .map(d => `<li>${d}</li>`).join("");

    // Lista de opciones/servicios detallados (menús, combos, etc.)
    const serviciosHTML = (proveedor.servicios || [])
        .map(s => `
            <article class="opcion">
                <h3>${s.titulo}</h3>
                <p>${s.detalle}</p>
            </article>
        `).join("");

    // Precio orientativo (si está cargado)
    const precioHTML = proveedor.precioDesde
        ? `<p class="precio-desde">Desde <strong>${proveedor.precioDesde}</strong></p>`
        : "";

    ficha.innerHTML = `
        <a href="categoria.html?cat=${proveedor.categoria}" class="volver">← Volver a ${nombreCat}</a>

        <div class="ficha-cabecera">
            <div class="ficha-imagen">${categoria ? categoria.icono : "🎉"}</div>
            <div>
                <h1>${proveedor.nombre}</h1>
                <p class="zona">📍 ${proveedor.zona}</p>
                <span class="etiqueta">${nombreCat}</span>
                ${precioHTML}
            </div>
        </div>

        <section class="ficha-detalle">
            <h2>Sobre este proveedor</h2>
            <p>${proveedor.descripcion}</p>

            ${destacadosHTML ? `
            <h2>Lo que destaca</h2>
            <ul class="lista-destacados">${destacadosHTML}</ul>
            ` : ""}
        </section>

        ${serviciosHTML ? `
        <section class="ficha-opciones">
            <h2>Opciones y servicios disponibles</h2>
            <div class="grid-opciones">${serviciosHTML}</div>
        </section>
        ` : ""}

        <div class="ficha-acciones">
            <a href="contacto.html" class="btn btn-form">Pedir presupuesto</a>
            <a href="https://wa.me/5490000000000?text=Hola! Me interesa ${encodeURIComponent(proveedor.nombre)}"
               class="btn btn-wsp" target="_blank">💬 WhatsApp</a>
        </div>
    `;
}
