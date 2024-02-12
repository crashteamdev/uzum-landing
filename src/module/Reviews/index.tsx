"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { reviews } from "./statics/reviews";

import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { type Swiper as SwiperTypes } from "swiper";

const Reviews = () => {
    const swiperRef = useRef<SwiperTypes>();
    const shortenedText = (text:string) => {
        return text.length > 100 ? text.slice(0, 100) + "..." : text;
    }
    return (
        <div className="overflow-hidden py-[125px] max-md:py-[50px]">
            <div className="container">
                <div className="title mb-7">Отзывы клиентов</div>
                {/* <div className="text-[#061C3D] text-[20px] leading-[28px] font-normal max-md:text-[16px] max-md:leading-[24px] mb-[72px]">Реальный опыт наших клиентов, наших друзей и топовых продавцов на маркетплейсах!</div> */}
            </div>
            <div className="container">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView="auto"
                    slidesPerGroup={1}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    pagination={{
                        clickable: true
                    }}
                    className="post-swiper reviews"
                    breakpoints={{
                        768: {
                            slidesPerGroup: 2,
                        },
                        1024: {
                            slidesPerGroup: 3,
                            slidesPerView: 3,
                        }
                    }}
                >
                    {reviews.map((item, key) => (
                        <SwiperSlide key={key} className="">
                            <div className='rounded-[24px] p-[40px] bg-[#fff] flex flex-col gap-[24px] h-['>
                                <div className='flex gap-[12px]'>
                                    <div className='relative w-[48px] h-[48px] rounded-full overflow-hidden'>
                                        <Image className='object-cover' src={item.sellerPhoto} fill alt={"Отзыв MarketDB от " + item.sellerName} />
                                    </div>
                                    <div className='flex flex-col gap-[4px]'>
                                        <div className='text-[#1a1a1a] text-[16px] leading-[24px] font-medium'>{item.sellerName}</div>
                                        <div className='text-[#959595] text-[14px] leading-[20px] font-medium'>Продавец на {item.sellerShop}</div>
                                    </div>
                                </div>
                                <div className='text-[14px] text-[#1a1a1a] leading-[140%] font-normal'>
                                    {item.text}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;