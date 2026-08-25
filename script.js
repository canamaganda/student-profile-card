const profileContainer = document.getElementById("profile-container");

const profileCard = document.createElement("div");
profileCard.classList.add("profile-card");

const name = document.createElement("h2");
name.textContent = "Racel Cana";

const bio = document.createElement("p");
bio.textContent = "Maganda";

const profile = document.createElement("img");
profile.src = "dc02161d-312a-4bb9-b346-de4b20297a33-removebg-preview.png";
profile.alt = "Profile Picture";

profileCard.appendChild(profile);
profileCard.appendChild(name);
profileCard.appendChild(bio);

profileContainer.appendChild(profileCard);
