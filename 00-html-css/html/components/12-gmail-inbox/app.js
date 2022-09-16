const inboxCheckboxes = document.querySelectorAll(".inbox-checkbox");
const inboxStars = document.querySelectorAll(".inbox-star");

function toggle() {
  if (this.active) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }

  this.active = !this.active;
}

inboxCheckboxes.forEach((item) => {
  item.addEventListener("click", toggle);
  item.active = false;
});

inboxStars.forEach((item) => {
  item.addEventListener("click", toggle);
  item.active = false;
});
