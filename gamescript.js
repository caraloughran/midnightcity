let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let boatHeight = 25;
let boatWidth = 55;
let boatX = (canvas.width - boatWidth) / 2;
let rightPressed = false;
let leftPressed = false;


function drawBoat () {
    ctx.beginPath();
    ctx.rect(boatX, 305 - boatHeight, boatWidth, boatHeight);
    ctx.fillStyle = "#B8A598";
    ctx.fill();
    ctx.closePath();
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBoat();

    if(rightPressed) {
        boatX += 7;
        if (boatX + boatWidth > canvas.width) {
            boatX = canvas.width - boatWidth;
        }
    }

    if(leftPressed) {
        boatX -= 7;
        if (boatX < 0){
            boatX = 0;
        }
    }
}

setInterval(draw, 10);

