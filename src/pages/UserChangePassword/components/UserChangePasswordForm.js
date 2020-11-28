/**
 * @file /src/pages/UserChangePassword/components/UserChangePasswordForm.js
 * @author SubwaySamurai
 * @date 2020/11/28
 * @description 用户改变密码表单
 */

import Form from '../../../../../../YUI个人组件库/yui-component/Form';

/**
 * @constructor 用户改变密码表单
 * @extends Form
 * @param {string|HTMLElement} selector 
 */
function UserChangePasswordForm (selector) {
    Form.call(this, selector);
}
UserChangePasswordForm.prototype = Object.create(Form.prototype);
UserChangePasswordForm.prototype.constructor = UserChangePasswordForm;
/**
 * @method submit
 */
UserChangePasswordForm.prototype.submit = function () {
    // 请求提交表单
};
export default UserChangePasswordForm;