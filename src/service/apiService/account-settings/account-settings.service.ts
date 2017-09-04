import {RootApiService} from "../root-api/root-api.js";

export class AccountSettingsService {
  private header;
  constructor(private rootApi: RootApiService) {
    this.header = this.rootApi.getRootUrl();
  }

}
// 账户设置页面信息
export function getUserInfo() {
  return `${this.header}/user/users/show-sign-all`;
}
// 更新签约账户主体
export function updateSignInfo() {
  return `${this.header}/user/users/update-sign-info`;
}
export function getFapiaoInfo() {
  return `${this.header}/user/hr-fapiao-info`;
}
// 发送验证码
export function getCaptcha() {
  return `${this.header}/user/users/send-captcha`;
}
// 更新密码
export function updatePw() {
  return `${this.header}/user/users/update-password`;
}
// 更新手机号码
export function updateMobile() {
  return `${this.header}/user/users/update-mobile`;
}

// 更新账户联系人
export function updateContact() {
  return `${this.header}/user/hr-contact-info/update`;
}
// 更新发票信息
export function updateFapiao() {
  return `${this.header}/user/hr-fapiao-info/update`;
}
// 添加发票寄送地址
export function addSend() {
  return `${this.header}/user/hr-address/store`;
}
export function updateSend(id){
  return `${this.header}/user/hr-address/${id}/update`;
}
export function getSendAddr(id: any = '') {
  return `${this.header}/user/hr-address/${id}`;
}