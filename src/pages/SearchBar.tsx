import React from 'react';
import '../styles/header.css';
import {useTranslation} from "react-i18next";

const SearchBar: React.FC = () => {
    const {t} = useTranslation(); // Хук для использования перевода

    return (
        <div className="search-bar">
            <input
                type="text"
                className="search-input"
                placeholder={t('header.search')}
            />
        </div>
    );
};

export default SearchBar;
