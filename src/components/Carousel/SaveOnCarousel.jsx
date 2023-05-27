import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image1 from "../../../images/photo6.svg"
import Image2 from "../../../images/photo7.svg"
import Image3 from "../../../images/photo8.svg"
import Image4 from "../../../images/photo9.svg"
export default function SaveOnCarousel() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="mySwiper"
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
                <SwiperSlide className="px-4">
                    <img src={Image1} alt="img" />
                    <h4 className="text-start">MacBook Pro 13</h4>
                    <p className="text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium?</p>
                </SwiperSlide>
                <SwiperSlide className="px-4">
                    <img src={Image2} alt="img" />
                    <h3 className="text-start">Smart Galaxy Watch 3</h3>
                    <p className="text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium?</p>
                </SwiperSlide>
                <SwiperSlide className="px-4">
                    <img src={Image3} alt="img" />
                    <h3 className="text-start">MacBook Air M1</h3>
                    <p className="text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium?</p>
                </SwiperSlide>
                <SwiperSlide className="px-4">
                    <img src={Image4} alt="img" />
                    <h3 className="text-start">iPad</h3>
                    <p className="text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium?</p>
                </SwiperSlide>
                <SwiperSlide className="px-4">
                    <img src={Image1} alt="img" />
                    <h3 className="text-start">Smart Galaxy Watch 3</h3>
                    <p className="text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium?</p>
                </SwiperSlide>
                <SwiperSlide className="px-4">
                    <img src={Image2} alt="img" />
                    <h3 className="text-start">MacBook Air M1</h3>
                    <p className="text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium?</p>
                </SwiperSlide>
                <SwiperSlide className="px-4">
                    <img src={Image3} alt="img" />
                    <h3 className="text-start">iPad</h3>
                    <p className="text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium?</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
