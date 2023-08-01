import "./style.scss";
import logo from "../../assets/images/logo.svg";
import useIsMobile from "./../../utils/useIsMobile";
import clsImg from "./../../assets/images/icon-menu-close.svg";
import burger from "./../../assets/images/icon-menu.svg";
import { useState } from "react";
const Header = () => {
    const isMobile = useIsMobile();
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };

    const Mobile = () => {
        return (
            <div className={`mobile ${menuOpen ? "overlay" : ""}`}>
                <div className="menu-icon">
                    <img src={burger} alt="open" onClick={handleMenuOpen} />
                </div>

                <div className={`sidenav ${menuOpen ? "open" : ""}`}>
                    <div className="closebtn">
                        <img src={clsImg} alt="x" onClick={handleMenuOpen} />
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>New</li>
                        <li>Regular</li>
                        <li>Popular</li>
                        <li>Trending</li>
                        <li>Categories</li>
                    </ul>
                </div>
            </div>
        );
    };

    const Desktop = () => {
        return (
            <div className="nav-right">
                <ul>
                    <li>Home</li>
                    <li>New</li>
                    <li>Regular</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </div>
        );
    };
    return (
        <nav>
            <div className="nav-left">
                <img className={`${isMobile?'header-mob':''}`} src={logo} alt="logo-news" />
            </div>
            {isMobile ? <Mobile /> : <Desktop />}
        </nav>
    );
};

export default Header;
