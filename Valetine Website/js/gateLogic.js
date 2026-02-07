/* ===============================
   🚪 GATE LOGIC WITH COUNTDOWN
   =============================== */

const gatesContainer = document.getElementById("gates");

// Valentine week days with emojis
const days = [
  { title: "🌹 Rose Day", date: "2026-02-07", link: "days/rose.html" },
  { title: "💍 Propose Day", date: "2026-02-08", link: "days/propose.html" },
  { title: "🍫 Chocolate Day", date: "2026-02-09", link: "#" },
  { title: "🧸 Teddy Day", date: "2026-02-10", link: "#" },
  { title: "🤝 Promise Day", date: "2026-02-11", link: "#" },
  { title: "🤗 Hug Day", date: "2026-02-12", link: "#" },
  { title: "💋 Kiss Day", date: "2026-02-13", link: "#" },
  { title: "❤️ Valentine’s Day", date: "2026-02-14", link: "#" }
];

const today = new Date();

/* ⏳ Countdown helper */
function getCountdown(targetDate) {
  const diff = targetDate - new Date();

  if (diff <= 0) return "Opening soon 💖";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  return `${days} day${days !== 1 ? "s" : ""} ${hours} hr${hours !== 1 ? "s" : ""}`;
}

days.forEach(day => {
  const gate = document.createElement("div");
  gate.className = "gate";

  const title = document.createElement("h2");
  title.innerText = day.title;
  gate.appendChild(title);

  const dayDate = new Date(day.date + "T23:59:59");


  if (dayDate > today) {
    // 🔒 LOCKED GATE
    gate.classList.add("locked");

    const lock = document.createElement("div");
    lock.className = "lock";
    lock.innerText = "🔒";

    const countdown = document.createElement("div");
    countdown.className = "countdown";
    countdown.innerText = "Opens in " + getCountdown(dayDate);

    gate.appendChild(lock);
    gate.appendChild(countdown);

  } else {
    // 🔓 UNLOCKED GATE
    gate.classList.add("unlocked");

    if (dayDate.toDateString() === today.toDateString()) {
      gate.classList.add("today");
    }

    gate.onclick = () => {
      gate.classList.add("open");

      setTimeout(() => {
        if (day.link !== "#") {
          window.location.href = day.link;
        }
      }, 900);
    };
  }

  gatesContainer.appendChild(gate);
});
