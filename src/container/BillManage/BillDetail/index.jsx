import React from 'react';

export class BillDetail extends React.Component {
    render() {
        return (
            // 订单明细
            <div>
                <div className="bg-white p-a b-b">
                    <a href="index.tsx">返回</a>
                    <span className="pull-right"><i className="icon_search v-m"></i>查看办理进度</span>
                </div>
                <div className="bg-white b-t b-b m-t-sm">
                    <div className="bg-grey p-a">
                        <span className="grey t-sm">订单编号：3433</span>
                        <span className="pull-right grey t-sm">成交于2019/09/12</span>
                    </div>
                    <div className="p-l p-r p-t-lg p-b-lg b-b">
                        <div className="d-ib half">
                            <h6 className="t-20 bold">203.00</h6>
                            <p className="grey">实付</p>
                        </div>
                        <div className="d-ib half pull-right">
                            <p className="grey t-r">实付金额: 000.00</p>
                            <p className="grey t-r">余额抵扣：00.00</p>
                        </div>
                    </div>
                    <div className="p-a">
                        <span className="grey"><i className="icon_camera t-lg m-r-sm v-m"></i>查看付款凭证</span>
                        <span className="pull-right grey">支付于2030/20/20</span>
                    </div>
                </div>
                <h6 className="title p-l p-r">发票信息</h6>
                <div className="bg-white">
                    <div className="b-b p-l p-r p-t-lg p-b-lg">
                        <div className="d-ib half">
                            <h6 className="t-20 bold">203.00</h6>
                            <p className="grey">可开票金额</p>
                        </div>
                        <div className="pull-right p-t-sm">
                            <button className="btn btn-sm">开票</button>
                        </div>
                    </div>
                    <div className="p-a">
                        <p className="grey">发票抬头：电子发票</p>
                        <p className="grey">发票类型：普通发票</p>
                        <p className="grey">收票邮箱：eieowoe@qq.com</p>
                        <p className="grey">开票要求：正常开票</p>
                    </div>
                </div>
                <h6 className="title p-l p-r">订单包含账单列表</h6>
                <div className="bg-white">
                    <ul className="detail b-t b-b">
                        <li>
                            <div className="clearfix">
                                <div className="d-ib">
                                    <span >5月工资账单</span>
                                    <p className="grey t-sm">10人</p>
                                    <p className="grey t-sm">生成于2017/06/21</p>
                                </div>
                                <div className="pull-right t-r">
                                    <span>2800</span>
                                    <p className="grey t-sm t-r">+残障金 1200.00</p>
                                    <p className="grey t-sm t-r">+服务费 90.00</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <div className="d-ib">
                                    <span >5月工资账单</span>
                                    <p className="grey t-sm">10人</p>
                                    <p className="grey t-sm">生成于2017/06/21</p>
                                </div>
                                <div className="pull-right t-r">
                                    <span>2800</span>
                                    <p className="grey t-sm t-r">+残障金 1200.00</p>
                                    <p className="grey t-sm t-r">+服务费 90.00</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}