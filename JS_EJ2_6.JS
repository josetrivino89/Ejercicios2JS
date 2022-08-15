//6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666

// Definimos variables

let index , repeticion ;
// creamos un ciclo For
for (let index = 1; index <= 30; index++) {
    // creamos el bucle
    for (let repeticion = 0; repeticion < index; repeticion++) {
    //resultado de la piramide
    document.write(index);      
        
    }
    document.write("<br>")     
}
