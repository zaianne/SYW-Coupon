
$(function(){
	$('#flexnav').flexNav();
});


// Bootstrap accordion
$('.accordion').on('show', function (e) {
    $(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
});

$('.accordion').on('hide', function (e) {
    $(e.target).prev('.accordion-heading').find('.accordion-toggle').removeClass('active');
});

$("#accordion-toggle .collapse").collapse();



$(document).ready(function() {
    if($('body').hasClass('sticky-header')) {
      var theLoc = $('header.main').position().top;
      $(window).scroll(function() {
          if(theLoc >= $(window).scrollTop()) {
              if($('header.main').hasClass('fixed')) {
                  $('header.main').removeClass('fixed');
              }
          } else { 
              if(!$('header.main').hasClass('fixed')) {
                  $('header.main').addClass('fixed');
              }
          }
      });
    }
});

$(document).ready(function() {
    if($('body').hasClass('sticky-search')) {
      var theLoc = $('.search-area').position().top;
      if($('body').hasClass('sticky-header')) {
        var header_h = $('header.main').outerHeight(); 
      } else {
        header_h = 0;
      }

      $(window).scroll(function() {
          if(theLoc >= $(window).scrollTop()) {
              if($('.search-area').hasClass('fixed')) {
                  $('.search-area').removeClass('fixed').css({top: 0});
              }
          } else { 
              if(!$('.search-area').hasClass('fixed')) {
                  $('.search-area').addClass('fixed').css({top: header_h});
              }
          }
      });
    }
});
