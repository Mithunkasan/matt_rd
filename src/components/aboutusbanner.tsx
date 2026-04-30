


import React from 'react';
import { Box, Center, Text, Flex, Icon, Link } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import useScrollTransition from '../templates/usescrolltransition';

const AboutUsComponent: React.FC = () => {
  useScrollTransition()
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
          <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={{base:'2',md:'3'}} color="white" fontWeight="bold" mt={{ base: 8, md: 12, lg: 20 }}>
            Who We Are
          </Text>
        </Center>
        
        {/* Breadcrumb Navigation */}
        <Flex alignItems="center" justifyContent="center" mt={3}>
          <Link href="/" fontSize={{ base: "sm", md: "md", lg: "lg" }} mr={2} color="white">
            Home
          </Link>
          <Icon as={ArrowForwardIcon} boxSize={{ base: 4, md: 5 }}  color="white" />
          <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} ml={2} mb={0} color="white">
            Who We Are
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUsComponent;

 