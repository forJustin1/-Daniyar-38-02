let counter = 0;

function updateCounter() {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = counter;
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.increase').addEventListener('click', function () {
        counter++;
        updateCounter();
    });

    document.querySelector('.reset').addEventListener('click', function () {
        counter = 0;
        updateCounter();
    });

    document.querySelector('.decrease').addEventListener('click', function () {
        counter--;
        updateCounter();
    });

    updateCounter();
});
