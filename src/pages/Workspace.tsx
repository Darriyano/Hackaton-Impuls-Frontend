import React, {useState} from "react";
import "../styles/workspace.css"
import Header from "./Header";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import TaskModalWindow from "./TaskModalWindow";
import VacancyModalWindow from "./VacancyModalWindow";


interface WorkspacePageProps {
    toggleMenu: () => void;
}

const Workspace: React.FC<WorkspacePageProps> = ({toggleMenu}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isModal2Open, setModal2Open] = useState(false);


    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const toggleModal2 = () => {
        setModal2Open(!isModal2Open);
    };

    const {t} = useTranslation(); // Хук для использования перевода

    return (<>
            <Header toggleMenu={toggleMenu}/>

            <div className="all-in-all-container">
                <div className="text-wrapper">
                    <Link to='/usertasks'>
                        <button className="action-button">{t('workspace.goto')}</button>
                    </Link>
                    <div className="naming">{t('workspace.name')} <Link to="/userworkspace" className="custom-link">
                        <div style={{color: '#5C2FC2'}}>Имя Фамилия Отчество</div>
                        <div style={{color: '#5C2FC2'}}>{process.env.REACT_APP_API_URL}</div>
                    </Link>
                    </div>

                    <TaskModalWindow isOpen={isModal2Open} onClose={toggleModal2}/>
                    <VacancyModalWindow isOpen={isModalOpen} onClose={toggleModal}/>

                    <div className="buttons-container2">
                        <button className="create-button" onClick={toggleModal2}>{t("main.plustask")}</button>
                        <button className="create-button" onClick={toggleModal}>{t("main.plusvacancy")}</button>
                    </div>

                </div>
                .
                <div className="content-container">
                    <div className="tables-container">
                        <div className="table-wrapper">
                            <h2>{t("task-table.for-today")}</h2>
                            <table className="custom-table">
                                <thead>
                                <tr>
                                    <th>{t("task-table.name")}</th>
                                    <th>{t("task-table.task_type")}</th>
                                    <th>{t("task-table.start_date")}</th>
                                    <th>{t("task-table.end_date")}</th>
                                    <th>{t("task-table.status")}</th>
                                    <th>{t("task-table.priority")}</th>
                                </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>

                        <div className="table-wrapper">
                            <h2>{t('vacancy-candidates.candidates')}</h2>
                            <table className="custom-table">
                                <thead>
                                <tr>
                                    <th>{t('vacancy-candidates.fio')}</th>
                                    <th>{t('vacancy-candidates.vacancy')}</th>
                                    <th>{t('vacancy-candidates.stage')}</th>
                                    <th>{t('vacancy-candidates.resume')}</th>
                                    <th>{t('vacancy-candidates.target_salary')}</th>
                                    <th>{t('vacancy-candidates.last_update')}</th>
                                    <th>{t('vacancy-candidates.feedback')}</th>
                                </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className="subordinates-container">
                        <h2>Подчиненные</h2>
                        <ul className="subordinate-list">
                            <Link to="/userworkspace" className="custom-link">
                                <li className="subordinate-item">
                                    <div className="subordinate-info">
                                        <span className="name">Петров Петр Петрович</span>
                                        <span className="position">младший HR</span>
                                    </div>
                                    <span className="arrow">›</span>
                                </li>
                            </Link>
                            <Link to="/userworkspace" className="custom-link">
                                <li className="subordinate-item">
                                    <div className="subordinate-info">
                                        <span className="name">Петров Петр Петрович</span>
                                        <span className="position">младший HR</span>
                                    </div>
                                    <span className="arrow">›</span>
                                </li>
                            </Link>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Workspace;