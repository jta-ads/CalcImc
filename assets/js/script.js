"use strict";
let alturaCorporal = document.querySelector(`#altura`);
let pesoCorporal = document.querySelector(`#peso`);
const imc = document.querySelector(`#imc`);
const situacaoAtual = document.querySelector(`#situacaoAtual`);
const formPrincipal = document.querySelector(`#formPrincipal`);
const tabela = document.querySelector(`#tabela`);
const btnCalcular = document.querySelector(`#btn > input[type="submit"]`);
const main = document.querySelector(`main`);
const btnBack = document.querySelector(`#btnTabela button`);

// Funçoes de Botões

const calcularIMC = (altura, peso) => {
    
  const resultadoIMC = (peso / altura ** 2).toFixed(2);

  if (resultadoIMC < 18.5) {
    imc.style.color = `lightgreen`;
    situacaoAtual.style.color = `lightgreen`;
    imc.innerHTML = `${resultadoIMC.replace('.', ',')}`;
    situacaoAtual.innerHTML = `Magreza`;
  } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
    imc.style.color = `green`;
    situacaoAtual.style.color = `green`;
    imc.innerHTML = `${resultadoIMC.replace('.', ',')}`;
    situacaoAtual.innerHTML = `Normal`;
  } else if (resultadoIMC >= 25.0 && resultadoIMC <= 29.9) {
    imc.style.color = `lightyellow`;
    situacaoAtual.style.color = `lightyellow`;
    imc.innerHTML = `${resultadoIMC.replace('.', ',')}`;
    situacaoAtual.innerHTML = `Sobrepeso`;
  } else if (resultadoIMC >= 30 && resultadoIMC <= 39.9) {
    imc.style.color = `yellow`;
    situacaoAtual.style.color = `yellow`;
    imc.innerHTML = `${resultadoIMC.replace('.', ',')}`;
    situacaoAtual.innerHTML = `Obesidade`;
  } else {
    imc.style.color = `red`;
    situacaoAtual.style.color = `red`;
    imc.innerHTML = `${resultadoIMC.replace('.', ',')}`;
    situacaoAtual.innerHTML = `Obesidade Grave`;
  }
};

const btnVoltar = (inputAltura, inputPeso, divTabela, divForm) => {
  inputAltura.value = ``;
  inputPeso.value = ``;
  divTabela.style.display = `none`;
  divForm.style.display = `flex`;
};

const btnCalc = (divTabela, divForm) => {
  divTabela.style.display = `flex`;
  divForm.style.display = `none`;
};
// Validaçao
const tagP = document.createElement(`p`);
const validarInput = (altura, peso, divForm, divTabela, main) => {
  divForm.appendChild(tagP);
  main.style.overflow = `hidden`;
  
  const pesoAtual = parseFloat(peso.replace(',', '.'))
  const alturaAtual = parseFloat(altura.replace(',', '.'))


  if (!pesoAtual || (!alturaAtual && isNaN(alturaAtual)) || isNaN(pesoAtual)) {
    tagP.textContent = `Campos Vazios ou Caracteres Inválidos`;
    tagP.style.color = `white`;
    return;
  } else {
    calcularIMC(alturaAtual, pesoAtual);
    btnCalc(divTabela, divForm);
  }
};

// Eventos

btnCalcular.addEventListener("click", (event) => {
  event.preventDefault();

  validarInput(
    alturaCorporal.value,
    pesoCorporal.value,
    formPrincipal,
    tabela,
    main
  );
});

alturaCorporal.addEventListener(`keyup`, () => {
  if (!alturaCorporal.value) {
    tagP.textContent = ` `;
  }
});
pesoCorporal.addEventListener(`keyup`, () => {
  if (!pesoCorporal.value) {
    tagP.textContent = ` `;
  }
});

btnBack.addEventListener(`click`, () => {
  btnVoltar(alturaCorporal, pesoCorporal, tabela, formPrincipal);
});
