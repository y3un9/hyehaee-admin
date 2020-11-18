/**
 * @file /src/pages/UserRegister/components/UserRegisterForm.js
 * @auhtor SubwaySamurai
 * @date 2020/11/18
 * @description 用户注册表单
 */

import Form from '../../../../../../YUI个人组件库/yui-component/Form';

/**
 * @constructor 用户注册表单
 * @extends Form
 * @param {string|HTMLElement} selector 
 */
function UserRegisterForm (selector) {
    Form.call(this, selector);

    /** @override */
    this.resetBtnElem = this.formElem.querySelector('button[type="reset"]');
    /** @override */
    this.submitBtnElem = this.formElem.querySelector('button[type="submit"]');
}
UserRegisterForm.prototype = Object.create(Form.prototype);
UserRegisterForm.prototype.constructor = UserRegisterForm;
/**
 * @override
 * @method init
 */
UserRegisterForm.prototype.init = function () {

};
/**
 * @override
 * @method submit
 */
UserRegisterForm.prototype.submit = function () {
    // TODO: 
};
export default UserRegisterForm;
