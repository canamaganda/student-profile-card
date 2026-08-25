const profileContainer = document.getElementById("profile-container");

const profileCard = document.createElement("div");
profileCard.classList.add("profile-card");

const name = document.createElement("h2");
name.textContent = "Racel Cana";

const bio = document.createElement("p");
bio.textContent = "Maganda";

const avatar = document.createElement("img");
avatar.src = "https://i.pravatar.cc/150?img=47";
avatar.alt = "Student Avatar";

profileCard.appendChild(avatar);
profileCard.appendChild(name);
profileCard.appendChild(bio);

profileContainer.appendChild(profileCard);
