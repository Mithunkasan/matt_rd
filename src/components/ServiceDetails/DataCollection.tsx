// import {
//     Box,
//     chakra,
//     Container,
//     Stack,
//     Text,
//     Image,
//     Flex,
//     VStack,
//     Button,
//     Heading,
//     SimpleGrid,
//     StackDivider,
//     useColorModeValue,
//     VisuallyHidden,
//     List,
//     ListItem,
// } from '@chakra-ui/react';
// import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { MdLocalShipping } from 'react-icons/md';
// import EngineeringService from '../Banners/ResearchArtBnr';
// import FooterUpdated from '../Footer';
// import StaticEnquiry from '../StaticEnquiry';

// export default function PlagFreeWriting() {
//     return (
//         <>
//             <EngineeringService />
//             <Container maxW={'6xl'}>
//                 <SimpleGrid
//                     // columns={{ base: 1, lg: 2 }}
//                     spacing={{ base: 8, md: 10 }}
//                     py={{ base: 18, md: 14 }}
//                 >

//                     <Stack spacing={{ base: 4, md: 10 }}>
//                         <Box as={'header'}>
//                             <Heading
//                                 lineHeight={1.1}
//                                 fontWeight={600}
//                                 color='blue.800'
//                                 fontSize={{ base: '2xl', sm: '3xl', lg: '3xl' }}>
//                                Workshops & Training:
//                             </Heading>
//                         </Box>
//                         <Flex direction={'row'} justifyContent='space-between' flexWrap={'wrap'} gap={3}>
//                             <Stack
//                                 width={{ base: 'xs', sm: 'lg', lg: 'lg' }}
//                                 direction={'column'}
//                                 divider={
//                                     <StackDivider
//                                         borderColor={useColorModeValue('gray.200', 'gray.600')}
//                                     />
//                                 }>
//                                 <VStack align='start' spacing={{ base: 4, sm: 6 }}>
//                                     <Text
//                                         align='justify'
//                                         color={useColorModeValue('gray.600', 'gray.800')}
//                                         fontSize={'lg'}
//                                         fontWeight={'300'}>
//                                         Writing a research article is a crucial part of the academic process,
//                                         and publishing it in reputed journals can significantly contribute to one's career growth.
//                                     </Text>
//                                     <Text align='justify'>
//                                         MATT is a professional writing and editing company dedicated to providing high-quality, plagiarism-free content to clients across various industries. We understand the importance of original and authentic content and we take pride in ensuring that all of our work is completely plagiarism-free.</Text>

//                                     <Text align='justify' >
//                                         We have a team of experienced writers and editors who are skilled in various areas of expertise, ensuring that we are able to meet the unique needs of each of our clients. Our writers are trained to conduct extensive research and use reliable sources to create content that is not only unique but also informative and engaging.
//                                     </Text>

//                                     <Text align='justify' >
//                                         At MATT, we use advanced plagiarism detection tools to ensure that our work is completely original and free of any duplicate content. We understand that plagiarism can have serious consequences, both legally and ethically, and we take all necessary measures to ensure that our clients' content is entirely their own.
//                                     </Text>
//                                     <Text align='justify'>
//                                         In addition to our writing and editing services, we also offer proofreading, formatting, and citation services, ensuring that our clients' content is not only plagiarism-free but also polished and professional.
//                                     </Text>
//                                     <Text align='justify'  >
//                                         We take pride in providing personalized service to each of our clients and work closely with them to ensure that their unique needs are met. We are committed to delivering high-quality, plagiarism-free content that meets the highest standards of excellence, and we stand behind our work with a satisfaction guarantee.
//                                     </Text>
//                                 </VStack>
//                                 {/* <Box>
//                                 <Text
//                                     fontSize={{ base: '16px', lg: '18px' }}
//                                     color={useColorModeValue('yellow.500', 'yellow.300')}
//                                     fontWeight={'500'}
//                                     textTransform={'uppercase'}
//                                     mb={'4'}>
//                                     Features
//                                 </Text>

//                                 <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
//                                     <List spacing={2}>
//                                         <ListItem>Chronograph</ListItem>
//                                         <ListItem>Master Chronometer Certified</ListItem>{' '}
//                                         <ListItem>Tachymeter</ListItem>
//                                     </List>
//                                     <List spacing={2}>
//                                         <ListItem>Anti‑magnetic</ListItem>
//                                         <ListItem>Chronometer</ListItem>
//                                         <ListItem>Small seconds</ListItem>
//                                     </List>
//                                 </SimpleGrid>
//                             </Box> */}

//                             </Stack>
//                             <Stack direction={'column'}>

//                                 <StaticEnquiry />
//                             </Stack>
//                         </Flex>

//                     </Stack>
//                 </SimpleGrid>
//             </Container>

//         </>
//     );
// }

import {
  Flex,
  Box,
  VStack,
  Heading,
  Text,
  Image,
  keyframes,
  useBreakpointValue,
  Card,
  CardBody,
  CardHeader,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  Icon,
  Button,
  Stack,
  Input,
  Textarea,
  Grid,
  GridItem,
  Circle,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  FaWhatsapp,
  FaShieldAlt,
  FaUserShield,
  FaClock,
  FaThumbsUp,
  FaCheckCircle,
  FaSmile,
  FaLock,
  FaFileAlt,
  FaRedo,
  FaHourglassEnd,
  FaBook,
  FaCreditCard,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { CheckIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import ContactForm from "../ServicePageForm";
import Head from "next/head";

export const ThesisWritingServiceComponent = () => {
  const handleClick = () => {
    // Navigate to WhatsApp link immediately
    window.location.href = "https://wa.me/+918825735141";
  };
  return (
    <>
      <Head>
        <title>
          Data Collection & Analysis for PhD Research | MATT Solutions
        </title>
        <meta
          name="description"
          content="Simplify your PhD research with expert data collection and analysis services. Trust MATT Solutions for reliable research insights."
        />
        <meta
          name="keywords"
          content="data collection, data analysis, PhD research, research insights, MATT Solutions"
        />
        <meta charSet="UTF-8" />
      </Head>

      <Flex
        position="relative"
        color="white"
        py={{ base: 8, sm: 10, md: 12, lg: 20 }}
        px={{ base: 4, sm: 6, md: 10, lg: 20 }}
        direction={{ base: "column", lg: "row" }}
        alignItems="center"
        justify="center"
        gap={{ base: 8, lg: 16 }} // Adjusts spacing between left and right sections
      >
        {/* Background Image Layer */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('/thesisbanner.jpg')" // Replace with actual image URL
          bgSize="cover"
          bgPosition="center"
          zIndex={-1}
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgColor: "#02428d",
            opacity: 0.5, // Apply opacity to the overlay color
            zIndex: 2,
          }}
        />

        {/* Left Content - Heading and Features */}
        <Box
          flex="1"
          maxW={{ base: "100%", sm: "80%", md: "70%", lg: "50%" }}
          textAlign={{ base: "center", lg: "left" }}
          zIndex={1}
        >
          <Heading
            as="h1"
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            mb={4}
          >
            Professional <br />
            <Text as="span" color="yellow.400">
              Data Collection & Analysis:
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "md", sm: "lg", lg: "2xl" }}
            mb={6}
            color="white"
          >
            Complete Your Assignment With Trained Writers
          </Text>

          {/* Features */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mb={6}>
            <Flex align="center">
              <Icon as={FaShieldAlt} boxSize={6} color="yellow.400" mr={2} />
              <Text fontSize="xl" m={0} color="white">
                100% Plagiarism Free
              </Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaUserShield} boxSize={6} color="yellow.400" mr={2} />
              <Text fontSize="xl" m={0} color="white">
                Security and Confidentiality
              </Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaClock} boxSize={6} color="yellow.400" mr={2} />
              <Text fontSize="xl" m={0} color="white">
                24/7 Support Till Acceptance
              </Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaClock} boxSize={6} color="yellow.400" mr={2} />
              <Text fontSize="xl" m={0} color="white">
                100% Timely Submission
              </Text>
            </Flex>
          </SimpleGrid>

          {/* WhatsApp Button */}
          <Button
            onClick={handleClick}
            bg={"#ecc94b"}
            color={"black"}
            leftIcon={<FaWhatsapp />}
            size="lg"
            mt={4}
            fontSize={{ base: "md", md: "lg" }}
            width="auto"
          >
            Share Your Requirement On WhatsApp
          </Button>
        </Box>

        {/* Contact Form - Right Side */}
        <Box>
          <ContactForm />
        </Box>
      </Flex>
    </>
  );
};

const CustomComponent: React.FC = () => {
  return (
    <Box p={4} maxW="100%" mt={5}>
      <Flex direction={{ base: "column", md: "row" }} align="start">
        {/* Left Side Image */}
        <Image
          src="/Matt Image2.jpg"
          alt="Descriptive Alt Text"
          boxSize={{ base: "100%", md: "40%" }}
          objectFit="cover"
          mr={{ md: 6 }}
          mb={{ base: 4, md: 0 }}
        />

        {/* Right Side Content */}
        <Box flex="1">
          {/* Title */}
          <Heading as="h2" size="lg" mb={4}>
            Data Collection & Analysis:
          </Heading>

          {/* Paragraphs */}
          <VStack align="start" spacing={4}>
            <Text>
              Data collection and analysis are at the heart of every successful
              research project. Effective data collection ensures the
              information gathered is accurate, relevant, and sufficient to
              address the research question or hypothesis.
            </Text>
            <Text>
              Choosing the right data collection method is crucial for obtaining
              high-quality data that can lead to actionable insights. Different
              research studies require different data collection methods,
              depending on the research objectives, the population being
              studied, and the resources available.
            </Text>
            <Text>
              Once data is collected, data analysis plays a critical role in
              transforming raw data into valuable insights. This phase involves
              organizing, interpreting, and drawing conclusions from the data to
              answer research questions or test hypotheses.
            </Text>
          </VStack>
        </Box>
      </Flex>

      {/* Full-width Box with Additional Paragraph */}
      <Box
        mt={3}
        p={{ base: "0", md: "4" }}
        bg="white"
        borderRadius="md"
        width="100%"
      >
        <Text>
          Researchers use various data analysis methods—such as statistical
          analysis for quantitative data or thematic analysis for qualitative
          data—to uncover patterns, relationships, and trends. Advanced tools
          and techniques, such as data visualization, can further enhance the
          understanding of complex datasets, making it easier to communicate
          findings to stakeholders.
        </Text>
      </Box>
    </Box>
  );
};

const DataCollectionAndAnalysis = () => {
  return (
    <Box p={{ base: "0px 20px", md: "10" }} maxW="1200px" mx="auto">
      {/* Main Heading */}
      <Heading as="h1" size="1xl" textAlign="center" mb={8}>
        The Essentials of Data Collection & Analysis for Research Success
      </Heading>

      {/* Section 1 */}
      <Box mb={6}>
        <Heading as="h2" size="lg" mb={4}>
          Introduction to Data Collection & Analysis
        </Heading>
        <Text fontSize="md">
          Data collection and analysis are at the heart of every successful
          research project. Effective data collection ensures the information
          gathered is accurate, relevant, and sufficient to address the research
          question or hypothesis. In both quantitative and qualitative research,
          using systematic and reliable data collection methods such as surveys,
          interviews, or experiments is essential to gathering precise
          information. Accurate data collection methods are critical because
          they set the foundation for data analysis, impacting the validity and
          reliability of the study's findings.
        </Text>
      </Box>

      {/* Section 2 */}
      <Box mb={6}>
        <Heading as="h2" size="lg" mb={4}>
          Choosing Effective Data Collection Methods
        </Heading>
        <Text fontSize="md">
          Choosing the right data collection method is crucial for obtaining
          high-quality data that can lead to actionable insights. Different
          research studies require different data collection methods, depending
          on the research objectives, the population being studied, and the
          resources available. Common methods include surveys, interviews,
          observations, and experiments, each providing unique types of data.
          Implementing best practices in data collection also includes ensuring
          that data is gathered ethically, protecting the privacy and
          confidentiality of participants.
        </Text>
      </Box>

      {/* Section 3 */}
      <Box mb={6}>
        <Heading as="h2" size="lg" mb={4}>
          Ensuring Data Accuracy and Ethical Standards
        </Heading>
        <Text fontSize="md">
          Ensuring accuracy and maintaining ethical standards in data collection
          are essential to producing credible research results. Inaccurate or
          poorly collected data can lead to misleading conclusions, impacting
          the success and credibility of the research. High-quality data
          collection methods, conducted ethically, uphold the integrity of the
          research and respect participants' privacy.
        </Text>
      </Box>

      {/* Section 4 */}
      <Box mb={6}>
        <Heading as="h2" size="lg" mb={4}>
          Analyzing Data for Actionable Insights
        </Heading>
        <Text fontSize="md">
          Once data is collected, data analysis plays a critical role in
          transforming raw data into valuable insights. This phase involves
          organizing, interpreting, and drawing conclusions from the data to
          answer research questions or test hypotheses. Advanced tools and
          techniques, such as data visualization, can further enhance the
          understanding of complex datasets, making it easier to communicate
          findings to stakeholders.
        </Text>
      </Box>
    </Box>
  );
};

const OurGuarantees = () => {
  return (
    <Box p={{ base: 4, md: 8 }} maxW="1200px" mx="auto" textAlign="center">
      {/* Main Heading */}
      <Heading as="h2" size="xl" mb={{ base: 3, md: 4 }}>
        Our Guarantees
      </Heading>

      {/* Grid Layout */}
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={6}
        p={{ base: "3", md: "0" }}
      >
        {/* Card 1 */}
        <GridItem
          bg="gray.50"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          boxShadow={{
            base: "-2px 7px 7px 0px #02428d",
            md: "-2px 7px 7px 0px #02428d",
          }}
          _hover={{ bg: "gray.100" }}
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex direction="column" align="center">
            <Icon
              as={FaLock}
              w={10}
              h={10}
              color="#ecc94b"
              mb={4}
              aria-label="Strict Confidentiality"
            />
            <Text fontWeight="bold">Strict Confidentiality</Text>
            <Text mt={1} textAlign="center">
              Upholding rigorous confidentiality measures, ensuring that no
              unauthorized access occurs to sensitive data.
            </Text>
          </Flex>
        </GridItem>

        {/* Card 2 */}
        <GridItem
          bg="gray.50"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          boxShadow={{
            base: "-2px 7px 7px 0px #02428d",
            md: "-2px 7px 7px 0px #02428d",
          }}
          _hover={{ bg: "gray.100" }}
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex direction="column" align="center">
            <Icon
              as={FaFileAlt}
              w={10}
              h={10}
              color="#ecc94b"
              mb={4}
              aria-label="Unique Academic Papers"
            />
            <Text fontWeight="bold">Unique Academic Papers</Text>
            <Text mt={1} textAlign="center">
              Offering unique academic papers, crafted with fresh ideas and
              fully free from any plagiarism, tailored to your needs.
            </Text>
          </Flex>
        </GridItem>

        {/* Card 3 */}
        <GridItem
          bg="gray.50"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          boxShadow={{
            base: "-2px 7px 7px 0px #02428d",
            md: "-2px 7px 7px 0px #02428d",
          }}
          _hover={{ bg: "gray.100" }}
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex direction="column" align="center">
            <Icon
              as={FaRedo}
              w={10}
              h={10}
              color="#ecc94b"
              mb={4}
              aria-label="No-Cost Revisions"
            />
            <Text fontWeight="bold">No-Cost Revisions</Text>
            <Text mt={1} textAlign="center">
              Our no-cost revisions guarantee that you can refine your work as
              needed without worrying about extra charges.
            </Text>
          </Flex>
        </GridItem>

        {/* Card 4 */}
        <GridItem
          bg="gray.50"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          boxShadow={{
            base: "-2px 7px 7px 0px #02428d",
            md: "-2px 7px 7px 0px #02428d",
          }}
          _hover={{ bg: "gray.100" }}
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex direction="column" align="center">
            <Icon
              as={FaHourglassEnd}
              w={10}
              h={10}
              color="#ecc94b"
              mb={4}
              aria-label="Timely Submission"
            />
            <Text fontWeight="bold">Timely Submission</Text>
            <Text mt={1} textAlign="center">
              We ensure timely submission of your work, delivering projects on
              schedule without compromising on quality.
            </Text>
          </Flex>
        </GridItem>

        {/* Card 5 */}
        <GridItem
          bg="gray.50"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          boxShadow={{
            base: "-2px 7px 7px 0px #02428d",
            md: "-2px 7px 7px 0px #02428d",
          }}
          _hover={{ bg: "gray.100" }}
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex direction="column" align="center">
            <Icon
              as={FaBook}
              w={10}
              h={10}
              color="#ecc94b"
              mb={4}
              aria-label="Top-Tier Professionals"
            />
            <Text fontWeight="bold">Top-Tier Professionals</Text>
            <Text mt={1} textAlign="center">
              Collaborate with top-tier professionals who are subject matter
              experts, offering specialized solutions for your needs.
            </Text>
          </Flex>
        </GridItem>

        {/* Card 6 */}
        <GridItem
          bg="gray.50"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          boxShadow={{
            base: "-2px 7px 7px 0px #02428d",
            md: "-2px 7px 7px 0px #02428d",
          }}
          _hover={{ bg: "gray.100" }}
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex direction="column" align="center">
            <Icon
              as={FaCreditCard}
              w={10}
              h={10}
              color="#ecc94b"
              mb={4}
              aria-label="Reliable Payment Security"
            />
            <Text fontWeight="bold">Reliable Payment Security</Text>
            <Text mt={1} textAlign="center">
              Offering reliable payment security, we safeguard your transactions
              with top-tier encryption to ensure peace of mind.
            </Text>
          </Flex>
        </GridItem>

        {/* Card 7 */}
        <GridItem
          bg="gray.50"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          boxShadow={{
            base: "-2px 7px 7px 0px #02428d",
            md: "-2px 7px 7px 0px #02428d",
          }}
          _hover={{ bg: "gray.100" }}
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex direction="column" align="center">
            <Icon
              as={FaUsers}
              w={10}
              h={10}
              color="#ecc94b"
              mb={4}
              aria-label="Inspired Research Professionals"
            />
            <Text fontWeight="bold">Inspired Research Professionals</Text>
            <Text mt={1} textAlign="center">
              Our inspired research professionals bring enthusiasm and
              creativity to every project, driving high-quality results.
            </Text>
          </Flex>
        </GridItem>

        {/* Card 8 */}
        <GridItem
          bg="gray.50"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          boxShadow={{
            base: "-2px 7px 7px 0px #02428d",
            md: "-2px 7px 7px 0px #02428d",
          }}
          _hover={{ bg: "gray.100" }}
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex direction="column" align="center">
            <Icon
              as={FaClock}
              w={10}
              h={10}
              color="#ecc94b"
              mb={4}
              aria-label="24/7 Customer Care"
            />
            <Text fontWeight="bold">24/7 Customer Care</Text>
            <Text mt={1} textAlign="center">
              We offer round-the-clock customer support to address your
              inquiries and ensure smooth communication.
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

const PublicationCards = ({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position="relative"
      w="400px"
      h="350px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={imageSrc} alt={title} w="100%" h="100%" objectFit="cover" />

      {/* Text Overlay */}
      <Box
        position="absolute"
        bottom={0}
        w="100%"
        p={4}
        bg="rgba(0, 14, 120, 0.8)"
        // bg="rgba(255, 105, 180, 0.9)"
        color="white"
        textAlign="left"
        transition="height 0.3s ease, opacity 0.3s ease"
        height={isHovered ? "auto" : "3rem"}
        opacity={isHovered ? 1 : 0.9}
      >
        <Text fontWeight="bold" color={"white"} fontSize={"2xl"}>
          {title}
        </Text>
        {isHovered && (
          <Text fontSize="sm" mt={1} color={"white"}>
            {description}
          </Text>
        )}
      </Box>
    </Box>
  );
};

const PublicationServices = () => {
  return (
    <Box
      textAlign="center"
      py={{ base: "5", md: "10" }}
      p={{
        base: " 0px 8px",
        md: "0",
      }}
    >
      <Heading as="h2" size="lg" mb={8}>
        Our Data Analysis Service
      </Heading>
      <Flex justify="center" gap={4} wrap="wrap">
        <PublicationCards
          title="UGC Journal Support"
          description="Get expert support for publishing in UGC-approved journals. We guide you through the process, from manuscript preparation to submission, ensuring compliance with UGC standards. "
          imageSrc="/UGC.avif" // replace with UGC image URL
        />
        <PublicationCards
          title="Scopus Publishing Help"
          description="Maximize your chances of publishing in SCOPUS-indexed journals with our expert guidance. We offer tailored support for manuscript preparation, journal selection, and submission, ensuring your work meets SCOPUS standards."
          imageSrc="/Scopus.avif" // replace with Web of Science image URL
        />
        <PublicationCards
          title="Web of Science Assistance"
          description="Enhance your chances of publishing in Web of Science-indexed journals with our dedicated support. From manuscript development to submission, we ensure compliance with Web of Science standards."
          imageSrc="/web science.png" // replace with Scopus image URL
        />
      </Flex>
      <Flex justify="center" gap={4} wrap="wrap" mt={8}>
        <PublicationCards
          title="Q1 Journal Submissions"
          description="Increase your chances of success with Q1 journal submissions through our specialized support. We assist with manuscript refinement, journal selection, and compliance with top-tier standards."
          imageSrc="/Q1Journal.png " // replace with UGC image URL
        />
        <PublicationCards
          title="Academic Journal Formatting"
          description="Ensure your manuscript meets academic journal formatting standards with our expert services. We handle layout, citation style, and structure, aligning with your target journal’s guidelines. Streamline your submission process with precise, professional formatting support."
          imageSrc="/journal.png" // replace with Web of Science image URL
        />
        <PublicationCards
          title="Research Paper Submission"
          description="Streamline your research paper submission with our comprehensive support. From final edits to compliance with journal guidelines, we ensure a smooth submission process. Maximize your paper's acceptance potential with our expert assistance."
          imageSrc="/rchsub.png" // replace with Scopus image URL
        />
      </Flex>
    </Box>
  );
};

const FullProcessComponent = () => {
  return (
    <Box>
      <ThesisWritingServiceComponent />
      <CustomComponent />
      <DataCollectionAndAnalysis />
      <OurGuarantees />
      <PublicationServices />
    </Box>
  );
};

export default FullProcessComponent;
