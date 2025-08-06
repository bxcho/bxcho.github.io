// Theme toggle
const toggle = document.createElement("button");
toggle.textContent = "🌗";
toggle.className = "theme-toggle";
toggle.onclick = () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
};

window.addEventListener("DOMContentLoaded", () => {
  // Restore theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") document.body.classList.add("dark-mode");

  // Add toggle to header
  const header = document.querySelector("header");
  if (header) header.appendChild(toggle);

  // Fade-in animation
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("fade-in");
  });
});
