const events = [
  {
    name: "Storm",
    fire: 1,
    earth: 4,
    wind: 7,
    water: 0,
  },
  {
    name: "Earthquake",
    fire: 7,
    earth: 9,
    wind: 3,
    water: 2,
  },
  {
    name: "Tornado",
    fire: 1,
    earth: 7,
    wind: 2,
    water: 0,
  },
  {
    name: "Wildfire",
    fire: 7,
    earth: 3,
    wind: 9,
    water: 11,
  },
  {
    name: "Flood",
    fire: 5,
    earth: 2,
    wind: 9,
    water: 3,
  },
  {
    name: "Plague",
    fire: 6,
    earth: 4,
    wind: 4,
    water: 4,
  },
  {
    name: "Meteor",
    fire: 2,
    earth: 8,
    wind: 2,
    water: 0,
  },
  {
    name: "Solar Flare",
    fire: +15,
    earth: 3,
    wind: 9,
    water: 0,
  },
  {
    name: "Drought",
    fire: 1,
    earth: +3,
    wind: +9,
    water: 0,
  },
  {
    name: "Heat Wave",
    fire: 1,
    earth: +3,
    wind: -9,
    water: 0,
  },
  {
    name: "Deep Freeze",
    fire: -1,
    earth: -3,
    wind: +9,
    water: 0,
  },
];

const card = document.querySelector(".content");
const text = card.querySelector(".text");
const fire = document.querySelector(".fire");
const earth = document.querySelector(".earth");
const wind = document.querySelector(".wind");
const water = document.querySelector(".water");
const scoreBoxes = card.querySelector(".score-boxes");

function flip() {
  let index = Math.floor(Math.random() * 11);
  let event = index;
  console.log(`${event} is ${events[event].name}`);
  card.classList.toggle("flip");
  scoreBoxes.classList.toggle("hide-scores");
  if (card.classList.contains("flip")) {
    text.textContent = `${events[event].name}`;
    fire.textContent = `${events[event].fire}`;
    earth.textContent = `${events[event].earth}`;
    wind.textContent = `${events[event].wind}`;
    water.textContent = `${events[event].water}`;
  } else {
    text.textContent = "CHANCE";
  }
}

card.addEventListener("click", flip);
