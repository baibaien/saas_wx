import React from 'react'
import {Link} from 'react-router-dom'

export class IndexRemind extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <h6 className="title">特殊日期提醒</h6>
                <div className="bg-white b-t b-b">
                    <ul className="p-l ">
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="b-b p-t p-b m-l"> 近期员工生日<span
                                className="pull-right"><span
                                className="label">{this.props.data.lately_birth_staff_total}</span><i
                                className="icon_angle_right"></i></span>
                            </div>
                        </li>
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="b-b p-t p-b m-l"> 近期员工入职周年<span
                                className="pull-right"><span
                                className="label">{this.props.data.lately_entry_a_year_staff_total}</span><i
                                className="icon_angle_right"></i></span>
                            </div>
                        </li>
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="b-b p-t p-b m-l"> 预定本月转正员工<span
                                className="pull-right"><span
                                className="label">{this.props.data.formal_staff_total}</span><i
                                className="icon_angle_right"></i></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
