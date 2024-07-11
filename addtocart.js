$(document).ready(function(){
  $("button").click(function(){
    $("addtocart").append($("p:first").clone(true));
  });
  $("p").click(function(){
    $(this).animate({m1.html: "+=1px"});
  });
});