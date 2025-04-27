const progressBar = document.querySelector("#progress-bar") as HTMLElement;

const valueInput = document.querySelector("#value-input") as HTMLInputElement;
valueInput.addEventListener("input", (e) => {
  progressBar.setAttribute("value", (e.target as HTMLInputElement).value)
})

const animatedCheckbox = document.querySelector("#animated-checkbox") as HTMLElement;
animatedCheckbox.addEventListener("input", (e) => {
  setStates('Animated', (e.target as HTMLInputElement).checked);
})

const hiddenCheckbox = document.querySelector("#hidden-checkbox") as HTMLElement;
hiddenCheckbox.addEventListener("input", (e) => {
  setStates('Hidden', (e.target as HTMLInputElement).checked);
})

// Изолируем states, чтобы не мешалось во внешнем скоупе, т.к. объект нужен только для приоретизации состояний
const setStates = (()=> {
  const states = {
    'Animated': false,
    'Hidden': false,
  }

  return (state: 'Animated' | 'Hidden', value: boolean) => {
    states[state] = value;
    // Приоретизация состояний
    progressBar.setAttribute("state", states.Hidden ? 'Hidden' : states.Animated ? 'Animated' : 'Normal')
  }
})()


