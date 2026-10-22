// ============================================================
// Datos del sitio (Fase 1: datos fijos, sin backend)
// Cuando llegue el backend, estos datos vendrán de una base de datos.
//
// Estructura de un proveedor:
//   id          -> identificador único (número)
//   categoria   -> id de la categoría a la que pertenece
//   nombre      -> nombre comercial
//   zona        -> zona de cobertura
//   descripcion -> resumen corto (se ve en la tarjeta del listado)
//   precioDesde -> precio orientativo "desde" (texto)
//   destacados  -> lista de puntos fuertes / beneficios
//   servicios   -> lista de opciones concretas, cada una con
//                  { titulo, detalle } (ej: un menú, un combo de sonido)
// ============================================================

// --- Categorías de servicios ---
const CATEGORIAS = [
    { id: "salones",     icono: "🏛️", nombre: "Salones",            descripcion: "Salones, quintas y espacios al aire libre." },
    { id: "sonido",      icono: "🎵", nombre: "Sonido y música",    descripcion: "DJ, bandas en vivo, equipos e iluminación." },
    { id: "catering",    icono: "🍽️", nombre: "Catering",           descripcion: "Comida, mozos, barra de tragos y mesa dulce." },
    { id: "fotografia",  icono: "📸", nombre: "Fotografía y video", descripcion: "Fotógrafo, filmación y cabina de fotos." },
    { id: "decoracion",  icono: "🎈", nombre: "Decoración",         descripcion: "Globos, flores, centros de mesa y cartelería." },
    { id: "animacion",   icono: "🎭", nombre: "Animación y shows",  descripcion: "Animadores, carioca y shows en vivo." }
];

// --- Proveedores de ejemplo ---
const PROVEEDORES = [

    // ============ SALONES ============
    {
        id: 1, categoria: "salones", nombre: "Salón Las Rosas", zona: "Centro",
        descripcion: "Salón elegante para hasta 200 personas con estacionamiento propio.",
        precioDesde: "$450.000 el evento",
        destacados: ["Capacidad hasta 200 personas", "Estacionamiento propio", "Aire acondicionado frío/calor", "Cocina equipada para catering"],
        servicios: [
            { titulo: "Salón completo (día)", detalle: "Uso exclusivo del salón por 8 horas, mesas, sillas y mantelería incluidas." },
            { titulo: "Salón + living VIP", detalle: "Suma un sector de recepción con sillones, barra y guardarropas." },
            { titulo: "Ceremonia en jardín", detalle: "Espacio al aire libre para la ceremonia civil antes de la fiesta." }
        ]
    },
    {
        id: 2, categoria: "salones", nombre: "Quinta El Sol", zona: "Afueras",
        descripcion: "Espacio al aire libre con parque, pileta y galería techada.",
        precioDesde: "$380.000 el evento",
        destacados: ["Parque de 2 hectáreas", "Pileta y quincho", "Galería techada por lluvia", "Pernocte opcional"],
        servicios: [
            { titulo: "Quinta día completo", detalle: "Parque, quincho y galería desde las 10 hs hasta las 2 am." },
            { titulo: "Combo casamiento", detalle: "Incluye ceremonia en el parque, sector cóctel y salón techado." },
            { titulo: "Alquiler + pernocte", detalle: "Uso de la quinta con posibilidad de quedarse a dormir hasta 8 personas." }
        ]
    },
    {
        id: 3, categoria: "salones", nombre: "Espacio Nórdico Eventos", zona: "Norte",
        descripcion: "Salón moderno estilo industrial, ideal para fiestas de 15 y corporativos.",
        precioDesde: "$520.000 el evento",
        destacados: ["Diseño industrial moderno", "Pantalla LED gigante", "Barra central iluminada", "Capacidad hasta 150 personas"],
        servicios: [
            { titulo: "Salón estándar", detalle: "Salón completo con pantalla LED, barra y mobiliario de diseño." },
            { titulo: "Fiesta de 15 llave en mano", detalle: "Salón + pista iluminada + barra de tragos sin alcohol para la quinceañera." },
            { titulo: "Evento corporativo", detalle: "Configuración auditorio o mesas, proyector, sonido y coffee break." }
        ]
    },

    // ============ SONIDO Y MÚSICA ============
    {
        id: 4, categoria: "sonido", nombre: "DJ Nico Eventos", zona: "Toda la ciudad",
        descripcion: "DJ profesional con equipos de sonido e iluminación para todo tipo de fiesta.",
        precioDesde: "$120.000 el evento",
        destacados: ["+10 años de experiencia", "Música a pedido de los invitados", "Equipo de respaldo ante fallas", "Prueba de sonido previa"],
        servicios: [
            { titulo: "Combo Básico", detalle: "DJ + equipo de sonido para hasta 80 personas + 2 luces LED de pista." },
            { titulo: "Combo Fiesta", detalle: "Sonido para 150 personas + pista luminosa + 4 cabezales móviles + máquina de humo." },
            { titulo: "Combo Full Show", detalle: "Sonido profesional + pista luminosa + pantalla LED + láser + cañón de CO2 para la entrada." }
        ]
    },
    {
        id: 5, categoria: "sonido", nombre: "Audiomax Producciones", zona: "Centro y Sur",
        descripcion: "Alquiler e instalación de sonido profesional, pantallas e iluminación.",
        precioDesde: "$95.000 el evento",
        destacados: ["Pantallas gigantes LED", "Técnico presente toda la noche", "Iluminación arquitectónica", "Opción banda en vivo"],
        servicios: [
            { titulo: "Pantalla LED 3x2 m", detalle: "Pantalla gigante para proyectar video, fotos del homenajeado o en vivo del evento." },
            { titulo: "Pista luminosa LED", detalle: "Piso de pista iluminado con paneles LED que cambian al ritmo de la música." },
            { titulo: "Iluminación ambiental", detalle: "Bañado de paredes con color (uplighting) para dar clima a todo el salón." },
            { titulo: "Banda en vivo + DJ", detalle: "Combinación de banda para la recepción y DJ para la fiesta." }
        ]
    },
    {
        id: 6, categoria: "sonido", nombre: "Estudio Beat Live", zona: "Toda la ciudad",
        descripcion: "DJ y animación musical con foco en fiestas de 15 y casamientos.",
        precioDesde: "$140.000 el evento",
        destacados: ["DJ + MC animador", "Pantallas y robótica de luces", "Cotillón LED incluido", "Playlist personalizada"],
        servicios: [
            { titulo: "DJ + Pantallas", detalle: "Set de DJ con 2 pantallas laterales para fotos y videos del evento." },
            { titulo: "Pista luminosa + láser", detalle: "Pista con piso LED, láser multicolor y máquina de humo bajo para efecto nube." },
            { titulo: "Carioca LED", detalle: "Momento de cotillón con pulseras, lentes y accesorios luminosos para los invitados." }
        ]
    },

    // ============ CATERING ============
    {
        id: 7, categoria: "catering", nombre: "Sabores Catering", zona: "Centro",
        descripcion: "Catering integral para casamientos y cumpleaños de 15, con mozos incluidos.",
        precioDesde: "$18.000 por persona",
        destacados: ["Mozos y vajilla incluidos", "Opciones vegetarianas y sin TACC", "Prueba de menú previa", "Barra de tragos opcional"],
        servicios: [
            { titulo: "Menú Clásico", detalle: "Entrada fría, plato principal (pollo o cerdo con guarnición), postre helado y mesa dulce simple." },
            { titulo: "Menú Premium", detalle: "Recepción con 6 bocados, entrada caliente, bife de chorizo o salmón, postre a elección y mesa dulce completa." },
            { titulo: "Menú Gourmet", detalle: "Isla de quesos, 10 bocados de recepción, plato de autor, carta de postres y candy bar temático." },
            { titulo: "Menú Vegetariano / Vegano", detalle: "Opción completa a base de vegetales, legumbres y pastas, apta para todo el evento." }
        ]
    },
    {
        id: 8, categoria: "catering", nombre: "La Mesa Fiesta", zona: "Norte",
        descripcion: "Food trucks y estaciones de comida en vivo para eventos informales.",
        precioDesde: "$14.000 por persona",
        destacados: ["Estaciones de comida en vivo", "Food trucks a elección", "Ideal fiestas informales", "Barra de café de especialidad"],
        servicios: [
            { titulo: "Estación de Pizzas", detalle: "Horno a la vista con pizzas artesanales variadas servidas durante toda la fiesta." },
            { titulo: "Estación Parrilla / Choripán", detalle: "Parrillero en vivo con choripanes, bondiola y guarniciones." },
            { titulo: "Estación Dulce & Café", detalle: "Barra de café de especialidad, churros, waffles y mini postres." }
        ]
    },
    {
        id: 9, categoria: "catering", nombre: "Delicias Gourmet Eventos", zona: "Toda la ciudad",
        descripcion: "Catering de alta cocina con chef a cargo y servicio de etiqueta.",
        precioDesde: "$26.000 por persona",
        destacados: ["Chef a cargo del evento", "Servicio de etiqueta", "Maridaje de vinos opcional", "Menú 100% personalizable"],
        servicios: [
            { titulo: "Menú Degustación (5 pasos)", detalle: "Cinco tiempos diseñados por el chef, con maridaje de vinos opcional." },
            { titulo: "Menú Internacional", detalle: "Estaciones de cocina del mundo: mediterránea, asiática y latina." },
            { titulo: "Menú Infantil", detalle: "Opciones pensadas para los más chicos: nuggets, mini hamburguesas y postre divertido." }
        ]
    },

    // ============ FOTOGRAFÍA Y VIDEO ============
    {
        id: 10, categoria: "fotografia", nombre: "Foto Estudio Luz", zona: "Norte",
        descripcion: "Fotografía y video profesional de eventos, con entrega en álbum y digital.",
        precioDesde: "$150.000 el evento",
        destacados: ["Dos fotógrafos", "Entrega en álbum y digital", "Edición profesional", "Fotos de preboda opcionales"],
        servicios: [
            { titulo: "Pack Fotografía", detalle: "Cobertura completa del evento + 300 fotos editadas en galería digital." },
            { titulo: "Pack Foto + Video", detalle: "Fotografía + video resumen de 5 minutos editado con música." },
            { titulo: "Pack Premium", detalle: "Dos fotógrafos, video completo, álbum impreso de tapa dura y sesión de preboda." }
        ]
    },
    {
        id: 11, categoria: "fotografia", nombre: "Cabina Retro Fotos", zona: "Centro",
        descripcion: "Cabina de fotos y photobooth con props para divertir a los invitados.",
        precioDesde: "$70.000 el evento",
        destacados: ["Impresión instantánea", "Props y accesorios divertidos", "Libro de firmas con copias", "Operador incluido"],
        servicios: [
            { titulo: "Cabina Clásica", detalle: "Cabina cerrada con cortina, impresiones ilimitadas por 3 horas y props." },
            { titulo: "Espejo Mágico", detalle: "Espejo interactivo de cuerpo entero con animaciones y firma en pantalla táctil." },
            { titulo: "Plataforma 360°", detalle: "Plataforma giratoria que graba videos 360° de los invitados, ideal para redes." }
        ]
    },
    {
        id: 12, categoria: "fotografia", nombre: "Dron Vista Eventos", zona: "Toda la ciudad",
        descripcion: "Tomas aéreas con dron y video cinematográfico para eventos al aire libre.",
        precioDesde: "$110.000 el evento",
        destacados: ["Tomas aéreas con dron", "Video estilo cine", "Ideal quintas y aire libre", "Piloto habilitado"],
        servicios: [
            { titulo: "Tomas aéreas", detalle: "Vuelos con dron para capturar el salón, la quinta y la entrada desde el aire." },
            { titulo: "Video Cinematográfico", detalle: "Trailer del evento de 2-3 minutos con edición estilo película." },
            { titulo: "Cobertura combinada", detalle: "Dron + fotógrafo en tierra para una cobertura completa del día." }
        ]
    },

    // ============ DECORACIÓN ============
    {
        id: 13, categoria: "decoracion", nombre: "Globos & Co.", zona: "Centro",
        descripcion: "Decoración con globos, arcos orgánicos y ambientación temática.",
        precioDesde: "$45.000 el evento",
        destacados: ["Arcos orgánicos de globos", "Temáticas a elección", "Backdrop para fotos", "Montaje y desarme incluidos"],
        servicios: [
            { titulo: "Arco de Globos", detalle: "Arco orgánico en colores de la fiesta para la entrada o detrás de la mesa principal." },
            { titulo: "Ambientación Temática", detalle: "Decoración completa según temática (ej: Hollywood, boho, neón) con cartelería." },
            { titulo: "Backdrop de Fotos", detalle: "Pared decorada con el nombre del homenajeado para el sector de fotos." }
        ]
    },
    {
        id: 14, categoria: "decoracion", nombre: "Flor de Evento", zona: "Norte",
        descripcion: "Ambientación floral, centros de mesa y arreglos para ceremonias.",
        precioDesde: "$60.000 el evento",
        destacados: ["Flores naturales de estación", "Centros de mesa a medida", "Arcos para ceremonia", "Asesoría de paleta de colores"],
        servicios: [
            { titulo: "Centros de Mesa", detalle: "Arreglos florales para cada mesa, en jarrones altos o bajos a elección." },
            { titulo: "Arco de Ceremonia", detalle: "Arco floral para la ceremonia civil o religiosa, armado en el lugar." },
            { titulo: "Camino de Mesa", detalle: "Decoración floral continua para mesas imperiales y la mesa principal." }
        ]
    },
    {
        id: 15, categoria: "decoracion", nombre: "Luces & Detalles", zona: "Toda la ciudad",
        descripcion: "Decoración con iluminación cálida, textiles y cartelería personalizada.",
        precioDesde: "$55.000 el evento",
        destacados: ["Guirnaldas de luces cálidas", "Cartelería personalizada", "Telas y drapeados", "Letras luminosas gigantes"],
        servicios: [
            { titulo: "Cortinas de Luces", detalle: "Techo y paredes decorados con guirnaldas de luces cálidas tipo 'cielo estrellado'." },
            { titulo: "Letras Luminosas", detalle: "Letras gigantes iluminadas con el nombre o la inicial del homenajeado." },
            { titulo: "Cartelería & Señalética", detalle: "Carteles de bienvenida, seating y detalles personalizados impresos." }
        ]
    },

    // ============ ANIMACIÓN Y SHOWS ============
    {
        id: 16, categoria: "animacion", nombre: "Animarte Shows", zona: "Centro",
        descripcion: "Animadores, recreadores y shows en vivo para todas las edades.",
        precioDesde: "$50.000 el evento",
        destacados: ["Animadores profesionales", "Shows para toda edad", "Cotillón luminoso incluido", "Coordinación de juegos"],
        servicios: [
            { titulo: "Animación Infantil", detalle: "Recreadores con juegos, pintacaritas y shows para los más chicos." },
            { titulo: "Show de Carioca", detalle: "Momento de batucada con cotillón luminoso y accesorios para prender la pista." },
            { titulo: "Pista de Baile Coordinada", detalle: "Animadores que coordinan los clásicos de la fiesta y la coreografía de entrada." }
        ]
    },
    {
        id: 17, categoria: "animacion", nombre: "Fuego & Magia", zona: "Toda la ciudad",
        descripcion: "Shows especiales: malabares con fuego, magia y acrobacias aéreas.",
        precioDesde: "$80.000 el evento",
        destacados: ["Show de fuego seguro", "Mago profesional", "Acrobacias aéreas", "Impacto garantizado para la entrada"],
        servicios: [
            { titulo: "Show de Fuego", detalle: "Espectáculo de malabares y acrobacia con fuego para la entrada o el brindis." },
            { titulo: "Mago & Mentalista", detalle: "Magia de cerca entre las mesas y un show central de 20 minutos." },
            { titulo: "Acrobacia Aérea", detalle: "Artista en telas o aro aéreo para un momento de impacto visual." }
        ]
    },
    {
        id: 18, categoria: "animacion", nombre: "DJ Kids Party", zona: "Norte",
        descripcion: "Animación temática para cumpleaños infantiles con personajes y juegos.",
        precioDesde: "$40.000 el evento",
        destacados: ["Personajes a elección", "Juegos y concursos", "Metegol y inflables", "Música apta para chicos"],
        servicios: [
            { titulo: "Personajes Temáticos", detalle: "Visita de personajes favoritos (superhéroes, princesas) con fotos y baile." },
            { titulo: "Zona de Juegos", detalle: "Inflables, metegol, tejo y juegos de destreza supervisados por recreadores." },
            { titulo: "Mini Disco Kids", detalle: "DJ con música para chicos, burbujas, luces suaves y concursos de baile." }
        ]
    }
];
