$(function () {
  $('.toggler').click(function () {
    $('.header').toggleClass('opened');
  });

  $('.dropdown').click(function () {
    $(this).toggleClass('active');
  })

  initializeFirstScreenSlider();
  initializePlaylistSliders();
});

const initializeFirstScreenSlider = () => {
  const slider = $('.slider');
  const currentSlideSpan = $('.counter #current');
  const totalSlidesSpan = $('.counter #total');

  slider.on('init reInit', function (event, slick, currentSlide, nextSlide) {
    totalSlidesSpan.text(`0${slick.slideCount}`);
  });


  slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    currentSlideSpan.text(`0${i}`);
  });

  slider.slick({
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1200,
    fade: true,
    cssEase: 'linear',
  });
}

const initializePlaylistSliders = () => {
  $('.playlist-slider').slick({
    mobileFirst: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerPadding: '30px',
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: '60px',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '110px',
          slidesToShow: 3,
        }
      }
    ]
  });
}
