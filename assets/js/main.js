/*****************************************/
/* Ignoramos esta parte por el momento */
/*****************************************/

var clock = document.querySelector("#clock");

let intervalId = window.setInterval(function () {
    var date = new Date();

    // Convertimos las horas, minutos y segundos a strings
    // y les agregamos un 0 a la izquierda si son menores a 10
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    var seconds = date.getSeconds().toString().padStart(2, '0');

    // Creamos la hora actual en formato "hh:mm:ss"
    var horaact = hours + ":" + minutes + ":" + seconds;

    // Obtenemos el elemento que contiene el reloj

    var clock = document.querySelector("#clock");

    // Actualizamos el texto del reloj con la hora actual

    clock.textContent = horaact;

}, 1000);




function stopClock() {
    clearInterval(intervalId);
}
/*****************************************/


function Alonso(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function alonsoColor(elem){
    const r = Alonso(0, 255);
    const g = Alonso(0, 255);
    const b = Alonso(0, 255);
    elem.style.color = "rgb("+r+","+g+","+b+")";
}

function cambiaColor(elem){
    const r = Alonso(0, 255);
    const g = Alonso(0, 255);
    const b = Alonso(0, 255);
    elem.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}

function vuelveColor(elem){
    elem.style.backgroundColor = "";
}


function cambia1(elem){
    document.getElementsByClassName("boton")[0].innerHTML = Math.random();
}



const ImgOriginal = [
'url("/assets/img/park-sunset.jpg")'
,'url("/assets/img/crayones.jpg")'
]

let CambioText = document.getElementsByClassName("pasablanc");
function cambia2(elem){
    // console.log(document.getElementsByTagName("main")[0].style.backgroundImage);
    // console.log(document.getElementsByTagName("main")[0].style.backgroundImage == ImgOriginal[1]);
    // console.dir(CambioText);
    if(document.getElementsByTagName("main")[0].style.backgroundImage == ImgOriginal[1]){
        document.getElementsByTagName("main")[0].style.backgroundImage = ImgOriginal[0];
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";
        for (let i = 0; i < CambioText.length; i++) {
            CambioText[i].style.color = "white";
        }
    }
    else{
        document.getElementsByTagName("main")[0].style.backgroundImage = ImgOriginal[1];
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        for (let i = 0; i < CambioText.length; i++) {
            CambioText[i].style.color = "black";
        }
    };
}



function cambia3(elem){
    if(document.getElementsByClassName("botones")[0].style.flexDirection == "row"){
        document.getElementsByClassName("botones")[0].style.flexDirection = "row-reverse";
    }else{
        document.getElementsByClassName("botones")[0].style.flexDirection = "row";
    }
}