/**
 * @file /src/model.js
 * @author SubwaySamurai
 * @date 2020/10/30
 * @description 全局状态变量定义
 */

import constant from './utils/constant';

export var siderMenuData = [
    {
        key: 'home',
        icon: 'fa fa-file-text-o',
        title: '首页',
        href: `${constant.ROUTE_PREFIX}/home`
    }
];