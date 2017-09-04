import { Injectable } from '@angular/core';
import {RootApiService} from "../../root-api/root-api";

@Injectable()
export class OfficeAddressesService {
  // 公司办公地址API
  constructor(private rootApiService: RootApiService) { }

  // 列表 get
  // 查看 get    url/id
  // 删除 delete url/id
  // 更新 post   url/id/update
  getOfficeAddresses() {
    return `${this.rootApiService.getRootUrl()}/user/office-addresses`;
  }
  // 添加 post
  getOfficeAddressesStore() {
    return `${this.rootApiService.getRootUrl()}/user/office-addresses/store`;
  }
}
