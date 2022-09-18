import { Box, Button, Container, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement, Textarea, VStack, Wrap, WrapItem } from "@chakra-ui/react"
import { NextPage } from "next"
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from "react-icons/fi";
import { BsPersonBadgeFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Patient } from "../../model/Patient";
import { postPatient } from "../../services/PatientService";


const AddPatient: NextPage = () => {

    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState(new Date());
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);


    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit() {
        let patient = new Patient();
        patient.birthDate = birthDate;
        patient.height= height;
        patient.weight = weight;
        patient.name = name;

        postPatient(patient).then(data => {
            console.log(data)
        }).catch(err =>{
            console.log(err)
        });


    }

    return (
        <>
            <Box bg="white" borderRadius="lg">
                <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl id="name">
                                <FormLabel>Nome do Paciente</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"

                                    >
                                        <BsPersonBadgeFill color="gray.800" />
                                    </InputLeftElement>
                                    <Input type="text" size="md" onChange={event => setName(event.currentTarget.value)} />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="birthDate">
                                <FormLabel>Data de Nascimento</FormLabel>

                                <Input type="date" size="md" onChange={event => setBirthDate(new Date(event.currentTarget.value))} />
                            </FormControl>
                            <FormControl id="height">
                                <FormLabel>Altura</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"

                                    >
                                        <BsPersonBadgeFill color="gray.800" />
                                    </InputLeftElement>
                                    <Input type="number" size="md" onChange={event => setHeight(Number.parseFloat(event.currentTarget.value))} />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="weight">
                                <FormLabel>Peso</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"

                                    >
                                        <BsPersonBadgeFill color="gray.800" />
                                    </InputLeftElement>
                                    <Input type="number" size="md" onChange={event => setWeight(Number.parseFloat(event.currentTarget.value))} />
                                </InputGroup>
                            </FormControl>

                            <FormControl id="name" float="right">
                                <Button
                                    variant="solid"
                                    bg="#0D74FF"
                                    color="white"
                                    _hover={{}}
                                    type="submit"
                                >
                                    Criar Paciente
                                </Button>
                            </FormControl>
                        </form>

                    </VStack>
                </Box>
            </Box>

        </>





    )
}


export default AddPatient;