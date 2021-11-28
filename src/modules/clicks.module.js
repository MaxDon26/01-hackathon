import {Module} from '../core/module'

export class ClicksModule extends Module {
 
    constructor(type, text){
        super(type, text);
        this.body= document.querySelector('body');
        this.clickcount  = 0;

    }

    #enableCountingClicks() {
        
       return  ()=> {
       
            ++ this.clickcount 
            
            setTimeout(  () => { 
               
                this.text =  `You clicked ${this.clickcount} times.`
              //  console.log(this.text);
                this.body.innerHTML =this.toHTML(this.text)
               
        }, 2000);   
      
        }   
       
    }  
    init(){

        this.body.addEventListener('click', this.#enableCountingClicks(), false)
        
        
    }

}