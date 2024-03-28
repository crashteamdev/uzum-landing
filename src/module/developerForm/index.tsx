"use client";

import MailIcon from '@/shared/components/icons/mailIcon';
import './style.scss';
import PhoneIcon from '@/shared/components/icons/phoneIcon';
import Image from 'next/image';
import { useFormik, FormikErrors, FormikValues } from 'formik';
import clsx from 'clsx';
import { useState } from 'react';
import { APISRMLEAD } from '@/shared/config';
import { v4 as uuidv4 } from 'uuid';
import { AppModal } from '@/shared/components/AppModal';
import { useModal } from '@/shared/hooks/useModal';
import PhoneInput, { Value } from 'react-phone-number-input/input';
import { validate } from '@/shared/hooks/useValidate';

const DeveloperScreen: React.FC = () => {
    const [success, setSuccess] = useState(false);
    const [, setError] = useState(false);
    const [, setTimeout] = useState(false);
    const { handleClose } = useModal();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            comment: ""
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
                    "leadType": "feedback",
                    "userIdentity": {
                        "firstname": values.name
                    },
                    "userPhoneNumber": values.phone,
                    "userEmail": values.email,
                    "feedbackMessage": values.comment
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
            <div className="developer-screen">
                <div className="container">
                    <div className="row developer-row">
                        <div className='developer-info'>
                            <div className='developer-info-content'>
                                <div className="title">Обратная связь</div>
                                <div className="desc">С нами можно связаться через почту <a className='underline' href="mailto:support@marketdb.ru">support@marketdb.ru</a> или через <a className='underline' href="https://t.me/marketdbchat">Телеграм чат</a></div>
                                <div className="developer-contacts">
                                    <a href="mailto:support@marketdb.ru">
                                        <MailIcon color="#3C7BEB" />
                                        support@marketdb.ru
                                    </a>
                                    <a href="tel:+79373735469">
                                        <PhoneIcon color="#3C7BEB" />
                                        +7 937 373 54 69
                                    </a>
                                </div>
                            </div>
                            <Image width={300} height={300} src="/images/developer.png" alt="" />
                        </div>
                        <div className='form max-md:my-[30px]'>
                            <div className="form-title">Остались вопросы?</div>
                            <div className="form-desc">Оставь свой вопрос в форме и мы свяжемся с тобой!</div>
                            <form onSubmit={formik.handleSubmit}>
                                <label htmlFor="name">
                                    <div className='w-full'>
                                        <input
                                            id="name"
                                            type="text" 
                                            placeholder='Как тебя зовут?*' 
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                            className={clsx("", {
                                                "!border !border-[red]": formik.errors.name
                                            })}
                                        />
                                    </div>
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
                                <label htmlFor="email" className='relative flex items-center'>
                                    <input 
                                        id="email"
                                        type="email" 
                                        placeholder='E-mail*' 
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        className={clsx("", {
                                            "!border !border-[red]": formik.errors.email
                                        })}
                                    />
                                    {/* <span className='absolute right-3 text-sm font-semibold text-[red]'>{formik.errors.email}</span> */}
                                </label>
                                <label htmlFor="comment">
                                    <textarea 
                                        id="comment"
                                        placeholder='Вопрос, обратная связь :)' 
                                        onChange={formik.handleChange}
                                        value={formik.values.comment}
                                    />
                                </label>
                                <div className='form-send'>
                                    <button type="submit" className="btn btn--orange">Отправить заявку</button>
                                    <span>Нажимая на кнопку, вы даете <a href="/privacy">согласие на обработку своих персональных данных</a></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <AppModal
            className='flex justify-center items-center'
            isOpen={success}
            closeHandler={handleClose}
        >
            <div className='form w-full !max-w-full !h-full'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='mb-[30px]'>
                        <Image src="/images/icon/success.png" width={68} height={68} alt="Успешно" />
                    </div>
                    <div className="form-title">Спасибо за заявку!</div>
                    <div className="form-desc">Мы свяжемся с вами в ближайшее время.</div>
                </div>
            </div>
            </AppModal>
        </>
    )
};

export default DeveloperScreen;