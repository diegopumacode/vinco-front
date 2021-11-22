import React from 'react'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export default function CardUser({ name, occupation, children }) {
    return (
        <Box minHeight='180px' position='relative' boxShadow="md" rounded="md" padding={5}>
            <Flex flexDirection='column' justifyContent='space-between' height='200px'>
                <Box>
                    <Text fontWeight='bold'
                        fontSize='1.3rem'
                        marginBottom='5px'>
                        {name}
                    </Text>

                    <Box background='green.200'
                        fontSize='.8rem'
                        display='inline'
                        borderRadius='30px'
                        paddingX={4}
                        paddingY={1}>
                        {occupation}
                    </Box>
                </Box>
                <Flex gridGap={2}>
                    {children}
                </Flex>
            </Flex>


            <Image position='absolute' zIndex='-1' src='https://cdn-icons-png.flaticon.com/512/4815/4815145.png' width='140px' bottom='0' right='0' opacity='.6' />




        </Box>
    )
}
