import React from 'react';

export class FaPiao extends React.Component {
    render() {
        return (
            // 签约信息
            <div>
                <div className="bg-white p-a b-b">
                    <a href="index.tsx">返回</a>
                    <span className="pull-right"><i className="icon_search"></i>变更账户主体</span>
                </div>
                <h6 className="title p-l p-r">账户主体</h6>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        <li>
                            <span>公司名称</span>
                            <div className="grey t-sm pull-right">
                                上海点位商贸有限公司
                            </div>
                        </li>
                        <li>
                            <span>注册地址</span>
                            <div className="grey t-sm pull-right w-200 ellipsis">
                                上海普陀赵家帮路400号
                            </div>
                        </li>
                        <li>
                            <span>营业执照号</span>
                            <div className="grey t-sm pull-right">
                                363333
                            </div>
                        </li>
                    </ul>
                </div>
                <h6 className="title p-l p-r">协议与签约凭证 <span className="pull-right">代缴 2017/01/03签约</span></h6>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        <li>
                            <span>协议签约页</span>
                            <div className="grey t-sm pull-right">

                            </div>
                        </li>
                        <li>
                            <span>协议细则页</span>
                            <div className="grey t-sm pull-right w-200 ellipsis">
                            </div>
                        </li>
                        <li>
                            <span>营业执照</span>
                            <div className="grey t-sm pull-right">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}