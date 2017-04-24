var doTheMath = {
  x: "",
  y: "",
  type: ""
};

$(document).ready(function(){
  console.log("client.js is here and ready.");


  $( '#clear' ).on( 'click', function(){
    console.log("in clear button");
    clearInputs();
  });


  $( '#add' ).on( 'click', function(){
    console.log("in add button");
    doTheMath.type = "add";
    doTheMath.x = $( '#first' ).val();
    doTheMath.y = $( '#second' ).val();
    console.log("x, y : ", doTheMath.x, doTheMath.y);
    console.log(doTheMath.type);
  });


  $( '#subtract' ).on( 'click', function(){
    console.log("in subtract button");
    doTheMath.type = "subtract";
    doTheMath.x = $( '#first' ).val();
    doTheMath.y = $( '#second' ).val();
    console.log("x, y : ", doTheMath.x, doTheMath.y);
    console.log(doTheMath.type);
  });


  $( '#multiply' ).on( 'click', function(){
    console.log("in multiply button");
    doTheMath.type = "multiply";
    doTheMath.x = $( '#first' ).val();
    doTheMath.y = $( '#second' ).val();
    console.log("x, y : ", doTheMath.x, doTheMath.y);
    console.log(doTheMath.type);
  });


  $( '#divide' ).on( 'click', function(){
    console.log("in divide button");
    doTheMath.type = "divide";
    doTheMath.x = $( '#first' ).val();
    doTheMath.y = $( '#second' ).val();
    console.log("x, y : ", doTheMath.x, doTheMath.y);
    console.log(doTheMath.type);
  });

  $( '#submit' ).on( 'click', function(){
    console.log("in submit button");
    console.log("x, y : ", doTheMath.x, doTheMath.y);
    console.log("type: ", doTheMath.type);
    sendforCalc();
    recieveResult();
  });

});

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

function recieveResult(){
  // make ajax call to server to calculate
  $.ajax({
    url: '/result',
    type: 'GET',
    success: function( response ){
      console.log( 'back from server with our result:', response );
      // empty outputDiv
      $( '.answer' ).empty();
      $('.answer').append(response.result);
    } // end success
  }); // end ajax
} // end recieveResult

function clearInputs(){
  console.log("in clear Inputs");
  $( '#first' ).val('');
  $( '#second' ).val('');
  $( '#type' ).val('');
  $( '.answer' ).empty();
}
