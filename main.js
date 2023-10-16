function saludar(){
    let nombre = prompt("Ingrese su nombre");
    if (!nombre){
        alert("No ingreso correctamente su nombre. Porfavor intentelo nuevamente");
    }else{
        alert(`${nombre} te damos la bienvenida a tienda VICKYS`);
    }
}

function mostrarCategoriasYProductos(){
    const categorias = [
        "Accesorios", 
        "Belleza", 
        "Manicuría"
    ];
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

    const seleccionCategoria = Number(prompt("Elige una categoría:\n1)Accesorios \n2)Belleza \n3)Manicuría"));

    if (seleccionCategoria >= 1 && seleccionCategoria <= categorias.length){
        const categoriaElegida = categorias[seleccionCategoria - 1];
            alert(`Has elegido la categoría: ${categoriaElegida}`);

        const productosCategoria = productos[categoriaElegida];
            alert(`Productos en la categoría ${categoriaElegida}:`);
        productosCategoria.forEach((producto, index) => {
            alert(`
            ${index + 1}) ${producto.nombre} 
            Precio: ${producto.precio}
            `);
        });

        const precioMinimo = Number(prompt("Filtrar productos por precio minimo. Ingresa el precio"));
        const productosFiltrados = productosCategoria.filter(producto => producto.precio <= precioMinimo);

        if (productosFiltrados.length > 0) {
                alert("Productos que cumplen con el precio:");
            productosFiltrados.forEach(producto => {
                alert(`
                    Nombre: ${producto.nombre} 
                    Precio: ${producto.precio}
                    `);
            });
        } else{
            alert("No hay productos que cumplan con el filtro de ese precio");
        }
    } else{
        alert("Selección de categoría no encontrado. Por favor, elige una categoría correcta");
    }
    finalizar();
}

function finalizar() {
    alert("¡Muchas gracias por visitar nuestra tienda!");
}

saludar ();

mostrarCategoriasYProductos();

