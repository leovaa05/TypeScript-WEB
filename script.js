function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const botaoCalcular = document.getElementById("botaoCalcular");
const resultado = document.getElementById("resultado");
botaoCalcular.onclick = () => {
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (isNaN(peso) || isNaN(altura)) {
        resultado.textContent = "Por favor, insira valores numéricos válidos.";
        return;
    }
    if (peso <= 0 || altura <= 0) {
        resultado.textContent = "Peso e altura devem ser maiores que zero.";
        return;
    }
    const imc = calcularIMC(peso, altura);
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificarIMC(imc)})`;
};
function classificarIMC(imc) {
    if (imc < 18.5)
        return "Abaixo do peso";
    if (imc < 25)
        return "Peso normal";
    if (imc < 30)
        return "Sobrepeso";
    return "Obesidade";
}
