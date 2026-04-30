

import React from 'react';
import { Box, Flex, Text, Stack, Divider, Icon } from '@chakra-ui/react';
import { FaSearch, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa';
import useScrollTransition from '../templates/usescrolltransition';

const WhatWeDoBest: React.FC = () => {
  useScrollTransition()
  return (
    <Box maxW={{ base: "100%", lg: "90%", xl: "80%" }} m={{ base: "0", md: "0 auto" }} py={{ base: 6, md: 10 }} px={{ base: 4, md: 8 }}>
      <Stack spacing={1} textAlign="center" mb={{ base: 6, md: 10 }}>
        <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" color="black" className='component1'>
          Discover What We Do Best
        </Text>
        <Divider width={{ base: "60px", md: "80px", lg: "100px" }} mx="auto" borderWidth="2px" borderColor="#02428d" className='component1'/>
        <Text color="gray.600" fontSize={{ base: "sm", md: "md", lg: "lg" }} className='component1'>
          Our dedicated team is committed to excellence in every project we undertake, transforming data into insights and delivering impactful results.
        </Text>
      </Stack>

      <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap" gap={{ base: 4, md: 2 }} justify="center">
        {[
          { icon: FaSearch, title: "In-Depth Research", color: "#02428d" },
          { icon: FaChartLine, title: "Data Analysis", color: "#02428d" },
          { icon: FaUsers, title: "Client-Focused Solutions", color: "#02428d" },
          { icon: FaLightbulb, title: "Innovative Solutions", color: "#02428d" }
        ].map((service, index) => (
          <Box
            key={index}
            w={{ base: "100%", sm: "48%", md: "45%", lg: "20%" }}
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            display="flex"
            className='component1'
            flexDirection="column"
            alignItems="center"
            transition="transform 0.3s ease"
            cursor="pointer"
            _hover={{ bg: 'gray.50', transform: 'scale(1.03)' }}
          >
            <Icon as={service.icon} boxSize={8} color={service.color} mb={4} className='component1'/>
            <Text fontSize="lg" fontWeight="semibold" mb={2} textAlign="center" className='component1'>
              {service.title}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default WhatWeDoBest;
