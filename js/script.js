function calcular () {
    const pesoInput = document.getElementById("peso")
    const alturaInput = document.getElementById("altura")
    const res = document.getElementById("res")
    const peso = Number(pesoInput.value)
    const altura = Number(alturaInput.value)

    if (!peso || !altura || peso <=0 || altura <=0) {
        res.innerHTML = "Por favor, insira valores válidos para peso e altura.";
    return;
    }

    const imc = peso / (altura**2);
    const imcFormatado = imc.toFixed(2);

    if (imc >= 18.5 && imc < 25) {
        res.innerHTML = ` Com o IMC de: ${imcFormatado}, seu peso é considerado <strong>Ideal</strong>`
    } else {
        res.innerHTML = ` Com o IMC de: ${imcFormatado}, seu peso <strong>não</strong> é considerado ideal.` 
    }
}
