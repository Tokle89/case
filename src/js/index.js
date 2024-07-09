import { renderListings } from "./render/render.js";
import { formHandler } from "./utils/formHandler.js";

renderListings("Norge");

document.getElementById("citySelector").addEventListener("change", (event) => {
  const selectedCity = event.target.value;
  renderListings(selectedCity);
});

document.getElementById("form").addEventListener("submit", formHandler);

document.getElementById("toggleForm").addEventListener("click", () => {
  const formContainer = document.getElementById("formContainer");
  const toggleBtn = document.getElementById("toggleForm");

  const isDisplayed = window.getComputedStyle(formContainer).display !== "none";

  if (isDisplayed) {
    formContainer.style.display = "none";
    toggleBtn.innerHTML = "Sammenlign steder";
    toggleBtn.classList.remove("active");
  } else {
    formContainer.style.display = "block";
    toggleBtn.innerHTML = "Skjul skjema";
    toggleBtn.classList.add("active");
  }
});
