import { Patient } from './../model/Patient';
import useSWR from "swr";

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

const url = process.env.REST_API;

export const useGetPatients = () => {
  const { data, error } = useSWR(url + "patient", fetcher);

  return { data, error };
};

export const postPatient = (patient: Patient) => {

  let patientJson = JSON.stringify(patient);

  return fetch(url + "patient", {
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

export const formatPatientsData = (patients: Patient[]) => {

  let format: Object[] = [];

  try {
    patients.forEach(element => {

      format.push(
        {
          value: element.id,
          label: element.name + "--" + element.id,
        }
      )

    });

  } catch (error) {

  }

  return format;



}


