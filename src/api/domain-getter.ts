import axios from 'axios';
import {BASE_URL} from "./api";


export interface Domain {
    id: number;
    name: string;
}

export const fetchDomains = async (): Promise<Domain[]> => {
    const response = await axios.get<Domain[]>(BASE_URL + '/domain/all');
    return response.data;
};
