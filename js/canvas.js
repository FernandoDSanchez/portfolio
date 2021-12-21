// It start the functions when the body is loaded
let bodyStatus = false
let initDraw = function() {
    bodyStatus = true;
    return true;
    
}

setInterval(startDraw = () =>{if(initDraw()){drawLine()}}, 300);

//Take a measure of work-card div 
let cardSize = function() { 
    let card = document.getElementsByClassName("work-card")[0].clientHeight;
    
    return card;
}
// Save the array length of the work-card collection
let canvasCounter = function() {
    let card = document.getElementsByClassName("work-card").length;
    return card;
}
// Get canvas and get context
let getCanvas = (i) =>{
    let canvas = document.getElementsByClassName("canvasElement")[i]; // the i var is used to iterate on canvas elements collection 
    let ctx = canvas.getContext("2d");
    return ctx;
}

const LINECOLOR = "#FFFFFF"
const BLACK = "#000000"

// it Draw the lines on the canvas and repeat the process until canvasCounter
let drawLine = function () { 
    console.log("drawing")
    let dark = BLACK;
    let ligth = LINECOLOR;
    let y = cardSize() / 2;
    let cc = canvasCounter() * 2;
    for (let i = 0; i < cc; i++) {
        let ctx = getCanvas(i);
        ctx.canvas.width = 2;
        ctx.canvas.height = y;
        ctx.strokeStyle = ligth;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, y);
        ctx.stroke();
    }
}







