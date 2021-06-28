import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css'],
    encapsulation: ViewEncapsulation.Emulated // None, ShadowDom
})
export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{
        serverName: string;
        serverContent: string;
    }>();
    @Output('bpCreated') blueprintCreated = new EventEmitter<{
        blueprintName: string;
        blueprintContent: string;
    }>();
    @ViewChild('serverContentInput', { static: true }) serverContentInput : ElementRef;

    constructor() {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {
        // TODO: do something about this
    }

    onAddServer(nameInput: HTMLInputElement) {
        this.serverCreated.emit({
            serverName: nameInput.value,
            serverContent: this.serverContentInput.nativeElement.value,
        });
    }

    onAddBlueprint(nameInput: HTMLInputElement) {
        this.blueprintCreated.emit({
            blueprintName: nameInput.value,
            blueprintContent: this.serverContentInput.nativeElement.value,
        });
    }
}
