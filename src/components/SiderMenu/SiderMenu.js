/**
 * @file /src/components/SiderMenu/SiderMenu.js
 * @author SubwaySamurai
 * @date 2020/11/6
 * @description 侧边栏菜单
 */

import Menu from '../../../../../YUI个人组件库/yui-component/Menu';

/**
 * @typedef {Object} MenuItem
 * @property {string|number} key
 * @property {string} [icon]
 * @property {string} title
 * @property {string} [href]
 * @property {Array<MenuItem>} [submenu]
 */

/**
 * @constructor 侧边栏菜单
 * @extends Menu
 * @param {string|HTMLElement} selector 
 */
function SiderMenu (selector) {
    Menu.call(this, selector);

    this.state = {
        menuItemClassName: 'menu-item',
        menuItemActiveClassName:  'active',
        menuItemDisabledClassName: 'disabled',
        menuItemLinkClassName: 'menu-link',
        submenuListClassName: 'sidermenu-submenu',
        menuItemSubmenuClassName: 'menu-item-submenu',
        menuItemSubmenuCollapsedClassName: 'collapsed',
        /** @type {Array<MenuItem>} */
        menuData: []
    };
}
SiderMenu.prototype = Object.create(Menu.prototype);
SiderMenu.prototype.constructor = SiderMenu;
/**
 * @override
 * @method handleMenuItemClick
 * @param {MouseEvent} e 
 * @param {HTMLElement} elem 
 */
SiderMenu.prototype.handleMenuItemClick = function (e, elem) {
    var target_elem = elem;
    // 检查菜单项下有没有子菜单
    if (target_elem.classList.contains(this.state.menuItemSubmenuClassName)) {
        // 将展开的子菜单折叠，折叠的子菜单展开
        target_elem.classList.toggle(this.state.menuItemSubmenuCollapsedClassName);
        return;
    }
    // 检查菜单项是否已禁用
    if (target_elem.classList.contains(this.state.menuItemDisabledClassName)) {
        return;
    }
    // 检查菜单项是否已激活
    if (target_elem.classList.contains(this.state.menuItemActiveClassName)) {
        return;
    }
    var menu_link_elem = target_elem.querySelector(`.${this.state.menuItemLinkClassName}`);
    // 检查菜单链接元素是否存在
    if (!menu_link_elem) {
        // FIXME: 
    }
    var menu_link_href = menu_link_elem.getAttribute('href');
    // 检查菜单链接元素的超链接地址是否存在
    if (!menu_link_href) {
        // FIXME:
    }
    app.router.push(menu_link_href);
};
/**
 * @override
 * @method renderMenuItem
 * @param {MenuItem} item 
 */
SiderMenu.prototype.renderMenuItem = function (item) {
    var self = this;
    var txt = '';
    // 判断菜单项下有没有子菜单
    if (Array.isArray(item.submenu)) {
        txt +=
        `
            <li class="${this.state.menuItemClassName} ${this.state.menuItemSubmenuClassName}">
                <a class="${this.state.menuItemLinkClassName}">
                    <i class="${item.icon}"></i>
                    <span>${item.title}</span>
                    <span class="menu-item-submenu-arrow">
                        <i class=" fa fa-angle-up"></i>
                    </span>
                </a>
                <ul class="${this.state.submenuListClassName}">
                    ${item.submenu.reduce(function (total, item, index, array) {
                        return total.concat(self.renderMenuItem(item));
                    }, '')}
                </ul>
            </li>
        `;
    } else {
        txt +=
        `
            <li class="${this.state.menuItemClassName}">
                <a class="${this.state.menuItemLinkClassName}" href="${item.href}">
                    <i class="${item.icon}"></i>
                    <span>${item.title}</span>
                </a>
            </li>
        `;
    }
    return txt;
};
export default SiderMenu;

