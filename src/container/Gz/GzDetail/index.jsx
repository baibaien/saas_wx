import React from 'react';

export class GzDetail extends React.Component {
    render() {
        return (
            <div>
                <div className="bg-white">
                    <div className="header t-c " >王狗子</div>
                    <div className="t-c p-t-xl p-b-xl b-b">
                        <h1 className="t-24 bold t-c">3940.00</h1>
                        <p className="grey t-c">实发合计</p>
                    </div>
                    <div className="">
                        <ul className="">
                            <li className="p-a b-b">
                                <a href="#" className="d-b">出勤调整<span className="pull-right"><i className="icon_"></i></span></a>
                            </li>
                            <li className="p-a b-b">
                                <a href="#" className="d-b">通用扣减<span className="pull-right"><i className="icon_"></i></span></a>
                            </li>
                            <li className="p-a">
                                <a href="#" className="d-b">浮动工资<span className="pull-right"><i className="icon_"></i></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <h6 className="title">明细</h6>
                <div className="bg-white b-t b-b">
                    <ul className="detail">
                        <li className="">
                            <a href="#" className="d-b">实际工资<span className="pull-right"><i className="icon_"></i></span></a>
                        </li>
                        <li className="">
                            <a href="#" className="d-b">加班工资<span className="pull-right"><i className="icon_"></i></span></a>
                        </li>
                        <li className="">
                            <a href="#" className="d-b">销售提成<span className="pull-right"><i className="icon_"></i></span></a>
                        </li>
                    </ul>
                </div>
                <div className="bg-white b-t b-b m-t-sm ">
                    <ul className="detail">
                        <li >
                            <a href="#" className="d-b">缺勤扣减<span className="pull-right"><i className="icon_"></i></span></a>
                        </li>
                        <li >
                            <a href="#" className="d-b">通用扣减<span className="pull-right"><i className="icon_"></i></span></a>
                        </li>
                        <li >
                            <a href="#" className="d-b">违纪罚款<span className="pull-right"><i className="icon_"></i></span></a>
                        </li>
                        <li >
                            <a href="#" className="d-b">质检和行政<span className="pull-right"><i className="icon_"></i></span></a>
                        </li>
                    </ul>
                </div>
                <div className="bg-white b-t b-b m-t-sm">
                    <ul className="detail">
                        <li >
                            <a href="#" className="d-b">社保代扣<span className="pull-right"><i className="icon_"></i></span></a>
                        </li>
                        <li >
                            <a href="#" className="d-b">公积金代扣<span className="pull-right"><i className="icon_"></i></span></a>
                        </li>
                        <li >
                            <a href="#" className="d-b">个税代扣<span className="pull-right"><i className="icon_"></i></span></a>
                        </li>
                    </ul>
                </div>
                <h6 className="title">不计税福利</h6>
                <div className="bg-white b-t b-b m-b-sm">
                    <ul className="detail">
                        <li >
                            <a href="#" className="d-b">交通补贴<span className="pull-right"><i className="icon_"></i></span></a>
                        </li>
                        <li >
                            <a href="#" className="d-b">通讯补贴<span className="pull-right"><i className="icon_"></i></span></a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}