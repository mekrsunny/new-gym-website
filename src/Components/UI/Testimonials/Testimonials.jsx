import React from 'react'
import "./Testimonials.css"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import avatar01 from "../../../media/avatar01.png";
import avatar02 from "../../../media/avatar02.png";

// import required modules
import { EffectCards } from "swiper";

export default function Testimonials() {
    return (
        <>
            <section>
                <div className="sliders">
                    <h2 className="section_title">
                        Testimonials
                    </h2>
                    <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                        <SwiperSlide>
                            <div className="slide_item">
                                <div className="slide_img-01">
                                    <img className='images' src={avatar01} alt="" />
                                </div>
                                <h4>Rose</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat maiores delectus nemo similique sit dolores, non officia ipsum soluta aliquid corrupti quibusdam perspiciatis impedit error id aperiam consectetur. Quibusdam!</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_item">
                                <div className="slide_img-02">
                                    <img className='images' src={avatar02} alt="" />
                                </div>
                                <h4>Tanisha</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis numquam facere esse sit repellendus ex, tempora laborum itaque vero quibusdam.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_item">
                                <div className="slide_img-03">
                                    <img className='images' src={avatar01} alt="" />
                                </div>
                                <h4>Mary</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis numquam facere esse sit repellendus ex, tempora laborum itaque vero quibusdam.</p>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>
        </>
    );
}
