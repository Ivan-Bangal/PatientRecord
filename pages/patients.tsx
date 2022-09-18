import { NextPage } from "next";
import PatientItem from "../components/Patient/PatientItem";

import { useGetPatients } from "../services/PatientService";




const Patient: NextPage = () => {

    const { data: patients, error } = useGetPatients();

    

    return (
        <>
            <PatientItem patients={patients} />
        </>
    )
}

export default Patient;