let counterValue = 0;

const decrementBth = document.querySelector('[data-action="decrement"]');

const incrementBth = document.querySelector('[data-action="increment"]');

const spanValue = document.querySelector('#value');

decrementBth.addEventListener('click', ( ) => {
    counterValue -= 1;
    console.log(counterValue);
    spanValue.textContent = counterValue;
})

incrementBth.addEventListener('click', ( ) => {
    counterValue += 1;
    console.log(counterValue);
    spanValue.textContent = counterValue;
})