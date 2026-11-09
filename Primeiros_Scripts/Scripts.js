/*
var nomeProduto = "Teclado Mecânico";
var preco = 350;
var quantidade = 2;

function calcularTotal(precoProduto, qtd) {
  var total = precoProduto * qtd;
  return "O valor total para o produto " + nomeProduto + " é R$ " + total;
}

console.log(calcularTotal(preco, quantidade));
*/

// rescrevendo codigo acima para Sintaxe moderna
const nomeProduto = "teclado mecanico";
const preco = 350;
const quantidade = 2;

const calcularTotal = (precoProduto,qnt) => {
    const total = precoProduto * qnt;
    return ` O valor total para o produto ${nomeProduto} é R$ ${total}`;
}


//praticando Template literals
const nome = "Marcio Junior";
const saudacao = ` ola ${nome}, 
seja bem-vindo(a) ao meu site!
Hoje é dia ${new Date().toLocaleDateString()}.`;

//Criando o elemento do botão para pagina HTML e o nomeando 
const newButton = document.createElement('button');
newButton.innerText = "Clique aqui para dar saudar";

//fazer assim que acionar o botão aparecer a mensagem de saudação que fizemos para testar o Template literals
newButton.addEventListener ('click', () => {
    alert(saudacao);
});

//adicionando o botão na pagina HTML
document.body.appendChild(newButton);



// fazendo mais atividades 
const pesoTara_T = 26;
let peca1_T = 12;
let peca2_T = 12;
const limitePeso = 50;

peca2_T = 15; // alterando o valor da peça 2 para testar a condição do peso total

const pesoTotal = pesoTara_T + peca1_T + peca2_T;
    
if (pesoTotal > limitePeso) {
    console.log(`${pesoTotal} Acima do Limite de peso`);
}else if (pesoTotal === limitePeso){
    console.log(`${pesoTotal} Peso dentro do limite`);
}else{
    console.log(`${pesoTotal} Peso abaixo do limite`);
}

const firtName = "Marcio";
let age = 21;

age = age + 1;

document.getElementById("demo").innerHTML = `Ola ${firtName}, voce tem ${age} anos de idade.`;


// ultilizar o Number é a forma mais atualizada de converter uma string.
let n1 = Number(window.prompt("Digite o primeiro numero: "));
let n2 = Number(window.prompt("Digite outro numero: "));
let s = n1 + n2;

window.alert("soma dos valores é " + String(s));




//continuação das aulas 



