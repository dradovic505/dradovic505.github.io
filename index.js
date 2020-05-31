// alert("Welcome to my website! Feel free to explore!");
// var skillset = document.getElementsByClassName('article');
// document.write(skillset);

// $(document).ready(function() {
//   $('#navbarhtml').load('navbar.html');
// });

// $(document).ready(function() {

//   $("#about_blog").click(function(){
//     $(".website-info").toggle(1500);

//     // $(".website-info").animate({
//     //   height: '+=50px', opacity: '-=0.1'
//     // });
//   });

//   // $("#about-me").css("color", "red").slideUp(2000).slideDown(2000);
//   // $("#website-intro").click(function(){
//   //   $("#about-me").stop();
//   // });


// });


// alert("Value: " + $('#website-intro').val());


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
