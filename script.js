const readingBar = document.getElementById("readingBar");
const themeBtn = document.getElementById("themeBtn");

function updateReadingProgress() {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;
  readingBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateReadingProgress);
updateReadingProgress();

const savedTheme = localStorage.getItem("blog-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeBtn.textContent = isDark ? "☀" : "☾";
  localStorage.setItem("blog-theme", isDark ? "dark" : "light");
});
