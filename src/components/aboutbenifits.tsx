

import React from 'react';
import { Box, Center, Text, SimpleGrid, Icon, HStack, Divider } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import useScrollTransition from '../templates/usescrolltransition';

const benefitsData = [
  {
    icon: ArrowRightIcon,
    text: "Quality Assurance: We guarantee the highest quality in all our services.",
  },
  {
    icon: ArrowRightIcon,
    text: "Expert Team: Our team consists of industry experts with extensive experience.",
  },
  {
    icon: ArrowRightIcon,
    text: "Timely Delivery: We adhere to strict deadlines to ensure your project is completed on time.",
  },
  {
    icon: ArrowRightIcon,
    text: "24/7 Support: We offer round-the-clock support to address your needs.",
  },
  {
    icon: ArrowRightIcon,
    text: "Client-Centric Approach: We prioritize our clients' needs and satisfaction.",
  },
  {
    icon: ArrowRightIcon,
    text: "Affordable Pricing: Our services are competitively priced without compromising quality.",
  },
];

const BenefitsComponent: React.FC = () => {
  useScrollTransition()
  return (
    <Box p={{ base: 4, md: 8 }} borderRadius="md" ml={{ base: 0, md: 10 }} className='component1'>
      <Center>
        <Text fontSize={{ base: "2xl", md: "3xl" }} className='component1' fontWeight="bold" mb={4} textAlign="center">
          Benefits of Working With Us
        </Text>
      </Center>
      <Center>
        <Divider bg="#02428d" width="100px" h="5px" className='component1'/>
      </Center>
      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={6}>
        {benefitsData.map((benefit, index) => (
          <HStack key={index} align="start" p={4} borderWidth={1} borderColor="gray.200" borderRadius="md" bg="white" spacing={3}>
            <Icon as={benefit.icon} boxSize={5} color="#02428d" className='component1'/>
            <Text fontSize="md" color="gray.700" textAlign="left" className='component1'>
              {benefit.text}
            </Text>
          </HStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BenefitsComponent;
