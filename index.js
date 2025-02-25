let dia = new Date().getDay();
document.getElementById(`dia`).textContent = `hoje é: ${dia}`;

switch(dia)
{   
    case 0:
    document.getElementById(`dia`).textContent = `hoje é Domingo`
    break;

    case 1:
        document.getElementById(`dia`).textContent = `hoje é Segunda-Feira`
        break;

    case 2:
        document.getElementById(`dia`).textContent = `hoje é Terça-Feira`
        break;

    case 3:
        document.getElementById(`dia`).textContent = `hoje é Quarta-Feira`
        break;

    case 4:
        document.getElementById(`dia`).textContent = `hoje é Quinta-Feira`
        break;

        case 5:
        document.getElementById(`dia`).textContent = `hoje é Sexta-Feira`
        break;

        case 6:
        document.getElementById(`dia`).textContent = `hoje é Sábado`
        break;

    default: document.getElementById(`dia`).textContent = `Error`;
    break;
} 
            

    

function mudarCor(){
   let cor = document.getElementById(`selecionarcor`).value.toLowerCase();
    switch (cor){

        case `vermelho`.toLowerCase():
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
    document.getElementById("resultadocor").textContent = ``;
}

