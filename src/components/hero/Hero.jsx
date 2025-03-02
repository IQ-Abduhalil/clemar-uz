import HeroImg from "../../assets/images/hero-img.png";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  autoplay,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function Hero() {
  return (
    <section id="hero">
      <div
        data-aos="fade-down"
        className="container  z-0 px-4 md:px-8 mx-auto py-20 md:py-40 "
      >
        <Swiper
          className="absolute "
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => swiper}
          onSlideChange={() => "slide change"}
        >
          <SwiperSlide>
            <img src={HeroImg} alt="Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroImg} alt="Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroImg} alt="Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroImg} alt="Image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
