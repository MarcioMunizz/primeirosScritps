/*
let num = [4, 5, 6, 7, 8];

for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem os valores ${num[pos]}`);
}
*/

const carro ={
    modelo: 'Golf',
    marca: 'Volkswagen',
    ano: 2026,
    cor: 'Chumbo'
};


for(let key in carro){
    //acessadno apenas o nime da Chave 
    console.log(`Propriedades ${key}`);
    // Vai imprimir: "marca", "modelo", "ano", "cor"

    //acessando o valor guardado dentro daqueal chave 
    console.log(`Valores das Propriedades ${carro[key]}`);
    // Vai imprimir: "golf", "volkswagen", 2026, "Chumbo"
}

