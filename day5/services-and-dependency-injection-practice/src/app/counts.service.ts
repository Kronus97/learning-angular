import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CountsService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactiveCounter(): void {
        this.activeToInactiveCounter++;
        console.log('Active to inactive: ' + this.activeToInactiveCounter);
    }

    incrementInactiveToActiveCounter(): void {
        this.inactiveToActiveCounter++;
        console.log('Inactive to active: ' + this.inactiveToActiveCounter);
    }
}