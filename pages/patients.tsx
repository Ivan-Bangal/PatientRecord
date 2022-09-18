import { NextPage } from "next";
import PatientItem from "../components/Patient/PatientItem";

import { useGetPatients } from "../services/PatientService";




const Patient: NextPage = () => {

    const { data: patients, error } = useGetPatients();

    if (!patients) return <h1>Loading...</h1>;

    return (
        <>
            <PatientItem patients={patients} />
        </>
    )
}

export default Patient;