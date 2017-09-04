import 'es6-promise'
import 'whatwg-fetch'
import {get}  from './get';
import {post} from './post'

function testToken() {
    if (window.localStorage.getItem('mayihr_token')) {
    } else {
        post('http://api.saas.hr.com/user/users/authenticate', {
            mobile: 13111001988,
            password: 111111
        }).then((res) => {
            console.log(res);
        })
    }

}
export function getData(url) {
    let result = get(url);
    return result.then(res => res.json()
    ).then(json =>
        json.data
    ).catch((err) => {
        console.log(err)
        return err
    })
}

export function postData(url, data_source) {
    let result = post(url, data_source);
    return result.then(res => {
        return res.json()
    }).then(json => {
        console.log(json);
    });
}