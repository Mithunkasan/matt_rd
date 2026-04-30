import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
// import EngineeringService from '../Banners/ResearchArtBnr';
import StaticEnquiry from '../StaticEnquiry';

export default function ProjectDevelopment() {
    return (
        <>
            
            <Container maxW={'6xl'}>
                <SimpleGrid
                    // columns={{ base: 1, lg: 2 }}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 18, md: 14 }}>

                    <Stack spacing={{ base: 4, md: 10}}>
                        <Box as={'header'}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                color='blue.800'
                                fontSize={{ base: '2xl', sm: '3xl', lg: '3xl' }}>
                                Project Development  Implementation:
                            </Heading>
                        </Box>
                        <Flex direction={'row'} justifyContent='space-between' flexWrap={'wrap'} gap={3}>
                        <Stack
                             
                             width={{base:'xs', sm:'lg', lg:'lg'}}
                            direction={'column'}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                                />
                            }>
                            <VStack align='start' spacing={{ base: 4, sm: 6 }}>
                                <Text
                                align='justify'
                                    color={useColorModeValue('gray.600', 'gray.800')}
                                    fontSize={'lg'}
                                    fontWeight={'300'}>
                                    Writing a research article is a crucial part of the academic process,
                                    and publishing it in reputed journals can significantly contribute to one's career growth....
                                </Text>
                                <Text align='justify' >
                                MATT is a technology company that specializes in project development and implementation for PhD students. Our company provides cutting-edge solutions that help students achieve their academic goals and complete their PhD programs successfully. Our services are designed to help students overcome the challenges they face during the research and implementation phases of their projects. We work with all programming languages and tools to ensure that our clients can implement their projects effectively.</Text>

                                <Text align='justify' >
                                At MATT, we believe that successful project implementation requires a deep understanding of the research problem, an innovative approach to solution development, and attention to detail throughout the implementation process. Our team of experts has a wealth of experience in project development and implementation, and they work closely with our clients to understand their unique needs and develop custom solutions that meet their requirements.
                                </Text>
                                <Text align='justify' >
                                We offer a wide range of services to PhD students, including project development, implementation, and support. Our services are designed to provide our clients with the guidance and support they need to complete their projects successfully. We work with a wide range of programming languages and tools, including Python, Java, MATLAB, and more, to ensure that we can provide the best possible solutions to our clients.
                                </Text>
                                <Text align='justify' >
                                Our team of experts has experience in a wide range of areas, including data science, artificial intelligence, machine learning, and more. We use the latest tools and technologies to provide our clients with the best possible solutions. We work closely with our clients throughout the implementation process, providing regular updates and support to ensure that they are satisfied with the progress of their projects.
                                </Text>
                                <Text align='justify' >
                                At MATT, our mission is to provide PhD students with the best possible solutions for project development and implementation. We are committed to providing our clients with high-quality services and support, and we strive to exceed their expectations. Contact us today to learn more about our services and how we can help you complete your PhD project successfully.
                                </Text>
                            </VStack>
                            {/* <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color={useColorModeValue('yellow.500', 'yellow.300')}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Features
                                </Text>

                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                    <List spacing={2}>
                                        <ListItem>Chronograph</ListItem>
                                        <ListItem>Master Chronometer Certified</ListItem>{' '}
                                        <ListItem>Tachymeter</ListItem>
                                    </List>
                                    <List spacing={2}>
                                        <ListItem>Anti‑magnetic</ListItem>
                                        <ListItem>Chronometer</ListItem>
                                        <ListItem>Small seconds</ListItem>
                                    </List>
                                </SimpleGrid>
                            </Box> */}

                        </Stack>
                        <Stack  direction={'column'}>
                         
                         <StaticEnquiry/>
                         </Stack>
                        </Flex>

                    </Stack>
                </SimpleGrid>
            </Container>
        </>
    );
}