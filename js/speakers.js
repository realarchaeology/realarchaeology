// js/speakers.js

// Array of speaker objects
const speakersList = [
  {
    name: "Fredrik Trusohamn",
    image: "https://diggingupancientaliens.com/img/headshot.webp",
    channel: "Digging Up Ancient Aliens",
    link: "https://diggingupancientaliens.com/",
  },
  {
    name: "Dr Flint Dibble",
    image: "https://via.placeholder.com/120",
    channel: "Archaeology with Flint Dibble",
    link: "https://www.youtube.com/flintdibble",
  },
  {
    name: "Dr. Bill Farley",
    image: "https://via.placeholder.com/120",
    channel: "Archaeology Tube",
    link: "https://www.youtube.com/@ArchaeologyTube",
  },
  {
    name: "Mr. Michael Brown",
    image: "https://via.placeholder.com/120",
    channel: "History Uncovered",
    link: "https://www.example.com/michael-brown",
  },
  {
    name: "Ms. Sarah Williams",
    image: "https://via.placeholder.com/120",
    channel: "Artifacts & Tales",
    link: "https://www.example.com/sarah-williams",
  },
  // Add more speaker objects as needed
];

// Function to shuffle the speakers array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Function to display speakers
function displaySpeakers() {
  const speakersContainer = document.getElementById("speakers-container");
  const shuffledSpeakers = shuffleArray(speakersList);
  const selectedSpeakers = shuffledSpeakers.slice(0, 3);

  selectedSpeakers.forEach((speaker) => {
    // Create the speaker card element
    const speakerCard = document.createElement("div");
    speakerCard.classList.add("col-md-4", "mb-4");

    speakerCard.innerHTML = `
        <div class="speaker-card h-100">
          <img src="${speaker.image}" alt="${speaker.name}">
          <h5>${speaker.name}</h5>
          <a href="${speaker.link}" target="_blank" rel="noopener noreferrer">${speaker.channel}</a>
        </div>
      `;

    // Append the speaker card to the container
    speakersContainer.appendChild(speakerCard);
  });
}

// Call the function to display speakers on page load
document.addEventListener("DOMContentLoaded", displaySpeakers);
