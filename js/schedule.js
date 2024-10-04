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

  // Time Zone Switching
  const timezoneButtons = document.querySelectorAll(".btn-timezone");
  const timeSlots = document.querySelectorAll(".time-slot .time");

  // Set default time zone (US)
  let currentTimezone = "us";

  // Function to update times based on selected time zone
  function updateTimes(timezone) {
    timeSlots.forEach((timeElement) => {
      const utcTime = timeElement.getAttribute("data-utc");
      const date = new Date(utcTime);

      let options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };

      if (timezone === "us") {
        options.timeZone = "America/New_York"; // Replace with your US time zone
      } else if (timezone === "uk") {
        options.timeZone = "Europe/London";
        options.hour12 = false; // Use 24-hour format if desired
      }

      const formatter = new Intl.DateTimeFormat("en-US", options);
      const localTime = formatter.format(date);
      timeElement.textContent = localTime;
    });
  }

  // Initialize times
  updateTimes(currentTimezone);

  // Event listener for time zone buttons
  timezoneButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      timezoneButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");
      // Update current time zone
      currentTimezone = this.getAttribute("data-timezone");
      // Update times
      updateTimes(currentTimezone);
    });
  });
});
