"use client";

import { useState } from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from "clsx";
import { AppModal } from '@/shared/components/AppModal';
import { useModal } from '@/shared/hooks/useModal';

import { useFormik, FormikErrors, FormikValues } from 'formik';
import { useMask } from '@react-input/mask';
import { APISRMLEAD } from '@/shared/config';
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';


interface Values {
    name: string;
    email: string;
    phone: string;
}

const validate = (values: Values): FormikErrors<Values> => {
    const errors: FormikErrors<Values> = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }
  
    if (!values.phone) {
      errors.phone = 'Required';
    } else if (values.phone.length > 20) {
      errors.phone = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
};

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
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [timeout, setTimeout] = useState(false);

    const { open, handleToggle, handleClose } = useModal();
    const inputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ } });
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
        },
        validate,
        onSubmit: async (values) => {
            setTimeout(true);
            await fetch(APISRMLEAD, {
                method: "POST",
                headers: {
                    "X-Request-ID": uuidv4(),
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "leadType": "demo",
                    "userIdentity": {
                        "firstname": values.name
                    },
                    "userPhoneNumber": values.phone,
                    "userEmail": values.email
                })
            }).then((data) => {
                if(data.status === 200) {
                    setSuccess(true);
                    setTimeout(false);
                } else {
                    setError(true);
                    setTimeout(false);
                }
            });
        },
    });

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
                {title: 'Отчеты в формате Excel по магазинам'},
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
                {title: 'Отчеты в формате Excel по магазинам'},
                {title: 'Отчеты в формате Excel по категориям'},
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
                {title: 'Отчеты в формате Excel по магазинам'},
                {title: 'Отчеты в формате Excel по категориям'},
                {title: 'Приоритетная поддержка'},
                {
                    title: 'Сервис автоматического изменения цен',
                    new: true
                }
            ]
        }
    ]

    return (
        <>
            <div className="subs-screen">
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

                                            {!item.free ? <span>{threeMonth ? Math.round((item.price * 3 - (item.price * 3 * item.diccountMath)) - 1) : item.price} $</span> : <span>На 5 дней</span>}
                                            
                                            {!item.free && (
                                                !threeMonth ?
                                                    (<div className="subs-item__name--date"> / месяц</div>)
                                                    :
                                                    (<div className="subs-item__name--date"> / 3 месяца</div>)
                                                )
                                            }

                                        </div>
                                        {threeMonth && !item.free && <div className='text-[12px] text-grayModern-400 font-medium border-t border-grayModern-400 pt-[10px]'>Месяц за {Math.round((item.price * 3 - (item.price * 3 * item.diccountMath)) / 3)}<span> $</span></div>}
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
            <AppModal
                className='flex justify-center items-center'
                isOpen={open}
                closeHandler={handleClose}
            >
                <div className='form w-full !max-w-full !h-full'>
                    {!success ?
                        <>
                            <div className="form-title">Протестируй бесплатно</div>
                            <div className="form-desc w-full max-w-[400px]">Оставь заявку, и мы откроем бесплатный доступ к сервису на 5 дней.</div>
                            <form onSubmit={formik.handleSubmit}>
                                <label htmlFor="name" className='w-full'>
                                    <input
                                        id="name"
                                        type="text" 
                                        placeholder='Имя' 
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        className={clsx("", {
                                            "!border !border-[red]": formik.errors.name
                                        })}
                                    />
                                    <input 
                                        id="phone"
                                        type="text" 
                                        placeholder='+7 (_ _ _) _ _ _   _ _  _ _' 
                                        onChange={formik.handleChange}
                                        value={formik.values.phone}
                                        className={clsx("", {
                                            "!border !border-[red]": formik.errors.phone
                                        })}
                                        ref={inputRef}
                                    />
                                </label>
                                <label htmlFor="email">
                                    <input 
                                        id="email"
                                        type="email" 
                                        placeholder='E-mail' 
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        className={clsx("", {
                                            "!border !border-[red]": formik.errors.email
                                        })}
                                    />
                                </label>
                                <div className='form-send'>
                                    <button type="submit" className="btn btn--orange">Отправить заявку</button>
                                    <span>Нажимая на кнопку, вы даете <a href="/privacy">согласие на обработку своих персональных данных</a></span>
                                </div>
                            </form>
                            {error && <div className='mt-4 text-[red]'>Неизвестная ошибка! Обратитесь в тех.поддержку.</div>}
                        </>
                    :
                        <div className='flex flex-col justify-center items-center'>
                            <div className='mb-[30px]'>
                                <Image src="/images/icon/success.png" width={68} height={68} alt="Успешно" />
                            </div>
                            <div className="form-title">Спасибо за заявку!</div>
                            <div className="form-desc">Мы свяжемся с вами в ближайшее время.</div>
                        </div>
                    }

                    {timeout &&
                        <div className='absolute w-full h-full bg-blueGray-100/60 right-0 top-0 flex items-center justify-center'>
                            <span className="loader"></span>
                        </div>
                    }
                </div>
            </AppModal>
        </>
    )
};

export default SubsScreen;
