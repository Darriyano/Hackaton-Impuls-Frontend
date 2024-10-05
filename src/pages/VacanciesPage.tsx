import "../styles/vacancies-page.css"
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import Header from "./Header";
import Sort from "../pics/sort.svg"
import Filter from "../pics/filter-icon.svg"
import {Link} from "react-router-dom";


interface DomainPageProps {
    toggleMenu: () => void;
}

const VacanciesPage: React.FC<DomainPageProps> = ({toggleMenu}) => {
    const {t} = useTranslation(); // Хук для использования перевода

    return (<div className="vacancies-page-wrapper">
        <Header toggleMenu={toggleMenu}/>

        <div className="all-in-all-container">


            <div className="text-wrapper">
                <Link to='/domain'>
                    <button className="action-button">{t('vacancies.goto')}</button>
                </Link>
                <div className="analysis">{t('domains.name')}</div>
                <div className="naming">Руководитель:<Link to="/userworkspace" className="custom-link">
                    <div style={{color: '#5C2FC2'}}>Имя Фамилия Отчество ›</div>
                </Link>
                </div>

            </div>

            <div className="header">
                <div className="headline">Вакансии</div>
                <div className="action-buttons">
                    <button className="table-buts filter-button">
                        <img src={Filter} alt="Фильтры"/> {t("table-buttons.filter")}
                    </button>
                    <button className="table-buts sort-button">
                        <img src={Sort} alt="Сортировка"/> {t("table-buttons.sort")}
                    </button>
                </div>
            </div>

            <table className="vacancies-table">
                <thead>
                <tr>
                    <th>{t('vacancies-table.name')}</th>
                    <th>{t('vacancies-table.type')}</th>
                    <th>{t('vacancies-table.budget')}</th>
                    <th>{t('vacancies-table.status')}</th>
                    <th>{t('vacancies-table.start_date')}</th>
                    <th>{t('vacancies-table.end_date')}</th>
                    <th>{t('vacancies-table.recruiter')}</th>
                    <th>{t('vacancies-table.priority')}</th>
                    <th>{t('vacancies-table.budget')}</th>

                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>

    </div>)
}

export default VacanciesPage;