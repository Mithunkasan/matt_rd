import { Box, Button, Center, Flex, Heading, Icon, IconButton, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import { ArrowForwardIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { visibleCards } from './Featureddatas' // Importing the card data
import useScrollTransition from '../templates/usescrolltransition';



const ServiceSection = () => {
      return (
        <Box bg="white" w="100%" py={10} px={{ base: 4, md: 4 }}>
          {/* Header Section */}
          <Box textAlign="center" mb={10}>
            <Text  fontWeight="bold" fontSize={{base:"xl",md:"2xl"}}>
             FEATURED PROJECTS
            </Text>
            <Text mt={2} fontSize="md" color="gray.600">
           <strong> Matt Research Solutions </strong>is at the forefront of these endeavors, showcasing our ability to tackle complex 
           challenges and deliver exceptional outcomes.Our featured projects span a wide range of fields, demonstrating our ability to deliver top-quality 
           results that meet the highest standards.
            </Text>
          </Box>
    
          {/* Grid Section */}
          <Box bg="#f4f4f4" py={{ base: 10, md: 10 }} width="100%">
            <SimpleGrid
              columns={{ base: 1, md: 3 }}  // 1 column on mobile, 3 on desktop
              spacing={8} // Spacing between grid items
              maxW="1200px"
              mx="auto"
            >
              {visibleCards.map((card, index) => (
                <Box
                  key={index}
                  bg="white"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="lg"
                  textAlign="center"
                >
                  {/* Image Section */}
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    objectFit="cover"
                    width="100%"
                    height="250px"
                  />
                  {/* Content Section */}
                  <Box bg="#02428d" p={5}>
                    <Text
                      fontWeight="bold"
                      color="white"
                      mb={2}
                      fontSize={{ base: 'md', md: 'lg' }}
                    >
                      {card.title}
                    </Text>
                    <Text color="white" fontSize="sm">
                      {card.description}
                    </Text>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      );
    };

    const AboutUsComponent: React.FC = () => {
        return (
          <Box position="relative" h={{ base: "40vh", md: "50vh", lg: "60vh" }} mb={10}>
            {/* Background Image with Overlay */}
            <Box
              backgroundImage="url('abous.png')" // Replace with your image URL
              backgroundSize="cover"
              backgroundPosition="center"
              h="100%"
              w="100%"
              position="absolute"
              top={0}
              left={0}
              zIndex={1}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgColor: '#02428d',
                opacity: 0.5, // Apply opacity to the overlay color
                zIndex: 2,
              }}
            />
            
            {/* Text Content */}
            <Box position="relative" zIndex={2} p={{ base: 4, md: 8, lg: 20 }}>
              <Center>
                <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={{base:'2',md:'3'}} color="white" fontWeight="bold" mt={{ base: 8, md: 12, lg: 20 }}>
                  Featured Projects
                </Text>
              </Center>
              
              {/* Breadcrumb Navigation */}
              <Flex alignItems="center" justifyContent="center" mt={3}>
                <Link href="/" fontSize={{ base: "sm", md: "md", lg: "lg" }} mr={2} color="white">
                  Home
                </Link>
                <Icon as={ArrowForwardIcon} boxSize={{ base: 4, md: 5 }}  color="white" />
                <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} ml={2} mb={0} color="white">
                  Featured Projects
                </Text>
              </Flex>
            </Box>
          </Box>
        );
      };
      
      const FullProcessComponent = () => {
        return (
          <Box>
            <AboutUsComponent />
            <ServiceSection />
          </Box>
        );
      };
      
      export default FullProcessComponent;
      
