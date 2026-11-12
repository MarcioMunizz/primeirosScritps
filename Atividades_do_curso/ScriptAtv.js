document.addEventListener('DOMContentLoaded', () =>{

    const divMsg = document.getElementById("msg"); // local onde vai mostrar o horario com  msg 
    const img = document.getElementById("img"); // local das imags
    const hora = new Date().getHours(); // pegando hora do local 
    
    //const hora = Number(window.prompt("que horas quertestar?"));
    

    divMsg.innerHTML = `agora são ${hora} Horas.`;

    if(hora >= 0 && hora < 12 ){
        // bom dia 
        img.src='Amanhecer.png';
        document.body.style.background = '#e9bc27';
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src='tarde.png'
        document.body.style.background = '#eb6a1f';
    }else{
        //boa noite
        img.src='noite.png';
    document.body.style.background = '#24409c'; 
    }
    
});












