function saludar(){
    let nombre = prompt("Ingrese su nombre");
    if (nombre === ""){
        alert("No ingreso correctamente su nombre. Porfavor intentelo nuevamente");
    }else{
        alert(`${nombre} te damos la bienvenida a tienda VICKYS`);
    }
}

function finalizar(){
    alert("¡Muchas gracias por visitar nuestra tienda!");}

saludar ();

let registrarse = Number(prompt("Quiere registrarse como: \n1 Mayorista \n2 Minorista"));

if  (registrarse === 1){
    alert("Ya podras contar con nuestros beneficios especiales");

    let categoria = Number(prompt("Elige una categoria para ver nuestros productos \n1 ACCESORIOS \n2  BELLEZA \n3  MANICURIA"));
    while (categoria != ("")){
        switch (categoria){
            case 1:
                alert("1 billetera rosas $1500 \n2 paraguas estampado $2100 \n3 organizador de viaje $1800");
            break;
            case 2:
                alert("1 brocha pincel $1500 \n2 espejo $1200");
            break;
            case 3:
                alert("1 set manicuria 5 piezas $2100 \n2 set manicuria 9 piezas $2500");
            break;
            default:
                alert("ingrese la categoria deseada");
            break;
            }
        categoria = Number(prompt("Elige una categoria para ver nuestros productos \n1 ACCESORIOS \n2  BELLEZA \n3  MANICURIA"));
    }
}else if(registrarse === 2){
    alert("No podras aprovechar de descuentos ni beneficios");
} finalizar();
