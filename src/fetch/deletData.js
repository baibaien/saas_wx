import 'es6-promise'
import 'whatwg-fetch'

export function deleteHttpData(url, data_source) {
    const RESULT = fetch(url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json, text/palin, */*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLnNhYXMuaHIuY29tL3VzZXIvdXNlcnMvYXV0aGVudGljYXRlIiwiaWF0IjoxNTA0NDIwNTYxLCJleHAiOjE1MDY4Mzk3NjEsIm5iZiI6MTUwNDQyMDU2MSwianRpIjoiMnR6T3VtWnhiR1gyT2ttOCIsInN1YiI6NDc4MDAsInBydiI6ImY5MzA3ZWI1ZjI5YzcyYTkwZGJhYWVmMGUyNmYwMjYyZWRlODZmNTUifQ.w09RU0BgC81uz9XKCHQLQRmvcfjEjHG2bsEOtiVGXLU'
        },
        body: obj2params(data_source)
    });
    return RESULT;
}

function obj2params(obj) {
    var result = '';
    var item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item])
    }
    return result;
}
