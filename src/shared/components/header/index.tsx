"use client";

import { FC, useState } from 'react';
import './style.scss';
import clsx from 'clsx';
import Image from 'next/image';
import { TelegramIcon } from '../icons/socialIcons';
import CloseIcon from '../icons/close';
import Link from 'next/link';


interface IProps {
    className?: string;
}

const Header: FC = ({ className }: IProps) => {
    const [burger, setBurger] = useState(false);
    const [topBar, closeTopBar] = useState(true);

    const handleClose = () => {
        closeTopBar(false);
        localStorage.setItem('topbar1', 'false');
    }

    return (
        <>
            {/* {(localStorage.getItem('topbar1') !== 'false' && topBar) &&
                <div className='top-bar'>
                    <span>«Что продавать на Маркетплейсе? Ищем прибыльные товары через сервис аналитики MarketDB» сегодня в 18:00!</span>
                    <div className='btn-group'>
                        <a className='btn btn-active' href="https://t.me/+NtOosCLh5d9jNmVi" rel='noreferrer' target='_blank' onClick={handleClose}>Записаться</a>
                        <div className='btn' onClick={handleClose}>Закрыть</div>
                    </div>
                </div>
            } */}
            <header className={clsx("header z-[9999]", className)}>
                <div className="container">
                    <div className="row header-row">
                        <div className='header-left'>
                            <Link href="/" className="header-logo">
                                <Image fill src="/images/logo.svg" alt="" />
                            </Link>
                            <div className="header-menu">
                                <Link className='active' href="/">Главная</Link>
                                <Link
                                    href="/"
                                >
                                    Тарифы
                                </Link>
                                <Link
                                    href="/"
                                >
                                    О нас
                                </Link>
                                <Link target='_blank' rel="noreferrer" href="https://vk.cc/coPhwU">
                                    Расширение
                                </Link>
                            </div>
                        </div>
                        <div className="header-right">
                            <Link className='header-phone' target='_blank' rel="noreferrer" href="https://t.me/marketdbru">
                                <TelegramIcon color="#fff" />
                                Чат продавцов
                            </Link>
                            <Link className='btn' href="https://space.marketdb.pro/">Войти</Link>
                        </div>
                        <div className="header-burger" onClick={() => setBurger(true)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                {burger &&
                    <div className="header-mob-menu">
                        <div>
                            <div className="header-mob-menu-top">
                                <Link href="/" className="header-logo">
                                    <Image fill src="/images/logo-mob.svg" alt="" />
                                </Link>
                                <div onClick={() => setBurger(false)}>
                                    <CloseIcon color='#1A1A1A' />
                                </div>
                            </div>
                            <div className="header-mob-menu-content">
                                <Link href="/">Главная</Link>
                                <Link href="/">Тарифы</Link>
                                <Link href="/">О нас</Link>
                            </div>
                        </div>
                        <div className="header-mob-menu-bottom">
                            <Link target='_blank' rel="noreferrer" href="https://t.me/marketdbru" className='header-mob-menu-phone'>
                                <TelegramIcon color="#fff" />
                                Чат продавцов
                            </Link>
                            <Link target='_blank' rel="noreferrer" href="https://space.marketdb.pro/" className="btn">Войти</Link>
                        </div>
                    </div>
                }
            </header>
        </>
    )
};

export default Header;
