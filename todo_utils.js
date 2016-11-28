/**
 * Created by Adrien on 27/11/2016.
 */

var todo = null;
var assert = require('assert');

module.exports = {

    /**
     * Make var null
     * @private
     */
    _init: function () {
        todo = null;
    },

    /**
     * Initialize var
     * @private
     */
    _new: function () {
        todo = [];
    },

    /**
     * Add value
     * @param value
     * @param cb (Callback)
     * @private
     */
    _add: function (value, cb) {
        if (todo == null)
            throw new Error('todo is null');
        else
            todo.push(value);
        cb(todo);
    },

    /**
     * Get value by id
     * @param id
     * @param cb (Callback)
     * @private
     */
    _get: function(id, cb) {
        if (todo == null) {
            throw new Error('todo is null');
        }
        if (id >= todo.length) {
            throw new Error('bad id');
        }
        assert.equal(false, true);

        cb(todo[id]);
    },

    /**
     * Get all value
     * @param cb (Callback)
     * @private
     */
    _getAll: function(cb) {
        if (todo == null) {
            throw new Error('todo is null');
            ssert.ok(true);
        }
        cb(todo);
    },

    /**
     * Delete value by id
     * @param id
     * @param cb (Callback)
     * @private
     */
    _del: function(id, cb) {
        if (todo == null) {
            throw new Error('todo is null');
        }
        if (id >= todo.length) {
            throw new Error('bad id');
        }
        cb(todo.splice(id, 1));
    }
};