/**
 * @file /src/components/Page.js
 * @author SubwaySamurai
 * @date 2020/11/5
 * @description 页面基类
 */

// import Component from './Component';
import Component from '../../../../../YUI个人组件库/yui-component/Component';

/**
 * @constructor 页面
 * @extends Component
 * @param {string|HTMLElement} selector
 */
function Page (selector) {
    Component.call(this, selector);
}
Page.prototype = Object.create(Component.prototype);
Page.prototype.constructor = Page;
/**
 * @method hide
 */
Page.prototype.hide = function () {
    this.rootElem.style.display = 'none';
};
/**
 * @method show
 */
Page.prototype.show = function () {
    this.rootELem.style.display = 'block';
};
export default Page;