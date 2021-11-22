import React from 'react'
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
import { updateUser } from '../api'
import { useMutation, useQueryClient } from 'react-query'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
export default function UpdateUser({ user }) {
    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation(updateUser)
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

            <Button colorScheme="blue" variant="solid" color='white' size="sm" onClick={onOpen}>
                <AiFillEdit />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Actualizar Usuario</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <UserForm defaultValues={user} onFormSubmit={onFormSubmit} isLoading={isLoading} actionAfterSubmit={onClose} titleSubmit={'Actualizar Usuario'} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}