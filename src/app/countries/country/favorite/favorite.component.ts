import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.component.html'
})

export class FavoriteComponent{
    
    //set default value to icon
    icon: string = "star_outline";

    //event emitter changeIcon to country.component
    @Output() iconEvent = new EventEmitter<string>();

    constructor() {}

    //change icon from filled to outline or outline to filled
    changeIcon() {
        if (this.icon === 'star_outline') {
            this.icon = 'star';
            this.iconEvent.emit(this.icon)
        } else {
            this.icon = 'start_outline'
            this.iconEvent.emit(this.icon);
        }
    }
}