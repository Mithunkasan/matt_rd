import React from 'react';
import { Box, Heading, Text, Grid, VStack, List, ListItem, ListIcon, Flex } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const DissertationServiceComponent = () => {
  return (
    <Flex
      direction="column"
      align="center"
      p={[4, 6, 8]} // Add padding for different screen sizes
      bg="white"
      borderRadius="lg"
      maxW="1300px"
      mx="auto"
      id="serve"
    >
      {/* Main Title and Description */}
      <Box textAlign="center" mb={6} className='component1'>
        <Heading as="h2" size="lg" mb={7}>
        Why Choose Us for Your PhD Journey...?
        </Heading>
        <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={4} className='component1  '>
        Our Matt team of experienced professionals is dedicated to guiding you every step of the way. From selecting the right research topic to navigating complex academic challenges, we provide the expertise you need to succeed.
        </Text>
      </Box>

      {/* Main Grid Container */}
      <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={6} width="100%">
        {/* First Box */}
        <Box border="1px solid" borderColor="#02428d" borderRadius="md" boxShadow="sm" className='component1'>
          {/* Highlighted Title Area */}
          <Box bg="#02428d" p={4} borderTopRadius="md">
            <Heading as="h3" size="md" color="white" textAlign="center">
            Commitment to Your Success at Every Steps
            </Heading>
          </Box>
          {/* List Content */}
          <VStack align="start" p={5}  spacing={3}>
            <List spacing={5} pl={{base:'0', md:'3'}}>
              <ListItem>
                <ListIcon as={AddIcon} color="#ecc94b" boxSize={4} mb={1}/>
                <Text as="span" fontWeight="bold">Innovative Solutions:</Text><Text as="span" fontSize="lg" fontWeight={'semibold' } color={'gray.600'}> We provide cutting-edge engineering solutions tailored to your project’s unique challenges.</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AddIcon} color="#ecc94b" boxSize={4} mb={1}/>
                <Text as="span" fontWeight="bold" >Expert Team:</Text> <Text as="span" fontSize="lg" fontWeight={'semibold' } color={'gray.600'}> Our skilled engineers guide you from concept to execution.</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AddIcon} color="#ecc94b" boxSize={4} mb={1}/>
                <Text as="span" fontWeight="bold">Customized Approach:</Text> <Text as="span" fontSize="lg" fontWeight={'semibold' } color={'gray.600'}> We tailor our strategies to align with your unique project needs.</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AddIcon} color="#ecc94b" boxSize={4} mb={1}/>
                <Text as="span" fontWeight="bold">Comprehensive Services:</Text><Text as="span" fontSize="lg" fontWeight={'semibold' } color={'gray.600'}> We offer a full suite of services, from design and analysis to project management and implementation.</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AddIcon} color="#ecc94b" boxSize={4} mb={1}/>
                <Text as="span" fontWeight="bold">Sustainability Focus:</Text><Text as="span" fontSize="lg" fontWeight={'semibold' } color={'gray.600'}> We prioritize sustainable practices, ensuring our solutions are effective and environmentally responsible.</Text>
              </ListItem>
            </List>
          </VStack>
        </Box>

        {/* Second Box */}
        <Box border="1px solid" borderColor="#02428d" borderRadius="md" boxShadow="sm" className='component1'>
          {/* Highlighted Title Area */}
          <Box bg="#02428d" p={4} borderTopRadius="md">
            <Heading as="h3" size="md" color="white" textAlign="center">
            Tailored Strategies for Your Academic Growth
            </Heading>
          </Box>
          {/* List Content */}
          <VStack align="start" p={5}  spacing={3}>
            <List spacing={2} pl={{base:'0', md:'3'}}>
              <ListItem>
                <ListIcon as={AddIcon} color="#ecc94b" boxSize={4} mb={1}/>
                <Text as="span" fontWeight="bold">Supportive Community:</Text> <Text as="span" fontSize="lg" fontWeight={'semibold' } color={'gray.600'}> Join a network of scholars and professionals who offer insights and encouragement throughout your PhD journey.</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AddIcon} color="#ecc94b" boxSize={4} mb={1}/>
                <Text as="span" fontWeight="bold">Client-Centric Philosophy:</Text> <Text as="span" fontSize="lg" fontWeight={'semibold' } color={'gray.600'}> Your satisfaction is our priority. We ensure open communication and collaboration throughout the process.</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AddIcon} color="#ecc94b" boxSize={4} mb={1}/>
                <Text as="span" fontWeight="bold">Timely Delivery:</Text> <Text as="span" fontSize="lg" fontWeight={'semibold' } color={'gray.600'}> We ensure prompt service delivery to keep you on track with your PhD timeline.</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AddIcon} color="#ecc94b" boxSize={4} mb={1}/>
                <Text as="span" fontWeight="bold">Publication Success:</Text> <Text as="span" fontSize="lg" fontWeight={'semibold' } color={'gray.600'}> Our expertise in journal selection boosts your chances of getting published in reputable journals.</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AddIcon} color="#ecc94b" boxSize={4} mb={1}/>
                <Text as="span" fontWeight="bold">Tailored Support:</Text> <Text as="span" fontSize="lg" fontWeight={'semibold' } color={'gray.600'}> We offer personalized assistance to enhance your PhD journey based on your unique research needs and goals. </Text>
              </ListItem>
            </List>
          </VStack>
        </Box>
      </Grid>
    </Flex>
  );
};

export default DissertationServiceComponent;
