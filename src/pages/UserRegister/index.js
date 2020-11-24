/**
 * @file /src/pages/UserRegister/index.js
 * @author SubwaySamurai
 * @date 2020/10/30
 * @description 用户注册页
 */

import Page from '../../components/Page';
import UserRegisterForm from './components/UserRegisterForm';

/**
 * @constructor 用户注册页
 * @extends Page
 * @param {string|HTMLElement} selector 
 */
function UserRegisterPage (selector) {
    Page.call(this, selector);

    this.form = new UserRegisterForm(this.rootElem.queryselector('form'));
}
UserRegisterPage.prototype = Object.create(Page.prototype);
UserRegisterPage.prototype.constructor = UserRegisterPage;
/**
 * @method init
 */
UserRegisterPage.prototype.init = function () {
    this.form.init();
};
/**
 * @method fetchPageData
 */
UserRegisterPage.prototype.fetchPageData = function () {

};
/**
 * @method render
 */
UserRegisterPage.prototype.render = function () {
    this.form.reset();
};
export default UserRegisterPage;