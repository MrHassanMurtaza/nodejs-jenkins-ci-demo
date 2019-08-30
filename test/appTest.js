const assert = require('chai').assert;

const app = require('../index')

sayHelloResult = app.sayHello();
addNumberResult = app.addNumbers(5, 5);

describe('App', function(){
    describe('sayHello()', function() {
        it('sayHello should return hello', function() {
            let result = app.sayHello()
            assert.equal(sayHelloResult, 'Hello')
        })

        it('sayHello should return string', function() {
            let result = app.sayHello()
            assert.typeOf(sayHelloResult, 'string')
        })
    });
    describe('addNumbers()', function(){
        it('addNumbers should be above than 5', function() {
            let result = app.addNumbers(5,5)
            assert.isAbove(addNumberResult, 5)
        })

        it('addNumbers should return type number', function() {
            let result = app.addNumbers(5,5)
            assert.typeOf(addNumberResult, 'number')
        })
    });
});
