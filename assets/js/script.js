let contador = 1;
function meuEscopo() {
  const form = document.querySelector('form');
  
  const resultado = document.querySelector('#resultado');
  const perguntas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const altura = form.querySelector('#altura');
    const peso = form.querySelector('#peso');

    const inputs = {
      altura: altura.value,
      peso: peso.value
    }
    
    resultado.textContent = Math.round (inputs.peso / (inputs.altura * inputs.altura));
  }
  form.addEventListener('submit', recebeEventoForm);
}

meuEscopo()