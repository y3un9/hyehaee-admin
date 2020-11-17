/**
 * @file /src/components/SiderMenu/SiderMenu.js
 * @author SubwaySamurai
 * @date 2020/11/6
 * @description 侧边栏菜单
 */

import Component from '../Component';

/**
 * @constructor SiderMenu
 * @extends Component
 * @param {string|HTMLElement} selector 
 */
function SiderMenu (selector) {
    Component.call(this, selector);

}
SiderMenu.prototype = Object.create(Component.prototype);
SiderMenu.prototype.constructor = SiderMenu;
/**
 * @method init
 */
SiderMenu.prototype.init = function () {

};
export default SiderMenu;

