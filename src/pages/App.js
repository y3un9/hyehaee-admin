/**
 * @file /src/pages/App.js
 * @author SubwaySamurai
 * @date 2020/10/30
 * @description 
 */

import Component from '../components/Component';
import Router from './Router';
import SiderMenu from '../components/SiderMenu';

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

    this.menu = new SiderMenu('SiderMenu');
}
App.prototype = Object.create(Component.prototype);
App.prototype.constructor = App;
/**
 * @method init
 */
App.prototype.init = function () {
    this.menu.init();
    // TODO: 初始化页面
};
/**
 * @method checkAuth
 */
App.prototype.checkAuth = function () {
    
};
/**
 * @function 
 * @param {Component} componentClass
 * @param {string|HTMLElement} selector 
 */
App.prototype. = function (componentClass, selector) {
    var componentInstance = new componentClass(selector);
    return componentInstance;
};
/**
 * @method exit
 */
App.prototype.exit = function () {

};
export default App;