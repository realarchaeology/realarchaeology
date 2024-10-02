// js/countdown.js

// Set the date we're counting down to (October 26, 2024, 12:00 PM UK time)
const countDownDate = new Date("October 25, 2024 15:00:00 GMT+0100").getTime();

// Update the count down every 1 second
const countdownfunction = setInterval(function () {
  // Get today's date and time in milliseconds
  const now = new Date().getTime();

  // Find the time difference between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements with corresponding IDs
  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerText = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerText = seconds
    .toString()
    .padStart(2, "0");

  // If the count down is finished, display some text or perform an action
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown").innerHTML =
      "<h3>The event has started!</h3>";
  }
}, 1000);
