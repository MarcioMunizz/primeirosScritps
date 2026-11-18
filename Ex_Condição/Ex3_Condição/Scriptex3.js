document.addEventListener('DOMContentLoaded', () =>{
 
    const nascionalidade = () =>{
        const txtn = document.querySelector('input#txtnas');
        const res = document.querySelector('div#res');

        //Salva texto digitado na variavel 
        const paisDigitado = txtn.value;

        if( paisDigitado === 'Brasil' ){
            res.innerHTML = 'voce é brasileiro!! com isso voce deve torcer para o mairo campeão brasileiro o colossal verde de sp';
        }else{
            res.innerHTML += 'Voce é de outra Nascionalidade, mas mesmo asssim pode torcer para o verdão!';
        }
    }

    const verButton = document.getElementById('veriButton');
    verButton.addEventListener('click',nascionalidade );
});