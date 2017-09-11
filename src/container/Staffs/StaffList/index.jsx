import React from 'react';
import {Link} from 'react-router-dom'
import {StaffUrls} from '../../../service/apiService/staff-directory/staffUrls'
import {getData, postData} from '../../../fetch/httpRequest'

export class StaffList extends React.Component {
    constructor(props, context) {
        super(props, context);
        const staff_urls = new StaffUrls();
        this.state = {
            orgs: [],
            staffs: [],
            title: [],
            staff_urls: staff_urls
        }
    }

    render() {
        return (
            // 员工列表
            <div>
                <div className="bg-white p-a b-b">
                    <a href="index.tsx">返回</a>
                    <span className="pull-right"><i className="icon_search"></i>搜索员工</span>
                </div>
                <h6 className="title p-l p-r">部门</h6>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        {
                            this.state.orgs.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div className="clearfix">
                                            <span >{item.name}</span>
                                            <div className="pull-right t-r">
                                                <span className="d-b grey t-sm">直属{item.staff_count}8位成员</span>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {
                    this.state.title.map((item, index) => {
                        return (
                            <div key={index}>
                                <h6 className="title p-l p-r">{item}</h6>
                                <div className="bg-white">
                                    <ul className="detail b-t b-b">
                                        {
                                            this.state.staffs[item].map((sub_item, sub_index) => {
                                                return (
                                                    <li key={sub_index}>
                                                        <Link to={`/Staffs/Detail/${sub_item.id}`}>
                                                            <div className="clearfix">
                                                            <span >{sub_item.yg_name}
                                                                <span
                                                                    className={`m-l-sm ${item.yg_is_wechat === 0 ? "green" : "hide"}`}>
                                                                <i className="icon_wechat"></i>
                                                            </span>
                                                            </span>
                                                                <div className="pull-right t-r">
                                                                    <span
                                                                        className="d-b grey t-sm">{sub_item.yg_org_name}</span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    componentDidMount() {
        getData(this.state.staff_urls.staffList())
            .then(res => {
                let title = [];
                console.log(title);
                title = Object.keys(res.staffs);
                this.setState({
                    orgs: res.orgs,
                    staffs: res.staffs,
                    title: title
                })
            })
    }
}