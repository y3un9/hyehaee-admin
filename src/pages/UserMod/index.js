/**
 * @file /src/pages/UserMod/index.js
 * @author SubwaySamurai
 * @date 2020/11/27
 * @description 用户修改页
 */

import Page from '../../components/Page';

/**
 * @constructor 用户修改页
 * @extends Page
 * @param {string|HTMLElement} selector 
 */
function UserModPage (selector) {
    Page.call(this, selector);
}
UserModPage.prototype = Object.create(Page.prototype);
UserModPage.prototype.constructor = UserModPage;
/**
 * @method init
 */
UserModPage.prototype.init = function () {

};
/**
 * @method fetchPageData
 */
UserModPage.prototype.fetchPageData = function () {

};
/**
 * @method render
 */
UserModPage.prototype.render = function () {

};
export default UserModPage;