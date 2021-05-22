const events = [
  {
    name: "Storm",
    description: "A big storm roles in, creatures run and hide",
    fire: 1,
    earth: 4,
    wind: 7,
    water: 0,
  },
  {
    name: "Earthquake",
    description: "The ground shakes, chasms open and mountains fall",
    fire: 7,
    earth: 9,
    wind: 3,
    water: 2,
  },
  {
    name: "Tornado",
    description: "Lethal wind tunnels turn ground into air",
    fire: 1,
    earth: 7,
    wind: 2,
    water: 0,
  },
  {
    name: "Wildfire",
    description: "The whole world is set ablaze, nothing escapes",
    fire: 7,
    earth: 3,
    wind: 9,
    water: 11,
  },
  {
    name: "Flood",
    description: "The ocean envelops the earth turning sky to abyss",
    fire: 5,
    earth: 2,
    wind: 9,
    water: 3,
  },
  {
    name: "Plague",
    description: "Disease is everything, everything is death",
    fire: 6,
    earth: 4,
    wind: 4,
    water: 4,
  },
  {
    name: "Meteor",
    description: "The sky is falling in planets topple mountains",
    fire: 2,
    earth: 8,
    wind: 2,
    water: 0,
  },
  {
    name: "Solar Flare",
    description:
      "Solar rays whip across space tearing at the fabric of the atmosphere",
    fire: +15,
    earth: 3,
    wind: 9,
    water: 0,
  },
  {
    name: "Drought",
    description: "the rains recede.. forever",
    fire: 1,
    earth: +3,
    wind: +9,
    water: 0,
  },
  {
    name: "Heat Wave",
    description: "Oh my gosh wow like so hot",
    fire: 1,
    earth: +3,
    wind: -9,
    water: 0,
  },
  {
    name: "Deep Freeze",
    description: "Oh my god wow like so cold",
    fire: -1,
    earth: -3,
    wind: +9,
    water: 0,
  },
];

const card = document.querySelector(".content");
const text = card.querySelector(".text");
const description = card.querySelector(".description");
const fire = document.querySelector(".fire");
const earth = document.querySelector(".earth");
const wind = document.querySelector(".wind");
const water = document.querySelector(".water");
const scoreBoxes = card.querySelector(".score-boxes");

function randomNumber(multiplier) {
  return Math.floor(Math.random() * multiplier);
}

function flip() {
  let index = randomNumber(11);
  let event = index;
  console.log(`${event} is ${events[event].name}`);
  card.classList.toggle("flip");
  description.classList.toggle("hidden");
  scoreBoxes.classList.toggle("hidden");
  if (card.classList.contains("flip")) {
    text.textContent = `${events[event].name}`;
    description.textContent = `${events[event].description}`;
    fire.textContent = `${randomNumber(50)}`;
    earth.textContent = `${randomNumber(50)}`;
    wind.textContent = `${randomNumber(50)}`;
    water.textContent = `${randomNumber(50)}`;
  } else {
    text.textContent = "CHANCE";
  }
}

card.addEventListener("click", flip);
