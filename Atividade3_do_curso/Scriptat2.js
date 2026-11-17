document.addEventListener("DOMContentLoaded", () => {

    const ferificacao = () =>{ 
        const inicio = document.querySelector('input#txtIni');
        const fim = document.querySelector('input#txtFim');
        const passo = document.querySelector('input#txtPas');
        let res = document.querySelector("div#res");

        if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
            window.alert('[ERRO] esta faltando dados!');
        }else{
            res.innerHTML = "contando: <br> ";
            let i = Number(inicio.value);
            let f = Number(fim.value);
            let p = Number(passo.value);

            if (p <= 0){
                window.alert("passo invalido");
                p=1
            }
            if(i < f){
                for(let c = i; c <= f;c +=p ){
                    res.innerHTML += `${c} \u{1f449}`;
                }
            }else{
                for(let c = i; c >= f; c -= p){
                    res.innerHTML += `${c} \u{1f449}`;
                }
            } 
        }    
    };
    const verificar = document.getElementById('veriButton');
    verificar.addEventListener('click', ferificacao);









});