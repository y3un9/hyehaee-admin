/**
 * @file /src/routes.js
 * @author SubwaySamurai
 * @date 2020/10/30
 * @description 页面路由列表
 */

import constants from './utils/constants';
// 各种页面组件
import LoadingPage from './pages/Loading';
import UserLoginPage from './pages/UserLogin';
import UserRegisterPage from './pages/UserRegister';
import UserFindPasswordPage from './pages/UserFindPassword';
import UserChangePasswordPage from './pages/UserChangePassword';
import HomePage from './pages/Home';
import UserListPage from './pages/UserList';
import UserAddPage from './pages/UserAdd';
import UserModPage from './pages/UserMod';
import UserInfoPage from './pages/UserInfo';
/** 基础路由路径 */
var basic_route_path = constants.ROUTE_PREFIX;
export default {
    prefix: basic_route_path,
    routeList: [
        // {
        //     component: window.loadingPage = new LoadingPage('#LoadingPage'),
        //     path: '/loading'
        // },
        {
            component: window.userLoginPage = new UserLoginPage('#UserLoginPage'),
            path: '/user/login'
        }, 
        {
            component: window.userRegisterPage = new UserRegisterPage('#UserRegisterPage'),
            path: '/user/register'
        },
        {
            component: window.userFindPasswordPage = new UserFindPasswordPage('#UserFindPasswordPage'),
            path: '/user/findpassword'
        },
        {
            component: window.userChangePasswordPage = new UserChangePasswordPage('#UserChangePasswordPage'),
            path: '/user/changepassword'
        },
        {
            component: window.homePage = new HomePage('#HomePage'),
            path: '/home'
        },
        {
            component: window.userListPage = new UserListPage('#UserListPage'),
            path: '/user/list'
        },
        {
            component: window.userAddPage = new UserAddPage('#UserAddPage'),
            path: '/user/add'
        },
        {
            component: window.userModPage = new UserModPage('#UserModPage'),
            path: '/user/mod'
        },
        {
            component: window.userInfoPage = new UserInfoPage('#UserInfoPage'),
            path: '/user/info'
        }
    ]
};