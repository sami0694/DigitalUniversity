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
});

$(document).ready(function(){
    // myVar = setInterval("nextMsg()", 3000);
});
