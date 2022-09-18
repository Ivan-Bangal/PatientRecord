import { Box, Button, Container, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement, Textarea, useToast, VStack, Wrap, WrapItem } from "@chakra-ui/react"
import { NextPage } from "next"
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from "react-icons/fi";
import { BsPersonBadgeFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Patient } from "../../model/Patient";
import { formatPatientsData, postPatient, useGetPatients } from "../../services/PatientService";
import { Select } from "chakra-react-select";
import { formatMedicData, useGetMedics } from "../../services/MedicService";
import { Process } from "../../model/Process";
import { postProcess } from "../../services/ProcessService";


const AddProcess: NextPage = () => {

    const [idMedic, setIdMedic] = useState(0);
    const [idPatient, setIdPatient] = useState(0);

    const { data: patients, error } = useGetPatients()
    const { data: medics } = useGetMedics();
    const toast = useToast();

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit() {

        postProcess(idMedic, idPatient).then(data => {
            toast({
                position: 'top',
                title: 'Sucesso',
                variant: 'solid',
                description: "Processo criado com sucesso",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        }).catch(err => {
            toast({
                position: 'top',
                title: 'Erro',
                variant: 'solid',
                description: "Erro ao gravar processo : " + err,
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        })

    }

    return (

        <Box bg="white" borderRadius="lg">
            <Box m={8} color="#0B0E3F">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <VStack  >
                        <FormControl id="idMedic">
                            <FormLabel>Medico</FormLabel>

                            <Select
                                id="idMedic"
                                options={formatMedicData(medics)}
                                onChange={event => setIdMedic(JSON.parse(JSON.stringify(event!)).value)}
                            />



                        </FormControl>
                        <FormControl id="idPatient">
                            <FormLabel>Paciente</FormLabel>
                            <Select
                                id="idPatient"
                                options={formatPatientsData(patients)}
                                onChange={event => setIdPatient(JSON.parse(JSON.stringify(event!)).value)}
                            />



                        </FormControl>
                        <FormControl mt={2} id="name" float="right">
                            <Button
                                variant="solid"
                                bg="#0D74FF"
                                color="white"
                                _hover={{}}
                                type="submit"
                            >
                                Criar Processo
                            </Button>
                        </FormControl>

                    </VStack>
                </form>
            </Box>
        </Box>
    )
}


export default AddProcess;