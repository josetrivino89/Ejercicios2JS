let frase = prompt("ingrese una frase y te dire cuantas vocales tiene");
let largofrase = frase.length;
frase=frase.toLowerCase();

let contador_a = 0;
let contador_e = 0;
let contador_i = 0;
let contador_o = 0;
let contador_u = 0;
let i;

for (i= 0; i < largofrase; i++) {
    element = frase.charAt(i);
    if      (element === "a") { contador_a = contador_a+1}
    else if (element === "e") { contador_e = contador_e+1}
    else if (element === "i") { contador_i = contador_i+1}
    else if (element === "o") { contador_o = contador_o+1}
    else if (element === "u") { contador_u = contador_u+1}      
    
    
}
document.write("<br> Cantidad de vocales a es " + contador_a)
document.write("<br> Cantidad de vocales e es " + contador_e)
document.write("<br> Cantidad de vocales i es " + contador_i)
document.write("<br> Cantidad de vocales o es " + contador_o)
document.write("<br> Cantidad de vocales u es " + contador_u)
