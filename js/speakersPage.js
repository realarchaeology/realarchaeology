// js/speakers.js

document.addEventListener("DOMContentLoaded", function () {
  const speakersGrid = document.getElementById("speakers-grid");

  speakers.forEach((speaker) => {
    // Create speaker card
    const speakerCard = document.createElement("div");
    speakerCard.classList.add("speaker-card");

    // Speaker Image
    const speakerImg = document.createElement("img");
    speakerImg.src = speaker.image;
    speakerImg.alt = `${speaker.name}`;
    speakerCard.appendChild(speakerImg);

    // Speaker Info Container
    const speakerInfo = document.createElement("div");
    speakerInfo.classList.add("speaker-info");

    // Speaker Name
    const speakerName = document.createElement("h3");
    speakerName.textContent = speaker.name;
    speakerInfo.appendChild(speakerName);

    // Speaker Channel
    const speakerChannel = document.createElement("p");
    speakerChannel.classList.add("speaker-channel");
    speakerChannel.textContent = speaker.channel;
    speakerInfo.appendChild(speakerChannel);

    // Channel Link
    const channelLink = document.createElement("a");
    channelLink.href = speaker.link;
    channelLink.target = "_blank";
    channelLink.textContent = "Visit Channel";
    channelLink.classList.add("channel-link");
    speakerInfo.appendChild(channelLink);

    // Append speaker info to speaker card
    speakerCard.appendChild(speakerInfo);

    // Append speaker card to grid
    speakersGrid.appendChild(speakerCard);
  });
});
