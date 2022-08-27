
let ingresar = prompt(" Calculadora de Interes Simple. ¿Desea calcular su plazo fijo? Responder con un Si o No.")

while(ingresar.toLowerCase() == "si"){
    let capitalInicial = prompt("Ingrese capital inicial. (En pesos)")
    let interes = parseFloat(prompt("Ingrese el interes. (En decimal con . )"))
    let meses = parseInt(prompt("Ingrese la cantidad de meses."))
    
    console.log(`Su capital final es: ${capitalInicial*interes*meses}`)
    alert(`Su capital final es: ${capitalInicial*interes*meses}`)

    ingresar = prompt("¿Quiere hacer otro calculo? Responder Si o No.")
}

