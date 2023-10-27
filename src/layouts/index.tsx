import Header from "./header";
import Footer from "./footer";

interface IProps {
    children: React.ReactNode;
    headerLayout?: 1 | 2;
    footerLayout?: 1 | 2;

}

const Layout = ({
    children,
}: IProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

Layout.defaultProps = {

};

export default Layout;
