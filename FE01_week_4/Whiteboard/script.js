const socket = new WebSocket("ws://localhost:3000");

const canvas = document.getElementById("whiteboard-canvas");
let isDrawing = false;
let mouseX = 0;
let mouseY = 0;
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

    canvas.style.width = '90%';
    canvas.style.height = '50vh';

    // ...then set the internal size to match
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    canvas.addEventListener('mouseup', (e) => {
        if (isDrawing) {
            if (erase) {
                drawLine(ctx, mouseX, mouseY, e.offsetX, e.offsetY, 32);
            }
            drawLine(ctx, mouseX, mouseY, e.offsetX, e.offsetY);

            allLines.push(linesList)

            socket.send(JSON.stringify({ type: "draw", lines: allLines }));

            mouseX = 0;
            mouseY = 0;
            isDrawing = false;
        }
    })

    canvas.addEventListener('mousedown', (e) => {
        linesList = []
        mouseX = e.offsetX;
        mouseY = e.offsetY;
        isDrawing = true;
    })

    canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            drawLine(ctx, mouseX, mouseY, e.offsetX, e.offsetY);
            mouseX = e.offsetX;
            mouseY = e.offsetY;
        }

        mouseX = e.offsetX;
        mouseY = e.offsetY;


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
const downloadBtn = document.querySelector('.download-btn')

downloadBtn.addEventListener('click', () => {
    let image = canvas.toDataURL('image/png');
    console.log(image)

    const listButtons = document.querySelector('.btn-container')
    const download = document.createElement('a')

    download.setAttribute('href', image)
    download.setAttribute('class', 'hidden')
    download.download = 'saved_canvas.png'
    listButtons.appendChild(download)
    download.click()

})

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


// var canvas = document.getElementById("cc");
// var ctx = canvas.getContext("2d");

//=== Clipboard ===============================

// Link - https://stackoverflow.com/questions/18377891/how-can-i-let-user-paste-image-data-from-the-clipboard-into-a-canvas-element-in
window.addEventListener("paste", pasteHandler); //chrome
function pasteHandler(e) {
    if (e.clipboardData == false) return false; //empty
    var items = e.clipboardData.items;
    if (items == undefined) return false;
    for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") == -1) continue; //not image
        var blob = items[i].getAsFile();
        var URLObj = window.URL || window.webkitURL;
        var source = URLObj.createObjectURL(blob);
        paste_createImage(source);
    }
}

//draw pasted object
function paste_createImage(source) {
    var pastedImage = new Image();

    log(mouseX)
    log(mouseY)

    pastedImage.onload = function () {
        ctx.drawImage(pastedImage, mouseX, mouseY, 64, 64);
    }
    pastedImage.src = source;
}