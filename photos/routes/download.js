var express = require('express');
var router = express.Router();
var Photos = require('../models/Photos');
var path = require('path');
var join = path.join;




exports.download = function (dir) {

    return function (req, res, next) {

 // Get the image id
        var id = req.params.id;

 // find the image in the DB
        Photos.findById(id,
            function (err, photo) {
                if (err) {
                    return next(err);
                }
    // get the image path
                var path = join(dir, photo.path);
    // Download the image name
                res.download(path, photo.name);
            })
    }
};