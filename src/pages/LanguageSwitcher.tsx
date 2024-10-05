import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import "../styles/header.css"

const LanguageSwitcher: React.FC = () => {
    const {i18n} = useTranslation();
    const [isEnglish, setIsEnglish] = useState(true); // State to track current language

    const toggleLanguage = () => {
        const newLang = isEnglish ? 'ru' : 'en';
        i18n.changeLanguage(newLang);
        setIsEnglish(!isEnglish);
    };

    return (
        <button onClick={toggleLanguage} className="language-switcher">
            {isEnglish ? 'Русский' : 'English'} {/* Show current language option */}
        </button>
    );
};

export default LanguageSwitcher;
