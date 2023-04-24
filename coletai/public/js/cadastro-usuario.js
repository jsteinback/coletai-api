var script_pagina = function() {
    var option1Field1 = document.getElementById("1-nome-completo");
    var option1Field2 = document.getElementById("1-cpf");
    var option1Field3 = document.getElementById("1-data-nascimento");
    var option2Field1 = document.getElementById("2-razao-social");
    var option2Field2 = document.getElementById("2-cnpj");
    var option2Field3 = document.getElementById("2-nome-responsavel");
    var option1Radio = document.getElementById("pessoa-fisica");
    var option2Radio = document.getElementById("pessoa-juridica");

    option1Radio.addEventListener("change", function () {
        option1Field1.style.display = "block";
        option1Field2.style.display = "block";
        option1Field3.style.display = "block";
        option2Field1.style.display = "none";
        option2Field2.style.display = "none";
        option2Field3.style.display = "none";
    });

    option2Radio.addEventListener("change", function () {
        option1Field1.style.display = "none";
        option1Field2.style.display = "none";
        option1Field3.style.display = "none";
        option2Field1.style.display = "block";
        option2Field2.style.display = "block";
        option2Field3.style.display = "block";
    });

    var bt_cadastro = document.getElementById("bt-cadastro-usuario");
    bt_cadastro.addEventListener("click", function () {
        fetch('api/usuarios', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "nome": "jessica" })
        })
    });
};

script_pagina();