/**
 * @file /src/components/UseRouteComponent.js
 * @author SubwaySamurai
 * @date 2020/11/25
 * @description 关联路由改变的高阶组件类
 */

import Component from '../../../../YUI个人组件库/yui-component/Component';

/**
 * @function UseRouteComponent
 * @param {Component} WrappedComponent
 * @returns {Component}
 */
function UseRouteComponent (WrappedComponent) {
    /**
     * @constructor 
     * @extends WrappedComponent
     * @param {string|HTMLElement} selector 
     */
    function WrapperComponent (selector) {
        WrappedComponent.call(this, selector);
    }
    WrapperComponent.prototype = Object.create(WrappedComponent.prototype);
    WrapperComponent.prototype.constructor = WrapperComponent;
    /**
     * @method handleRouteChange
     * @param {UIEvent} e 
     */
    WrapperComponent.prototype.handleRouteChange = function (e) {
        // 需要事件系统！！！
    };
    return WrapperComponent
}
export default UseRouteComponent;