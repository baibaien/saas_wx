import {RootApi} from '../root-api/root-api'

export class HomePageUrls {
    constructor() {
        this.rootApi = new RootApi()
    }
    // 代办事项
    indexToBe() {
       return `${this.rootApi.getRootUrl()}/wechat/wechat/index-to-be`
    }
    // 支付订单额度
    unpaidAmount() {
        return `${this.rootApi.getRootUrl()}/pay/order/unpaid-amount`
    }
    // 未生成账单数量
    billUnOrder() {
        return `${this.rootApi.getRootUrl()}/pay/order/bill-by-un-order`
    }
    // 首页重要提醒
    indexRemind() {
        return `${this.rootApi.getRootUrl()}/wechat/wechat/index-remind`
    }
    // 转正提醒
     formalRemind() {
        return `${this.rootApi.getRootUrl()}/wechat/qy/formal-remind`
     }
    // 生日提醒
    birthdayRemind() {
        return `${this.rootApi.getRootUrl()}/wechat/qy/birth-remind`
    }
    // 周年提醒
    hireYearRemin() {
        return `${this.rootApi.getRootUrl()}/wechat/qy/hire-year-remind`
    }
    //
}