import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	  onlyOdd: boolean = false;
    // numbers: number[] = [1, 2, 3, 4, 5];
    oddNumbers: number[] = [1, 3, 4];
    evenNumbers: number[] = [2, 4];
    value: number = 4;
}
