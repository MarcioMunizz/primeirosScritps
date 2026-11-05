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


