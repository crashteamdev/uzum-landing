"use client";

import Image from 'next/image';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

const CompanySlider: React.FC = () => {
    return (
        <div className="logotype-section">
            <Swiper
                spaceBetween={50}
                slidesPerView={9.5}
                className="company-slider"
            >
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/sportmaster.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/uz-cotton.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/askona.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/dns.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/henderson.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/metro.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/ostin.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/splat.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/levrana.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/sportmaster.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/uz-cotton.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/askona.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/dns.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/henderson.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/metro.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/ostin.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/splat.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <Image fill src="/images/company/levrana.svg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CompanySlider;