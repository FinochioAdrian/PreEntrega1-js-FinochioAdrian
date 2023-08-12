
let exit = true;
let saludo = true
let nombreUsuario = null;

// Función Controladora Principal
const appController = () =>{

    saludar()
    registrarUsuario();

do {
    let resUsuario =  solicitarNumero(`Nombre de Usuario: ${nombreUsuario},
    Ingrese una Opción
    (Ingrese solo números)
    1 -Calcular el Subtotal de productos
    2- Generar una tabla de multiplicar por consola
    3- Registrar Nuevo nombre
    10 - Salir  `, "Entrada Incorrecta, Ingrese un número valido")
    
    switch (resUsuario) {
        case 1:
            funcionCalcularSubtotal()
            
            break;

        case 2:

            tablaMultiplicar();
            break;
        case 3:

        registrarUsuario();
            break;

        case 10:
            exit=false
            break;
    
        default:
            continue;
            
    }

} while (exit);
despedida()
}
//Funcion Inicializadora de calcular Subtotal
function funcionCalcularSubtotal() {
    let salir =false
    alert(`Bienvenido ${nombreUsuario} al calculo de Subtotales`)
    do{
        salir =false
        let cantidadProductos = prompt ("Ingrese la cantidad de diferentes Productos o presione cancelar par salir ")
        if  (isNaN(cantidadProductos)){
            alert("Entrada Incorrecta, Ingrese un número valido");
            salir=true;
            continue;
        }
        if (cantidadProductos==null){
            break;
        }
        calcularSubtotal(cantidadProductos)
        let resUsu= prompt(`Desea calcular otros subtotales
        1-Si
        2-No
        `)
        if  (isNaN(resUsu)||resUsu<0||resUsu>2){
            alert("Entrada Incorrecta, Ingrese un número valido");
            continue;
        }
        if(resUsu==1){
            salir=true;
        }

    }while(salir);
    return;
}
// Carga por promp los diferentes productos
const calcularSubtotal=(cantidadProductos)=>{
let template =`Producto    $Producto    Cantidad    Subtotal\n`;
let total = 0;
for (let index = 0; index < cantidadProductos; index++) {
    
    let nombreProducto = prompt(`Ingrese el nombre del producto`)
    let precioProducto = solicitarNumero(`Ingrese el precio del producto`,"Ingrese un valor numerico")   
    let cantProduct = solicitarNumero(`Ingrese la cantidad del Producto`,)
    let subTotal = precioProducto * cantProduct
   template+=`${nombreProducto}    $${precioProducto}    ${cantProduct}    $${subTotal}\n`
    total +=subTotal;
}
template+=`Total = $${total}`
alert(template);
}
//Mesaje de binvenida
const saludar = () => {
    if (saludo){
        alert("Bienvenido!! \n Esté es un Programa Multifuncional")
        saludo=false

    }

}
//Mensaje de despedida
const despedida = () => {
    alert (`GoodBye, gracias por visitarnos ${nombreUsuario}`)
}


//Funcion que solicita un numero al usuario y verfica que sea un numero
const solicitarNumero =(msgSolicitud,msgResolicitud="Ingrese un valor numerico")=>{
    
    let numberIngresado=undefined;
    let salir=true
    do {
        let userPromp = Number(prompt(msgSolicitud))
        //comprobamos que el precio ingresado sea un numero
        if (isNaN(userPromp)){
            alert(msgResolicitud)
        }else {
            numberIngresado=userPromp;
            salir=false;
        }
    }while(salir)
    
    return numberIngresado
    
}

// Funcion registradora de Nombre de Usuario
const registrarUsuario = ()=>{
   
    do{
        if (nombreUsuario){
            nombreUsuario = prompt (`Nombre Actual ${nombreUsuario}.
            Ingrese su nuevo nombre: `)
        }
        else
        {
            nombreUsuario = prompt ("Ingrese su nombre: ")

        }
            
        


    }while(!nombreUsuario)

}

// Funcion tabla de multiplicar

const tablaMultiplicar =()=>{
    console.clear();
    console.log(`Tabla de multiplicar`)
    let tablaInicial = solicitarNumero("Ingrese el valor de la tabla incial")
    let tablaFinal = solicitarNumero("Ingrese el valor de la tabla Final");

    for(tablaInicial ; tablaInicial<=tablaFinal; tablaInicial++){
        for(let j = 1 ; j<=10; j++){
            console.log(`${tablaInicial} por ${j} es igual a = ${tablaInicial*j}`)
        }
    }
    alert(`Revisa la Consola [Sal de la secuencia]`)
}

appController()