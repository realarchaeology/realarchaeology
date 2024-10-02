// js/schedule.js

document.addEventListener("DOMContentLoaded", function () {
  const dayButtons = document.querySelectorAll(".btn-day");
  const daySchedules = document.querySelectorAll(".day-schedule");

  dayButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      dayButtons.forEach((btn) => btn.classList.remove("active"));
      // Hide all schedules
      daySchedules.forEach((schedule) => schedule.classList.add("d-none"));
      // Add active class to clicked button
      this.classList.add("active");
      // Show the selected day's schedule
      const dayId = this.getAttribute("data-day");
      document.getElementById(dayId).classList.remove("d-none");
    });
  });
});
