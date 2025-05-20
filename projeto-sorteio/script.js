function generateNumber() {
  const resultadoInput = document.getElementById("result");
  const min = parseInt(document.querySelector(".input-min").value);
  const max = parseInt(document.querySelector(".input-max").value);

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  resultadoInput.value = result;
}
