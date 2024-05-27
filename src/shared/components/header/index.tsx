"use client";

import { FC, useEffect, useState } from 'react';
import './style.scss';
import clsx from 'clsx';
import Image from 'next/image';
import { TelegramIcon } from '../icons/socialIcons';
import CloseIcon from '../icons/close';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { menuItem } from './statics';

interface IProps {
    className?: string;
}

const Header: FC = ({ className }: IProps) => {
    const [btnLkSite, setBtnLkSite] = useState("Анализировать!");
    const [burger, setBurger] = useState(false);
    const [topBar, closeTopBar] = useState(true);

    const handleClose = () => {
        closeTopBar(false);
        localStorage.setItem('topbar1', 'false');
    }

    // useEffect(() => {
    //     if (variant === 'btn-login') {
    //         setBtnLkSite("Войти")
    //     } else if(variant === 'btn-analytics') {
    //         setBtnLkSite("Анализировать");
    //     }
    // }, []);

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
            <header className={clsx("header z-10", className)}>
                <div className="container">
                    <div className="row header-row">
                        <div className='header-left'>
                            <Link href="/" className="header-logo">
                                <Image fill src="/images/logo.svg" alt="" />
                            </Link>
                            <div className="header-menu">
                                <Link className='active' href="/">Главная</Link>
                                {menuItem.map((item, index) => (
                                    <ScrollLink 
                                        key={index}
                                        to={item.to} 
                                        spy={true} 
                                        smooth={true} 
                                        duration={500} 
                                    >
                                        {item.name}
                                    </ScrollLink>
                                ))}
                            </div>
                        </div>
                        <div className="header-right">
                            <Link className='header-phone' target='_blank' rel="noreferrer" href="https://t.me/marketdb_manager">
                                <TelegramIcon color="#fff" />
                                Напишите нам!
                            </Link>
                            <Link className='btn' href="https://space.marketdb.pro/">{btnLkSite}</Link>
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
                                    <Image src="/images/logo-mob.svg" alt="" fill />
                                </Link>
                                <div onClick={() => setBurger(false)}>
                                    <CloseIcon color='#1A1A1A' />
                                </div>
                            </div>
                            <div className="header-mob-menu-content">
                                <Link href="/">Главная</Link>
                                {menuItem.map((item, index) => (
                                    <ScrollLink 
                                        key={index}
                                        to={item.to} 
                                        spy={true} 
                                        smooth={true} 
                                        duration={500}
                                        onClick={() => setBurger(false)}
                                    >
                                        {item.name}
                                    </ScrollLink>
                                ))}
                            </div>
                        </div>
                        <div className="header-mob-menu-bottom">
                            <Link target='_blank' rel="noreferrer" href="https://t.me/marketdb_manager" className='header-mob-menu-phone flex items-center gap-1 font-medium'>
                                <TelegramIcon color="black" />
                                Напишите нам!
                            </Link>
                            <Link target='_blank' rel="noreferrer" href="https://space.marketdb.pro/" className="btn">{btnLkSite}</Link>
                        </div>
                    </div>
                }
            </header>
        </>
    )
};

export default Header;
