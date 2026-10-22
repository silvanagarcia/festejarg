// ============================================================
// Lógica general del sitio
// ============================================================

// --- Menú hamburguesa (mobile) ---
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
        nav.classList.toggle("abierto");
    });
}

// --- Generar tarjetas de categorías en el inicio ---
const gridCategorias = document.getElementById("gridCategorias");

if (gridCategorias && typeof CATEGORIAS !== "undefined") {
    gridCategorias.innerHTML = CATEGORIAS.map(cat => `
        <a class="card-categoria" href="categoria.html?cat=${cat.id}">
            <div class="icono">${cat.icono}</div>
            <h3>${cat.nombre}</h3>
            <p>${cat.descripcion}</p>
        </a>
    `).join("");
}
