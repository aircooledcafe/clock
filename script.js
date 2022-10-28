"use strict";

// initiate the variables for the html elements
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const dateEl = document.querySelector(".date");

const btnNightModeEl = document.querySelector(".night-mode");

// initiate the variables for the time
let dateTime, hours, minutes, seconds, date;

const getTime = function () {
  dateTime = new Date();
  let timeString = dateTime.toLocaleTimeString();
  // hours = dateTime.getHours();
  // minutes = dateTime.getMinutes();
  // seconds = dateTime.getSeconds();
  hours = timeString.substring(0, 2);
  minutes = timeString.substring(3, 5);
  seconds = timeString.substring(6, 8);
};

const dateString = function () {
  dateTime = new Date();
  let day = dateTime.toLocaleDateString("default", { day: "numeric" });
  let month = dateTime.toLocaleDateString("default", { month: "long" });
  let year = dateTime.toLocaleDateString("default", { year: "numeric" });
  date = `${day} ${month} ${year}`;
};

// function to get the current tim and set the html elements to the current time.
const setTime = function () {
  getTime();
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
  dateString();
  dateEl.textContent = date;
};

// night mode button, toggle red colours for night time

btnNightModeEl.addEventListener("click", function () {
  hoursEl.classList.toggle("night");
  minutesEl.classList.toggle("night");
  secondsEl.classList.toggle("night");
  dateEl.classList.toggle("night");
  btnNightModeEl.classList.toggle("btn-night");
});

// update the clock every second
setInterval(setTime, 1000);
