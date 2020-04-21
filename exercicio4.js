function inserirTexto() {
    
    var textoInserido = document.getElementById("campoTexto").value;
    
    document.getElementById('areaTexto').value += textoInserido + "\n";


    
   
   document.getElementById("campoTexto").value = "" 
}
