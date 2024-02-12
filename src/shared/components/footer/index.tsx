import Image from 'next/image';
import { TelegramIcon, VkIcon } from '../icons/socialIcons';
import './style.scss';
import MailIcon from '../icons/mailIcon';
import PhoneIcon from '../icons/phoneIcon';
import Link from 'next/link';

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
                        <a target='_blank' rel="noreferrer" href="https://t.me/marketdbru">
                            <TelegramIcon color='white' />
                        </a>
                        <a target='_blank' rel="noreferrer" href="https://vk.com/markdbru">
                            <VkIcon color="white" />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-menu">
                        <a href="/">Главная</a>
                        <Link href="/">Тарифы</Link>
                        <Link href="/">О нас</Link>
                        <a href="https://chromewebstore.google.com/detail/marketdb-%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0-uzumuz/blgbandfopjlfnfpgknfmdkboekolpcc">
                            Расширение
                        </a>
                    </div>
                    <div className="footer-bottom-contacts">
                        <a href="mailto:support@marketdb.ru">
                            <MailIcon color='white' />
                            support@marketdb.ru
                        </a>
                        <a href="tel:+79373735469">
                            <PhoneIcon color="white" />
                            +7 937 373 54 69
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-line"></div>
            <div className="container">
                <div className="footer-copyright-row">
                    <span>@MarketDB</span>
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