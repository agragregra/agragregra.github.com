$(document).ready(function() {

		//Tabs Elements
		$(".tab:first-child").addClass("active");
		$(".tab").click(function() {
			var dt = $(this).data("tabs");
			$(".tab[data-tabs=" + dt + "]").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item[data-tabs=" + dt + "]").hide().eq($(this).index()).show()
		}).eq(0).addClass("active");

	//Google Maps Settings
	// When the window has finished loading create our google map below
	google.maps.event.addDomListener(window, 'load', init);
	function init() {

		var coord_1 = $(".contacts_top .active").data("map-coord-first");
		var coord_2 = $(".contacts_top .active").data("map-coord-second");
		var zoom = $(".contacts_top .active").data("zoom");

		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: zoom,

			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(coord_1, coord_2),

			scrollwheel: false,

			// How you would like to style the map. 
			// This is where you would paste any style found on Snazzy Maps.

			styles: //Paste snazzymaps.com Styles Here
			[{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]

		};

		// Get the HTML DOM element that will contain your map 
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById("map");

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(coord_1, coord_2),
			map: map
		});
	};
	$(".s_contacts .tab").click(function() {
		init();
	});

	//Magnific Popup Plugin
	//Documentation: http://dimsemenov.com/plugins/magnific-popup
	$(".popup").magnificPopup({type:"image"});
	$(".popup_c").magnificPopup();

	//Stellar Plugin
	//Documentation: https://github.com/markdalgleish/stellar.js
	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});

	//OWL Carousel Plugin
	//Documentation: http://owlgraphic.com/owlcarousel/
	$(".carousel").owlCarousel({
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		},
		navText : ""
	});

	//Header Window Full Size
	function wResize() {
		$("header.main_header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});

	//Google Analytics Goals
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		return true;
	}));

	//Ajax Forms
	//Documentation: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Thank You!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				magnificPopup.close();
				ths.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$(".profi_item .row").hover(function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
	});

});

$(window).load(function() {

	//Preloader
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	//animate-css.js Plugin. Animate Elements on Scroll
	//Example: $(".element").animated("zoomInUp", "zoomOutDown");
	$(".top_header h1").animated("fadeInDown", "fadeOut");
	$(".top_header h2").animated("fadeInUp", "fadeOut");
	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
	$(".profi_item").animated("fadeInRight", "fadeOut");
	$(".s_pofi form").animated("zoomInRight", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$(".other_langs").animated("fadeIn", "fadeOut");
	$("section h2, footer h2, .contacts_top .tabs").animated("fadeInUp", "fadeOut");

});