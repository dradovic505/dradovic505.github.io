// alert("Welcome to my website! Feel free to explore!");
// var skillset = document.getElementsByClassName('article');
// document.write(skillset);

$(document).ready(function() {
  $(".h4-spacing").click(function(){
    $(this).parent().find("p").toggle(700);
    $(this).parent().find("h4").toggleClass("h4-spacing");
  });
});

$(document).ready(function() {
  $(".h4-spacing").hover(
    function(){
    $(this).css("cursor", "pointer");
    $(this).css("text-decoration", "underline");
    //add a +
    // $(this).append('<h4>+</h4>');
    },
    function(){
      // $(this).css("background-color", "");
      $(this).css("text-decoration", "none");      
    }
  );
});

 

// $(".website-info").animate({
//   height: '+=50px', opacity: '-=0.1'
// });

// alert("Value: " + $('#website-intro').val());


// $("#about-me").css("color", "red").slideUp(2000).slideDown(2000);
// $("#website-intro").click(function(){
//   $("#about-me").stop();
// });

//
//
// Adding CSS through jQuery:      make sure the css properties are camelCased
// can also do p.toggleClass("some class"); or [some class].toggle();
//
// $('.example-class').css('color', '#FFFFFF');
//           or
// $('.example-class').css({
//   color: "#EFEFEF",
//   backgroundColor: "#303030"
// });
//
//      .animate()
// $('.example-class').animate({
//   height: '100px',
//   width: '100px',
//   borderWidth: '10px'
// }, 500);
//
//
// Mouse events: mouseenter, mouseleave, dblclick, mousemove
// $('.example-class').on('mouseenter',  function() {
//    $("nav-menu").show();
// });
//
// Affects only the current target
// $('.product-photo').on('mouseenter', (event) => {
//     $(event.currentTarget).addClass('photo-active')
//   }).on('mouseleave', event => {
//     $(event.currentTarget).removeClass('photo-active')
//   })
//
// Keyboard events: keydown, keypress, keyup
//
//
//
// $(document).ready(function(){
//   $("#title-name").click(function(){
//     $("p").hide();
//   });
// });
//
//
//
// Clicking through .on()    ... I think there is "click", "hover", etc
//
// const $menuButton = $('.menu-button');
//  const $navDropdown = $('#nav-dropdown');
//
//  $menuButton.on('click', () => {
//    $navDropdown.show();
//  })
//
//  $navDropdown.on('mouseleave', function() {
//    $navDropdown.hide();
//  })
