import { Injectable } from '@angular/core';
import {RootApiService} from "../../root-api/root-api";

@Injectable()
export class StaffEduService {
  // 教育经历
  constructor(private rootApiService: RootApiService) { }
  // 列表 get    传yg_id
  // 查看 get   url/id
  // 更新 post  url/id/update
  // 删除 delete url/id
  getStaffEdu() {
    return `${this.rootApiService.getRootUrl()}/staff/educations`;
  }
  // 添加
  getStaffEduStore() {
    return `${this.rootApiService.getRootUrl()}/staff/educations/store`;
  }
}
