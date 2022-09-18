import { Box, Button, Container, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea, useToast, VStack, Wrap, WrapItem } from "@chakra-ui/react"
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
    const toast = useToast();


    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit() {
        let patient = new Patient();
        patient.birthDate = birthDate;
        patient.height = height;
        patient.weight = weight;
        patient.name = name;

        postPatient(patient).then(data => {
            console.log(data)
            toast({
                position:'top',
                title: 'Sucesso',
                variant: 'solid',
                description: "Paciente criado com sucesso",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })

        }).catch(err => {
            console.log(err)
            toast({
                position:'top',
                title: 'Erro',
                variant: 'solid',
                description: "Erro ao gravar paciente : " + err,
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
                            <FormLabel>Nome do Paciente</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement
                                    pointerEvents="none"

                                >
                                    <BsPersonBadgeFill color="gray.800" />
                                </InputLeftElement>
                                <Input required type="text" size="md" onChange={event => setName(event.currentTarget.value)} />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="birthDate">
                            <FormLabel>Data de Nascimento</FormLabel>

                            <Input required type="date" size="md" onChange={event => setBirthDate(new Date(event.currentTarget.value))} />
                        </FormControl>
                        <FormControl id="height">
                            <FormLabel>Altura</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement
                                    pointerEvents="none"

                                >
                                    <BsPersonBadgeFill color="gray.800" />
                                </InputLeftElement>
                                <NumberInput pl={10} isRequired size="lg" precision={2} onChange={event => setHeight(Number.parseFloat(event))} >
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
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
                                <NumberInput pl={10} isRequired size="lg" precision={2} onChange={event => setWeight(Number.parseFloat(event))} >
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </InputGroup>
                        </FormControl>

                        <FormControl mt={2} id="name" float="right">
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

                    </VStack>
                </form>
            </Box>
        </Box>
    )
}


export default AddPatient;