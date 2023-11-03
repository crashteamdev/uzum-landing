import { useTranslation } from 'react-i18next';
import './style.scss';

interface DataItem {
    title: string;
    desc: string;
    icon: string;
}

const ServicesScreen: React.FC = () => {
    const { t } = useTranslation();

    const data: DataItem[] = [
        {
            title: `${t('ServicesScreen.data.block1.title')}`,
            desc: `${t('ServicesScreen.data.block1.desc')}`,
            icon: "services-2.png"
        },
        {
            title: `${t('ServicesScreen.data.block2.title')}`,
            desc: `${t('ServicesScreen.data.block2.desc')}`,
            icon: "services-1.png"
        },
        {
            title: `${t('ServicesScreen.data.block3.title')}`,
            desc: `${t('ServicesScreen.data.block3.desc')}`,
            icon: "services-2.png"
        },
        {
            title: `${t('ServicesScreen.data.block4.title')}`,
            desc: `${t('ServicesScreen.data.block4.desc')}`,
            icon: "services-1.png"
        },
    ]
    
    return (
        <div className="services-screen">
            <div className="container">
                <div className="title">{t('ServicesScreen.title')}</div>
                <div className="desc">{t('ServicesScreen.desc')}</div>
                <div className="services-list">
                    {data.map(item => (
                        <div className="services-item">
                            <div className="services-item__icon">
                                <img src={`./images/icon/${item.icon}`} alt="" />
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