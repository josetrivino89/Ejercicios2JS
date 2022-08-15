// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-

// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10

let variable
let variable2=500

for (let variable = 1; variable <= variable2; variable++) {
    document.write(variable);
    document.write("<br>")
    if(variable %4 == 0){document.write("Es Multiplo de 4")}
    document.write("<br>")
    if(variable %9 == 0){document.write("Es Multiplo de 9")}
    document.write("<br>")    
    if(variable %5 == 0){document.write("<hr>")}
    document.write("<br>")
    
}
