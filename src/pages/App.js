/**
 * @file /src/pages/App.js
 * @author SubwaySamurai
 * @date 2020/10/30
 * @description 
 */

import Component from '../components/Component';
import Router from './Router';
import SiderMenu from '../components/SiderMenu';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import * as service from '../services/index';
import constant from '../utils/constant';
import cookie from '../utils/cookie';
import util from '../utils/util';

/**
 * @constructor App
 * @extends Component
 * @param {string|HTMLElement} selector 
 */
function App (selector) {
    Component.call(this, selector);

    this.state = {
        /** 请求地址 */
        requestUrl: '',
        /** 上传地址 */
        uploadUrl: '',
        /** 下载地址 */
        downloadUrl: ''
    };

    /** @type {Router} */
    this.router = null;

    this.sideBar = new SideBar('#Sider');
    this.header = new Header('#Header');
    this.footer = new Footer('#Footer');
    this.menu = new SiderMenu('#SiderMenu');
}
App.prototype = Object.create(Component.prototype);
App.prototype.constructor = App;
/**
 * @method init
 */
App.prototype.init = function () {
    this.sideBar.init();
    this.header.init();
    this.footer.init();
    this.menu.init();
    // 初始化各页面
    this.router.routeList.forEach(function (item, index, array) {
        item.component.init();
    });
};
/**
 * 检查用户鉴权  
 * 作用是检查 “有无用户登录凭证” 或 “用户登录时效是否过期”  
 * 目的是 ~~鉴权成功时跳转至默认路由 / 鉴权失败时跳转至用户登录~~  
 * 目的是 为外部提供检查用户凭证接口  
 * @async 
 * @method checkAuth
 * @returns {Promise<boolean>}
 */
App.prototype.checkAuth = async function () {
    if (!cookie.hasItem('user.session')) {
        return false;
    }
    var result = await service.fetchUserAuth({
        session: cookie.getItem('user.session')
    });
    if (!result || result.status !== constant.UIP_RESP_STATUS_SUCCESS) {
        return false;
    }
    var user_info = result.ret;
    if (user_info.uid !== cookie.getItem('user.uid')) {
        return false;
    }
    return true;
};
/**
 * 检查浏览器地址  
 * 作用是检查浏览器窗口 href 的 hostname 是不是指定地址  
 * 目的是暂未明确 ( 增加代码被扒后的破解难度??? )  
 * @method checkAddress
 * @returns {boolean}
 */
App.prototype.checkAddress = function () {
    var hostname = window.location.hostname;
};
/**
 * @method exit
 */
App.prototype.exit = function () {
    // 清除定时器
    // TODO: 做一些别的事情
};
/**
 * @async
 * @method fetchAppData
 */
App.prototype.fetchAppData = async function () {
    var result = await service.fetchAppData();
    if (!result) {
        // TODO: 
        return;
    }
    if (result.auth !== constant.UIP_RESP_AUTH_SUCCESS) {
        // TODO: 
        return;
    }
    if (result.status !== constant.UIP_RESP_STATUS_SUCCESS) {
        // TODO:
        return;
    }
    
};
export default App;