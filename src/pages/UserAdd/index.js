/**
 * @file /src/pages/UserAdd/index.js
 * @author SubwaySamurai
 * @date 2020/11/27
 * @description 用户新增页
 */

import Page from '../../components/Page';

/**
 * @constructor 用户新增页
 * @extends Page
 * @param {string|HTMLElement} selector 
 */
function UserAddPage (selector) {
    Page.call(this, selector);
}
UserAddPage.prototype = Object.create(Page.prototype);
UserAddPage.prototype.constructor = UserAddPage;
/**
 * @method init
 */
UserAddPage.prototype.init = function () {

};
/**
 * @method fetchPageData
 */
UserAddPage.prototype.fetchPageData = function () {

};
/**
 * @method render
 */
UserAddPage.prototype.render = function () {

};
export default UserAddPage;