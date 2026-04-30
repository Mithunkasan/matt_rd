// import React from 'react';
// import { Box, Text, Stack, Divider, Image, Flex } from '@chakra-ui/react';

// const WhatWeDo: React.FC = () => {
//   return (
//     <Box>
//     <Flex
//       maxW="1500px"
//     //   mx="auto"
//       m={'0px 150px'}
//       p={'0px 20px'}
//       justifyContent={'center'}
//       alignItems={'center'}
//       direction={{ base: 'column', md: 'row' }}
//       align="flex-start"
//       gap={20} // Add gap between the text and image sections
//     >
//       <Box flex="1" pr={{ md: 5 }}>
//         <Stack align="flex-start" spacing={6}>
//           <Text fontSize="3xl" fontWeight="bold" color={'black'} p={0}>
//             About Us
//           </Text>
//           <Divider bg="#02428d" width="100px" h="5px" p={0.9} m={0} textAlign={'center'}/>
//           <Text fontSize="md" color="gray.600" p={0}>
//           Matt Engineering Solution is a pioneering company in engineering services, dedicated to transforming complex technical challenges into streamlined solutions. Specializing in a broad range of fields, from civil and structural engineering to mechanical and electrical systems, Matt Engineering leverages advanced technology and deep industry expertise to deliver precision-focused results. Our solutions are tailored to meet specific project requirements, ensuring sustainable, cost-effective, and innovative outcomes. Whether it's designing infrastructure for urban development, optimizing energy systems, or implementing cutting-edge automation, we prioritize quality, efficiency, and reliability. At Matt Engineering, our commitment is to drive your vision forward with industry-leading engineering solutions and client-centered service.
//           </Text>
//         </Stack>
//       </Box>
//       <Image
//         src="united1.png" // Replace this with an actual research-related image URL
//         alt="Research Analysis"
//         boxSize={{ base: "100%", md: "500px" }}
//         objectFit="contain"
//         borderRadius="md"
//         flexShrink={0}
//       />   
//     </Flex>
//     <Box m={'0px 170px'}>
//     <Text fontSize="md" >This topic should be relevant to your field of studies, must add value to your field and also be interesting enough to catch your evaluator’s attention at the first look. It may seem like a mountainous job for you to single-handedly and we at Agastiyar Research and Technologies completely understand this. With the assistance from our expert team, the job of Ph.D. Topic selection and base paper selection becomes rather easier.</Text>
//   </Box>
//     <Box m={'0px 170px'}>
//     <Text fontSize="md" >Our expert services do not end there. We have a set of highly skilled and professional writers who can assist you to complete your academic thesis from the start to end. We understand that the research, data collection, analysis, etc.</Text>
//   </Box>
//     <Box m={'0px 170px'}>
//     <Text fontSize="md" >Our Matt solutions provide in-depth research support, tailored to meet your unique goals. With expertise in data analysis, comprehensive study design, and insightful inquiry, we turn complex information into actionable insights. From evidence-based analysis to scholarly exploration, we offer end-to-end guidance, ensuring clarity and precision at each stage of your project.</Text>
//   </Box>
//   </Box>
//   );
// };

// export default WhatWeDo;




import React from 'react';
import { Box, Text, Stack, Divider, Image, Flex } from '@chakra-ui/react';
import useScrollTransition from '../templates/usescrolltransition';

const WhatWeDo: React.FC = () => {
  useScrollTransition()
  return (
    <Box>
      <Flex
        maxW="1500px"
        m={{ base: '0px 10px', md: '0px 20px', lg: '0px 150px' }}
        p={{ base: '0px 10px', md: '0px 20px' }}
        justifyContent="center"
        alignItems="center"
        direction={{ base: 'column', md: 'row' }}
        align="flex-start"

        gap={{ base: 10, md: 20 }} // Add gap between text and image sections
      >
        <Box flex="1" pr={{ md: 5 }} className='component1'>
          <Stack align="flex-start" spacing={6}>
            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="black" p={0} className='component1'>
              About Us
            </Text>
            <Divider bg="#02428d" width="100px" h="5px" p={0.9} m={0} />
            <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" p={0} className='component1'>
              Matt Engineering Solution is a pioneering company in engineering services, dedicated to transforming complex technical challenges into streamlined solutions. Specializing in a broad range of fields, from civil and structural engineering to mechanical and electrical systems, Matt Engineering leverages advanced technology and deep industry expertise to deliver precision-focused results. Our solutions are tailored to meet specific project requirements, ensuring sustainable, cost-effective, and innovative outcomes. Whether it's designing infrastructure for urban development, optimizing energy systems, or implementing cutting-edge automation, we prioritize quality, efficiency, and reliability. At Matt Engineering, our commitment is to drive your vision forward with industry-leading engineering solutions and client-centered service.
            </Text>
          </Stack>
        </Box>
        <Image
          className='component1'
          src="united1.png" // Replace this with an actual research-related image URL
          alt="Research Analysis"
          boxSize={{ base: "100%", md: "500px" }}
          objectFit="contain"
          borderRadius="md"
          flexShrink={0}
        />
      </Flex>

      {/* Additional text sections */}
      <Box m={{ base: '0px 10px', md: '0px 20px', lg: '0px 170px' }} mt={8}>
        <Text fontSize={{ base: 'sm', md: 'md' }} className='component1'>
          This topic should be relevant to your field of studies, must add value to your field and also be interesting enough to catch your evaluator’s attention at the first look. It may seem like a mountainous job for you to single-handedly and we at Agastiyar Research and Technologies completely understand this. With the assistance from our expert team, the job of Ph.D. Topic selection and base paper selection becomes rather easier.
        </Text>
      </Box>

      <Box m={{ base: '0px 10px', md: '0px 20px', lg: '0px 170px' }} mt={4}>
        <Text fontSize={{ base: 'sm', md: 'md' }} className='component1'>
          Our expert services do not end there. We have a set of highly skilled and professional writers who can assist you to complete your academic thesis from the start to end. We understand that the research, data collection, analysis, etc.
        </Text>
      </Box>

      <Box m={{ base: '0px 10px', md: '0px 20px', lg: '0px 170px' }} mt={4}>
        <Text fontSize={{ base: 'sm', md: 'md' }} className='component1'>
          Our Matt solutions provide in-depth research support, tailored to meet your unique goals. With expertise in data analysis, comprehensive study design, and insightful inquiry, we turn complex information into actionable insights. From evidence-based analysis to scholarly exploration, we offer end-to-end guidance, ensuring clarity and precision at each stage of your project.
        </Text>
      </Box>
    </Box>
  );
};

export default WhatWeDo;
