import Image from 'next/image';
import { TelegramIcon, VkIcon } from '../icons/socialIcons';
import './style.scss';
import MailIcon from '../icons/mailIcon';
import PhoneIcon from '../icons/phoneIcon';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface IProps {
    footerLayout?: 1 | 2;
}

const Footer: React.FC = ({ footerLayout }: IProps) => {
    const header = useTranslations("header");
    const seo = useTranslations("seo");
    const footer = useTranslations("footer");

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <a href="/" className='footer-top-logo relative'>
                        <Image fill src="/images/logo.svg" alt={seo("title")} />
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
                        <a href="/">{header("home")}</a>
                        <Link href="/">{header("tariff")}</Link>
                        <Link href="/">{header("about")}</Link>
                        <a href="https://chromewebstore.google.com/detail/marketdb-%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0-uzumuz/blgbandfopjlfnfpgknfmdkboekolpcc">
                            {header("plugin")}
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
                    <span>@MarketDB 2024</span>
                    <div className='footer-copyright-link'>
                        <a href="/privacy">{footer("privacy")}</a>
                        <a href="/policy">{footer("policy")}</a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;