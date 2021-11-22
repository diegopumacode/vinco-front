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
export default function UserForm({ defaultValues, onFormSubmit, isLoading, actionAfterSubmit, titleSubmit }) {

    const { register, handleSubmit } = useForm({ defaultValues })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        onFormSubmit(data)
        actionAfterSubmit()
    })

    return (
        <>

            <Box as='form' display='flex' flexDirection='column' gridGap='20px' onSubmit={onSubmit}>

                <FormControl id="firstName" isRequired >
                    <FormLabel>Nombre :</FormLabel>
                    <Input {...register("firstName")} id="firstName" name="firstName"/>
                </FormControl>
                <FormControl id="lastName" isRequired>
                    <FormLabel>Apellido :</FormLabel>
                    <Input {...register("lastName")} id="lastName" name="lastName" />
                </FormControl>
                <FormControl id="occupation" isRequired>
                    <FormLabel>Profesion/Ocupacion :</FormLabel>
                    <Input {...register("occupation")} id="occupation" name="occupation" />
                </FormControl>
                <FormControl id="age">
                    <FormLabel>Edad :</FormLabel>
                    <NumberInput >
                        <NumberInputField {...register("age")} id="age" name="age"/>
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>

                <Button type='submit' marginY={4}>
                    {isLoading ? <Spinner size="xs" /> : titleSubmit}
                </Button>
            </Box>

        </>
    )
}
