document.addEventListener('DOMContentLoaded', () => {

    const calculation = () =>{
        const txtv = document.querySelector('input#txtvel');
        const res = document.querySelector('div#result');
        const vel = Number(txtv.value);
        res.innerHTML = `sua velocidade é de <strong> ${vel} Km/h</strong>`;

        if(vel >= 70){
            res.innerHTML += `<p> Sua Velocidade esta á cima da perimitida voce foi <strong>Multado</strong> </p>`
        };

    }

    const chekButton = document.getElementById('chekButton');
    chekButton.addEventListener('click', calculation);



});