import axios from 'axios';
import {BASE_URL} from "./api";


export interface DomainInfo {
    id: number;
    name: string;
    lead_id: number;
    lead_name: string;
}

// Функция для получения информации о домене по id
export const fetchDomainInfo = async (id: number): Promise<DomainInfo> => {
    const response = await axios.get<DomainInfo>(BASE_URL + `/domain/${id}/info`);
    return response.data;
};
