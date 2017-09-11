import  React from 'react';
import  ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import './assets/styles/main.css';

import {Social} from './container/Social';
import {SocailDetail} from "./container/Social/SocialDetail/index"
import {GzDetail} from "./container/Gz/GzDetail/index"
import {SocialCalc} from "./container/SalaryCalc/index"
import {SendAddr} from "./container/SendAddr/index"
import {IndexRemind} from './container/Homepage/subpage/indexRemind'
import {ServiceProcess} from "./container/social/ServiceProcess/index"
import {StaffIndex} from "./container/Staffs/index"
import {HomePage} from './container/Homepage/index';
import {BillIndex} from './container/BillManage/index'
import {Notification} from './container/Notification/index'
import {NotDetail} from './container/Notification/NotDetail/index'
import {CompleteStaffMsg} from './container/Staffs/CompleteStaffMsg/index'
ReactDOM.render(
    <BrowserRouter>
        <div className="full-h">
            <Route path="/" exact component={HomePage}/>
            <Route path="/Staffs"  component={StaffIndex}/>
            <Route path="/Social/ServiceProcess" exact component={ServiceProcess}/>
            <Route path='/Bill' component={BillIndex}/>
            {/*<Route path='/Index/Index' exact component={IndexRemind}/>*/}
            <Route path='/Notice' exact component={Notification}/>

            {/*<Route path='/Notice/detail' exact component={NotDetail}/>*/}
            <Route path='/CompleteStaffMsg' exact component={CompleteStaffMsg}/>
            {/*<Index/>*/}
        </div>
    </BrowserRouter>,
    document.getElementById('root')
)
;
