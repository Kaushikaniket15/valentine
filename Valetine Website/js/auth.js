function validateLogin() {
  const name = document.getElementById("nameInput").value.trim();
  const pin = document.getElementById("pinInput").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  const correctName = "sunidhi";
  const correctPin = "1523";

  if (name.toLowerCase() !== correctName) {
    errorMsg.innerText =
      "This kingdom opens only for Queen of my heart 👑❤️";
    return;
  }

  if (pin !== correctPin) {
    errorMsg.innerText =
      "The secret pin doesn’t match our story 🔐💔";
    return;
  }

  // Success
  localStorage.setItem("queenName", "Sunidhi");
  window.location.href = "landing.html";
}
