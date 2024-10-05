import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
    en: {
        translation: {
            "menu": {
                "close": "Close Menu",
                "holding": "Holding",
                "domains": "Domains",
                "submenu1": "Subitem 1",
                "submenu2": "Subitem 2",
                "submenu3": "Subitem 3"
            },
            "header": {
                "search": "🔍  Search by domain or surname"
            },
            "main": {
                "plustask": "+ Task",
                "plusvacancy": "+ Vacancy",
                "analhr": "Analysis of HR processes"
            },
            "create_task": {
                "create": "Create task",
                "name": "Name",
                "executor": "Executor",
                "discript": "Description",
                'priority': "Priority",
                "deadline": "Deadline",
                "save": "Save",
                "domain": "Domain",
                "type": "Type"
            },
            "create_vacancy": {
                "create": "Create vacancy",
                "name": "Name",
                "type": "Type",
                "recruter": "Recruter",
                "discript": "Description",
                'priority': "Priority",
                "deadline": "Deadline",
                "save": "Save",
                "domain": "Domain"
            },
            "domains": {
                "name": "Domain analysis:",
                "goto": "Go to vacancies ›",

            }, "vacancies": {
                "name": "Vacancies:",
                "goto": "‹ Go to domains",
            }, "workspace": {
                "name": "Workspace:",
                "goto": "Go to active tasks ›",
            },
            "tasks": {
                "name": "Active tasks:",
                "goto": "‹ Go to workspace",
            },
            "table-buttons": {
                "filter": "Filter",
                "sort": "Sort by"
            },
            "task-table": {
                "head": "Tasks",
                "for-today": "Tasks for today",
                "name": "Name",
                "task_type": "Task Type",
                "start_date": "Start Date",
                "end_date": "End Date",
                "status": "Status",
                "priority": "Priority"
            }, "vacancies-table": {
                "name": "Name",
                "type": "Vacancy Type",
                "budget": "Budget",
                "status": "Status",
                "start_date": "Start Date",
                "end_date": "End Date",
                "recruiter": "Recruiter",
                "priority": "Priority",
            },
            "vacancy-candidates": {
                "candidates": "Active candidates",
                "fio": "Full Name",
                "vacancy": "Vacancy",
                "stage": "Stage",
                "resume": "Resume",
                "target_salary": "Target Salary",
                "last_update": "Last Update",
                "feedback": "Feedback"
            }
        }
    },
    ru: {
        translation: {
            "menu": {
                "close": "Закрыть меню",
                "holding": "Холдинг",
                "domains": "Домены",
                "submenu1": "Подпункт 1",
                "submenu2": "Подпункт 2",
                "submenu3": "Подпункт 3"
            },
            "main": {
                "plustask": "+ Задача",
                "plusvacancy": "+ Вакансия",
                "analhr": "Аналитика HR процессов"
            },
            "header": {
                "search": "🔍  Введите название или фамилию"
            },
            "create_task": {
                "create": "Создать задачу",
                "plustask": "+ Задача",
                "name": "Название",
                "executor": "Исполнитель",
                "discript": "Описание",
                'priority': "Приоритет",
                "deadline": "Дедлайн",
                "save": "Сохранить",
                "domain": "Домен",
                "type": "Тип"
            },
            "create_vacancy": {
                "create": "Создать вакансию",
                "name": "Название",
                "type": "Тип",
                "recruter": "Рекрутер",
                "discript": "Описание",
                'priority': "Приоритет",
                "deadline": "Дедлайн",
                "save": "Сохранить",
                "domain": "Домен"
            },
            "domains": {
                "name": "Аналитика по домену:",
                "goto": "Перейти к вакансиям ›",
            },
            "table-buttons": {
                "filter": "Фильтровать",
                "sort": "Сортировать"
            }, "vacancies": {
                "name": "Вакансии:",
                "goto": "‹ Вернуться к доменам"
            },
            "workspace": {
                "name": "Рабочее пространство:",
                "goto": "Перейти к задачам ›",
            }, "tasks": {
                "name": "Активные задачи:",
                "goto": "‹ В рабочее пространство",
            }, "task-table": {
                "head": "Задачи",
                "for-today": "Задачи на сегодня",
                "name": "Название",
                "task_type": "Тип задачи",
                "start_date": "Дата открытия",
                "end_date": "Дата закрытия",
                "status": "Статус",
                "priority": "Приоритет"
            }, "vacancies-table": {
                "name": "Название",
                "type": "Тип вакансии",
                "budget": "Бюджет",
                "status": "Статус",
                "start_date": "Дата открытия",
                "end_date": "Дата закрытия",
                "recruiter": "Рекрутер",
                "priority": "Приоритет"
            },
            "vacancy-candidates": {
                "candidates": "Активные кандидаты",
                "fio": "ФИО",
                "vacancy": "Вакансия",
                "stage": "Этап",
                "resume": "Резюме",
                "target_salary": "Целевая З/П",
                "last_update": "Дата изменения",
                "feedback": "Фидбек"
            }
        }
    }
};

i18n
    .use(initReactI18next) // Передаем в i18next react-i18next
    .init({
        resources,
        lng: 'en', // Язык по умолчанию
        fallbackLng: 'en', // Резервный язык
        interpolation: {
            escapeValue: false, // Не требуется для React
        }
    });

export default i18n;
