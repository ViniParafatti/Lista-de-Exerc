
const getById = (id) => document.getElementById(id);


const inputTemperatura = getById('valorTemperatura');
const btnCelsius = getById('btnCelsius');
const btnFahrenheit = getById('btnFahrenheit');
const divResultado = getById('resultado');

function converterTemperatura(tipoConversao) {
    const valor = parseFloat(inputTemperatura.value);
    
    if (isNaN(valor)) {
        divResultado.textContent = 'Por favor, digite um número válido.';
        return;
    }
    let resultadoNumerico;
    let textoResultado;
    if (tipoConversao === 'celsius') {
        // Assume que o valor de entrada é Fahrenheit
        resultadoNumerico = (valor - 32) * 5 / 9;
        textoResultado = `${valor}°F é igual a ${resultadoNumerico.toFixed(2)}°C`;
    } else if (tipoConversao === 'fahrenheit') {
        // Assume que o valor de entrada é Celsius
        resultadoNumerico = (valor * 9 / 5) + 32;
        textoResultado = `${valor}°C é igual a ${resultadoNumerico.toFixed(2)}°F`;
    }
    divResultado.textContent = textoResultado;
}
btnCelsius.addEventListener('click', () => converterTemperatura('celsius'));
btnFahrenheit.addEventListener('click', () => converterTemperatura('fahrenheit'));