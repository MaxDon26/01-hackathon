import { Module } from "../core/module";

export class MessageModule extends Module {
  #html;
#messages;

  constructor(type, text) {
    super(type, text);
    this.#messages = [
        'Random text message',
        'Created by best hackathon team',
        'I saw a lot of snow today',
        'I want to eat',
        'Please help, I write code by 6 hours',
        'I need in job',
        'He-he-he '
    ]
  }

  renderMessage() {
    this.#html = document.createElement("div");
    this.#html.id = "message-block";
    this.#html.className = "custom-message";

    this.#html.textContent = "Random text message";

    document.body.append(this.#html);
  }

  trigger() {
    this.renderMessage();
  }
}
