const tela = document.getElementById("tela");
var equacao = "";

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
    inserir('=');
    
    } else if(e.key === '1') {
        inserir(e.key);
    } else if(e.key === '0') {
        inserir(e.key);
    }else if(e.key === 'c' ||  e.key === "Esc") {
        inserir('C');
    } else if(e.key === '2') {
        inserir(e.key);
    } else if(e.key === '3') {
        inserir(e.key);
    } else if(e.key === '4') {
        inserir(e.key);
    } else if(e.key === '5') {
        inserir(e.key);
    } else if(e.key === '6') {
        inserir(e.key);
    } else if(e.key === '7') {
        inserir(e.key);
    } else if(e.key === '8') {
        inserir(e.key);
    } else if(e.key === '9') {
        inserir(e.key);
    }  else if(e.key === '+') {
        inserir(e.key);
    } else if(e.key === '-') {
        inserir(e.key);
    } else if(e.key === '/') {
        inserir(e.key);
    } else if(e.key === '*' || e.key === 'x') {
        inserir('*');
    } else if(e.key === '.' || e.key === ",") {
        inserir('.');
    } else if(e.key === '(') {
        inserir('paresq');
    } else if(e.key === ')') {
        inserir('pardir');
    } else if(e.key === '^') {
        inserir('^');
    }
});

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        inserir('C');
    } else if(evt.keyCode == 8) {
        inserir('del');
    }
};

function inserir(valor) {
    switch(valor) {
        case 'del':
            tela.innerHTML = tela.innerHTML.substring(0, tela.innerHTML.length - 1);
            equacao = equacao.substring(0, equacao.length - 1);
        break;
        case '^':
            tela.innerHTML += valor;
            equacao += "**";
        break;
        case 'raiz':
            tela.innerHTML += "√(";
            equacao += "Math.sqrt(";
        break;
        case '*':
            tela.innerHTML += "x";
            equacao += "*";
        break;
        case 'C':
            tela.innerHTML = "";
            equacao = "";
        break;
        case 'paresq':
            tela.innerHTML += "(";
            equacao += "(";
        break;
        case 'pardir':
            tela.innerHTML += ")";
            equacao += ")";
        break;
        case '=':
            const regex = /-?(?:[0-9]+(?:\.[0-9]*)?|(?:[0-9]+)?\.[0-9]+)/g
            if(regex.test(eval(equacao))) {
                equacao = eval(equacao)
                tela.innerHTML = "" + equacao;
            } else {
                alert("Digite um valor válido!");
            }
        break;
        case '/':
            tela.innerHTML += "÷";
            equacao += "/";
        break;
        default:
            tela.innerHTML += valor;
            equacao += valor;
        break;
    }
}