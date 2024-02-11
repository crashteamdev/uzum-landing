import './style.scss';

const AboutScreen: React.FC = () => {
    return (
        <div className="about-screen" id="about">
            <div className="container">
                <div className="row">
                    <div className='about-screen-content'>
                        <div className="title">О сервисе</div>
                        <div className="desc">
                            <p>MarketDB - это комплекс сервисов для аналитики и автоизменение цен ваших товаров.</p>
                            <p>Мы работаем с конца 2021 года, за это время нашей аналитикой воспользовалось более 5 000 тыс продавцов с Россиии и Узбекистана!</p>
                            <p>Сервис работает на основе расширения для браузеров и не имеет веб-приложения для аналитики ( Скоро 🤫 ). </p>
                        </div>
                    </div>
                    <div className='about-screen-number'>
                        <div>
                            <div className="about-screen-number-item">
                                <div className='about-screen-number-item__title'>3 млн +</div>
                                <div className='about-screen-number-item__desc'>Товаров ежедневно<br />анализируется</div>
                            </div>
                            <div className="about-screen-number-item">
                                <div className='about-screen-number-item__title'>От 5 тыс</div>
                                <div className='about-screen-number-item__desc'>Клиентов уже использовали<br /> аналитику marketdb</div>
                            </div>
                        </div>
                        <div>
                            <div className="about-screen-number-item">
                                <div className='about-screen-number-item__title'>61,5%</div>
                                <div className='about-screen-number-item__desc'>Средний рост выручки</div>
                            </div>
                            <div className="about-screen-number-item">
                                <div className='about-screen-number-item__title'>10 тыс +</div>
                                <div className='about-screen-number-item__desc'>Категорий ежедневно<br />собираем</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutScreen;