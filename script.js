const events = [
  "Storm",
  "Earthquake",
  "Tornado",
  "Wildfire",
  "Flood",
  "Plague",
  "Meteor",
  "Solar Flare",
  "Drought",
  "Heat Wave",
  "Deep Freeze",
];

const card = document.querySelector(".content");
const text = card.querySelector(".text");
const scoreBoxes = card.querySelector(".score-boxes");

function flip() {
  let index = Math.floor(Math.random() * 11);
  let event = index;
  console.log(`${event} is ${events[event]}`);
  card.classList.toggle("flip");
  scoreBoxes.classList.toggle("hide-scores");
  if (card.classList.contains("flip")) {
    text.textContent = `${events[event]}`;
  } else {
    text.textContent = "CHANCE";
  }
}

card.addEventListener("click", flip);
