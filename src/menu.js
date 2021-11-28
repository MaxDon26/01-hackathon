import {Menu} from './core/menu'
<<<<<<< HEAD
import { Module } from './core/module';

export class ContextMenu extends Menu {
    
    constructor(selector){
        super(selector);
    }

    open(event){
        this.el.classList.add('open');

    }

    close() {
        this.el.classList.remove('open');
    }

    add (module) {
        if(module instanceof Module){
            const moduleHTML = module.toHTML()
            this.el.append(moduleHTML);
        }
       
    }

    run() {
        document.body.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            this.el.style.top = `${event.offsetY}px`
            this.el.style.left = `${event.offsetX + 10}px`
            this.open()
        })
    }
=======

export class ContextMenu extends Menu {

>>>>>>> ebe0cadab2e3848a684a78b1e9f181d895291f62
}