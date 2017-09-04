import React from 'react';

export class SocailDetail extends React.Component {
    render() {
        const shadowStyle = {
            boxShadow: '0 1px 5px #eaeaea',
            zIndex: 2
        }
        return (
            <div>
                <div className="bg-white  b-b p-a pos-r" style={shadowStyle}>
                    <a href="index.tsx">返回</a>
                    <div className="pull-right tab">
                        <span className="m-r active">社保</span>
                        <span>公积金</span>
                    </div>
                </div>
                <div className="bg-white p-a-lg b-b" >
                    <p className="t-md m-b-sm">记大洋 <span className="grey">（社保）</span></p>
                    <div className="d-ib m-r-lg">
                        <p className="t-md bold">5000.00</p>
                        <p className="grey t-sm">公司部分合计</p>
                    </div>
                    <div className="d-ib m-l-lg">
                        <p className="t-md bold">5000.00</p>
                        <p className="grey t-sm">个人部分合计</p>
                    </div>
                </div>
                <div className="bg-white clearfix b-b b-t p-a m-t-sm">
                    <span>通过蚂蚁HR缴纳</span>
                    <span className="pull-right">
                        <label className="slide">
                            <input type="checkbox"/>
                        </label>
                    </span>
                </div>
                <h6 className="title">公司部分明细</h6>
                <div className="bg-white b-t b-b">
                    <ul className="detail">
                        <li>
                            <span>医疗<span className="grey">(8%)</span> </span>
                            <span className="pull-right grey">900.00</span>
                        </li>
                        <li>
                            <span>医疗<span className="grey">(8%)</span> </span>
                            <span className="pull-right grey">900.00</span>
                        </li>
                        <li>
                            <span>医疗<span className="grey">(8%)</span> </span>
                            <span className="pull-right grey">900.00</span>
                        </li>
                        <li>
                            <span>医疗<span className="grey">(8%)</span> </span>
                            <span className="pull-right grey">900.00</span>
                        </li>
                        <li>
                            <span>医疗<span className="grey">(8%)</span> </span>
                            <span className="pull-right grey">900.00</span>
                        </li>

                    </ul>
                </div>
                <h6 className="title">个人部分明细</h6>
                <div className="bg-white b-t b-b m-b">
                    <ul className="detail">
                        <li>
                            <span>医疗<span className="grey">(8%)</span> </span>
                            <span className="pull-right grey">900.00</span>
                        </li>
                        <li>
                            <span>医疗<span className="grey">(8%)</span> </span>
                            <span className="pull-right grey">900.00</span>
                        </li>
                        <li>
                            <span>医疗<span className="grey">(8%)</span> </span>
                            <span className="pull-right grey">900.00</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}