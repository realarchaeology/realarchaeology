// js/speakers.js

// Array of speaker objects
const speakersList = [
  {
    name: "Fredrik Trusohamn",
    image: "img/F_Trusohamn_profile_24_s.jpg",
    channel: "Digging Up Ancient Aliens",
    link: "https://diggingupancientaliens.com/",
  },
  {
    name: "Dr. Flint Dibble",
    image: "img/F_Dibble_profile_24_s.jpg",
    channel: "Archaeology with Flint Dibble",
    link: "https://www.youtube.com/flintdibble",
  },
  {
    name: "Dr. Bill Farley",
    image: "img/B_Farley_profile_24_s.jpg",
    channel: "Archaeology Tube",
    link: "https://www.youtube.com/@ArchaeologyTube",
  },
  {
    name: "Kayleigh A.N. During",
    image: "img/K_During_profile_24_s.jpg",
    channel: "History With Kayleigh",
    link: "https://www.youtube.com/historywithkayleigh",
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
