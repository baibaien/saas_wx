import React from 'react';
import {Link} from 'react-router-dom'

export class StaffDetailFamily extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            family: []
        }

    }
    render() {
        return (
            <div>
                <div className="bg-white p-a b-b m-b-sm">
                    <a href="index.tsx">返回</a>
                </div>
                {
                    this.state.family.map((item, index) => {
                        return (
                            <div className="bg-white" key={index}>
                                <ul className="detail">
                                    <li>
                                        <span className="grey">姓名</span>
                                        <span className="pull-right">{item.name}</span>
                                    </li>
                                    <li>
                                        <span className="grey">关系</span>
                                        <span className="pull-right">{item.rel_name}</span>
                                    </li>
                                    <li>
                                        <span className="grey">所属公司</span>
                                        <span className="pull-right">{item.company_name}</span>
                                    </li>
                                    <li>
                                        <span className="grey">职位</span>
                                        <span className="pull-right">{item.title}</span>
                                    </li>
                                    <li>
                                        <span className="grey">联系电话</span>
                                        <span className="pull-right">{item.phone}</span>
                                    </li>

                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            family: this.props.location.state
        })
    }
}