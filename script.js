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

goBack.addEventListener("click", () => history.back());

quit.addEventListener("click", () => (window.location = "../index.html"));

refresh.addEventListener("click", () => location.reload());

closeOptions.addEventListener("click", () =>
  container.classList.remove("show-nav2")
);

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
