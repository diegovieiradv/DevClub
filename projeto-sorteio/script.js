function generateNumber() {
  const resultadoInput = document.getElementById("resultado");
  const min = parseInt(document.querySelector(".input-min").value);
  const max = parseInt(document.querySelector(".input-max").value);

  const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

  resultadoInput.value = resultado;
}
''