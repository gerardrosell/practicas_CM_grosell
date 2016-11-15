/**
 * Created by boyander on 11/10/16.
 */

var express = require('express');
var Item = require('./Item.js').Item;
var app = express();

// Configure jade to be our rendering engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Enable boostrap from npm as a served static directory
app.use("/libs",express.static('node_modules/bootstrap/dist'));

// Our CSS and JS files
app.use("/public",express.static('public'));



// Use 500px API to get random pictures for our products
//var API500px = require('500px');
//var api500px = new API500px("YecP85RjzG08DN0MqvgFa0N780dNaDmJX6iTPbYp");

//code raplace #1
var pics = [
	new Item("http://www.bmw.es/dam/brandBM/common/newvehicles/m-series/m2coupe/2015/gallery/m2-1920x1200-wallpaper-01.jpg.resource.1443019904378.jpg","http://www.bmw.es/home/vehiculos/M/m2-coupe/2015/presentacion.html",'BMW M2', "62899.99"),
	new Item("http://www.bmw.es/dam/brandBM/common/newvehicles/m-series/m3-sedan/2014/gallery/f80-02-1900x1200.jpg.resource.1391525794882.jpg","http://www.bmw.es/home/vehiculos/M/m2-coupe/2015/presentacion.html",'BMW M3', "62899.99"),
	new Item("http://www.bmw.es/dam/brandBM/common/newvehicles/m-series/m4-coupe/2014/gallery/m4-gts-1920x1200-03.jpg.resource.1443001488957.jpg","http://www.bmw.es/home/vehiculos/M/m2-coupe/2015/presentacion.html",'BMW M4 coupé', "62899.99"),
	new Item("http://www.bmw.es/dam/brandBM/common/newvehicles/m-series/m5-sedan/2013/gallery/BMW_M5_Sedan_Wallpaper_1920x1200_06.jpg.resource.1373899068283.jpg","http://www.bmw.es/home/vehiculos/M/m2-coupe/2015/presentacion.html",'BMW M5', "62899.99"),
	new Item("http://www.bmw.es/dam/brandBM/common/newvehicles/m-series/m6-grancoupe/2015/gallery/06-1920x1200.jpg.resource.1421937510526.jpg","http://www.bmw.es/home/vehiculos/M/m2-coupe/2015/presentacion.html",'BMW M6', "62899.99"),
	new Item("http://www.bmw.es/dam/brandBM/common/newvehicles/m-series/x5m/2014/images-and-videos/1920x1200_03.jpg.resource.1470324131286.jpg","http://www.bmw.es/home/vehiculos/M/m2-coupe/2015/presentacion.html",'BMW X5 M', "62899.99"),
	new Item("http://www.bmw.es/dam/brandBM/common/newvehicles/m-series/x6m/2014/images-and-videos/X6M-1920x1200-02.jpg.resource.1470210502292.jpg","http://www.bmw.es/home/vehiculos/M/m2-coupe/2015/presentacion.html",'BMW X6 M', "62899.99"),
	new Item("http://www.bmw.es/dam/brandBM/common/newvehicles/z-series/Roadster/2012/gallery/01-1920x1200-bmw-e89.jpg.resource.1373899686551.jpg","http://www.bmw.es/home/vehiculos/M/m2-coupe/2015/presentacion.html",'BMW Z4', "62899.99")
	
];


/*
//code replaced #1
var pics = [];
api500px.photos.getPopular({'sort': 'created_at', 'rpp': '10','image_size':200},  function(error, results) {
    // Do something
    pics = results.photos.map(function(a){
        // Compose object to be used in show items template
        return new Item(a.image_url);
    });
});*/

// Render frontpage
app.get('/', function (req, res) {
    res.render('portada',{pics: pics});
});


// Server start
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});