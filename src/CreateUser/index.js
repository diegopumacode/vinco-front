import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { createUser } from '../api'
import UserForm from '../components/UserForm'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from "@chakra-ui/react"
import { useDisclosure } from '@chakra-ui/hooks'
export default function CreateUser() {
    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation(createUser)
    const { isOpen, onOpen, onClose } = useDisclosure()



    const onFormSubmit = async (data) => {
        try {
            console.log({ ...data, age: +data.age })
            let response = await mutateAsync({ ...data })
            queryClient.invalidateQueries('users')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear Usuario</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <UserForm onFormSubmit={onFormSubmit} isLoading={isLoading} actionAfterSubmit={onClose} titleSubmit={'Crear Usuario'}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
