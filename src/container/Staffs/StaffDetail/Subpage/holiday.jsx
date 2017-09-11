import React from 'react';
import {Link} from 'react-router-dom'

export class StaffDetailHoliday extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            holiday: {}
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
            holiday: this.props.location.state
        })
    }
}