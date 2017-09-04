import React from 'react';

export class SendAddr extends React.Component {
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
                        添加新邮寄地址
                    </div>
                </div>
                <h6 className="title d-ib">邮寄地址一</h6>
                <label className="pull-right ui-check">
                    <input type="radio"/>
                    <i className="icon_ui"></i>
                </label>
                <div className="bg-white b-t b-b">
                    <ul className="detail b-b">
                        <li>
                            <div className="clearfix">
                                <span >收件人</span>
                                <div className="pull-right t-r">
                                   <span className="grey">陈啊啊</span>
                                    <input type="text" className="hide" placeholder="输入姓名"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <span >联系电话</span>
                                <div className="pull-right t-r">
                                    <span className="grey">13655555555</span>
                                    <input type="text" className="hide" placeholder="输入联系电话"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <span >地址</span>
                                <div className="pull-right t-r w-200 ellipsis">
                                    <span className="grey">上海市徐汇区中山西路永升大厦1511室</span>
                                    <input type="text" className="hide" placeholder="输入地址"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <span >邮编</span>
                                <div className="pull-right t-r">
                                    <span className="grey">89889999</span>
                                    <input type="text" className="hide" placeholder="输入邮编"/>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="t-c p-a">
                        编辑
                    </div>
                </div>

            </div>
        )
    }
}