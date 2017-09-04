import React from 'react';

export class Social extends React.Component {
    render() {
        return (
            // 社保办理状态
            <div>
                <div className="bg-white p-a b-b">
                    <a href="index.tsx">返回</a>
                    <span className="pull-right"><i className="icon_search"></i>搜索员工</span>
                </div>
                <h6 className="title p-l p-r">员工列表</h6>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        <li>
                            <div className="clearfix">
                                <span >卢大洋</span>
                                <div className="pull-right t-r">
                                    <span className="d-b grey t-sm">公积金：'未办理'</span>
                                    <span className="d-b grey t-sm">社保： '已办理（2017-06-12）'</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <span >卢大洋</span>
                                <div className="pull-right t-r">
                                    <span className="d-b grey t-sm">公积金：'未办理'</span>
                                    <span className="d-b grey t-sm">社保： '已办理（2017-06-12）'</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}