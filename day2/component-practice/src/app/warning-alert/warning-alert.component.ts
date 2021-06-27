import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: "<p class='alert --warning'>{{message}}</p>",
    styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {
    message = 'Warning message';
}