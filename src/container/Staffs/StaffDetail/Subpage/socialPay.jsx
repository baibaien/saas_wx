import React from 'react';
import {Link} from 'react-router-dom'

export class StaffDetailSocial extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            salary_pay: {}
        }
    }
    render() {
        return (
            <div>
                <div className="bg-white p-a b-b m-b-sm">
                    <a href="index.tsx">返回</a>
                </div>
                <div className="bg-white">
                    <ul className="detail">
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            salary_pay: this.props.location.state
        })
    }
}