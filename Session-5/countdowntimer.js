let countdown = 10;

function startCountDown() {
  const counterElement = document.getElementById("countdown");

  const interval = setInterval(() => {
    countdown = countdown - 1;
    counterElement.innerText = countdown;

    if (countdown > 6) {
      counterElement.style.color = "white";
      counterElement.style.backgroundColor = "green";
    }
    if (countdown > 3) {
      counterElement.style.color = "black";
      counterElement.style.backgroundColor = "orange";
    } else {
      counterElement.style.color = "white";
      counterElement.style.backgroundColor = "red";
    }
    if (countdown === 0) {
      clearInterval(interval);
      counterElement.innerText = "Countdown Finish";
      counterElement.style.backgroundColor = "red";
    }
  }, 1000);
}
document.addEventListener("DOMContentLoaded", startCountDown);
