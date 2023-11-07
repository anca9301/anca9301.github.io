const canvas = document.querySelector("canvas");
const button = document.querySelector("button");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number) {
    return Math.floor(Math.random()*number);
}

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let i = 0; i <100; i++) {
        ctx.beginPath();
        let red = random(255); let green = random(255); let blue = random(255);
        let transparent = random(100)/100;
        let color = "rgb(" + red + "," + green + "," + blue + "," + transparent + ")";
        ctx.fillStyle = color;
        if (random(2)) {
            ctx.arc(
                random(canvas.width), random(canvas.height), random(100),0,2*Math.PI 
            );
            ctx.fill();
        }
        else (
            ctx.fillRect(
                random(canvas.width), random(canvas.height), random(200), random(200)
            )
        )
        
    }
}

button.addEventListener('click', draw);

