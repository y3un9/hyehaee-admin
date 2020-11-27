/**
 * @file /src/pages/UserInfo/index.js
 * @author SubwaySamurai
 * @date 2020/11/27
 * @description 用户信息页
 */

import Page from '../../components/Page';

/**
 * @constructor 用户信息页
 * @extends Page
 * @param {string|HTMLElement} selector 
 */
function UserInfoPage (selector) {
    Page.call(this, selector);
}
UserInfoPage.prototype = Object.create(Page.prototype);
UserInfoPage.prototype.constructor = UserInfoPage;
/**
 * @method init
 */
UserInfoPage.prototype.init = function () {

};
/**
 * @method fetchPageData
 */
UserInfoPage.prototype.fetchPageData = function () {

};
/**
 * @method render
 */
UserInfoPage.prototype.render = function () {

};
export default UserInfoPage;