/**
 * @file /src/routes.js
 * @author SubwaySamurai
 * @date 2020/10/30
 * @description 页面路由列表
 */

import constant from './utils/constant';

import UserLoginPage from './pages/UserLogin';
import UserRegisterPage from './pages/UserRegister';
import HomePage from './pages/Home';

/** 基础路由路径 */
var basic_route_path = constant.ROUTE_PREFIX;

export default {
    prefix: basic_route_path,
    routeList: [
        {
            component: window.userLoginPage = new UserLoginPage('#UserLoginPage'),
            path: '/user/login'
        }, 
        {
            component: window.userRegisterPage = new UserRegisterPage('#UserRegisterPage'),
            path: '/user/register'
        },
        {
            component: window.homePage = new HomePage('#HomePage'),
            path: '/home'
        }
    ]
};