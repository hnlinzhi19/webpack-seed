// import {isArray} from 'lodash';
import '../scss/index.scss';



function App(opts) {
    var defaults = {};
    if (!(this instanceof App)) {
        return new App(opts);
    }
    this.config = $.extend(defaults, opts);
}

App();