/**
 * @file /src/pages/Loading/index.js
 * @author SubwaySamurai
 * @date 2020/11/19
 * @description 载入页
 */

import Page from '../../components/Page';

/**
 * @constructor 载入页
 * @extends Page
 * @param {string|HTMLElement} selector 
 */
function LoadingPage (selector) {
    Page.call(this, selector);
}
LoadingPage.prototype = Object.create(Page.prototype);
LoadingPage.prototype.constructor = LoadingPage;
/**
 * @method init
 */
LoadingPage.prototype.init = function () {
    
};
/**
 * @method render
 */
LoadingPage.prototype.render = function () {

};
export default LoadingPage;
