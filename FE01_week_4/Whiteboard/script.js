const socket = new WebSocket("ws://localhost:3000");

const canvas = document.getElementById("whiteboard-canvas");
let isDrawing = false;
let x = 0;
let y = 0;
let linesList = []
let allLines = []

let erase = false
let drawColor = "black"
const ctx = canvas.getContext("2d");

function drawLine(context, x1, y1, x2, y2, stroke = 4) {
    if (erase) {
        stroke = 32
    }

    linesList.push({
        drawColor: drawColor,
        lineWidth: stroke,
        moveToX: x1,
        moveToY: y1,
        lineToX: x2,
        lineToY: y2,
    })
    // log(linesList)

    context.beginPath();
    context.strokeStyle = drawColor;
    context.lineWidth = stroke;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();

}

function log(msg) {
    console.log(msg)
}

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("here's data recieved ", data)

    if (data.type === "draw") {

        data.lines.map((val => {

            val.map((val) => {
                ctx.beginPath();
                ctx.strokeStyle = val.drawColor;
                ctx.lineWidth = val.lineWidth;
                ctx.moveTo(val.moveToX, val.moveToY);
                ctx.lineTo(val.lineToX, val.lineToY);
                ctx.stroke();
                ctx.closePath();
            })
        }))
    }
};

if (canvas.getContext) {
    // this canvas.getContext refers to the canvas obj which has all the various methods like beginPath stroke and all 

    // GET WIDTH HEIGHT OF ELEMENT IN JS 
    // const w = canvas.offsetWidth
    // const h = canvas.offsetHeight

    canvas.style.width = '50vw';
    canvas.style.height = '50vh';

    // ...then set the internal size to match
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    canvas.addEventListener('mouseup', (e) => {
        if (isDrawing) {
            if (erase) {
                drawLine(ctx, x, y, e.offsetX, e.offsetY, 32);
            }
            drawLine(ctx, x, y, e.offsetX, e.offsetY);

            allLines.push(linesList)

            socket.send(JSON.stringify({ type: "draw", lines: allLines }));

            x = 0;
            y = 0;
            isDrawing = false;
        }
    })

    canvas.addEventListener('mousedown', (e) => {
        linesList = []
        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
    })

    canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            drawLine(ctx, x, y, e.offsetX, e.offsetY);
            x = e.offsetX;
            y = e.offsetY;
        }

    })
} else {

}

// get list of buttons 
const redBtn = document.querySelector('.red-btn')
const greenBtn = document.querySelector('.green-btn')
const blueBtn = document.querySelector('.blue-btn')
const changeColor = document.querySelector('.color-picker')
const clearBtn = document.querySelector('.clear-btn')
const eraseBtn = document.querySelector('.erase-btn')
const undoBtn = document.querySelector('.undo-btn')

undoBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    allLines.pop()
    socket.send(JSON.stringify({ type: "draw", lines: allLines }));

})

eraseBtn.addEventListener('click', () => {
    erase = true
    drawColor = 'white'
})

redBtn.addEventListener('click', () => {
    erase = false
    drawColor = "red"
})
greenBtn.addEventListener('click', () => {
    erase = false
    drawColor = "green"
})
blueBtn.addEventListener('click', () => {
    erase = false
    drawColor = "blue"
})

changeColor.addEventListener('change', (e) => {
    erase = false
    drawColor = e.target.value
})

clearBtn.addEventListener("click", () => {
    erase = false
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    allLines = []
    socket.send(JSON.stringify({ type: "draw", lines: allLines }));

    drawColor = 'black'
})