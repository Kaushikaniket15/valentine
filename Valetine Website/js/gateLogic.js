/* ===============================
   🚪 GATE LOGIC (IST + DATE SAFE)
   =============================== */

const gatesContainer = document.getElementById("gates");

// Valentine week days with emojis
const days = [
  { title: "🌹 Rose Day", date: "2026-02-07", link: "days/rose.html" },
  { title: "💍 Propose Day", date: "2026-02-08", link: "days/propose.html" },
  { title: "🍫 Chocolate Day", date: "2026-02-09", link: "days/chocolate.html" },
  { title: "🧸 Teddy Day", date: "2026-02-10", link: "days/teddy.html" },
  { title: "🤝 Promise Day", date: "2026-02-11", link: "days/promise.html" },
  { title: "🤗 Hug Day", date: "2026-02-12", link: "days/hug.html" },
  { title: "💋 Kiss Day", date: "2026-02-13", link: "days/kiss.html" },
  { title: "❤️ Valentine’s Day", date: "2026-02-14", link: "days/valentine.html" }
];

/* ===============================
   ⏰ IST DATE (DATE ONLY)
   =============================== */

const nowIST = new Date(
  new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
);

const todayDateOnly = new Date(
  nowIST.getFullYear(),
  nowIST.getMonth(),
  nowIST.getDate()
);

/* ===============================
   ⏳ COUNTDOWN HELPER
   =============================== */

function getCountdown(targetEndTime) {
  const diff = targetEndTime - new Date();

  if (diff <= 0) return "Opening soon 💖";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  return `${days} day${days !== 1 ? "s" : ""} ${hours} hr${hours !== 1 ? "s" : ""}`;
}

/* ===============================
   🚪 CREATE GATES
   =============================== */

days.forEach(day => {
  const gate = document.createElement("div");
  gate.className = "gate";

  const title = document.createElement("h2");
  title.innerText = day.title;
  gate.appendChild(title);

  // Day date (DATE ONLY)
  const parts = day.date.split("-");
  const dayDateOnly = new Date(
    parseInt(parts[0]),
    parseInt(parts[1]) - 1,
    parseInt(parts[2])
  );

  // End of that day (for countdown)
  const dayEndTime = new Date(day.date + "T23:59:59+05:30");

  if (dayDateOnly > todayDateOnly) {
    // 🔒 LOCKED
    gate.classList.add("locked");

    const lock = document.createElement("div");
    lock.className = "lock";
    lock.innerText = "🔒";

    const countdown = document.createElement("div");
    countdown.className = "countdown";
    countdown.innerText = "Opens in " + getCountdown(dayEndTime);

    gate.appendChild(lock);
    gate.appendChild(countdown);

  } else {
    // 🔓 UNLOCKED
    gate.classList.add("unlocked");

    if (dayDateOnly.getTime() === todayDateOnly.getTime()) {
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
