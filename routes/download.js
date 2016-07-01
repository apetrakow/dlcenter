var express = require('express');
var router = express.Router();
var fs = require("fs");
var settings = require("../config").settings;


router.get("/download/:filename", function(req, res) {
    
    var opts = {
        root : settings.filesdir,
        dotfiles: "deny",
        headers : {
            "x-timestamp" : Date.now(),
            "x-sent" : true
        }
    };
    
    var filename = req.params.filename;

    res.sendfile(filename, opts, function(err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        } else { console.log("sent: ", filename); }
    });

});

module.exports = router;