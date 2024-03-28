"use client";

import { FC, useState } from 'react';
import './style.scss';
import clsx from 'clsx';
import Image from 'next/image';
import { TelegramIcon } from '../icons/socialIcons';
import CloseIcon from '../icons/close';
import Link from 'next/link';
import { useTranslations } from 'next-intl';


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

    const header = useTranslations("header");
    const seo = useTranslations("seo");

    return (
        <>
            <header className={clsx("header z-[9999]", className)}>
                <div className="container">
                    <div className="row header-row">
                        <div className='header-left'>
                            <Link href="/" className="header-logo">
                                <Image fill src="/images/logo.svg" alt={seo("title")} />
                            </Link>
                            <div className="header-menu">
                                <Link className='active' href="/">{header("home")}</Link>
                                <Link
                                    href="/"
                                >
                                    {header("tariff")}
                                </Link>
                                <Link
                                    href="/"
                                >
                                    {header("about")}
                                </Link>
                                <Link target='_blank' rel="noreferrer" href="https://chromewebstore.google.com/detail/marketdb-%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0-uzumuz/blgbandfopjlfnfpgknfmdkboekolpcc">
                                    {header("plugin")}
                                </Link>
                            </div>
                        </div>
                        <div className="header-right">
                            <Link className='header-phone' target='_blank' rel="noreferrer" href="https://t.me/marketdbru">
                                <TelegramIcon color="#fff" />
                                {header("chat")}
                            </Link>
                            <Link className='btn' href="https://space.marketdb.pro/">{header("login")}</Link>
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
                                    <Image fill src="/images/logo-mob.svg" alt={seo("title")} />
                                </Link>
                                <div onClick={() => setBurger(false)}>
                                    <CloseIcon color='#1A1A1A' />
                                </div>
                            </div>
                            <div className="header-mob-menu-content">
                                <Link href="/">{header("home")}</Link>
                                <Link href="/">{header("tariff")}</Link>
                                <Link href="/">{header("about")}</Link>
                            </div>
                        </div>
                        <div className="header-mob-menu-bottom">
                            <Link target='_blank' rel="noreferrer" href="https://t.me/marketdbru" className='header-mob-menu-phone'>
                                <TelegramIcon color="#fff" />
                                {header("chat")}
                            </Link>
                            <Link target='_blank' rel="noreferrer" href="https://space.marketdb.pro/" className="btn">{header("login")}</Link>
                        </div>
                    </div>
                }
            </header>
        </>
    )
};

export default Header;
