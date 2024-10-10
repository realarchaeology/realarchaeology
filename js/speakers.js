// js/speakers.js

// Array of speaker objects
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
  {
    name: "Sebastian Wetherbee",
    image: "img/S_Wetherbee_profile_24_s.jpg",
    channel: "Lost Worlds",
    link: "https://www.youtube.com/@thetel",
  },
  {
    name: "Jens Notroff",
    image: "img/J_Notroff_profile_24_s.jpg",
    channel: "Jens Notroff",
    link: "https://www.youtube.com/@jens2go",
  },
  {
    name: "North 02",
    image: "img/D_Nelson_profile_24_s.jpg",
    channel: "North02",
    link: "https://www.youtube.com/@NORTH02",
  },
  {
    name: "Chelsea Rose",
    image: "img/C_Rose_profile_24_s.jpg",
    channel: "Underground History",
    link: "https://www.ijpr.org/podcast/underground-history",
  },
  {
    name: "Carly Maris",
    image: "img/C_Maris_profile_24_s.jpg",
    channel: "Underground History",
    link: "https://www.tiktok.com/@vintagehistorian",
  },
  {
    name: "Archeomilla",
    image: "img/Archeomilla_profile_24_s.jpg",
    channel: "Archeomilla",
    link: "https://www.youtube.com/@Archeomilla",
  },
  {
    name: "Bill Caraher",
    image: "img/B_Caraher_profile_24_s.jpg",
    channel: "Archaeology of the Mediterranean World",
    link: "https://mediterraneanworld.wordpress.com",
  },
  {
    name: "David Miano",
    image: "img/D_Miano_profile_24_s.jpg",
    channel: "World of Antiquity",
    link: "https://www.youtube.com/@WorldofAntiquity",
  },
  {
    name: "Kim Chapman",
    image: "img/K_Chapman_profile_24_s.jpg",
    channel: "Tholos History",
    link: "https://www.youtube.com/@tholoshistory",
  },
  {
    name: "Holly Walters",
    image: "img/H_Walters_profile_24_s.jpg",
    channel: "Holly Walters",
    link: "https://thefamiliarstrange.com/amo-team/dr-holly-walters",
  },
  {
    name: "Jo Hedwig Teeuwisse",
    image: "img/J_Teeuwisse_profile_24_s.jpg",
    channel: "Fake History Hunter",
    link: "https://www.youtube.com/@fakehistoryhunter",
  },
  {
    name: "Colin MacCormack, Elijah Fleming, Christie Vogler",
    image: "img/Movies_We_Dig_profile_24_s.jpg",
    channel: "Movies We Dig",
    link: "https://www.movieswedig.com",
  },
  {
    name: "Alex Fitzpatrick",
    image: "img/A_Fitzpatrick_profile_24_s.jpg",
    channel: "Animal Archaeology",
    link: "https://animalarchaeology.com/author/afitzpatrickarchaeology",
  },
  {
    name: "Cinzia DuBois",
    image: "img/C_DuBois_profile_24_s.jpg",
    channel: "Lady of the Library",
    link: "https://www.youtube.com/@CinziaDuBois",
  },
  {
    name: "Laura Tabone",
    image: "img/L_Tabone_profile_24_s.jpg",
    channel: "MegalithHunter",
    link: "https://www.youtube.com/@MegalithHunter",
  },
  {
    name: "Dilara Özaşır",
    image: "img/D_Ozasir_profile_24_s.jpg",
    channel: "Prehistorya Sanat",
    link: "https://www.instagram.com/prehistorya_sanat",
  },
  {
    name: "Lorena Cannizzaro",
    image: "img/L_Cannizzaro_profile_24_s.jpg",
    channel: "Archeo Travelers",
    link: "https://www.youtube.com/@archeotravelers",
  },
  {
    name: "Carl Feagans",
    image: "img/C_Feagans_profile_24_s.jpg",
    channel: "Archaeology Review",
    link: "https://ahotcupofjoe.net",
  },
  {
    name: "Matthew Swainger",
    image: "img/M_Swainger_profile_24_s.jpg",
    channel: "Beakersdream",
    link: "https://www.tiktok.com/@beakersdream?lang=en",
  },
  {
    name: "Marchella Ward",
    image: "img/M_Ward_profile_24_s.jpg",
    channel: "Marchella Ward",
    link: "https://www.tiktok.com/@luxmeatok?lang=en",
  },
  {
    name: "David Gill",
    image: "img/D_Gill_profile_24_s.jpg",
    channel: "Looting Matters",
    link: "https://lootingmatters.blogspot.com",
  },
  {
    name: "Tenninger Kellenbarger",
    image: "img/T_Kellenbarger_profile_24_s.jpg",
    channel: "Styx and Bones with Chelsea and Tenn",
    link: "https://www.youtube.com/@styxandbonespodcast",
  },
  {
    name: "Doug Rocks-Macqueen",
    image: "img/D_Rocks-Macqueen_profile_24_s.jpg",
    channel: "Recording Archaeology by Open Past",
    link: "https://www.youtube.com/@openpast",
  },
  {
    name: "Ellie Mackin Roberts",
    image: "img/E_Roberts_profile_24_s.jpg",
    channel: "Ellie Mackin Roberts",
    link: "https://www.youtube.com/@EllieMackinRoberts",
  },
  {
    name: "Matteo Boccadamo",
    image: "img/M_Boccadamo_profile_24_s.jpg",
    channel: "Archeo Wallace",
    link: "https://www.youtube.com/@Archeo_Wallace",
  },
  {
    name: "Franki Webb",
    image: "img/F_Webb_profile_24_s.jpg",
    channel: "Life of an Archaeologist",
    link: "https://archaeoblog.com/about-me",
  },
  {
    name: "Adam Morgan Ibbotson",
    image: "img/A_Ibbotson_profile_24_s.jpg",
    channel: "Adam Morgan Ibbotson",
    link: "https://www.youtube.com/@AdamMorganIbbotson",
  },
  {
    name: "Jason Cohen",
    image: "img/J_Cohen_profile_24_s.jpg",
    channel: "Into the Dust Archaeology",
    link: "https://www.youtube.com/@Into_the-Dust_Arch",
  },
  {
    name: "Smiti Nathan",
    image: "img/S_Nathan_profile_24_s.jpg",
    channel: "Dr. Smiti Nathan",
    link: "https://www.youtube.com/@smitinathan",
  },
  {
    name: "Victoria Austen",
    image: "img/V_Austen_profile_24_s.jpg",
    channel: "Peopling the Past",
    link: "https://www.youtube.com/@peoplingthepast7268",
  },
  {
    name: "Michael Bott and Rupert Soskin",
    image: "img/Bott_Soskin_profile_24_s.jpg",
    channel: "The Prehistory Guys",
    link: "https://www.youtube.com/@ThePrehistoryGuys",
  },
  {
    name: "JT Lewis",
    image: "img/J_Lewis_profile_24_s.jpg",
    channel: "Actual Archaeology with JT",
    link: "https://www.youtube.com/@ActualArchaeology",
  },
  {
    name: "Stephanie Rice",
    image: "img/S_Rice_profile_24_s.jpg",
    channel: "The Past Macabre",
    link: "https://www.archaeologypodcastnetwork.com/tpm",
  },
  {
    name: "Joshua Lindal, Dr. Kimberly Plomp, Dr. Ross Barnett",
    image: "img/Lindal_Plomp_Barnett_profile_24_s.jpg",
    channel: "Screens of the Stone Age",
    link: "https://pasc-scpa.ca/sotsa",
  },
  {
    name: "Rachel Amun",
    image: "img/R_Amun_profile_24_s.jpg",
    channel: "Inside Archaeology",
    link: "https://www.youtube.com/@Inside_Archaeology",
  },
  {
    name: "Dr. Dale F. Simpson Jr.",
    image: "img/D_Simpson_24_s.jpg",
    channel: "Illinois Simpson Archaeology",
    link: "https://www.youtube.com/@dfsj381",
  },
  {
    name: "Raven Todd DaSilva",
    image: "img/R_DaSilva_24_s.jpg",
    channel: "Dig It With Raven",
    link: "https://www.youtube.com/@DigItWithRaven",
  },
  {
    name: "Kara Cooney",
    image: "img/K_Cooney_24_s.jpg",
    channel: "Afterlives of Ancient Egypt",
    link: "https://karacooney.squarespace.com/podcast-afterlives",
  },
  {
    name: "Jon F White",
    image: "img/J_White_24_s.jpg",
    channel: "Crecganford",
    link: "https://www.youtube.com/@Crecganford",
  },
  {
    name: "Kurly Tlapoyawa",
    image: "img/K_Tlapoyawa_24_s.jpg",
    channel: "Tales From Aztlantis",
    link: "https://talesfromaztlantis.com",
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
