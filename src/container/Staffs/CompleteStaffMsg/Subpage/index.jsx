import React from 'react';
import {Link} from 'react-router-dom'

export class CompleteMsgIndex extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            next_step: '/completestaffmsg/step1/2'
        }
    }

    render() {
        return (
            <div>
                <div className="bg-white p-a b-b m-b-sm">
                    <Link to="">返回</Link>
                    <span className="pull-right"><i className="icon_search"></i>搜索员工</span>
                </div>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        <li>
                            <Link to={{
                                pathname: "/CompleteStaffMsg/step1/",
                                hash: '#ahash',
                                query: {yg_id: 2},
                                state: {data: 'miao'}
                            }}>
                                <span>包春生</span>
                                <div className="grey t-sm pull-right">
                                    社保、公积金、银行
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/CompleteStaffMsg2">
                                <span>包春生</span>
                                <div className="grey t-sm pull-right">
                                    社保、公积金、银行
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/CompleteStaffMsg">
                                <span>包春生</span>
                                <div className="grey t-sm pull-right">
                                    社保、公积金、银行
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}