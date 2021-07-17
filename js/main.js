(function ($) {
  // navigation
  $(".mobile-menu").slicknav({
    prependTo: '.mobile-menu-wrap',
    allowParentLinks: true
  });

  // set background slider
  $('.set-bg').each(function () {
    var background = $(this).data('setbg');
    $(this).css('background-image', 'url(' + background + ')');
  });

  // main slider
  $(".hs-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
    smartSpeed: 1500,
    autoHeight: false,
    autoplay: true
  });

  // categories slider
  $(".categories-slider").owlCarousel({
    loop: true,
    margin: 20,
    items: 3,
    dots: false,
    nav: true,
    navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
    stagePadding: 120,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0
      },
      768: {
        items: 2,
        stagePadding: 0
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  // isotope filter
  $(".filter-controls li").on('click', function() {
    var filterData = $(this).attr("data-filter");

    $(".portfolio-filter, .gallery-filter").isotope({
      filter: filterData,
    });

    $(".filter-controls li").removeClass('active');
    $(this).addClass('active');
  });

  $(".portfolio-filter, .gallery-filter").isotope({
    itemSelector: '.pf-item, .gf-item',
    percentPosition: true,
    masonry: {
      // use element for option
      columnWidth: '.pf-item, .gf-item',
      horizontalOrder: true,
    }
  });

  // masonary
  $('.portfolio-details-pic').masonry({
    itemSelector: '.pdp-item',
    columnWidth: '.pdp-item'
  });

  // search modal
  $('.search-switch').on('click', function () {
    $('.search-modal').fadeIn(400);
  });

  $('.search-close-switch').on('click', function () {
    $('.search-modal').fadeOut(400, function () {
      console.log($('.search-input').val())
    });
  });
})(jQuery);