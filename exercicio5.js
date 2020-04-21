function cadastrar() {


    var validou = "Pessoa Cadastrada com Sucesso";
    var naoValidou = "Erro ao cadastrar pessoa";

    var nome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;

    if (!nome.test(document.getElementById("nome").value)) {

        document.getElementById("nome").style.borderColor = "#ff0000";
        document.getElementById("nome").focus();
        document.getElementById("nome").value = ""
        document.getElementById("nome").placeholder = "nome inválido";

        setInterval(function () {

            document.getElementById("nome").style.borderColor = "none";
            document.getElementById("nome").focus();
            document.getElementById("nome").value = ""
            document.getElementById("nome").placeholder = "digite seu nome";

            location.reload();
        }, 2000);

    } else {
        var mensagem1 = validou;
        document.getElementById("nome").value = ""
    }

    var idade = new RegExp('^[0-9]+$');

    if (!idade.test(document.getElementById("idade").value)) {

        document.getElementById("idade").style.borderColor = "#ff0000";
        document.getElementById("idade").focus();
        document.getElementById("idade").value = ""
        document.getElementById("idade").placeholder = "idade inválida";

        setInterval(function () {

            document.getElementById("idade").style.borderColor = "none";
            document.getElementById("idade").focus();
            document.getElementById("idade").value = ""
            document.getElementById("idade").placeholder = "digite sua idade";

            location.reload();
        }, 2000);

    } else {
        var mensagem2 = validou;
        document.getElementById("idade").value = ""
    }

    var email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

    if (!email.test(document.getElementById("email").value)) {

        document.getElementById("email").style.borderColor = "#ff0000";
        document.getElementById("email").focus();
        document.getElementById("email").value = ""
        document.getElementById("email").placeholder = "E-mail inválido";

        setInterval(function () {

            document.getElementById("email").style.borderColor = "none";
            document.getElementById("email").focus();
            document.getElementById("email").value = ""
            document.getElementById("email").placeholder = "exemple@email.com.br";

            location.reload();
        }, 2000);

    } else {
        var mensagem3 = validou;
        document.getElementById("email").value = ""
    }

    var senha = /^(?=.{8,})$/;
    
    if ((document.getElementById("senha").value.length) >= 8) {

       var mensagem4 = validou;
        document.getElementById("senha").value = ""

    } else if ((document.getElementById("senha").value.length) < 8) {
        
        document.getElementById("senha").style.borderColor = "#ff0000";
        document.getElementById("senha").focus();
        document.getElementById("senha").value = ""
        document.getElementById("senha").placeholder = "senha inválida";
        

        setInterval(function () {

            document.getElementById("senha").style.borderColor = "none";
            document.getElementById("senha").focus();
            document.getElementById("senha").value = ""

            location.reload();
        }, 2000);
    }


    if (!mensagem1 || !mensagem2 || !mensagem3 || !mensagem4) {
        document.querySelector(".resultado").style.color = "#ff0000";
        document.querySelector(".resultado").innerHTML = naoValidou;
    } else {
        document.querySelector(".resultado").style.color = "#008000";
        document.querySelector(".resultado").innerHTML = validou;

        
        document.getElementById("nome").style.borderColor = "#008000";
        document.getElementById("idade").style.borderColor = "#008000";
        document.getElementById("email").style.borderColor = "#008000";
        document.getElementById("senha").style.borderColor = "#008000";

        setInterval(function () {
            document.getElementById("nome").style.borderColor = "none";
            document.getElementById("idade").style.borderColor = "none";
            document.getElementById("email").style.borderColor = "none";
            document.getElementById("senha").style.borderColor = "none";
            location.reload();
        }, 3000);
           
            
        
    }


} 
