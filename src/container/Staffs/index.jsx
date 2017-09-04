import React from 'react';

export class StaffIndex extends React.Component {
    render() {
        const headerStyle = {
            padding: '.15rem 0',
            borderBottom: '1px solid #eaeaea'
        }
        return (
            // 公司详情
            <div>
                <div className="bg-white">
                    <div className="header t-c " style={headerStyle}>上海点位商贸有限公司</div>
                    <div className="t-c p-t-xl p-b-xl b-b">
                        <h1 className="t-24 bold t-c">0.00</h1>
                        <p className="grey t-c">6月总支出</p>
                    </div>
                    <div className="p-a">
                        <a href="index.tsx">
                            查看统计
                        </a>
                            <span className="grey pull-right">上月支出 60333.21</span>
                    </div>
                </div>
                <h6 className="title">待办事项</h6>
                <div className="bg-white b-t b-b">
                    <ul className="p-l thumb-list">
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="b-b p-t p-b m-l"><a href="#" className="d-b">生成6月份社保账单<span className="pull-right"><span className="label">2</span><i className="icon_"></i></span></a></div>
                        </li>
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="b-b p-t p-b m-l"><a href="#" className="d-b">生成6月份工资账单<span className="pull-right"><span className="label">2</span><i className="icon_"></i></span></a></div>
                        </li>
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="b-b p-t p-b m-l"><a href="#" className="d-b">补全员工信息<span className="pull-right"><span className="label">2</span><i className="icon_"></i></span></a></div>
                        </li>
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="p-t p-b m-l"><a href="#" className="d-b">请阅读重要通知<span className="pull-right"><span className="label">2</span><i className="icon_"></i></span></a></div>
                        </li>
                    </ul>
                </div>
                <h6 className="title">特殊日期提醒</h6>
                <div className="bg-white b-t b-b">
                    <ul className="p-l ">
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="b-b p-t p-b m-l"><a href="#" className="d-b">近期员工生日<span className="pull-right"><span className="label">2</span><i className="icon_"></i></span></a></div>
                        </li>
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="b-b p-t p-b m-l"><a href="#" className="d-b">近期员工入职周年<span className="pull-right"><span className="label">2</span><i className="icon_"></i></span></a></div>
                        </li>
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="b-b p-t p-b m-l"><a href="#" className="d-b">预定本月转正员工<span className="pull-right"><span className="label">2</span><i className="icon_"></i></span></a></div>
                        </li>
                    </ul>
                </div>
                <h6 className="title">员工管理</h6>
                <div className="bg-white b-t b-b">
                    <ul className="p-l ">
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="b-b p-t p-b m-l"><a href="#" className="d-b">员工名录<span className="pull-right"><span className="label">2</span><i className="icon_"></i></span></a></div>
                        </li>
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="b-b p-t p-b m-l"><a href="#" className="d-b">为员工生成补缴账单<span className="pull-right"><span className="label">2</span><i className="icon_"></i></span></a></div>
                        </li>
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="b-b p-t p-b m-l"><a href="#" className="d-b">员工五险一金缴纳状态列表<span className="pull-right"><span className="label">2</span><i className="icon_"></i></span></a></div>
                        </li>
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="p-t p-b m-l"><a href="#" className="d-b">请阅读重要通知 <span className="pull-right"><span className="label">2</span><i className="icon_"></i></span></a></div>
                        </li>
                    </ul>
                </div>
                <h6 className="title">账户管理</h6>
                <div className="bg-white b-t b-b">
                    <ul className="p-l ">
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="b-b p-t p-b m-l"><a href="#" className="d-b">订单管理<span className="pull-right"><i className="icon_"></i></span></a></div>
                        </li>
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="b-b p-t p-b m-l"><a href="#" className="d-b">帮助与支持<span className="pull-right"><i className="icon_"></i></span></a></div>
                        </li>
                        <li className="p-r">
                            <span className="p-l-sm p-r-sm p-t p-b pull-left"><i className="icon_"></i></span>
                            <div className="p-t p-b m-l"><a href="#" className="d-b">账户设置<span className="pull-right"><span className="label">2</span><i className="icon_"></i></span></a></div>
                        </li>
                    </ul>
                </div>
                <div className="m-t-sm p-l p-r p-t-sm p-b-sm bg-white b-t b-b m-b-lg">
                    更多功能
                </div>
            </div>
        )
    }
}