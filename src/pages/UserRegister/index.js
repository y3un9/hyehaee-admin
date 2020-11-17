/**
 * @file /src/pages/UserRegister/index.js
 * @author SubwaySamurai
 * @date 2020/10/30
 * @description 用户注册页
 */

import Page from '../../components/Page';

/**
 * @constructor UserRegisterPage
 * @extends Page
 * @param {string|HTMLElement} selector 
 */
function UserRegisterPage (selector) {
    Page.call(this, selector);

    this.state = {};
}
UserRegisterPage.prototype = Object.create(Page.prototype);
UserRegisterPage.prototype.constructor = UserRegisterPage;
/**
 * @method init
 */
UserRegisterPage.prototype.init = function () {
    
};
/**
 * @method render
 */
UserRegisterPage.prototype.render = function () {
    
};
export default UserRegisterPage;