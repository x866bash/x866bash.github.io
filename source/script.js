// Popup Masuk
document.getElementById("masukBtn").addEventListener("click", () => {
    const loading = document.getElementById("loadingText");
    loading.style.display = "block";

    setTimeout(() => {
        triggerGlassBreak();
        document.getElementById("popup").style.display = "none";
    }, 10000);
});

// Efek kaca pecah
function triggerGlassBreak() {
    const count = 20;
    for (let i = 0; i < count; i++) {
        const shard = document.createElement("div");
        shard.className = "shard";
        shard.style.position = "absolute";
        shard.style.left = window.innerWidth / 2 + "px";
        shard.style.top = window.innerHeight / 2 + "px";
        shard.style.width = Math.random() * 20 + 10 + "px";
        shard.style.height = Math.random() * 20 + 10 + "px";
        shard.style.background = "linear-gradient(135deg, rgba(0,255,255,0.3), rgba(0,255,128,0.2))";
        shard.style.border = "1px solid rgba(255,255,255,0.4)";
        document.body.appendChild(shard);
        animateShard(shard);
    }
}

function animateShard(el) {
    let x = parseInt(el.style.left);
    let y = parseInt(el.style.top);
    let vx = (Math.random() - 0.5) * 10;
    let vy = Math.random() * -15;
    const gravity = 0.6;
    const bounce = 0.5;

    function drop() {
        vy += gravity;
        x += vx;
        y += vy;

        if (y > window.innerHeight - 20) {
            y = window.innerHeight - 20;
            vy *= -bounce;
            vx *= 0.9;
        }

        el.style.transform = `translate(${x}px, ${y}px)`;

        if (Math.abs(vx) < 0.1 && Math.abs(vy) < 0.1) {
            el.style.opacity = 0;
            setTimeout(() => el.remove(), 1000);
            return;
        }

        requestAnimationFrame(drop);
    }
    drop();
}

// Terminal typewriter
const textLines = [
    "WELCOME TO MY ROOM",
    "selamat datang di ruangan saya",
    "ini adalah ruangan yang gk ada apa apa nya di banding kalian yang banyak kreasi,",
    "saya cuma pelajar yang baru buat scrip simple dengan bantuan ChatGPT,",
    "jika suka dengan ruangan saya bisa yaudah haveFUN ye nO coMMEnt ye."
];
let lineIndex = 0, charIndex = 0;
function typeWriter() {
    if (lineIndex < textLines.length) {
        if (charIndex < textLines[lineIndex].length) {
            document.getElementById("terminalText").textContent += textLines[lineIndex][charIndex];
            charIndex++;
            setTimeout(typeWriter, 50);
        } else {
            document.getElementById("terminalText").textContent += "\n";
            lineIndex++;
            charIndex = 0;
            setTimeout(typeWriter, 300);
        }
    }
}
setTimeout(typeWriter, 11000); // setelah popup

// Toggle file tree
document.querySelector(".folder").addEventListener("click", () => {
    const content = document.querySelector(".content");
    content.style.display = content.style.display === "block" ? "none" : "block";
});

// Clock
function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// TV Play Button
const playlist = [
    "https://www.youtube.com/embed/5OQ4xivtF4w?autoplay=1",
    "https://www.youtube.com/embed/594AS9v3cPk?autoplay=1",
    "https://www.youtube.com/embed/MGgwX5ykKHY?autoplay=1"
];
let currentVideo = 0;
document.getElementById("playBtn").addEventListener("click", () => {
    const tv = document.getElementById("tvContainer");
    tv.style.display = "block";
    document.getElementById("youtubePlayer").src = playlist[currentVideo];
});
