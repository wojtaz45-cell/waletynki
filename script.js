const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const card = document.getElementById("card");
const music = document.getElementById("music");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

/* ---------- UCIEKAJĄCE NIE ---------- */
function moveNoButton() {
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

/* ---------- TAK ---------- */
yesBtn.addEventListener("click", () => {
  // muzyka (100% legalnie dla przeglądarek)
  music.volume = 0.6;
  music.play().catch(() => {});

  startConfetti();

  card.innerHTML = `
    <h1> Yaaaay! 💕 </h1>
    <p class="text">
      Ale mam ...Ez 🌹 
      <br><br>
      Kocham cię robaczku.  
      Jesteś moim całym światem...  
      Buziaczki ❤️
    </p>
    <img
    class="gif"
    src="https://media.tenor.com/uPcZ_dxgBKUAAAAi/cant-stop-loving-you-forever.gif"
    alt="Can't stop loving you"
  />
`;
/>
    />
  `;
});

/* ---------- CONFETTI ---------- */
function startConfetti() {
  confetti = Array.from({ length: 180 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 3 + 2,
    color: `hsl(${Math.random() * 360},100%,70%)`
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
    c.y += c.d;
    if (c.y > canvas.height) c.y = -10;
  });
  requestAnimationFrame(drawConfetti);
}




