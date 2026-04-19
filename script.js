function calcularIMC(peso, altura){
    return peso / (altura*altura)
}
function classificarIMC(imc){
    if (imc < 18.5) return "Abaixo do peso"
    if (imc < 25 && imc >= 18.5) return "Peso normal"
    if (imc < 30 && imc >= 25) return "Sobrepeso"
    return "obesidade"
}

document.getElementById("btn").addEventListener("click", function(){
    let altura = parseFloat(document.getElementById("altura").value)
    let peso = parseFloat(document.getElementById("peso").value)


    if (!altura || !peso) {
        document.getElementById("resuktado".innerText = "Preencha todos os campos!")
        return
    }

    let imc = calcularIMC(peso, altura)
    let classificacao = classificarIMC(imc);

    document.getElementById("resultado").innerText = `IMC: ${imc.toFixed(2)} (${classificacao})`

})