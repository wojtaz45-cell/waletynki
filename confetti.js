const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
let confetti = [];

function initConfetti() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    confetti = Array.from({ length: 150 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 10 + 5,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`
    }));

    requestAnimationFrame(drawConfetti);
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach(c => {
        ctx.beginPath();
        ctx.fillStyle = c.color;
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();

        c.y += Math.cos(c.d);
        if (c.y > canvas.height) c.y = 0;
    });

    requestAnimationFrame(drawConfetti);
}

function startConfetti() {
    setTimeout(initConfetti, 200);
}
script.js