// first slider
$(document).ready(function(){

    homeGalleryCurrentTime = 0;
    const homeGalleryDelay = 100;
    var homeGallery = $('.owl-carosel-part .first-slider .gallery-list'),
        galleryControl = $('.owl-carosel-part .first-slider .gallery-control'),
        galleryToggle = $('.owl-carosel-part .first-slider .gallery-toggle'),
        autoplayTimeout = 5000,
        homeGalleryService = null;

    $('#owlcarousel-first-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        dotsEach: true,
        dotsContainer: '.owl-carosel-part .first-slider .gallery-dots',
        onInitialized: (event) => {
            startAutoPlay();
        },
        onDragged: (event) => {
            restartAutoPlay();
            galleryToggle.removeClass('play');
        }
    });

    function startAutoPlay() {
        homeGalleryService = setInterval(() => {
            homeGalleryCurrentTime += homeGalleryDelay;
            if (homeGalleryCurrentTime >= autoplayTimeout) {
                homeGalleryCurrentTime = 0;
                homeGallery.trigger('next.owl.carousel');
            }

            $('.owl-carosel-part .first-slider .play-percent .bar').css('stroke-dashoffset', mapNumber(homeGalleryCurrentTime, 0, autoplayTimeout, 85, 0));
        }, homeGalleryDelay);
    }

    galleryToggle.on('click', () => {
        galleryToggle.toggleClass('play');
        if (galleryToggle.hasClass('play')) {
            pauseAutoPlay();
        } else {
            startAutoPlay();
        }
    });

    galleryControl.find('.owl-dot').on('click', (e) => {
        restartAutoPlay();
    });

    function pauseAutoPlay() {
        clearInterval(homeGalleryService);
    }

    function restartAutoPlay() {
        pauseAutoPlay();
        homeGalleryCurrentTime = 0;
        $('.owl-carosel-part .first-slider .play-percent .bar').css('stroke-dashoffset', 85);
        startAutoPlay();
    }

    function mapNumber(x, a, b, c, d) {
        return Math.abs(c+((d-c)/(b-a))*(x-a));
    }


  });