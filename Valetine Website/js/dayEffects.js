// Protect page
const name = localStorage.getItem("queenName");
if (!name) {
  window.location.href = "../index.html";
}

// Inject name
const nameSpan = document.querySelector(".queen-name");
if (nameSpan) {
  nameSpan.innerText = name;
}

/* ===============================
   🎵 MUSIC FADE-IN
   =============================== */

const music = document.getElementById("roseMusic");
if (music) {
  music.volume = 0;
  music.play().catch(() => {});

  let vol = 0;
  const fadeIn = setInterval(() => {
    if (vol < 0.35) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fadeIn);
    }
  }, 150);
}

/* ===============================
   🌹 ROSE PETAL FALL (PNG)
   =============================== */

function createRosePetal() {
  const petal = document.createElement("div");
  petal.classList.add("rose-petal");

  // Random horizontal position
  petal.style.left = Math.random() * 100 + "vw";

  // Random size (natural look)
  const size = 18 + Math.random() * 18;
  petal.style.width = size + "px";
  petal.style.height = size + "px";

  // Random fall duration
  const duration = 6 + Math.random() * 5;
  petal.style.animationDuration = duration + "s";

  document.body.appendChild(petal);

  // Remove after animation
  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}

// Start falling petals
setInterval(createRosePetal, 700);

/* ===============================
   FADE OUT MUSIC ON BACK
   =============================== */

function goBack() {
  if (!music) {
    window.location.href = "../journey.html";
    return;
  }

  let vol = music.volume;
  const fadeOut = setInterval(() => {
    if (vol > 0.05) {
      vol -= 0.02;
      music.volume = vol;
    } else {
      clearInterval(fadeOut);
      music.pause();
      window.location.href = "../journey.html";
    }
  }, 120);
}


/* ===============================
   💍 PROPOSAL YES ACTION
   =============================== */

function sayYes() {
  document.getElementById("proposalBox").style.display = "none";
  document.getElementById("finalMessage").style.display = "block";

  // Slight music swell
  if (music) {
    music.volume = 0.45;
  }

  // Ring rain
  for (let i = 0; i < 25; i++) {
    setTimeout(createRing, i * 120);
  }
}

function createRing() {
  const ring = document.createElement("div");
  ring.className = "ring";

  ring.style.left = Math.random() * 100 + "vw";
  ring.style.animationDuration = 4 + Math.random() * 3 + "s";

  document.body.appendChild(ring);

  setTimeout(() => ring.remove(), 7000);
}
