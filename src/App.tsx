import AboutScreen from "./components/about";
import AboutServicesScreen from "./components/aboutServicesScreen";
import CompanySlider from "./components/company";
import DeveloperScreen from "./components/developerForm";
import FeaturesScreen from "./components/featuresScreen";
import MainScreen from "./components/mainScreen";
import Posts from "./components/postsScreen";
import PresentationSlider from "./components/presentation";
import ServicesScreen from "./components/services";
import SubsScreen from "./components/subsScreen";
import Layout from "./layouts";
import './style.scss';

const App: React.FC = () => {
    return (
        <Layout>
            <MainScreen title="Умная аналитика маркетплейсов" desc="Проанализируем каждый товар в покупках ваших клиентов, дадим точную статистику по каждому наименованию в вашем магазине" />
            {/* <CompanySlider /> */}
            <PresentationSlider />
            <ServicesScreen />
            <AboutServicesScreen />
            <AboutScreen />

            {/* <FeaturesScreen /> */}

            <SubsScreen />
            {/* <Posts /> */}
            {/* <DeveloperScreen /> */}
        </Layout>
    )
}

export default App;