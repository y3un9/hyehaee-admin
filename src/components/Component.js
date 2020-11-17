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
    this.state = {};
    if (typeof selector === 'string') {
        this.rootElem = document.querySelector(selector);
    } else if (selector.nodeType === Node.ELEMENT_NODE) {
        this.rootElem = selector;
    } else {
        this.rootElem = null;
    }
}
Component.prototype = Object.create(null);
Component.prototype.constructor = Component;
/**
 * @method setState
 * @param {Object} newState
 * @returns {Object} 更新后的状态 
 */
Component.prototype.setState = function (newState) {
    if (!newState || typeof newState !== 'object') {
        return;
    }
    var oldState = this.State;
    Object.keys(newState).forEach(function (key, index, array) {
        if (oldState.hasOwnProperty(key)) {
            oldState[key] = newState[key];
        }
    });
    return this.state;
};
export default Component;