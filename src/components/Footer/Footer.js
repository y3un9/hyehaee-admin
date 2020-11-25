/**
 * @file /src/components/Footer/Footer.js
 * @author SubwaySamurai
 * @date 2020/11/25
 * @description 应用底栏
 */

import Component from '../../../../../YUI个人组件库/yui-component/Component';

/**
 * @constructor 应用底栏
 * @extends Component
 * @param {string|HTMLElement} selector 
 */
function Footer (selector) {
    Component.call(this, selector);
}
Footer.prototype = Object.create(Component.prototype);
Footer.prototype.constructor = Footer;
/**
 * @method init
 */
Footer.prototype.init = function () {

};
export default Footer;
