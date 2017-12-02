// const assert = require('assert');
const {add,mul} = require('../src/script/math');
const {should,expect, assert} = require('chai');

// if(add(2,3) === 5) {
// 	console.log('add(2,3) === 5, OK');
// } else {
// 	console.log('add(2,3) === 5, ERR');
// }



should();
add(2,3).should.equal(5);
expect(add(2,3)).to.be(5);
assert.equal(add(2,3),5);  //使用node assert 测试