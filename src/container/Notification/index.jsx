import React from 'react'
import {Link, BrowserRouter, Route} from 'react-router-dom'
import {NotDetail} from './NotDetail/index'
import {NotIndex} from './NotIndex/index'

export class Notification extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <BrowserRouter >
                <div>
                    <Route path='/Notice' exact component={NotIndex}/>
                    <Route path='/Notice/detail/:id' exact component={NotDetail}/>
                </div>
            </BrowserRouter>
        )
    }
}