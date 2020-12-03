/**
 * @file /src/pages/UserFindPassword/index.js
 * @author SubwaySamurai
 * @date 2020/11/18
 * @description 用户找回密码页
 */

import Page from '../../components/Page';
import UserFindPasswordFrom from './components/UserFindPasswordForm';

/**
 * @constructor 用户找回密码页
 * @extends Page
 * @param {string|HTMLElement} selector 
 */
function UserFindPasswordPage (selector) {
    Page.call(this, selector);

    this.form = new UserFindPasswordFrom(this.rootElem.querySelector('form'));
}
UserFindPasswordPage.prototype = Object.create(Page.prototype);
UserFindPasswordPage.prototype.constructor = UserFindPasswordPage;
/**
 * @method init
 */
UserFindPasswordPage.prototype.init = function () {
    this.form.init();
};
/**
 * @method fetchPageData
 */
UserFindPasswordPage.prototype.fetchPageData = function () {
    // TODO: 
};
/**
 * @method render
 */
UserFindPasswordPage.prototype.render = function () {
    this.form.reset();
    this.fetchPageData();
};
export default UserFindPasswordPage;