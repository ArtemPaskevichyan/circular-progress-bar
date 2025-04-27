"use strict";
const progressBar = document.querySelector("#progress-bar");
const valueInput = document.querySelector("#value-input");
valueInput.addEventListener("input", (e) => {
    progressBar.setAttribute("value", e.target.value);
});
const animatedCheckbox = document.querySelector("#animated-checkbox");
animatedCheckbox.addEventListener("input", (e) => {
    setStates('Animated', e.target.checked);
});
const hiddenCheckbox = document.querySelector("#hidden-checkbox");
hiddenCheckbox.addEventListener("input", (e) => {
    setStates('Hidden', e.target.checked);
});
// Изолируем states, чтобы не мешалось во внешнем скоупе, т.к. объект нужен только для приоретизации состояний
const setStates = (() => {
    const states = {
        'Animated': false,
        'Hidden': false,
    };
    return (state, value) => {
        states[state] = value;
        // Приоретизация состояний
        progressBar.setAttribute("state", states.Hidden ? 'Hidden' : states.Animated ? 'Animated' : 'Normal');
    };
})();
