var arrayNumeros = [];
var telaInicio;
var numeroAleatorio;
var stringArray;
var status;
var tempo = 6;

function inicio() {
    if (telaInicio) {
        setInterval(RELOAD, 1500);
    }
    else {
        mega();
    }
}


function seisNumeros(seis) {
    tempo = seis;
}

function mega() {
    numeroAleatorio = (Math.floor(Math.random() * 60) + 1);
    if (numeroAleatorio < 10) {
        numeroAleatorio = "0" + numeroAleatorio;
    }
    stringArray = document.getElementById("array").innerHTML = arrayNumeros.toString();
    document.getElementById("array").innerHTML = "";
    var posicao = stringArray.search(numeroAleatorio);

    if (posicao == -1) {
        arrayNumeros.push(numeroAleatorio)
        document.querySelector(".pulaLinha").innerHTML += "<hr>" + numeroAleatorio;
        telaInicio = arrayNumeros.length;
    }
    if (telaInicio < tempo) {
        status = "ON";
        var LOOPING = setTimeout(mega, 750);
    }
    else {
        status = "OFF";
        var FIM = setTimeout(LHORIZ, 1000);
    }

}

function RELOAD() {
    window.location.reload(true);
}
