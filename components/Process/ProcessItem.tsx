import { Box, Center, Container, Flex, Icon, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FiPlusCircle } from "react-icons/fi";
import { Patient } from "../../model/Patient";
import { Process } from "../../model/Process";

type ProcessItemType = {
    processos: Process[]
}

export default function ProcessItem({ processos }: ProcessItemType) {


    if (!processos) return (
        <Center bgColor={"white"}>
            <VStack>
                <Link href={"/process/AddProcess"} style={{ textDecoration: 'none' }} >
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

                                color: 'black',
                            }}
                            as={FiPlusCircle}>
                        </Icon>
                        Adicionar Processo
                    </Flex>
                </Link>
                <Text >
                    SEM PROCESSOS
                </Text>
            </VStack>

        </Center>
    )

    return (
        <>

            <TableContainer backgroundColor={"white"} pt={20}>
                <VStack>
                    <Link href={"/process/AddProcess"} style={{ textDecoration: 'none' }} >
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

                                    color: 'black',
                                }}
                                as={FiPlusCircle}>
                            </Icon>
                            Adicionar Processo
                        </Flex>
                    </Link>
                    <Table variant={'unstyled'}>

                        <Thead>
                            <Tr>
                                <Th>Numero do Processo</Th>
                                <Th>Numero do Medico</Th>
                                <Th>Numero do Paciente</Th>
                                <Th>Nome do Paciente</Th>
                                <Th>Adicionar Consulta</Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                            {
                                
                                processos.map((processo, id) => (
                                    <Tr key={id} >
                                        <Td>{processo.id}</Td>
                                        <Td>{processo.medic.id}</Td>
                                        <Td >{processo.patient.id + " "}</Td>
                                        <Td >{processo.patient.name + " "}</Td>
                                        <Td>
                                            <Link href={"/consult/AddConsult?idProcesso="+processo.id}>
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
                </VStack>

            </TableContainer>
        </>

    );
}