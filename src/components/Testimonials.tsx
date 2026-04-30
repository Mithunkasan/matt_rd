
import React, { useState, useEffect } from 'react';
import {
  Box, Avatar, Text, VStack, Heading, HStack, Flex, Button, Grid, GridItem, Stack, Container, IconButton, keyframes,
  useBreakpointValue
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import useScrollTransition from '../templates/usescrolltransition';

// Define the keyframes for sliding animation
const slideLeft = keyframes`

0% {
  transform: translateX(0);
  opacity: 0;
}
50% {
  transform: translateX(0);
  opacity: 1;
}
100% {
  transform: translateX(0);
  opacity: 1;
}
`;

// Sample data for testimonials
const testimonials = [
  {
    id: 1,
    name: 'Kashtua Tubqaz',
    tapId: 'Project Manager, Almohiet company',
    avatar: 'https://optolite.mattengg.com/images/testmonial_kastuba.jpeg',
    rating: 5,
    review: `I had the pleasure of working with this company on a recent project, One of the things that stood out to me the most was the exceptional level of customer service that Matt Engineering Solutions provided. They were always available to answer any questions or concerns that I had, and they were proactive in keeping me updated on the progress of the project.`,
  },
  {
    id: 2,
    name: 'Mohamed Irfan P.M',
    tapId: 'Asst. Operations Manager, RANCO Group of Companies',
    avatar: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912768/avatar-icon-md.png',
    rating: 5,
    review: `I am happy to provide a testimonial for Matt Engineering Solutions. My experience with this company has been exceptional, and I highly recommend them to anyone looking for top-notch engineering solutions.They are dedicated to ensuring that their clients are completely satisfied with their work, and they go above and beyond to ensure that everything is done right.`,
  },
  {
    id: 3,
    name: 'Abdulhamid Omar',
    tapId: 'Lecturer, Alfurat National University Agthabiya',
    avatar: 'https://optolite.mattengg.com/images/testi_3.jpeg',
    rating: 4,
    review: `I recently worked with Matt Engineering Solutions on a complex engineering project and I was thoroughly impressed by their professionalism and expertise. The team was highly knowledgeable and dedicated to delivering high-quality results within our project timelines. exceptional level of customer service that exceeds expectations, leaving the recipient amazed or deeply impressed.`,
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false); // State to trigger animation

  const isMobile = useBreakpointValue({ base: true, md: false }); // Detect if on mobile screen

  const currentTestimonial1 = testimonials[currentIndex];
  const currentTestimonial2 = testimonials[(currentIndex + 1) % testimonials.length];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(true); // Trigger animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Move to the next testimonial
        setAnimate(false); // Reset animation state after the update
      }, 1000); // Time should match the CSS animation duration
    }, 20000); // Slide every 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
  };

  useScrollTransition();

  return (
    <Box bg="gray.70">
      <Container maxW={'8xl'} pt={10} pb={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading fontSize={{ base: '2xl', md: '4xl' }} className="component1">What Our Clients Speak</Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="center" className="component1">
            Our global reach has allowed us to collaborate with clients from various parts of the world.
          </Text>
        </Stack>
        <Box p={6} bg="gray.50" maxW="1600px" mx="auto" className="component1">
          <Grid
            templateColumns={{ base: '1fr', md: '50px 1fr 1fr 50px' }} // 1 column on mobile, 4 columns on desktop
            gap={6}
          >
            {/* Left Arrow for the First Testimonial */}
            {!isMobile && (
              <GridItem>
                <Flex justify="center" align="center" h="100%">
                  <IconButton
                  aria-label='arrow'
                    icon={<ArrowBackIcon />}
                    onClick={handlePrev}
                    color="white"
                    bg={'#02428d'}
                    borderRadius="full"
                    size="lg"
                    variant="solid"
                    _hover={{
                      bg:'#ecc94b'
                    }}
                  />
                </Flex>
              </GridItem>
            )}

            {/* Testimonial Card */}
            <GridItem colSpan={{ base: 1, md: 1 }} colStart={{ base: 1, md: 2 }}>
              <Box
                animation={animate ? `${slideLeft} 1s ease forwards` : ''}
                bg="white"
                borderRadius="md"
                boxShadow="lg"
                p={6}
                minH="100px"  // Ensure uniform height
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <HStack spacing={4} align="center">
                  <Avatar size="lg" name={currentTestimonial1.name} src={currentTestimonial1.avatar} />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold" fontSize={{ base: 'lg', md: 'xl' }}>{currentTestimonial1.name}</Text>
                    <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }}>{currentTestimonial1.tapId}</Text>
                  </VStack>
                </HStack>
                <Text mt={4} fontSize={{ base: 'sm', md: 'md' }} noOfLines={5}>{currentTestimonial1.review}</Text>
                <HStack mt={3} spacing={1}>
                  {[...Array(currentTestimonial1.rating)].map((_, i) => (
                    <Box as="span" color="yellow.400" key={i}>⭐</Box>
                  ))}
                </HStack>
              </Box>
            </GridItem>

            {/* Right Testimonial Card for Desktop */}
            {!isMobile && (
              <GridItem>
                <Box
                  animation={animate ? `${slideLeft} 1s ease forwards` : ''}
                  bg="white"
                  borderRadius="md"
                  boxShadow="lg"
                  p={6}
                  minH="100px"  // Ensure uniform height
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <HStack spacing={4} align="center">
                    <Avatar size="lg" name={currentTestimonial2.name} src={currentTestimonial2.avatar} />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold" fontSize={{ base: 'lg', md: 'xl' }}>{currentTestimonial2.name}</Text>
                      <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }}>{currentTestimonial2.tapId}</Text>
                    </VStack>
                  </HStack>
                  <Text mt={4} fontSize={{ base: 'sm', md: 'md' }} noOfLines={5}>{currentTestimonial2.review}</Text>
                  <HStack mt={3} spacing={1}>
                    {[...Array(currentTestimonial2.rating)].map((_, i) => (
                      <Box as="span" color="yellow.400" key={i}>⭐</Box>
                    ))}
                  </HStack>
                </Box>
              </GridItem>
            )}

            {/* Right Arrow for the Second Testimonial */}
            {!isMobile && (
              <GridItem>
                <Flex justify="center" align="center" h="100%">
                  <IconButton
                  aria-label='forward arrow'
                    icon={<ArrowForwardIcon />}
                    onClick={handleNext}
                    color="white"
                    borderRadius="full"
                    size="lg"
                    bg={'#02428d'}
                    variant="solid"
                    _hover={{
                      bg:'#ecc94b'
                    }}
                  />
                </Flex>
              </GridItem>
            )}
          </Grid>

          {/* View All Reviews Button */}
          <Flex justify="center" mt={6}>
            <Button color="white" bg={'#02428d'} size="md"  _hover={{
              bg: '#ecc94b',
              color:'black'
            }} className="component1">Talk to a PhD Expert Now</Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialSection;


