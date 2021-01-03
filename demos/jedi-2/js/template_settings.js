$(document).ready(function() {

	var set_style = $("#template_settings");

	$("body").append("<div class='settings'><style>.settings{background:#fff;position:fixed;top:50%;margin-top:-100px;left:0;padding:7px}.settings div{width:30px;height:30px;background:#000;margin:3px 0;cursor:pointer;transition:all .2s}.settings div.active{box-shadow: rgba(255,255,255,.3) 0 0 0 3px inset}</style>");

	var colors = {
		red : "#9B1818",
		blue : "#002344",
		beige : "#4D4044",
		purple : "#470731"
	};

	var props = "red";
	for (var i in colors) {
			$(".settings").append("<div class='" + i + "' style='background: " + colors[i] + "' title='" + i + " color'>");
	};

	$(".settings div").click(function() {
		var tcolor = $(this).attr("class");
		set_style.attr("href", "css/skins/" + tcolor + ".css");
		$(".settings div").removeClass("active");
		$(this).addClass("active");
	});
	$(".settings div:nth-child(2)").addClass("active");

});