//
// Create the mongooseDB Model
//
// Mongoose provides all the CRUD methods :
//    Photo.create
//    Photo.update
//    Photo.remove
//    Photo.find
//
//  on the model.
var mongoose = require('mongoose')

//Init the photos array אתחול מערכת התמונות 
// var photos = [];

//add photos tl the array
//each photos hes its name and path (it can be local images or url from the internet)
// photos.push({
//     name: 'Event Loop (png)',
//     path: 'eventLoop.png'
// });
// photos.push({
//     name: 'Express (jpg)',
//     path: 'express.jpg'
// });
// photos.push({
//     name: 'angulr-node-mongoDB (png)',
//     path: 'angulr-node-mongoDB.png'
// });
// photos.push({
//     name: 'nodejs(jpg)',
//     path: 'nodejs.jpg'
// });

/**
 * This method will render out the images
 * @param req - The request object
 * @param res - The response object
 * 
 */
// exports.list = function(req, res,next){
//     res.render('photos',{
//             title: 'Photos',
//             photos: photos
//     })
// }
// new Model({
//     name: 'Event Loop (png)',
//     path: 'eventLoop.png'
// }).save();

// new Model({
//     name: 'Express (jpg)',
//     path: 'express.jpg'
// }).save();


// Set up connection to mongodb on localhost and use photo_app as  database
var db = mongoose.connect('mongodb://127.0.0.1/photo_app',
    function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Connected mongoDB!!!!!");
        }
    });

// Define the Photos schema
var schema = new mongoose.Schema({
    name: String,
    path: String
});

// Export the model
var Model = mongoose.model('Photo', schema);
module.exports = Model;

// new Model({
//     name: 'Express (jpg)',
//     path: 'express.jpg'
// }).save();

// new Model({
//     name: 'nodejs (jpg)',
//     path: 'nodejs.jpg'
// }).save();
// new Model({
//     name: 'angulr-node-mongoDB (png)',
//     path: 'angulr-node-mongoDB.png'
// }).save();
// new Model({
//     name: 'eventLoop (png)',
//     path: 'eventLoop.png'
// }).save();
