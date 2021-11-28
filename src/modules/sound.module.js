import {Module} from '../core/module';
import { random } from "../utils";
import SOUND_1 from "../assets/sounds/novyjgod_001.mp3";
import SOUND_2 from "../assets/sounds/novyjgod_002.mp3";
import SOUND_3 from "../assets/sounds/novyjgod_003.mp3";
import SOUND_4 from "../assets/sounds/novyjgod_004.mp3";
import SOUND_5 from "../assets/sounds/novyjgod_005.mp3";
import SOUND_6 from "../assets/sounds/novyjgod_006.mp3";
import SOUND_7 from "../assets/sounds/novyjgod_007.mp3";

export class SoundModule extends Module {
    
    constructor(type, text){
        super(type, text);
        this.sounds =  [SOUND_1, SOUND_2, SOUND_3, SOUND_4, SOUND_5, SOUND_6, SOUND_7]    
        this.sound;
        this.index;
    }

    stop() {
        if(this.sound){
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    }
   
    trigger() {
       
        this.index = this.sounds[random(0, this.sounds.length-1)]
        this.sound = new Audio(this.index);
        this.sound.play();  
        
    }   
    
    
}