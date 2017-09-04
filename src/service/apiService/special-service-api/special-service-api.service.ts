import {Injectable} from '@angular/core';
import {RootApiService} from "../root-api/root-api";

@Injectable()
export class SpecialServiceApiService {

    constructor(private rootApiService: RootApiService) {
    }

    // -->专项服务列表----指定/不分类
    getServiceList(type = 1) {
        if (type) {
            return `${this.rootApiService.getRootUrl()}/special-service/${type}/list`;
        } else {
            return `${this.rootApiService.getRootUrl()}/special-service/list`;
        }
    }
    // <-----

    // -->附加业务分类
    getServiceType(type?) {
        if (type) {
            return `${this.rootApiService.getRootUrl()}/special-service/${type}/category`;
        } else {
            return `${this.rootApiService.getRootUrl()}/special-service/category`;
        }
    }
    // <-----
    // --> 我的附加业务
    getMySpecial(type?) {
        return `${this.rootApiService.getRootUrl()}/special-service/my`;
    }
    // <-----
    // -->服务条件和材料获取
    getServiceAttr(id) {
        return `${this.rootApiService.getRootUrl()}/special-service/${id}/attr`;
    }
    // <-----
    // -->我的专项服务详情
    getServiceDetail(id) {
        return `${this.rootApiService.getRootUrl()}/special-service/${id}/detail`;
    }
    // <-----
    // -->上传附件
    getServiceUpload() {
        return `${this.rootApiService.getRootUrl()}/special-service/upload`;
    }
    // <-----

    // -->办理服务
    getPayService() {
        return `${this.rootApiService.getRootUrl()}/special-service/buy`;
    }
    // <-----
}
