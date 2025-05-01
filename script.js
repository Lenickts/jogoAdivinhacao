const gerarNum = Math.floor(Math.random() * 4)
let tentativas = 0;
const maxTentativas = 3;

function adivinhacao(){
    //Entrada de Dados
    let palpite =  parseInt(document.getElementById("palpite").value);
    const resultado = document.getElementById("resultado");
    const tentativasRestantes = document.getElementById("tentativasRestantes");

    //Validando se é um caractere válido
    if(isNaN(palpite)){
        resultado.textContent = "Digite um número válido!";
        return;
    }else if(palpite > 100){
        resultado.textContent = "Informe números de 0 (zero) à 100 (cem)";
        return;
    }

    tentativas++;
    if (tentativas >= maxTentativas && palpite !== gerarNum) {
        resultado.textContent = `Você perdeu! O número era ${gerarNum}.`;
        tentativasRestantes.textContent = `Tentativas restantes: 0`;
        document.getElementById("palpite").disabled = true;
        return;
    }
    
    //Processamento dos Dados
    if(palpite === gerarNum){
        resultado.textContent = `Você acertou em ${tentativas} tentativas!` ;
        document.getElementById("palpite").disabled = true;
    }
    else if(palpite < gerarNum){
        resultado.textContent = "Tente um número maior";
    }
    else{
        resultado.textContent = "Tente um número menor";
    }

    tentativasRestantes.textContent = `Tentativas restantes: ${maxTentativas - tentativas}`;



}


/*
Math.random() => foi usado para retornar o número aleatório,
por retornar entre 0.235 a 0.791, ele está multiplicando por 101.

Math.floor() => ele arredonda o número decimal para baixo.
Assim, ao termos um número quebrado como 5.7, ele arredonda para o inteiro 5
*/