import { VkIcon } from '../../components/icons/socialIcons';
import { TelegramIcon } from '../../components/icons/socialIcons';
import './style.scss';
import { Link } from "react-scroll";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <a href="/" className='footer-top-logo'>
                        <img src="./images/logo.svg" alt="" />
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
                            <a href="https://vk.cc/coPhJM">Расширение</a>
                    </div>
                    {/* <div className="footer-bottom-contacts">
                        <a href="mailto:info-email@marketbd.ru">
                            <MailIcon color='white' />
                            info@marketbd.ru
                        </a>
                        <a href="tel:8 800 999 99 99">
                            <PhoneIcon color="white" />
                            8 800 999 99 99
                        </a>
                    </div> */}
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