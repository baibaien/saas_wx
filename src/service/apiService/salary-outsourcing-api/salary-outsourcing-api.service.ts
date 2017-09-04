import { Injectable } from '@angular/core';
import {RootApiService} from "../root-api/root-api";

@Injectable()
export class SalaryOutsourcingApiService {

  constructor(private rootApiService: RootApiService) {
  }
  getOutsourcingIndex() {
    return `${this.rootApiService.getRootUrl()}/pay/pay`;
  }
  getOutsourcingBack() {
    return `${this.rootApiService.getRootUrl()}/pay/pay/add`;
  }
  getOutsourcingDelete() {
    return `${this.rootApiService.getRootUrl()}/pay/pay/delBack`;
  }
  getOutsourcingEdit() {
    return `${this.rootApiService.getRootUrl()}/pay/pay/change`;
  }
  getOutsourcingActive() {
    return `${this.rootApiService.getRootUrl()}pay/pay/active`;
  }
  geOutsourcingCreateBill() {
    return `${this.rootApiService.getRootUrl()}/pay/pay/createBill`;
  }
  getCommercialInsurance() {
    return `${this.rootApiService.getRootUrl()}/pay/commercial/index`;
  }
  getCommercialCompanyEdit() {
    return `${this.rootApiService.getRootUrl()}/pay/commercial/global-set`;
  }
  getCommercialEdit() {
    return `${this.rootApiService.getRootUrl()}/pay/commercial/set`;
  }
}
