import { useRef } from 'react';

import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation, Pagination } from 'swiper';
import { EffectFade } from 'swiper';
import 'swiper/css/effect-fade';
import ArrowIcon from '../icons/arrowIcon';

interface DataItem {
    count: string;
    title: string;
    desc: string;
    img: string;
}


const data: DataItem[] = [
    {
        count: "01",
        title: "Аналитика конкурентов",
        desc: "Проанализируем каждый товар в покупках ваших клиентов, дадим точную статистику",
        img: "img-1.png"
    },
    {
        count: "02",
        title: "Товары конкурентов",
        desc: "Похожие товары конкурентов, работает на основе нашего собственного алгоритма и подбирает товары максимально похожие на ваш",
        img: "img-2.png"
    },
    {
        count: "03",
        title: "Позиции в категориях",
        desc: "История позиций в категориях, будьте в курсе на какой позиции находилась ваша карточка, что на нее повлияло а так же отслеживайте позиции конкурентов",
        img: "img-3.png"
    },
]

const PresentationSlider:React.FC = () => {

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