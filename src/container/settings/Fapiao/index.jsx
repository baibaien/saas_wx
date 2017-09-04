import React from 'react';

export class FaPiao extends React.Component {
    render() {
        return (
            // 发票信息
            <div>
                <div className="bg-white p-a b-b">
                    <a href="index.tsx">返回</a>
                    <span className="pull-right"><i className="icon_search"></i>编辑发票信息</span>
                </div>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        <li>
                            <span>发票类型</span>
                            <div className="grey t-sm pull-right">
                                普通发票
                            </div>
                        </li>
                        <li>
                            <span>开票抬头</span>
                            <div className="grey t-sm pull-right">
                                福利专员
                            </div>
                        </li>
                        <li>
                            <span>纳税人识别号</span>
                            <div className="grey t-sm pull-right">
                                363333
                            </div>
                        </li>
                        <li>
                            <span>收票邮箱</span>
                            <div className="grey t-sm pull-right">
                                36633@qq.com
                            </div>
                        </li>
                        <li>
                            <span>通知手机（选填）</span>
                            <div className="grey t-sm pull-right">
                                13633333333
                            </div>
                        </li>
                        <li>
                            <span>特殊开票需求（选填）</span>
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