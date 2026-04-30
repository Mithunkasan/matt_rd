import React from 'react';
import {
  Box,
  Flex,
  Input,
  Textarea,
  Button,
  VStack,
  Heading,
  Text,
  Divider,
  Icon,
  Center,
} from '@chakra-ui/react';
import { MdCall, MdEmail } from 'react-icons/md';

const ContactUs = () => {
  return (
    <Box bg="#ddd" px={{ base: 4, md: 16 }} py={20}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="flex-start"
        gap={10}
      >
        {/* Left Column - Form */}
        <Box flex="1">
          <VStack spacing={4} align="stretch">
            <Input
              placeholder="Your Name"
              borderRadius="sm"
              size="lg"
              borderColor="gray.300"
            />
            <Input
              placeholder="Your Email"
              borderRadius="sm"
              size="lg"
              borderColor="gray.300"
            />
            <Input
              placeholder="Your Phone Number"
              borderRadius="sm"
              size="lg"
              borderColor="gray.300"
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              borderRadius="sm"
              size="lg"
              borderColor="gray.300"
            />
            <Button
              bg="#ecc94b"
              color="black"
              _hover={{ bg: '#02428d' }}
              size="lg"
              borderRadius="sm"
              fontWeight="semibold"
              letterSpacing="widest"
            >
              SUBMIT
            </Button>
          </VStack>
        </Box>

        {/* Right Column - Contact Info */}
        <Box flex="1" textAlign="center">
          <Heading size="lg" mb={1} fontWeight="bold">
            Contact Us
          </Heading>
          <Center mb={6}>
            <Box h="1px" w="50px" bg="black" />
          </Center>

          {/* Phone */}
          <Center>
            <Box
              border="2px solid #02428d"
              borderRadius="full"
              p={2.5}
              display="inline-flex"
              mb={2}
            >
              <Icon as={MdCall} w={6} h={6} color="#02428d" />
            </Box>
          </Center>
          <Text fontSize="lg" fontWeight="semibold" mb={6}>
            +91-76048 97174
          </Text>

          <Divider borderColor="#02428d" maxW="200px" mx="auto" mb={6} />

          {/* Email */}
          <Center>
            <Box
              border="2px solid #02428d"
              borderRadius="full"
              p={2.5}
              display="inline-flex"
              mb={2}
            >
              <Icon as={MdEmail} w={6} h={6} color="#02428d" />
            </Box>
          </Center>
          <Text fontSize="lg" fontWeight="medium">
           info@mattengg.com
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactUs;
