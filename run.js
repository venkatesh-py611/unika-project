$(document).ready(function(){
  $("#we").hover(function(){
    $("#we").html("<h2>I'M UNIKA</h2>");
    }, function(){
    $("#we").html("<h3>WE HAVE AWESOME THINGS</h2>");
  });
  
});
$(document).ready(function(){
  $("#btn1").hover(function(){
    $("#btn1").css({"color":"black","width":"200px","background":"white"});
  },function(){
    $("#btn1").css({"color":"white","width":"100px","background":"transparent"});
  });
});
$(document).ready(function(){
  $("#btn2").click(function(){
    $("#do").text("Downloading........")
  });
});
$(document).ready(function(){
  $("#btn3").click(function(){
    $(".ser2,.ser1").slideToggle()
  })
})