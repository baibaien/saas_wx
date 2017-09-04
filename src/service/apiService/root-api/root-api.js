export class RootApi {
    getRootUrl() {
        return (getDevUrl());
    }
}
function getTestUrl() {
    return `http://saas-api.mayitest.cn`;
}

function getDevUrl() {
    return `http://api.saas.hr.com`;
}

function getCrmUrl() {
    return `http://api.mayicrm.com`;
}