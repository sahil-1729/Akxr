
const canvas = document.getElementById("whiteboard-canvas");
let isDrawing = false;
let x = 0;
let y = 0;

let drawColor = "black"

function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = drawColor;
    // context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}

function log(msg) {
    console.log(msg)
}

if (canvas.getContext) {
    // this canvas.getContext refers to the canvas obj which has all the various methods like beginPath stroke and all 
    const ctx = canvas.getContext("2d");

    // GET WIDTH HEIGHT OF ELEMENT IN JS 
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight

    canvas.style.width = '50vw';
    canvas.style.height = '50vh';
    // ...then set the internal size to match
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    log(canvas.width)
    log(canvas.height)

    canvas.addEventListener('mouseup', (e) => {
        if (isDrawing) {
            drawLine(ctx, x, y, e.offsetX, e.offsetY);
            x = 0;
            y = 0;
            isDrawing = false;
        }
    })

    canvas.addEventListener('mousedown', (e) => {

        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
        // log('mouse down')
    })

    canvas.addEventListener('mousemove', (e) => {
        log('mouse move')
        if (isDrawing) {
            drawLine(ctx, x, y, e.offsetX, e.offsetY);
            x = e.offsetX;
            y = e.offsetY;
        }

    })
} else {
    // canvas-unsupported code here
}

// get list of buttons 
const redBtn = document.querySelector('.red-btn')
const greenBtn = document.querySelector('.green-btn')
const blueBtn = document.querySelector('.blue-btn')
const changeColor = document.querySelector('.color-picker')


redBtn.addEventListener('click', () => {
    drawColor = "red"
})
greenBtn.addEventListener('click', () => {
    drawColor = "green"
})
blueBtn.addEventListener('click', () => {
    drawColor = "blue"
})

changeColor.addEventListener('change', (e) => {
    drawColor = e.target.value
})