import './style.scss';
import { Link } from "react-scroll";

const MainScreen: React.FC = () => {
    return (
        <div className="main-screen">
            <div className="container">
                <div className="row main-screen-row">
                    <div>
                        <div className="main-screen-title">Аналитика Uzum</div>
                        <div className="main-screen-desc">Сервис аналитики на основе браузерного расширения для Chrome, Opera, Mozilla и Яндекс браузер.</div>
                        <div className="main-screen-btn-list">
                            <a href="https://space.marketdb.pro/" className='btn btn--orange'>Попробовать бесплатно</a>
                            <Link
                                className='btn'
                                to="tariff"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Узнать тарифы
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
