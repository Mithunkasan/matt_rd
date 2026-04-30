// import { Box, Flex, Heading, Text, List, ListItem, Image, Icon } from '@chakra-ui/react';
// import { CheckIcon } from '@chakra-ui/icons';

// const CreativeHouseComponent = () => {
//   return (
//     <Box position="relative" bg="white" p={8} display={'flex'} maxW={1300} justifyContent={'center'} ml={'150px'}>
//       <Flex
//         direction={{ base: 'column', md: 'row' }}
//         align="center"
//         justify="space-between"
//         p={4}
//         borderRadius="md"
//       >
       

//         {/* Right Side - Content */}
//         <Box flex={1}>
//           <Heading as="h2" size="xl" mb={4} color="purple.800">
//             A house of creative & Intelligents
//           </Heading>
//           <Text fontSize="lg" color="gray.600" mb={4}>
//             In social science, agency is defined as the capacity of individuals to act independently and to make their own free choices.
//           </Text>

//           <List spacing={3}>
//             <ListItem display="flex" alignItems="center">
//               <Icon as={CheckIcon} color="teal.500" mr={2} />
//               <Text fontSize="md" color="gray.700">Our vision is to inspire businesses to put employee</Text>
//             </ListItem>
//             <ListItem display="flex" alignItems="center">
//               <Icon as={CheckIcon} color="teal.500" mr={2} />
//               <Text fontSize="md" color="gray.700">Wellbeing at the heart of everything they do.</Text>
//             </ListItem>
//             <ListItem display="flex" alignItems="center">
//               <Icon as={CheckIcon} color="teal.500" mr={2} />
//               <Text fontSize="md" color="gray.700">Our mission is to use employee wellbeing as a tool</Text>
//             </ListItem>
//             <ListItem display="flex" alignItems="center">
//               <Icon as={CheckIcon} color="teal.500" mr={2} />
//               <Text fontSize="md" color="gray.700">To champion positive change in the modern</Text>
//             </ListItem>
//           </List>
//         </Box>
//          {/* Left Side - Image */}
//          <Box flex={1} mr={{ base: 0, md: 8 }}>
//           <Image
//             src="/companyphotos1.jpg"
//             alt="Creative Work Space"
//             objectFit="cover"
//             borderRadius="md"
//             h="500px"
//             mb={1}
//             width="100%"
//             // boxShadow="lg"
//             _hover={{ opacity: 0.7 }} // Opacity change on hover
//               transition="opacity 0.3s ease" // Smooth transition effect
//           />
//         </Box>
//       </Flex>
      
//       {/* Bottom Red Bar */}
//       <Box
//         bg="#ecc94b"
//         height="25px"
//         width="90%"
//         position="absolute"
//         bottom={7}
        
//         right={20}    
//         borderRadius="sm"
//       />
//     </Box>
//   );
// };

// export default CreativeHouseComponent;




import { Box, Flex, Heading, Text, List, ListItem, Image, Icon } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import useScrollTransition from '../templates/usescrolltransition';

const CreativeHouseComponent = () => {
  useScrollTransition()
  return (
    <Box position="relative" bg="white" p={{ base: 4, md: 8 }} maxW={{ base: '100%', lg: 1300 }} mx="auto" className='component'>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        p={4}
        gap={{base:'0',md:'10'}}
        borderRadius="md"
      >
        {/* Right Side - Content */}
        <Box flex={1} order={{ base: 2, md: 1 }} textAlign={{ base: 'center', md: 'left' }}  mt={{ base: 6, md: 0 }} className='component'>
          <Heading as="h2" size={{ base: 'lg', md: 'xl' }} mb={4} color="purple.800">
          How We Approach Project & Execution and Management
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" mb={4}>
           "How We Approach Project Execution and Management"  refers to our <strong>structured methodology </strong> for <strong>successfully planning, executing, and overseeing projects </strong>from start to finish.          </Text>

          <List spacing={3} pl={0}>
            <ListItem display="flex" alignItems="center" justifyContent={{ base: 'center', md: 'flex-start' }}>
              <Icon as={CheckIcon} color="teal.500" mr={2} />
              <Text fontSize="md" color="gray.700" mb={0}>
              Our mission is to empower businesses to prioritize employee wellbeing, making it the core of their operations and culture.</Text>
            </ListItem>
            <ListItem display="flex" alignItems="center" justifyContent={{ base: 'center', md: 'flex-start' }}>
              <Icon as={CheckIcon} color="teal.500" mr={2} />
              <Text fontSize="md" color="gray.700" mb={0}>We believe in creating workplaces where employee wellbeing is central.</Text>
            </ListItem>
            <ListItem display="flex" alignItems="center" justifyContent={{ base: 'center', md: 'flex-start' }}>
              <Icon as={CheckIcon} color="teal.500" mr={2} />
              <Text fontSize="md" color="gray.700" mb={0}>Our Vission prioritizing wellbeing, we aim to build resilient, engaged teams that contribute to long-term business success.</Text>
            </ListItem>
            <ListItem display="flex" alignItems="center" justifyContent={{ base: 'center', md: 'flex-start' }}>
              <Icon as={CheckIcon} color="teal.500" mr={2} />
              <Text fontSize="md" color="gray.700" mb={0}>Our value is to champion positive change in every project we undertake .</Text>
            </ListItem>
          </List>
        </Box>

        {/* Left Side - Image */}
        <Box flex={1} mr={{ base: 0, md: 8 }} order={{ base: 1, md: 2 }} mb={{ base: 6, md: 0 }} className='component1'>
          <Image
            src="/companyphotos1.jpg"
            alt="Creative Work Space"
            objectFit="cover"
            borderRadius="md"
            h={{ base: '300px', md: '500px' }}
            width="100%"
            _hover={{ opacity: 0.7 }}
            transition="opacity 0.3s ease"
          />
        </Box>
      </Flex>

      {/* Bottom Yellow Bar */}
      <Box
        bg="#ecc94b"
        height="25px"
        width={{ base: '80%', md: '90%' }}
        position="absolute"
        bottom={7}
        right={{ base: '10%', md: 20 }}
        borderRadius="sm"
      />
    </Box>
  );
};

export default CreativeHouseComponent;
