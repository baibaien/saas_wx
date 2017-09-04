import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {getData, postData} from "../../fetch/httpRequest"
import {BillManageUrls} from '../../service/apiService/bill-manage-api/billManageUrl'

import {PaidBill} from './PaidBill/index'
import {UnpaidBill} from './UnpaidBill/index'

export class BillIndex extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            bills: []
        }
    }

    render() {

        return (
            // 订单
            <BrowserRouter>
                <Route path='/Bill' component={PaidBill}/>
                <Route path='/Bill/Unpaid' component={UnpaidBill}/>
                {/*<Route path=''/>*/}
            </BrowserRouter>

        )
    }

    componentDidMount() {
        let billManageUrls = new BillManageUrls();
        getData(billManageUrls.orderPaid())
            .then((res) => {
                this.setState = {
                    bills: res.data.list
                }
            })
    }
}