const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  toggle.onclick = () => {
    nav.classList.toggle("active");
  };




const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {
  let filter = searchInput.value.toLowerCase();
  let cards = document.querySelectorAll(".transfer-card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? "flex" : "none";
  });
});





const light = document.getElementById("themelight");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  light.textContent = "☀️";
}

light.onclick = () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    light.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    light.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
};



