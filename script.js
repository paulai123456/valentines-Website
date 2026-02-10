let input = "";
const password = "112924"; // 💗 6-digit password

function press(num) {
  if (input.length >= 6) return; // stop after 6 digits
  input += num;
  updateDisplay();

  if (input.length === 6) {
    setTimeout(checkPassword, 300);
  }
}

function updateDisplay() {
  for (let i = 1; i <= 6; i++) { // loop through all 6 digits
    const span = document.getElementById("d" + i);
    if (span) {
      span.textContent = input[i - 1] ? "●" : "*";
    }
  }
}

function checkPassword() {
  if (input === password) {
    window.location.href = "love.html"; // ✅ redirect to second page
  } else {
    showWrong();
  }
}

function showWrong() {
  // hide display and keypad only
  document.querySelector(".display").style.display = "none";
  document.querySelector(".keypad").style.display = "none";

  const wrongDiv = document.getElementById("wrong");
  wrongDiv.classList.remove("hidden");

  // trigger shake animation
  wrongDiv.classList.remove("shake");
  void wrongDiv.offsetWidth; // force reflow
  wrongDiv.classList.add("shake");
}

function restart() {
  input = "";
  updateDisplay();

  // show keypad & display again
  document.querySelector(".display").style.display = "flex";
  document.querySelector(".keypad").style.display = "grid";

  document.getElementById("wrong").classList.add("hidden");
}
