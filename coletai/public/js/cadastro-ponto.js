var script_pagina = function() {
    var bt_cadastro = document.getElementById("bt-cadastro-ponto");
    bt_cadastro.addEventListener("click", function () {
        fetch('api/ponto-coleta', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "nome": "ponto de coleta" })
        })
    });
};

script_pagina();