import { Process } from './../model/Process';
import { Patient } from './../model/Patient';
import useSWR from "swr";

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

const url = process.env.REST_API;

export const useGetProcess = () => {

    console.log("URL: "+url)

    const { data, error } = useSWR(url + "medicalProcess", fetcher);

    return { data, error };
};

export const postProcess = (idMedic: Number, idPatient: Number) => {

    let process = {
        idMedic: "" + idMedic,
        idPatient: "" + idPatient
    }

    let processJson = JSON.stringify(process);

    var dataUrl = new URL(url + "medicalProcess");

    dataUrl.search = new URLSearchParams(process).toString();

    console.log(processJson);

    return fetch(dataUrl, {
        method: 'POST',
    }


    )



}

export const useGetSpecificProcess = (id:number) => {

    console.log("URL: "+url)

    const { data, error } = useSWR(url + "medicalProcess/"+id, fetcher);

    return { data, error };
};


