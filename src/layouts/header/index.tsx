import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import ArrowIcon from '../../components/icons/arrowIcon';
import PhoneIcon from '../../components/icons/phoneIcon';
import './style.scss';
import CloseIcon from '../../components/icons/close';
import { TelegramIcon } from '../../components/icons/socialIcons';


interface IProps {
    headerLayout?: 1 | 2;
}


const Header: React.FC = ({ headerLayout }: IProps) => {
    const [burger, setBurger] = useState(false);
    return (
        <header className="header">
            <div className="container">
                <div className="row header-row">
                    <div className='header-left'>
                        <a href="/" className="header-logo">
                            <img src="./images/logo.svg" alt="" />
                        </a>
                        <div className="header-menu">
                            <a className='active' href="/">Главная</a>
                            <Link
                                activeClass="active"
                                to="tariff"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Тарифы
                            </Link>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                О нас
                            </Link>
                        </div>
                    </div>
                    <div className="header-right">
                        <a className='header-phone' target='_blank' href="https://t.me/marketdbru">
                            <TelegramIcon color="#fff" />
                            Telegram
                        </a>
                        <a className='btn' href="https://lk.marketdb.org/">Войти</a>
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
                            <a href="/" className="header-logo">
                                <img src="./images/logo-mob.svg" alt="" />
                            </a>
                            <div onClick={() => setBurger(false)}>
                                <CloseIcon color='#1A1A1A' />
                            </div>
                        </div>
                        <div className="header-mob-menu-content">
                            <a href="/">Главная</a>
                            <a href="/">Тарифы</a>
                            <a href="/">О нас</a>
                        </div>
                    </div>
                    <div className="header-mob-menu-bottom">
                        <a target='_blank' href="https://t.me/marketdbru" className='header-mob-menu-phone'>
                            <TelegramIcon color="#fff" />
                            Telegram
                        </a>
                        <a href="https://lk.marketdb.org/" className="btn">Войти</a>
                    </div>
                </div>
            }
        </header>
    )
};

export default Header;