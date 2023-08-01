import mainImage from "../../assets/images/image-web-3-desktop.jpg";
import mainImageMob from "../../assets/images/image-web-3-mobile.jpg";
import "./style.scss";
import Button from "../Button/Button";
import useIsMobile from "../../utils/useIsMobile";
const MainContent = () => {
    const isMobile = useIsMobile();
    return (
        <div className="main-content">
            <img src={`${isMobile ? mainImageMob : mainImage}`} alt="main" />
            <div className={`col-${isMobile ? "12 main-mob" : "6"} main-left`}>
                The Bright Future of Web 3.0?
            </div>
            <div
                className={`col-${isMobile ? "12 main-mob" : "6"} main-right `}
            >
                <p>
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                </p>
                <div className={`btn-position ${isMobile ? "main-mob" : ""}`}>
                    <Button />
                </div>
            </div>
        </div>
    );
};

export default MainContent;
