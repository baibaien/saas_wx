import React from 'react';
import {Link} from 'react-router-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import {getData, postData} from '../../fetch/httpRequest'
import {HomePageUrls} from '../../service/apiService/homepage/homepageurl'

import {IndexTodo} from './subpage/indexTodo'
import {IndexRemind} from './subpage/indexRemind'
import {IndexHeader} from './subpage/indexHeader'
import {IndexStaffs} from './subpage/indexStaffs'
import {IndexAccount} from './subpage/indexAccount'

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            todo_index: {
                notice_unread_total: 0,
                gen_bills: [],
                gen_salary: [],
                incomplete_staff_total: 0,
                lately_birth_staff_total: 0,
            },
            unpaid_amount: {
                amount: 0,
                total: 0
            },
            bill_unorder: {
                total: 0
            },
            index_remind: {
                lately_birth_staff_total: 0,
                lately_entry_a_year_staff_total: 0,
                formal_staff_total: 0
            },
            has_unread_msg: {
                is_incomplete: 'complete',
            }
        }
    }

    componentWillMount() {
        // this.state.isLoading = false;
    }

    render() {
        return (
            <div className="full-h">
                {/*this.state.isLoading*/}
                {/*? '加载中。。。'*/}
                {/*: <div>*/}
                <IndexHeader />
                <IndexTodo data={this.state.todo_index} unorder={this.state.bill_unorder}/>
                <IndexRemind data={this.state.index_remind}/>
                <IndexStaffs/>
                <IndexAccount/>
                {/*<div className="m-t-sm p-l p-r p-t-sm p-b-sm bg-white b-t b-b m-b-lg">*/}
                {/*更多功能*/}
                {/*</div>*/}
            </div>
        )
    }

    componentDidMount() {
        const homePageUrls = new HomePageUrls();
        let index_todo_data;
        let bill_unorder_data;
        let index_remind_data;
        // 首页待办事项
        getData(homePageUrls.indexToBe())
            .then(res => {
                index_todo_data = res;
                this.setState({
                    todo_index: {
                        gen_bills: [],
                        gen_salary: [],
                        // gen_bills: index_todo_data.gen_bills,
                        // gen_salary: index_todo_data.gen_salary,
                        incomplete_staff_total: index_todo_data.incomplete_staff_total,
                        notice_unread_total: index_todo_data.notice_unread_total
                    },
                });
                console.log(this.state.todo_index.gen_bills);
            });
        // 首页未生成订单数量
        getData(homePageUrls.billUnOrder())
            .then(res => {
                bill_unorder_data = res;
                this.setState({
                    bill_unorder: {
                        total: bill_unorder_data.total
                    },
                });
            });
        //首页重要事项提醒
        getData(homePageUrls.indexRemind())
            .then(res => {
                index_remind_data = res;
                this.setState({
                    index_remind: {
                        lately_birth_staff_total: index_remind_data.lately_birth_staff_total,
                        lately_entry_a_year_staff_total: index_remind_data.lately_entry_a_year_staff_total,
                        formal_staff_total: index_remind_data.formal_staff_total
                    },
                });
            });
    }

    getIndexLists() {
    }
}