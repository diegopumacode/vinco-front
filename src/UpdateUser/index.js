import React from 'react'
import UserForm from '../components/UserForm'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useToast,
    Tooltip
} from "@chakra-ui/react"
import { useDisclosure } from '@chakra-ui/hooks'
import { updateUser } from '../api'
import { useMutation, useQueryClient } from 'react-query'
import { AiFillEdit } from 'react-icons/ai'

export default function UpdateUser({ user }) {
    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation(updateUser)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()


    const onFormSubmit = async (data) => {
        try {
            console.log({ ...data, age: +data.age })
            let response = await mutateAsync({ ...data })
            queryClient.invalidateQueries('users')
            if (response) {
                toast({
                    title: "Usuario Actualizado",
                    description: "Se actualizo el usuario con exito",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                })
            }
        } catch (error) {
            toast({
                title: "Hubo un error al actualizar usuario",
                description: "Intenta actualizar al usuario otra vez :')",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
    }

    return (
        <>

            <Tooltip label="Editar Usuario">
                <Button colorScheme="blue" variant="solid" color='white' size="sm" onClick={onOpen}>
                    <AiFillEdit />
                </Button>
            </Tooltip>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Editar Usuario</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <UserForm defaultValues={user} onFormSubmit={onFormSubmit} isLoading={isLoading} actionAfterSubmit={onClose} titleSubmit={'Actualizar Usuario'} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}