import {isArray} from 'lodash';
import '../scss/index.scss';
// require('../scss/index.scss');
console.log(isArray([1, 3]));
console.log('111111');
// import testTpl from './tpl/test.tpl';
/**
 * 必须使用require 否则会报错
 */
var testTpl = require('./tpl/test.tpl');
let html =testTpl({
    synopsis:'sss'
});
document.getElementById('test').innerHTML = html;
console.log(html); 
export function isMyTest() {
    return isArray([1, 2]);
}