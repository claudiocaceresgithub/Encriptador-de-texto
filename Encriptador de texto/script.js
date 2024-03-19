function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");


if (texto.length != 0){
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent= "Texto encriptado con éxito";
    parrafo.textContent="";
    muñeco.src ="desencriptado.jpg";
} else {
    muñeco.src = "Muñeco.png";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto a encriptar o desencriptar";

  }
} 
/*  -------------------------------------------  */ 

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
    .replace(/ente/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");


if (texto.length != 0){
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent= "Texto desencriptado con éxito";
    parrafo.textContent= "";
    muñeco.src ="desencriptado.jpg";
} else {
    muñeco.src = "Muñeco.png";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto a encriptar o desencriptar";

  }
}
