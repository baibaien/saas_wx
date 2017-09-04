import {Injectable} from '@angular/core';
import {RootApiService} from "../../root-api/root-api";

@Injectable()
export class SalaryHistoryApiService {

    constructor(private rootApiService: RootApiService) {
    }

    getSalaryHistory() {
        return `${this.rootApiService.getRootUrl()}/salary/salary/history`;
    }
}
