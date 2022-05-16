console.log("Conectado encriptar!");

var textoIngresadoOne = document.querySelector("#ingreso-area");
textoIngresadoOne.value = "";

var btnEncriptar = document.querySelector("#btn-encriptar");

var btnDesencriptar = document.querySelector("#btn-desencriptar");

var inputSalidaTwo = document.querySelector("#ingreso-input");

var imagenTwo = document.querySelector("#imagen");
var textoNoEncontrado = document.querySelector("#no-encontrado");

var botonCopiar = document.querySelector("#btn-copiar");

btnEncriptar.addEventListener("click", function(event) {
  event.preventDefault();

  //console.log("Funciona el btn-encriptar!")

  var textoIngresado = textoIngresadoOne.value;

  if (!textoIngresado) {
    console.log("No se ingresó nada ");
    textoIngresadoOne.ariaPlaceholder = "no se ingresó nada para encriptar";
  } else {
    //console.log(textoIngresado);
    inputSalidaTwo.textContent = textoIngresado;
    //ecriptar(textoIngresado);
    inputSalidaTwo.textContent = encriptarPush(textoIngresado);
    //textoIngresadoOne.value="";
  }
  textoNoEncontrado.classList.remove("d-visible");
  textoNoEncontrado.classList.add("d-invisible");

  imagenTwo.classList.remove("d-visible");
  imagenTwo.classList.add("d-invisible");
  
contenedorDerecho.classList.remove("j-center");
contenedorDerecho.classList.add("j-arround");
  botoneraCopiar.classList.remove("d-invisible");
  botoneraCopiar.classList.add("d-visible");
});

function ecriptar(frase) {
  for (let index = 0; index < frase.length; index++) {
    console.log(frase[index]);
  }
}

function encriptarPush(frase) {
  var fraseEncriptada = [];

  for (let index = 0; index < frase.length; index++) {
    if (frase[index] == "e") {
      fraseEncriptada.push("enter");
    } else if (frase[index] == "a") {
      fraseEncriptada.push("ai");
    } else if (frase[index] == "i") {
      fraseEncriptada.push("imes");
    } else if (frase[index] == "o") {
      fraseEncriptada.push("ober");
    } else if (frase[index] == "u") {
      fraseEncriptada.push("ufat");
    } else if (frase[index] == " ") {
      fraseEncriptada.push(" ");
    } else {
      fraseEncriptada.push(frase[index]);
    }
  }

  imagenTwo.classList.add("d-invisible");
  textoNoEncontrado.classList.add("d-invisible");

  return fraseEncriptada.join("");
}

function desencriptar(frase) {
  var fraseDesencriptada = frase.replace(/nter|mes|ber|fat/gi, "");
  //console.log(fraseDesencriptada)
  var fraseDos = fraseDesencriptada.replace(/ai/g, "a");
  //console.log(fraseDos);

  /*
  cat|dog|goat
  console.log(fraseDesencriptada);
  return;
  */

  //str = str.replace(/-/g, "");
  return fraseDos;
}
