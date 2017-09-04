import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
export class CompleteMsgIndex extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <div>
                <div className="bg-white p-a b-b m-b-sm">
                    <a href="index.tsx">返回</a>
                    <span className="pull-right"><i className="icon_search"></i>搜索员工</span>
                </div>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        <li>
                            <span>包春生</span>
                            <div className="grey t-sm pull-right">
                                社保、公积金、银行
                            </div>
                        </li>
                        <li>
                            <span>包春生</span>
                            <div className="grey t-sm pull-right">
                                社保、公积金、银行
                            </div>
                        </li>
                        <li>
                            <span>包春生</span>
                            <div className="grey t-sm pull-right">
                                社保、公积金、银行
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}