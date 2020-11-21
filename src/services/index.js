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
 * @property {Object} user
 */
export async function fetchUserLogin (data) {
    var map = {
        action: 'USER_LOGIN',
        body: data,
        user: globalStore.user.uid
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
    var map = {
        action: 'USER_REGISTER',
        body: data,
        user: globalStore.user.uid
    };
    return await request.postJSON(app.state.requestUrl, map);
}
