let calificacion = parseInt(prompt("Ingrese una calificacion del 0 a 10"))
let calificaion_entero = Math.round(calificacion) 

if (calificaion_entero <=2 && calificaion_entero>0) {document.write("Su nota es deficiente ya que es " + calificaion_entero);}
else if (calificaion_entero <=3 && calificaion_entero<=4) {document.write("Su nota es Inuficiente ya que es " + calificaion_entero);}
else if (calificaion_entero <=5 && calificaion_entero<=6) {document.write("Su nota es Suficiente tienes un "+calificaion_entero);}
else if (calificaion_entero ==7 ) {document.write("Su nota es Bien tienes un:" +  calificaion_entero);}
else if (calificaion_entero <=8 && calificaion_entero<=9) {document.write("Su nota es Notable ya que tienes"+calificaion_entero);}
else if (calificaion_entero ==10) {document.write("Su nota es Sobresaliente tienes un "+ calificaion_entero);}
else if (calificaion_entero >10) {alert(" Numero erroneo Ingres un numero del 0 a 10");}
else if (calificaion_entero <0) {alert("Numero erroneo Ingres un numero del 0 a 10");}
else {alert("Por favor Ingrese un numero")}
