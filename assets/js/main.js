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
    document.getElementsByClassName("botones")[0].style.flexDirection = "row-reverse";
}