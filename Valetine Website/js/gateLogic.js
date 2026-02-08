/* ===============================
   🚪 GATE LOGIC (SAFE VERSION)
   =============================== */

const gatesContainer = document.getElementById("gates");

// Valentine week dates
const days = [
  { title: "Rose Day", date: "2026-02-07", link: "days/rose.html" },
  { title: "Propose Day", date: "2026-02-08", link: "days/propose.html" },
  { title: "Chocolate Day", date: "2026-02-09", link: "#" },
  { title: "Teddy Day", date: "2026-02-10", link: "#" },
  { title: "Promise Day", date: "2026-02-11", link: "#" },
  { title: "Hug Day", date: "2026-02-12", link: "#" },
  { title: "Kiss Day", date: "2026-02-13", link: "#" },
  { title: "Valentine’s Day", date: "2026-02-14", link: "#" }
];

// Optional door sound (SAFE)
const doorSound = document.getElementById("doorSound") || null;

const today = new Date().toISOString().split("T")[0];

days.forEach(day => {
  const gate = document.createElement("div");
  gate.className = "gate";

  const title = document.createElement("h2");
  title.innerText = day.title;
  gate.appendChild(title);

  if (day.date > today) {
    gate.classList.add("locked");

    const lock = document.createElement("div");
    lock.className = "lock";
    lock.innerText = "🔒";
    gate.appendChild(lock);

  } else {
    gate.classList.add("unlocked");

    if (day.date === today) {
      gate.classList.add("today");
    }

    gate.onclick = () => {
      // ✅ PLAY SOUND ONLY IF IT EXISTS
      if (doorSound) {
        doorSound.currentTime = 0;
        doorSound.play().catch(() => {});
      }

      // ✅ DOOR OPEN ANIMATION
      gate.classList.add("open");

      // ✅ REDIRECT AFTER ANIMATION
      setTimeout(() => {
        if (day.link !== "#") {
          window.location.href = day.link;
        }
      }, 900);
    };
  }

  gatesContainer.appendChild(gate);
});
