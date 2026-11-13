document.addEventListener("DOMContentLoaded", () => {

    const ferificacao = () =>{ 
        const date = new Date();
        const ano = date.getFullYear();
        const fano = document.getElementById("txtano");
        const res = document.querySelector("div#res");

        if(fano.value.length == 0 || Number(fano.valeue)>ano){
            

        }else{
            const fsex = document.getElementsByName("radsex")
            const idade = ano - Number(fano.value)
            let genero = ''
            if(fsex[0].checked){
                genero = 'homem'
            }else if (fsex[1].checked){
                genero = 'mulher' 

            }
            res.style.textAlign ='center'
            res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        }

    }
    const verificar = document.getElementById('veriButton');
    verificar.addEventListener('click', ferificacao);









});