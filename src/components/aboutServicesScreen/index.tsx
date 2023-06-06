import { useState } from 'react';
import './style.scss';

const AboutServicesScreen = () => {

    const [activeTab, setActiveTab] = useState("tabs1");

    return (
        <div className="about-services-screen">
            <div className="container">
                <div className="about-services-screen-row">
                    <div className='about-services-screen-bg'>
                        <img src="./images/pc.png" alt="" />
                    </div>
                    <div className='about-services-screen-column'>
                        <div className="title">Для кого  подходит сервис?</div>
                        <div className="tabs">
                            <div className={activeTab === "tabs1" ? "active tabs-item" : "tabs-item"} onClick={() => setActiveTab('tabs1')}>
                                <span>Новичок</span>
                            </div>
                            <div className={activeTab === "tabs2" ? "active tabs-item" : "tabs-item"} onClick={() => setActiveTab('tabs2')}>
                                <span>Действующему селлеру</span>
                            </div>
                            <div className={activeTab === "tabs3" ? "active tabs-item" : "tabs-item"} onClick={() => setActiveTab('tabs3')}>
                                <span>Крупному бизнесу</span>
                            </div>
                        </div>
                        <div className="about-services-list">
                            {activeTab === "tabs1" && (
                                <>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <img src="./images/icon/about-services.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Проанализировать нишу</div>
                                            <div className="about-services-item__desc">Изучение ниши перед первой поставкой на маркетплейс.</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <img src="./images/icon/about-services-1.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Гибкие тарифные планы</div>
                                            <div className="about-services-item__desc">Для легкого старта можно  подобрать тот тариф который дейсвительно нужен.</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <img src="./images/icon/about-services-2.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Низкая цена</div>
                                            <div className="about-services-item__desc">Доступная цена для старта на маркетплейсах.</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <img src="./images/icon/about-services-3.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Точечный анализ товаров</div>
                                            <div className="about-services-item__desc">Легко проанализировать конкретный товар через расширение.</div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeTab === "tabs2" && (
                                <>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <img src="./images/icon/about-services.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Отчеты по категориям</div>
                                            <div className="about-services-item__desc">Для более детального изучения ниши - скачивать отчеты по категориям и магазинам.</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <img src="./images/icon/about-services-1.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Улучшить выдачу товара</div>
                                            <div className="about-services-item__desc">Отслеживать позицию товара в каждой категории.</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <img src="./images/icon/about-services-2.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Низкая цена</div>
                                            <div className="about-services-item__desc">Предоставляем все самое необходимое для аналитики при доступных ценах.</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <img src="./images/icon/about-services-3.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Анализ конкурентов</div>
                                            <div className="about-services-item__desc">Есть цель быть впереди конкурентов.</div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeTab === "tabs3" && (
                                <>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <img src="./images/icon/about-services.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Отчеты по категориям</div>
                                            <div className="about-services-item__desc">Для более детального изучения ниши - скачивать отчеты по категориям и магазинам.</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <img src="./images/icon/about-services-1.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Улучшить выдачу товара</div>
                                            <div className="about-services-item__desc">Отслеживать позицию товара в каждой категории.</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <img src="./images/icon/about-services-2.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Низкая цена</div>
                                            <div className="about-services-item__desc">Предоставляем все самое необходимое для аналитики при доступных ценах.</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <img src="./images/icon/about-services-3.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Анализ конкурентов</div>
                                            <div className="about-services-item__desc">Есть цель быть впереди конкурентов.</div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutServicesScreen;