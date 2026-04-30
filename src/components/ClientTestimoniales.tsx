
import { Box, Flex, Heading, Image, Text, Circle, Center,Divider, Grid, GridItem,VStack,Icon,  Stack, List, ListItem, ListIcon, Link, SimpleGrid, keyframes, useBreakpointValue, Container, IconButton, HStack, Avatar, Button } from "@chakra-ui/react";
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
          <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}  color="white" fontWeight="bold" mb={0} mt={{ base: 8, md: 12, lg: 20 }}>
            Our Gallery
          </Text>
        </Center>
        
        {/* Breadcrumb Navigation */}
        <Flex alignItems="center" justifyContent="center" mt={3}>
          <Link href="/" fontSize={{ base: "sm", md: "md", lg: "lg" }} mr={2} color="white">
            Home
          </Link>
          <Icon as={ArrowForwardIcon} boxSize={{ base: 4, md: 5 }}  color="white" />
          <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} ml={2} mb={0} color="white">
            Our Gallery
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};



const CompanyDescription = () => {
  useScrollTransition()
  return (
    <Box p={5} m={{base:'0',md :'0px 50px'}}  className='component1'>
      <Heading as="h2" mb={4} fontSize="3xl" display={'flex'} justifyContent={'center'}
      fontWeight={600} lineHeight={1.1}  className='component'>
        Matt Research Solutions Services Gallery
      </Heading>
      <Text fontSize="md" lineHeight="tall" mb={4} className='component1'>
        Welcome to the <strong>Matt Research Solution Services Gallery</strong>—a space where every image tells a story of <strong>passion</strong>, <strong>dedication</strong>, and meaningful <strong>impact</strong> in the world of <strong>research and Solutions</strong>. Each project, each breakthrough, and each smiling face reflects our commitment to guiding <strong>students</strong>, <strong>researchers</strong>, and <strong>institutions</strong> through their academic journeys. In this gallery, you’ll discover moments captured from countless hours of <strong>collaboration</strong>, expert <strong>consultation</strong>, and creative <strong>problem-solving</strong>. From the first spark of an idea to the satisfaction of a published paper, our team is there at every step, ensuring each client reaches their <strong>full potential</strong>.
      </Text>
      <Text fontSize="md" lineHeight="tall" mb={4}  className='component1'>
        Whether it’s the thrill of completing a complex <strong>data analysis</strong>, the pride of achieving <strong>publication</strong> in a high-impact journal, or the excitement of exploring new ideas, we aim to <strong>inspire</strong> and <strong>empower</strong>. We know that behind every project is a dream and a determination to make a difference, and it is our privilege to be a part of that journey. We invite you to explore these <strong>snapshots of success</strong> and feel the warmth, joy, and energy that fuel our mission at <strong>Matt Research Solutions Services</strong>. Here, every smile is a testament to the power of <strong>perseverance</strong> and the beauty of <strong>Research achievement</strong>.
      </Text>
      <Image
       className='component'
        src="/com.jpg" // replace with your actual image URL
        alt="Matt Research Academic Services Gallery"
        width="100%"
        h={'100vh'}
        objectFit="cover"
        borderRadius="md"
      />
    </Box>
  );
}


const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const imageGallery = [
  { src: "companyphotos1.jpg", alt: "Research Image 1" },
  { src: "companyphotos2.jpg", alt: "Research Image 2" },
  { src: "companyphoto3.jpg", alt: "Research Image 3" },
  { src: "companyphoto6.jpg", alt: "Research Image 4" },
  { src: "companyphotos7.jpg", alt: "Research Image 5" },
  { src: "companyphotos8.jpg", alt: "Research Image 6" },
  { src: "companyphotos9.jpg", alt: "Research Image 7" },
  { src: "companyphotos10.jpg", alt: "Research Image 8" },
  { src: "companyphotos11.jpg", alt: "Research Image 9" },
  { src: "companyphotos12.jpg", alt: "Research Image 10" },
  { src: "companyphoto9.jpg", alt: "Research Image 11" },
  { src: "companyphotos15.jpg", alt: "Research Image 12" },
  { src: "companyphotos18.jpg", alt: "Research Image 12" },
  { src: "companyphotos17.jpg", alt: "Research Image 12" },
  { src: "companyphotos16.jpg", alt: "Research Image 12" },
  { src: "matt-2.jpg", alt: "Research Image 12" },
];

const MattGallery = () => {
  useScrollTransition()
  return (
    <Box p={5} m={{ base: "0", md: "0px 100px" }}  className='component'>
      <Heading
        as="h3"
        fontSize="3xl"
        fontWeight={600}
        lineHeight={1.1}
        mb={6}
        display="flex"
         className='component1'
        justifyContent="center"
      >
        Visualizing Our Commitment to Solutions Excellence
      </Heading>

      <Text fontSize="md" lineHeight="tall" mb={6}  className='component1'>
        At Matt Research Solution Services, we are dedicated to providing exceptional research support, and this gallery showcases our commitment to <strong>Solution excellence</strong>. Through a combination of innovative <strong>methods</strong>, proven <strong>models</strong>, and real-world applications, we empower students, researchers, and institutions to achieve their fullest potential. From initial consultations to the final stages of publication, every project reflects our passion for <strong>precision</strong> and <strong>quality</strong>.
      </Text>

      <Text fontSize="md" lineHeight="tall" mb={6}  className='component1'>
        Our team employs a variety of research methodologies and models that ensure success at every stage of the academic journey. These images capture the <strong>collaborative efforts</strong>, <strong>innovative solutions</strong>, and the continuous pursuit of excellence that we prioritize. As you explore this gallery, you’ll see the vibrant energy and dynamic work that has shaped our path toward academic achievement.
      </Text>

      {/* Image Gallery Grid */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4} mb={6}  className='component1'>
        {imageGallery.map((image, index) => (
          <GridItem key={index}>
          <Image
              src={image.src}
              alt={image.alt}
              width="100%"
              height="200px"  // Set consistent height for all images
              borderRadius="md"
              objectFit="cover"  // Ensures image covers the specified area neatly
              animation={`${fadeIn} 0.8s ease-out ${index * 0.5}s forwards`}
              opacity="0.5"
              transition="transform 0.4s ease, box-shadow 0.4s ease"  // Smooth transition
              _hover={{
                transform: 'scale(0.75)',  // Slight right movement on hover
                boxShadow: "lg",                // Add shadow for depth effect
              }}
            />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};







const FullProcessComponent = () => {
    return (
      <Box>
        <AboutUsComponent />  
        <CompanyDescription /> 
        <MattGallery />      
      </Box>
    );
  };
  
  export default FullProcessComponent;