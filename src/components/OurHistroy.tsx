
import { Box, Flex, Text, Heading, Divider, Image, Button } from '@chakra-ui/react';
import { useState } from 'react';
// Timeline Item Component
import useScrollTransition from '../templates/usescrolltransition';

  

const TimelineItem = ({ year, description, align = 'left' }) => (
  <Flex
    direction="column"
    align={align}
    mx={8}
    my={4}
    alignItems="center"
    cursor="pointer"
    maxW={{ base: '100%', md: '300px' }} // Set maximum width for better responsiveness
  >
    <Box
      bg="#02428d"
      color="white"
      px={4}
      py={1}
      borderRadius="md"
      mb={4}
      position="relative"
      fontWeight="bold"
      fontSize="xl"
      justifyContent="center"
    >
      {year}
      <Box
        w={5}
        h={0}
        borderLeft="10px solid transparent"
        borderRight="10px solid transparent"
        borderTop="10px solid #02428d"
        position="absolute"
        bottom="-10px"
        left="50%"
        transform="translateX(-50%)"
      />
    </Box>
    <Text color="black" textAlign={align === 'left' ? 'right' : 'left'} fontSize="md">
      {description}
    </Text>
  </Flex>
);

const Timeline = () => {
  useScrollTransition();

  const [buttonText, setButtonText] = useState("Yes! I Want to get Top Degree");
  
  return (
    <Box bg="white" color="black" py={6}>
      {/* Title Section */}
      <Box textAlign="center" mb={8}>
        <Heading fontSize={{ base: "2xl", md: "4xl" }} textAlign="center" mb="16px" className='component'>
          Our History
        </Heading>
        <Text as="h2" size="xl" mb={4} mt={3} fontSize={{ base: "md", md: "xl" }} className='component'>
          Our Successful Journey Started
          <br />
          With These Steps
        </Text>
        {/* <Divider borderColor="gold" w="100px" mx="auto" mb={10} /> */}
      </Box>

      {/* Timeline Section */}
      <Flex
        direction={{ base: "column", md: "row" }} // Stacking for mobile, side-by-side for larger screens
        justify="center"
        align="stretch"
        className='component1'
      >
        {/* Left Section Timeline */}
        <Flex
          direction="column"
          align={{ base: "center", md: "flex-end" }} // Center alignment on mobile, right alignment on larger screens
          flex="1"
          textAlign={{ base: "center", md: "right" }}
        >
          <TimelineItem
            year="2014"
            description="PhD Assistance journey started with 5 Engineering experts in 5 different fields to write papers for PhD scholars. This was my thinking and executing."
            align="right"
          />
          <TimelineItem
            year="2016"
            description="Expanded to different research domains, providing assistance in Science, Management, and Social Science fields."
            align="right"
          />
          <TimelineItem
            year="2019"
            description="Journal publication experts were hired who had experience in the field of publication. We got 30 paper acceptances in the first month."
            align="right"
          />
        </Flex>

        {/* Center Section with Fixed Image */}
        <Box textAlign="center" mx={8} my={{ base: 4, md: 0 }} className='component'>
          <Image
            src="/ourstroy1.png" // Static image
            alt="Timeline Image"
            boxSize={{ base: "300px", md: "400px" }} // Responsive image size
            objectFit="cover"
            borderRadius="md"
            mb={4}
            mt={{ base: 4, md: 20 }} // Adjust margin top for mobile
          />
        </Box>

        {/* Right Section Timeline */}
        <Flex
          direction="column"
          align={{ base: "center", md: "flex-start" }} // Center alignment on mobile, left alignment on larger screens
          flex="1"
          textAlign={{ base: "center", md: "left" }}
          className='component1'
        >
          <TimelineItem
            year="2022"
            description="Now PhD Assistance has 80+ employees in various PhD domains. Headquartered in Chennai, we provide services for scholars struggling to manage their studies and work."
            align="right"
          />
          <TimelineItem
            year="2023"
            description="We expanded our services globally, helping more scholars from different countries in completing their PhD research work."
            align="right"
          />
          <Button
      mt="20px"
      bgColor="#ecc94b"
      p={6}
      onMouseEnter={() => setButtonText("Yes! Shall We Go...!!!")}
      onMouseLeave={() => setButtonText("Yes! I Want to get Top Degree")}
      _hover={{
        bgColor: "#02428d",
        color: "black"
      }}
    >
      <Text color="white" mb={0}>{buttonText}</Text>
    </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Timeline;

