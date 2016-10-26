import CONSTANT from '../constant';

module.exports = {
    save: function(key, value, storage_type, is_stringify) {
        console.log(key, value, storage_type, is_stringify);
        if (isStringify) {
            value = JSON.stringify(value);
        }

        if (storage_type === CONSTANT.LOCAL_STORAGE) {
            window.localStorage.setItem(key, value);
        } else {
            window.sessionStorage.setItem(key, value);
        }
    },

    fetch: function(key, storage_type, is_parse) {
        console.log(key, storage_type, is_parse);
        try {
            if (!key) throw "empty key"
        } catch (error) {
            console.erro(error);
        }

        var data = (storage_type === CONSTANT.LOCAL_STORAGE) ? window.localStorage.getItem(key) : window.sessionStorage.getItem(key);

        var value = null;

        if (data) {
            if (is_parse) {
                value = JSON.parse(data);
            } else {
                value = data;
            }
        }

        return value;
    },

    clear: function(key, storage_type) {
        if (storage_type === CONSTANT.LOCAL_STORAGE) {
            window.localStorage.removeItem(key);
        } else {
            window.sessionStorage.removeItem(key);
        }
    },

    clearLocal: function() {
        window.localStorage.clear();
    },

    clearSession: function() {
        window.sessionStorage.clear();
    },

    clearAll: function() {
        this.clearLocal();
        this.clearSession();
    }
}