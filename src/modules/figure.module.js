export default class Figure {
  #figure;
  #width;
  #height;
  #timeout;
  #speedX;
  #speedY;
  #border;
  #colors;

  constructor() {
    // выбор направления движения
    Math.random() > 0.5 ? (this.#speedX = 1) : (this.#speedX = -1);
    Math.random() > 0.5 ? (this.#speedY = 1) : (this.#speedY = -1);
    // возможные цвета
    this.#colors = [
      "#FFFF66",
      "#FF3300",
      "#FF0066",
      "#330000",
      "#990099",
      "#FF66CC",
      "#66FFFF",
    ];

    // общая скорость
    this.#timeout = 5;
    //высота и ширина рабочей области
    this.#width = document.documentElement.clientWidth;
    this.#height = document.documentElement.clientHeight;

    this.state = {
      // диаметр, цвет круга
      size: 50,
      color: "#FF66CC",
      // координаты
      coordinateX: Math.floor(Math.random() * (this.#width - 50)),
      coordinateY: Math.floor(Math.random() * (this.#height - 50)),
      border: 50,
    };

    this.#border = {
      bottom: this.#height - this.state.size / 2,
      right: this.#width - this.state.size / 2,
      top: 0,
      left: 0,
    };
  }

  createElement() {
    //создание фигуры
    const figure = document.createElement("div");
    figure.id = "moved-figure";
    // стили
    figure.style.width = `${this.state.size}px`;
    figure.style.height = `${this.state.size}px`;
    figure.style.backgroundColor = this.state.color;
    figure.style.borderRadius = `${this.state.border}%`;
    figure.style.position = "absolute";
    figure.style.transition = "border-radius linear 0.5s";

    //начальные координаты
    figure.style.left = `${this.state.coordinateX}px`;
    figure.style.top = `${this.state.coordinateY}px`;
    //добавление в DOM
    document.body.append(figure);
    // вносим в глобальное свойство
    this.#figure = document.querySelector("#moved-figure");
  }

  changeBorder() {
    this.state.border === 50
      ? (this.state.border = 0)
      : (this.state.border = 50);
    this.#figure.style.borderRadius = `${this.state.border}%`;
  }

  changeColor() {
    const colorIndex = Math.floor(Math.random() * (this.#colors.length - 1));
    this.state.color = this.#colors[colorIndex];
    this.#figure.style.backgroundColor = this.state.color;
  }

  move() {
    this.state.coordinateX += this.#speedX;
    this.state.coordinateY += this.#speedY;

    // проверка, не вышли ли за границу
    if (
      this.state.coordinateX >= this.#border.right ||
      this.state.coordinateX <= this.#border.left
    ) {
      this.#speedX *= -1;
      this.changeBorder();
      this.changeColor();
    }
    if (
      this.state.coordinateY >= this.#border.bottom ||
      this.state.coordinateY <= this.#border.top
    ) {
      this.#speedY *= -1;
      this.changeBorder();
      this.changeColor();
    }
    
    // новые координаты
    this.#figure.style.left = `${this.state.coordinateX}px`;
    this.#figure.style.top = `${this.state.coordinateY}px`;
  }

  trigger() {
    // создать и срендерить элемент
    this.createElement();
    //запуск движения
    setInterval(() => this.move(), this.#timeout);
  }
}
