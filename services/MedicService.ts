import { Patient } from './../model/Patient';
import useSWR from "swr";
import { Medic } from '../model/Process';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

const url = process.env.REST_API;

export const useGetMedics = () => {
    const { data, error } = useSWR(url + "medic", fetcher);

    return { data, error };
};

export const formatMedicData = (medics: Medic[]) => {

    let format: Object[] = [];

    try {
        medics.forEach(element => {
    
            format.push(
                {
                    value: element.id,
                    label: element.name+ "--"+element.id,
                }
            )
    
        });
        
    } catch (error) {
        
    }

    return format;



}


