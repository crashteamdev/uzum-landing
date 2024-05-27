import { AppModal } from "@/shared/components/AppModal";
import { APISRMLEAD } from "@/shared/config";
import { validate } from "@/shared/hooks/useValidate";
import clsx from "clsx";
import { useFormik } from "formik";
import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import PhoneInput from 'react-phone-number-input/input';
import Image from 'next/image';
import Link from 'next/link';

type IPropsAppModalDemo = {
    open: boolean;
    handleClose: () => void;
}

export const AppModalDemo = ({open, handleClose} :IPropsAppModalDemo) => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [timeout, setTimeout] = useState(false);

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
                            {error && <div className='mt-4 text-[red]'>Неизвестная ошибка! <br />Обратитесь в <Link className="underline" target='_blank' rel="noreferrer" href="https://t.me/marketdb_manager">тех.поддержку в Telegram</Link>.</div>}
                        </>
                    :
                        <div className='flex flex-col justify-center items-center'>
                            <div className='mb-[30px]'>
                                <Image src="/images/icon/success.png" width={68} height={68} alt="Успешно" />
                            </div>
                            <div className="form-title">Спасибо за заявку!</div>
                            <div className="form-desc">Мы свяжемся с вами в ближайшее время. А пока вы можете авторизоваться в <Link className="font-semibold underline text-black-800" href="https://space.marketdb.pro/" target="_blank">личном кабинете</Link>, что ускорит выдачу вам демо режиме!</div>
                        </div>
                    }

                    {timeout &&
                        <div className='absolute w-full h-full bg-blueGray-100/60 right-0 top-0 flex items-center justify-center'>
                            <span className="loader"></span>
                        </div>
                    }
                </div>
            </AppModal>
    );
};