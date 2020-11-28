/**
 * @file /src/pages/UserChangePassword/index.js
 * @author SubwaySamurai
 * @date 2020/11/28
 * @description 用户更改密码页
 */

import Page from '../../components/Page';
import UserChangePasswordForm from './components/UserChangePasswordForm';

/**
 * @constructor 用户更改密码页
 * @extends Page
 * @param {string|HTMLElement} selector 
 */
function UserChangePasswordPage (selector) {
    Page.call(this, selector);

    this.form = new UserChangePasswordForm(this.rootElem.querySelector('#UserChangePasswordForm'));
}
UserChangePasswordPage.prototype = Object.create(Page.prototype);
UserChangePasswordPage.prototype.constructor = UserChangePasswordPage;
/**
 * @method init
 */
UserChangePasswordPage.prototype.init = function () {
    this.form.init();
};
/**
 * 请求获取页面数据
 * @method fetchPageData
 */
UserChangePasswordPage.prototype.fetchPageData = function () {
    // TODO: 
};
/**
 * @method render
 */
UserChangePasswordPage.prototype.render = function () {
    this.form.reset();
};
export default UserChangePasswordPage;