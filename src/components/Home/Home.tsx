import useIsMobile from "../../utils/useIsMobile";
import MainContent from "../MainContent/MainContent";
import SideContent from "../SideContent/SideContent";

import "./style.scss";

const Home = () => {
    const isMobile = useIsMobile();

    const Desktop = () => {
        return (
            <>
                <div className="homepage">
                    <div className="col-8 main-content">
                        <MainContent />
                    </div>
                    <div className="col-4 side-content">
                        <SideContent />
                    </div>
                </div>
            </>
        );
    };

    const Mobile = () => {
        return (
            <>
                <div className={`homepage ${isMobile ? "mobile" : ""}`}>
                    <div className="col-12 main-content">
                        <MainContent />
                    </div>
                    <div className="col-12 side-content">
                        <SideContent />
                    </div>
                </div>
            </>
        );
    };
    return <>{isMobile ? <Mobile /> : <Desktop />}</>;
};

export default Home;
