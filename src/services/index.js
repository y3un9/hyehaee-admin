/**
 * @file /src/service.js
 * @author SubwaySamurai
 * @date 2020/11/18
 * @description 请求服务
 */

import * as request from '../utils/request';

/**
 * @typedef {Object} ReqData_UIP
 * @property {string} action
 * @property {Object} body
 * @property {string} user
 */
/**
 * @typedef {Object} RespData_UIP
 * @property {'true'|'false'} auth
 * @property {'true'|'false'} status
 * @property {*} ret
 * @property {string} msg
 */

/**
 * @author SubwaySamurai
 * @date 2020/11/25
 * @description 请求用户鉴权
 * 
 * @async
 * @function fetchUserAuth
 * @param {ReqData_USER_AUTH} data
 * @returns {Promise<RespData_USER_AUTH>}
 * 
 * @typedef {Object} ReqData_USER_AUTH
 * @property {string} session
 * 
 * @typedef {Object} RespData_USER_AUTH
 * @property {RespRet_USER_AUTH} ret
 * 
 * @typedef {Object} RespRet_USER_AUTH
 * @property {string} uid
 */
export async function fetchUserAuth (data) {
    var action = 'USER_AUTH'
    var map = {
        action: action,
        body: data,
        user: null
    };
    return await request.postJSON(app.state.requestUrl, map);
}

/**
 * @author SubwaySamurai
 * @date 2020/11/25
 * @description 请求获取应用数据
 * 
 * @async
 * @function fetchAppData
 * @param {ReqData_APP_DATA} data 
 * @returns {Promise<RespData_APP_DATA>}
 * 
 * @typedef {Object} ReqData_APP_DATA
 * 
 * @typedef {Object} RespData_APP_DATA
 * @property {RespRet_APP_DATA} ret
 * 
 * @typedef {Object} RespRet_APP_DATA
 */
export async function fetchAppData (data) {
    var action = 'APP_DATA';
    var map = {
        action: action,
        body: data,
        user: globalStore.user.uid
    };
    return await request.postJSON(app.state.requestUrl, map);
}

/**
 * @author SubwaySamurai
 * @date 2020/11/28
 * @description 请求发送登录短信验证码
 * 
 * @function fetchVerfCodeSend
 * @param {ReqData_SEND_LOGIN_VERF_CODE} data 
 * @returns {Promise<RespData_SEND_LOGIN_VERF_CODE>} 
 * 
 * @typedef {Object} ReqData_SEND_LOGIN_VERF_CODE
 * @property {string} phone 
 * 
 * @typedef {Object} RespData_SEND_LOGIN_VERF_CODE
 * @property {RespRet_SEND_LOGIN_VERF_CODE} ret
 * 
 * @typedef {Object} RespRet_SEND_LOGIN_VERF_CODE
 */
export async function fetchVerfCodeSend (data) {
    var action = 'SEND_LOGIN_VERF_CODE';
    var map = {
        action: action,
        body: data,
        user: null
    };
    return await request.postJSON(app.state.requestUrl, map);
}

/**
 * @author SubwaySamurai
 * @date 2020/11/28
 * @description 请求短信验证码登录
 * 
 * @function fetchVerfCodeLogin
 * @param {ReqData_VERF_CODE_LOGIN} data 
 * @returns {Promise<RespData_VERF_CODE_LOGIN>}
 * 
 * @typedef {Object} ReqData_VERF_CODE_LOGIN
 * @property {string} phone
 * @property {string} code 
 * 
 * @typedef {Object} RespData_VERF_CODE_LOGIN
 * @property {RespRet_VERF_CODE_LOGIN} ret
 * 
 * @typedef {Object} RespRet_VERF_CODE_LOGIN
 * @property {string} uid
 */
export async function fetchVerfCodeLogin (data) {
    var action = 'VERF_CODE_LOGIN';
    var map = {
        action: action,
        body: data,
        user: null
    };
    return await request.postJSON(app.state.requestUrl, map);
}

/**
 * @author SubwaySamurai
 * @date 2020/11/18
 * @description 请求用户登录
 * 
 * @async
 * @function fetchUserLogin
 * @param {ReqData_USER_LOGIN} data 
 * @returns {Promise<RespData_USER_LOGIN>}
 * 
 * @typedef {Object} ReqData_USER_LOGIN
 * @property {string} username
 * @property {string} password
 * 
 * @typedef {Object} RespData_USER_LOGIN
 * @property {RespRet_USER_LOGIN} ret
 * 
 * @typedef {Object} RespRet_USER_LOGIN
 * @property {string} uid
 */
export async function fetchUserLogin (data) {
    var action = 'USER_LOGIN';
    var map = {
        action: action,
        body: data,
        user: null
    };
    return await request.postJSON(app.state.requestUrl, map);
}

/**
 * @author SubwaySamurai
 * @date 2020/11/20
 * @description 请求用户注册
 * 
 * @async
 * @function fetchUserRegister
 * @param {ReqData_USER_REGISTER} data
 * @returns {Promise<RespData_USER_REGISTER>}
 * 
 * @typedef {Object} ReqData_USER_REGISTER
 * @property {string} username
 * @property {string} password
 * 
 * @typedef {Object} RespData_USER_REGISTER
 * @property {RespRet_USER_REGISTER} ret
 * 
 * @typedef {Object} RespRet_USER_REGISTER  
 */
export async function fetchUserRegister (data) {
    var action = 'USER_REGISTER';
    var map = {
        action: action,
        body: data,
        user: globalStore.user.uid
    };
    return await request.postJSON(app.state.requestUrl, map);
}

/**
 * @author SubwaySamurai
 * @date 2020/11/28
 * @description 请求发送更改密码邮件
 * 
 * @function fetchSendChangePasswordEmail
 * @param {ReqData_SEND_CHANGE_PASSWORD_EMAIL} data 
 * @returns {Promise<RespData_SEND_CHANGE_PASSWORD_EMAIL>}
 * 
 * @typedef ReqData_SEND_CHANGE_PASSWORD_EMAIL
 * 
 * @typedef RespData_SEND_CHANGE_PASSWORD_EMAIL
 * @property {RespRet_SEND_CHANGE_PASSWORD_EMAIL} ret
 * 
 * @typedef RespRet_SEND_CHANGE_PASSWORD_EMAIL
 */
export async function fetchSendChangePasswordEmail (data) {
    var action = 'SEND_CHANGE_PASSWORD_EMAIL';
    var map = {
        action: action,
        body: data,
        user: null
    };
    return await request.postJSON(app.state.requestUrl, map);
}

/**
 * @author SubwaySamurai
 * @date 2020/11/28
 * @description 请求更改密码
 * 
 * @function fetchChangePassword
 * @param {ReqData_CHANGE_PASSWORD} data
 * @returns {Promise<RespData_CHANGE_PASSWORD>} 
 * 
 * @typedef ReqData_CHANGE_PASSWORD
 * @property {string} oldPwd
 * @property {string} newPwd
 * 
 * @typedef RespData_CHANGE_PASSWORD
 * @property {RespRet_CHANGE_PASSWORD} ret
 * 
 * @typedef RespRet_CHANGE_PASSWORD
 */
export async function fetchChangePassword (data) {
    var action = 'CHANGE_PASSWORD';
    var map = {
        action: action,
        body: data,
        user: globalStore.user.uid
    };
    return await request.postJSON(app.state.requestUrl, map);
}

/**
 * @author SubwaySamurai
 * @date 2020/11/28
 * @description 请求获取用户列表页面数据
 * 
 * @async
 * @function fetchUserListPageData
 * @param {ReqData_USER_LIST_PAGE_DATA} data
 * @returns {Promise<RespData_USER_LIST_PAGE_DATA>} 
 * 
 * @typedef {Object} ReqData_USER_LIST_PAGE_DATA
 * 
 * @typedef {object} RespData_USER_LIST_PAGE_DATA
 * @property {RespRet_USER_LIST_PAGE_DATA} ret
 * 
 * @typedef {Object} RespRet_USER_LIST_PAGE_DATA
 */
export async function fetchUserListPageData (data) {
    var action = 'USER_LIST_PAGE_DATA';
    var map = {
        action: action,
        body: data,
        user: globalStore.user.uid
    };
    return await request.postJSON(app.state.requestUrl, map);
}

/**
 * @author SubwaySamurai
 * @date 2020/11/28
 * @description 请求获取用户列表表格数据
 * 
 * @function fetchUserListTableData
 * @param {ReqData_USER_LIST_TABLE_DATA} data
 * @returns {Promise<RespData_USER_LIST_TABLE_DATA>}
 * 
 * @typedef {Object} ReqData_USER_LIST_TABLE_DATA 
 * @property {number} page
 * @property {number} pageSize
 * @property {Object} filter
 * @property {Object} sorter
 * 
 * @typedef {Object} RespData_USER_LIST_TABLE_DATA
 * @property {RespRet_USER_LIST_TABLE_DATA}
 * 
 * @typedef {Object} RespRet_USER_LIST_TABLE_DATA
 */
export async function fetchUserListTableData (data) {
    var action = 'USER_LIST_TABLE_DATA';
    var map = {
        action: action,
        body: data,
        user: globalStore.user.uid
    };
    return await request.postJSON(app.state.requestUrl, map);
}

