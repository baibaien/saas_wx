import React from 'react';

export class StaffDetail extends React.Component {
    render() {
        return (
            // 员工详情
            <div>
                <div className="bg-white p-a b-b">
                    <a href="index.tsx">返回</a>
                    <span className="pull-right"><i className="icon_search"></i>补全信息</span>
                </div>
                <h6 className="title p-l p-r">员工列表</h6>
                <div className="bg-white">
                    <p className="p-l">包春生 <span className="grey">（司龄12个月）</span></p>
                    <ul className="detail b-t b-b">
                        <li>
                            <div className="grey t-sm">
                                2016/07/12入职，2017/09/20转正
                            </div>
                        </li>
                        <li>
                            <div className="clearfix ">
                                <p className="grey t-sm">行政总监</p>
                                <p className="grey t-sm">综合管理部</p>
                                <p className="grey t-sm">向<span>陈陈</span>汇报</p>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix ">
                                <p className="grey t-sm">工作地点： <span>上海</span></p>
                                <p className="grey t-sm">合同公司： <span>上海分公司</span></p>
                            </div>
                        </li>
                    </ul>
                </div>
                <h6 className="title p-l p-r">联络信息</h6>
                <div className="bg-white">
                    <ul className="detail">
                        <li>
                            <span>手机</span>
                            <div className="pull-right grey">17688888888</div>
                        </li>
                        <li>
                            <span>备用电话</span>
                            <div className="pull-right grey">17688888888</div>
                        </li>
                        <li>
                            <span>工作邮箱</span>
                            <div className="pull-right grey">17688888888</div>
                        </li>
                        <li>
                            <span>住址</span>
                            <div className="pull-right">
                                <p className="grey">上海市</p>
                                <p className="grey">宜山路29号121室</p>
                                <p className="grey">300222</p>
                            </div>
                        </li>
                        <li>
                            <span>紧急联络</span>
                            <div className="pull-right">
                                <p className="grey">冶金</p>
                                <p className="grey">父亲</p>
                                <p className="grey">15633333333</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <h6 className="title p-l p-r">更多信息</h6>
                <div className="bg-white">
                    <ul className="detail">
                        <li>
                            <span>基本信息</span>
                            <div className="pull-right grey">></div>
                        </li>
                        <li>
                            <span>薪酬与五险一金</span>
                            <div className="pull-right grey">></div>
                        </li>
                        <li>
                            <span>出勤和假期</span>
                            <div className="pull-right grey">></div>
                        </li>
                        <li>
                            <span>劳动信息合同</span>
                            <div className="pull-right grey">></div>
                        </li>
                        <li>
                            <span>家庭成员</span>
                            <div className="pull-right grey">></div>
                        </li>
                        <li>
                            <span>履历</span>
                            <div className="pull-right grey">></div>
                        </li>
                        <li>
                            <span>证件/扫描照片</span>
                            <div className="pull-right grey">></div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}