

export class UsersService {
    private token: string;

    // 用户API
    constructor() {
    }

    // 用户列表API
    // 列表获取       get  url/?include==stafs
    // 用户信息获取   get  url/id
    getUsers() {
        return `${this.rootApiService.getRootUrl()}/user/users`;
    }

    // 创建用户 get
    getUsersCreate() {
        return `${this.rootApiService.getRootUrl()}/user/users/create`;
    }

    // 首页表头列表更新 get
    getUsersColumns() {
        return `${this.rootApiService.getRootUrl()}/user/users/update-columns`;
    }

    //Authorization相关
    getAuthorization() {
        return `${this.rootApiService.getRootUrl()}/user/users/authenticate`;
    }

    // 登陆

    // 注册
    // 企业注册
    getUserStore() {
        return `${this.rootApiService.getRootUrl()}/user/users/store`;
    }
    // 个人注册
    getUserStorePersonal() {
        return `${this.rootApiService.getRootUrl()}/user/users/store-personal`;
    }
    // 首次鞥路验证手机
    getPhoneCheckFirst() {
        return `${this.rootApiService.getRootUrl()}/user/users/check-sms`;
    }
}
// export class MyRequestOptions extends BaseRequestOptions {
//     constructor () {
//         super();
//         // this.headers.append('Content-type', 'multipart/form-data');
//         this.headers.append('Content-type', 'application/json');
//     }
// }

