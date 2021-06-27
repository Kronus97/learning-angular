import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent {
    isMessageHidden = true
    clicksList = []

    logNewClick(): void {
        this.isMessageHidden = !this.isMessageHidden;
        let date = new Date();
        let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
        let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
        let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
        let hour = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(date);
        let mins = new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(date);
        let seconds = new Intl.DateTimeFormat('en', { second: 'numeric' }).format(date);

        this.clicksList.push(`${day}.${month}.${year}, ${hour}:${mins}:${seconds}`);
    }

    getBackgroundByIndex(index: number): object {
        return { backgroundColor: index > 3 ? 'blue' : 'white'};
    }
}