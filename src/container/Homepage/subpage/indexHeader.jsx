import React from 'react'
import {Link} from 'react-router-dom'

export class IndexHeader extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const headerStyle = {
            padding: '.15rem 0',
            borderBottom: '1px solid #eaeaea'
        };
        return (
            <div>
                <div className="bg-white">
                    <div className="header t-c " style={headerStyle}>上海点位商贸有限公司</div>
                    <div className="t-c p-t-xl p-b-xl b-b">
                        <h1 className="t-24 bold t-c">0.00</h1>
                        <p className="grey t-c">6月总支出</p>
                    </div>
                    <div className="p-a">
                        查看统计
                        <span className="grey pull-right">上月支出 60333.21</span>
                    </div>
                </div>
            </div>
        )
    }
}
