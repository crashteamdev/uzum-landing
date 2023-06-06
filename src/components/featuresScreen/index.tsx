import './style.scss';

const FeaturesScreen = () => {
    return (
        <div className="features-screen">
            <div className="container">
                <div className="title">Дополнительные возможности</div>
                <div className="desc">Ознакомьтесь с нашими дополнительными возможностями</div>
                <div className="features-list">
                    <div className='features-list-column features-list-column--first'>
                        <div className="features-list-item features-list-item--dark">
                            <div className='features-list-item-content'>
                                <div className="features-list-item__title">Изучение дополнительной <br />статистики по категориям</div>
                                <div className="features-list-item__desc">С помощью дополнительной<br />информации по категориям <br />вы сможете принимать<br />верные решения для<br /> работы на маркетплейсе.</div>
                                <a href="https://lk.marketdb.ru/" className="features-list-item__link">Попробовать бесплатно</a>
                            </div>
                            <img src="./images/features-1.png" alt="" />
                        </div>
                        {/* <div className="features-list-item features-list-item--blue">
                            <img src="./images/features-2.png" alt="" />
                            <div className='features-list-item-content'>
                                <div className="features-list-item__title">Изучение рынкаи потребностей клиентов и других факторов</div>
                                <div className="features-list-item__desc">Нейронная сеть MarketDB анализирует нишу по сотне параметров и выдаёт оценку и рекомендации</div>
                                <a href="https://lk.marketdb.ru/" className="features-list-item__link">Попробовать бесплатно</a>
                            </div>
                        </div> */}
                    </div>
                    <div className='features-list-column'>
                        <div className="features-list-item">
                            <div className="features-list-item__title">Изучение рынкаи потребностей клиентов и других факторов</div>
                            <div className="features-list-item__desc">Нейронная сеть MarketDB анализирует нишу по сотне параметров и выдаёт оценку и рекомендации</div>
                            <a href="https://lk.marketdb.ru/" className="features-list-item__link">Попробовать бесплатно</a>
                            <img src="./images/features-3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FeaturesScreen;