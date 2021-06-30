import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    OnInit,
} from '@angular/core';

@Directive({
    selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

    constructor() {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {}
}
