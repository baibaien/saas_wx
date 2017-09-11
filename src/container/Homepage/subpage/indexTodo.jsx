import React from 'react'
import {Link} from 'react-router-dom'

export class IndexTodo extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <h6 className="title">待办事项</h6>
                <div className="bg-white b-t b-b">
                    <ul className="p-l thumb-list">
                        <li className="p-r clearfix">
                            <Link to="/Bill/UnBillOrder">
                                <span className="p-l-sm p-r-sm p-t p-b pull-left"><i
                                    className="icon_manifesto"></i></span>
                                <div className="b-b p-t p-b m-l">有未下单支付的账单<span
                                    className="pull-right">
                                <span className="label error">{this.props.unorder.total}</span>
                                <i
                                    className="icon_angle_right"></i></span>
                                </div>
                            </Link>
                        </li>
                        {
                            this.props.data.gen_bills.map((item, index) => {
                                return (
                                    <li className="p-r clearfix" key={index}>
                                        aaa
                                        <span className="p-l-sm p-r-sm p-t p-b pull-left"><i
                                            className="icon_manifesto"></i></span>
                                        <div className="b-b p-t p-b m-l">{item.name}<span
                                            className="pull-right"><i
                                            className="icon_angle_right"></i></span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        {
                            this.props.data.gen_salary.map((item, index) => {
                                return (
                                    <li className="p-r clearfix" key={index}>
                                        aaa
                                        <span className="p-l-sm p-r-sm p-t p-b pull-left"><i
                                            className="icon_manifesto"></i></span>
                                        <div className="b-b p-t p-b m-l">{item.name}<span
                                            className="pull-right"><i
                                            className="icon_angle_right"></i></span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        <li className="p-r clearfix">
                            <Link to="/CompleteStaffMsg">
                                <span className="p-l-sm p-r-sm p-t p-b pull-left"><i
                                    className="icon_staff_list"></i></span>
                                <div className="b-b p-t p-b m-l">补全员工信息<span
                                    className="pull-right"><span
                                    className="label">{this.props.data.incomplete_staff_total}</span><i
                                    className="icon_angle_right"></i></span>
                                </div>
                            </Link>
                        </li>
                        <li className="p-r">
                            <Link to="/Notice">
                                <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_notification"></i></span>
                                <div className="p-t p-b m-l"> 请阅读重要通知<span
                                    className="pull-right"><span
                                    className={`label {}`}>{this.props.data.notice_unread_total}</span><i
                                    className="icon_angle_right"></i></span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


















