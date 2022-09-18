import { Flex, Icon, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import Link from "next/link";
import { FiPlusCircle } from "react-icons/fi";
import { Patient } from "../../model/Patient";

type PatientItemType = {
    patients: Patient[]
}

export default function PatientItem({ patients }: PatientItemType) {

    return (
        <>
            <Link href={"/patient/AddPatient"} style={{ textDecoration: 'none' }} >
                <Flex
                    align="flex-end"
                    p="4"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    backgroundColor={"white"}
                >

                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            bg: 'cyan.400',
                            color: 'white',
                        }}
                        as={FiPlusCircle}>
                    </Icon>
                        Adicionar Paciente
                </Flex>
            </Link>
            <TableContainer backgroundColor={"white"} pt={100}>
                <Table variant={'unstyled'}>

                    <Thead>
                        <Tr>
                            <Th>Nome do Paciente</Th>
                            <Th>Data de Nascimento</Th>
                            <Th>Altura</Th>
                            <Th>Peso</Th>
                            <Th>Adicionar Processo</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {patients.map((patient, id) => (
                            <Tr key={id} >
                                <Td>{patient.name}</Td>
                                <Td>{patient.birthDate.toLocaleString()}</Td>
                                <Td isNumeric>{patient.height}</Td>
                                <Td isNumeric>{patient.weight}</Td>
                                <Td>
                                    <Link href={"/"}>
                                        <Flex
                                            align="center"
                                            p="4"
                                            mx="4"
                                            borderRadius="lg"
                                            role="group"
                                            cursor="pointer"

                                        >
                                            <Icon
                                                mr="4"
                                                fontSize="16"
                                                _groupHover={{
                                                    bg: 'cyan.400',
                                                    color: 'white',
                                                }}
                                                as={FiPlusCircle}>

                                            </Icon>
                                        </Flex>
                                    </Link>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>

    );
}