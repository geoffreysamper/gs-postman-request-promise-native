'use strict';

var configure = require('gs-postman-request-promise-core/configure/request2'),
    stealthyRequire = require('stealthy-require');

// Load Request freshly - so that users can require an unaltered request instance!
var request = stealthyRequire(require.cache, function () {
    return require('postman-request');
},
function () {
    require('tough-cookie');
}, module);


configure({
    request: request,
    PromiseImpl: Promise,
    expose: [
        'then',
        'catch',
        'promise'
    ]
});


module.exports = request;
