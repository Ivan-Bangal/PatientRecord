import { NextPage } from "next";
import PatientItem from "../components/Patient/PatientItem";
import ProcessItem from "../components/Process/ProcessItem";
import { useGetProcess } from "../services/ProcessService";




const Process: NextPage = () => {

    const { data: processos, error } = useGetProcess();

     

    return (
        <>
           <ProcessItem processos={processos}/>
        </>
    )
}

export default Process;