/**
 * @author SubwaySamurai
 * @date 2020/11/28
 * @description 用户列表表格
 */

import PageableTable from '../../../../../../YUI个人组件库/yui-component/PageableTable';

import * as service from '../../../services';

/**
 * @constructor 用户列表表格
 * @extends PageableTable
 * @param {string|HTMLElement} selector 
 */
function UserListTable (selector) {
    PageableTable.call(this, selector);
}
UserListTable.prototype = Object.create(PageableTable.prototype);
UserListTable.prototype.constructor = UserListTable;
/**
 * @method init
 */
UserListTable.prototype.init = function () {

};
/**
 * @method fetchTableData
 * @param {Object} filter 
 * @param {Object} sorter 
 */
UserListTable.prototype.fetchTableData = async function (filter, sorter) {
    var result = await service.fetchUserListTableData({
        
    });
};
export default UserListTable;