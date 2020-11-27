/**
 * @file /src/pages/UserList/index.js
 * @author SubwaySamurai
 * @date 2020/11/27
 * @description 用户列表页
 */

import Page from '../../components/Page';

/**
 * @constructor 用户列表页
 * @extends Page
 * @param {string|HTMLElement} selector 
 */
function UserListPage (selector) {
    Page.call(this, selector);
}
UserListPage.prototype = Object.create(Page.prototype);
UserListPage.prototype.constructor = UserListPage;
/**
 * @method init
 */
UserListPage.prototype.init = function () {

};
/**
 * @method fetchPageData
 */
UserListPage.prototype.fetchPageData = function () {

};
/**
 * @method render
 */
UserListPage.prototype.render = function () {

};
export default UserListPage;