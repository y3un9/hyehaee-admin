/**
 * @file /src/components/Component.js
 * @author SubwaySamurai
 * @date 2020/10/30
 * @description 组件基类
 */

/**
 * @constructor 组件基类
 * @extends null
 * @param {string|HTMLElement} [selector] 
 */
function Component (selector) {
    /** @type {Object} 组件状态 */
    this.state = {};
    /** @type {HTMLElement} 组件元素DOM对象 */
    this.rootElem = null;
    if (typeof selector === 'string') {
        this.rootElem = document.querySelector(selector);
    } else if (selector && selector.nodeType === Node.ELEMENT_NODE) {
        this.rootElem = selector;
    }
}
Component.prototype = Object.create(null);
Component.prototype.constructor = Component;
/**
 * 设置组件状态
 * @method setState
 * @param {Object} newState
 * @returns {Object} 更新后的状态 
 */
Component.prototype.setState = function (newState) {
    if (!newState || typeof newState !== 'object') {
        return;
    }
    var oldState = this.state;
    Object.keys(newState).forEach(function (key, index, array) {
        if (oldState.hasOwnProperty(key)) {
            oldState[key] = newState[key];
        }
    });
    return this.state;
};
export default Component;