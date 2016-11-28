/**
 * Created by jeezou on 28/11/16.
 */

var assert = require('assert');
var todo_utils = require('../todo_utils');

describe('#Error : Todo is null', function () {
    it('todo_utils._getAll should throw an error : todo is null', function () {
        todo_utils._init();
        assert.throws(function() {
            todo_utils._getAll((todoList) => { console.log(todoList); })
        }, /todo is null/);
    });

});


describe('#Get', function () {
    it('todo_utils._get(1) should return : A good thing', function () {
        todo_utils._init();
        todo_utils._new();
        todo_utils._add('A thing', (todoList) => {});
        todo_utils._add('A good thing', (todoList) => {});
        todo_utils._add('Another thing', (todoList) => {});

        todo_utils._get(1, (thing) => {
            assert.equal(thing, 'A good thing');
    });
    });
});




