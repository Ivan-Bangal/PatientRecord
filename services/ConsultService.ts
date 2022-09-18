import useSWR from "swr";
import { Consult } from "../model/Consult";

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

const url = process.env.REST_API;

export const postConsult = (consult: Consult) => {

    let consultJson = JSON.stringify(consult);

    return fetch(url + "Consult", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: consultJson,
        cache: 'default'

    }


    )



}

export const useGetSpecificProcess = (id: number) => {

    const { data, error } = useSWR(url + "Consult/" + id, fetcher);

    return { data, error };
};

export const useGetProcess = () => {

    const { data, error } = useSWR(url + "Consult", fetcher);

    return { data, error };
};
