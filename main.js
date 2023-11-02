const productos = {
    Accesorios: [
        { nombre: "Billetera Rosas", precio: 1600 },
        { nombre: "Paraguas Estampados", precio: 2100 },
        { nombre: "Organizador de Viaje", precio: 1800 },
    ],
    Belleza: [
        { nombre: "Brocha Pincel", precio: 1500 },
        { nombre: "Espejo", precio: 1200 },
        { nombre: "Peine", precio: 1100 },
    ],
    Manicuría: [
        { nombre: "Set Manicuría 5 Piezas", precio: 2200 },
        { nombre: "Set Manicuría 9 Piezas", precio: 2500 },
        { nombre: "Set Manicuría 10 Piezas", precio: 2600 },
    ],
};

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(categoria, productoIndex) {
    const producto = productos [categoria] [productoIndex];
    carrito.push(producto);
    actualizarCarrito();
    alert(`
    Se ha agregado ${producto.nombre} al carrito.
    `);
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
    alert(`
    Se ha eliminado ${productoEliminado.nombre} del carrito.
    `);
}

function actualizarCarrito(){
    const carritoDiv = document.getElementById("carrito");
    carritoDiv.innerHTML = "";

    carrito.forEach((productos, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
            <h2>${productos.nombre}</h2>
            <b>${productos.precio}</b>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        carritoDiv.appendChild(itemDiv);
    });
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

function vaciarCarrito () {
    carrito = [];
    actualizarCarrito();
    alert("Esta seguro de vaciar el carrito");
}

const productosDiv = document.getElementById("productos");

for (const categoria in productos){
    const categoriaDiv = document.createElement("div");
    categoriaDiv.innerHTML = `
    <h1>${categoria}</h1>
    `;
    productosDiv.appendChild(categoriaDiv);

    productos[categoria].forEach((productos, productoIndex) => {
        const productosDiv = document.createElement("div");
        productosDiv.innerHTML = `
            <h3>${productos.nombre}</h3>
            <b>${productos.precio}</b>
            <button onclick="agregarAlCarrito('${categoria}', ${productoIndex})">Agregar al Carrito</button>
        `;
        categoriaDiv.appendChild(productosDiv)
    });
};

const vaciarCarritoButton = document.getElementById("vaciar-carrito");
vaciarCarritoButton.addEventListener("click", vaciarCarrito);