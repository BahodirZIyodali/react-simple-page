import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import Image10 from "../../../images/photo10.svg"
import Image11 from "../../../images/photo11.svg"
import Image12 from "../../../images/photo12.svg"

export default function BestSelling() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-xl-5 mt-2"
        breakpoints={{
          // when window width is >= 640px
          340: {
              slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
              slidesPerView: 2,
          },
          992: {
              slidesPerView: 2,
          },
          992: {
              slidesPerView: 3,
          },
      }}
      >
        <SwiperSlide className="text-center py-4 bestSeller">
        <span className="text-center">Smart light bulb pack</span>
          <h4 className="text-center mb-4">Latest and greatest</h4>
          <button className="btn btn-outline-dark d-block mx-auto mb-3">Explore</button>
          <img src={Image10} alt="img" />
        </SwiperSlide>
        <SwiperSlide className="text-center py-4 bestSeller">
        <span className="text-center">Smart light bulb pack</span>
          <h4 className="text-center mb-4">Latest and greatest</h4>
          <button className="btn btn-outline-dark d-block mx-auto mb-3">Explore</button>
          <img src={Image11} alt="img" />
        </SwiperSlide>
        <SwiperSlide className="text-center py-4 bestSeller">
        <span className="text-center">Smart light bulb pack</span>
          <h4 className="text-center mb-4">Latest and greatest</h4>
          <button className="btn btn-outline-dark d-block mx-auto mb-3">Explore</button>
          <img src={Image12} alt="img" />
        </SwiperSlide>
        <SwiperSlide className="text-center py-4 bestSeller">
        <span className="text-center">Smart light bulb pack</span>
          <h4 className="text-center mb-4">Latest and greatest</h4>
          <button className="btn btn-outline-dark d-block mx-auto mb-3">Explore</button>
          <img src={Image11} alt="img" />
        </SwiperSlide>
        <SwiperSlide className="text-center py-4 bestSeller">
        <span className="text-center">Smart light bulb pack</span>
          <h4 className="text-center mb-4">Latest and greatest</h4>
          <button className="btn btn-outline-dark d-block mx-auto mb-3">Explore</button>
          <img src={Image10} alt="img" />
        </SwiperSlide>
        <SwiperSlide className="text-center py-4 bestSeller">
        <span className="text-center">Smart light bulb pack</span>
          <h4 className="text-center mb-4">Latest and greatest</h4>
          <button className="btn btn-outline-dark d-block mx-auto mb-3">Explore</button>
          <img src={Image12} alt="img" />
        </SwiperSlide>
        <SwiperSlide className="text-center py-4 bestSeller">
        <span className="text-center">Smart light bulb pack</span>
          <h4 className="text-center mb-4">Latest and greatest</h4>
          <button className="btn btn-outline-dark d-block mx-auto mb-3">Explore</button>
          <img src={Image10} alt="img" />
        </SwiperSlide>
        <SwiperSlide className="text-center py-4 bestSeller">
        <span className="text-center">Smart light bulb pack</span>
          <h4 className="text-center mb-4">Latest and greatest</h4>
          <button className="btn btn-outline-dark d-block mx-auto mb-3">Explore</button>
          <img src={Image11} alt="img" />
        </SwiperSlide>
        <SwiperSlide className="text-center py-4 bestSeller">
        <span className="text-center">Smart light bulb pack</span>
          <h4 className="text-center mb-4">Latest and greatest</h4>
          <button className="btn btn-outline-dark d-block mx-auto mb-3">Explore</button>
          <img src={Image12} alt="img" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
