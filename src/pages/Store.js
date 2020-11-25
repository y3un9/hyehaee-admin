/**
 * @file /src/pages/Store.js
 * @author SubwaySamurai
 * @date 2020/10/30
 * @description 全局状态
 */
function GlobalStore (initialStore) {
    if (!initialStore || typeof initialStore !== 'object') {
        this.store = {};
        return;
    }
    this.store = initialStore;
}
/**
 * @method set
 * @param {string} key 
 * @returns {Object}
 */
GlobalStore.prototype.set = function (newStore) {
    if (!newStore || typeof newStore !== 'object') {
        return;
    }
    var oldStore = this.store;
    var changedStore = {};
    Object.keys(newStore).forEach(function (key, index, array) {
        if (typeof key !== 'number' || typeof key !== 'string') {
            return;
        }
        changedStore[key] = oldStore[key] = newStore[key];
    });
    return changedStore;
};
/**
 * @method get
 * @param {string} key
 * @returns {*} 
 */
GlobalStore.prototype.get = function (key) {
    if (typeof key !== 'number' || typeof key !== 'string') {
        return;
    }
    return this.store[key];
};
export default GlobalStore
