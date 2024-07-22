const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const moveTool = document.getElementById("move");
const transformTool = document.getElementById("transform");
const textTool = document.getElementById("text");
const drawTool = document.getElementById("draw");
const fillTool = document.getElementById("fill");
const eraseTool = document.getElementById("erase");
const clearTool = document.getElementById("clear");

let mode = "draw";

let eventHandlers = {};

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

            // if (img.width < 1000 && img.height < 800) {
            //     canvas.width = img.width;
            //     canvas.height = img.height;
            // } else {
            //     canvas.width = img.width * .66;
            //     canvas.height = img.height * .66;
            // }

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        }

        //populate toolbar icons



    //}
    

}


//toolbar functions

function move() {



}

function transform() {

}

textTool.addEventListener("click", textInput);

const textSubmit = document.getElementById("text-submit");


function textInput() {

    const messageDiv = document.getElementById("text-msg");
    messageDiv.hidden = false;

    drawTool.removeEventListener("click", addDrawingEventListeners);

    mode = "text";

}

function drawText(x, y) {

    let textInput = document.getElementById("text-input");

    let text = "desfdf";
    console.log(text);

    ctx.font = "16px Arial"; //change font later
    ctx.fillText(text, x, y);
    console.log(x, y);

}

//drawtool on click -- how to set 

let mouseDown;
/*
const drawTool = new DrawTool();
const textTool = new TextTool();
let curentTool = text;
*/
const handleMouseDown = (e) => {
    mouseDown = true;
    //startDrawing(e);

    /*
    if(curentTool.onMouseDown){
     curentTool.onMouseDown(e);
    }
    */
}
// const handleMouseMove = (e) => draw(e);
const handleMouseUp = () => mouseDown = false;

// drawTool.addEventListener("click", addDrawingEventListeners);
addDrawingEventListeners()
function addDrawingEventListeners() {
    console.log('adding event listeners')
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
}

function startDrawing(evt) {

    //eventHandlers.append("drawTool","addDrawingEventListeners");

    //let rect = canvas.getBoundingClientRect();

    // let x = evt.clientX - rect.left;
    // let y = evt.clientY - rect.top;
    let x = evt.offsetX;
    let y = evt.offsetY;

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.fill();

        /*ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo()*/

}
function draw(x, y) {

    console.log('hi')
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.fill();
}



function handleMouseMove(evt) {
    let rect = canvas.getBoundingClientRect();
    let x = evt.clientX - rect.left;
    let y = evt.clientY - rect.top;
    
    

    if (mouseDown) {
        console.log('dragging mouse')
        switch(mode) {
            case "draw":
                 draw(x, y);
                break;
            case "text": 
                drawText(x, y);
                break;
        }
        
    } else console.log('hover')
}

/*function stopDrawing() {

    mouseDown = false;
    canvas.removeEventListener("mousedown", draw);

}*/



function fill() {

}

function erase() {

}

clearTool.addEventListener("click", () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

});


function removeAllListeners(tool, func) {

    tool.removeEventListener("click", func);

}

console.log('hi')
//editing functions

//options functions

//gallery functions

/*
class Draw{
    onMouseDown(e){


    }

    onMouseUp(e){


    }

    onToolActive(){
    }

    onToolDeactivate(){

    }
}





*/