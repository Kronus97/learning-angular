import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-game-control',
    templateUrl: './gamecontrol.component.html',
    styleUrls: ['./gamecontrol.component.scss']
})
export class GameControlComponent {
    @Output() tick = new EventEmitter<number>(); 
    counter: number;
    tickIntervalId;

    constructor() {
        this.counter = 0;
    }

    onStart() {
        this.tickIntervalId = setInterval(() => {
            this.counter++;
            this.tick.emit(this.counter);
        }, 1000)
    }

    onStop() {
        clearInterval(this.tickIntervalId);
        this.counter = 0;
    }
}