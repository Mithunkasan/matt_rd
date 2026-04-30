import { Box, Flex, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, Icon, Image, Button, Center } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { faqDatas } from './faqData'; // Adjust the path as needed
import React, { useState } from 'react';

const FAQComponent = () => {
  // Initially show the first 5 FAQs
  const [visibleFAQs, setVisibleFAQs] = useState(faqDatas.slice(0, 10));
  const [isExpanded, setIsExpanded] = useState(false); // Track if the "Read More" button is clicked

  // Function to toggle visibility of additional FAQs
  const toggleFAQs = () => {
    if (isExpanded) {
      // If already expanded, show only the first 5 FAQs
      setVisibleFAQs(faqDatas.slice(0, 10));
    } else {
      // If not expanded, show all FAQs
      setVisibleFAQs(faqDatas);
    }
    setIsExpanded(!isExpanded); // Toggle the state
  };

  return (
    <Box p={8} bg="white" className="component1">
      <Text as="h1" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" textAlign="center" mt={{ base: '3', md: '6' }} mb={10} className="component1">
        Frequently Asked Questions
      </Text>
      <Flex direction={{ base: "column", md: "row" }} alignItems="center" gap={10} maxW="1200px" mx="auto">
        <Box flex="1">
          <Text fontSize="lg" fontWeight="bold" mb={2} className="component1">Get Answers</Text>
          <Heading as="h2" fontSize="4xl" color="blue.900" mb={6} className="component1">Find Every Answer Here</Heading>

          <Accordion allowToggle>
            {visibleFAQs.map((faq, index) => (
              <AccordionItem key={index}>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton className="component1">
                      <Flex alignItems="center">
                        <Box
                          as="span"
                          bg="#02428d"
                          borderRadius="full"
                          color="white"
                          w="8"
                          h="8"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          mr={4}
                        >
                          <Icon as={isExpanded ? MinusIcon : AddIcon} />
                        </Box>
                        <Text flex="1" fontSize="lg" fontWeight="bold" color="blue.900" mb={0} p={0}>
                          {faq.question}
                        </Text>
                      </Flex>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Text color="gray.600" fontSize="lg">{faq.answer}</Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>

          {/* Read More / Read Less Button */}
          <Center mt={6}>
            <Button color={'white'} bg={'#02428d'} _hover={{ 
              bg:'#ecc94b',
              color:'black'
            }}
            onClick={toggleFAQs}>
              {isExpanded ? "Read Less" : "Read More"}
            </Button>
          </Center>
        </Box>

        <Image
          className="component1"
          src="/companyphotos9.jpg"
          alt="Supporting Image"
          borderRadius="lg"
          boxShadow="md"
          h="400px"
          w="450px"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
};

export default FAQComponent;
