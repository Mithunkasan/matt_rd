import React from 'react';
import {
  Box,
  Text,
  SimpleGrid,
  Icon,
  Heading,
  Flex,
  HStack,
  Divider,
  Image,
  keyframes,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

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

const slideAnimation = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(20px); }
  100% { transform: translateX(0); }
`;

export default function InfoSection() {
  return (
    <Box p={{ base: 4, md: 8 }} m={{ base: '0', lg: '0 50px' }} className='component1'>
      <Heading as="h1" size="xl" mb={7} textAlign="center" className='component1'>
        Our Process of Working
        <Divider bg="#02428d" width="100px" height="5px" p={0.5} m="auto" mt={3} />
      </Heading>

      <Flex direction={{ base: 'column', md: 'row' }} gap={5} align="start">
        {/* Left Content Section */}
        <Box flex="1">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            <Box textAlign="left" p={3} className='component1'>
              <Heading as="h3" size="md" mb={2}>
                1. Research Article Writing
              </Heading>
              <Text fontSize="md">
                Expert Research Article Writing to elevate your study. We craft clear, impactful articles tailored to academic standards, helping you present your findings effectively and boost publication chances.
              </Text>
            </Box>
            <Box textAlign="left" p={3} className='component1'>
              <Heading as="h3" size="md" mb={2}>
                2. Research Review Writing
              </Heading>
              <Text fontSize="md">
                Professional Research Review Writing services to enhance your work. We provide clear, insightful reviews that strengthen your research’s impact and credibility, tailored for academic and professional standards.
              </Text>
            </Box>
            <Box textAlign="left" p={3} className='component1'>
              <Heading as="h3" size="md" mb={2}>
                3. Teaching and Finalization
              </Heading>
              <Text fontSize="md">
                Comprehensive Teaching and Finalization services to enhance your educational materials. We help refine content, ensuring clarity and engagement, while tailoring lessons to meet your students' needs effectively.
              </Text>
            </Box>
            <Box textAlign="left" p={3} className='component1'>
              <Heading as="h3" size="md" mb={2}>
                4. Proposal Writing/Editing
              </Heading>
              <Text fontSize="md">
                Get expert Proposal Writing and Editing to boost approval chances. We craft clear proposals that showcase your vision and meet your objectives effectively, perfect for research, business, and project proposals.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>

      <Box py={8} textAlign="center" className='component1'>
        <Text fontSize="4xl" fontWeight="bold" mb={2} color="black" className='component1'>
          Benefits of Working With Us
        </Text>
        <Divider bg="#02428d" width="100px" height="5px" m="auto" mb={6} />
        
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
        >
          {/* Benefits List */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 1 }} spacing={5} flex="1">
            {benefitsData.map((benefit, index) => (
              <HStack key={index} align="center" justifyContent="flex-start" className='component1'>
                <Icon as={benefit.icon} boxSize={4} color="#02428d" />
                <Text fontSize="md" color="gray.700">
                  {benefit.text}
                </Text>
              </HStack>
            ))}
          </SimpleGrid>

          {/* Right Image Section */}
          <Box
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={{ base: 6, md: 0 }}
            ml={{ md: 10 }}
          >
            <Image
              src="/companyphoto7.jpg"
              alt="Illustrative image"
              boxSize={{ base: '100%', md: '70%' }}
              objectFit="cover"
              borderRadius="md"
              
              animation={`${slideAnimation} 3s ease-in-out infinite`}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
