import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-even',
    templateUrl: './even.component.html',
    styleUrls: ['./even.component.scss'],
})
export class EvenComponent implements OnInit {
    @Input() number: number;

    constructor() {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {}
}
