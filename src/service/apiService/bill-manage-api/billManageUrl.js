import {RootApi} from '../root-api/root-api'

export class BillManageUrls {
    constructor() {
        this.rootApi = new RootApi()
    }
    // 待支付账单
    orderUnpaid() {
        return `${this.rootApi.getRootUrl()}/pay/order/unpaid`
    }
    // 已支付订单
    orderPaid() {
        return `${this.rootApi.getRootUrl()}/pay/order/paid`
    }
    // 订单详情
    orderDetail(bill_id) {
        return `${this.rootApi.getRootUrl()}/pay/order/detail/${bill_id}`
    }
    // 创建订单
    createOrder() {
        return `${this.rootApi.getRootUrl()}/pay/order/create`
    }

}