$(document).ready(function() {
	
	$(".left li").each(function(i) {
		$(this).children("a").attr("href", "#list_" + i);
		$(".right h2").each(function(ii) {
			$(this).attr("id", "list_" + ii);
		});
	});

	$("a[href*='#']").mPageScroll2id();

	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	SyntaxHighlighter.all();

});