import {Menu} from './core/menu'
import { Module } from './core/module';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';

export class ContextMenu extends Menu {
    
    constructor(selector){
        super(selector);
        
    }

    open(){
        this.el.classList.add('open');

    }

    close() {
        this.el.classList.remove('open');
    }

    add (module) {
        if(module instanceof Module)
            this.el.insertAdjacentHTML('beforeend',module.toHTML())
    }

    run() {

        const background = new BackgroundModule('Background', 'Поменять цвет фона')
        const clickMod = new ClicksModule('Click', 'Посчитать клики')
        const figure = new ShapeModule('Figure', 'Добавить случайную фигуру')

        this.add(background)
        this.add(clickMod)
        this.add(figure)

        this.el.addEventListener('click', (event) => {

            if(event.target.closest('.menu-item')){
                this.close()
                
            }
             
            switch (event.target.dataset.type){
                case 'Background':
                    background.trigger()
                    figure.remove()
                    break;
                case 'Click':
                    clickMod.trigger()
                    figure.remove()
                    break;
                case 'Figure':
                    figure.trigger()
                    break;
            }
        })
        
        
        
        
        
        document.body.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            this.el.style.top = `${event.offsetY}px`
            this.el.style.left = `${event.offsetX + 10}px`
            this.open()
        })
    }
}