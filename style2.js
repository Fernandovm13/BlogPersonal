//Funcion para mostrar un mensaje de alerta al hacer clic en un enlace

function mostrarAlerta(evento){
    
    //Evitar que el enlace se abra
    evento.preventDefault();

    //Obtener el texto del enlace
    let texto=evento.target.textContent;

    //Mostrar el mensaje de alerta
    alert("Has hecho clic en el enlace de "+texto);
}

//Obtener todos los enlaces del documento

let enlaces=document.querySelectorAll("a");

//Recorrer los enlaces y agregarles un evento de clic
for (let enlace of enlaces){
    enlace.addEventListener("click",mostrarAlerta);
}