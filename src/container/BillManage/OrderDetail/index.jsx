import React from 'react'
import {Link} from 'react-router-dom'
import {getData} from '../../../fetch/httpRequest'
import {BillManageUrls} from '../../../service/apiService/bill-manage-api/billManageUrl'
import {dateTransform} from '../../../utils/dateTransform'

export class OrderDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
        const bill_urls = new BillManageUrls();
        console.log(bill_urls)
        this.state = {
            id: this.props.match.params.id,
            bill_urls: bill_urls,
            bill_detail: {
                all_money: 0,
                bill: {
                },
                bill_list: [],
                title: ''
            }
        }
    }

    render() {
        return (
            <div>
                <div className="bg-white p-a b-b m-b-sm">
                    <Link to="">返回</Link>
                </div>
                <div className="bg-white p-a b-t b-b m-b-sm">
                    <p>
                        <span>{this.state.bill_detail.title}</span>
                        <span className="grey">({this.state.bill_detail.bill_list.length}人)</span>
                        <span className="pull-right t-sm grey">{dateTransform(this.state.bill_detail.bill.create_time)}</span>
                    </p>
                    <h6 className="t-lg bold t-c m-t">{this.state.bill_detail.all_money}</h6>
                    <p className="grey t-sm t-c">账单金额</p>
                    <p className="m-t-xl grey t-c m-t t-sm">发放月份：</p>
                </div>
                <h6 className="title">额外费用</h6>
                <div className="bg-white b-t b-b">
                    <ul className="detail">
                        <li></li>
                    </ul>
                </div>
                <h6 className="title">员工明细</h6>
                <div className="bg-white b-t b-b">
                    <ul className="detail">
                        {
                            this.state.bill_detail.bill_list.map((item, index) => {
                                return (
                                    <li key={item.index}>{item.yg_name} <span className="grey pull-right">{item.money}</span></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount() {
        getData(this.state.bill_urls.getOrderDetail(this.state.id))
            .then(res => this.setState({
                bill_detail: res
            }));
    }
}