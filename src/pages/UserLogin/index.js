/**
 * @file /src/pages/UserLogin/index.js
 * @author SubwaySamurai
 * @date 2020/10/30
 * @description 用户登录页
 */

import Page from '../../components/Page';

/**
 * @constructor UserLoginPage
 * @extends Page
 * @param {string|HTMLElement} selector 
 */
function UserLoginPage (selector) {
    Page.call(this, selector);

    this.state = {};
}
UserLoginPage.prototype = Object.create(Page.prototype);
UserLoginPage.prototype.constructor = UserLoginPage;
/**
 * @method init
 */
UserLoginPage.prototype.init = function () {

};
/**
 * @method render
 */
UserLoginPage.prototype.render = function () {
    
};
export default UserLoginPage;