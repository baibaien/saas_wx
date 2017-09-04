import React from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom'
import {getData, postData} from "../../../fetch/httpRequest"
import {dateTransform} from '../../../utils/dateTransform'
import {BillManageUrls} from '../../../service/apiService/bill-manage-api/billManageUrl'

export class PaidBill extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            bills: []
        }
    }

    render() {
        const footer_obj = {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            boxShadow: '-1px 0 3px #eaeaea'
        }
        return (
            // 订单
            <div>
                <div className="bg-white b-b p-a">
                    <Link to="">返回</Link>
                    <span className="pull-right"><i className="icon_search"></i>待开票订单
                        <span className="label m-r-sm">2</span>
                        <i className="icon_angle_right"></i>
                    </span>
                </div>

                <h6 className="title p-l p-r">历史核单列表 <span className="pull-right">过去6个月订单</span></h6>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        {
                            this.state.bills.map((item, index) => {
                                return (
                                    <li key={item.order_id}>
                                        <div className="clearfix">
                                            <Link to={`/Bill/Detail/${item.uid}`}>
                                                <div className="pull-right p-t">
                                                    <i className="icon_angle_right"></i>
                                                </div>
                                                <div className="m-r">
                                                    <div className="m-b-sm"><span
                                                        className="t-sm grey">订单编号{item.order_id}</span><span
                                                        className="pull-right t-sm grey">下单于{dateTransform(item.addtime)}2017/06/21</span>
                                                    </div>
                                                    <div >
                                                        <span className="w-120 ellipsis">5月工资账单，5月五险一金</span>
                                                        <span className="pull-right">{item.all_money}5000.00</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        <li>
                            <div className="clearfix">
                                <Link to="/Bill/Detail">
                                    <div className="pull-right p-t">
                                        <i className="icon_angle_right"></i>
                                    </div>
                                    <div className="m-r">
                                        <div className="m-b-sm"><span className="t-sm grey">订单编号</span><span
                                            className="pull-right t-sm grey">下单于2017/06/21</span></div>
                                        <div >
                                            <span className="w-120 ellipsis">5月工资账单，5月五险一金</span>
                                            <span className="pull-right">5000.00</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-white p-a" style={footer_obj}>
                    <Link to='Bill/unpaidBill'>
                        <span>待支付订单</span>
                        <span className="pull-right"><span className="label error">2</span><i
                            className="icon_angle_right"></i></span>
                    </Link>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let billManageUrls = new BillManageUrls();
        getData(billManageUrls.orderPaid())

    }
}