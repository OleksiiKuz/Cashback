
$(document).ready(function () {

   $(".services__tab-items").not(":first").hide();
   $(".services__wrapper .last__item").click(function () {
      $(".services__wrapper .last__item").removeClass("active").eq($(this).index()).addClass("active");
      $(".services__tab-items").hide().eq($(this).index()).fadeIn()
   }).eq(0).addClass("active");

   $(".accordeon__item").on("click", function () {
      if ($(this).hasClass("accordeon__item-active")) {
         $(this).children(".accordeon__description").slideUp(300);
         $(this).removeClass("accordeon__item-active");
      } else {
         $(".accordeon__item-active").removeClass("accordeon__item-active");
         $(".accordeon__description").slideUp(300);
         $(this).children(".accordeon__description").slideDown(300);
         $(this).addClass("accordeon__item-active");
      }
   });

   $(".tab__item").on("click", function () {
      if ($(this).hasClass("tab__item-active")) {
         $(this).children(".tab__answer").slideUp(300);
         $(this).removeClass("accordeon__item-active");
      } else {
         $(".tab__item-active").removeClass("tab__item-active");
         $(".tab__answer").slideUp(300);
         $(this).children(".tab__answer").slideDown(300);
         $(this).addClass("tab__item-active");
      }
   });

})


//SLICK-SLIDER

$('.testimonial__wrapper').slick({
   arrows: false,
   infinite: true,
   dots: true,
   slidesToShow: 3,
   slidesToScroll: 3,
   responsive: [
      {
         breakpoint: 1220,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
         }
      },
      {
         breakpoint: 700,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      },
      {
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
   ]
});

// CUSTOM BUTTON FOR SLICK SLIDER

$("#testimonial__arrow--prev").on('click', function (event) {
   event.preventDefault();

   $('.testimonial__wrapper').slick('slickPrev');
   
});

$("#testimonial__arrow--next").on('click', function (event) {
   event.preventDefault();

   $('.testimonial__wrapper').slick('slickNext');

});

//CASHBACK TABS WITH MOVE1,2,3...


$("#user-nav-tabs li").on('click', function (e) {
   var targetLink = $(e.currentTarget.children[0]).attr("href").slice(1);

   var content_map = {
      c1: "#content1",
      c2: "#content2",
      c3: "#content3",
      c4: "#content4",
      c5: "#content5"
   }

   $(e.currentTarget).siblings().removeClass("active");

   $.each(content_map, function (hash, elid) {
      if (hash == targetLink) {
         $(elid).show();
         $(e.currentTarget).addClass("active");
      } else {
         $(elid).hide();
      }
   });
});



//SCRIPT FOR SCROLL

$('a[href*="#"]').on('click', function (e) {
   e.preventDefault();

   $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
   }, 1000, 'linear');
});


