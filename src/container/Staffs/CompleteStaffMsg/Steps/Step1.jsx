import React from 'react'
import {Link} from 'react-router-dom'
export class StepFirst extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <div className="bg-white b-b p-a">
                    <Link to="a">返回</Link>
                    <Link className="pull-right btn btn-sm" to="a">下一步</Link>
                </div>
                <h6 className="title p-l p-r">社保缴纳情况</h6>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        <li>
                            <div className="clearfix">
                                <span>在上海缴纳过社保</span>
                                <div className="pull-right t-r">
                                    <label className="ui_check">
                                        <input type="checkbox" name=""/>
                                        <i className="icon_ui"></i>
                                    </label>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                <h6 className="title p-l p-r">公积金缴纳情况</h6>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        <li>
                            <div className="clearfix">
                                <span>在上海缴纳过公积金</span>
                                <div className="pull-right t-r">
                                    <label className="ui_check">
                                        <input type="checkbox" name=""/>
                                        <i className="icon_ui"></i>
                                    </label>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}