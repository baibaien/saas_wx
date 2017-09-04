import  React from 'react';
import  ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'

import {StaffIndex} from './container/Staffs';
import {Social} from './container/Social';
import {SocailDetail} from "./container/Social/SocialDetail/index"
import {GzDetail} from "./container/Gz/GzDetail/index"
import {SocialCalc} from "./container/SalaryCalc/index"
import {SendAddr} from "./container/SendAddr/index"
import {IndexRemind} from './container/Homepage/subpage/indexRemind'
import {ServiceProcess} from "./container/social/ServiceProcess/index"
import {StaffList} from "./container/Staffs/StaffList/index"
import {HomePage} from './container/Homepage/index';
import {BillIndex} from './container/BillManage/index'
import {BillDetail} from './container/BillManage/BillDetail/index'
import {Notification} from './container/Notification/index'
import {CompleteStaffMsg} from './container/Staffs/CompleteStaffMsg/index'
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" exact component={HomePage}/>
            <Route path="/StaffList" exact component={StaffList}/>
            <Route path="/Social/ServiceProcess" exact component={ServiceProcess}/>
            <Route path='/Bill' exact component={BillIndex}/>
            <Route path='/Bill/Detail/:bill_id' exact component={BillDetail}/>
            <Route path='/Index/Index' exact component={IndexRemind}/>
            <Route path='/Notice' exact component={Notification}/>
            <Route path='/CompleteStaffMsg' exact component={CompleteStaffMsg}/>
            {/*<Index/>*/}
        </div>
    </BrowserRouter>,
    document.getElementById('root')
)
;
