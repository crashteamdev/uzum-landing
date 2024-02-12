"use client";

import Image from "next/image";
import { data } from "./static";
import ArrowNext from "@/shared/components/icons/arrowNext";
import clsx from "clsx";
import { AppModal } from '@/shared/components/AppModal';
import { useModal } from '@/shared/hooks/useModal';

import { useFormik, FormikErrors, FormikValues } from 'formik';
import { useMask } from '@react-input/mask';
import { APISRMLEAD } from '@/shared/config';

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

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
    } else if (!/^\+?\d{11,13}$/.test(values.phone)) {
      errors.phone = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
};

const RepricerAbout = () => {
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
    return (
        <>
            <div className="bg-white py-[124px] max-md:py-[50px]">
                <div className="container">
                    <div className="flex flex-col gap-[15px] mb-[72px]">
                        {/* <div className="relative w-[100px] h-[80px] max-md:hidden">
                            <Image src="/images/repricer/bg.png" fill  alt="Сервис автоматического изменения цен на маркетплейсах" />
                        </div> */}
                        <div className="title">Сервис автоматического изменения цен</div>
                        <div className="desc desc w-full max-w-[700px]">Дополнительный буст для твоих продаж на маркетплейсах! Изучи востребованный инструмент, чтоб оставаться конкурентноспособным. </div>
                    </div>
                    <div className="flex gap-[24px] w-full max-lg:flex-col">
                        {data.map((item, key) => (
                            <div key={key} className={clsx("h-[450px] relative w-full rounded-[16px] p-[32px] flex flex-col gap-[24px] max-md:gap-[15px] max-md:h-full max-md:p-[15px] bg-[#061C3D] text-white")}>
                                <div className="max-md:relative max-md:h-[100px] max-md:w-full max-md:max-w-[100px]">
                                    <Image className="max-md:absolute" src={`/images/repricer/${item.icon}`} alt={item.title} width={148} height={148} />
                                </div>
                                <div className="flex flex-col gap-[12px]">
                                    <div className="text-[24px] font-medium leading-[32px] max-md:text-[20px] max-md:leading-[24px]">{item.title}</div>
                                    <div className="text-[16px] font-normal leading-[24px] max-md:text-[14px] max-md:leading-[20px]">{item.desc}</div>
                                </div>
                                <div className="absolute max-md:static bottom-[32px] rounded-[7px] bg-white h-[48px] text-[#061C3D] text-[16px] font-bold leading-[48px] gap-[12px] flex items-center w-[278px] justify-center max-md:text-[14px] max-md:h-[40px] max-md:w-full cursor-pointer" onClick={handleToggle}>Пробовать бесплатно <ArrowNext color="#061C3D" /></div>
                            </div>
                        ))}
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
                                    <input 
                                        id="phone"
                                        type="text" 
                                        placeholder='Введите номер телефона' 
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
    );
};

export default RepricerAbout;