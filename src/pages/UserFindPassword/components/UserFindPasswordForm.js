/**
 * @file /src/pages/UserFindPassword/components/UserFindPasswordForm.js
 * @author SubwaySamurai
 * @date 2020/11/18
 * @description 用户找回密码表单
 */

import Form from '../../../../../../YUI个人组件库/yui-component/Form';

/**
 * @constructor 用户找回密码表单
 * @extends Form
 * @param {string|HTMLElement} selector 
 */
function UserFindPasswordForm (selector) {
    Form.call(this, selector);
}
UserFindPasswordForm.prototype = Object.create(Form.prototype);
UserFindPasswordForm.prototype.constructor = UserFindPasswordForm;
/**
 * @override
 * @method init
 */
UserFindPasswordForm.prototype.init = function () {

};
export default UserFindPasswordForm;
