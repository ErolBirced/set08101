const openLeft = document.getElementById("open");
const closeLeft = document.getElementById("close");
const openRight = document.getElementById("open2");
const closeRight = document.getElementById("close2");
const container = document.querySelector(".container");
const circleContainer = document.querySelector(".circle-container");
const circleContainer2 = document.querySelector(".circle-container2");
const goBack = document.getElementById("goBack");
const quit = document.getElementById("quit");
const save = document.getElementById("save");
const refresh = document.getElementById("refresh");
const closeOptions = document.getElementById("closeOptions");
const showNav2 = document.querySelector(".show-nav2");
const showNav = document.querySelector(".show-nav");
const optionsRight = document.querySelector("#options-right ul");
const optionsLeft = document.querySelector("#options-left ul");
const containerWithShownav = document.querySelector(".container .show-nav");

goBack.addEventListener("click", () => history.back());

quit.addEventListener("click", () => (window.location = "../index.html"));

refresh.addEventListener("click", () => location.reload());

closeOptions.addEventListener("click", () =>
  container.classList.remove("show-nav2")
);

container.addEventListener("click", () => {
  if (optionsRight) {
    console.log("dkjghdf");
  }
});

container.addEventListener("click", () => {
  if (container.classList.contains(showNav)) {
    alert("sjfhgdjf");
    optionsRight.style.display = "none";
  } else {
    optionsRight.style.display = "invisible";
  }
});

// save.addEventListener("click", () => )

closeLeft.addEventListener("click", () =>
  container.classList.remove("show-nav")
);

closeRight.addEventListener("click", () =>
  container.classList.remove("show-nav2")
);

openLeft.addEventListener("click", () => {
  container.classList.add("show-nav");
});

openRight.addEventListener("click", () => {
  container.classList.add("show-nav2");
});
