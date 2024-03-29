/**
 * @file /src/pages/Router.js
 * @author SubwaySamurai
 * @date 2020/10/30
 * @description 路由相关
 */

import Component from '../../../../YUI个人组件库/yui-component/Component';

import util from '../utils/util';

/**
 * @typedef {Object} RouteInterface
 * @property {Component} component
 * @property {string} path 
 */

/**
 * @constructor 路由
 * @param {RouteInterface} route
 */
function Route (route) {
    this.component = route.component;
    this.path = route.path;
}

/**
 * @constructor 路由器
 * @param {{ prefix: string, routeList: Array<RouteInterface> }} routes
 */
function Router (routes) {
    this.routePrefix = routes.prefix;
    this.routeList = routes.routeList;
    
    this.routes = this.routeList.map(
        /** @this Router */
        function (item, index, array) {
            return new Route({
                component: item.component,
                path: this.routePrefix + item.path
            });
        }.bind(this)
    );
}
Router.prototype = Object.create(null);
Router.prototype.constructor = Router;
/**
 * 创建新浏览器历史
 * @method push
 * @param {*} data 
 * @param {string} title 
 * @param {string} url 
 */
Router.prototype.push = function (data, title, url) {
    console.log('history pushState', 'data', data, 'title', title, 'url', url);
    window.history.pushState(data, title, url);
    this.handle();
};
/**
 * 替换当前浏览器历史
 * @method replace
 * @param {*} data 
 * @param {string} title 
 * @param {string} url 
 */
Router.prototype.replace = function (data, title, url) {
    console.log('history replaceState', 'data', data, 'title', title, 'url', url);
    window.history.replaceState(data, title, url);
    this.handle();
}
/**
 * 获取浏览器地址栏中的视图路径
 * @method getPath
 * @returns {string}
 */
Router.prototype.getPath = function () {
    var pathname = window.location.pathname;
    console.log('pathname', pathname);
    return pathname;
};
/**
 * 获取浏览器地址栏中的哈希定位符
 * @method getHash
 * @returns {string}
 */
Router.prototype.getHash = function () {
    var hash = window.location.hash;
    console.log('hash', hash);
    if (!hash) {
        return;
    }
    var arr_hash = hash.split('#');
    console.log('arr_hash', arr_hash);
    if (!arr_hash[1]) {
        return '';
    }
    var ret = arr_hash[1];
    return ret;
};
/**
 * 获取浏览器地址栏中的查询参数
 * @method getSearch
 * @returns {Object}
 */
Router.prototype.getSearch = function () {
    var search = window.location.search;
    console.log('search', search);
    ''
    '?'
    '?asd=qwe'
    var arr_search = search.split('?');
    if (arr_search.length === 1) { // 地址栏没有查询参数或只有?后面没数据 ['']
        return {};
    }
    '?asd=qwe'
    '?asd=qwe&zxc=jkl'
    console.log('arr_search', arr_search);
    var arr_search = arr_search[1].split('&');
    console.log('arr_search', arr_search);
    if (arr_search.length === 0) {
        return {};
    }
    var ret = {};
    arr_search.forEach(function (item) {
        var arr_item = item.split('=');
        if (arr_item.length === 1) { // 如果
            return;
        }
        ret[arr_item[0].trim()] = arr_item[1].trim();
    });
    // {
    //     asd: 'qwe',
    //     zxc: 'jkl'
    // }
    return ret;
};
/**
 * 获取地址栏路径进行页面切换
 * @method handle
 */
Router.prototype.handle = function () {
    // 隐藏所有视图
    this.routeList.forEach(function (item) {
        item.component.hide();
    });

    /** 获取当前浏览器地址栏路径 /asd/zxc */
    var current_path = this.getPath();
    console.log('current_path', current_path);

    // // 对菜单进行高亮
    // var menu_item_elems = app.menu.getMenuItemElems();
    // Array.prototype.forEach.call(menu_item_elems, function (elem, index, array) {
    //     var menu_link_elem = elem.querySelector(`.${app.menu.state.menuItemLinkClassName}`);
    //     if (menu_link_elem.getAttribute('href') !== current_path) {
    //         elem.classList.remove(app.menu.state.menuItemActiveClassName);
    //         return;
    //     }
    //     elem.classList.add(app.menu.state.menuItemActiveClassName);
    // });

    // var breadcrumb_menu_item_array = [];
    // // 找出构成面包屑的菜单元素组成数组
    // // 可以直接通过active的menu-item拿到面包屑，妙啊，不用从菜单根元素一个一个向下查找了
    // var menu_item_active_elem = app.menu.getActiveMenuItemElem();
    // console.log('menu_item_active_elem', menu_item_active_elem);
    // if (!menu_item_active_elem) { // 没有高亮菜单子项，可能当前显示的视图是登录视图或错误视图
    //     document.getElementById('Breadcrumb').innerHTML = '';
    //     return;
    // }
    // breadcrumb_menu_item_array.unshift(menu_item_active_elem);
    // var menu_item_current_elem = menu_item_active_elem;
    // while (menu_item_current_elem.parentElement.id !== menu.rootId) {
    //     menu_item_current_elem = menu_item_current_elem.parentElement;
    //     console.log('menu_item_current_elem', menu_item_current_elem);
    //     if (menu_item_current_elem.tagName !== 'LI') {
    //         continue;
    //     }
    //     breadcrumb_menu_item_array.unshift(menu_item_current_elem);
    // }
    // console.log('breadcrumb_menu_item_array', breadcrumb_menu_item_array);
    // var txt = '';
    // breadcrumb_menu_item_array.forEach(function (item, index) {
    //     var menu_link_elem = item.querySelector('.menu-link');
    //     var menu_link_icon_class = menu_link_elem.querySelector('i').className;
    //     console.log('menu_link_icon_class', menu_link_icon_class);
    //     var menu_link_text = menu_link_elem.querySelector('span').innerHTML;
    //     console.log('menu_link_text', menu_link_text);
    //     var menu_link_href = menu_link_elem.getAttribute('href');
    //     console.log('menu_link_href', menu_link_href);
    //     // 数组的最后一个是当前视图，不需要链接
    //     if (index === breadcrumb_menu_item_array.length - 1) {
    //         txt +=
    //             '<span class="breadcrumb-item">' +
    //                 '<span>' +
    //                     '<i class="' + menu_link_icon_class + '"></i>' +
    //                     menu_link_text +
    //                 '</span>' +
    //             '</span>';
    //         return;
    //     }
    //     // 没有href属性，代表这个菜单子项有子菜单
    //     if (!menu_link_href) {
    //         txt +=
    //             '<span class="breadcrumb-item">' +
    //                 '<span>' +
    //                     '<i class="' + menu_link_icon_class + '"></i>' +
    //                     menu_link_text +
    //                 '</span>' +
    //             '</span>';
    //         return;
    //     }
    //     // 有href属性，代表这个菜单子项无子菜单
    //     txt +=
    //         '<span class="breadcrumb-item">' +
    //             '<a href="' + menu_link_href + '">' +
    //                 '<i class="' + menu_link_icon_class + '"></i>' +
    //                 menu_link_text +
    //             '</a>' +
    //         '</span>';
    // });
    // document.getElementById('Breadcrumb').innerHTML = txt;

    // 遍历查找目标路由
    console.log('routes', this.routes);
    var target_route = util.getTargetItemFromArrayByKey(this.routes, current_path, 'path');
    console.log('target_route', target_route);
    if (target_route) {
        target_route.component.show();
        target_route.component.render();
    } else {
        // TODO: 没有匹配到路由应该做些啥
    }
};

export { Router, Route };