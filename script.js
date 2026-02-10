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
    // start muzyki – bezpiecznie
    music.volume = 0.6;
    music.play().catch(() => {});

    // konfetti
    startConfetti();

    // zmiana treści (bez usuwania audio)
    document.querySelector(".card").innerHTML = `
        <h1>Yaaaay! 💕</h1>
        <p class="question">
            Naprawdę bardzo się cieszę 🥹  
            <br><br>
            Dziękuję Ci, Natalko.  
            Obiecuję dużo uśmiechów, ciepłych chwil  
            i jeszcze więcej powodów do „aww” 💖
        </p>
        <img class="gif"
             src="https://tenor.com/pl/view/happy-valentines-day-love-happy-valentines-day-my-love-i-love-you-love-happy-valentines-day-gif-7872935811532978148">
    `;
});

    initConfetti();
});



