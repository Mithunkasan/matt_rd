


import { Box, Heading, Text, VStack, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import useScrollTransition from '../templates/usescrolltransition';

const ReviewPointsComponent = () => {
  useScrollTransition();
  // Responsive font size for main heading
  const headingFontSize = useBreakpointValue({ base: "2xl", md: "4xl" });
  const sectionHeadingFontSize = useBreakpointValue({ base: "md", md: "lg" });
  const textFontSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Box py={{ base: 6, md: 10 }} px={{ base: 4, md: 8 }} textAlign="center" className='component1'>
      <VStack spacing={6} maxW="900px" mx="auto">
        {/* Main Heading */}
        <Heading as="h2" fontSize={headingFontSize} fontWeight="bold" mb={3} className='component1'>
          Top Points to Review Before Choosing Matt Engineering Solutions
        </Heading>

        {/* Section 1 */}
        <Box textAlign="left" width="100%">
          <Heading as="h3" fontSize={sectionHeadingFontSize} fontWeight="semibold" mb={2} display="flex" alignItems="center" className='component1'>
            <Icon as={FaArrowRight} boxSize={3} color="blue.500" mr={2} className='component1'/>
            Comprehensive Service Range
          </Heading>
          <Text fontSize={textFontSize} color="gray.700" className='component1'>
            Matt Engineering Solutions offers a wide range of services to cover all engineering needs, from initial consultation and design to implementation and maintenance.
          </Text>
        </Box>

        {/* Section 2 */}
        <Box textAlign="left" width="100%"className='component1'>
          <Heading as="h3" fontSize={sectionHeadingFontSize} fontWeight="semibold" mb={2} display="flex" alignItems="center">
            <Icon as={FaArrowRight} boxSize={4} color="blue.500" mr={2} />
            Skilled Team of Experts
          </Heading>
          <Text fontSize={textFontSize} color="gray.700">
            Their team is composed of highly skilled professionals with extensive experience in various engineering fields, ensuring top-quality execution and reliable support.
          </Text>
        </Box>

        {/* Section 3 */}
        <Box textAlign="left" width="100%" className='component1'>
          <Heading as="h3" fontSize={sectionHeadingFontSize} fontWeight="semibold" mb={2} display="flex" alignItems="center">
            <Icon as={FaArrowRight} boxSize={4} color="blue.500" mr={2} />
            Proven Track Record
          </Heading>
          <Text fontSize={textFontSize} color="gray.700">
            With numerous successful projects and satisfied clients, Matt Engineering Solutions demonstrates a strong track record in delivering on their commitments.
          </Text>
        </Box>

        {/* Section 4 */}
        <Box textAlign="left" width="100%" className='component1'>
          <Heading as="h3" fontSize={sectionHeadingFontSize} fontWeight="semibold" mb={2} display="flex" alignItems="center">
            <Icon as={FaArrowRight} boxSize={4} color="blue.500" mr={2} />
            Focus on Innovation
          </Heading>
          <Text fontSize={textFontSize} color="gray.700">
            The company emphasizes the use of advanced technologies and innovative approaches to deliver efficient and effective engineering solutions.
          </Text>
        </Box>

        {/* Section 5 */}
        <Box textAlign="left" width="100%" className='component1'>
          <Heading as="h3" fontSize={sectionHeadingFontSize} fontWeight="semibold" mb={2} display="flex" alignItems="center">
            <Icon as={FaArrowRight} boxSize={4} color="blue.500" mr={2} />
            Client-Centric Support
          </Heading>
          <Text fontSize={textFontSize} color="gray.700">
            From project inception to completion, Matt Engineering Solutions provides continuous client support, ensuring satisfaction and clear communication throughout the process.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default ReviewPointsComponent;
