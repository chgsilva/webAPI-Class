
module.exports = {
    quotaHelper: quotaHelper,
    clientIp: clientIp,
    cacheKey: cacheKey,
    passwordCheck: passwordCheck,
};

function quotaHelper(req) {
    var key = req.swagger.params.name.value;
    console.log('Quota Key: '+key)
    return key;
}

function clientIp(req) {
    var key = req.connection.remoteAddress;
    console.log('clientIp Key: ' + key);
    return key;
}

function cacheKey(req) {
// This can check for a specific query parameter
    var key = req.swagger.params.name.value;
    console.log('Cache Key: '+key)
    return key;
}

function passwordCheck(username, password, cb) {
    var passwordOk = (username === 'cuuser' && password === 'gobuffs');
    cb(null, passwordOk);
}