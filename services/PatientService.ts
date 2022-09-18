import { Patient } from './../model/Patient';
import useSWR from "swr";

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

const url = 'http://localhost:8080';

export const useGetPatients = () => {
  const { data, error } = useSWR(url + "/patient", fetcher);

  return { data, error };
};

export const postPatient = (patient: Patient) => {

  let patientJson = JSON.stringify(patient);

  return fetch(url + "/patient", {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: patientJson,
    cache: 'default'

  }


  )



}


