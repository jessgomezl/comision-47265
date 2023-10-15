function saludar(){
    let nombre = prompt("Ingrese su nombre");
    if (!nombre){
        alert("No ingreso correctamente su nombre. Porfavor intentelo nuevamente");
    }else{
        alert(`${nombre} te damos la bienvenida a tienda VICKYS`);
    }
}

function mostrarCategoriasYProductos() {
    const categorias = [
        "Accesorios", 
        "Belleza", 
        "Manicuría"
    ];
    const productos = {
        Accesorios: [
            { nombre: "Billetera Rosas", precio: 1500 },
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

    const seleccionCategoria = Number(prompt("Elige una categoría:\n1) Accesorios\n2) Belleza\n3) Manicuría"));

    if (seleccionCategoria >= 1 && seleccionCategoria <= categorias.length) {
        const categoriaElegida = categorias[seleccionCategoria - 1];
        alert(`Has elegido la categoría: ${categoriaElegida}`);

        const productosCategoria = productos[categoriaElegida];

        const seleccionProducto = Number(prompt(`Seleccione el producto a buscar "${categoriaElegida}":\n${productosCategoria.map((producto, index) => `${index + 1}) ${producto.nombre}`).join("\n")}`));

        if (seleccionProducto >= 1 && seleccionProducto <= productosCategoria.length) {
            const productoElegido = productosCategoria[seleccionProducto - 1];
                alert(`Has elegido el producto: ${productoElegido.nombre} - Precio: ${productoElegido.precio}`);
        } else {
            alert("Selección de producto no encontrado. Por favor, elige una opción correcta.");
        }

    } else {
        alert("Selección de categoría no encontrado. Por favor, elige una categoría correcta.");
    }
    
    finalizar();
}

function finalizar() {
    alert("¡Muchas gracias por visitar nuestra tienda!");
}

saludar ();

mostrarCategoriasYProductos();

