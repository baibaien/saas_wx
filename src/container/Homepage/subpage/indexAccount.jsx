import React from 'react'
import {Link} from 'react-router-dom'

export class IndexAccount extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <h6 className="title">账户管理</h6>
                <div className="bg-white b-t b-b">
                    <ul className="p-l ">
                        <li className="p-r">
                            <Link to="/Bill">
                    <span className="p-l-sm p-r-sm p-t p-b pull-left"><i
                        className="icon_"></i></span>
                                <div className="b-b p-t p-b m-l">订单管理<span
                                    className="pull-right"><i className="icon_angle_right"></i></span></div>
                            </Link>
                        </li>
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="b-b p-t p-b m-l"> 帮助与支持<span
                                className="pull-right"><i className="icon_angle_right"></i></span></div>
                        </li>
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="p-t p-b m-l"> 账户设置<span
                                className="pull-right"><span className="label">2</span><i
                                className="icon_angle_right"></i></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
