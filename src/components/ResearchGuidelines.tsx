import React from 'react';
import { Box, Center, Text,Heading, Image, Flex, Icon, Link } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FaArrowRight } from "react-icons/fa";

// const AboutUsComponent: React.FC = () => {
//   return (
//     <Box position="relative" h="60vh" mb={10}>
//       <Box
//         backgroundImage="url('abous.png')" // Replace with your image URL
//         backgroundSize="cover"
//         backgroundPosition="center"
//         h="100%"
//         w="100%"
//         position="absolute"
//         top={0}
//         left={0}
//         zIndex={1}
//         _before={{
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           bgColor: '#02428d',
//           opacity: 0.5, // Apply opacity only to the overlay color
//           zIndex: 2,
//         }}
//       />
//       <Box position="relative" zIndex={2} p={20} color="white">
//         <Center>
//           <Text fontSize="3xl" fontWeight="bold" mt={20} color="white">
//           Research Guidelines
//           </Text>
//         </Center>
//         <Flex alignItems="center" justifyContent="center" mt={3}>
//           <Link href="/" fontSize="lg" mr={2} color="white">
//             Home
//           </Link>
//           <Icon as={ArrowForwardIcon} boxSize={5} />
//           <Text fontSize="lg" ml={2} color="white">
//           Research Guidelines
//           </Text>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };



// const SupportComponent = () => {
//   return (
//     <Flex
//       bg="white"
//       p={10}
//       align="center"
//       justify="center"
//       flexDirection={{ base: "column", md: "row" }}
//       gap={10}
//     >
//       <Box
//         boxShadow="lg"
//         borderRadius="lg"
//         overflow="hidden"
//         width={{ base: "100%", md: "50%" }}
//       >
//         <Image
//           src="/guidence.avif" // replace with your actual image path
//           alt="Two people working together"
//           objectFit="cover"
//           width="100%"
//           height="auto"
//         />
//       </Box>

//       <Box width={{ base: "100%", md: "50%" }}>
//         <Heading as="h2" fontSize="2xl" mb={4} color="gray.800">
//           What we support?
//         </Heading>
//         <Text color="gray.600" fontSize="lg">
//           We promise 100% client’s satisfaction and assured output of your result.
//           If you are looking for the best PhD assistance, we will aid you to
//           attain the motive of your PhD Research.
//         </Text>
//       </Box>
//     </Flex>
  
//   );
// }


// const PhDAssistanceComponent = () => {
//   return (
//     <Box
//       maxW="1100px"
//       bg="gray.50"
//       p={6}
//       borderRadius="md"
//       boxShadow="md"
//       mx="auto"
//       textAlign="center"
//     >
//       <Heading as="h2" size="lg" fontWeight="bold" mb={4}>
//       Why Choose Our Research Guidance Services in Matt Solutions....?      </Heading>
//       <Text fontSize="md" color="gray.700">
//         A <Text as="span" fontWeight="semibold" color="blue.600">
//           Ph.D Assistance Thesis Writing Services Research Guidance Matt
//         </Text>{" "}
//         Our Matt Solutions is home to a growing community of academic scholars, and our services are designed to support local PhD candidates. We bring years of experience in academic writing and research consultation to provide reliable thesis assistance. Whether you're struggling with research design, data analysis, or organizing your findings, our team is here to help. Our mission is to make your PhD journey smoother by providing expert insights, personalized guidance, and high-quality writing services.
//       </Text>
//     </Box>
//   );
// }




// const PhDGuidelinesComponent = () => {
//   return (
//     <Box maxW="1200px" mx="auto" py={10} px={4}>
//       {/* Main Heading */}
//       <Box textAlign="center" mb={8}>
//         <Heading as="h2" size="lg" color="black" fontWeight="bold">
//           Research Guidelines
//         </Heading>
//         <Text fontSize="lg" color="back">
//           Research Preparation Guidelines
//         </Text>
//       </Box>

//       {/* Guidelines Boxes */}
//       <Flex justify="space-between" flexWrap="wrap" gap={6}>
//         {/* Guideline 1 */}
//         <Box
//           flex="1"
//           maxW="550px"
//           p={6}
//           bg="white"
//           borderRadius="lg"
//           _hover={{
//              borderColor:"#02428d",
//              borderWidth:"2px",
//              boxShadow:"xl"
//           }}
//         >
//           <Flex align="center" mb={4}>
//             <Flex
//               align="center"
//               justify="center"
//               w="30px"
//               h="30px"
//               bg="#02428d"
//               color="white"
//               borderRadius="full"
//               fontWeight="bold"
//               mr={2}
//             >
//               1 
//             </Flex>
//             <Icon as={FaArrowRight} color="#02428d" ml={2} />
//             <Text fontWeight="bold" color="gray.700" fontSize="lg"  m={'0px 0px 0px 4px'} >
//               ELSEVIER
//             </Text>
            
//           </Flex>
//           <Text fontSize="sm" color="gray.600">
//             One of the main journal paper publishing industries was Elsevier,
//             it was founded in the year of 1880 and its head office was in
//             Amsterdam, Netherlands. They provide data identified with research
//             papers in legal, technical, and medical fields to numerous
//             scientists, students, and researchers. This paper takes huge
//             published articles annually in 2,500 journals. The time period
//             required for publishing is 90-150 days.
//           </Text>
//         </Box>

//         {/* Guideline 2 */}
//         <Box
//           flex="1"
//           maxW="550px"
//           p={6}
//           bg="white"
//           borderRadius="lg"
//           _hover={{
//             borderColor:"#02428d",
//             borderWidth:"2px",
//             boxShadow:"xl"
//          }}
//         >
//           <Flex align="center" mb={4}>
//             <Flex
//               align="center"
//               justify="center"
//               w="30px"
//               h="30px"
//               bg="#02428d"
//               color="white"
//               borderRadius="full"
//               fontWeight="bold"
//               mr={2}
//             >
//               2
//             </Flex>
//             <Icon as={FaArrowRight} color="#02428d" ml={2} />
//             <Text fontWeight="bold" color="gray.700" fontSize="lg" m={'0px 0px 0px 4px'} >
//               IEEE
//             </Text>
            
//           </Flex>
//           <Text fontSize="sm" color="gray.600">
//             While publishing journals it matters where you are. IEEE, a source
//             for researchers in academia, industry, and government. High-quality
//             research is obtained by publishing with IEEE. Leading journals,
//             transactions, letters, and magazines in electrical engineering,
//             computing, biotechnology, telecommunications, power and energy, and
//             dozens of other technologies can be published in IEEE.
//           </Text>
//         </Box> 
//       </Flex>
//       
//     </Box>
//   );
// };


const AboutUsComponent: React.FC = () => {
  return (
    <Box position="relative" h={{ base: "40vh", md: "50vh", lg: "60vh" }} mb={10}>
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
          opacity: 0.5, // Overlay opacity
          zIndex: 2,
        }}
      />
      <Box position="relative" zIndex={2} p={{ base: 4, md: 20 }} color="white">
        <Center>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mt={{ base: 10, md: 20 }} color="white">
            Research Guidelines
          </Text>
        </Center>
        <Flex alignItems="center" justifyContent="center" mt={3}>
          <Link href="/" fontSize={{ base: "sm", md: "lg" }} mr={2} color="white">
            Home
          </Link>
          <Icon as={ArrowForwardIcon} boxSize={{ base: 4, md: 5 }} />
          <Text fontSize={{ base: "sm", md: "lg" }} ml={2} color="white">
            Research Guidelines
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

const SupportComponent: React.FC = () => {
  return (
    <Flex
      bg="white"
      p={{ base: 4, md: 10 }}
      align="center"
      justify="center"
      flexDirection={{ base: "column", md: "row" }}
      gap={10}
    >
      <Box
        boxShadow="lg"
        borderRadius="lg"
        overflow="hidden"
        width={{ base: "100%", md: "50%" }}
      >
        <Image
          src="/guidence.avif" // Replace with your actual image path
          alt="Two people working together"
          objectFit="cover"
          width="100%"
          height="auto"
        />
      </Box>

      <Box width={{ base: "100%", md: "50%" }} textAlign={{ base: "center", md: "left" }}>
        <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} mb={4} color="gray.800">
          What we support?
        </Heading>
        <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
          We promise 100% client’s satisfaction and assured output of your result.
          If you are looking for the best PhD assistance, we will aid you to
          attain the motive of your PhD Research.
        </Text>
      </Box>
    </Flex>
  );
};

const PhDAssistanceComponent: React.FC = () => {
  return (
    <Box
      maxW="1100px"
      bg="gray.50"
      p={{ base: 4, md: 6 }}
      borderRadius="md"
      boxShadow="md"
      mx="auto"
      textAlign="center"
    >
      <Heading as="h2" size={{ base: "md", md: "lg" }} fontWeight="bold" mb={4}>
        Why Choose Our Research Guidance Services in Matt Solutions....?
      </Heading>
      <Text fontSize={{ base: "sm", md: "md" }} color="gray.700">
        A <Text as="span" fontWeight="semibold" color="blue.600">
          Ph.D Assistance Thesis Writing Services Research Guidance Matt
        </Text>{" "}
        Our Matt Solutions is home to a growing community of academic scholars, and our services are designed to support local PhD candidates. We bring years of experience in academic writing and research consultation to provide reliable thesis assistance. Whether you're struggling with research design, data analysis, or organizing your findings, our team is here to help. Our mission is to make your PhD journey smoother by providing expert insights, personalized guidance, and high-quality writing services.
      </Text>
    </Box>
  );
};

const PhDGuidelinesComponent: React.FC = () => {
  return (
    <Box maxW="1200px" mx="auto" py={{ base: 6, md: 10 }} px={4}>
      {/* Main Heading */}
      <Box textAlign="center" mb={8}>
        <Heading as="h2" size={{ base: "md", md: "lg" }} color="black" fontWeight="bold">
          Research Guidelines
        </Heading>
        <Text fontSize={{ base: "sm", md: "lg" }} color="black">
          Research Preparation Guidelines
        </Text>
      </Box>

      {/* Guidelines Boxes */}
      <Flex direction="column" gap={2} p={2}>
      {/* Row 1 */}
      <Flex justify="space-between" flexWrap="wrap" gap={6}>
        {/* Guideline 1 */}
        <Box
          flex="1"
          maxW={{ base: "100%", md: "45%" }}
          p={6}
          bg="white"
          borderRadius="lg"
          _hover={{
            borderColor: "#02428d",
            borderWidth: "2px",
            boxShadow: "xl",
          }}
        >
          <Flex align="center" mb={4}>
            <Flex
              align="center"
              justify="center"
              w="30px"
              h="30px"
              bg="#02428d"
              color="white"
              borderRadius="full"
              fontWeight="bold"
              mr={2}
            >
              1
            </Flex>
            <Icon as={FaArrowRight} color="#02428d" ml={2} />
            <Text fontWeight="bold" color="gray.700" fontSize="lg" ml={2}>
              ELSEVIER
            </Text>
          </Flex>
          <Text fontSize="sm" color="gray.600">
            Elsevier, founded in 1880 in Amsterdam, Netherlands, is one of the main journal publishing industries. It supports research in legal, technical, and medical fields and publishes around 2,500 journals annually, with a publishing timeline of 90-150 days.
          </Text>
        </Box>

        {/* Guideline 2 */}
        <Box
          flex="1"
          maxW={{ base: "100%", md: "45%" }}
          p={6}
          bg="white"
          borderRadius="lg"
          _hover={{
            borderColor: "#02428d",
            borderWidth: "2px",
            boxShadow: "xl",
          }}
        >
          <Flex align="center" mb={4}>
            <Flex
              align="center"
              justify="center"
              w="30px"
              h="30px"
              bg="#02428d"
              color="white"
              borderRadius="full"
              fontWeight="bold"
              mr={2}
            >
              2
            </Flex>
            <Icon as={FaArrowRight} color="#02428d" ml={2} />
            <Text fontWeight="bold" color="gray.700" fontSize="lg" ml={2}>
              IEEE
            </Text>
          </Flex>
          <Text fontSize="sm" color="gray.600">
            IEEE is a leading source for researchers worldwide, offering journals in electrical engineering, computing, biotechnology, telecommunications, power and energy, and more. Publishing with IEEE ensures high-quality research dissemination across numerous technologies.
          </Text>
        </Box>
      </Flex>

      {/* Row 2 */}
      <Flex justify="space-between" flexWrap="wrap" gap={4}>
        {/* Guideline 3 */}
        <Box
          flex="1"
          maxW={{ base: "100%", md: "45%" }}
          p={6}
          bg="white"
          borderRadius="lg"
          _hover={{
            borderColor: "#02428d",
            borderWidth: "2px",
            boxShadow: "xl",
          }}
        >
          <Flex align="center" mb={4}>
            <Flex
              align="center"
              justify="center"
              w="30px"
              h="30px"
              bg="#02428d"
              color="white"
              borderRadius="full"
              fontWeight="bold"
              mr={2}
            >
              3
            </Flex>
            <Icon as={FaArrowRight} color="#02428d" ml={2} />
            <Text fontWeight="bold" color="gray.700" fontSize="lg" ml={2}>
              Springer
            </Text>
          </Flex>
          <Text fontSize="sm" color="gray.600">
            Springer is known for its extensive journal and book offerings across various scientific disciplines. It provides access to high-quality research and has a reputation for rigorous peer review and efficient publishing processes.
          </Text>
        </Box>

        {/* Guideline 4 */}
        <Box
          flex="1"
          maxW={{ base: "100%", md: "45%" }}
          p={6}
          bg="white"
          borderRadius="lg"
          _hover={{
            borderColor: "#02428d",
            borderWidth: "2px",
            boxShadow: "xl",
          }}
        >
          <Flex align="center" mb={4}>
            <Flex
              align="center"
              justify="center"
              w="30px"
              h="30px"
              bg="#02428d"
              color="white"
              borderRadius="full"
              fontWeight="bold"
              mr={2}
            >
              4
            </Flex>
            <Icon as={FaArrowRight} color="#02428d" ml={2} />
            <Text fontWeight="bold" color="gray.700" fontSize="lg" ml={2}>
              Wiley
            </Text>
          </Flex>
          <Text fontSize="sm" color="gray.600">
            Wiley is an esteemed journal publisher with a broad spectrum of research fields. Known for its impactful journals, Wiley supports the academic community with robust peer review and timely publication.
          </Text>
        </Box>
      </Flex>
    </Flex>
    </Box>
  );
};



const FullProcessComponent = () => {
  return (
    <Box>
      <AboutUsComponent />
      <SupportComponent />
      <PhDGuidelinesComponent />
      <PhDAssistanceComponent />
    </Box>
  );
};

export default FullProcessComponent;