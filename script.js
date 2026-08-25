const profileContainer = document.getElementById("profile-container");

const profileCard = document.createElement("div");
profileCard.classList.add("profile-card");

const name = document.createElement("h2");
name.textContent = "Racel Caña";

const bio = document.createElement("p");
bio.textContent = "A BSIS2 student studying at La Verdad Christian College (LVCC). To live for the hope of it all.";

const profile = document.createElement("img");
profile.src = "profile.png";
profile.alt = "Profile Picture";

profileCard.appendChild(profile);
profileCard.appendChild(name);
profileCard.appendChild(bio);

profileContainer.appendChild(profileCard);
