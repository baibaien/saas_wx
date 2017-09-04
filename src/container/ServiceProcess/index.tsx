import * as React from 'react';

export class ServiceProcess extends React.Component {
    render() {
        return (
            // 社保办理进度
            <div>
                <div className="bg-white p-a b-b">
                    <a href="index.tsx">返回</a>
                    <span className="pull-right"><i className="icon_search"></i>办理完成</span>
                </div>
                <h6 className="title p-l p-r">订单包含员工服务进度</h6>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        <li>
                            <div className="clearfix">
                                <span >卢大洋</span>
                                <div className="pull-right t-r">
                                    <span className="d-b grey t-sm">公积金（6月）：'未办理'</span>
                                    <span className="d-b grey t-sm">社保（6月）： '办理中'</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <span >卢大洋</span>
                                <div className="pull-right t-r">
                                    <span className="d-b grey t-sm">公积金（6月）：'未办理'</span>
                                    <span className="d-b grey t-sm">社保（6月）： '办理中'</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}