const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let isPainting = false;

canvas.width = 800;
canvas.height = 800;

function painting(event) {
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        
    }
}

function startPaiting(event) {
    isPainting = true;
}

function stopPainting(event) {
    isPainting = false;
    ctx.beginPath();
}

canvas.addEventListener("mousemove", painting);
canvas.addEventListener("mousedown", startPaiting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);