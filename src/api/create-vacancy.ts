import axios from "axios";
import {BASE_URL} from "./api";

export interface CreateTask {
    title: string;
    description: string;
    type: 'CREATE' | 'DELETE'; // Это поле похоже на константное значение
    priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'; // Можно указать конкретные варианты
    deadline: string; // Используем строку для даты в формате YYYY-MM-DD
    hr_id: number[]; // Массив чисел (ID сотрудников)
    domain_id: number; // Число для ID домена
}

export interface Employee {
    id: number;
    name: string;
}

export const fetchCreateTask = async (task: CreateTask): Promise<void> => {
    try {
        const response = await axios.post<CreateTask>(BASE_URL + '/create_ticket', task);
        console.log('Task created successfully:', response.data);
    } catch (error) {
        console.error('Error creating task:', error);
    }
};

export const fetchEmployees = async (): Promise<Employee[]> => {
    const response = await axios.get<Employee[]>(BASE_URL + '/employees');
    return response.data;
};