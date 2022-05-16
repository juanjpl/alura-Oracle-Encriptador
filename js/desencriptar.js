var botoneraCopiar = document.querySelector("#botonera-copiar");
var contenedorDerecho = document.querySelector("#contenedor-two");

btnDesencriptar.addEventListener("click", function(event) {
  event.preventDefault();

  console.log("Desencriptar Funciona");
  inputSalidaTwo.textContent = desencriptar(textoIngresadoOne.value);
  //console.log(desencriptar(textoIngresadoOne.value));
  //inputSalidaTwo.textContent = "";

  botoneraCopiar.classList.remove("d-invisible");
  botoneraCopiar.classList.add("d-visible");
});

botonCopiar.addEventListener("click", function(event) {
  event.preventDefault();
  var textoCopiado = inputSalidaTwo.textContent;

  //console.log("copiamos el texto!");
  setTimeout(function() {
    //console.log("Hola Mundo");
    textoIngresadoOne.value = "";
    imagenTwo.classList.remove("d-invisible");
    imagenTwo.classList.add("d-visible");
    textoNoEncontrado.classList.remove("d-invisible");
    textoNoEncontrado.classList.add("d-visible");
    inputSalidaTwo.textContent =
      "Ingresa el texto que desees encriptar o desencriptar";
    contenedorDerecho.classList.remove("j-arround");
    contenedorDerecho.classList.add("j-center");

    botoneraCopiar.classList.remove("d-visible");
    botoneraCopiar.classList.add("d-invisible");
  }, 1000);
  navigator.clipboard.writeText(textoCopiado);
});
