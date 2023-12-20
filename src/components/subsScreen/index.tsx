import { useState } from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ListItem {
    title: string;
}

interface DataItem {
    title: string;
    desc: string;
    price: number;
    months: string | number;
    discount?: number;
    diccountMath: number;
    free: boolean;
    list: ListItem[],
}

const SubsScreen: React.FC = () => {

    const [threeMonth, setThreeMonth] = useState(false);

    const data: DataItem[] = [
        {
            title: "Бесплатный",
            desc: "Тариф выдается автоматически! Навсегда!",
            price: 0,
            months: threeMonth ? 3 : '',
            diccountMath: 0,
            free: true,
            list: [
                {title: 'Доступ к расширению'},
                {title: '3 дня периода аналитики'},
                {title: 'История позиций товара'},
            ]
        },
        {
            title: "Базовый",
            desc: "Тариф подходит для начинающих продавцов",
            price: 15,
            discount: 10,
            diccountMath: 0.10,
            free: false,
            months: threeMonth ? 3 : '',
            list: [
                {title: 'Доступ к расширению'},
                {title: '30 дней периода аналитики'},
                {title: 'История позиций товара'},
                {title: '3 отчета по магазинам в сутки'}
            ]
        },
        {
            title: "Расширенный",
            desc: "Тариф используют уже действующие продавцы для улучшения ассортимента",
            price: 30,
            discount: 15,
            diccountMath: 0.15,
            free: false,
            months: threeMonth ? 3 : '',
            list: [
                {title: 'Доступ к расширению'},
                {title: '30 / 60 / 90 дней периода аналитики'},
                {title: 'История позиций товара'},
                {title: '6 отчетов Excel по магазинам в сутки'},
                {title: '2 отчета Excel по категориям в сутки'},
                {title: 'Приоритетная поддержка'},
            ]
        },
        {
            title: "Продвинутый",
            desc: "Максимальный тариф для продвинутых продавцов",
            price: 40,
            discount: 20,
            diccountMath: 0.20,
            free: false,
            months: threeMonth ? 3 : '',
            list: [
                {title: 'Доступ к расширению'},
                {title: '30 / 60 / 90 / 120 дней периода аналитики'},
                {title: 'История позиций товара'},
                {title: '15 отчетов Excel по магазинам в сутки'},
                {title: '4 отчета Excel по категориям в сутки'},
                {title: 'Приоритетная поддержка'},
            ]
        }
    ]

    return (
        <div className="subs-screen">
            <div className="container">
                <div className="subs-screen-row" id="tariff">
                    <div className="title">Тарифы</div>
                    <div className="tabs">
                        <div className={!threeMonth ? 'tabs-item active' : 'tabs-item'} onClick={() => setThreeMonth(!threeMonth)}>
                            <span>1 месяц</span>
                        </div>
                        <div className={threeMonth ? 'tabs-item active' : 'tabs-item'} onClick={() => setThreeMonth(!threeMonth)}>
                            <span>3 месяца</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container container-subs-swiper">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    className="subs-list"
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                        },
                        475: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        890: {
                            slidesPerView: 2.9,
                        },
                        1200: {
                            slidesPerView: 4,
                        }
                    }}
                >
                    {data.map(item => (
                        <SwiperSlide className="subs-item">
                            <div>
                                <div className="subs-item__title">{item.title}</div>
                                <div className="subs-item__desc">{item.desc}</div>
                                <div className="subs-item__name">
                                    {!item.free ? <span>{threeMonth ? Math.round((item.price * 3 - (item.price * 3 * 0.10)) - 1) : item.price} $</span> : <span>Бесплатно</span>}
                                    
                                    {!item.free && (
                                        !threeMonth ?
                                            (<div className="subs-item__name--date"> / месяц</div>)
                                            :
                                            (<div className="subs-item__name--date"> / 3 месяца</div>)
                                        )
                                    }
                                </div>
                                <div className="subs-advantages">
                                    {item.list.map(itemSubs => (
                                        <div className="subs-advantages__item active">{itemSubs.title}</div>
                                    ))}
                                </div>
                            </div>
                            <a href="https://space.marketdb.pro/" className='btn btn--orange'>Попробовать</a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
};

export default SubsScreen;
