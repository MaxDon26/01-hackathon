import {Module} from '../core/module'

export class ClicksModule extends Module {
 
    constructor(type, text){
        super(type, text);
        this.clickcount  = 0;
        this.dblclickCount = 0
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
      
        document.body.addEventListener('dblclick', () => {
            this.dblclickCount++
        })        

       document.body.addEventListener('click', () => {
           
           this.clickcount++
       })  

       setTimeout(  () => { 
           this.text =  `You clicked ${this.clickcount} times, double clicked ${this.dblclickCount}`

           document.body.append( this.#createMassage(this.text))
           setTimeout(() => {
            this.divPopup.remove()
           },5000)
       }, 10000);
    }

}