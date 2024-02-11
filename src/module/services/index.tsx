import Image from 'next/image';
import './style.scss';

interface DataItem {
    title: string;
    desc: string;
    icon: string;
}

const data: DataItem[] = [
    {
        title: "Легко начать",
        desc: "Наша цель предоставить удобный и простой в понимании инструмент аналитики.",
        icon: "services-2.png"
    },
    {
        title: "Достоверная аналитика",
        desc: "Предоставляем клиентам наиболее близкую к реальности внешнюю аналитику.",
        icon: "services-1.png"
    },
    {
        title: "Современные IT решения",
        desc: "Для нашей аналитики мы используем только передовые IT технологии.",
        icon: "services-2.png"
    },
    {
        title: "Доступные цены",
        desc: "С нами легко начать изучать рынок и не переплачивать за монструозные и дорогие аналоги.",
        icon: "services-1.png"
    },
]

const ServicesScreen: React.FC = () => {
    return (
        <div className="services-screen">
            <div className="container">
                <div className="title">Почему нам стоит доверять?</div>
                <div className="desc">Наша команда экспертов использует передовые методы анализа данных для предоставления вам точных и полезных результатов.</div>
                <div className="services-list">
                    {data.map((item, key) => (
                        <div key={key} className="services-item">
                            <div className="services-item__icon">
                                <Image width={26} height={26} src={`/images/icon/${item.icon}`} alt="" />
                            </div>
                            <div className="services-item__title">{item.title}</div>
                            <div className="services-item__desc">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ServicesScreen;