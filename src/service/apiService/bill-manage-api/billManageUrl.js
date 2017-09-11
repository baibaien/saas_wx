import {RootApi} from '../root-api/root-api'

export class BillManageUrls {
    constructor() {
        this.rootApi = new RootApi()
    }
    // 待支付订单
    orderUnpaid() {
        return `${this.rootApi.getRootUrl()}/pay/order/unpaid`;
    }
    // 已支付订单
    orderPaid() {
        return `${this.rootApi.getRootUrl()}/pay/order/paid`;
    }
    // 订单详情
    orderDetail(bill_id) {
        return `${this.rootApi.getRootUrl()}/pay/order/detail/${bill_id}`;
    }
    // 创建订单
    createOrder() {
        return `${this.rootApi.getRootUrl()}/pay/order/create`;
    }
    // 未下单账单列表
    orderIndex() {
        return `${this.rootApi.getRootUrl()}/pay/order/index`;
    }
    //删除账单
    deleteOrder(id) {
        return `${this.rootApi.getRootUrl()}/pay/order/delete-bill/${id}`
    }
    // 账单明细
    getOrderDetail(id) {
        return `${this.rootApi.getRootUrl()}/pay/order/detail/${id}`
    }
}