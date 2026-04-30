import { Box, Heading, Grid, GridItem, Flex, Icon, Text } from "@chakra-ui/react";
import { FaLock, FaFileAlt, FaRedo, FaHourglassEnd, FaBook, FaCreditCard, FaUsers, FaClock } from "react-icons/fa";

const OurGuarantees = () => {
  return (
    <Box p={{ base: 4, md: 8 }} maxW="1300px" mx="auto" textAlign="center">
      {/* Main Heading */}
      <Heading as="h2" size="xl" mb={{ base: 6, md: 4 }} className="component1">
        Our Guarantees
      </Heading>
      <Box height="3px" width="100px" bg="#02428d" mx="auto" mb={{ base: 6, md: 8 }} className="component1" />

      {/* Grid Layout */}
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }} gap={6} p={{ base: '6', md: '0' }} className="component1">
        {/* Card 1 */}
        <GridItem
          bg="gray.50"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          boxShadow={{ base: "-2px 7px 7px 0px #02428d", md: "-2px 7px 7px 0px #02428d" }}
          _hover={{ bg: 'gray.100' }}
          display="flex"
          flexDirection="column"
          className="component1"
          justifyContent="center"
        >
          <Flex direction="column" align="center">
            <Icon as={FaLock} w={10} h={10} color="#ecc94b" mb={4} aria-label="Strict Confidentiality" />
            <Text fontWeight="bold">Strict Confidentiality</Text>
            <Text mt={1} textAlign="center">
              Upholding rigorous confidentiality measures, ensuring that no unauthorized access occurs to sensitive data.
            </Text>
          </Flex>
        </GridItem>

        {/* Card 2 */}
        <GridItem
          bg="gray.50"
          className="component1"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          boxShadow={{ base: "-2px 7px 7px 0px #02428d", md: "-2px 7px 7px 0px #02428d" }}
          _hover={{ bg: 'gray.100' }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex direction="column" align="center">
            <Icon as={FaClock} w={10} h={10} color="#ecc94b" mb={4} aria-label="24/7 Customer Care" />
            <Text fontWeight="bold">24/7 Customer Care</Text>
            <Text mt={1} textAlign="center">
              We offer round-the-clock customer support our matt to address your inquiries and ensure smooth communication.
            </Text>
          </Flex>
        </GridItem>

        {/* Card 3 */}
        <GridItem
          bg="gray.50"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          className="component1"
          boxShadow={{ base: "-2px 7px 7px 0px #02428d", md: "-2px 7px 7px 0px #02428d" }}
          _hover={{ bg: 'gray.100' }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex direction="column" align="center">
            <Icon as={FaRedo} w={10} h={10} color="#ecc94b" mb={4} aria-label="No-Cost Revisions" />
            <Text fontWeight="bold">No-Cost Revisions</Text>
            <Text mt={1} textAlign="center">
              Our no-cost revisions guarantee that you can refine your work as needed without worrying about extra charges.
            </Text>
          </Flex>
        </GridItem>

        {/* Card 4 */}
        <GridItem
          bg="gray.50"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          className="component1"
          boxShadow={{ base: "-2px 7px 7px 0px #02428d", md: "-2px 7px 7px 0px #02428d" }}
          _hover={{ bg: 'gray.100' }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex direction="column" align="center">
            <Icon as={FaHourglassEnd} w={10} h={10} color="#ecc94b" mb={4} aria-label="Timely Submission" />
            <Text fontWeight="bold">Timely Submission</Text>
            <Text mt={1} textAlign="center">
              We ensure timely submission of your work, delivering projects on schedule without compromising on quality.
            </Text>
          </Flex>
        </GridItem>

        {/* Card 5 */}
        <GridItem
          bg="gray.50"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          className="component1"
          boxShadow={{ base: "-2px 7px 7px 0px #02428d", md: "-2px 7px 7px 0px #02428d" }}
          _hover={{ bg: 'gray.100' }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex direction="column" align="center">
            <Icon as={FaBook} w={10} h={10} color="#ecc94b" mb={4} aria-label="Top-Tier Professionals" />
            <Text fontWeight="bold">Top-Tier Professionals</Text>
            <Text mt={1} textAlign="center">
              Collaborate with top-tier professionals who are subject matter experts, offering specialized solutions for your needs.
            </Text>
          </Flex>
        </GridItem>

        {/* Card 6 */}
        <GridItem
          bg="gray.50"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          className="component1"
          boxShadow={{ base: "-2px 7px 7px 0px #02428d", md: "-2px 7px 7px 0px #02428d" }}
          _hover={{ bg: 'gray.100' }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex direction="column" align="center">
            <Icon as={FaCreditCard} w={10} h={10} color="#ecc94b" mb={4} aria-label="Reliable Payment Security" />
            <Text fontWeight="bold">Reliable Payment Security</Text>
            <Text mt={1} textAlign="center">
              Offering reliable payment security, we safeguard your transactions with top-tier encryption to ensure peace of mind.
            </Text>
          </Flex>
        </GridItem>

        {/* Card 7 */}
        <GridItem
          bg="gray.50"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          className="component1"
          boxShadow={{ base: "-2px 7px 7px 0px #02428d", md: "-2px 7px 7px 0px #02428d" }}
          _hover={{ bg: 'gray.100' }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex direction="column" align="center">
            <Icon as={FaUsers} w={10} h={10} color="#ecc94b" mb={4} aria-label="Inspired Research Professionals" />
            <Text fontWeight="bold">Inspired Research Professionals</Text>
            <Text mt={1} textAlign="center">
              Our inspired research professionals bring enthusiasm and creativity to every project, driving high-quality results.
            </Text>
          </Flex>
        </GridItem>

        {/* Card 8 */}
        <GridItem
          bg="gray.50"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          className="component1"
          boxShadow={{ base: "-2px 7px 7px 0px #02428d", md: "-2px 7px 7px 0px #02428d" }}
          _hover={{ bg: 'gray.100' }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          
          <Flex direction="column" align="center">
            <Icon as={FaFileAlt} w={10} h={10} color="#ecc94b" mb={4} aria-label="Unique Academic Papers" />
            <Text fontWeight="bold">Unique Academic Papers</Text>
            <Text mt={1} textAlign="center">
              Offering unique academic papers, crafted with fresh ideas and fully free from any plagiarism, tailored to your needs.
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default OurGuarantees;
