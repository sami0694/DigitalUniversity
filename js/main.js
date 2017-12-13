i=0;
var disc = [
    "Data Science & Analytics",
    "Cybersecurity",
    "Product Management",
    "Business Systems",
    "Software Development",
    "User Design",
    "Infrastructure Services"];
$('#change').text(disc[i]);

function nextMsg() {

        // $('#change').html(disc[i]).fadeIn(1000).delay(1000).fadeOut(1000);
        // i++;
        // console.log(i);
        // if(i==disc.length ){i=0;}
        // setTimeout(arguments.callee,3000);
        console.log(i);
        $('#change').fadeOut(2500,function(){
          i = (i+1) % disc.length;
          this.textContent=disc[i];
        }).fadeIn(2500,nextMsg);
};

nextMsg();
// var headerNav = $('header nav');
// $(window).scroll(function() {
//   var distanceScrolled = $(this).scrollTop();
//   console.log(distanceScrolled);
//   if (distanceScrolled >= 50) {
//     headerNav.addClass('navcolor');
//   }
//   else{
//     headerNav.removeClass('navcolor');
//   }
//
//   if (distanceScrolled>100) {
//     $(".statement .img").fadeIn(1500);
//   }
//   else if (distanceScrolled=50) {
//     $(".statement .img").fadeOut(0);
//   }
// });

$(document).ready(function(){
    // myVar = setInterval("nextMsg()", 3000);
    console.log(screen.width);
});

$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();

	console.log(distanceScrolled);
	if (distanceScrolled > 100) {

		// Add a class to the nav to make it fixed
		$('.main_nav').addClass('solid');
	}
	// else
	// Remove the class from the nav to make it unfixed
	else {
		$('.main_nav').removeClass('solid');
	}
});

$('.foundational-button').on('click', function () {
  $(this).parent().addClass('course-grid');
  $(this).removeClass('unclicked');
  $(this).next('.advanced-button').removeClass('unclicked');
  $(this).siblings('.advanced').fadeOut(800).delay(500);
  $(this).siblings('.foundational').fadeIn(800);
});

$('.advanced-button').on('click', function () {
  $(this).parent().addClass('course-grid');
  $(this).removeClass('unclicked');
  $(this).siblings('.foundational-button').removeClass('unclicked');
  $(this).siblings('.foundational').fadeOut(800).delay(500);
  $(this).siblings('.advanced').fadeIn(800);
});

$('.course-list li').on('click', function () {
  $(this).next().slideToggle(500);
});


$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top -50}, 500, 'linear');
  });
});
