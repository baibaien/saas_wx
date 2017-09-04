import React from 'react';

export class StaffList extends React.Component {
    render() {
        return (
            // 员工列表
            <div>
                <div className="bg-white p-a b-b">
                    <a href="index.tsx">返回</a>
                    <span className="pull-right"><i className="icon_search"></i>搜索员工</span>
                </div>
                <h6 className="title p-l p-r">部门</h6>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        <li>
                            <div className="clearfix">
                                <span >呼叫中心</span>
                                <div className="pull-right t-r">
                                    <span className="d-b grey t-sm">下设两个部门</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <span >综合管理部</span>
                                <div className="pull-right t-r">
                                    <span className="d-b grey t-sm">直属8位成员</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <h6 className="title p-l p-r">B</h6>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        <li>
                            <div className="clearfix">
                                <span >包包包</span>
                                <div className="pull-right t-r">
                                    <span className="d-b grey t-sm">销售</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <span >白哈哈</span>
                                <div className="pull-right t-r">
                                    <span className="d-b grey t-sm">销售</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <h6 className="title p-l p-r">B</h6>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        <li>
                            <div className="clearfix">
                                <span >包包包</span>
                                <div className="pull-right t-r">
                                    <span className="d-b grey t-sm">销售</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <span >白哈哈</span>
                                <div className="pull-right t-r">
                                    <span className="d-b grey t-sm">销售</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}