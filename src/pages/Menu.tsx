import React, {useEffect, useState} from "react";
import Toggler from "../pics/choose.svg"
import "../styles/menu.css"
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {fetchDomains, Domain} from "../api/domain-getter";

interface MenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({isOpen, toggleMenu}) => {
    const [isSubmenuOpen, setSubmenuOpen] = useState(false); // Состояние для открытия подменю
    const [domains, setDomains] = useState<Domain[]>([]);

    const {t} = useTranslation(); // Хук для использования перевода


    const toggleSubmenu = () => {
        setSubmenuOpen((prev) => !prev);
    };

    const handleNavigation = () => {
        toggleMenu(); // Закрыть меню после навигации
    };

    useEffect(() => {
        if (isSubmenuOpen) {
            const loadDomains = async () => {
                try {
                    const data = await fetchDomains();
                    setDomains(data);
                } catch (error) {
                    console.error("Error fetching domains", error);
                }
            };
            loadDomains().then();
        }
    }, [isSubmenuOpen]);

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
                    <li className="main-names" onClick={toggleSubmenu}><Link to='/'
                                                                             className="custom-link">
                        {t('menu.holding')}</Link>
                    </li>
                    <li style={{cursor: "pointer"}} onClick={toggleSubmenu} className="main-names">
                        {t('menu.domains')} {isSubmenuOpen ? "ᐁ" : "ᐅ"}
                    </li>
                    {isSubmenuOpen && (
                        <ul style={{listStyleType: "none", paddingLeft: "2vw"}}>
                            {domains.map((domain) => (
                                <li key={domain.id} className="sub-names" onClick={() => console.log(domain.name)}>
                                    <Link to={`/domain/${domain.id}`} className="custom-link">
                                        {domain.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </ul>
            </div>
        </div>
    )
        ;
};

export default Menu;
