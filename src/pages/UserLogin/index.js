/**
 * @file /src/pages/UserLogin/index.js
 * @author SubwaySamurai
 * @date 2020/10/30
 * @description 用户登录页
 */

import Page from '../../components/Page';
import UserLoginForm from './components/UserLoginForm';

/**
 * @constructor 用户登录页
 * @extends Page
 * @param {string|HTMLElement} selector 
 */
function UserLoginPage (selector) {
    Page.call(this, selector);

    this.form = new UserLoginForm(this.rootElem.querySelector('form'));
}
UserLoginPage.prototype = Object.create(Page.prototype);
UserLoginPage.prototype.constructor = UserLoginPage;
/**
 * @method init
 */
UserLoginPage.prototype.init = function () {
    this.form.init();
};
/**
 * @method fetchPageData
 */
UserLoginPage.prototype.fetchPageData = function () {

};
/**
 * @method render
 */
UserLoginPage.prototype.render = function () {
    this.form.reset();
};
export default UserLoginPage;