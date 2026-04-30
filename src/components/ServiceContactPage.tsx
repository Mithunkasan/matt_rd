
import React from 'react';
import { Box, Flex, Heading, SimpleGrid, Text, Input, Textarea, Button } from '@chakra-ui/react';

const ContactComponent = () => {
  const cardData = [
    {
      title: "Contact Details",
      details: [
        { label: "Country", value: "india" },
        { label: "City", value: "Kanyakumari" },
        { label: "Street", value: "3rd floor,Pillars gate, Vadasery, Tamil Nadu 629001" },
      ],
    },
    {
      title: "Contact Info",
      details: [
        { label: "HeadOffice", value: "Pillar Gate,Vadasery Kanyakumari Dist,Tamil Nadu" },
        { label: "BranchOffice", value: "HMT Junction,Kalamassery,Ernakulam-683104" },
      ],
    },
    {
      title: "Support Information",
      details: [
        { label: "Email", value: "info@mattengg.com" },
        { label: "Office", value: " 8825735141" },
        { label: "Personal", value: "8547486582" },
      ],
    },
  ];

  return (
    <Box bg="#02428d">
      <Box color="white" p={{ base: 6, md: 8 }} m={{ base: '20px', md: '40px 80px' }}>
        <Heading as="h2" size="xl" mt={10} mb={6} textAlign={{ base: 'center', md: 'left' }}>
          Contact Information
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 10 }} textAlign="center">
  {cardData.map((card, index) => (
    <Box
      key={index}
      bg="white"
      p={6}
      borderRadius="md"
      boxShadow="lg"
      color="black"
      textAlign="center" // This ensures the text is centered within each box
      display="flex"
      flexDirection="column" // Aligns the content vertically
      alignItems="center" // Centers items horizontally
    >
      <Heading as="h2" size="lg" mb={4}>
        {card.title}
      </Heading>
      {card.details.map((detail, idx) => (
        <Text mb={2} key={idx} textAlign="center"> {/* Ensures each detail is centered */}
          {detail.label}: <strong>{detail.value}</strong>
        </Text>
      ))}
    </Box>
      ))}
    </SimpleGrid>

        {/* Contact Form */}
        <Box mt={16} mb={4}>
          <Heading as="h2" size="xl" mb={6} textAlign={{ base: 'center', md: 'left' }}>
            Get in Touch
          </Heading>
          <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 4, md: 8 }}>
            {/* Left Side - Form */}
            <Box flex="1">
              <Input placeholder="Name" mb={5} bg="white" color="black" width="100%" />
              <Input placeholder="Email" mb={5} bg="white" color="black" width="100%" />
              <Input placeholder="Phone Number" mb={5} bg="white" color="black" width="100%" />
              <Textarea placeholder="Message" mb={5} bg="white" color="black" width="100%" resize="none" />
              <Button colorScheme="yellow" size="lg" width={{ base: '100%', md: '50%' }}>
                Send Message
              </Button>
            </Box>

            {/* Right Side - Google Maps iFrame */}
            <Box flex="1" display="flex" justifyContent="center" alignItems="center">
              <Box width="100%" height={{ base: '300px', md: '450px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15796.338235398931!2d77.4234810396794!3d8.194236858160197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f12c4c0c91c5%3A0xedce33c89801651!2sVadasery%2C%20Tamil%20Nadu%20629001!5e0!3m2!1sen!2sin!4v1729260315764!5m2!1sen!2sin"
                  width="100%"
                  height="90%"
                  style={{ border: 'none', borderRadius: '8px' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactComponent;

