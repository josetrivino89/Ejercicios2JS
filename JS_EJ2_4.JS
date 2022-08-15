let suma = 0 ;

do { let numeros = parseInt(prompt("ingrese un numero"))
    
if(Number(numeros)== numeros) {suma = suma + numeros }
else if (numeros != undefined) {alert("por favor ingresa un numero valido")}
} 
while (confirm("Quieres ingresar otro numero?")); document.write(suma)

    

