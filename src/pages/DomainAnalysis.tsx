import React, {useState} from "react";
import "../styles/domainpage.css"
import {useTranslation} from "react-i18next";
import Header from "./Header";
import VacancyModalWindow from "./VacancyModalWindow";
import TaskModalWindow from "./TaskModalWindow";
import {Link} from "react-router-dom";


interface DomainPageProps {
    toggleMenu: () => void;
}

const DomainPage: React.FC<DomainPageProps> = ({toggleMenu}) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const [isModal2Open, setModal2Open] = useState(false);


    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const toggleModal2 = () => {
        setModal2Open(!isModal2Open);
    };

    const {t} = useTranslation(); // Хук для использования перевода

    return (
        <div className="domainpage-wrapper">
            <Header toggleMenu={toggleMenu}/>

            <div className="all-in-all-container">
                <div className="text-wrapper">
                    <Link to='/vacancies'>
                        <button className="action-button">{t('domains.goto')}</button>
                    </Link>
                    <div className="analysis">{t('domains.name')}</div>
                    <div className="naming">Руководитель:
                        <Link to="/userworkspace" className="custom-link">
                        <div style={{color: '#5C2FC2'}}>Имя Фамилия Отчество ›</div>
                        </Link>
                    </div>

                </div>
                <TaskModalWindow isOpen={isModal2Open} onClose={toggleModal2}/>
                <VacancyModalWindow isOpen={isModalOpen} onClose={toggleModal}/>
            </div>
        </div>
    );
};

export default DomainPage;