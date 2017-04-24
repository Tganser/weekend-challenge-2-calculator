var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
//need to require module here

var packageFrom;

var port = 3001;

//global variables go here

//set up server and bring in html to Dom
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );


// spin up server, are we listening?
app.listen( port, function(){
  console.log( 'listening, captain! We\'re on: ', port );
});


//this brings the html up
app.get( '/', function( req, res ){
  console.log( 'we found the html hooray' );
  // send back index.html as response
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); // end html get



//here will go ajax get/post/calls
app.post('/calc', function( req, res) {
  //do the calcuation in a different function
  packageFrom = req;
  console.log("we hit the calc one on the server!");
  console.log(packageFrom.x);
  // console.log(packageFrom);
  res.send(200);
});
