
// Custome carousel transition time
$('.carousel').carousel({
  	interval: 3000
})

// Scroll to the selected anchor
$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

	   	//removing the previous selected menu state
        $('.navbar-nav').find('li.active').removeClass('active');
        //adding the state for this parent menu
        $(this).parents("li").addClass('active');

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      	// Prevent default anchor click behavior
	      	event.preventDefault();

	      	// Store hash
	     	var hash = this.hash;

	      	var headerHeight = $('#ait-header').height();

	      	// Using jQuery's animate() method to add smooth page scroll
	      	// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      	if($(this).attr('href') == '#cach-su-dung' || $(this).attr('href') == '#lien-he'){
	      		$('html, body').animate({
		       	 	scrollTop: $(hash).offset().top
		      	}, 1000);
	      	}
	      	else{
	      		$('html, body').animate({
		        	scrollTop: $(hash).offset().top-50
		      	}, 1000);
	      	}
	      
	    } // End if
	});
});

//Go to top
if ($('#btn-goto-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                document.getElementById("btn-goto-top").style.display = "block";
            } else {
                document.getElementById("btn-goto-top").style.display = "none";
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#btn-goto-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

//Animate Elements On Scroll Using jQuery and Animate.css
var scrollOptions = {
    // delay the animation sequence until '100' pixels have come into view
    animateThreshold: 100,

    // The frequency of which the user scrolling is 'tested'.
    scrollPollInterval: 20
}
// $('.flipInX').AniView(scrollOptions);