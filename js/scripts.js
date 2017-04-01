rowtotal = 1;

$(document).ready(function() {

  var rowtotal = 1;

  // HIDE STUFF
  var glassMe = function(obj) {
    $(obj).children().removeClass("unGlass");
    $(obj).children().addClass("glass");
  };

  // UNHIDE STUFF
  var unGlassMe = function(obj) {
    $(obj).children().removeClass("glass");
    $(obj).children().addClass("unGlass");
  };

  // BUTTONS BUTTONS BUTTONS
  $("#allon").click(function() {
    glassMe(".col-xs-2");
  });
  $("#alloff").click(function() {
    unGlassMe(".col-xs-2");
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
    glassMe(this);
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
      glassMe(this);
    });
    rowtotal += 1;
    console.log(rowtotal);
      $(".row").last().addClass( "row" + rowtotal.toString() );
  });

});
