/**
 * @file /src/pages/UserList/index.js
 * @author SubwaySamurai
 * @date 2020/11/27
 * @description 用户列表页
 */

import Page from '../../components/Page';
import UserListSearchForm from './components/UserListSearchForm';

/**
 * @constructor 用户列表页
 * @extends Page
 * @param {string|HTMLElement} selector 
 */
function UserListPage (selector) {
    Page.call(this, selector);

    this.searchForm = new UserListSearchForm(this.rootElem.querySelector('#UserListSearchForm'));
    this.table = null;
}
UserListPage.prototype = Object.create(Page.prototype);
UserListPage.prototype.constructor = UserListPage;
/**
 * @method init
 */
UserListPage.prototype.init = function () {
    this.searchForm.init();
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
    this.searchForm.reset();

    this.fetchPageData();

    
};
export default UserListPage;