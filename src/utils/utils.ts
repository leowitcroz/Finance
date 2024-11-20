import type { AxiosResponse } from "axios";
import axios from "axios";
import { Ref, computed } from "vue";
import store from "../store";

export class Utils {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async get<T>(endpoint: string, id: string): Promise<T> {

        const token = localStorage.getItem('authToken')

        try {
            const response: AxiosResponse<T> = await axios.get(`${this.baseUrl}${endpoint}/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }

    public async post<T>(endpoint: string, data: any): Promise<T> {

        const token = computed(() => store.getters.getToken);


        try {
            const response: AxiosResponse<T> = await axios.post(`${this.baseUrl}${endpoint}`, data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return response.data
        }
        catch (error) {
            throw error;
        }
    }

    // public async delete(endpoint: string, id: string) {

    //     const token = localStorage.getItem('authToken')
    //     try {
    //         await axios.delete(`${this.baseUrl}${endpoint}/${id}`, {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // public async update(endpoint: string, id: string, data: any) {
    //     try {

    //         const token = localStorage.getItem('authToken')
    //         await axios.patch(`${this.baseUrl}${endpoint}/${id}`, data, {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         })
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    // }

    public averageIncome(income: string[]) {
        // this is for the graph

        let sum = 0
        let incomeNumbers = []

        for (let i = 0; i < income.length; i++) {

            incomeNumbers.push(Number(income[i]))

        }

        for (let i = 0; i < incomeNumbers.length; i++) {
            sum += incomeNumbers[i];
        }

        return Math.round((sum / incomeNumbers.length + 2000))

    }
}

