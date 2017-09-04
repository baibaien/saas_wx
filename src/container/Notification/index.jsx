import React from 'react'
import {Link} from 'react-router-dom'
export class Notification extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <div className="bg-white b-b p-a">
                    <Link to="">返回</Link>
                    <span className="pull-right"><i className="icon_done_batch"></i>全部标记为已读
                    </span>
                </div>
                <div className="m-t-sm bg-white b-t b-b">
                    <ul>
                        <li>aaa</li>
                    </ul>
                </div>
            </div>
        )
    }
}