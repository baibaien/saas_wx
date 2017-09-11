import React from 'react'
import {Link} from 'react-router-dom'

export class IndexStaffs extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <h6 className="title">员工管理</h6>
                <div className="bg-white b-t b-b">
                    <ul className="p-l ">
                        <li className="p-r">
                            <Link to="/Staffs">
                    <span className="p-l-sm p-r-sm p-t p-b pull-left"><i
                        className="icon_"></i></span>
                                <div className="b-b p-t p-b m-l">
                                    员工名录
                                    <span className="pull-right">
                    <span className="label">2</span><i className="icon_angle_right"></i>
                    </span>
                                </div>
                            </Link>
                        </li>
                        <li className="p-r">
                            <Link to="">
                    <span className="p-l-sm p-r-sm p-t p-b pull-left"><i
                        className="icon_"></i></span>
                                <div className="b-b p-t p-b m-l">为员工生成社保补缴账单<span
                                    className="pull-right"><i className="icon_angle_right"></i></span>
                                </div>
                            </Link>
                        </li>
                        <li className="p-r">
                            <Link to="">
                    <span className="p-l-sm p-r-sm p-t p-b pull-left"><i
                        className="icon_"></i></span>
                                <div className="b-b p-t p-b m-l">为员工生成公积金补缴账单<span
                                    className="pull-right"><i className="icon_angle_right"></i></span>
                                </div>
                            </Link>
                        </li>
                        <li className="p-r">
                            <Link to="/Social/ServiceProcess">
                    <span className="p-l-sm p-r-sm p-t p-b pull-left"><i
                        className="icon_"></i></span>
                                <div className="b-b p-t p-b m-l">员工五险一金缴纳状态列表
                                    <span className="pull-right"><i className="icon_angle_right"></i></span>
                                </div>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}
