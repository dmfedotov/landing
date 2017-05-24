// Горизонтальный аккордеон
$(function () {
  $(".menu-accord__trigger").click(function (e) {
    e.preventDefault();

    var item = $(this).closest(".menu-accord__item"),
      textContainer = item.find(".menu-accord__content"),
      textBlock = textContainer.find(".menu-accord__text"),
      reqWidthTextBlock = textBlock.outerWidth(),
      otherItems = item.siblings(),
      otherItemsTextContainer = otherItems.find(".menu-accord__content"),
      otherItemsTextBlock = otherItemsTextContainer.find(".menu-accord__text");

    if (item.hasClass("active")) {
      textContainer.css("width", 0);
      item.removeClass("active");
    } else {
      item.addClass("active");
      textContainer.css("width", reqWidthTextBlock);
      otherItemsTextContainer.css("width", 0);
      otherItems.removeClass("active");
    }

  });
});

// Вертикальный аккордеон
$(function () {
  $(".team-accord__trigger").click(function (e) {
    e.preventDefault();

    var item = $(this).closest(".team-accord__item"),
      textBlock = item.find(".team-accord__content"),
      otherItems = item.siblings(),
      otherItemsTextBlock = otherItems.find(".team-accord__content");

    if (item.hasClass("active")) {
      textBlock.slideUp(300);
      item.removeClass("active");
    } else {
      textBlock.slideDown(300);
      item.addClass("active");
      otherItemsTextBlock.slideUp(300);
      otherItems.removeClass("active");
    }
  });
});

// Модальное окно с отзывом
$(function () {
  $(".btn_read-more_review").click(function (e) {
    e.preventDefault();

    $(".overlay").fadeIn(100, function () {
      $(".full-review").fadeIn(300).addClass("popup_active");
    })
  });

  // Close
  $(".full-review__close, .overlay").click(function (e) {
    e.preventDefault();

    $(".full-review").fadeOut(300, function () {
      $(".overlay").fadeOut(100);
    }).removeClass("popup_active");
  });

  // Close Esc
  $(window).keydown(function (e) {
    if (e.keyCode === 27) {
      if ($(".full-review").hasClass("popup_active")) {
        $(".full-review").fadeOut(300, function () {
          $(".overlay").fadeOut(100);
        }).removeClass("popup_active");
      }
    }
  });
});

// Слайдер
$(function () {

  var slider = $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false
  });

  $(".slider-burger__btn_next").click(function (e) {
    e.preventDefault();
    slider.trigger("next.owl.carousel");
  })

  $(".slider-burger__btn_prev").click(function (e) {
    e.preventDefault();
    slider.trigger("prev.owl.carousel");
  })

});

// Маска поля ввода
$(function () {

  $(".order__form-phone").inputmask({"mask": "+7 (999) 999 99 99"});

});

// One page scroll
$(function () {

  var display = $(".main-content");
  var sections = $(".section");
  var inScroll  = false;

  var transition = function (sectionEq) {
    if (inScroll) return;
    inScroll = true;

    var position = (sectionEq * -100) + "%";

    sections.eq(sectionEq).addClass("active-section")
      .siblings().removeClass("active-section");

    display.css({
      "transform" : "translate(0," + position + ")"
    });

    setTimeout(function() {
      inScroll = false;

      $(".fixed-menu__item").eq(sectionEq).addClass("active-section")
        .siblings().removeClass("active-section");
    }, 1300);

  };

  $(".wrapper").on("wheel", function (e) {
    var activeSection = sections.filter(".active-section");
    var prevSection = activeSection.prev();
    var nextSection = activeSection.next();
    
    if (e.originalEvent.deltaY > 0 && nextSection.length) {//скроллим вниз
      transition(nextSection.index());
    }

    if (e.originalEvent.deltaY < 0 && prevSection.length) {//скроллим вверх
      transition(prevSection.index());
    }
  });

  $(".nav__link").click(function (e) { 
    e.preventDefault();
    
    var href = parseInt($(this).attr("href"));
    transition(href);
  });

  $(".fixed-menu__link").click(function (e) { 
    e.preventDefault();
    
    var href = parseInt($(this).attr("href"));
    transition(href);
  });

  $("[data-section-target]").click(function (e) { 
    e.preventDefault();
    
    var href = parseInt($(this).attr("href"));
    transition(href);
  });

});