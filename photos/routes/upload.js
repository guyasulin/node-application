// var express = require('express');
// var router = express.Router();


// router.get('/', function(req, res, next) {
//   res.render('upload');
// });


// router.post('/', function(req, res, next) {
//     console.log(req.file);
//     console.log(req.file.originalname);
//     res.send('upload');
//   });
// module.exports = router;


var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var join = path.join;
var model = require('../models/Photos');




router.get('/', function (req, res, next) {
  res.render('upload');
});

router.post('/', function (req, res, next) {
  // console.log(req.file);
  // console.log(req.file.originalname);
  var img = req.file, // Get the images - if any
    name = img.originalname, // Get the image name
    path = join(__dirname + '/../public/images/', img.originalname); // Set the path where to store the image = dir+imgName

  // Use the fs module to create and save the file
  fs.rename(
    img.path, // Old path
    path, // New path
    function (err) { // callback

      // Check to see if there wa any error while trying to move the image around
      if (err) {
        return next(err);
      }

      // Add the Photo to our DB Modal
      model.create({
          name: name,
          path: name
        },
        function (err) {
          // If there was an error while trying to add the image to the model
          // "skip" to the next middleware
          if (err) {
            return next(err);
          }
          // Display the images gallery page
          res.redirect('/photos');
        });
    });
});


module.exports = router;