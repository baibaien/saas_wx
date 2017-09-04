import {Injectable} from '@angular/core';
import {RootApiService} from "../root-api/root-api";

@Injectable()
export class BillManageApiService {
    // -->账单管理API
    // <-----
    constructor(private rootService: RootApiService) {
    }
    getBillListUrl() {
        return `${this.rootService.getRootUrl()}/pay/order/index`;
    }
    // -->创建帐单
    getBillCreateUrl() {
        return `${this.rootService.getRootUrl()}/pay/order/create`;
    }
    // <-----
    getUnpaidListUrl() {
        return `${this.rootService.getRootUrl()}/pay/order/unpaid`;
    }
    getPaidListUrl() {
        return `${this.rootService.getRootUrl()}/pay/order/paid`;
    }
    // 删除帐单
    getDeleteBillUrl(){
        return `${this.rootService.getRootUrl()}/pay/order/delete-bill/`;
    }
    // 删除订单
    getDeleteOrderUrl() {
        return `${this.rootService.getRootUrl()}pay/order/delete-order/`;
    }
    getPatchFapiao(id) {
        return `${this.rootService.getRootUrl()}/pay/order/${id}/invoice`;
    }
    // -->去支付
    getToPayUrl(id) {
        return `${this.rootService.getRootUrl()}/pay/order/to-pay/${id}`;
    }
    // <-----
}
