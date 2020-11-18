/**
 * @file /src/components/SiderMenu/SiderMenu.js
 * @author SubwaySamurai
 * @date 2020/11/6
 * @description 侧边栏菜单
 */

import Menu from '../../../../../YUI个人组件库/yui-component/Menu';

/**
 * @constructor SiderMenu
 * @extends Menu
 * @param {string|HTMLElement} selector 
 */
function SiderMenu (selector) {
    Menu.call(this, selector);
}
SiderMenu.prototype = Object.create(Menu.prototype);
SiderMenu.prototype.constructor = SiderMenu;
export default SiderMenu;

