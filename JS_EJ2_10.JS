let index;
let index2;
let Number1=parseInt(prompt("Ingrese um mumero para multiplicar"));
let Number2=parseInt(prompt("Ingrese um mumero para multiplicar"));
let multiplicar= number1 * number2

for (let index = 0; index <= Number1; index++) {
    
    for (let index2 = 0; index2 < Number2; index2++) {
        document.write(index + "x" + index2)
        
               
    }
    document.write("=" + multiplicar);

}