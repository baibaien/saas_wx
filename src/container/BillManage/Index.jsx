import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import {PaidBill} from './PaidBill/index'
import {UnpaidBill} from './UnpaidBill/index'
import {OrderDetail} from './OrderDetail/index'
import {BillDetail} from './BillDetail/index'
import {UnBillOrder} from './UnBillOrder/index'

export class BillIndex extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            // 订单
            <BrowserRouter>
                <div className="full-h">
                    <Route path='/Bill' exact component={PaidBill}/>
                    <Route path='/Bill/UnpaidBill'  exact component={UnpaidBill}/>
                    <Route path='/Bill/UnBillOrder' exact component={UnBillOrder}/>
                    <Route path='/Bill/Detail/:bill_id' exact component={BillDetail}/>
                    <Route path='/Bill/OrderDetail/:id' exact component={OrderDetail}/>
                </div>
            </BrowserRouter>
        )
    }
}