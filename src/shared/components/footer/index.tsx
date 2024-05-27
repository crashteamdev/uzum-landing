"use client";
import Image from 'next/image';
import { TelegramIcon, VkIcon } from '../icons/socialIcons';
import './style.scss';
import MailIcon from '../icons/mailIcon';
import PhoneIcon from '../icons/phoneIcon';
import Link from 'next/link';
import { menuItem } from '../header/statics';
import { Link as ScrollLink } from 'react-scroll';

interface IProps {
    footerLayout?: 1 | 2;
}

const Footer: React.FC = ({ footerLayout }: IProps) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <a href="/" className='footer-top-logo relative'>
                        <Image fill src="/images/logo.svg" alt="" />
                    </a>
                    <div className="social-link">
                        <a target='_blank' rel="noreferrer" href="https://t.me/marketdbchat">
                            <TelegramIcon color='white' />
                        </a>
                        <a target='_blank' rel="noreferrer" href="https://vk.com/markdbru">
                            <VkIcon color="white" />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-menu">
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
                    <div className="footer-bottom-contacts">
                        <a href="mailto:support@marketdb.ru">
                            <MailIcon color='white' />
                            support@marketdb.ru
                        </a>
                        {/* <a href="tel:+79373735469">
                            <PhoneIcon color="white" />
                            +7 937 373 54 69
                        </a> */}
                    </div>
                </div>
            </div>
            <div className="footer-bottom-line"></div>
            <div className="container">
                <div className="footer-copyright-row">
                    <span>@MarketDB 2024</span>
                    <div className='footer-copyright-link'>
                        <a href="/privacy">Политика  конфиденциальности и обработки данных</a>
                        <a href="/policy">Политика возврата</a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;