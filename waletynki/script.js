const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const music = document.getElementById("music");

// uciekający przycisk NIE
function moveButton() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);

// kliknięcie TAK
yesBtn.addEventListener("click", () => {
    music.play();
    startConfetti();

    document.body.innerHTML = `
        <main class="card">
            <h1>Yaaaay! 💕</h1>
            <p class="question">
                Naprawdę bardzo się cieszę 🥹  
                <br><br>
                Dziękuję Ci, Natalko.  
                Obiecuję dużo uśmiechów, ciepłych chwil  
                i jeszcze więcej powodów do „aww” 💖
            </p>
            <img class="gif"
                 src="https://media.tenor.com/-FI5WRxJ23kAAAAi/peach-goma-love.gif">
        </main>
        <canvas id="confetti"></canvas>
    `;

    initConfetti();
});
