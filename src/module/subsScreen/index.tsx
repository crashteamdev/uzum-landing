"use client";

import { useEffect, useState } from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useModal } from '@/shared/hooks/useModal';
import { AppModalDemo } from '@/components/AppModalDemo';
import { v4 as uuidv4 } from 'uuid';
import { formatNumber } from '@/shared/hooks/useFormatNumber';

interface ListItem {
    title: string;
    new?: boolean;
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
    const { open, handleToggle, handleClose } = useModal();
    const [currency, setCurrency] = useState<number | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const [threeMonth, setThreeMonth] = useState(false);

    const data: DataItem[] = [
        {
            title: "Демо",
            desc: "Тариф выдается по запросу через тех.поддержку.",
            price: 0,
            months: threeMonth ? 3 : '',
            diccountMath: 0,
            free: true,
            list: [
                {title: 'Доступ к расширению'},
                {title: '30 дней периода аналитики'},
                {title: 'Общая аналитика по категориям'},
                {title: 'Общая аналитика по магазинам'},
                {title: 'Магазины продавца'},
                {title: 'История позиций товара'},
                {title: 'Отчеты в формате Excel по магазинам 10 шт в сутки'},
                {title: 'Отчеты в формате Excel по категориям 10 шт в сутки'},
                {
                    title: 'Сервис автоматического изменения цен',
                    new: true
                }
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
                {title: 'Общая аналитика по категориям'},
                {title: 'Общая аналитика по магазинам'},
                {title: 'Магазины продавца'},
                {title: 'История позиций товара'},
                {title: 'Отчеты в формате Excel по магазинам (Без ограничений)'},
                {
                    title: 'Сервис автоматического изменения цен',
                    new: true
                }
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
                {title: 'Отчеты в формате Excel по магазинам (Без ограничений)'},
                {title: 'Отчеты в формате Excel по категориям (Без ограничений)'},
                {title: 'Общая аналитика по категориям'},
                {title: 'Общая аналитика по магазинам'},
                {title: 'Магазины продавца'},
                {title: 'Приоритетная поддержка'},
                {
                    title: 'Сервис автоматического изменения цен',
                    new: true
                }
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
                {title: 'Общая аналитика по категориям'},
                {title: 'Общая аналитика по магазинам'},
                {title: 'Магазины продавца'},
                {title: 'Отчеты в формате Excel по магазинам (Без ограничений)'},
                {title: 'Отчеты в формате Excel по категориям (Без ограничений)'},
                {title: 'Приоритетная поддержка'},
                {
                    title: 'Сервис автоматического изменения цен',
                    new: true
                }
            ]
        }
    ]

    useEffect(() => {
        const getCurrency = async () => {
            if (!isFetching) {
                setIsFetching(true);
                await fetch("https://api.marketdb.pro/gateway/exchange-rate?currency=UZS", {
                headers: { "X-Request-ID": uuidv4() }
                })
                .then((res) => res.json())
                .then(data => {
                    setCurrency(data.exchangeRate);
                    setIsFetching(false);
                })
                .catch(() => {
                    setIsFetching(false);
                });
            }
        };
    
        getCurrency();
      }, []);
    

    return (
        <>
            <div className="subs-screen" id="tariff">
                {/* <div className="circle-bg" style={{
                    background: "url(./images/bg/bg-subs.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom right",
                    backgroundSize: "100%"
                }}></div> */}
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
                        {data.map((item, key) => (
                            <SwiperSlide key={key} className="subs-item">
                                <div>
                                    <div className="subs-item__title">
                                        {item.title}
                                    </div>
                                    {threeMonth && !item.free && <div className='subs-item__discount'>{item.discount}% cкидка</div>}
                                    <div className="subs-item__desc">{item.desc}</div>

                                    <div className='subs-item-row border-b border-grayModern-400'>
                                        <div className="subs-item__name">

                                        {!item.free ? (
                                            <span>
                                            {currency ? (
                                                threeMonth ? 
                                                formatNumber(Math.round(item.price * currency * 3 * (1 - item.diccountMath))) :
                                                formatNumber(Math.round(item.price * currency))
                                            ) : '...'} сум
                                            </span>
                                        ) : (
                                            <span>На 5 дней</span>
                                        )}
                                            
                                            {!item.free && (
                                                !threeMonth ?
                                                    (<div className="subs-item__name--date">месяц</div>)
                                                    :
                                                    (<div className="subs-item__name--date">3 месяца</div>)
                                                )
                                            }

                                        </div>
                                        {threeMonth && !item.free && currency !== null && (
                                            <div className='text-[12px] text-grayModern-400 font-medium border-t border-grayModern-400 pt-[10px]'>
                                                Месяц за {formatNumber(Math.round((item.price * currency * 3 * (1 - item.diccountMath)) / 3))}<span> сум</span>
                                            </div>
                                        )}                                    
                                    </div>
                                    <div className="subs-advantages">
                                        {item.list.map((itemSubs, key) => (
                                            <div key={key} className="subs-advantages__item active">
                                                {itemSubs.title}
                                                {itemSubs.new && <span className='subs-advantages__item--new'>Новое!</span>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div onClick={handleToggle} className='btn btn--orange cursor-pointer'>Попробовать</div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <AppModalDemo open={open} handleClose={handleClose} />
        </>
    )
};

export default SubsScreen;
