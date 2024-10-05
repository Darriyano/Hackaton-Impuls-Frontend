import React, {useState} from "react";
import Menu from "./pages/Menu";
import MainPage from "./pages/MainPage";
import "./App.css"
import {Route, Routes} from "react-router-dom"
import DomainPage from "./pages/DomainAnalysis";
import VacanciesPage from "./pages/VacanciesPage";
import Workspace from "./pages/Workspace";
import TaskPage from "./pages/TasksPage";

const App: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="App">
            <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu}/>

            <Routes>
                <Route path="/" element={<MainPage toggleMenu={toggleMenu}/>}/>
                <Route path="/domain" element={<DomainPage toggleMenu={toggleMenu}/>}/>
                <Route path="/vacancies" element={<VacanciesPage toggleMenu={toggleMenu}/>}/>
                <Route path="/userworkspace" element={<Workspace toggleMenu={toggleMenu}/>}/>
                <Route path="/usertasks" element={<TaskPage toggleMenu={toggleMenu}/>}/>
            </Routes>
        </div>
    );
};

export default App;
