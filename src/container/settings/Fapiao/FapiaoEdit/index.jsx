import React from 'react';

export class FaPiao extends React.Component {
    render() {
        return (
            // 发票编辑简单
            <div>
                <div className="bg-white p-a b-b">
                    <a href="index.tsx">返回</a>
                    <span className="pull-right btn btn-sm"><i className="icon_search"></i>保存</span>
                </div>
                <h6 className="title p-l p-r">发票类型</h6>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        <li>
                            <span>不需要发票</span>
                            <div className="grey t-sm pull-right">
                                <label className="ui-check">
                                    <input type="checkbox"/>
                                    <i className="icon_ui"></i>
                                </label>
                            </div>
                        </li>
                        <li>
                            <span>普通电子发票</span>
                            <div className="grey t-sm pull-right">
                                <label className="ui-check">
                                    <input type="checkbox"/>
                                    <i className="icon_ui"></i>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-white m-t-sm">
                    <ul className="detail b-t b-b">
                        <li>
                            <span>发票类型</span>
                            <div className="grey t-sm pull-right">
                                <select name="" id="">
                                    <option value="">普通发票</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <span>开票抬头</span>
                            <div className="grey t-sm pull-right">
                                <input type="text"/>
                            </div>
                        </li>
                        <li>
                            <span>纳税人识别号</span>
                            <div className="grey t-sm pull-right">
                                <input type="text"/>
                            </div>
                        </li>
                        <li>
                            <span>收票邮箱</span>
                            <div className="grey t-sm pull-right">
                                <input type="text"/>
                            </div>
                        </li>
                        <li>
                            <span>通知手机（选填）</span>
                            <div className="grey t-sm pull-right">
                                <input type="text"/>
                            </div>
                        </li>
                        <li>
                            <span>特殊开票需求（选填）</span>
                            <div className="grey t-sm pull-right">
                                <input type="text"/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-white m-t-sm b-t b-b">
                    <div>
                        <span>添加特殊开票需求</span>
                        <div className="pull-right">
                            +
                        </div>
                    </div>
                    <div>
                        <div className="bg-grey">
                            收起并重置选项
                        </div>
                        <ul className="detail ">
                            <li>
                                <span>只开服务费金额</span>
                                <div className="grey t-sm pull-right">
                                    <label className="ui-check">
                                        <input type="checkbox"/>
                                        <i className="icon_ui"></i>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <span>不开服务费金额</span>
                                <div className="grey t-sm pull-right">
                                    <label className="ui-check">
                                        <input type="checkbox"/>
                                        <i className="icon_ui"></i>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <span>分开个人部分和公司部分开具明细</span>
                                <div className="grey t-sm pull-right">
                                    <label className="ui-check">
                                        <input type="checkbox"/>
                                        <i className="icon_ui"></i>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <span>分开社保、公积金、工资开具明细</span>
                                <div className="grey t-sm pull-right">
                                    <label className="ui-check">
                                        <input type="checkbox"/>
                                        <i className="icon_ui"></i>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-white m-t-sm m-b b-t b-b">
                    <div>
                        <span>添加更多选填信息</span>
                        <div className="pull-right">
                            +
                        </div>
                    </div>
                    <div>
                        <div className="bg-grey">
                            清空并收起下列选项信息
                        </div>
                        <ul className="detail">
                            <li>
                                <span>公司注册地址及电话</span>
                                <div className="grey t-sm pull-right">
                                    <label className="ui-check">
                                        <input type="checkbox"/>
                                        <i className="icon_ui"></i>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <span>开户行及账号</span>
                                <div className="grey t-sm pull-right">
                                    <label className="ui-check">
                                        <input type="checkbox"/>
                                        <i className="icon_ui"></i>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}