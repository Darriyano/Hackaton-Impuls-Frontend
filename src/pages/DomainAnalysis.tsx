import React, {useEffect, useState} from "react";
import "../styles/domainpage.css"
import {useTranslation} from "react-i18next";
import Header from "./Header";
import VacancyModalWindow from "./VacancyModalWindow";
import TaskModalWindow from "./TaskModalWindow";
import {Link, useParams} from "react-router-dom";
import {DomainInfo, fetchDomainInfo} from "../api/domain-info";


interface DomainPageProps {
    toggleMenu: () => void;
}

const DomainPage: React.FC<DomainPageProps> = ({toggleMenu}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isModal2Open, setModal2Open] = useState(false);

    const [domainInfo, setDomainInfo] = useState<DomainInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const {id} = useParams<{ id: string }>(); // Получаем ID домена из URL


    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const toggleModal2 = () => {
        setModal2Open(!isModal2Open);
    };

    const {t} = useTranslation(); // Хук для использования перевода

    useEffect(() => {
        const loadDomainInfo = async () => {
            try {
                const data = await fetchDomainInfo(Number(id)); // Запрашиваем данные с сервера
                setDomainInfo(data);
            } catch (error) {
                console.error('Error fetching domain info:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            loadDomainInfo();
        }
    }, [id]);

    return (
        <div className="domainpage-wrapper">
            <Header toggleMenu={toggleMenu}/>

            <div className="all-in-all-container">
                <div className="text-wrapper">
                    <Link to='/vacancies'>
                        <button className="action-button">{t('domains.goto')}</button>
                    </Link>

                    {loading ? (
                        <p>loading... Stay with us! :)</p>
                    ) : !domainInfo ? (<p>No actual info about domain :(</p>) : (
                        <>
                            <div className="analysis">{t('domains.name')}{domainInfo.name}</div>
                            <div className="naming">Руководитель:
                                <Link to="/userworkspace" className="custom-link">
                                    <div style={{color: '#5C2FC2'}}>{domainInfo.lead_name} ›</div>
                                </Link>
                            </div>
                        </>)}

                </div>
                <TaskModalWindow isOpen={isModal2Open} onClose={toggleModal2}/>
                <VacancyModalWindow isOpen={isModalOpen} onClose={toggleModal}/>
            </div>
        </div>
    );
};

export default DomainPage;