import React from 'react';
import {Link} from 'react-router-dom'
import {StaffUrls} from '../../../../service/apiService/staff-directory/staffUrls'
import {getData} from '../../../../fetch/httpRequest'

export class StaffDetailIndex extends React.Component {
    constructor(props, context) {
        super(props, context);
        const staff_url = new StaffUrls();
        this.state = {
            common: {},
            base: {},
            contact: {},
            social_pay: {},
            contract: [],
            family: [],
            work: {},
            holiday: {},
            photos: [],
            staff_url: staff_url
        }
    }

    render() {
        return (
            <div className="m-b-sm">
                <div className="bg-white p-a b-b m-b-sm">
                    <a href="index.tsx">返回</a>
                    <span className="pull-right">补全信息<i className="icon_angle_right"></i></span>
                </div>
                <div className="bg-white p-t-lg p-b-lg b-t b-b">
                    <p className="p-l">{this.state.base.yg_name} <span className="grey">（司龄12个月）</span></p>
                    <ul className="detail">
                        <li>
                            <div className="grey t-sm">
                                {this.state.common.yg_hire_date}入职，{this.state.common.yg_formal_date}转正
                            </div>
                        </li>
                        <li>
                            <div className="clearfix ">
                                <p className="grey t-sm">职位：{this.state.common.yg_zhiwei_name || '暂无'}</p>
                                <p className="grey t-sm">部门：{this.state.common.yg_org_name || '暂无'}</p>
                                <p className={`grey t-sm ${this.state.common.leader_name === '' ? "hide" : ""}`}>
                                    向<span>{this.state.common.leader_name}</span>汇报</p>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix ">
                                <p className="grey t-sm">工作地点： <span>{this.state.common.yg_office_name || '暂无'}</span>
                                </p>
                                <p className="grey t-sm">合同公司： <span>{this.state.common.yg_con_com_name || '暂无'}</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <h6 className="title p-l p-r">联络信息</h6>
                <div className="bg-white b-t b-b">
                    <ul className="detail">
                        <li>
                            <span>联系电话</span>
                            <div className="pull-right grey">{this.state.contact.yg_phone || '暂无'}</div>
                        </li>
                        <li>
                            <span>备用电话</span>
                            <div className="pull-right grey">{this.state.contact.yg_bak_phone || '暂无'}</div>
                        </li>
                        <li>
                            <span>工作邮箱</span>
                            <div className="pull-right grey">{this.state.contact.email || '暂无'}</div>
                        </li>
                        <li className="clearfix">
                            <span>住址</span>
                            <div className="pull-right w-120">
                                <p className="grey t-r" style={{whiteSpace: 'normal'}}>{this.state.contact.yg_addr}</p>
                                {/*<p className="grey t-r">宜山路29号121室</p>*/}
                                {/*<p className="grey t-r">300222</p>*/}
                            </div>
                        </li>
                        <li className="clearfix">
                            <span>紧急联络</span>
                            <div className="pull-right">
                                <p className="grey t-r">{this.state.contact.yg_em_name || '暂无'}</p>
                                <p className="grey t-r">{this.state.contact.yg_em_rel}</p>
                                <p className="grey t-r">{this.state.contract.yg_em_phone}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <h6 className="title p-l p-r">更多信息</h6>
                <div className="bg-white  b-t  b-b">
                    <ul className="detail">
                        <li>
                            <Link to={
                                {
                                    pathname: `/Staffs/Detail/${this.props.match.params.yg_id}/Basic`,
                                    state: this.state.base
                                }
                            }>
                                <span>基本信息</span>
                                <div className="pull-right grey"><i className="icon_angle_right"></i></div>
                            </Link>
                        </li>
                        <li>
                            <Link to={
                                {
                                    pathname: `/Staffs/Detail/${this.props.match.params.yg_id}/Social`,
                                    state: this.state.social_pay
                                }
                            }>
                                <span>薪酬与五险一金</span>
                                <div className="pull-right grey"><i className="icon_angle_right"></i></div>
                            </Link>
                        </li>
                        <li>
                            <Link to={
                                {
                                    pathname: `/Staffs/Detail/${this.props.match.params.yg_id}/Holiday`,
                                    state: this.state.holiday
                                }
                            }>
                                <span>出勤和假期</span>
                                <div className="pull-right grey"><i className="icon_angle_right"></i></div>
                            </Link>
                        </li>
                        <li>
                            <Link to={
                                {
                                    pathname: `/Staffs/Detail/${this.props.match.params.yg_id}/Contract`,
                                    state: this.state.contract
                                }
                            }>
                                <span>劳动信息合同</span>
                                <div className="pull-right grey"><i className="icon_angle_right"></i></div>
                            </Link>
                        </li>
                        <li>
                            <Link to={
                                {
                                    pathname: `/Staffs/Detail/${this.props.match.params.yg_id}/Family`,
                                    state: this.state.family
                                }
                            }>
                                <span>家庭成员</span>
                                <div className="pull-right grey"><i className="icon_angle_right"></i></div>
                            </Link>
                        </li>
                        <li>
                            <Link to={
                                {
                                    pathname: `/Staffs/Detail/${this.props.match.params.yg_id}/Work`,
                                    state: this.state.work
                                }
                            }>
                                <span>履历</span>
                                <div className="pull-right grey"><i className="icon_angle_right"></i></div>
                            </Link>
                        </li>
                        <li>
                            <Link to={
                                {
                                    pathname: `/Staffs/Detail/${this.props.match.params.yg_id}/Photos`,
                                    state: this.state.photos
                                }}>
                                <span>证件/扫描照片</span>
                                <div className="pull-right grey"><i className="icon_angle_right"></i></div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )

    }

    componentDidMount() {
        const yg_id = this.props.match.params.yg_id;
        getData(this.state.staff_url.staffDetail(yg_id))
            .then(res => {
                this.setState({
                    common: res.data.common,
                    base: res.data.base,
                    social_pay: res.data.salary_social,
                    contract: res.data.contract,
                    family: res.data.family,
                    work: {works: res.data.works, edus: res.data.edus},
                    holiday: res.data.holidays,
                    photos: res.data.certificate_images,
                    contact: res.data.contact
                });
            })
    }
}