/*****************************************/
/* Ignoramos esta parte por el momento */
/*****************************************/
let intervalId = window.setInterval(function () {
    // console.log("Clock isn't working yet!");
}, 10000);

function stopClock() {
    clearInterval(intervalId);
}
/*****************************************/

window.onload = function () {
/*    
    console.log("Hello, world!");
    console.log(Math.random());

*/



}


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
    elem.innerHTML = Math.random();
}

function cambia2(elem){
    document.getElementsByTagName("main")[0].style.backgroundImage = "url('./assets/img/crayones_jpg.jpg')";
}

function cambia3(elem){
    document.getElementsByClassName("botones")[0].style.flexDirection = "row-reverse";
}