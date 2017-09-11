export function dateTransform(date) {
    // 转化为YYYY/MM/DD
    let target_date = new Date(parseInt(date) * 1000);
    let year = target_date.getFullYear();
    let month = target_date.getMonth() + 1;
    let day = target_date.getDay();
    return [year, month, day].map((item) => {
        return  formatNumber.call(this, item)
    }).join('\/');
}
export function dateTransformToMonth(date) {
    // 转化为YYYY/MM/
    let target_date = new Date(parseInt(date) * 1000);
    let year = target_date.getFullYear();
    let month = target_date.getMonth() + 1;
    // let day = target_date.getDay();
    return [year, month].map((item) => {
        return  formatNumber.call(this, item)
    }).join('\/');
}

function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : `0${n}`
}