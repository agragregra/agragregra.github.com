(function ($) {
  $.fn.equalHeights = function () {
    var $items = $(this);
    function equalize() {
      $items.height('initial');
      var maxH = $items.eq(0).height();
      $items.each(function () {
        maxH = ($(this).height() > maxH) ? $(this).height() : maxH;
      });
      $items.height(maxH);
    }
    equalize();
    $(window).bind('resize', function () {
      equalize();
    });
  };
})(jQuery);

