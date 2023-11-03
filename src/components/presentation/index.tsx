import { useRef } from 'react';

import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation, Pagination } from 'swiper';
import { EffectFade } from 'swiper';
import 'swiper/css/effect-fade';
import ArrowIcon from '../icons/arrowIcon';
import { useTranslation } from 'react-i18next';

interface DataItem {
    count: string;
    title: string;
    desc: string;
    img: string;
}


const PresentationSlider:React.FC = () => {
    const { t } = useTranslation();

    const data: DataItem[] = [
        {
            count: "01",
            title: `${t('presentationSlider.slider1.title')}`,
            desc: `${t('presentationSlider.slider1.desc')}`,
            img: "img-1.png"
        },
        {
            count: "02",
            title: `${t('presentationSlider.slider2.title')}`,
            desc: `${t('presentationSlider.slider2.desc')}`,
            img: "img-2.png"
        },
        {
            count: "03",
            title: `${t('presentationSlider.slider3.title')}`,
            desc: `${t('presentationSlider.slider3.desc')}`,
            img: "img-3.png"
        },
    ]

    const swiperRef = useRef<SwiperType>();

    return (
        <div className="presentation-slider" style={{ paddingTop: "100px" }}>
            <div className="container">
                <div className="title">Инструменты аналитики</div>
                <Swiper
                    modules={[Pagination, Navigation, EffectFade]}
                    slidesPerView={1}
                    className="presentation-swiper"
                    effect="fade"
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    pagination={{
                        clickable: true
                    }}
                >
                    {data.map(item => (
                        <SwiperSlide className='presentation-swiper-item'>
                            <div className="presentation-swiper-item-content">
                                <div className="presentation-swiper-item__count">{item.count}</div>
                                <div className="presentation-swiper-item__title">{item.title}</div>
                                <div className="presentation-swiper-item__desc">{item.desc}</div>
                                <div className="presentation-swiper-item-arrows">
                                    <div onClick={() => swiperRef.current?.slidePrev()} className="slider-navigation__arrow slider-navigation__arrow-prev">
                                        <ArrowIcon color='#959595' />
                                    </div>
                                    <div onClick={() => swiperRef.current?.slideNext()} className="slider-navigation__arrow slider-navigation__arrow-next">
                                        <ArrowIcon color='#959595' />
                                    </div>
                                </div>
                            </div>
                            <div className="presentation-swiper-item-img">
                                <img src={`./images/presentation/${item.img}`} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
};

export default PresentationSlider;