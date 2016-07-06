var express = require('express');
var router = express.Router();
var fs = require("fs");
var p = require("path");
var mime = require("mime");
var settings = require("../config").settings;


router.get('/', function(req, res, next) {
    
    var content = {
        pageTitle : "DL Center Main",
        title : settings.title,
        files : [],
        path : p.normalize(settings.filesdir)
    };
        
    fs.readdir(settings.filesdir, function (err, files) {
        if(err) throw new Error(err);
        
        var cleaned = [];
        files.forEach(function(filename) {
            if( ! /^\..*/.test(filename)) {
                cleaned.push({
                    name: filename,
                    type: mime.lookup(settings.filesdir + filename)
                });
            }
        });
        
        content.files = cleaned;
        
        res.render("index", content);
        
    });
    
});

module.exports = router;
