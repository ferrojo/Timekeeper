window.addEventListener("DOMContentLoaded", (event) => {

    // Variables para contadores de minutos y segundos
    let cronoMin = document.querySelector(".crono__min");
    let cronoSec = document.querySelector(".crono__sec");

    // Variables selecciob botones
    let btnStart = document.querySelector(".layout__btn-start");
    let btnStop = document.querySelector(".layout__btn-stop");

    // Variables para contar minutos y segundos
    let minutes = 0;
    let seconds = 0;
    let time = null;

    // Funcion para iniciar cronometro
    let start = () => {
        if (!time) {

            time = setInterval(() => {
                seconds++;

                if (seconds == 60) {
                    minutes++;
                    seconds = 0;
                }

                if (minutes >= 60) {
                    alert("Has exedido el tiempo limite de 60 minutos");
                    clearInterval(time);
                }

                if (seconds < 10) {
                    cronoSec.innerHTML = "0" + seconds;
                } else {
                    cronoSec.innerHTML = seconds;
                }

                if (minutes < 10) {
                    cronoMin.innerHTML = "0" + minutes;
                } else {
                    cronoMin.innerHTML = minutes;
                }

            }, 1000);

        }

    };


    // Boton iniciar

    btnStart.addEventListener("click", () => {
        start();
    });

    // Boton Stop
    btnStop.addEventListener("click", () => {
        if(time){
            clearInterval(time);
            time = null;
        }
    });





});