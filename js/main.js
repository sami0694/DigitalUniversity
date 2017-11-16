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
        $('#change').fadeOut(1300,function(){
          i = (i+1) % disc.length;
          this.textContent=disc[i];
        }).fadeIn(1300,nextMsg);
};

nextMsg();
var headerNav = $('header nav');
$(window).scroll(function() {
  var distanceScrolled = $(this).scrollTop();
  console.log(distanceScrolled);
  if (distanceScrolled >= 50) {
    headerNav.addClass('navcolor');
  }
  else{
    headerNav.removeClass('navcolor');
  }

  if (distanceScrolled>100) {
    $(".statement .img").fadeIn(1500);
  }
  else if (distanceScrolled=50) {
    $(".statement .img").fadeOut(0);
  }
});

$(document).ready(function(){
    // myVar = setInterval("nextMsg()", 3000);
});

$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	// Step 2: Log distanceScrolled to the console to see what it holds!
	console.log(distanceScrolled);
	// if distanceScrolled is greater than or equal to 542
	if (distanceScrolled > 100) {

		// Add a class to the nav to make it fixed
		$('.nav_logo').removeClass('hidden');
	}
	// else
	// Remove the class from the nav to make it unfixed
	else {
		$('.nav_logo').addClass('hidden');
	}
});
