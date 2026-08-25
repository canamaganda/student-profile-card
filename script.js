const profileContainer = document.getElementById("profile-container");

const profileCard = document.createElement("div");
profileCard.classList.add("profile-card");

const name = document.createElement("h2");
name.textContent = "Racel Cana";

const bio = document.createElement("p");
bio.textContent = "BSIS2";

const profile = document.createElement("img");
profile.src = "profile.png";
profile.alt = "Profile Picture";

profileCard.appendChild(profile);
profileCard.appendChild(name);
profileCard.appendChild(bio);

profileContainer.appendChild(profileCard);
