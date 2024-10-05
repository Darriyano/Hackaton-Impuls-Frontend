import React, {useEffect, useState} from 'react';
import '../styles/vacancy-window.css'
import {useTranslation} from "react-i18next";
import {CreateTask, Employee, fetchCreateTask, fetchEmployees} from "../api/create-task";
import {Domain} from "../api/domain-getter";

interface ModalWindow2Props {
    isOpen: boolean;
    onClose: () => void;
}

const TaskModalWindow: React.FC<ModalWindow2Props> = ({isOpen, onClose}) => {
    const {t} = useTranslation();
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [domains, setDomains] = useState<Domain[]>([]);

    // Состояния для полей формы
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState<'CREATE' | 'DELETE'>('CREATE');
    const [priority, setPriority] = useState<'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'>('MEDIUM');
    const [deadline, setDeadline] = useState('');
    const [hr_id, setHrId] = useState<number[]>([]);
    const [domain_id, setDomainId] = useState(0);

    const handleDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDomainId(Number(e.target.value)); // Обновляем значение domain_id
    };

    // Получаем список сотрудников и домены всегда при рендере компонента, но условие обработки внутри useEffect
    useEffect(() => {
        if (isOpen) {
            const loadEmployees = async () => {
                try {
                    const data = await fetchEmployees();
                    const domains = await fetchEmployees();
                    setEmployees(data);
                    setDomains(domains);
                } catch (error) {
                    console.error('Error fetching employees:', error);
                }
            };

            loadEmployees();
        }
    }, [isOpen]);

    // Здесь возвращаем null, если модалка не открыта, но хуки уже были вызваны
    if (!isOpen) return null;

    // Обработка формы
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const task: CreateTask = {
            title,
            description,
            type,
            priority,
            deadline,
            hr_id,
            domain_id,
        };
        fetchCreateTask(task);
        onClose();
    };

    // Обработка выбора сотрудников
    const handleEmployeeSelect = (employeeId: number) => {
        if (hr_id.includes(employeeId)) {
            setHrId(hr_id.filter((id) => id !== employeeId));
        } else {
            setHrId([...hr_id, employeeId]);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &#10006;
                </button>
                <h2>{t('create_task.create')}</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">{t('create_task.name')}</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Введите имя задачи"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label htmlFor="description">{t('create_task.discript')}</label>
                    <textarea
                        id="description"
                        rows={3}
                        placeholder="Описание задачи"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <label htmlFor="priority">{t('create_task.priority')}</label>
                    <select
                        id="priority"
                        value={priority}
                        className="selector"
                        onChange={(e) => setPriority(e.target.value as 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW')}
                    >
                        <option value="HIGH">{t('create_task.priority_high')}</option>
                        <option value="MEDIUM">{t('create_task.priority_medium')}</option>
                        <option value="LOW">{t('create_task.priority_low')}</option>
                    </select>

                    <label htmlFor="type">{t('create_task.type')}</label>
                    <select
                        id="type"
                        value={type}
                        className="selector"
                        onChange={(e) => setType(e.target.value as 'CREATE' | 'DELETE')}
                    >
                        <option value="CREATE">{t('create_task.type_create')}</option>
                    </select>

                    <label htmlFor="deadline">{t('create_task.deadline')}</label>
                    <input
                        type="date"
                        id="deadline"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />

                    <label htmlFor="domain">{t('create_task.domain')}</label>
                    <select
                        id="domain"
                        value={domain_id}
                        className="selector"
                        onChange={handleDomainChange}>
                        {domains.map((domain) => (
                            <option value={domain.id}>{domain.name}</option>
                        ))}
                    </select>

                    <label>{t('create_task.employees')}</label>
                    <ul>
                        {employees.map((employee) => (
                            <li key={employee.id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={hr_id.includes(employee.id)}
                                        onChange={() => handleEmployeeSelect(employee.id)}
                                    />
                                    {employee.name}
                                </label>
                            </li>
                        ))}
                    </ul>

                    <button type="submit" className="save-button">
                        {t('create_task.save')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TaskModalWindow;
