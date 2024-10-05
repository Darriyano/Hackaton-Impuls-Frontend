import "../styles/header.css"
import React from "react";
import Toggler from "../pics/choose.svg";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "../pics/Logo.svg";
import SearchBar from "./SearchBar";

interface MainPageProps {
    toggleMenu: () => void;
}

const Header: React.FC<MainPageProps> = ({toggleMenu}) => {
    return (<div className="header">
        <button onClick={toggleMenu} className="menu-button left-element">
            <img src={Toggler} alt="Menu toggle button"/>
        </button>

        <SearchBar/>
        <LanguageSwitcher/>

        <img src={Logo} alt="Tech logo" className="tech-logo right-element"/>
    </div>)
}

export default Header;