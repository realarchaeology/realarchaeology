// js/schedule.js

document.addEventListener("DOMContentLoaded", function () {
  // Time Zone Switching
  const timezoneButtons = document.querySelectorAll(".btn-timezone");
  let currentTimezone = "us";

  // Event listener for time zone buttons
  timezoneButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      timezoneButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");
      // Update current time zone
      currentTimezone = this.getAttribute("data-timezone");
      // Update schedule
      generateSchedule();
    });
  });

  // Speaker Schedule Array
  const speakerSchedule = [
    {
      "Date and Time": "2024-10-25 15:00",
      Topic: "Livestream - Introducing #RealArchaeology",
      Channel: "Archaeology with Flint Dibble",
      Link: "https://www.youtube.com/@FlintDibble",
    },
    {
      "Date and Time": "2024-10-25 16:00",
      Topic: "Stones in the River: Susquehannock Eel Weirs",
      Channel: "The Crewe of the Fancy",
      Link: "https://youtube.com/@thecreweofthefancy",
    },
    {
      "Date and Time": "2024-10-25 16:00",
      Topic: "Easter Island",
      Channel: "Illinois Simpson Archaeology",
      Link: "https://www.youtube.com/channel/UCK3ZceNCSjEQHwSc-CHB2HA",
    },
    {
      "Date and Time": "2024-10-25 16:00",
      Topic:
        "The Lara Croft Reboot: Tomb Raider Game (2013) and Film (2018), with Julie Levy",
      Channel: "Movies We Dig",
      Link: "https://www.youtube.com/@movieswedig",
    },
    {
      "Date and Time": "2024-10-25 16:00",
      Topic:
        "An Archaeology of Interest: A Conversation About How Real Archaeologists Are Made",
      Channel: "Dr. Holly Walters",
      Link: "https://x.com/Manigarm",
    },
    {
      "Date and Time": "2024-10-25 16:00",
      Topic: "A Coffin Girl’s Guide to the Book of the Dead",
      Channel: "Ancient/Now",
      Link: "https://ancientnow.substack.com/p/a-coffin-girls-guide-to-the-book",
    },
    {
      "Date and Time": "2024-10-25 16:00",
      Topic: "Real Archaeology: How is it done?",
      Channel: "The Archaeology Review",
      Link: "https://ahotcupofjoe.net/2024/10/real-archaeology-how-is-it-done/",
    },
    {
      "Date and Time": "2024-10-25 18:00",
      Topic: "Archaeology Crime - Interview with Sam Hardy",
      Channel: "Into the Dust Archaeology",
      Link: "https://www.youtube.com/@Into_the-Dust_Arch",
    },
    {
      "Date and Time": "2024-10-25 18:00",
      Topic: "Detfri and Amica",
      Channel: "Steph the Archaeologist",
      Link: "https://www.tiktok.com/@archthot?lang=en",
    },
    {
      "Date and Time": "2024-10-25 18:00",
      Topic: "To be confirmed",
      Channel: "Annelise the Archaeologist",
      Link: "https://www.tiktok.com/@annelisethearchaeologist",
    },
    {
      "Date and Time": "2024-10-25 20:00",
      Topic:
        "Bronze Age Weapons in the Aegean and Egypt / Friday Finds (youtube)",
      Channel: "Tenninger Kellenbarger / The Dirt Diaries",
      Link: "https://www.tiktok.com/@dirtdiaries_?lang=en",
    },
    {
      "Date and Time": "2024-10-25 20:00",
      Topic: "Archaeological context makes sense",
      Channel: "Looting Matters",
      Link: "https://lootingmatters.blogspot.com/",
    },
    {
      "Date and Time": "2024-10-25 20:00",
      Topic:
        "Charivari e antichi amuleti: Il fascino nascosto della tomba romana di Pförring",
      Channel: "Archeo Travelers",
      Link: "www.archeotravelers.com",
    },
    {
      "Date and Time": "2024-10-25 20:00",
      Topic:
        "Excavating Mysteries: The Dogū Figures of Prehistoric Japan/Ancient Yamato: the Archaeology of Japan’s First State",
      Channel: "Tholos History",
      Link: "https://www.youtube.com/@tholoshistory",
    },
    {
      "Date and Time": "2024-10-25 22:00",
      Topic:
        "Revisiting the ancient Maltese cart-ruts. Do they date to the Bronze Age or Classical Period?",
      Channel: "MegalithHunter",
      Link: "https://www.youtube.com/@MegalithHunter",
    },
    {
      "Date and Time": "2024-10-25 22:00",
      Topic: "Mississippian Mounds (Illinois Simpson)",
      Channel: "Illinois Simpson Archaeology",
      Link: "https://www.youtube.com/channel/UCK3ZceNCSjEQHwSc-CHB2HA",
    },
    {
      "Date and Time": "2024-10-25 22:00",
      Topic: "The Calusa: Fishermen Kings of Florida",
      Channel: "Ancient Americas",
      Link: "https://www.youtube.com/@AncientAmericas",
    },
    {
      "Date and Time": "2024-10-25 22:00",
      Topic:
        "Why Do We Love (Plastic, Inaccurate) Skeletons So Much? A Halloween Investigation",
      Channel: "Animal Archaeology",
      Link: "https://animalarchaeology.com/",
    },
    {
      "Date and Time": "2024-10-26 14:00",
      Topic: "Native American Mounds in North America",
      Channel: "Actual Archaeology with JT",
      Link: "https://www.youtube.com/@actualarchaeology",
    },
    {
      "Date and Time": "2024-10-26 14:00",
      Topic:
        "An Archaeological Tour Of Petra: The Ancient Marvel Carved In Stone",
      Channel: "Inside Archaeology",
      Link: "https://www.youtube.com/channel/UCu7oxHVBemRuErORN6P1R6w",
    },
    {
      "Date and Time": "2024-10-26 14:00",
      Topic:
        "EVERYTHING You Know About Stone Circles is WRONG! - Long Meg and Her Daughters",
      Channel: "Adam Morgan Ibbotson",
      Link: "https://www.youtube.com/@AdamMorganIbbotson",
    },
    {
      "Date and Time": "2024-10-26 14:00",
      Topic: "Uncovering the Secrets of the Pyramids (Extended Edition)",
      Channel: "The Past Macabre",
      Link: "youtube.com/@past_macabre",
    },
    {
      "Date and Time": "2024-10-26 16:00",
      Topic: "How do we make people love real archaeology?",
      Channel: "Prehistorya Sanat",
      Link: "https://www.instagram.com/prehistorya_sanat?igsh=dzcxYjNkdDc3Njk2",
    },
    {
      "Date and Time": "2024-10-26 16:00",
      Topic: "Iron Age Oman",
      Channel: "Steph the Archaeologist",
      Link: "https://www.tiktok.com/@archthot?lang=en",
    },
    {
      "Date and Time": "2024-10-26 16:00",
      Topic: "Ancient Yamato: the Archaeology of Japan’s First State",
      Channel: "Tholos History",
      Link: "https://www.youtube.com/@tholoshistory",
    },
    {
      "Date and Time": "2024-10-26 18:00",
      Topic: "Part of the Cycladic Corpus of Figures?",
      Channel: "Looting Mattters",
      Link: "https://lootingmatters.blogspot.com/",
    },
    {
      "Date and Time": "2024-10-26 18:00",
      Topic: "Real Pseudoarchaeology",
      Channel: "Archaeology of the Mediterranean World",
      Link: "https://mediterraneanworld.wordpress.com/",
    },
    {
      "Date and Time": "2024-10-26 18:00",
      Topic: "Kensington Runestone - Among River kings and hoaxes",
      Channel: "Digging Up Ancient Aliens",
      Link: "https://diggingupancientaliens.com/",
    },
    {
      "Date and Time": "2024-10-26 18:00",
      Topic:
        "Direttamente dallo scavo archeologico (Directly from the archaeological excavation)",
      Channel: "Archeomilla",
      Link: "https://www.youtube.com/@Archeomilla",
    },
    {
      "Date and Time": "2024-10-26 18:00",
      Topic:
        "Shared Histories, Collective Futures: Why Public Outreach Matters to Me",
      Channel: "The Past Macabre",
      Link: "youtube.com/@past_macabre",
    },
    {
      "Date and Time": "2024-10-26 20:00",
      Topic: "Trevor Wallace: The Menorca Shipwreck Project",
      Channel: "The Tel",
      Link: "https://youtube.com/@thetel?si=EDxVxveqTQ-elk9b",
    },
    {
      "Date and Time": "2024-10-26 20:00",
      Topic: "ARCHEONEWS: 4 novità dal mondo dell'archeologia",
      Channel: "Archeo Wallace",
      Link: "https://www.instagram.com/archeo_wallace/",
    },
    {
      "Date and Time": "2024-10-26 22:00",
      Topic: "Episode 89: As Above, So Below (2014)",
      Channel: "Screens of the Stone Age",
      Link: "https://pasc-scpa.ca/sotsa",
    },
    {
      "Date and Time": "2024-10-27 14:00",
      Topic: "L'Anse aux Meadows: The Norse in North America",
      Channel: "beakersdream",
      Link: "https://www.tiktok.com/@beakersdream",
    },
    {
      "Date and Time": "2024-10-27 14:00",
      Topic: "#RealArchaeology of New England",
      Channel: "Archaeology Tube",
      Link: "https://www.youtube.com/@ArchaeologyTube",
    },
    {
      "Date and Time": "2024-10-27 14:00",
      Topic:
        "Medieval stereotypes: Did people really live side-by-side with animals?",
      Channel: "Fake History Hunter",
      Link: "https://x.com/fakehistoryhunt",
    },
    {
      "Date and Time": "2024-10-27 16:00",
      Topic:
        "Decaying Bones, the Flesh of Memory: Zooarchaeology at the Williams Spring Village",
      Channel: "Nathanael Fosaaen",
      Link: "https://www.youtube.com/channel/UCPtpx23uFPZQAHK7Ou_yvlQ",
    },
    {
      "Date and Time": "2024-10-27 16:00",
      Topic: "PhD Research",
      Channel: "Steph the Archaeologist",
      Link: "https://www.tiktok.com/@archthot?lang=en",
    },
    {
      "Date and Time": "2024-10-27 18:00",
      Topic: "The Globe-Trotting Archaeology of Apples",
      Channel: "Dr. Smiti Nathan",
      Link: "https://youtube.com/@smitinathan",
    },
    {
      "Date and Time": "2024-10-27 20:00",
      Topic: "Weaving her Story | Storytelling and Textiles",
      Channel: "Lady of the Library",
      Link: "https://www.youtube.com/cinziadubois",
    },
    {
      "Date and Time": "2024-10-27 20:00",
      Topic: "To be confirmed",
      Channel: "Tales From Azlantis",
      Link: "https://www.youtube.com/@TalesFromAztlantis",
    },
    {
      "Date and Time": "2024-10-27 20:00",
      Topic:
        "Myths, Narratives and Iconography of Gobekli Tepe, Karahan Tepe, and Sayburc",
      Channel: "",
      Link: "https://www.youtube.com/@Crecganford",
    },
    {
      "Date and Time": "2024-10-27 22:00",
      Topic: "Archaeology For The Future",
      Channel: "",
      Link: "",
    },
  ];

  // Function to generate the schedule
  function generateSchedule() {
    // Clear existing schedule
    const scheduleDetails = document.querySelector(".schedule-details");
    scheduleDetails.innerHTML = "";

    // Group events by day
    const eventsByDay = {};

    speakerSchedule.forEach((event) => {
      // Parse the event date and time
      const eventDateTime = new Date(event["Date and Time"].replace(" ", "T"));

      // Adjust time zone if necessary
      let dateOptions = {
        timeZone:
          currentTimezone === "us" ? "America/New_York" : "Europe/London",
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      };
      const dateFormatter = new Intl.DateTimeFormat("en-US", dateOptions);
      const eventDate = dateFormatter.format(eventDateTime);

      if (!eventsByDay[eventDate]) {
        eventsByDay[eventDate] = [];
      }
      eventsByDay[eventDate].push(event);
    });

    // Sort days
    const sortedDays = Object.keys(eventsByDay).sort(
      (a, b) => new Date(a) - new Date(b)
    );

    // Create day schedules
    sortedDays.forEach((day, index) => {
      const daySchedule = document.createElement("div");
      daySchedule.classList.add("day-schedule");
      daySchedule.id = `day${index + 1}`;
      if (index !== 0) {
        daySchedule.classList.add("d-none");
      }

      // Day Heading
      const dayHeading = document.createElement("h3");
      dayHeading.classList.add("day-heading");
      dayHeading.textContent = day;
      daySchedule.appendChild(dayHeading);

      // Sort events by time
      eventsByDay[day].sort(
        (a, b) => new Date(a["Date and Time"]) - new Date(b["Date and Time"])
      );

      eventsByDay[day].forEach((event) => {
        const eventTime = new Date(event["Date and Time"].replace(" ", "T"));
        let timeOptions = {
          timeZone:
            currentTimezone === "us" ? "America/New_York" : "Europe/London",
          hour: "numeric",
          minute: "numeric",
          hour12: currentTimezone === "us",
        };
        const timeFormatter = new Intl.DateTimeFormat("en-US", timeOptions);
        const localTime = timeFormatter.format(eventTime);

        // Create time slot
        const timeSlot = document.createElement("div");
        timeSlot.classList.add("time-slot");

        const timeDiv = document.createElement("div");
        timeDiv.classList.add("time");
        timeDiv.textContent = localTime;

        const topicDiv = document.createElement("div");
        topicDiv.classList.add("topic");
        topicDiv.textContent = event.Topic;

        const channelDiv = document.createElement("div");
        channelDiv.classList.add("channel");
        const channelLink = document.createElement("a");
        channelLink.href = event.Link;
        channelLink.target = "_blank";
        channelLink.textContent = event.Channel;
        channelDiv.appendChild(channelLink);

        timeSlot.appendChild(timeDiv);
        timeSlot.appendChild(topicDiv);
        timeSlot.appendChild(channelDiv);

        daySchedule.appendChild(timeSlot);

        // Add a horizontal line between time slots
        const hr = document.createElement("hr");
        daySchedule.appendChild(hr);
      });

      // Remove the last <hr>
      if (daySchedule.lastChild.tagName === "HR") {
        daySchedule.removeChild(daySchedule.lastChild);
      }

      scheduleDetails.appendChild(daySchedule);
    });

    // Update day buttons
    const dayButtonsContainer = document.querySelector(".day-buttons");
    dayButtonsContainer.innerHTML = "";

    sortedDays.forEach((day, index) => {
      const dayButton = document.createElement("button");
      dayButton.classList.add("btn", "btn-day");
      if (index === 0) {
        dayButton.classList.add("active");
      }
      dayButton.setAttribute("data-day", `day${index + 1}`);
      dayButton.textContent = `Day ${index + 1}`;
      dayButtonsContainer.appendChild(dayButton);
    });

    // Re-attach event listeners for day buttons
    const dayButtons = document.querySelectorAll(".btn-day");
    dayButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        dayButtons.forEach((btn) => btn.classList.remove("active"));
        // Add active class to clicked button
        this.classList.add("active");

        // Hide all day schedules
        const daySchedules = document.querySelectorAll(".day-schedule");
        daySchedules.forEach((schedule) => schedule.classList.add("d-none"));

        // Show selected day schedule
        const selectedDay = this.getAttribute("data-day");
        document.getElementById(selectedDay).classList.remove("d-none");
      });
    });
  }

  // Initial generation of the schedule
  generateSchedule();
});
