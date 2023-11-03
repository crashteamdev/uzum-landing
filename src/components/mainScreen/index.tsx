import { useTranslation } from 'react-i18next';
import './style.scss';
import { Link } from "react-scroll";

const MainScreen: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="main-screen">
            <div className="container">
                <div className="row main-screen-row">
                    <div>
                        <div className="main-screen-title">{t('mainScreen.title')}</div>
                        <div className="main-screen-desc">{t('mainScreen.desc')}</div>
                        <div className="main-screen-btn-list">
                            <a href="https://lk.marketdb.org/" className='btn btn--orange'>{t('mainScreen.btnFree')}</a>
                            <Link
                                className='btn'
                                to="tariff"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                {t('mainScreen.btnTariff')}
                            </Link>
                        </div>
                    </div>
                    <div className='main-screen-img'>
                        <img src="./images/inform.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainScreen;
