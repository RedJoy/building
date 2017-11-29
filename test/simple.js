const assert = require('assert');
const {add,mul} = require('../src/script/math');

// if(add(2,3) === 5) {
// 	console.log('add(2,3) === 5, OK');
// } else {
// 	console.log('add(2,3) === 5, ERR');
// }

assert.equal(add(2,3),5);  //使用node assert 测试