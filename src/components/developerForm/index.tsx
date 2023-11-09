import MailIcon from '../icons/mailIcon';
import PhoneIcon from '../icons/phoneIcon';
import './style.scss';

const DeveloperScreen: React.FC = () => {
    return (
        <div className="developer-screen">
            <div className="container">
                <div className="row developer-row">
                    <div className='developer-info'>
                        <div className='developer-info-content'>
                            <div className="title">Услуги по разработке ПО</div>
                            <div className="desc">Очень длинный текст про услуги по разработке ПО, который очень сильно должен зацепить пользователя</div>
                            <div className="developer-contacts">
                                <a href="mailto:info-email@marketbd.ru">
                                    <MailIcon color="#3C7BEB" />
                                    info-email@marketbd.ru
                                </a>
                                <a href="tel:8 800 999 99 99">
                                    <PhoneIcon color="#3C7BEB" />
                                    8 800 999 99 99
                                </a>
                            </div>
                        </div>
                        <img src="./images/developer.png" alt="" />
                    </div>
                    <div className='form'>
                        <div className="form-title">Нужен отдельный функционал?</div>
                        <div className="form-desc">Оставьте заявку и мы скоро с вами свяжемся</div>
                        <form action="#">
                            <label htmlFor="">
                                <input type="text" placeholder='Имя' />
                                <input type="text" placeholder='+7 (_ _ _) _ _ _   _ _  _ _' />
                            </label>
                            <label htmlFor="">
                                <input type="text" placeholder='E-mail' />
                            </label>
                            <label htmlFor="">
                                <textarea placeholder='Комментарий' />
                            </label>
                            <div className='form-send'>
                                <div className="btn btn--orange">Отправить заявку</div>
                                <span>Нажимая на кнопку, вы даете <a href="/">согласие на обработку своих персональных данных</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DeveloperScreen;