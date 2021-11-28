import { Module } from "../core/module";

export class TimerModule extends Module {
  #timerBlock;
  #timerMessage;
  #formBlock;
  #timer;

  constructor(type, text) {
    super(type, text);
    this.body = document.querySelector("body");
    this.time = {
      minutes: 0,
      seconds: 0,
    };
  }

  renderTimer() {
    const timerHTML = document.createElement("div");
    timerHTML.id = "timer-block";
    timerHTML.className = "timer-block";

    document.body.append(timerHTML);
    this.#timerBlock = document.querySelector("#timer-block");

    this.renderTime();
    this.#formBlock.remove();
  }

  startTimer() {
    this.#timer = setInterval(() => {
      if (this.time.seconds !== 0) {
        this.time.seconds--;
        this.renderTime();
      } else if (this.time.minutes !== 0) {
        this.time.seconds = 59;
        this.time.minutes--;
        this.renderTime();
      } else {
        clearInterval(this.#timer);
        this.renderMessage();
        this.remove();
      }
    }, 1000);
  }

  renderTime() {
    let minutes = "0";
    let seconds = "0";

    if (this.time.minutes < 10) {
      minutes = `0${this.time.minutes}`;
    } else {
      minutes = `${this.time.minutes}`;
    }

    if (this.time.seconds < 10) {
      seconds = `0${this.time.seconds}`;
    } else {
      seconds = `${this.time.seconds}`;
    }

    this.#timerBlock.textContent = `${minutes}:${seconds}`;
  }

  renderMessage() {
    const message = document.createElement("p");
    message.id = "timer-message";
    message.className = "timer-message";
    message.textContent = `Таймер закончил работу!`;

    document.body.append(message);

    this.#timerMessage = document.querySelector("#timer-message");
  }

  remove() {
    setTimeout(() => {
      this.#timerBlock.remove();
      this.#timerMessage.remove();
    }, 2000);
  }

  trigger() {
    //   FORM
    const customForm = document.createElement("form");
    customForm.id = "custom-form";
    customForm.style = "margin: 0 auto; text-align: center; width: auto;";
    customForm.className = "custom__form";
    // INPUT
    const customFormInput = document.createElement("input");
    customFormInput.type = "number";
    // submit btn
    const customFormBtn = document.createElement("button");
    customFormBtn.textContent = "Start";
    // create FORM
    customForm.append(customFormInput, customFormBtn);
    // render FORM
    document.body.append(customForm);
    this.#formBlock = document.querySelector("#custom-form");

    customFormBtn.addEventListener("click", (event) => {
      event.preventDefault();
      if (customFormInput.value > 0) {
        this.time.seconds = customFormInput.value % 60;
        this.time.minutes = (customFormInput.value - this.time.seconds) / 60;

        this.renderTimer();

        this.startTimer();
      }
    });
  }
}
