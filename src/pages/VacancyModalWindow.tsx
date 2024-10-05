import React from 'react';
import '../styles/task-window.css'
import {useTranslation} from "react-i18next";

interface ModalWindowProps {
    isOpen: boolean;
    onClose: () => void;
}

const VacancyModalWindow: React.FC<ModalWindowProps> = ({isOpen, onClose}) => {
    const {t} = useTranslation(); // Хук для использования перевода

    if (!isOpen) return null; // Если окно закрыто, ничего не рендерим

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &#10006;
                </button>
                <h2>{t("create_vacancy.create")}</h2>

                <form>
                    <label htmlFor="name">{t("create_vacancy.name")}</label>
                    <input type="text" id="name" placeholder="Иванов Иван Иванович"/>

                    <label htmlFor="vacancy-type">{t("create_vacancy.type")}</label>
                    <input type="text" id="vacancy-type" placeholder="Иванов Иван Иванович"/>

                    <label htmlFor="description">{t("create_vacancy.discript")}</label>
                    <textarea id="description" rows={3} placeholder="ТЕКСТ АКТУАЛЬНОЙ ЗАДАЧИ..."/>

                    <label htmlFor="priority">{t("create_vacancy.priority")}</label>
                    <input type="text" id="priority" placeholder="ВАЖНО"/>

                    <label htmlFor="recruiter">{t("create_vacancy.recruter")}</label>
                    <input type="text" id="recruiter" placeholder="Не назначен"/>

                    <label htmlFor="domain">{t("create_vacancy.domain")}</label>
                    <input type="text" id="domain" placeholder="Не назначен"/>

                    <label htmlFor="budget">{t("vacancies-table.budget")}</label>
                    <input type="number" id="domain" placeholder="1000"/>

                    <button type="submit" className="save-button">{t("create_vacancy.save")}</button>
                </form>
            </div>
        </div>
    );
};

export default VacancyModalWindow;
