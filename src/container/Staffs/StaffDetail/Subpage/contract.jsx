import React from 'react';
import {Link} from 'react-router-dom'

export class StaffDetailContract extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            contract: []
        }
    }

    render() {
        return (
            <div>
                <div className="bg-white p-a b-b m-b-sm">
                    <a href="index.tsx">返回</a>
                </div>
                {
                    this.state.contract.length <= 0
                    ? <p className="t-c t-md">暂无合同~</p>
                    : this.state.contract.map((item, index) => {
                        return (
                            <li key={index}>
                                <span className="grey">{item.code}</span>
                                <span className="pull-right">{item.in_at}~{item.out_at}</span>
                            </li>
                        )

                    })
                }
                <div className="bg-white">
                    <ul className="detail">

                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            contract: this.props.location.state
        })
    }
}