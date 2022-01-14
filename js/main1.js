$(document).ready(function () {
    $('.slider').slick({
        initialSlide: 3,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type = "button" class = "slick-prev" src="url(../images/symbols/arrow_prev.png);"></ button>',
        nextArrow: '<button type = "button" class = "slick-next"></ button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});