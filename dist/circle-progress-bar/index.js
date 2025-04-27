"use strict";
const circleProgressBarStates = ['Normal', 'Animated', 'Hidden'];
class CircleProgressBar extends HTMLElement {
    constructor() {
        super();
        this.state = 'Normal';
        this.value = 0;
        this.stateChangeHandler = ({ newValue }) => {
            if (!circleProgressBarStates.includes(newValue))
                throw 'unsupported value';
            this.state = newValue;
        };
        this.valueChangeHandler = ({ newValue }) => {
            if (isNaN(+newValue))
                throw 'unsupported value';
            this.value = +newValue;
        };
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    static get observedAttributes() {
        return ['state', 'value'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        const fn = ({
            state: this.stateChangeHandler,
            value: this.valueChangeHandler,
        })[name];
        try {
            fn && fn({ newValue, oldValue });
            this.render();
        }
        catch (error) {
            console.error(`Property ${name} failed: ${error}`);
        }
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          width: 200px;
          display: block;
          --animation-duration: 4s;
        }
      
        .circular-progress {
          width: 100%;
          height: 100%;
          --radius: 115px;
          --circle-length: calc(2 * var(--radius) * pi);
          --filled-arc: calc(var(--circle-length) * var(--progress, 0) / 100);
        }
        
        .circular-progress__fg {
          transform: rotate(-90deg);
          transform-origin: center;
          stroke-dasharray: var(--filled-arc) calc(var(--circle-length) - var(--filled-arc));
        }
        
        @keyframes rotationAnimation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(720deg);
          }
        }
        
        .circular-progress.animated {
          --progress: 25;
          animation: rotationAnimation 2s ease-in-out infinite;
        }
      </style>
      
      <svg
        viewBox="0 0 250 250"
        style="
          ${this.state === 'Hidden' ? 'display: none' : ''}
          ${this.state === 'Normal' ? '--progress: ' + this.value : ''}
        "
        class="
          circular-progress
          ${this.state === 'Animated' ? 'animated' : ''}
        ">
        <circle class="circular-progress__bg"
          cx="125" cy="125" r="115" fill="none" stroke="#EFF3F6" stroke-width="20"
        ></circle>
        <circle class="circular-progress__fg"
          cx="125" cy="125" r="115" fill="none" stroke="#005BFF" stroke-width="20"
        ></circle>
      </svg>
    `;
    }
}
customElements.define('circle-progress-bar', CircleProgressBar);
