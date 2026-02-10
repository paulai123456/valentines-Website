let input = "";
const password = "0123"; // 💗 CHANGE THIS

function press(num) {
  if (input.length >= 4) return;

  input += num;
  updateDisplay();

  if (input.length === 4) {
    setTimeout(checkPassword, 300);
  }
}

function updateDisplay() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById("d" + i).textContent =
      input[i - 1] ? "●" : "*";
  }
}

function checkPassword() {
  if (input === password) {
    window.location.href = "love.html"; // 👉 SECOND PAGE
  } else {
    showWrong();
  }
}

function showWrong() {
  document.getElementById("lock").classList.add("hidden");
  document.getElementById("wrong").classList.remove("hidden");
}

function restart() {
  input = "";
  updateDisplay();
  document.getElementById("wrong").classList.add("hidden");
  document.getElementById("lock").classList.remove("hidden");
}