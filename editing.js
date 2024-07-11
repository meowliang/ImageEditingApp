const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.addEventListener("DOMContentLoaded", loadDefaultCanvas);

function loadDefaultCanvas() {

    //figure out how to load the last saved state from localStorage

    //if (canvas.getContext) {

        canvas.style.width = '100%';
        canvas.style.height = '100%';

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const img = new Image();
        img.src = "imgs/cat.jpg";

        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }

    //}
    

}


//toolbar functions

const moveTool = document.getElementById("move");
const transformTool = document.getElementById("transform");
const textTool = document.getElementById("text");
const drawTool = document.getElementById("draw");
const fillTool = document.getElementById("fill");
const eraseTool = document.getElementById("erase");
const clearTool = document.getElementById("clear");

function move() {

}

function transform() {

}

function text() {

}

//drawtool on click -- how to set 

function draw() {

//mousedown, draw one dot (circle) at cursor position until mouseup

}

function fill() {

}

function erase() {

}

function clear() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

}

//editing functions

//options functions

//gallery functions