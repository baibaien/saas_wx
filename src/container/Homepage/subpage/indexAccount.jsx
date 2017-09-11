import React from 'react'
import {Link} from 'react-router-dom'

export class IndexAccount extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const setting_obj = {
            bottom: 0
        }
        const setting_wrapper_obj = {}
        return (
            <div>
                <h6 className="title">账户管理</h6>
                <div className="bg-white b-t b-b">
                    <ul className="p-l ">
                        <li className="p-r">
                            <Link to="/Bill">
                                <span className="p-l-sm p-r-sm p-t p-b pull-left">
                                    <i className="icon_"></i>
                                </span>
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
                <div className="pos-a full-w" style={setting_obj}>
                    <div className="wrapper" style={setting_wrapper_obj}>
                        <p className="p-t-sm p-b-sm grey t-sm t-c bg-white">请选择需要管理和设置的项目</p>
                        <ul>
                            <li className="t-c bg-white b-t p-t p-b"><Link to="" >签约信息</Link></li>
                            <li className="t-c bg-white b-t p-t p-b"><Link to="" >发票信息</Link></li>
                            <li className="t-c bg-white b-t p-t p-b"><Link to="" >联系人信息</Link></li>
                            <li className="t-c bg-white b-t p-t p-b"><Link to="" >邮寄地址</Link></li>
                            <li className="t-c m-b-sm bg-white b-t error p-t p-b"><Link to="" >解除账号绑定</Link></li>
                            <li className="t-c bg-white p-t p-b"><Link to="" >签约信息</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
