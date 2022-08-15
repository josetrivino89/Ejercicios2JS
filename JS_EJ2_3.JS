let texto = ""
do{ texto = texto + prompt("Ingrese otro texto")+ " - "}
while (confirm("quieres ingresar otra frase o palabra?")) { document.write(texto)}