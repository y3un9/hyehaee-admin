/**
 * @file /src/pages/UserLogin/components/UserLoginForm.js
 * @author SubwaySamurai
 * @date 2020/11/18
 * @description 用户登录表单
 */

import Form from '../../../../../../YUI个人组件库/yui-component/Form';

import * as service from '../../../services';

/**
 * @constructor 用户登录表单
 * @extends Form
 * @param {string|HTMLElement} selector 
 */
function UserLoginForm (selector) {
    Form.call(this, selector);

    /** @override */
    this.submitBtnElem = this.formElem.querySelector('button[type="submit"]');

    this.forgetPasswordBtnElem = this.formElem.querySelector('#UserForgetPasswordBtn');

    this.handleForgetPasswordBtnClick = this.handleForgetPasswordBtnClick.bind(this);
}
UserLoginForm.prototype = Object.create(Form.prototype);
UserLoginForm.prototype.constructor = UserLoginForm;
/**
 * @override
 * @method init
 */
UserLoginForm.prototype.init = function () {
    this.forgetPasswordBtnElem.addEventListener('click', this.handleForgetPasswordBtnClick);
};
/**
 * @override
 * @method submit
 */
UserLoginForm.prototype.submit = async function () {
    var form_data = this.getFormData();
    var result = await service.fetchUserLogin({
        username: form_data.username,
        password: form_data.password
    });
    console.log('form_data', form_data);
    if (!result ||
        result.auth !== 'true' ||
        result.status !== 'true') {
        // TODO:
    }
    // TODO: 
};
/**
 * 处理忘记密码按钮 click 事件
 * @method handleForgetPasswordBtnClick
 * @param {MouseEvent} e 
 */
UserLoginForm.prototype.handleForgetPasswordBtnClick = function (e) {
    // 跳转至找回密码页
    app.router.push('/user/findpassword');
};
export default UserLoginForm;