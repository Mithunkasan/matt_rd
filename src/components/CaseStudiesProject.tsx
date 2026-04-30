
import { Box, Flex, Heading, Image, SimpleGrid, Tag , Text, Circle, Center,Divider, Grid, GridItem,VStack,Icon, Container,  Stack, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from 'react';
import { FaThumbsUp, FaUserCheck, FaClipboardList, FaSmile,FaCheckCircle,FaHandHoldingHeart, FaUserShield, FaEye, FaLock  } from 'react-icons/fa';
import { url } from 'inspector';
import useScrollTransition from "../templates/usescrolltransition";


const AboutUsComponent: React.FC = () => {
  return (
    <Box position="relative" h={{ base: "40vh", md: "50vh", lg: "60vh" }} mb={10}>
      {/* Background Image with Overlay */}
      <Box
        backgroundImage="url('abous.png')" // Replace with your image URL
        backgroundSize="cover"
        backgroundPosition="center"
        h="100%"
        w="100%"
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgColor: '#02428d',
          opacity: 0.5, // Apply opacity to the overlay color
          zIndex: 2,
        }}
      />
      
      {/* Text Content */}
      <Box position="relative" zIndex={2} p={{ base: 4, md: 8, lg: 20 }}>
        <Center>
          <Text fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}  color="white" fontWeight="bold" mt={{ base: 8, md: 12, lg: 20 }}>
           Case Studies
          </Text>
        </Center>
        
        {/* Breadcrumb Navigation */}
        <Flex alignItems="center" justifyContent="center" mt={{base:'0',md:'3'}}>
          <Link href="/" fontSize={{ base: "sm", md: "md", lg: "lg" }} mr={2} color="white">
            Home
          </Link>
          <Icon as={ArrowForwardIcon} boxSize={{ base: 4, md: 5 }}  color="white" />
          <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} ml={2} m={0} color="white">
            Case Stuides
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};


const ResearchMethods = () => {
  useScrollTransition()
  return (
    <Container maxW="container.xl" py={{ base: 6, md: 10 }} className='component1'>
      <Flex direction={{ base: "column", md: "row" }} align="flex-start">
        <VStack align="flex-start" spacing={4} width={{ base: "100%", md: "50%" }}>
          <Heading fontSize={{ base: "xl", md: "2xl" }} className='component'>Case Studies</Heading>
          <Heading size="lg" fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} className='component1'>
            Any methodology. Any complexity. Any topic.
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} color="#4A5568" maxW="500px" className='component1'>
            Our Matt Solutions handles any project complexity, even the most difficult technically,
            and has experience with any research design. Whichever your method is, the complete data
            coherency, relevance & validity are assured.
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="#4A5568" maxW="500px" className='component1'>
            Our team of experts is well-versed in diverse research methodologies, including both
            qualitative and quantitative methods, ensuring that we can tackle even the most
            challenging research questions. Whether you're looking for advanced research techniques
            or tailored methodological approaches, we provide comprehensive research solutions that
            fit your unique needs.
          </Text>
        </VStack>

        <Box
  position="relative"
  width={{ base: "100%", md: "500px" }}
  height={{ base: "300px", md: "400px" }}
  mt={{ base: 6, md: 0 }}
>
  <Circle
    size={{ base: "80px", md: "125px" }}
    bg="#E2E8F0"
    position="absolute"
    top="40%"
    left="50%"
    transform="translate(-50%, -50%)"
    display="flex"
    alignItems="center"
    justifyContent="center"
    boxShadow="lg"
  >
    <Text fontWeight="bold" textAlign="center" m={0} fontSize={{ base: "xs", md: "md" }}>
      Qualitative research
    </Text>
  </Circle>

  <Circle
    size={{ base: "70px", md: "110px" }}
    bg="#BEE3F8"
    position="absolute"
    top="10%"
    left="10%"
    display="flex"
    className='component1'
    alignItems="center"
    justifyContent="center"
    boxShadow="md"
  >
    <Text fontWeight="bold" textAlign="center" m={0} fontSize={{ base: "xs", md: "md" }} className='component1'>
      Education
    </Text>
  </Circle>

  <Circle
    size={{ base: "90px", md: "140px" }}
    bg="#BEE3F8"
    position="absolute"
    top="0%"
    left={{ base:"70%", md:"90%"}}
    display="flex"
    alignItems="center"
    justifyContent="center"
    className='component1'
    boxShadow="md"
  >
    <Text fontWeight="bold" textAlign="center" m={0} fontSize={{ base: "xs", md: "md" }} className='component'>
      Quantitative research
    </Text>
  </Circle>

  <Circle
    size={{ base: "100px", md: "150px" }}
    bg="#C6F6D5"
    position="absolute"
    top={{ base:"40", md:"70%"}}
    left={{ base:"10", md:"20%"}}
    display="flex"
    alignItems="center"
    className='component1'
    justifyContent="center"
    boxShadow="md"
  >
    <Text fontWeight="bold" textAlign="center" m={0} fontSize={{ base: "xs", md: "md" }} className='component1'>
      Mix-methods research
    </Text>
  </Circle>

  <Circle
    size={{ base: "60px", md: "80px" }}
    bg="#C6F6D5"
    position="absolute"
    top="80%"
    left={{ base:"50%", md:"95%"}}
    display="flex"
    className='component1'
    alignItems="center"
    justifyContent="center"
    boxShadow="md"
  >
    <Text fontWeight="bold" textAlign="center" m={0} fontSize={{ base: "xs", md: "md" }} className='component1'>
      History
    </Text>
  </Circle>

  <Circle
    size={{ base: "90px", md: "130px" }}
    bg="#E6FFFA"
    position="absolute"
    top={{base: "60%", md:"60%"}}
    left= {{ base:"78%", md:"80%"}}
    transform="translate(-50%, -50%)"
    display="flex"
    alignItems="center"
    justifyContent="center"
    boxShadow="md"
  >
    <Text fontWeight="bold" textAlign="center" m={0} fontSize={{ base: "xs", md: "md" }}>
      All fields covered
    </Text>
  </Circle>
</Box>

      </Flex>
    </Container>
  );
};

const SubjectArea = () => {
  const subjects = [
    "Health Sciences and Nursing",
    "Business & Management",
    "Education",
    "Computer Sciences & IT",
    "Law",
    "Criminal Justice",
    "Biology",
    "Macro & Micro Economics",
    "Social & Political Sciences",
    "English, Literature & Philology",
    "Engineering & Construction",
  ];

  useScrollTransition()

  return (
    <Box p={5} mx={{ base: "10px", md: "120px" }} className='component1'>
      <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={4} className='component'>
        We have experts in any subject area at Matt:
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 3, md: 4 }} spacing={4}>
        {subjects.map((subject, index) => (
          <Tag
            key={index}
            size="lg"
            color="white"
            borderRadius="full"
            p={3}
            textAlign="center"
            backgroundColor="#02428d"
            border="3px solid #ecc94b"
          >
            {subject}
          </Tag>
        ))}
      </SimpleGrid>
    </Box>
  );
};






const FullProcessComponent = () => {
    return (
      <Box>
        <AboutUsComponent />    
        <ResearchMethods /> 
        <SubjectArea />     
      </Box>
    );
  };
  
  export default FullProcessComponent;