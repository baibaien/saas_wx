export function dateTransform(date) {
    // 转化为YYYY/MM/DD
    let target_date = new Date(date);
    let year = target_date.getFullYear();
    let month = target_date.getMonth() + 1;
    let day = target_date.getDay();
    return [year, month, day].map((item) => {
       return  formatNumber.call(this, item)
    }).join('\\');
}
function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : `0${n}`
}