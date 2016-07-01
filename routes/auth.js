var basicAuth = require("basic-auth");

module.exports.basicAuth = function(auth){
    
    return function(req, res, next) {
        var user = basicAuth(req);
        
        if(!user || user.name !== auth.user || user.pass !== auth.pass) {
            res.set("WWW-Authenticate", auth.realm);
            return res.send(401);
        }
        
        next();
    }
    
};