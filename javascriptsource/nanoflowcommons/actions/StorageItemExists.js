import AsyncStorage from '@react-native-community/async-storage';

// This file was generated by Mendix Studio Pro.
/**
 * Check if an item exists in a device storage, identified by a unique key. The value could be set by a Set Storage Item action.
 * @param {string} key - This field is required.
 * @returns {Promise.<boolean>}
 */
async function StorageItemExists(key) {
    // BEGIN USER CODE
    if (!key) {
        return Promise.reject(new Error("Input parameter 'Key' is required"));
    }
    return getItem(key).then(result => result !== null);
    function getItem(key) {
        if (navigator && navigator.product === "ReactNative") {
            return AsyncStorage.getItem(key);
        }
        if (window) {
            const value = window.localStorage.getItem(key);
            return Promise.resolve(value);
        }
        return Promise.reject(new Error("No storage API available"));
    }
    // END USER CODE
}

export { StorageItemExists };
