/**
 * @file /src/pages/Home/index.js
 * @author SubwaySamurai
 * @date 2020/10/30
 * @description 首页
 */

import Page from '../../components/Page';

/**
 * @constructor HomePage
 * @extends Page
 * @param {string|HTMLElement} selector 
 */
function HomePage (selector) {
    Page.call(this, selector);

    this.state = {};
}
HomePage.prototype = Object.create(Page.prototype);
HomePage.prototype.constructor = HomePage;
/**
 * @method init
 */
HomePage.prototype.init = function () {

};
/**
 * @method init
 */
HomePage.prototype.render = function () {

};
export default HomePage;