import {Module} from '../core/module'

export class ClicksModule extends Module {
 
    constructor(type, text){
        super(type, text);
        this.body= document.querySelector('body');
        this.clickcount  = 0;
        this.divPopup = document.createElement('div')
    }
 #createMassage(text){

  
    this.divPopup.className = 'b-popup';
    const divPopupContent = document.createElement('div');
    divPopupContent.className = 'b-popup-content';
    divPopupContent.textContent = text;
    this.divPopup.append(divPopupContent);

    return this.divPopup
 }
   
    trigger(){

          
       this.body.addEventListener('click', () => {
           this.clickcount++
       })  

       setTimeout(  () => { 
           this.text =  `You clicked ${this.clickcount} times`
           console.log(this.text);
          
           document.body.append( this.#createMassage(this.text))
           setTimeout(() => {
               document.body.remove( this.#createMassage(this.text))
           },5000)
       }, 10000);
    }

}