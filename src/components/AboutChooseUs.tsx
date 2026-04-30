
import { Box, Flex, Heading, Image, Text, Circle, Center,Divider, Grid, GridItem,VStack,Icon,  Stack, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from 'react';
import { FaThumbsUp, FaUserCheck, FaClipboardList, FaSmile,FaCheckCircle,FaHandHoldingHeart, FaUserShield, FaEye, FaLock  } from 'react-icons/fa';
import { url } from 'inspector';
import useScrollTransition from "../templates/usescrolltransition";


const AboutUsBackground: React.FC = () => {
  useScrollTransition()
  return (
    <Box position="relative" h={{ base: "40vh", md: "50vh", lg: "60vh" }} mb={10}>
      {/* Background Image with Overlay */}
      <Box
        backgroundImage="url('companyphotos11.jpg')" // Replace with your image URL
        backgroundSize="cover"
        backgroundPosition="center"
        h="100%"
        w="100%"
        objectFit={'cover'}
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
          <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}  color="white" fontWeight="bold" mt={{ base: 8, md: 12, lg: 20 }}>
            Why Choose Us
          </Text>
        </Center>
        
        {/* Breadcrumb Navigation */}
        <Flex alignItems="center" justifyContent="center" mt={3}>
          <Link href="/" fontSize={{ base: "sm", md: "md", lg: "lg" }} mr={2} color="white">
            Home
          </Link>
          <Icon as={ArrowForwardIcon} boxSize={{ base: 4, md: 5 }}  color="white" />
          <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} ml={2} color="white">
            Why Choose US
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};




const ResearchHighlights = () => {
  useScrollTransition()
  return (
    <Box mt={4} id="hooseuses" className='component1'>
      <Heading
        mt={10}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign="center"
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
      >
        Why Choose Us
      </Heading>
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        p={{ base: 4, md: 8 }}
        m={{ base: '20px', md: '0px 50px', lg: '0px 50px' }}
      >
        <Box
          borderRadius="10px"
          overflow="hidden"
          w={{ base: '250px', md: '300px', lg: '350px' }}
          h={{ base: '250px', md: '300px', lg: '320px' }}
          mx={{ base: 'auto', md: 0 }}
          mb={{ base: 4, md: 0 }}
          className='component'
        >
          <Image src="/companyphotos1.jpg" alt="Research Paper Illustration" objectFit="cover" />
        </Box>

        <Stack ml={{ base: 0, md: 8 }} spacing={4} mt={{ base: 4, md: 0 }} className='component1'>
          <List spacing={3} m={{ base: '0px 0px', md: '0px 0px', lg: '0px 10px' }} p={0}>
            <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              Our dedicated team consists of over 547 highly skilled professionals specializing in Engineering, Science & Technology, Management, and other fields.
            </ListItem>
            <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              We guarantee the delivery of high-quality articles that meet SCOPUS and SCI standards, complete with a comprehensive plagiarism report.
            </ListItem>
            <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              Before delivering your paper, our team will meticulously review and assess its overall quality, technical accuracy, and language clarity.            </ListItem>
            <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              We offer the option for a conference call or meeting to address your questions and provide expert assistance tailored to your needs.            </ListItem>
            <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              We will assist you in publishing your research articles in well-respected international journals, including SCOPUS and SCI.            </ListItem>
            <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              Our services include guidance on writing research articles, as well as proofreading and editing to ensure your work is publication-ready.             </ListItem>
            <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              Guidance & Assistance will be provided for research article writing with publications, proof reading and editing etc.
            </ListItem>
            <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              We are available for inquiries around the clock, ensuring you receive the support you need whenever you need it.
            </ListItem>
          </List>
        </Stack>
      </Box>
    </Box>
  );
};






const StatsComponent = () => {
  useScrollTransition()

  const [yearsExperience, setYearsExperience] = useState(0);
  const [returningCustomers, setReturningCustomers] = useState(0);
  const [ordersCompleted, setOrdersCompleted] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);

  useEffect(() => {
      if (yearsExperience < 10) {
          setTimeout(() => setYearsExperience(prev => prev + 1), 100);
      }
  }, [yearsExperience]);

  useEffect(() => {
      if (returningCustomers < 70) {
          setTimeout(() => setReturningCustomers(prev => prev + 1), 100);
      }
  }, [returningCustomers]);

  useEffect(() => {
      if (ordersCompleted < 20) {
          setTimeout(() => setOrdersCompleted(prev => prev + 1), 100);
      }
  }, [ordersCompleted]);

  useEffect(() => {
      if (happyCustomers < 25) {
          setTimeout(() => setHappyCustomers(prev => prev + 1), 100);
      }
  }, [happyCustomers]);

  return (
      <Flex 
          direction={{ base: "column", md: "row" }} // Stack vertically on smaller screens, horizontally on larger
          justify="space-around" 
          align="center" 
          bg="#02428d" 
          p={{ base: 4, md: 8 }} // Padding adjusts based on screen size
          color="white"
          className='component1'
          wrap="wrap" // Allow wrapping on smaller screens
      >
          <VStack spacing={4} align="center" w={{ base: "100%", md: "25%" }} p={2}>
              <Box borderRadius="full" bg="#ecc94b" p={4}>
                  <Icon as={FaThumbsUp} boxSize={8} />
              </Box>
              <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color={'white'}>{yearsExperience}</Text>
              <Text color={'white'}>Years Experience</Text>
          </VStack>

          <VStack spacing={4} align="center" w={{ base: "100%", md: "25%" }} p={2}>
              <Box borderRadius="full" bg="#ecc94b" p={4}>
                  <Icon as={FaUserCheck} boxSize={8} />
              </Box>
              <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color={'white'}>{returningCustomers}%</Text>
              <Text color={'white'}>Returning Customers</Text>
          </VStack>

          <VStack spacing={4} align="center" w={{ base: "100%", md: "25%" }} p={2}>
              <Box borderRadius="full" bg="#ecc94b" p={4}>
                  <Icon as={FaClipboardList} boxSize={8} />
              </Box>
              <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color={'white'}>{ordersCompleted}K+</Text>
              <Text color={'white'}>Orders Completed/Year</Text>
          </VStack>

          <VStack spacing={4} align="center" w={{ base: "100%", md: "25%" }} p={2}>
              <Box borderRadius="full" bg="#ecc94b" p={4}>
                  <Icon as={FaSmile} boxSize={8} />
              </Box>
              <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color={'white'}>{happyCustomers}L+</Text>
              <Text color={'white'}>Happy Customers</Text>
          </VStack>
      </Flex>
  );
};


const WhyChooseUs = () => {
    return (
      <Box p={8} className='component1'>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
          {/* Left Column - Text Content */}
          <GridItem>
            <Heading size="xl" mb={6} className='component'>Why Choose Us</Heading>
            <Stack spacing={5}>
            <Stack direction="row" align="start">
                <Icon as={FaEye} boxSize={6} color="#02428d" /> {/* Change color here */}
                <Box>
                  <Heading size="md" className='component1' >Transparency</Heading>
                  <Text className='component1'>We fabricate trust through transparency, which highlights benefits that can prompt more joyful customers.</Text>
                </Box>
              </Stack>
              <Stack direction="row" align="start" className='component1'>
                <Icon as={FaLock} boxSize={6} color="#ecc94b" /> {/* Change color here */}
                <Box>
                  <Heading size="md">Privacy</Heading>
                  <Text>Security in research alludes to the secrecy stood to members in that research.</Text>
                </Box>
              </Stack>
              <Stack direction="row" align="start" className='component1'>
                <Icon as={FaUserShield} boxSize={6} color="#02428d" /> {/* Change color here */}
                <Box>
                  <Heading size="md">Respect</Heading>
                  <Text>A standout among the most ideal approaches to demonstrate our regard is to recognize what the client states and address them rapidly.</Text>
                </Box>
              </Stack>
             <Stack direction="row" align="start" className='component1'>
                <Icon as={FaHandHoldingHeart} boxSize={6} color="#ecc94b" /> {/* Change color here */}
                <Box>
                  <Heading size="md">Engagement</Heading>
                  <Text>Connected with clients, we are increasingly providing beneficial, more client engaged and progressively steadfast.</Text>
                </Box>
              </Stack>
            </Stack>
          </GridItem>
  
          {/* Right Column - Images */}
          <GridItem>
            <Heading size="xl" mb={6} className='component'>Our Company In Photos</Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={4} className='component1'>
      <Box bg="gray.200" h="150px" >
        <Image src="Matt Image2.jpg" alt="Image 1" w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box bg="gray.200" h="150px">
        <Image src="Matt Image9.jpg" alt="Image 2" w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box bg="gray.200" h="150px">
        <Image src="Matt Image8.jpg" alt="Image 3" w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box bg="gray.200" h="150px">
        <Image src="Matt Image1.jpg" alt="Image 4" w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box bg="gray.200" h="150px">
        <Image src="Matt Image7.jpg" alt="Image 5" w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box bg="gray.200" h="150px">
        <Image src="Matt Image5.jpg" alt="Image 6" w="100%" h="100%" objectFit="cover" />
      </Box>
      {/* {/* <Box bg="gray.200" h="100px">
        <Image src="Matt Image4.jpg" alt="Image 7" w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box bg="gray.200" h="100px">
        <Image src="Matt Image3.jpg" alt="Image 8" w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box bg="gray.200" h="100px">
        <Image src="Matt Image10.jpg" alt="Image 9" w="100%" h="100%" objectFit="cover" />
      </Box> */}
      <Box bg="gray.200" h="150px">
        <Image src="Matt Image11.jpg" alt="Image 10" w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box bg="gray.200" h="150px">
        <Image src="Matt Image13.jpg" alt="Image 11" w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box bg="gray.200" h="150px">
        <Image src="Matt Image12.jpg" alt="Image 12" w="100%" h="100%" objectFit="cover" />
      </Box> 
    </Grid>
          </GridItem>
        </Grid>
      </Box>
    );
  };

const FullProcessComponent = () => {
    return (
      <Box>
        <AboutUsBackground />
        <ResearchHighlights />
        <StatsComponent />
        <WhyChooseUs />       
      </Box>
    );
  };
  
  export default FullProcessComponent;











