// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let frase = prompt ("introduce una frase  te la devolvere al reves")
let frase_lenght = frase.length
let frase_reves;
let frase_invertida="";

for (let index = 0; index < frase_lenght; index++) {
    frase_reves = frase.charAt(index);
    frase_invertida = frase_reves + frase_invertida;
    
}
document.write(frase_invertida)
