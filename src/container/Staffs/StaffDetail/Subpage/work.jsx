import React from 'react';
import {Link} from 'react-router-dom'

export class StaffDetailWork extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            work: [],
            edu: []
        }
    }

    render() {
        return (
            <div>
                <div className="bg-white p-a b-b m-b-sm">
                    <a href="index.tsx">返回</a>
                </div>
                <h6 className="title">工作经历</h6>
                {
                    this.state.work.map((item, index) => {
                        return (
                            <div className="bg-white" key={index}>ng
                                <ul className="detail">
                                    <li>
                                        <span className="grey">公司名称</span>
                                        <span className="pull-right">{item.company_name}</span>
                                    </li>
                                    <li>
                                        <span className="grey">起讫时间</span>
                                        <span className="pull-right">{item.in_at}~{item.out_at}</span>
                                    </li>
                                    <li>
                                        <span className="grey">职务</span>
                                        <span className="pull-right">{item.title}</span>
                                    </li>
                                    <li className="clearfix">
                                        <span className="grey">证明人</span>
                                        <div className="pull-right">
                                            <span className="d-b t-r">{item.prove_name}</span>
                                            <span className="d-b t-r">{item.prove_phone}</span>
                                            <span className="d-b t-r">{item.prove_email}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
                <h6 className="title">教育经历</h6>
                {
                    this.state.edu.map((item, index) => {
                        return (
                            <div className="bg-white" key={index}>
                                <ul className="detail">
                                    <li>
                                        <span className="grey">学校名称</span>
                                        <span className="pull-right">{item.company_name}</span>
                                    </li>
                                    <li>
                                        <span className="grey">起讫时间</span>
                                        <span className="pull-right">{item.title}</span>
                                    </li>
                                    <li>
                                        <span className="grey">专业</span>
                                        <span className="pull-right">{item.in_at}</span>
                                    </li>
                                    <li>
                                        <span className="grey">学历 </span>
                                        <span className="pull-right">{item.out_at}</span>
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
            work: this.props.location.state.works,
            edu: this.props.location.state.edus
        })
    }
}