
import React from 'react';
import { Box, Text, SimpleGrid, Heading } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

const GuaranteeCard = ({ image, title, description }) => {
    const cardWidth = useBreakpointValue({
        base: '100%', // For screens below 375px, use full width
        sm: '100%', // Continue using full width until the next breakpoint
        md: '350px', // For screens between 375px and 428px
        lg: '355px' // For larger screens
    });
    return (
        <Box
            w={{ cardWidth }}
            h="300px"
            bg="white"
            borderRadius="md"
            boxShadow="md"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            p={4}
            // overflow="hidden"
        >
            <Box
                as="img"
                src={image}
                alt={title}
                width="80px"
                height="80px"
                objectFit="cover"
                mb={0}
            />
            <Text fontSize="lg" fontWeight="bold" mb={0}>
                {title}
            </Text>
            <Text fontSize="sm" noOfLines={5}>
                {description}
            </Text>
        </Box>
    );
};

const GuaranteesSection = () => {
    return (
        <Box p={8} textAlign="center" bg="#">
            <Box mb={6}>
                <Heading fontSize="3xl" mb={4} color="black">
                    Our Services
                </Heading>
                <Text color="black" fontSize="lg">
                    Our team of professionals delivers expert solutions, focused on quality and client satisfaction.
                </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={6}>
                <GuaranteeCard
                    image={'research1.png'}
                    title="Research Article Writing"
                    description="Writing a research article is a crucial part of the academic process, and publishing it in reputed journals can significantly contribute to one's career growth. At the same time, getting a research article published in top journals such as UGC, SCOPUS, SCI, and Web of Science is essential for academic recognition."
                />
                <GuaranteeCard
                    image={'thesis2.png'}
                    title="Thesis/Dissertation Writing"
                    description="At MATT, we understand the challenges and stresses that come with writing a thesis or dissertation, which is why we offer a comprehensive range of services to support you throughout the process."
                />
                <GuaranteeCard
                    image={'support.avif'}
                    title="Publication Support"
                    description="At MATT, we understand that publication in high-impact journals is crucial for researchers and scholars who want to advance their careers and make a meaningful contribution to their fields."
                />
                <GuaranteeCard
                    image={'phd.png'}
                    title="Ph.D. End-to-End Assistance"
                    description="MATT is a company that provides end-to-end assistance to Ph.D. students. Our goal is to help students navigate the complexities of the doctoral process, from research design to defense."
                />
                <GuaranteeCard
                    image={'review.png'}
                    title="Proposal Writing/Editing"
                    description="Our team of experienced Ph.D. writers and editors has a deep understanding of the standards and expectations of academic institutions, and we are committed to helping you craft a proposal that stands out."
                />
                <GuaranteeCard
                    image={'stock.webp'}
                    title="Plagiarism-Free Writing/Editing"
                    description="MATT is dedicated to providing high-quality, plagiarism-free content to clients across various industries. We take pride in ensuring that all of our work is completely original."
                />
            </SimpleGrid>
        </Box>
    );
};

export default GuaranteesSection;
