/**
 * @file /src/components/Header/Header.js
 * @author SubwaySamurai
 * @date 2020/11/25
 * @description 应用顶栏
 */

import Component from '../../../../../YUI个人组件库/yui-component/Component';

/**
 * @constructor 应用顶栏
 * @extends Component
 * @param {string|HTMLElement} selector 
 */
function Header (selector) {
    Component.call(this, selector);
}
Header.prototype = Object.create(Component);
Header.prototype.constructor = Header;
/**
 * @method init
 */
Header.prototype.init = function () {

};
export default Header;