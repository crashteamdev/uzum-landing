"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrowIcon from '@/shared/components/icons/arrowIcon';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { type Swiper as SwiperTypes } from "swiper";
import { posts } from './statics/posts';

import { AppModal } from '@/shared/components/AppModal';
import { useModal } from '@/shared/hooks/useModal';
import { useFormik, FormikErrors, FormikValues } from 'formik';
import clsx from 'clsx';
import { APISRMLEAD } from '@/shared/config';

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { validate } from '@/shared/hooks/useValidate';
import PhoneInput from 'react-phone-number-input/input';

const SellServices = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [timeout, setTimeout] = useState(false);

    const [nameServices, setNameServices] = useState<String>("");

    const { open, handleToggle, handleClose } = useModal();
    const handleToggleServices = (nameServices: string) => {
        setNameServices(nameServices);
        handleToggle();
    }
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            nameServices: ""
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
                    "leadType": "service",
                    "userIdentity": {
                        "firstname": values.name
                    },
                    "userPhoneNumber": values.phone,
                    "userEmail": values.email,
                    "serviceName": nameServices
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

    const swiperRef = useRef<SwiperTypes>();
    const shortenedText = (text:string) => {
        return text.length > 100 ? text.slice(0, 100) + "..." : text;
    }
    return (
        <>
            <div className="posts-screen overflow-hidden">
                <div className="container">
                    <div className="row-post">
                        <div className='flex flex-col'>
                            <div className="title">Делегируйте задачи профессионалам</div>
                            <div className="desc w-full max-w-[500px]">Хотите сэкономить время и силы? Не ищите подрядчиков, все услуги по маркетплейсам через одного менеджера.</div>
                        </div>
                        <div className="slider-navigation">
                            <div onClick={() => swiperRef.current?.slidePrev()} className="slider-navigation__arrow slider-navigation__arrow-prev">
                                <ArrowIcon color='#959595' />
                            </div>
                            <div onClick={() => swiperRef.current?.slideNext()} className="slider-navigation__arrow slider-navigation__arrow-next">
                                <ArrowIcon color='#959595' />
                            </div>
                        </div>
                    </div>
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
                        className="post-swiper"
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
                        {posts.map((item, key) => (
                            <SwiperSlide key={key} className="post-item">
                                <div>
                                    <div className="post-item__img">
                                        <Image height={229} width={380} src={item.img} alt="" />
                                    </div>
                                    <div className="post-item-content">
                                        <div className="post-item__title">{item.title}</div>
                                        <div className="post-item__desc">{item.desc}</div>
                                        <div className='cursor-pointer' onClick={()=> handleToggleServices(item.title)}>Подробнее</div>
                                    </div>
                                </div>
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
                            <div className="form-title">Делегируйте задачи профессионалам</div>
                            <div className="form-desc w-full max-w-[400px]">Оставь заявку и мы свяжемся с тобой для обсуждения деталей.</div>
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
                                    <PhoneInput
                                        id="phone"
                                        type="text" 
                                        placeholder='Номер телефона*'
                                        value={formik.values.phone}
                                        onChange={(e) => formik.setFieldValue("phone", e)}
                                        className={clsx("", {
                                            "!border !border-[red]": formik.errors.phone
                                        })}
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
    );
};

export default SellServices;