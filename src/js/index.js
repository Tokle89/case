import { renderListings } from "./render/render.js";
import { formHandler } from "./utils/formHandler.js";
import { toggleForm } from "./utils/toggleForm.js";

renderListings("Norge");

document.getElementById("citySelector").addEventListener("change", (event) => {
  const selectedCity = event.target.value;
  renderListings(selectedCity);
});

document.getElementById("form").addEventListener("submit", formHandler);

document.getElementById("toggleForm").addEventListener("click", toggleForm);
