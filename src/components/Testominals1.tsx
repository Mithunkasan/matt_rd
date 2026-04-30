import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Avatar,
  Heading,
  Icon,
  HStack,
  Image,
} from '@chakra-ui/react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    text: `I had the pleasure of working with this company on a recent project, One of the things that stood out to me the most was the exceptional level of customer service that Matt Engineering Solutions provided. They were always available to answer any questions or concerns that I had, and they were proactive in keeping me updated on the progress of the project.`,
    name: 'Kashtua Tubqaz',
    role: 'Project Manager, Almohiet company',
    avatar: 'https://optolite.mattengg.com/images/testmonial_kastuba.jpeg',
  },
  {
    text:  `I am happy to provide a testimonial for Matt Engineering Solutions. My experience with this company has been exceptional, and I highly recommend them to anyone looking for top-notch engineering solutions.They are dedicated to ensuring that their clients are completely satisfied with their work, and they go above and beyond to ensure that everything is done right.`,
    name: 'Mohamed Irfan P.M',
    role: 'Asst. Operations Manager, RANCO Group of Companies',
    avatar: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912768/avatar-icon-md.png',
  },
  {
    text: `I recently worked with Matt Engineering Solutions on a complex engineering project and I was thoroughly impressed by their professionalism and expertise. The team was highly knowledgeable and dedicated to delivering high-quality results within our project timelines. exceptional level of customer service that exceeds expectations, leaving the recipient amazed or deeply impressed.`,
    name: 'Abdulhamid Omar',
    role: 'Lecturer, Alfurat National University Agthabiya',
    avatar: 'https://optolite.mattengg.com/images/testi_3.jpeg',
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <Box
      bgImage="url('/pattern.png')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      mb={{ base: 10, md: 0 }}
      pt={{ base: 0, md: 16 }}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        px={{ base: 6, md: 20 }}
        minH={{ md: '500px' }}
      >
        {/* Left Section */}
        <Box flex="1" maxW={{ base: '100%', md: '50%' }} mb={{ base: 10, md: 0 }}>
          <Text fontSize="md" color="#02428d" fontWeight="bold" mb={2}>
            Good Work
          </Text>
          <Heading fontSize="4xl" fontWeight="extrabold" mb={4}>
            What Our Clients Speak
          </Heading>
          <Box w="20" h="1" bg="#02428d" mb={6} />
          <Box
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            border="2px solid"
            borderColor="#02428d"
            borderRadius="full"
            p={4}
            mb={4}
          >
            <Icon as={FaQuoteLeft} w={6} h={6} color="#02428d" />
          </Box>
          <Text fontSize="sm" color="gray.700" mb={6}>
            {current.text}
          </Text>
          <HStack mt={4} spacing={4}>
            <Avatar name={current.name} src={current.avatar} size="md" />
            <Box>
              <Text fontWeight="bold" color={'black'}>{current.name}</Text>
              <Text fontSize="sm" color="#02428d">
                {current.role}
              </Text>
            </Box>
          </HStack>
          {/* Pagination dots */}
          <HStack mt={4} spacing={2}>
            {testimonials.map((_, i) => (
              <Box
                key={i}
                w="3"
                h="3"
                borderRadius="full"
                bg={i === currentIndex ? 'gray.600' : 'gray.300'}
              />
            ))}
          </HStack>
        </Box>

        {/* Right Section */}
        <Box flex="1" display="flex" justifyContent="center" alignItems="center">
          <Image
            src="/testimonial-1.png"
            alt="Happy Customer"
            maxH="500px"

            objectFit="contain"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default TestimonialSection;
