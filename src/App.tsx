import AboutScreen from "./components/about";
import AboutServicesScreen from "./components/aboutServicesScreen";
import MainScreen from "./components/mainScreen";
import PresentationSlider from "./components/presentation";
import ServicesScreen from "./components/services";
import SubsScreen from "./components/subsScreen";
import Layout from "./layouts";
import './style.scss';

const App: React.FC = () => {
    return (
        <Layout>
            <MainScreen />
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