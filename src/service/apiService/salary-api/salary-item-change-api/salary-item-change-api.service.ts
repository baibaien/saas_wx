import {Injectable} from '@angular/core';
import {RootApiService} from "../../root-api/root-api";

@Injectable()
export class SalaryItemChangeApiService {

    constructor(private rootApiService: RootApiService) {
    }
    getSalaryItemUrl() {
        return `${this.rootApiService.getRootUrl()}/salary/bonus`;
    }
}
