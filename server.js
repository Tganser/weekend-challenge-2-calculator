var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
//need to require module here

var packageFrom = [];

var port = 3001;
// var finalresult;

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
  packageFrom = req.body;
  console.log("we hit the calc one on the server!");
  console.log("we got: ", req.body);
  console.log("packageFrom: ", req.body);
  // console.log(packageFrom.x);
  // console.log(packageFrom);
  res.send(200);
});


app.get('/result', function (req, res){
  console.log("we hit the results on the server");
  console.log("packageFrom (in result ajax): ", packageFrom);

  finalResult = calculateResult();

  var responseObject = {
    result : finalResult
  };

  res.send(responseObject);
});


function calculateResult(){
  var x = parseInt(packageFrom.x);
  var y = parseInt(packageFrom.y);
  var type = packageFrom.type;
  var result2;


  if (type === "add"){
    console.log("x  + y ", x, y);
    result2 = x + y;
  }
  else if (type === "subtract"){
    result2= x - y;
  }
  else if (type === "multiply"){
    result2 = x* y;
  }
  else if (type === "divide"){
    result2 = x/y;
  }
  else {
    result2 = "error in calculateResult on server.";
  }

  return result2;
}
