const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválido', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true)
});


function getNivelImc(imc) {
  const nivel = ['MAGREZA', 'NORMAL', 'SOBREPESO I', 'OBESIDADE II', 'OBESIDADE GRAVE III']

  if (imc >= 39.9) return nivel[4]
  if (imc >= 29.9) return nivel[3]
  if (imc >= 24.9) return nivel[2]
  if (imc >= 18.5) return nivel[1]
  if (imc < 18.5) return nivel[0]
}


function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

// Função únicamente para criar um paragrafo
function criaP() {
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('#resultado')
  } else {
    p.classList.add('')
  }
  
  p.innerHTML = msg;
  resultado.appendChild(p);

}

setResultado()

