import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHightlightDirective } from './basic-highlight/basic-hightlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
    declarations: [AppComponent, BasicHightlightDirective, BetterHighlightDirective, UnlessDirective],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
