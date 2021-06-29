import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-odd',
    templateUrl: './odd.component.html',
    styleUrls: ['./odd.component.scss'],
})
export class OddComponent implements OnInit {
    @Input() number: number;

    constructor() {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {}
}
