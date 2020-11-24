/**
 * @file /src/components/SideBar.js
 * @author SubwaySamurai
 * @date 2020/11/24
 * @description 侧边栏
 */

import Component from '../../../../../YUI个人组件库/yui-component/Component';

/**
 * @constructor SideBar
 * @extends Component
 * @param {string|HTMLElement} selector 
 */
function SideBar (selector) {
    Component.call(this, selector);
}
SideBar.prototype = Object.create(Component.prototype);
SideBar.prototype.constructor = SideBar;
/**
 * @method init
 */
SideBar.prototype.init = function () {

};
export default SideBar;