import React, {useState} from "react";
import Toggler from "../pics/choose.svg"
import "../styles/menu.css"
import {useTranslation} from "react-i18next";
import {Link, redirect, useNavigate} from "react-router-dom";

interface MenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({isOpen, toggleMenu}) => {
    const [isSubmenuOpen, setSubmenuOpen] = useState(false); // Состояние для открытия подменю

    const {t} = useTranslation(); // Хук для использования перевода


    const toggleSubmenu = () => {
        setSubmenuOpen((prev) => !prev);
    };

    const handleNavigation = (path: string) => {
        toggleMenu(); // Закрыть меню после навигации
    };

    return (
        <div
            className={`menu ${isOpen ? "open" : ""}`}
            style={{
                left: isOpen ? "0" : "-300vw", // Сдвиг меню с левой стороны
            }}
        >
            <div>
                <button onClick={toggleMenu} className="menu-button-opened">
                    <img src={Toggler} alt="oh no"/>
                </button>

                <ul style={{listStyleType: "none", padding: 0, marginTop: "5vh", cursor: "pointer"}}>
                    {/* "Искусственный интеллект" с выпадающим списком */}
                    <li className="main-names" onClick={() => handleNavigation('/domain')}><Link to='/'
                                                                                                 className="custom-link">
                        {t('menu.holding')}</Link>
                    </li>
                    <li style={{cursor: "pointer"}} onClick={toggleSubmenu} className="main-names">
                        {t('menu.domains')} {isSubmenuOpen ? "ᐁ" : "ᐅ"}
                    </li>
                    {isSubmenuOpen && (
                        <ul style={{listStyleType: "none", paddingLeft: "2vw"}}>
                            <li className="sub-names"
                                onClick={() => handleNavigation('/domain')}><Link to='/domain'
                                                                                  className="custom-link">{t('menu.submenu1')}</Link>
                            </li>
                        </ul>
                    )}
                </ul>
            </div>
        </div>
    )
        ;
};

export default Menu;
