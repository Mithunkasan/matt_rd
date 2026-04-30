
import { Box, Heading, SimpleGrid, Image, Flex } from '@chakra-ui/react';

const FinancialInstitutionCard = () => {
  const logos = [
    'scopus.png',
    'cross.png',
    'ESCi.png',
    'SCi.png',
  ];

  return (
    <Box textAlign="center" mt={8} mb={8} px={{ base: 4, md: 8 }}>
      <Heading as="h2" size="lg" mb={10}>
        Publication Assistant
      </Heading>
      <SimpleGrid
        columns={{ base: 2, sm: 2, md: 3, lg: 4, xl: 5 }} // Adjusted for better mobile experience
        spacing={{ base: 4, md: 6 }} // Spacing can also vary based on screen size
      >
        {logos.map((logo, index) => (
          <Flex
            key={index}
            justifyContent="center"
            alignItems="center"
            p={4}
            borderRadius="md"
            bg="white"
            ml={{base: "0px", md : "40px"}}
            _hover={{ boxShadow: 'lg' }}
          >
            <Image 
              src={logo} 
              alt={`Logo ${index + 1}`} 
              boxSize={{ base: '80px', md: '120px', lg: '150px' }} // Responsive logo sizes
            />
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FinancialInstitutionCard;

