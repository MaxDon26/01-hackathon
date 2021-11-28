import {Module} from '../core/module'
import {random} from '../utils'

export class BackgroundModule extends Module {

    constructor(type, text) {
        super(type, text);
        this.body = document.body;
        this.interval;
        this.clearBtn;
    }


    trigger() {
        
        this.clearBtn = document.createElement('button')
        this.clearBtn.className = 'clear_button'
        this.clearBtn.textContent = "Остановить цвет"
        document.body.append(this.clearBtn);
        
        this.clearBtn.addEventListener('click', () => {
            clearInterval(this.interval);
            this.clearBtn.remove()
        })

        
        const rgbArr = [];
        this.interval = setInterval(() => {
            for (let i = 0; i < 3; i++ ) {
                const elemRgbArr = random(0, 255)
                rgbArr[i]=elemRgbArr;
            }
                
                this.body.style.background =  `rgb(${rgbArr.join(', ')})`
                console.log(rgbArr);
                },2000)
        
    }
}