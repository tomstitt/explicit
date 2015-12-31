/**
 * Crowd-sourcing playlist creation
 *
 * 1. User logins in
 * 2. User selects a playlist
 * 3. User is redirected to individual page where songs
 *      are added when chosen from a search
 *      (this page is available to anyone with the url)
 *
 * Modified from:
 * https://github.com/spotify/web-api-auth-examples/tree/master/authorization_code
 * More information at:
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var express = require('express'); // Express web server framework
var cookieParser = require('cookie-parser');
var port = 5556;
var public_dir = 'public'; //process.env.CROWDIFY_PUBLIC_DIR || null;


var app = express();
app.use(express.static(__dirname + '/' + public_dir))
    .use(cookieParser());


console.log('Listening on ' + port);
app.listen(port);
