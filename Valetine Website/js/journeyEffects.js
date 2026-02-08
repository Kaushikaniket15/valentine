/* ===============================
   🎵 MUSIC WITH FADE CONTROL
   =============================== */

const music = document.getElementById("journeyMusic");
let baseVolume = 0.25;
music.volume = baseVolume;
music.play().catch(() => {});

let fadeInterval = null;

function fadeMusic(targetVolume) {
  clearInterval(fadeInterval);
  fadeInterval = setInterval(() => {
    if (Math.abs(music.volume - targetVolume) < 0.02) {
      music.volume = targetVolume;
      clearInterval(fadeInterval);
    } else {
      music.volume += (music.volume < targetVolume ? 0.02 : -0.02);
    }
  }, 80);
}

/* ===============================
   ⬅️ BACK
   =============================== */

function goBack() {
  window.location.href = "landing.html";
}

/* ===============================
   💖 FLOATING HEARTS + IMAGES
   =============================== */

const heartImages = [
  "assets/images/heart1.jpg",
  "assets/images/heart2.jpg",
  "assets/images/heart3.jpg"
];

const heartEmojis = ["❤️", "💖", "💘", "💗"];

let firstHeart = true;

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";

  if (firstHeart) {
    heart.classList.add("pulse");
    firstHeart = false;
  }

  heart.innerText =
    heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  heart.style.left = Math.random() * 90 + "vw";
  heart.style.top = Math.random() * 80 + "vh";

  const imgForHeart =
    heartImages[Math.floor(Math.random() * heartImages.length)];

  heart.addEventListener("click", (event) => {
    event.stopPropagation();
    showPopup(imgForHeart);
  });

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}

// Create hearts periodically
setInterval(createHeart, 2200);

/* ===============================
   💘 IMAGE POPUP
   =============================== */

function showPopup(imageSrc) {
  const popup = document.getElementById("imagePopup");
  const img = document.getElementById("popupImage");

  img.src = imageSrc;
  popup.style.display = "flex";

  fadeMusic(0.08); // soften music
}

function closePopup(event) {
  if (event) event.stopPropagation();
  document.getElementById("imagePopup").style.display = "none";

  fadeMusic(baseVolume); // restore music
}
