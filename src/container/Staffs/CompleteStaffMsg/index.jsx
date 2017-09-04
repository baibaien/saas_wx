import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {CompleteMsgIndex} from './Subpage/index'
import {StepFirst} from './Steps/Step1'
import {StepSecond} from './Steps/Step2'


export class CompleteStaffMsg extends React.Component {
    render() {
        return (
            // 补全员工信息
            <div>
                <Route path="/completestaffmsg/" exact component={CompleteMsgIndex}/>
                <Route path="/completestaffmsg/step1" exact component={StepFirst}/>
                <Route path="/completeStaffmsg/step2" component={StepSecond}/>
            </div>
        )
    }
}