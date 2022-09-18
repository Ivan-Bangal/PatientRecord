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
import { postProcess, useGetSpecificProcess } from "../../services/ProcessService";
import { useRouter } from "next/router";
import { Consult } from "../../model/Consult";
import { postConsult } from "../../services/ConsultService";


const AddConsult: NextPage = () => {

    const [diagnostic, setDiagnostic] = useState("");
    const [consultComment, setConsultComment] = useState("");
    const [consultDate, setConsultDate] = useState(new Date());

    const router = useRouter()
    const { idProcesso } = router.query

    const { data: medicalProcess, error } = useGetSpecificProcess(Number.parseInt(idProcesso as string))


    const toast = useToast();

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit() {

        let consult = new Consult()

        consult.consultComment = consultComment;
        consult.diagnostic = diagnostic;
        consult.consultDate = consultDate;
        consult.medicalProcess = medicalProcess;

        postConsult(consult).then(data => {
            toast({
                position: 'top',
                title: 'Sucesso',
                variant: 'solid',
                description: "Consulta criada com sucesso",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        }).catch(err => {
            toast({
                position: 'top',
                title: 'Erro',
                variant: 'solid',
                description: "Erro ao gravar Consulta : " + err,
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        });

    }

    return (

        <Box bg="white" borderRadius="lg">
            <Box m={8} color="#0B0E3F">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <VStack  >
                        <FormControl id="name">
                            <FormLabel>Diagnostico</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement
                                    pointerEvents="none"

                                >
                                    <BsPersonBadgeFill color="gray.800" />
                                </InputLeftElement>
                                <Textarea pl={10} required size="md" onChange={event => setDiagnostic(event.currentTarget.value)} />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                            <FormLabel>Comentarios</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement
                                    pointerEvents="none"

                                >
                                    <BsPersonBadgeFill color="gray.800" />
                                </InputLeftElement>
                                <Textarea required pl={10} size="md" onChange={event => setConsultComment(event.currentTarget.value)} />
                            </InputGroup>
                        </FormControl>


                        <FormControl id="birthDate">
                            <FormLabel>Data da Consulta</FormLabel>

                            <Input required type="date" size="md" onChange={event => setConsultDate(new Date(event.currentTarget.value))} />
                        </FormControl>
                        <FormControl mt={2} id="name" float="right">
                            <Button
                                variant="solid"
                                bg="#0D74FF"
                                color="white"
                                _hover={{}}
                                type="submit"
                            >
                                Criar Consulta
                            </Button>
                        </FormControl>

                    </VStack>
                </form>
            </Box>
        </Box>
    )
}


export default AddConsult;