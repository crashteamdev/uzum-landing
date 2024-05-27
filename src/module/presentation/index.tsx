"use client";

import { useRef } from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import ArrowIcon from '@/shared/components/icons/arrowIcon';
import Image from 'next/image';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { type Swiper as SwiperType } from "swiper";

interface DataItem {
    count: string;
    title: string;
    desc: string;
    img: string;
}

const data: DataItem[] = [
    {
        count: "01",
        title: "Аналитика категорий",
        desc: "Проанализируйте категории, включая дочерние категории по разным параметрам, периодам и отсортируйте так как вам удобно.",
        img: "img-analytics-cat.png"
    },
    {
        count: "02",
        title: "Аналитика каталога в категории",
        desc: "Аналатика каталога с возможность отсортировать и отфильтровать нужные показатели, а так же выбор периода аналитики.",
        img: "img-analytics-catalog.png"
    },
    {
        count: "03",
        title: "Сводка по категории",
        desc: "Общая сводка по категории за каждый день ввиде графиков.",
        img: "img-analytics-svodka.png"
    },
    {
        count: "04",
        title: "Расширение для браузера",
        desc: "Проанализируем каждый товар в покупках ваших клиентов, дадим точную статистику",
        img: "img-1.png"
    },
    {
        count: "05",
        title: "Расширение для браузера",
        desc: "Похожие товары конкурентов, работает на основе нашего собственного алгоритма и подбирает товары максимально похожие на ваш",
        img: "img-2.png"
    },
    {
        count: "06",
        title: "Расширение для браузера",
        desc: "История позиций в категориях, будьте в курсе на какой позиции находилась ваша карточка, что на нее повлияло а так же отслеживайте позиции конкурентов",
        img: "img-3.png"
    },
    {
        count: "07",
        title: "Расширение для браузера",
        desc: "Множество показатель продаж в магазине конкурента, в том числе отчет в формате Excel. А так же другие магазины продавца",
        img: "img-4.png"
    },
    {
        count: "08",
        title: "Расширение для браузера",
        desc: "Различные показатели для категории, за счет которой можно искать нужную нишу. А так же отчеты в формате Excel.",
        img: "img-5.png"
    },
    {
        count: "09",
        title: "Расширение для браузера",
        desc: "Данные о продажах, продавцев прямо в каталоге! Работает на всем сайте.",
        img: "img-6.png"
    },
]

const PresentationSlider: React.FC = () => {

    const swiperRef = useRef<SwiperType>();

    return (
        <div className="presentation-slider" style={{ paddingTop: "100px" }} id="analytics">
            <div className="container">
                <div className="title">Инструменты для продавцов</div>
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
                    {data.map((item, key) => (
                        <SwiperSlide key={key} className='presentation-swiper-item'>
                            <div className="presentation-swiper-item-content">
                                <div className="presentation-swiper-item__count">{item.count}</div>
                                <div>
                                    <div className="presentation-swiper-item__title">{item.title}</div>
                                    <div className="presentation-swiper-item__desc">{item.desc}</div>
                                </div>
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
                                <Image width={738} height={480} className='h-full object-cover object-left' src={`/images/presentation/${item.img}`} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
};

export default PresentationSlider;