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
    Desea agregar ${producto.nombre} al carrito.
    `);
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
    alert(`
    Desea eliminar ${productoEliminado.nombre} del carrito.
    `);
}

function actualizarCarrito(){
    const carritoActualizado = document.getElementById("carrito");
    carritoActualizado.innerHTML = "";

    carrito.forEach((productos, index) => {
        const cargarProductos = document.createElement("div");
        cargarProductos.innerHTML = `
            <h2>${productos.nombre}</h2>
            <b>$${productos.precio}</b>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        carritoActualizado.appendChild(cargarProductos);
    });
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

function calcularTotalCarrito() {
    const total = carrito.reduce((accumulator, producto) => accumulator + producto.precio, 0);
    alert(`El total de la compra es de $${total}`);
}
const calcularTotalButton = document.getElementById("calcular-total");
calcularTotalButton.addEventListener("click", calcularTotalCarrito);


function vaciarCarrito () {
    carrito = [];
    actualizarCarrito();
    alert("Esta seguro de vaciar el carrito");
}

const productosDeCategorias = document.getElementById("productos");

for (const categoria in productos){
    const categoriaDiv = document.createElement("div");
    categoriaDiv.innerHTML = `
    <h1>${categoria}</h1>
    `;
    productosDeCategorias.appendChild(categoriaDiv);

    productos[categoria].forEach((productos, productoIndex) => {
        const productosDeCategorias = document.createElement("div");
        productosDeCategorias.innerHTML = `
            <h3>${productos.nombre}</h3>
            <b>$${productos.precio}</b>
            <button onclick="agregarAlCarrito('${categoria}', ${productoIndex})">Agregar al Carrito</button>
        `;
        categoriaDiv.appendChild(productosDeCategorias)
    });
};

const vaciarCarritoButton = document.getElementById("vaciar-carrito");
vaciarCarritoButton.addEventListener("click", vaciarCarrito);