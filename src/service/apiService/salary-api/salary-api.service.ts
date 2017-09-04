import {Injectable} from '@angular/core';
import {RootApiService} from "../root-api/root-api";

@Injectable()
export class SalaryApiService {

    constructor(private rootApiService: RootApiService) {
    }

    // 计算工资 POST
    getCalcSalary() {
        return `${this.rootApiService.getRootUrl()}/salary/salary/compute`;
    }

    // 员工工资列表 post
    getStaffSalary() {
        return `${this.rootApiService.getRootUrl()}/salary/salary/index`;
    }

    // --> 员工工资详情
    getStaffDetail() {
        return `${this.rootApiService.getRootUrl()}/salary/salary/show`;
    }

    // <-----

    // -->工资备注 POST
    getSalaryEditRemark() {
        return `${this.rootApiService.getRootUrl()}/salary/salary/remark`;
    }
    // / <-----

    // -->出勤调整表
    getAttendanceChange() {
        return `${this.rootApiService.getRootUrl()}/salary/attendance-adjust`;
    }
    // <-----
    // -->变动项详情
    getAttendanceChangeItem() {
        return `${this.rootApiService.getRootUrl()}/salary/bonus/show`;
    }
    // <-----
    // -->添加变动
    getAttendanceAdding() {
        return `${this.rootApiService.getRootUrl()}/salary/bonus/addBonusType`;
    }
    getAttendanceEdit() {
        return `${this.rootApiService.getRootUrl()}/salary/bonus/updateBonusType`;
    }
    getAttendanceDelete() {
        return `${this.rootApiService.getRootUrl()}/salary/bonus/delBonusType`;
    }
    // <-----
    // -->表格下载
    getExcelUrl(type, inc_id) {
        return `${this.rootApiService.getRootUrl()}/salary/salary/${type}Down/${inc_id}`;
    }
    // <-----
    getCalendar(month) {
        return `${this.rootApiService.getRootUrl()}/calendar?date=${month}`;
    }
    getSalaryArchive() {
        return `${this.rootApiService.getRootUrl()}/salary/salary/archive`;
    }
    getEditBonus() {
        return `${this.rootApiService.getRootUrl()}/salary/bonus/editBonus`;
    }
}
