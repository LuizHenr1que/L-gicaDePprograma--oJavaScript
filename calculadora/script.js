var n1 = "0";
var operacao = null;
var n2 = ''

function incluirDigito(digito){

    if(operacao !== null){
        n2 += digito;
        monstrarNoDisplay(n2);
    } else {
        if(n1 === "0") {
            n1 = digito;
        } else {
            n1 += digito;
        }
    
        monstrarNoDisplay(n1)
    }
    
}

var clicadoEmIgual = false;
function finalizarCalculo() {
    clicadoEmIgual = true;
    var resultado = calcular();
    n1 = resultado;
    monstrarNoDisplay(n1);
    console.log('n1', n1, 'operacao', operacao, 'n2', n2)
}

function calcular(){
    var nCalculado = 0;
    var _n1 = parseFloat(n1);
    var _n2 = parseFloat(n2);

    switch(operacao){
        case'+':
        nCalculado = _n1 + _n2;
        break;
        case'-':
        nCalculado = _n1 - _n2;
        break;
        case'*':
        nCalculado = _n1 * _n2;
        break;
        case'/':
        nCalculado = _n1 / _n2;
        break;
    }
    return nCalculado;
}

function iniciarCalculo(simbolo){
    if(clicadoEmIgual){
        clicadoEmIgual = false;
        n2 = '';
    }

    if(operacao === null || n2 === ''){
        operacao = simbolo;
    } else {
        //ja teem n1, operacao e n2
        var resultado = calcular();
        n1 = resultado;
        operacao = simbolo;
        n2 = '';
        monstrarNoDisplay(n1)
    }
}

function incluirPonto(){
    if(operacao && n2 === ''){
        n2 = '0.';
    } else if (operacao && n2) {
        n1 += '.';
    } else {
        n1 += '.';
    }
}


function monstrarNoDisplay(valor) {
    document.querySelector('#display').innerHTML = valor
}

