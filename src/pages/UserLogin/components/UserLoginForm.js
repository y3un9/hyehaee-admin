/**
 * @file /src/pages/UserLogin/components/UserLoginForm.js
 * @author SubwaySamurai
 * @date 2020/11/18
 * @description 用户登录表单
 */

import Form from '../../../../../../YUI个人组件库/yui-component/Form';

/**
 * @constructor 用户登录表单
 * @extends Form
 * @param {string|HTMLElement} selector 
 */
function UserLoginForm (selector) {
    Form.call(this, selector);

    /** @override */
    this.submitBtnElem = this.formElem.querySelector('button[type="submit"]');
}
UserLoginForm.prototype = Object.create(Form.prototype);
UserLoginForm.prototype.constructor = UserLoginForm;
/**
 * @override
 * @method init
 */
UserLoginForm.prototype.init = function () {

};
/**
 * @override
 * @method submit
 */
UserLoginForm.prototype.submit = function () {

};
export default UserLoginForm;