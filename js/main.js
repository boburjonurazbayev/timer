const elTime = document.querySelector(".heading");
const elButton = document.querySelector(".button");

let second = 0;
let minute = 0;
let hour = 0;

const milSecondInSecond = 1000;
const secondInMinute = 60;
const minuteInHour = secondInMinute;

function renderTime(realtime, node) {
  node.textContent = realtime;
}

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

  setInterval(() => {
    second = String(second).padStart(2, 0);
    minute = String(minute).padStart(2, 0);
    hour = String(hour).padStart(2, 0);

    let realtime = hour + " : " + minute + " : " + second;

    renderTime(realtime, elTime);
  }, milSecondInSecond);
}

time();
