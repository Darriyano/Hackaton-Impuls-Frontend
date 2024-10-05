import React, {useState} from "react";
import Header from "./Header";
import {Link} from "react-router-dom";
import TaskModalWindow from "./TaskModalWindow";
import {useTranslation} from "react-i18next";
import Filter from "../pics/filter-icon.svg";
import Sort from "../pics/sort.svg";
import "../styles/tasks.css"

interface WorkspacePageProps {
    toggleMenu: () => void;
}


const TaskPage: React.FC<WorkspacePageProps> = ({toggleMenu}) => {
    const [isModal2Open, setModal2Open] = useState(false);

    const toggleModal2 = () => {
        setModal2Open(!isModal2Open);
    };

    const {t} = useTranslation(); // Хук для использования перевода

    return (<>
            <Header toggleMenu={toggleMenu}/>

            <div className="all-in-all-container">
                <div className="text-wrapper">
                    <Link to='/userworkspace'>
                        <button className="action-button">{t('tasks.goto')}</button>
                    </Link>

                    <div className="naming">{t('workspace.name')} <Link to="/userworkspace" className="custom-link">
                        <div style={{color: '#5C2FC2'}}>Имя Фамилия Отчество</div>
                    </Link>
                    </div>

                </div>
                <TaskModalWindow isOpen={isModal2Open} onClose={toggleModal2}/>


                <div className="header">
                    <div className="headline">{t("task-table.head")}</div>
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

                <div className="task-buttons">
                    <button className="create-task-button" onClick={toggleModal2}>{t("main.plustask")}</button>
                    <button className="save-table-button">{t("create_task.save")}</button>
                </div>
            </div>
        </>
    )
}

export default TaskPage;