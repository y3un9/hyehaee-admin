/**
 * @file /src/index.js
 * @author SubwaySamurai
 * @date 2020/10/30
 * @description 主文件
 */

import App from './pages/App';
import { Router } from './pages/Router';
import Store from './pages/Store';

import routes from './routes';
import stores from './stores';
import constants from './utils/constants';

/** 运行环境 */
var runtime = constants.RUNTIME.DEV;
// 生产环境下移除所有控制台打印
(function () {
    if (runtime === constants.RUNTIME.PRD) {
        Object.keys(Window.console).forEach(function (key, index, array) {
            window.console[key] = function () {};
        });
    }
}());

/**
 * 处理文档 readyStateChange 事件
 * @function handleDocumentReadyStateChange
 * @param {UIEvent} e 
 */
function handleDocumentReadyStateChange (e) {
    // MDN 文档中 readyState 取值有 3 个，loading interactive complete，其中 interactive 之后会触发 domContentLoaded，domContentLoaded 触发之后会触发 complete
    console.log('document.readyState', document.readyState);
    if (document.readyState === 'loading') {
        // document 仍在加载
    } else if (document.readyState === 'interactive') {
        // 文档已被解析，“正在加载”状态结束，但是诸如图像，样式表和框架之类的子资源仍在加载
    } else if (document.readyStae === 'complete') {
        // 文档和所有子资源已完成加载。表示 load 状态的事件即将触发
    } else {
        //  不会执行这里
    }
}

/**
 * 处理文档 DOMContentLoaded 事件
 * @function handleDocumentDOMContentLoaded
 * @param {UIEvent} e
 */
async function handleDocumentDOMContentLoaded (e) {
    document.addEventListener('visibilityChange', handleDocumentVisibilityChange);
    window.addEventListener('load', handleWindowLoad);
    window.addEventListener('beforeunload', handleWindowBeforeUnload);
    window.addEventListener('unload', handleWindowUnload);
    window.addEventListener('resize', handleWindowResize);
    // 先显示应用加载页面，再去做应用使用前动作
    // TODO: 如何显示加载页面，需不需要路由跳转？？？在这里一共有几种情况：
    // 1. 用户访问网站时 pathname 是路由表中其中一个路由地址
    // 2. 
    var result = await app.checkAuth();
    // 检查用户鉴权是否通过
    if (result) {
        // 跳转至默认路由
        app.router.push();
    } else {
        // 跳转至登录路由
        app.router.push('/user/login');
    }
}

/**
 * 处理文档 visibilityChange 事件
 * @function handleDocumentVisibilityChange
 * @param {UIEvent} e 
 */
function handleDocumentVisibilityChange (e) {
    // MDN 文档中 visibilityState 取值有 4 个，visible hidden prerender unloaded，实测 chrome 85 浏览器中只能触发 visible 和 hidden
    console.log('document.visibilityState', document.visibilityState);
    if (document.visibilityState === 'hidden') {
        // 文档不可见，在这里做一些事情，比如暂停轮询获取数据 暂停动画
    } else if (document.visibilityState === 'visible') {
        // 文档可见，在这里做一些事情，比如重新开始轮询获取数据 重新开始动画
    } else if (document.visibilityState === 'prerender') {
        // 不会执行这里，文档只会从 prerender 转换为其它状态，不会从其它状态转换为 prerender
    } else if (document.visibilityState === 'unloaded') {
        // 不会执行这里
    } else {
        // 不会执行这里，document.visibilityState 的取值只有上述 4 种
    }
}

/**
 * 处理窗口 load 事件
 * @function handleWindowLoad
 * @param {UIEvent} e 
 */
function handleWindowLoad (e) {
    
}

/**
 * 处理窗口 resize 事件
 * @function handleWindowResize
 * @param {UIEvent} e 
 */
function handleWindowResize (e) {
    // TODO: 如果需要做一些计算
}

/**
 * 处理窗口 beforeunload 事件
 * @function handleWindowBeforeUnload
 * @param {UIEvent} e 
 */
function handleWindowBeforeUnload (e) {
    e.preventDefault();
    // TODO: 如果需要用户确认是否离开页面 
}

/**
 * 处理窗口 unload 事件
 * @function handleWindowUnload
 * @param {UIEvent} e 
 */
function handleWindowUnload (e) {
    app.exit();
}

// 入口
document.addEventListener('readystatechange', handleDocumentReadyStateChange , )
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleDocumentDOMContentLoaded);
} else {
    handleDocumentDOMContentLoaded();
}

/** 应用实例 */
window.app = new App('#App');
window.appRouter = app.router = new Router(routes);
window.globalStore = new Store(stores);