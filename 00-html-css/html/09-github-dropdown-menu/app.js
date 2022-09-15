const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownButton = document.querySelector(".dropdown-button");

dropdownButton.addEventListener("click", (event) => {
  if (this.active) {
    dropdownMenu.classList.remove("active");
  } else {
    dropdownMenu.classList.add("active");
  }

  this.active = !this.active;
});

dropdownButton.active = false;
