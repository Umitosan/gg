$(document).ready(function() {



  // BUTTONS BUTTONS BUTTONS
  // BUTTONS BUTTONS BUTTONS
  $("#allon").click(function() {
    return 0;
  });
  $("#alloff").click(function() {
    return 0;
  });
  $("#fade").click(function() {
    $(".row").fadeToggle();
  });
  $("#showhide").click(function() {
    $(".row").toggle();
    // alert("show hide");
  });
  $("#resetpage").click(function() {
    location.reload();
  });
  $("#addrow").click(function() {
    return 0;
  });
  $("button#greenback").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#yellowback").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#redback").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#resetback").click(function() {
    $("body").removeClass();
  });



});
