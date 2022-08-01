let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
let inputOrcamento = document.getElementById("orcamento")

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("calculando")
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
    let orcamento = inputOrcamento.value





    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)) / 2 * criancas
    let qdtTotalCerveja = cervejaPP(duracao) * adultos
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)) / 2 * criancas

    let valCarne = 25
    let valCerveja = 5
    let valBebidas = 8

    let valTotalCarne = qdtTotalCarne/1000 * valCarne
    let valTotalCerveja = Math.ceil(qdtTotalCerveja/355) * valCerveja
    let valTotalBebidas = Math.ceil(qdtTotalBebidas/2000) * valBebidas

    let valTotalBruto = valTotalCarne + valTotalCerveja + valTotalBebidas

    let valTotalBruto$ = valTotalBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    let orcamentoTxt = orcamento.replace("R$ ", "")


if( parseFloat(orcamentoTxt) < parseFloat(valTotalBruto)){
    resultadoOrcamento = "Não será suficiente"
}else{
    resultadoOrcamento = "Será Suficiente"  
}


resultado.innerHTML = `<p>${qdtTotalCarne/1000} Kg de carne</p>`
resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja/355)} latas de cerveja</p>`
resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/2000)} Garrafas de 2 Litros</p>`
resultado.innerHTML += `<p>O valor de gasto estimado será de ${valTotalBruto$}</p>`
resultado.innerHTML += `<p>Conclusão:${resultadoOrcamento}</p>`
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    }else{
        return 400
    }

}
function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    }else{
        return 1200
    }

}
function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500
    }else{
        return 1000
    }

}
String.prototype.reverse = function(){
    return this.split('').reverse().join(''); 
     };
     
     function mascaraMoeda(campo,evento){
       var tecla = (!evento) ? window.event.keyCode : evento.which;
       var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
       var resultado  = "";
       var mascara = "##.###.###,##".reverse();
       for (var x=0, y=0; x<mascara.length && y<valor.length;) {
         if (mascara.charAt(x) != '#') {
           resultado += mascara.charAt(x);
           x++;
         } else {
           resultado += valor.charAt(y);
           y++;
           x++;
         }
       }
       campo.value = `R$ ${resultado.reverse()}`
     }
