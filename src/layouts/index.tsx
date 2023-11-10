import Header from "./header";
import Footer from "./footer";
import clsx from "clsx";

interface IProps {
    children: React.ReactNode;
    className?: string;
}

const Layout = ({
    children,
    className
}: IProps) => {
    return (
        <div className={clsx("", className)}>
            <Header />
                {children}
            <Footer />
        </div>
    );
};


Layout.defaultProps = {

};

export default Layout;
