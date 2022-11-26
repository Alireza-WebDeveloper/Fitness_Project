import HsScrollArrowBack from '../HsScrollArrowBack';
import HsScrollArrowForward from '../HsScrollArrowForward';

const settingSlider = {
  prevArrow: <HsScrollArrowBack />,
  nextArrow: <HsScrollArrowForward />,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default settingSlider;
