import React from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom'
import {getData, postData, deleteData} from "../../../fetch/httpRequest"
import {dateTransform} from '../../../utils/dateTransform'
import {selectedList} from '../../../utils/selectOptions'
import {BillManageUrls} from '../../../service/apiService/bill-manage-api/billManageUrl'

export class UnBillOrder extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            bills: {
                bill_list: [],
                b_money: 0
            },
            all_money: 0,
            money: 0,
            is_invoice: false,
            use: true,
            checkbox_list: [],
            submit_data: {},
            disable_class: 'disabled'
        }
    }

    render() {
        const foot_obj = {
            bottom: '0',
            left: '0',
            right: '0',
            height: '2.7rem'
        };
        return (
            // 账单列表
            <div className="pos-r full-h" style={{paddingBottom: '2.7rem'}}>
                <div className="bg-white p-a b-b m-b-sm">
                    <a href="index.tsx">返回</a>
                    <span className="pull-right">
                        <Link to="">
                            <label className="ui-check">发票信息 <input type="radio"/></label>
                            <i className="icon_angle_right"></i>
                        </Link>
                    </span>
                </div>
                <div className="bg-white">
                    <ul className="b-t b-b">
                        {
                            this.state.bills['bill_list'].map((item) => {
                                return (
                                    <li key={item.id} className="p-l pos-r p-t-sm">
                                        <label className="ui-check pos-a" style={{top: '.1rem'}}>
                                            <input type="checkbox" value={item.pid}
                                                   onChange={this.getBills.bind(this, item.id)}/>
                                            <i className="icon_ui"></i>
                                        </label>
                                        <label onClick={this.deleteOrder.bind(this, item.id)}>删除</label>
                                        <div className="clearfix b-b m-l">
                                            <Link to={`/Bill/OrderDetail/${item.id}`}>
                                                <div className="pull-right p-t">
                                                    <i className="icon_angle_right"></i>
                                                </div>
                                                <div className="m-r">
                                                    <div >
                                                        <span className="w-120 ellipsis">{item.type_name}</span>
                                                        <span className="pull-right">{item.money}</span>
                                                    </div>
                                                    <div className="m-b-sm">
                                                        <div className="d-ib">
                                                            <span className="d-b t-sm grey">{item.num}人</span>
                                                            <span
                                                                className="d-b t-sm grey">生成于{dateTransform(item.create_time)}</span>
                                                        </div>
                                                        <div className="pull-right">
                                                            {
                                                                item.child.map((sub_item, index) => {
                                                                    return (
                                                                        <span className="d-b t-sm grey"
                                                                              key={index}>+{sub_item.type_name} {sub_item.money}</span>
                                                                    )
                                                                })
                                                            }

                                                            {/*<span className="d-b t-sm grey">+服务费 1200.00</span>*/}
                                                        </div>

                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="footer pos-a bg-white full-w" style={foot_obj}>
                    <div className="p-a b-b">
                        <label className="ui-check">
                            <input type="checkbox" value={this.state.use} checked={this.state.use}
                                   onChange={this.isUse.bind(this)}/>
                            <i className="icon_ui"></i>
                            <span>用账户余额抵扣：{this.state.bills.b_money.toFixed(2)}</span>
                        </label>
                    </div>
                    <div className="p-a">
                        <p className="t-c grey m-b">订单金额：{this.state.all_money}</p>
                        <h6 className="t-lg bold t-c">{this.state.money}</h6>
                        <p className="grey t-c">应付金额</p>
                        <button className={`m-t-lg btn full-w ${this.state.disable_class}`} onClick={this.createBill.bind(this)}>下单支付</button>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let billManageUrls = new BillManageUrls();
        getData(billManageUrls.orderIndex())
            .then((res) => {
                this.setState({
                    bills: res
                });
            })
    }
    //选择账单生成金额
    getBills(id, event) {
        const list = selectedList(this.state.checkbox_list, id);
        const arr = this.state.bills.bill_list;
        const m = this.state.use === true ? 1 : 0;
        const disable_class = list.length >0 ? '' : 'disabled';
        let all_money = 0;
        let money = 0;
        for (let i = 0; i < arr.length; i++) {
            let n = list.indexOf(arr[i].id) >= 0 ? 1 : 0;
            all_money += n * arr[i].money
        }
        money = all_money.toFixed(2) - m * this.state.bills.b_money.toFixed(2);
        this.setState({
            checkbox_list: list,
            all_money: all_money.toFixed(2),
            money: money.toFixed(2),
            disable_class: disable_class
        });
    }

    isUse(event) {
        let value = !this.state.use;
        let m = value === true ? 1: 0;
        let money = 0;
        if (Number(this.state.all_money) !== 0) {
            money = Number(this.state.all_money).toFixed(2) - m * Number(this.state.bills.b_money).toFixed(2);
        }
        this.setState({
            use: value,
            money: money.toFixed(2)
        })
    }
   // 生成订单
    createBill() {
        const bill_urls = new BillManageUrls();
        let bill_id = this.state.checkbox_list.join(',');
        let submit_data = {};
        submit_data.bill_id = bill_id;
        submit_data.use = this.state.use === true ? 1 : 0;
        submit_data.is_invoice = this.state.is_invoice === true ? 1 : 0;
        postData(bill_urls.createOrder(), submit_data).then(res => console.log(res));
    }
    // 删除账单
    deleteOrder(id) {
        const bill_urls = new BillManageUrls();
        deleteData(bill_urls.deleteOrder(id),{}).then(res => console.log(res));
    }
}