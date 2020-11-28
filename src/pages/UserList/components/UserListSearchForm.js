/**
 * @file /src/pages/UserList/components/UserListSearchForm.js
 * @author SubwaySamurai
 * @date 2020/11/27
 * @description 用户列表搜索表单
 */

import Form from '../../../../../../YUI个人组件库/yui-component/Form';

function UserListSearchForm (selector) {
    Form.call(this, selector);
}
UserListSearchForm.prototype = Object.create(Form.prototype);
UserListSearchForm.prototype.constructor = UserListSearchForm;
/**
 * @override
 * @method submit
 */
UserListSearchForm.prototype.submit = function () {
    // TODO: 发起网络请求
};
export default UserListSearchForm;