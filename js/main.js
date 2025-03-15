"use strict";
var empresa;
(function (empresa) {
    const calc = document.getElementById("calc");
    const campoNome = document.getElementById("campoNome");
    const campoAno = document.getElementById("campoAno");
    const campoCodigo = document.getElementById("campoCodigo");
    const btnDeposito = document.getElementById("desposito");
    const campoDeposito = document.getElementById("campoDeposito");
    let p;
    const campoCompra = document.getElementById("campoCompra");
    const btnComprar = document.getElementById("comprar");
    calc.addEventListener("click", () => {
        p = new empresa.Cliente(parseInt(campoCodigo.value));
        p.nome = campoNome.value;
        p.anoNasc = parseInt(campoAno.value);
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("ano").textContent = p.anoNasc.toString();
        document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
        document.getElementById("codigo").textContent = p.codigo.toString();
        document.getElementById("saldo").textContent = p.saldo.toString();
    });
    btnDeposito.addEventListener("click", () => {
        p.deposita(parseFloat(campoDeposito.value));
        document.getElementById("saldo").textContent = p.saldo.toString();
    });
    btnComprar.addEventListener("click", () => {
        if (p.comprar(parseFloat(campoCompra.value))) {
            alert("Obrigado pela compra");
        }
        else {
            alert("Saldo insuficiente faça um depósito!");
        }
        document.getElementById("saldo").textContent = p.saldo.toString();
    });
})(empresa || (empresa = {}));
