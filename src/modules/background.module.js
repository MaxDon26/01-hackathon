import {Module} from '../core/module'
import {random} from '../utils'

export class BackgroundModule extends Module {

    constructor(type, text) {
        super(type, text);
        this.body = document.querySelector('body');
    }

    trigger() {
        let rgbArr = [];
        for (let i = 0; i < 3; i++ ) {
            const elemRgbArr = random(0, 255)
            rgbArr.push(elemRgbArr);
        }
        this.body.style = `background: rgb(${rgbArr.join(', ')})`
    }
}