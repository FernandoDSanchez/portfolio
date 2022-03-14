// It start the functions when the body is loaded
let initDraw = function(color) {
    drawCircles(getCanvas,htmlLevel, HTML, color);
    drawCircles(getCanvas,cssLevel, CSSNAME, color);
    drawCircles(getCanvas,jsLevel, JS, color);
    drawCircles(getCanvas,reactLevel, REACT, color);
    console.log("ccolor")
    setLight()
}
// Get canvas element and get context
let getCanvas = (idCanvas) => {
    let circle = document.getElementById(`${idCanvas}-circle`);
    ctx = circle.getContext("2d");
    return ctx;
}
//calc end point value by percent progress
let arcEnd = (x) => {
    let ae = (x * 2)/100 * Math.PI;
    return ae;
}
//Draw the circle on ctx
let drawCircles = (fn, level, idCanvas, color) => {
    let ctx = fn(idCanvas);
    ctx.clearRect(0, 0, 100, 100);
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(50, 50, 40, 0, arcEnd(level));
    ctx.stroke();
}








