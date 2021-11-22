import React from 'react'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { AiFillDelete, AiFillExclamationCircle } from "react-icons/ai";
import UpdateUser from '../UpdateUser';
import { useMutation, useQueryClient } from 'react-query';
import { activeUser, removeUser } from '../api';
import { Spinner } from '@chakra-ui/spinner';
import { useToast } from '@chakra-ui/toast';
import { Tooltip } from '@chakra-ui/tooltip';

export default function CardUser({ user, children }) {

    const queryClient = useQueryClient()
    const { mutateAsync: mutateAsyncRemoveUser, isLoading: isLoadingRemoveUser } = useMutation(removeUser)
    const { mutateAsync: mutateActiveUser, isLoading: isLoadingActiveUser } = useMutation(activeUser)

    const toast = useToast()

    const remove = async (id) => {
        await mutateAsyncRemoveUser(id)
        queryClient.invalidateQueries('users')
        toast({
            title: "Usuario Archivado",
            description: "Se archivo al usuario",
            status: "success",
            duration: 3000,
            isClosable: true,
        })
    }

    const active = async (id) => {
        await mutateActiveUser(id)
        queryClient.invalidateQueries('users')
        toast({
            title: "Usuario Activado",
            description: "Se actualizo el usuario como activo",
            status: "success",
            duration: 3000,
            isClosable: true,
        })
    }

    return (
        <Box minHeight='180px' position='relative' boxShadow="md" rounded="md" padding={5} background={user.status ? 'transparent' : 'rgba(255, 100, 100, 0.2)'}>
            <Flex flexDirection='column' justifyContent='space-between' height='200px'>
                <Box>
                    <Text fontWeight='bold'
                        fontSize='1.3rem'
                        marginBottom='5px' textTransform="capitalize">
                        {user.firstName} {` `}
                        {user.lastName}
                    </Text>

                    <Box background='green.200'
                        fontSize='.8rem'
                        display='inline'
                        borderRadius='30px'
                        paddingX={4}
                        paddingY={1}
                        textTransform="capitalize">
                        {user.occupation}
                    </Box>
                </Box>
                <Flex gridGap={2}>
                    <UpdateUser user={user} />

                    {
                        user.status
                            ?
                            <Tooltip label="Archivar Usuario">
                                <Button colorScheme="red" variant="solid" color='white' size="sm" onClick={() => { remove(user.id) }}>
                                    {isLoadingRemoveUser ? <Spinner size='xs' /> : <AiFillDelete />}
                                </Button>
                            </Tooltip>
                            :
                            <Tooltip label="Activar Usuario">
                                <Button colorScheme="green" variant="solid" color='white' size="sm" onClick={() => { active(user.id) }}>
                                    {isLoadingActiveUser ? <Spinner size='xs' /> : <AiFillExclamationCircle />}
                                </Button>
                            </Tooltip>
                    }




                </Flex>
            </Flex>


            <Image position='absolute' zIndex='-1' src='https://cdn-icons-png.flaticon.com/512/4815/4815145.png' width='140px' bottom='0' right='0' opacity='.6' />

        </Box>
    )
}
