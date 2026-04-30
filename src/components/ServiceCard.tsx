import Image from 'next/image';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Container,
} from '@chakra-ui/react';
import journal_publication from '../assets/journal-publication.jpg'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ServiceCard({ service }) {

const services = service?.name.replace('/', ' and ');
const serviceName = services.split(/[\s/]+/);
const servicesName = serviceName.map(n => {
    if (n === "to" ||  n === "and"){
        return n;
    }
    else {
        return n.charAt(0).toUpperCase() + n.slice(1);
    }
})
const servicesNames = servicesName.join('-');
    return (
        <Container>
            <Center py={6}>
                <Box
                    maxW={'445px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}>
                    <Box
                        h={'210px'}
                        bg={'gray.100'}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={'relative'}
                    >
                        <Image
                            src={
                                service?.photo
                            }
                            layout={'fill'}
                            alt="company"
                        />
                    </Box>
                    <Stack>

                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}>
                            {service?.name}
                        </Heading>
                        <Text color={'gray.500'} textAlign={'justify'}>
                            {service?.text}  </Text>
                        <Text color={'blue'}>
                            <Link href={{ pathname: `/ServiceDetail/${servicesNames}` }}> See more.. </Link>
                        </Text>

                    </Stack>

                </Box>
            </Center>
        </Container>
    );
}