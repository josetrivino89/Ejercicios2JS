// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456

let numero = parseInt (prompt("Ingrese un numero para construir una piramide"))
let repetir

if ( Number(numero) == numero) {
    for (let index=numero; numero <=50; numero++) {
        for (let repetir = numero; repetir <= 50; repetir++) {
            document.write(numero)            
        }   
    document.write("<br>")    }
    
} else if (Number(numero) != numero) { alert("Por favor ingrese un numero")
    
}
