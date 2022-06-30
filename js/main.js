const elTime = document.querySelector(".heading");
const elButton = document.querySelector(".button");

let second = 0;
let minute = 0;
let hour = 0;

const milSecondInSecond = 1000;
const secondInMinute = 60;
const minuteInHour = 60;

function renderTime(realtime, node) {
  node.textContent = realtime;
}

let realtime = "0" + hour + " : " + "0" + minute + " : " + "0" + second;

renderTime(realtime, elTime);

function time() {
  let runSecond = setInterval(() => {
    if (second == 59) {
      second = -1;
    }

    second++;
  }, milSecondInSecond);

  let runMinute = setInterval(() => {
    if (minute === 59) {
      minute = 0;
    }

    minute++;
  }, secondInMinute * milSecondInSecond);

  let runHour = setInterval(() => {
    hour++;
  }, minuteInHour * secondInMinute * milSecondInSecond);

  let fullTime = setInterval(() => {
    second = String(second).padStart(2, 0);
    minute = String(minute).padStart(2, 0);
    hour = String(hour).padStart(2, 0);

    realtime = hour + " : " + minute + " : " + second;

    renderTime(realtime, elTime);
  }, milSecondInSecond);

  btns.addEventListener("click", (evt) => {
    if (evt.target.id == "stop") {
      clearInterval(runSecond);
      clearInterval(runMinute);
      clearInterval(runHour);
      clearInterval(fullTime);
      start.disabled = false;
      stop.disabled = true;
    }

    if (evt.target.id == "clear") {
      hour = 0;
      minute = 0;
      second = 0;
      realtime = "0" + hour + " : " + "0" + minute + " : " + "0" + second;

      renderTime(realtime, elTime);

      start.disabled = false;
      stop.disabled = true;
    }
  });
}

start.addEventListener("click", (evt) => {
  time();
  start.disabled = true;
  stop.disabled = false;
});
