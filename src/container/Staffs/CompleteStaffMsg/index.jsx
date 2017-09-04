import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {CompleteMsgIndex} from './Subpage/index'
import {StepFirst} from './Steps/Step1'
import {StepSecond} from './Steps/Step2'


export class CompleteStaffMsg extends React.Component {
    render() {
        return (
            // 补全员工信息

            <BrowserRouter>
                <div>
                    <Route path="/CompleteStaffMsg" exact component={CompleteMsgIndex}/>
                    <Route path="/CompleteStaffMsg/step1" exact component={StepFirst}/>
                    <Route path="/CompleteStaffMsg2" exact component={StepSecond}/>
                </div>
            </BrowserRouter>

        )
    }
}