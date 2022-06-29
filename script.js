function cambio (){
    let realCambio = 1.03;
    let dolarCambio = 5.84;
    let monto = parseInt(document.getElementById("monto").value);
   
//Cambio a Bolivares

    let bolivares = monto * realCambio;
 
    let cambioBs = document.getElementById("bolivar");

    let cambio =   (`Monto a recibir en Bolivares Bs ${bolivares.toFixed(2)}`)

    cambioBs.innerHTML = cambio;

   

//Cambio a Dolar

    let dolar = bolivares / dolarCambio;
    console.log(dolar);

    let cambio$ = document.getElementById("dolar");

    let cambio1 =  (`Monto a recibir en Dolar $ ${dolar.toFixed(2)}`)

    cambio$.innerHTML = cambio1;

   

}
