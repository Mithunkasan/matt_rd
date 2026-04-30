

import { Box, Flex, Heading, Icon, Stack, Text, Divider, useBreakpointValue } from "@chakra-ui/react";
import { FaEye, FaPen, FaThumbsUp } from "react-icons/fa";
import useScrollTransition from "../templates/usescrolltransition";

const WhoWeAre = () => {
  useScrollTransition();
  // Define responsive padding and margin only for mobile and tablet
  const responsivePadding = useBreakpointValue({ base: "20px", md: "10px" });
  const responsiveMargin = useBreakpointValue({ base: "10px", md: "0px 100px" });
  
  return (
    <Box py={responsivePadding} px={responsivePadding} bg="gray.50" className='component1'>
      {/* Section Heading */}
      <Flex justify="center" align="center" mb={2}>
        <Heading as="h2" size="xl" textAlign="center" className='component1'>
          Who We Are
        </Heading>   
      </Flex>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={4}
      >
        <Divider width="100px" borderWidth="2px" borderColor="#02428d" className='component1' />
      </Box>

      {/* Cards */}
      <Stack spacing={6} m={responsiveMargin}>
        <Flex
          direction={{ base: "column", sm: "row" }}
          p={4}
          bg="white"
          boxShadow="lg"
          borderRadius="md"
          border="1px"
          className='component1'
          align="center"
          gap={4}
        >
          <Icon as={FaEye} boxSize={8} color="black" mb={{ base: 2, sm: 0 }} />
          <Box textAlign={{ base: "center", sm: "left" }}>
            <Heading as="h3" size="md" color="blue.800" mb={2} className='component1'>
              OUR VALUES
            </Heading>
            <Text color="gray.700" fontSize="md" className='component1'>
              Matt solutions Services will continue to be the premier provider of
              writing and data analysis services, helping our clients achieve
              their academic, professional and personal goals.
            </Text>
          </Box>
        </Flex>

        <Flex
          direction={{ base: "column", sm: "row" }}
          p={4}
          bg="white"
          boxShadow="lg"
          borderRadius="md"
          border="1px"
          align="center"
          gap={4}
          className='component1'
        >
          <Icon as={FaPen} boxSize={8} color="black" mb={{ base: 2, sm: 0 }} className='component1'/>
          <Box textAlign={{ base: "center", sm: "left" }}>
            <Heading as="h3" size="md" color="blue.800" mb={2} className='component1'>
              Our MISSION
            </Heading>
            <Text color="gray.700" fontSize="md" className='component1'>
              At Matt Engineering Solutions, we are dedicated to delivering the highest quality writing and data analysis services available in the industry. Our mission is to empower our clients by providing them with expert support that drives their success.
            </Text>
          </Box>
        </Flex>

        <Flex
          direction={{ base: "column", sm: "row" }}
          p={4}
          bg="white"
          boxShadow="lg"
          borderRadius="md"
          border="1px"
          className='component1'
          align="center"
          gap={4}
        >
          <Icon as={FaThumbsUp} boxSize={8} color="black" mb={{ base: 2, sm: 0 }} className='component1'/>
          <Box textAlign={{ base: "center", sm: "left" }}>
            <Heading as="h3" size="md" color="blue.800" mb={2} className='component1'>
              OUR VISION
            </Heading>
            <Text color="gray.700" fontSize="md" className='component1'>
              Our vision is to be recognized as a leader in providing innovative research solutions that empower clients worldwide. We are committed to excellence and integrity in all our services, driving impactful research that transforms ideas into success.
            </Text>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

export default WhoWeAre;
