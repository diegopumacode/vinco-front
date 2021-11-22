import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks';
import React from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInputField,
    NumberInput,
    Select,
    Button,
    Spinner
} from "@chakra-ui/react"
import { useForm } from 'react-hook-form';
export default function UserForm({ defaultValues, onFormSubmit, isLoading }) {

    const { register, handleSubmit } = useForm({ defaultValues })

    const onSubmit = handleSubmit((data) => {
        onFormSubmit(data)
    })

    return (
        <>

            <Box as='form' display='flex' flexDirection='column' gridGap='20px'>

                <FormControl id="firstNsme" isRequired>
                    <FormLabel>Nombre :</FormLabel>
                    <Input ref={register} id="firstName" name="firstName" />
                </FormControl>
                <FormControl id="lastName" isRequired>
                    <FormLabel>Apellido :</FormLabel>
                    <Input ref={register} id="lastName" name="lastName" />
                </FormControl>
                <FormControl id="occupation" isRequired>
                    <FormLabel>Profesion/Ocupacion :</FormLabel>
                    <Input ref={register} id="occupation" name="occupation" />
                </FormControl>
                <FormControl id="age">
                    <FormLabel>Edad :</FormLabel>
                    <NumberInput ref={register} id="age" name="age">
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
                <FormControl id="status">
                    <FormLabel>Estado:</FormLabel>
                    <Select ref={register} placeholder="Selecciona estado" id="status" name="status">
                        <option value='1'>Activo</option>
                        <option value='0'>Desactivado</option>
                    </Select>
                </FormControl>
                <Button>
                    {isLoading ? <Spinner size="xs" /> : "Submit"}
                </Button>
            </Box>

        </>
    )
}
