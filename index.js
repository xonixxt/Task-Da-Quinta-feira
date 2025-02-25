function mudarCor(){
   let cor = document.getElementById(`selecionarcor`).value
    switch (cor){

        case `vermelho`:
            document.body.style.backgroundColor=`red`
            break;

            case `verde`:
            document.body.style.backgroundColor=`green`
            break;

            case `azul`:
            document.body.style.backgroundColor=`blue`
            break;

            case `amarelo`:
            document.body.style.backgroundColor=`yellow`
            break;

            case `roxo`:
            document.body.style.backgroundColor=`violet`
            break;

            case `preto`:
            document.body.style.backgroundColor=`rgb(47, 48, 42)`
            break;

            default: document.getElementById(`resultadocor`).textContent = `Cor inválida ou não registrada`;
            break;

    }
}

function limparpos(){
    document.getElementById(`selecionarcor`).value = " ";
}

function executarAsDuas(){
    mudarCor();
    limparpos();
}

document.getElementById(`botaocor`).onclick = executarAsDuas;

document.getElementById(`selecionarcor`).onfocus = function() {
    document.getElementById(`selecionarcor`).value = ``;
}
