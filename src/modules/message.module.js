import { random } from "../utils";
import { Module } from "../core/module";

export class MessageModule extends Module {
  #html;
  #messages;
  #messageBlock;

  constructor(type, text) {
    super(type, text);
    this.#messages = [
      "Random text message",
      "Created by best hackathon team",
      "I saw a lot of snow today",
      "I want to eat",
      "Please help, I write code by 6 hours",
      "I need in job",
      "He-he-he, I am very bad message",
    ];
  }

  renderMessage() {
    // выбор текста
    const text = this.#messages[random(0, this.#messages.length - 1)];
    // создание элемента
    this.#html = document.createElement("div");
    this.#html.id = "message-block";
    this.#html.className = "custom-message";
    this.#html.classList.add("hidden");
    this.#html.textContent = text;
    // добавить в DOM
    document.body.append(this.#html);

    this.#messageBlock = document.querySelector("#message-block");
    setTimeout(() => {
      this.#messageBlock.classList.remove("hidden");
    }, 1);
  }
  remove() {
    this.#messageBlock.classList.add("hidden");
    
    setTimeout(() => {
      this.#messageBlock.remove();
    }, 1000);
  }

  trigger() {
    this.renderMessage();
    setTimeout(() => {
      this.remove();
    }, 3000);
  }
}
