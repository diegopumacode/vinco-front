import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { createUser } from '../api'
import UserForm from '../components/UserForm'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useToast
} from "@chakra-ui/react"
import { useDisclosure } from '@chakra-ui/hooks'
export default function CreateUser() {
    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation(createUser)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const onFormSubmit = async (data) => {
        try {
            console.log({ ...data, age: +data.age })
            let response = await mutateAsync({ ...data })
            queryClient.invalidateQueries('users')
            if (response) {
                toast({
                    title: "Usuario creado",
                    description: "El usuario fue creado uwu/",
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                })
            }

        } catch (error) {
            toast({
                title: "Hubo un error al crear el usuario",
                description: "Intenta crear el usuario otra vez :,)",
                status: "error",
                duration: 1000,
                isClosable: true,
            })
        }
    }

    return (
        <>
            <Button onClick={onOpen} marginY={5}>Crear Usuario</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear Usuario</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <UserForm onFormSubmit={onFormSubmit} isLoading={isLoading} actionAfterSubmit={onClose} titleSubmit={'Crear Usuario'} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
