/**
 * Minimal Node Host
 **/

var express = require('express'); // Express web server framework
var port = 5556;
var public_dir = 'public'; 

var app = express();
app.use(express.static(__dirname + '/' + public_dir));

console.log('Listening on ' + port);
app.listen(port);
