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
            Ale ma...Ez 🌹🌹  
            <br><br>
            Kocham Cię Robaczku.  
            Jesteś moim całym światem.  
            Buziaczki” 💖💖
        </p>
        <img class="gif"
             src="https://media.tenor.com/-FI5WRxJ23kAAAAi/peach-goma-love.gif">
    `;
});


    initConfetti();
});




