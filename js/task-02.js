const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayIt = [];

const listEl = document.querySelector(`#ingredients`);
for (let ingredient of ingredients) {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = ingredient;
    arrayIt.push(itemEl);
    console.log(itemEl);
}

listEl.append(...arrayIt);