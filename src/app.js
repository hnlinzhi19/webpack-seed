import {isArray} from 'lodash';
import style from './css/index.scss';
console.log(isArray([1, 3]));

export function isMyTest () {
    return isArray([1, 2]);
}