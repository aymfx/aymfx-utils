(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.dutils = {}));
})(this, (function (exports) { 'use strict';

    console.log('----工具库----');
    var random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    exports.random = random;

}));
