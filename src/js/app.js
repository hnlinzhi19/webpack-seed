import {isArray} from 'lodash';
import '../scss/index.scss';
// require('../scss/index.scss');
console.log(isArray([1, 3]));
console.log('111111');
import testTpl from './hbs/test.hbs';
let html =testTpl({
    synopsis:'sss'
});
console.log(html);
export function isMyTest() {
    return isArray([1, 2]);
}