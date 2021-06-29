import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    oddNumbers: number[] = [];
    evenNumbers: number[] = [];
    
    onTick(number: number) {
        number % 2 == 1 ? this.oddNumbers.push(number) : this.evenNumbers.push(number);
    }
}
