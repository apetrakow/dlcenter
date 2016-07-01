var express = require('express');
var router = express.Router();
var fs = require("fs");
var p = require("path");
var settings = require("../config").settings;

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    var content = {
        pageTitle : "DL Center Main",
        title : "DL Dir",
        files : [],
        path : p.normalize(settings.filesdir)
    };
        
    fs.readdir(settings.filesdir, function (err, files) {
        if(err) throw new Error(err);
        
        content.files = files;
        
        res.render("index", content);
        
    });
    
    
});

module.exports = router;
