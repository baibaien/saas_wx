import React from 'react';
import {Link} from 'react-router-dom'
import {StaffUrls} from '../../../service/apiService/staff-directory/staffUrls'
import {getData} from '../../../fetch/httpRequest'
import {dateTransform} from '../../../utils/dateTransform'


export class StaffEventList extends React.Component {
    constructor(props, context) {
        super(props, context);
        const staff_urls = new StaffUrls();
        this.state = {
            staff_urls: staff_urls,
            staffs: []
        }

    }

    render() {
        return (
            // 员工事件提醒列表
            <div>
                <div className="bg-white p-a b-b m-b-sm">
                    <a href="index.tsx">返回</a>
                </div>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        {
                            this.state.staffs.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/Staffs/Detail/${item.yg_id}`}>
                                            <div className="clearfix">
                                                <span >{item.yg_name}</span>
                                                <div className="pull-right t-r">
                                                    <span
                                                        className="grey t-sm m-r-sm">
                                                        {
                                                            this.props.match.params.event_type === '1'
                                                                ? dateTransform(item.yg_birth)
                                                                : (this.props.match.params.event_type === '2'
                                                                    ? dateTransform(item.yg_hire_date)
                                                                    : dateTransform(item.yg_formal_date)
                                                            )
                                                        }
                                                    </span>
                                                    <i className="icon_angle_right v-m"></i>
                                                </div>
                                            </div>
                                        </Link>
                                    </li >
                                )
                            })
                        }
                    </ul>
                </div>
            </div >
        )
    }

    componentDidMount() {
        console.log(this.props.match.params.event_type);
        let event_type = this.props.match.params.event_type;
        switch (event_type) {
            // 生日提醒
            case '1':
                getData(this.state.staff_urls.birthRemind()).then(res => {
                    console.log(res);
                    this.setState({
                        staffs: res.data
                    })
                });
                break;
            // 周年提醒
            case '2':
                getData(this.state.staff_urls.annualRemind()).then(res => console.log(res));
                break;
            // 入职提醒
            case '3':
                getData(this.state.staff_urls.formalRemind()).then(res => console.log(res));
                break;
            default:
                break
        }
    }
}