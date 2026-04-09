const form = document.getElementById("profileForm");

const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");
const bioInput = document.getElementById("bio");
const colorInput = document.getElementById("color");
const imageInput = document.getElementById("image");
const cardTitle = document.getElementById("cardTitle");
const cardJob = document.getElementById("cardJob");
const cardBio = document.getElementById("cardBio");
const avatar = document.getElementById("avatar");
const icon = document.querySelector("#avatar i");
const skillsContainer = document.getElementById("skills");
const error = document.getElementById("error");

/* BONUS: LIVE UPDATE */
nameInput.addEventListener("input", () => {
  cardTitle.textContent = nameInput.value;
});

/* FORM SUBMIT */
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const job = jobInput.value.trim();

  // VALIDATION
  if (!name || !job) {
    error.textContent = "Name and Job Title are required!";
    return;
  }

  error.textContent = "";

  // UPDATE TEXT
  cardTitle.textContent = name;
  cardJob.textContent = job;
  cardBio.textContent = bioInput.value;

  // UPDATE COLOR
  avatar.style.background = colorInput.value;
  icon.style.color = "#fff";
  // CLEAR OLD SKILLS
  skillsContainer.innerHTML = "";

  // GET CHECKED SKILLS
  const checkedSkills = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  checkedSkills.forEach(skill => {
    const span = document.createElement("span");
    span.textContent = skill.value;
    skillsContainer.appendChild(span);
  });
});
