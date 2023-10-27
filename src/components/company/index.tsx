import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

const CompanySlider: React.FC = () => {
    return (
        <div className="logotype-section">
            <Swiper
                spaceBetween={50}
                slidesPerView={9.5}
                className="company-slider"
            // breakpoints={{
            //     768: {
            //         slidesPerView: 2,
            //     },
            //     1024: {
            //         slidesPerView: 3.5,
            //     },
            //     1920: {
            //         slidesPerView: 3.8,
            //     },
            // }}
            >
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/sportmaster.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/uz-cotton.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/askona.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/dns.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/henderson.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/metro.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/ostin.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/splat.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/levrana.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/sportmaster.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/uz-cotton.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/askona.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/dns.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/henderson.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/metro.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/ostin.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/splat.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="company-slider-item">
                    <img src="./images/company/levrana.svg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
};

export default CompanySlider;