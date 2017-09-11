import {RootApi} from '../root-api/root-api'

export class StaffUrls {
    constructor() {
        this.rootApi = new RootApi()
    }
    // 转正提醒列表
    formalRemind() {
        return `${this.rootApi.getRootUrl()}/wechat/qy/formal-remind`
    }
    // 生日提醒列表
    birthRemind() {
        return `${this.rootApi.getRootUrl()}/wechat/qy/birth-remind`
    }
    // 周年提醒列表
    annualRemind() {
        return `${this.rootApi.getRootUrl()}/wechat/qy/hire-year-remind`
    }
    // 部门直属下员工列表和部门
    staffList() {
        return `${this.rootApi.getRootUrl()}/wechat/staff/`
    }
    // 员工详情
    staffDetail(id) {
        return `${this.rootApi.getRootUrl()}/wechat/staff/show?id=${id}`
    }

}