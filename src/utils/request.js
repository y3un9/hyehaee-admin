/**
 * @file /src/utils/request.js
 * @author SubwaySamurai
 * @date 2020/10/30
 * @description 请求函数
 */

/**
 * @function get
 * @param {string} url 
 * @param {Object} data 
 */
export function get (url, data) {
    return fetch(url, {
        method: 'GET',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {

        }
    })
    .then(function (value) {
        return value;
    })
    .catch(function (reason) {
        return;
    });
}

/**
 * @function post
 * @param {string} url 
 * @param {Object} data 
 */
export function post (url, data) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
    .then(function (value) {
        return value.json();
    })
    .catch(function (reason) {
        return;
    });
}

/**
 * @function postJSON
 * @param {string} url 
 * @param {Object} data 
 */
export function postJSON (url, data) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
    .then(function (value) {
        return value.json();
    })
    .catch(function (reason) {
        return;
    });
}

/**
 * @function postUrlEncoded
 * @param {string} url 
 * @param {Object} data 
 */
export function postUrlEncoded (url, data) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    })
    .then(function (value) {
        return value.json();
    })
    .catch(function (reason) {
        return;
    });
}

/**
 * @function postMultipart
 * @param {string} url 
 * @param {Object} data 
 */
export function postMultipart (url, data) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(function (value) {
        return value.json();
    })
    .catch(function (reason) {
        return;
    });
}

/**
 * @function fetchRequest
 * @param {string} url 
 * @param {Object} data 
 */
export function fetchRequest (url, data) {
    return postJSON(url, data);
}

/**
 * @function fetchUpload
 * @param {string} url 
 * @param {Object} data 
 */
export function fetchUpload (url, data) {
    return postJSON(url, data);
}

/**
 * @function fetchDownload
 * @param {string} url 
 * @param {Object} data 
 */
export function fetchDownload (url, data) {
    return postJSON(url, data);
}