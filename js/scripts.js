rowtotal = 1;

$(document).ready(function() {

  var rowtotal = 1;


  // BUTTONS BUTTONS BUTTONS
  $("#allon").click(function() {
    $(".col-xs-2").children().show();
  });
  $("#alloff").click(function() {
    $(".col-xs-2").children().hide();
  });
  $("#fadetoggle").click(function() {
    $(".col-xs-2").children().fadeToggle();
  });
  $("#toggleall").click(function() {
    $(".col-xs-2").children().toggle();
  });
  $("#resetpage").click(function() {
    location.reload();
  });
  // CHANGE THEME
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
  // ROLLOVER TILE DISAPEAR
  $(".col-xs-2").hover(function() {
    $(this).children("img, p").hide();
  });

  // ADD A ROW MADNESS!!!!
  $("#addrow").click(function() {
    $(".row").last().append( "\
      <div class='row'>\
        <div class='col-xs-2'>\
          <p>box</p>\
          <img src='img/flower.jpg' alt'img'>\
        </div>\
        <div class='col-xs-2'>\
          <p>box</p>\
          <img src='img/stone.jpg' alt'img'>\
        </div>\
        <div class='col-xs-2'>\
          <p>box</p>\
          <img src='img/flower.jpg' alt'img'>\
        </div>\
        <div class='col-xs-2'>\
          <p>box</p>\
          <img src='img/stone.jpg' alt'img'>\
        </div>\
        <div class='col-xs-2'>\
          <p>box</p>\
          <img src='img/flower.jpg' alt'img'>\
        </div>\
        <div class='col-xs-2'>\
          <p>box</p>\
          <img src='img/stone.jpg' alt'img'>\
        </div>\
      </div>"
    );
    $(".row").last().children(".col-xs-2").hover(function() {
      $(this).children("img, p").hide();
    });
    rowtotal += 1;
    console.log(rowtotal);
    // console.log( "row + toString(rowtotal)" + "row" + rowtotal.toString() );
    $(".row").last().addClass( "row" + rowtotal.toString() );
  });

});
