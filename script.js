const calcular = document.querySelector(".calcular");

function imc() {
  const nome = document.querySelector(".name").value;
  const altura = document.querySelector(".altura").value;
  const peso = document.querySelector(".peso").value;
  const resultTotal = document.querySelector(".result");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valueImc = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";

    if ((valueImc <= 18.49)) {
      classificacao = "Abaixo do normal";
    } else if ((valueImc <= 24.99)) {
        classificacao = "Faixa Saudável";
    } else if ((valueImc <= 29.99)) {
        classificacao = "Acima do peso";
    } else if ((valueImc <= 34.99)) {
        classificacao = "Faixa de obesidade grau 1";
    } else if ((valueImc <= 39.99)) {
        classificacao = "Faixa de obsidade grau 2";
    } else if (valueImc >= 40) {
        classificacao = "Faixa de obsidade grau 3";
    }

    resultTotal.textContent = `${nome} Seu IMC é ${valueImc} seu Status Atual é ${classificacao}`;
  } else {
    resultTotal.value = "Preencha os campos";
  }
}

calcular.addEventListener("click", imc);
