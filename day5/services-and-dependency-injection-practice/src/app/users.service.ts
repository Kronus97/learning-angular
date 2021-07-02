import { Injectable } from "@angular/core";

import { CountsService } from "./counts.service";

@Injectable({ providedIn: 'root' })
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private countsService: CountsService) {}

    setUserToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.countsService.incrementActiveToInactiveCounter();
    }

    setUserToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.countsService.incrementInactiveToActiveCounter();
    }
}
