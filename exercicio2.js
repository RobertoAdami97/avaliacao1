function media() {
    let numero1 = +document.getElementById('primeiroNumero').value;
    let numero2 = +document.getElementById('segundoNumero').value;
    let numero3 = +document.getElementById('terceiroNumero').value;

    const resultado = document.getElementById('resultado');
    resultado.value = (numero1 + numero2 + numero3) / 3;
}

