let productos = [];

fetch("../js/data.json")
.then(response => response.json())
    .then(data => {
        productos = data;
        mostrarProductos(productos); 
    });

function mostrarProductos(productosFiltrados) {
    const productosDiv = document.getElementById("productos");
    productosDiv.innerHTML = "";

    productosFiltrados.forEach(producto => { 
        const productoDiv = document.createElement("div");
        productoDiv.innerHTML = `
            <img class="img-producto" src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <b>$${producto.precio}</b>
            `;
        const botonAgregar = document.createElement("button");
        botonAgregar.textContent = 'Agregar al Carrito';
        botonAgregar.addEventListener('click', function() {
            agregarAlCarrito(producto.id);
        });

        productoDiv.appendChild(botonAgregar);
        productosDiv.appendChild(productoDiv);
    });
}
    const accesoriosBtn = document.getElementById("accesoriosBtn");
    const bellezaBtn = document.getElementById("bellezaBtn");
    const manicuriaBtn = document.getElementById("manicuriaBtn");

    accesoriosBtn.addEventListener("click", function() {
    const productosAccesorios = productos.filter(producto => producto.id.startsWith("accesorios"));
        mostrarProductos(productosAccesorios);
    });

    bellezaBtn.addEventListener("click", function() {
        const productosBelleza = productos.filter(producto => producto.id.startsWith("belleza"));
        mostrarProductos(productosBelleza);
    });

    manicuriaBtn.addEventListener("click", function() {
        const productosManicuria = productos.filter(producto => producto.id.startsWith("manicuria"));
        mostrarProductos(productosManicuria);
    });

function agregarAlCarrito(idProducto) {
    const productoSeleccionado = productos.find(producto => producto.id === idProducto);
    if (productoSeleccionado) {
        Swal.fire({
            title: `¡Producto agregado al carrito!`,
            text: `Agregar al carrito \n ${productoSeleccionado.nombre} $${productoSeleccionado.precio}`,
            icon: 'success'
        }).then((result) => {
            if (result.isConfirmed) {
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            carrito.push(productoSeleccionado);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            mostrarProductosEnCarrito();
            }
        });
    }
}

