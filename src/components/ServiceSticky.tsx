


import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Image, Heading, Icon, VStack, keyframes, HStack } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";
import useScrollTransition from "../templates/usescrolltransition";

// Keyframes for sliding in from right and sliding out to left
const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOutLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

// Dynamic Testimonial Content component
const TestimonialContent = ({ isSlidingOut, testimonial }) => (
  <Box
    animation={isSlidingOut ? `${slideOutLeft} 0.5s forwards` : `${slideInRight} 0.5s forwards`}
    textAlign="center"
    p={{base:'0', md:'4'}}
  >
    {/* Testimonial Image */}
    <Box position="relative" display="flex" justifyContent="center" mb={4}>
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        borderRadius="full"
        boxSize={{ base: "70px", md: "100px" }}
        objectFit="cover"
      />
      {/* Quote Icon */}
      <Icon
        as={FaQuoteLeft}
        boxSize={8}
        color="blackAlpha.600"
        position="absolute"
        top={{ base: "60px", md : "60px"}}
        left={10}
      />
    </Box>
    <Flex align="center" justify="center">
      <VStack align="center" spacing={4} mt={2}>
        <Text fontSize={{ base: "md", md: "lg" }} color="black" position="relative" px={4}>
          {testimonial.text}
          <Icon
            as={FaQuoteLeft}
            boxSize={8}
            color="blackAlpha.600"
            position="absolute"
            bottom={{base : "-7", md : "-5"}}
            right={6}
          />
        </Text>
      </VStack>
    </Flex>
    {/* Author */}
    <VStack display="flex" flexDirection="column" justifyContent="center" mt={6} textAlign="center">
      <Heading as="h4" size="md" color="black">{testimonial.name}</Heading>
      <Text fontSize="sm" color="gray.400">{testimonial.title}</Text>
    </VStack>
  </Box>
);

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSlidingOut, setIsSlidingOut] = useState(false);

  // Array of testimonials with dynamic content
  const testimonials = [
    {
      image: "https://optolite.mattengg.com/images/testmonial_kastuba.jpeg",
      name: "Kashtua Tubqaz",
      title: "Project Manager, Almohiet company",
      text: "I had the pleasure of working with this company on a recent project, One of the things that stood out to me the most was the exceptional level of customer service that Matt Engineering Solutions provided. They were always available to answer any questions or concerns that I had, and they were proactive in keeping me updated on the progress of the project."
    },
    {
      image: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912768/avatar-icon-md.png",
      name: "Mohamed Irfan P.M",
      title: "Asst. Operations Manager, RANCO Group of Companies",
      text: "I am happy to provide a testimonial for Matt Engineering Solutions. My experience with this company has been exceptional, and I highly recommend them to anyone looking for top-notch engineering solutions. They are dedicated to ensuring that their clients are completely satisfied with their work, and they go above and beyond to ensure that everything is done right."
    },
    {
      image: "https://optolite.mattengg.com/images/testi_3.jpeg",
      name: "Abdulhamid Omar",
      title: "Lecturer, Alfurat National University Agthabiya",
      text: "I recently worked with Matt Engineering Solutions on a complex engineering project and I was thoroughly impressed by their professionalism and expertise. The team was highly knowledgeable and dedicated to delivering high-quality results within our project timelines. Exceptional level of customer service that exceeds expectations, leaving the recipient amazed or deeply impressed."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSlidingOut(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsSlidingOut(false);
      }, 500); // Wait for the slide-out animation before switching
    }, 13000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Box m={{ base: "20px", md: "50px" }}>
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        color="black"
        fontWeight="bold"
        mb={6}
        className="component1"
        textAlign="center"
      >
        Testimonials
      </Text>
      <Box
        bg="white"
        color="black"
        p={{base:'0', md:'4'}}
        borderRadius="lg"
        maxW={{ base: "100%", md: "80%" }}
        mx="auto"
        overflow="hidden"
        className="component1"
      >
        <Box key={currentIndex}>
          <TestimonialContent
            isSlidingOut={isSlidingOut}
            testimonial={testimonials[currentIndex]}
          />
        </Box>
        <HStack spacing={2} justify="center" mt={4}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              height="10px"
              width="10px"
              borderRadius="full"
              bg={currentIndex === index ? "blue.500" : "gray.300"}
              transition="background-color 0.3s"
            />
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default App;
