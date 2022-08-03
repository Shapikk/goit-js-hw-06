
const navEl = document.querySelectorAll(".item");

const numberOfCategories = navEl.length;

navEl.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Element: ${element.lastElementChild.children.length}`);
});

console.log(`Number og categoties: ${numberOfCategories}`);



