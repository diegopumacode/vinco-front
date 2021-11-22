import { Container, Flex, SimpleGrid, Spinner } from '@chakra-ui/react';
import React from 'react'
import { getAllUsers } from '../api';
import { useQuery } from "react-query";
import CardUser from './CardUser';

export default function ListUser() {
    const { data, error, isLoading, isError } = useQuery("users", getAllUsers);
    
    if (isLoading) {
        return (
            <Container>
                <Flex py="5" justifyContent="center">
                    <Spinner size="xs" />
                </Flex>
            </Container>
        );
    }

    if (isError) {
        return <span>Error: {error.message}</span>;
    }

    return (
        <div>
            <SimpleGrid columns={[1, 2, 4]} spacing="30px" marginBottom={12}>
                {data.map(user => {
                    return (
                        <CardUser key={user.id} user={user}/> 
                    )
                })}

            </SimpleGrid>
        </div>
    )
}
