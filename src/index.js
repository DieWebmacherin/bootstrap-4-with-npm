import 'bootstrap';
import _ from 'lodash';
import 'slick-carousel';
import './scss/custom.scss';

import fontawesome from "@fortawesome/fontawesome-free";
import faSolid from "@fortawesome/fontawesome-free-solid";
import faBrands from "@fortawesome/fontawesome-free-brands";
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faSolid, faBrands);

// ----- Custom scripts -----//
// Slick carousel
$('.slick-carousel.fullwidth').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true
});
$('.slick-carousel.edge').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev headline5">&larr;</button>',
    nextArrow: '<button type="button" class="slick-next headline5">&rarr;</button>'
});
