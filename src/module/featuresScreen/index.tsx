"use client";

import Image from 'next/image';
import './style.scss';
import { useWindowSize } from "@uidotdev/usehooks";
import Link from 'next/link';

import { AppModal } from '@/shared/components/AppModal';
import { useModal } from '@/shared/hooks/useModal';

import { useFormik, FormikErrors, FormikValues } from 'formik';
import clsx from 'clsx';
import { APISRMLEAD } from '@/shared/config';

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input/input';
import { validate } from '@/shared/hooks/useValidate';

const FeaturesScreen: React.FC = () => {
    const size = useWindowSize();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [timeout, setTimeout] = useState(false);

    const { open, handleToggle, handleClose } = useModal();
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
    return (
        <>
            <div className="features-screen">
                <div className="container">
                    <div className="title">Дополнительные возможности</div>
                    <div className="desc">Ознакомьтесь с нашими дополнительными возможностями</div>
                    <div className="features-list">
                        <div className='features-list-column features-list-column--first'>
                            <div className="features-list-item features-list-item--dark">
                                <div className='features-list-item-content'>
                                    <div className="features-list-item__title">Изучение дополнительной <br />статистики по категориям</div>
                                    <div className="features-list-item__desc">С помощью дополнительной<br />информации по категориям <br />вы сможете принимать<br />верные решения для<br /> работы на маркетплейсе.</div>
                                    <div onClick={handleToggle} className="features-list-item__link cursor-pointer">Попробовать бесплатно</div>
                                </div>
                                {(size?.width! >= 1080) && <Image width={259} height={259} src="/images/features-1.png" alt="" />}
                            </div>
                            <div className="features-list-item features-list-item--blue">
                                {(size?.width! >= 1080) && <Image width={259} height={309} src="/images/features-2.png" alt="" /> }
                                <div className='features-list-item-content'>
                                    <div className="features-list-item__title">Изучение рынка и потребностей клиентов и других факторов</div>
                                    <div className="features-list-item__desc">Отчеты позволять вам определить какие товары лучше всего продаются, а какие имеют высокую конкуренцию</div>
                                    <div onClick={handleToggle} className="features-list-item__link cursor-pointer">Попробовать бесплатно</div>
                                </div>
                            </div>
                        </div>
                        <div className='features-list-column features-list-column--full'>
                            <div className="features-list-item">
                                <div className="features-list-item__title">ABC Анализ в Excel отчетах</div>
                                <div className="features-list-item__desc">ABC Продажи и ABC Выручка в отчетах позволят здаров смотреть и выбирать товар для поставки на маркетплейсы</div>
                                <div onClick={handleToggle} className="features-list-item__link cursor-pointer">Попробовать бесплатно</div>
                                {(size?.width! >= 1080) && <Image width={476} height={350} src="/images/features-3.png" alt="" />}
                            </div>
                        </div>
                    </div>
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

export default FeaturesScreen;
