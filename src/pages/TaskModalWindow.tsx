import React from 'react';
import '../styles/vacancy-window.css'
import {useTranslation} from "react-i18next";

interface ModalWindow2Props {
    isOpen: boolean;
    onClose: () => void;
}

const TaskModalWindow: React.FC<ModalWindow2Props> = ({isOpen, onClose}) => {
    const {t} = useTranslation(); // Хук для использования перевода

    if (!isOpen) return null; // Если окно закрыто, ничего не рендерим

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &#10006;
                </button>
                <h2>{t('create_task.create')}</h2>

                <form>
                    <label htmlFor="name">{t('create_task.name')}</label>
                    <input type="text" id="name" placeholder="Иванов Иван Иванович"/>

                    <label htmlFor="vacancy-type">{t('create_task.executor')}</label>
                    <input type="text" id="vacancy-type" placeholder="Иванов Иван Иванович"/>

                    <label htmlFor="description">{t('create_task.discript')}</label>
                    <textarea id="description" rows={3} placeholder="ТЕКСТ АКТУАЛЬНОЙ ЗАДАЧИ..."/>

                    <label htmlFor="priority">{t('create_task.priority')}</label>
                    <input type="text" id="priority" placeholder="ВАЖНО"/>

                    <label htmlFor="priority">{t('create_task.type')}</label>
                    <input type="text" id="priority" placeholder="ВАЖНО"/>

                    <label htmlFor="recruiter">{t('create_task.deadline')}</label>
                    <input type="date" id="date" placeholder="19.01.2005"/>

                    <button type="submit" className="save-button">{t('create_task.save')}</button>
                </form>
            </div>
        </div>
    );
};

export default TaskModalWindow;
