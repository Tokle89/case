export const toggleForm = () => {
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
};
