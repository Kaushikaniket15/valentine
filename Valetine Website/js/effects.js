// Protect landing page
const name = localStorage.getItem("queenName");
if (!name) {
  window.location.href = "index.html";
}

// Show name
document.getElementById("welcomeText").innerText =
  `Welcome, ${name} ❤️`;

// 🎵 MUSIC LOGIC (FADE IN + FADE OUT)
const music = document.getElementById("bgMusic");

let isPlaying = true;
let fadeInterval = null;

// Start music softly
music.volume = 0;
music.play().catch(() => {});

// Fade in music
function fadeInMusic() {
  clearInterval(fadeInterval);
  fadeInterval = setInterval(() => {
    if (music.volume < 0.35) {
      music.volume = Math.min(music.volume + 0.02, 0.35);
    } else {
      clearInterval(fadeInterval);
    }
  }, 150);
}

// Fade out music
function fadeOutMusic(callback) {
  clearInterval(fadeInterval);
  fadeInterval = setInterval(() => {
    if (music.volume > 0.02) {
      music.volume = Math.max(music.volume - 0.02, 0);
    } else {
      music.pause();
      clearInterval(fadeInterval);
      if (callback) callback();
    }
  }, 120);
}

// Autoplay with fade-in on load
window.addEventListener("load", () => {
  fadeInMusic();
});

// Music toggle button
function toggleMusic() {
  if (isPlaying) {
    fadeOutMusic();
  } else {
    music.play();
    fadeInMusic();
  }
  isPlaying = !isPlaying;
}

// Go to journey with fade-out
function goToJourney() {
  fadeOutMusic(() => {
    window.location.href = "journey.html";
  });
}
