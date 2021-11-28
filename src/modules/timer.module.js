import {Module} from '../core/module'

export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.body = document.querySelector('body');
        this.time = 0
    }

    trigger() {
        const customForm = document.createElement('form');
        customForm.style = 'margin: 0 auto; text-align: center; width: auto;'
        const customFormInput = document.createElement('input');
        customFormInput.type = 'number';
        const customFormBtn = document.createElement('button');
        customFormBtn.textContent = 'Start'
        customForm.append(customFormInput, customFormBtn);
        document.body.append(customForm);
        customFormBtn.addEventListener('click', event => {
            event.preventDefault();

            console.log(customFormInput.value)
        })
    }

    startTimer(value) {
        
    }


  
}