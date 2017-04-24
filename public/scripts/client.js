var doTheMath = {
  x: "",
  y: "",
  type: ""
};

$(document).ready(function(){
  console.log("client.js is here and ready.");
  $('.typing').append("  ");

//listener for the clear button and function
  $( '#clear' ).on( 'click', function(){
    console.log("in clear button");
    clearInputs();
  });

//listeners for all the calculator buttons
  $( '#1' ).on( 'click', function(){
    console.log("clicked 1");
    $('.typing').append("  1 ");
    if (doTheMath.x === ""){
      doTheMath.x = 1;
    }
    else if (doTheMath.y === ""){
      doTheMath.y = 1;
    }
    else {
      console.log("error in 1 button area");
    }
  });

  $( '#2' ).on( 'click', function(){
    console.log("clicked 2");
    $('.typing').append("  2 ");
    if (doTheMath.x === ""){
      doTheMath.x = 2;
    }
    else if (doTheMath.y === ""){
      doTheMath.y = 2;
    }
    else {
      console.log("error in 2 button area");
    }
  });

  $( '#3' ).on( 'click', function(){
    console.log("clicked 3");
    $('.typing').append("  3 ");
    if (doTheMath.x === ""){
      doTheMath.x = 3;
    }
    else if (doTheMath.y === ""){
      doTheMath.y = 3;
    }
    else {
      console.log("error in 3 button area");
    }
  });

  $( '#4' ).on( 'click', function(){
    console.log("clicked 4");
    $('.typing').append("  4 ");
    if (doTheMath.x === ""){
      doTheMath.x = 4;
    }
    else if (doTheMath.y === ""){
      doTheMath.y = 4;
    }
    else {
      console.log("error in 4 button area");
    }
  });

  $( '#5' ).on( 'click', function(){
    console.log("clicked 5");
    $('.typing').append("  5 ");
    if (doTheMath.x === ""){
      doTheMath.x = 5;
    }
    else if (doTheMath.y === ""){
      doTheMath.y = 5;
    }
    else {
      console.log("error in 5 button area");
    }
  });

  $( '#6' ).on( 'click', function(){
    console.log("clicked 6");
    $('.typing').append("  6 ");
    if (doTheMath.x === ""){
      doTheMath.x = 6;
    }
    else if (doTheMath.y === ""){
      doTheMath.y = 6;
    }
    else {
      console.log("error in 6 button area");
    }
  });

  $( '#7' ).on( 'click', function(){
    console.log("clicked 7");
    $('.typing').append("  7 ");
    if (doTheMath.x === ""){
      doTheMath.x = 7;
    }
    else if (doTheMath.y === ""){
      doTheMath.y = 7;
    }
    else {
      console.log("error in 7 button area");
    }
  });

  $( '#8' ).on( 'click', function(){
    console.log("clicked 8");
    $('.typing').append("  8 ");
    if (doTheMath.x === ""){
      doTheMath.x = 8;
    }
    else if (doTheMath.y === ""){
      doTheMath.y = 8;
    }
    else {
      console.log("error in 8 button area");
    }
  });

  $( '#9' ).on( 'click', function(){
    console.log("clicked 9");
    $('.typing').append("  9 ");
    if (doTheMath.x === ""){
      doTheMath.x = 9;
    }
    else if (doTheMath.y === ""){
      doTheMath.y = 9;
    }
    else {
      console.log("error in 9 button area");
    }
  });

  $( '#0' ).on( 'click', function(){
    console.log("clicked 0");
    $('.typing').append("  0 ");
    if (doTheMath.x === ""){
      doTheMath.x = 0;
    }
    else if (doTheMath.y === ""){
      doTheMath.y = 0;
    }
    else {
      console.log("error in 0 button area");
    }
  });



//creates the "type":
  $( '#add' ).on( 'click', function(){
    console.log("in add button");
    $('.typing').append(" + ");
    doTheMath.type = "add";
    // doTheMath.x = $( '#first' ).val();
    // doTheMath.y = $( '#second' ).val();
    console.log("x, y : ", doTheMath.x, doTheMath.y);
    console.log(doTheMath.type);
  });



  $( '#subtract' ).on( 'click', function(){
    console.log("in subtract button");
    $('.typing').append(" - ");
    doTheMath.type = "subtract";
    // doTheMath.x = $( '#first' ).val();
    // doTheMath.y = $( '#second' ).val();
    console.log("x, y : ", doTheMath.x, doTheMath.y);
    console.log(doTheMath.type);
  });


  $( '#multiply' ).on( 'click', function(){
    console.log("in multiply button");
    $('.typing').append(" * ");
    doTheMath.type = "multiply";
    // doTheMath.x = $( '#first' ).val();
    // doTheMath.y = $( '#second' ).val();
    console.log("x, y : ", doTheMath.x, doTheMath.y);
    console.log(doTheMath.type);
  });


  $( '#divide' ).on( 'click', function(){
    console.log("in divide button");
    $('.typing').append(" / ");
    doTheMath.type = "divide";
    // doTheMath.x = $( '#first' ).val();
    // doTheMath.y = $( '#second' ).val();
    console.log("x, y : ", doTheMath.x, doTheMath.y);
    console.log(doTheMath.type);
  });


//submits the information to be calculated:
  $( '#submit' ).on( 'click', function(){
    console.log("in submit button");
    console.log("x, y : ", doTheMath.x, doTheMath.y);
    console.log("type: ", doTheMath.type);
    sendforCalc();
    recieveResult();
  });

});


//sends the server the input info
function sendforCalc(){
  // make ajax call to server to calculate
  $.ajax({
    url: '/calc',
    type: 'POST',
    data: doTheMath,
    success: function( response ){
      console.log( 'back from server with:', response );
      // empty outputDiv
      $( '.status' ).empty();
      // $('.status').append(response);
    } // end success
  }); // end ajax
} // end sendforCalc


//gets the result from the server
function recieveResult(){
  // make ajax call to server to calculate
  $.ajax({
    url: '/result',
    type: 'GET',
    success: function( response ){
      console.log( 'back from server with our result:', response );
      // empty outputDiv
      $( '.answer' ).empty();
      // $('.answer').append(response.result);
      $('.typing').append(" = " + response.result);

    } // end success
  }); // end ajax
} // end recieveResult


//this function clears the calculator for the next calculation
function clearInputs(){
  console.log("in clear Inputs");
  $( '#first' ).val('');
  $( '#second' ).val('');
  $( '#type' ).val('');
  doTheMath.x = "";
  doTheMath.y = "";
  doTheMath.type = "";
  $( '.answer' ).empty();
  $( '.typing' ).empty();
  $(".typing").append("  ");


}
