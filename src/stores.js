/**
 * @file /src/model.js
 * @author SubwaySamurai
 * @date 2020/10/30
 * @description 全局状态变量定义
 */

import constants from './utils/constants';

export var siderMenuData = [
    {
        key: 'home',
        icon: 'fa fa-file-text-o',
        title: '首页',
        href: `/home`
    },
    {
        key: 'userManage',
        icon: 'fa fa-file-text-o',
        title: '用户管理',
        href: `/user`
    }
];