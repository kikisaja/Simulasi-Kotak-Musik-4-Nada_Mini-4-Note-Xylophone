// --- AMBIL ELEMEN DOM ---
const xyloBars = document.querySelectorAll(".xylo-bar");
const activeNoteTitle = document.getElementById("active-note-title");

let audioCtx = null;

// --- FUNGSI SINTESIS AUDIO NADA (Web Audio API) ---
function playNoteFrequency(freq, noteName) {
    try {
        // Inisialisasi Audio Context saat interaksi pertama
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        // Menggunakan gelombang sine untuk suara khas xylophone/perkusi halus
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        // Pengaturan volume dan decay (peluruhan suara alami)
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 1.2);

        // Update Teks Display Nada Aktif
        activeNoteTitle.textContent = `Nada ${noteName} (${freq} Hz) 🎵`;
    } catch (e) {
        console.log("Audio Context Error: ", e);
    }
}

// --- FUNGSI TRIGGER ANIMASI & SUARA ---
function triggerBar(barElement) {
    const freq = parseFloat(barElement.getAttribute("data-freq"));
    const note = barElement.getAttribute("data-note");

    // Mainkan Suara
    playNoteFrequency(freq, note);

    // Memicu Efek Visual Aktif
    barElement.classList.add("active");
    setTimeout(() => {
        barElement.classList.remove("active");
    }, 150);
}

// --- 1. EVENT LISTENER KLIK MOUSE ---
xyloBars.forEach((bar) => {
    bar.addEventListener("click", () => {
        triggerBar(bar);
    });
});

// --- 2. EVENT LISTENER KEYBOARD (A, S, D, F) ---
document.addEventListener("keydown", (e) => {
    // Mencegah trigger berulang saat tombol ditahan terus
    if (e.repeat) return;

    const pressedKey = e.key.toUpperCase();
    
    xyloBars.forEach((bar) => {
        const targetKey = bar.getAttribute("data-key");
        if (pressedKey === targetKey) {
            triggerBar(bar);
        }
    });
});
