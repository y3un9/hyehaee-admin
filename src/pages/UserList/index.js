/**
 * @file /src/pages/UserList/index.js
 * @author SubwaySamurai
 * @date 2020/11/27
 * @description 用户列表页
 */

import Page from '../../components/Page';
import UserListSearchForm from './components/UserListSearchForm';
import UserListTable from './components/UserListTable';

import * as service from '../../services';

/**
 * @constructor 用户列表页
 * @extends Page
 * @param {string|HTMLElement} selector 
 */
function UserListPage (selector) {
    Page.call(this, selector);

    this.searchForm = new UserListSearchForm(this.rootElem.querySelector('#UserListSearchForm'));
    this.table = new UserListTable(this.rootElem.querySelector('#UserListTable'));
}
UserListPage.prototype = Object.create(Page.prototype);
UserListPage.prototype.constructor = UserListPage;
/**
 * @method init
 */
UserListPage.prototype.init = function () {
    this.searchForm.init();
    this.table.init();
    this.table.setState({
        tableColumn: []
    });
};
/**
 * 请求获取页面数据
 * @method fetchPageData
 */
UserListPage.prototype.fetchPageData = async function () {
    // 发起网络请求
    var result = await service.fetchUserListPageData();
};
/**
 * @method render
 */
UserListPage.prototype.render = function () {
    this.searchForm.reset();
    this.table.setState({
        tableData: []
    });
    this.table.render();

    this.fetchPageData();

    
};
export default UserListPage;