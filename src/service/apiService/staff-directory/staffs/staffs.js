import {RootApi} from "../../root-api/root-api";


export class Staffs {
    //员工API
    // constructor(private RootApi: RootApiService) {
    // }
    // 获取id=name列表
    getStaffOutline() {
        return `${RootApi.getRootUrl()}/staff/staffs/get-ygs?name=`;
    }

    //员工列表   get
    // 添加员工  post
    getYgUpload() {
        return `${RootApi.getRootUrl()}/staff/staffs/`;
    }

    // 添加员工/员工详情基础配置 get
    getYgSettings() {
        return `${RootApi.getRootUrl()}/staff/staffs/create`;
    }

    // 查看员工  get    url/id
    getStaff(id) {
        return `${RootApi.getRootUrl()}/staff/staffs/${id}`;
    }

    getStaffs() {
        return `${RootApi.getRootUrl()}/staff/staffs/index`;
    }

    rehire() {
        return `${RootApi.getRootUrl()}/staff/staffs/update-re-employ`;
    }

    // 基础信息
    getStaffsIndexSetting() {
        return `${RootApi.getRootUrl()}/staff/staffs/index-setting`;
    }

    // 获得社保编辑状态
    getSocialState(yg_id) {
        return `${RootApi.getRootUrl()}/staff/hr-yg-hr-change/create-social/?yg_id=${yg_id}`;
    }

    // 导入员工
    getStaffsImport() {
        return `${RootApi.getRootUrl()}/staff/staffs/import`;
    }

    // 导入撤销  post
    getStaffsImportRevoke() {
        return `${RootApi.getRootUrl()}/staff/staffs/import-revoke`;
    }

    // 导入员工保存  post
    getStaffImportStore() {
        return `${RootApi.getRootUrl()}/staff/staffs/import-store`;
    }

    // 更新员工工号 post
    getStaffUpdateNo() {
        return `${RootApi.getRootUrl()}/staff/staffs/update-no`;
    }

    // 查看员工工作 get/delete
    getYgWork(id) {
        return `${RootApi.getRootUrl()}/staff/works/${id}`;
    }

    // 添加员工工作 post
    addYgWork() {
        return `${RootApi.getRootUrl()}/staff/works/store`;
    }

    // 更新员工工作 post
    updateYgWork(id) {
        return `${RootApi.getRootUrl()}/staff/works/${id}/update`;
    }

    // 查看员工家庭 get/delete
    getYgFamily(id) {
        return `${RootApi.getRootUrl()}/staff/families/${id}`;
    }

    // 添加员工家庭 post
    addYgFamily() {
        return `${RootApi.getRootUrl()}/staff/families/store`;
    }

    // 更新员工家庭 post
    updateYgFamily(id) {
        return `${RootApi.getRootUrl()}/staff/families/${id}/update`;
    }

    // 查看员工教育 get/delete
    getYgEducation(id) {
        return `${RootApi.getRootUrl()}/staff/educations/${id}`;
    }

    // 添加员工教育 post
    addYgEducation() {
        return `${  RootApi.getRootUrl()}/staff/educations/store`;
    }

    // 更新员工教育 post
    updateYgEducation(id) {
        return `${  RootApi.getRootUrl()}/staff/educations/${id}/update`;
    }

    // 查看合同列表 get
    getContractList(yg_id) {
        return `${  RootApi.getRootUrl()}/staff/hr-yg-contract/?yg_id=${yg_id}`;
    }

    // 添加新合同 post
    addContract() {
        return `${  RootApi.getRootUrl()}/staff/hr-yg-contract/store`;
    }

    // 更新员工详情页基本信息表单
    updateYgBase(yg_id) {
        return `${  RootApi.getRootUrl()}/staff/staffs/${yg_id}/update-base`;
    }

    // 更新员工详情页基本信息表单
    updateYgContact(yg_id) {
        return `${  RootApi.getRootUrl()}/staff/staffs/${yg_id}/update-contact`;
    }

    // 员工转正
    getYgQualified() {
        return `${  RootApi.getRootUrl()}/staff/hr-yg-hr-change/store-staff-become/`;
    }

    // 员工薪酬
    getYgPay() {
        return `${  RootApi.getRootUrl()}/staff/hr-yg-hr-change/store-salary/`;
    }

    // 员工福利
    getYgBenifit() {
        return `${  RootApi.getRootUrl()}/staff/hr-yg-hr-change/store-benifit`;
    }

    // 员工社保更新
    getYgSocial() {
        return `${  RootApi.getRootUrl()}/staff/hr-yg-hr-change/store-social/`;
    }

    // 员工账户更新
    updateYgAccount() {
        return `${  RootApi.getRootUrl()}/staff/staffs/update-social-account`;
    }

    // 员工医院更新
    updateYgHospital() {
        return `${  RootApi.getRootUrl()}/staff/hr-yg-hospital/update`;
    }

    getHospital() {
        return `${  RootApi.getRootUrl()}/staff/hr-yg-hospital/update-form`;
    }

    // 员工医院列表 post
    getYgHospital() {
        return `${  RootApi.getRootUrl()}/staff/hr-hospital/`;
    }

    // 员工银行列表
    getYgBank() {
        return `${  RootApi.getRootUrl()}/staff/tl-bank-code/`;
    }

    // 员工银行支行列表
    getYgOpenBank() {
        return `${  RootApi.getRootUrl()}/staff/open-bank-code`;
    }

    uploadYgPics() {
        return `${  RootApi.getRootUrl()}/staff/hr-yg-certificate-image/upload`;
    }

    deleteYgpic() {
        return `${  RootApi.getRootUrl()}/staff/hr-yg-certificate-image`;
    }

    uploadYgsExcel() {
        return `${  RootApi.getRootUrl()}/staff/staffs/import`;
    }

    saveYgsExcel() {
        return `${  RootApi.getRootUrl()}/staff/staffs/import-store`;
    }

    downErrorExcel(excel_url) {
        return `${  RootApi.getRootUrl()}/staff/staffs/${excel_url}`;
    }

    downloadExcel() {
        return `${  RootApi.getRootUrl()}/staff/staffs/export`;
    }

    gaveupExcel() {
        return `${  RootApi.getRootUrl()}/staff/staffs/import-revoke`;
    }

    // 员工银行更新
    // getYgSocial() {
    //   return `${  RootApi.getRootUrl()}/staff/tl-bank-code/`;
    // }

    // -->员工自助
    getStaffSelf() {
        return `${  RootApi.getRootUrl()}/staff/staffs/update-self-help`;
    }

    // <-----

}
