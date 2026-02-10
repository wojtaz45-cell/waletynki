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
     <img
  class="gif"
  src="<div class="tenor-gif-embed" data-postid="13328150200340972709" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/cant-stop-loving-you-forever-together-engaged-marriage-gif-13328150200340972709">Cant Stop Loving You Forever Sticker</a>from <a href="https://tenor.com/search/cant+stop+loving+you-stickers">Cant Stop Loving You Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
  alt="Happy Valentine"

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



