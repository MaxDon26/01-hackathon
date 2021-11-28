import {Module} from '../core/module'

export class ClicksModule extends Module {
 
    constructor(type, text){
        super(type, text);
        this.body= document.querySelector('body');
        this.clickcount  = 0;

    }

    trigger() {
        this.clickcount  = 0;    
        this.body.addEventListener('click', () => {
            this.clickcount++
        })  

        setTimeout(  () => { 
            this.text =  `You clicked ${this.clickcount} times.`
            console.log(this.text);
            const result = document.createElement('h1')
            result.innerHTML = `You clicked ${this.clickcount} times.`
            document.body.append(result)
            setTimeout(() => {
                result.remove()
            },5000)
        }, 10000);
        
            
      

    }  

}