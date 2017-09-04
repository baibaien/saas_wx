import * as React from 'react';
export class SocialCalc extends React.Component {
    render () {
        const disabledObj = {
            background: '#eaeaea'
        };
        const footer = {
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0'
        };
        return (
            <div>
                <div className="bg-white p-a b-b">
                    <a href="index.tsx">返回</a>
                    <span className="pull-right"><i className="icon_search"></i>搜索员工</span>
                </div>
                <div>
                    <table className="table full-w bg-white">
                        <thead>
                        <tr>
                            <th>员工姓名</th>
                            <th>缴纳城市</th>
                            <th>社保</th>
                            <th>公积金</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>赵一开</td>
                            <td>上海</td>
                            <td>对</td>
                            <td>对</td>
                        </tr>
                        <tr style={disabledObj}>
                            <td>赵一开</td>
                            <td>上海</td>
                            <td>对</td>
                            <td>对</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <div className="bg-white" style={footer}>
                    <div className="p-a">
                        <span>账单中将包含的员工</span>
                        <span className="pull-right">
                            <span className="label success">2</span>
                            <i className="icon_"></i>
                        </span>
                    </div>
                    <div className="b-t p-a">
                        <p className="grey t-sm m-b t-c">注意：列表中只罗列了当月在职的员工</p>
                        <div className="btn full-w">生成8月五险一金账单</div>
                    </div>
                </div>
            </div>
        )
    }
}