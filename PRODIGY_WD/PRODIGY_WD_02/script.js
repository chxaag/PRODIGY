let timerInterval;
let elapsedMilliseconds = 0;
const display = document.getElementById("display");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapsList = document.getElementById("laps-list");

function formatTime(milliseconds) {
  const ms = String(milliseconds % 1000).padStart(3, "0");
  const seconds = Math.floor(milliseconds / 1000);
  const secs = String(seconds % 60).padStart(2, "0");
  const minutes = Math.floor(seconds / 60);
  const mins = String(minutes % 60).padStart(2, "0");
  const hours = String(Math.floor(minutes / 60)).padStart(2, "0");
  return `${hours}:${mins}:${secs}.${ms}`;
}

function updateDisplay() {
  display.textContent = formatTime(elapsedMilliseconds);
}

startButton.addEventListener("click", () => {
  if (!timerInterval) {
    const startTime = Date.now() - elapsedMilliseconds;
    timerInterval = setInterval(() => {
      elapsedMilliseconds = Date.now() - startTime;
      updateDisplay();
    }, 10); on
  }
});

pauseButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

resetButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedMilliseconds = 0;
  updateDisplay();
  lapsList.innerHTML = ""; 
});

lapButton.addEventListener("click", () => {
  const lapTime = formatTime(elapsedMilliseconds);
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap: ${lapTime}`;
  lapsList.appendChild(lapItem);
});

updateDisplay();
