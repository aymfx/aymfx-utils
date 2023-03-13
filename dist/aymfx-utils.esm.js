console.log('----工具库----');
var random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { random };
