import React from 'react';

export class CompleteStaffMsg extends React.Component {
    render() {
        return (
            // 联系人
            <div>
                <div className="bg-white p-a b-b">
                    <a href="index.tsx">返回</a>
                    <span className="pull-right"><i className="icon_search"></i>变更联系人</span>
                </div>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        <li>
                            <span>姓名</span>
                            <div className="grey t-sm pull-right">
                                陈志安
                            </div>
                        </li>
                        <li>
                            <span>职位</span>
                            <div className="grey t-sm pull-right">
                                福利专员
                            </div>
                        </li>
                        <li>
                            <span>称谓</span>
                            <div className="grey t-sm pull-right">
                                先生
                            </div>
                        </li>
                        <li>
                            <span>电子邮箱</span>
                            <div className="grey t-sm pull-right">
                                36633@qq.com
                            </div>
                        </li>
                        <li>
                            <span>手机</span>
                            <div className="grey t-sm pull-right">
                                13633333333
                            </div>
                        </li>
                        <li>
                            <span>固定电话</span>
                            <div className="grey t-sm pull-right">
                                13633333333
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}