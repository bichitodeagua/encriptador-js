function encriptar() {
    let texto = document.getElementById("texto").value.toLowerCase();
    let textoCifrado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("resultado").innerText = "Texto Encriptado: " + textoCifrado;
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let textoDescifrado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("resultado").innerText = "Texto Desencriptado: " + textoDescifrado;
}
