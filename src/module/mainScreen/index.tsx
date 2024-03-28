"use client";

import Image from 'next/image';
import './style.scss';
import Link from 'next/link';
import { AppModal } from '@/shared/components/AppModal';
import { useModal } from '@/shared/hooks/useModal';

import './style.scss';
import { useFormik, FormikErrors, FormikValues } from 'formik';
import clsx from 'clsx';
import { useMask } from '@react-input/mask';
import { APISRMLEAD } from '@/shared/config';

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import {useTranslations} from 'next-intl';

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

const MainScreen: React.FC = () => {
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
    const index = useTranslations("index");
    const btn = useTranslations("btn");
    const form = useTranslations("form");

    return (
        <>
            <div className="main-screen developer">
                <div className="container relative z-50">
                    <div className="row main-screen-row">
                        <div>
                            <div className="main-screen-title">{index('firstSection.title')}</div>
                            <div className="main-screen-desc">
                                {index('firstSection.desc')}
                            </div>
                            <div className="main-screen-btn-list">
                                <Link href={""} onClick={() => handleToggle()} className='btn btn--orange'>{btn('free')}</Link>
                                <Link
                                    href="/"
                                    className='btn'
                                >
                                    {btn('tariff')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute right-0 w-full h-full flex justify-end items-center max-[992px]:hidden'>
                    <div className='w-full max-w-[880px] h-[668px] relative max-[1400px]:max-w-[600px] max-[1400px]:h-[500px]'>
                        <Image blurDataURL="URL" placeholder="blur" fill className='' src="/images/inform.png" alt={index('firstSection.imgAlt')} />
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
                            <div className="form-title">{form("title")}</div>
                            <div className="form-desc w-full max-w-[400px]">{form("desc")}</div>
                            <form onSubmit={formik.handleSubmit}>
                                <label htmlFor="name" className='w-full'>
                                    <input
                                        id="name"
                                        type="text" 
                                        placeholder={form("name")} 
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        className={clsx("", {
                                            "!border !border-[red]": formik.errors.name
                                        })}
                                    />
                                    <input 
                                        id="phone"
                                        type="text" 
                                        placeholder={form("phone")} 
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
                                    <button type="submit" className="btn btn--orange">{form("btn")}</button>
                                    <span>{form("privacy.one")} <a href="/privacy">{form("privacy.two")}</a></span>
                                </div>
                            </form>
                            {error && <div className='mt-4 text-[red]'>{form("error.title")}</div>}
                        </>
                    :
                        <div className='flex flex-col justify-center items-center'>
                            <div className='mb-[30px]'>
                                <Image src="/images/icon/success.png" width={68} height={68} alt="Успешно" />
                            </div>
                            <div className="form-title">{form("thanks.title")}</div>
                            <div className="form-desc">{form("thanks.desc")}</div>
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

export default MainScreen;
