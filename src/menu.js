import {Menu} from './core/menu'
import { Module } from './core/module';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';
import { TimerModule } from './modules/timer.module'
import { MessageModule } from './modules/message.module';
import { SoundModule } from './modules/sound.module';
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
            this.el.insertAdjacentHTML('beforeend', module.toHTML())
    }

    run() {
        const modules = [];
        const background = new BackgroundModule('Background', 'Поменять цвет фона')
        const clickMod = new ClicksModule('Click', 'Посчитать клики за 10 секунд');
        const figure = new ShapeModule('Figure', 'Добавить случайную фигуру');
        const timer = new TimerModule('Timer', 'Добавить таймер');
        const message = new MessageModule('Message', 'Добавить блок с сообщением');
        const sound  = new SoundModule('Sound', 'Воспроизвести случайный звук')
        modules.push(background, clickMod, figure, timer, message, sound)

        modules.forEach(module => this.add(module))

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
                    figure.remove()
                    figure.trigger()
                    break;
                case 'Message':
                    message.trigger()
                    figure.remove()
                    break;
                case 'Sound':
                    sound.stop()
                    sound.trigger()
                    break;
                case 'Timer':
                    timer.trigger();
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