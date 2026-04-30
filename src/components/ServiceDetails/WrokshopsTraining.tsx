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
} from "react-icons/fa";
import { motion } from "framer-motion";
import { CheckIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import ContactForm from "../ServicePageForm";
import Head from "next/head";

// export default function ProposalWriting() {
//     return (
//         <>
//             <EngineeringService />
//             <Container maxW={'6xl'}>
//                 {/* <Box   color={'blue.900'} pt={10} fontSize='2xl'>
//                 <marquee> Are you struggling to write a Ph.D. proposal that meets the rigorous standards of academia? Do you need help? Look no further than MATT, your trusted partner for high-quality Ph.D. proposal writing and editing services.</marquee>
//                 </Box> */}
//                 <SimpleGrid
//                     // columns={{ base: 1, lg: 2 }}
//                     spacing={{ base: 8, md: 10 }}
//                     py={{ base: 18, md: 14 }}>

//                     <Stack spacing={{ base: 4, md: 10}}>

//                         <Box as={'header'}>
//                             <Heading
//                              color='blue.800'
//                                 lineHeight={1.1}
//                                 fontWeight={600}
//                                 fontSize={{ base: '2xl', sm: '3xl', lg: '3xl' }}>
//                                 Data Collection & Analysis:
//                             </Heading>
//                         </Box>
//                         <Flex direction={'row'} justifyContent='space-between' flexWrap={'wrap'} gap={3}>
//                         <Stack
//                             width={{base:'xs', sm:'lg', lg:'lg'}}
//                             direction={'column'}
//                             divider={
//                                 <StackDivider
//                                     borderColor={useColorModeValue('gray.200', 'gray.600')}
//                                 />
//                             }>
//                             <VStack align={'start'} spacing={{ base: 4, sm: 6 }}>
//                                 <Text
//                                 align={'justify'}
//                                     color={useColorModeValue('gray.600', 'gray.800')}
//                                     fontSize={'lg'}
//                                     fontWeight={'300'}>
//                                     Writing a research article is a crucial part of the academic process,
//                                     and publishing it in reputed journals can significantly contribute to one's career growth.
//                                 </Text>
//                                 <Text align={'justify'}>
//                                 Are you struggling to write a Ph.D. proposal that meets the rigorous standards of academia? Do you need help editing and polishing your proposal to ensure that it is clear, concise, and compelling? Look no further than MATT, your trusted partner for high-quality Ph.D. proposal writing and editing services.</Text>
//                                     <Text align={'justify'} >
//                                     Our team of experienced Ph.D. writers and editors has a deep understanding of the standards and expectations of academic institutions, and we are committed to helping you craft a proposal that stands out from the competition. Whether you need assistance with research, writing, editing, or formatting, we have the expertise and knowledge to help you succeed.
//                                     </Text>
//                                 <Text  align={'justify'} >
//                                 At MATT, we take a personalized approach to every project, working closely with you to understand your research objectives, target audience, and timeline. Our services are tailored to your specific needs, and we are committed to delivering top-quality work that meets or exceeds your expectations.
//                                 </Text>

//                                 <Text align={'justify'} fontSize={'lg'}>

//                                     Our Ph.D. proposal writing and editing services include, but are not limited to:

//                                 </Text>
//                                 <List spacing={3}>
//                                     <ListItem  fontSize={'lg'} >
//                                         <ListIcon as={MdCheckCircle} color='blue.600' /> Conducting a thorough review of existing literature and research in your field of study</ListItem>

//                                 <ListItem fontSize={'lg'} >
//                                         <ListIcon as={MdCheckCircle} color='blue.600' /> Developing a research question and hypothesis that aligns with your research interests</ListItem>
//                                         <ListItem fontSize={'lg'} >
//                                         <ListIcon as={MdCheckCircle} color='blue.600' /> Outlining a clear and comprehensive research methodology</ListItem>
//                                         <ListItem  fontSize={'lg'}>
//                                         <ListIcon as={MdCheckCircle} color='blue.600' /> Drafting an engaging and persuasive proposal that adheres to academic writing standards</ListItem>
//                                         <ListItem fontSize={'lg'} >
//                                         <ListIcon as={MdCheckCircle} color='blue.600' /> Providing feedback and edits to improve clarity, coherence, and overall quality</ListItem>
//                                         <ListItem fontSize={'lg'}>
//                                         <ListIcon as={MdCheckCircle} color='blue.600' /> Ensuring that your proposal meets all formatting and citation requirements</ListItem>
//                                 </List>
//                                 <Text align={'justify'} >
//                                 With MATT, you can rest assured that your Ph.D. proposal is in good hands. Contact us today to learn more about our services and how we can help you achieve your academic and professional goals.
//                                 </Text>
//                             </VStack>
//                             {/* <Box>
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

//                         </Stack>
//                         <Stack  direction={'column'}>

//                         <StaticEnquiry/>
//                         </Stack>
//                        </Flex>

//                     </Stack>

//                 </SimpleGrid>
//             </Container>
//         </>
//     );
// }

export const ThesisWritingServiceComponent = () => {
  const handleClick = () => {
    // Navigate to WhatsApp link immediately
    window.location.href = "https://wa.me/+918825735141";
  };
  return (
    <>
      <Head>
        <title>Research Workshops & Training Programs | MATT Solutions</title>
        <meta
          name="description"
          content="Enroll in workshops and training programs designed for PhD scholars. Learn research techniques, data analysis, and more with MATT Solutions."
        />
        <meta
          name="keywords"
          content="workshops, training programs, PhD scholars, research techniques, data analysis, MATT Solutions"
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
              Wrokshops & Training:
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
            fontSize={{ base: "md", md: "lg" }}
            mt={4}
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

const CenteredHeadingWithTextAndImage = () => {
  return (
    <Box p={5} maxW="1200px" mx="auto" mt={4} mb={4}>
      {/* Centered Heading */}
      <Heading
        as="h2"
        textAlign="center"
        mb={6}
        fontSize={{ base: "2xl", md: "4xl" }}
      >
        Working and Training with Matt Research Academic
      </Heading>

      {/* Content Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
      >
        {/* Left Section: Paragraph */}
        <Box flex="1" pr={{ base: 0, md: 8 }} mb={{ base: 6, md: 0 }}>
          <Text lineHeight="1.8" fontSize="md" textAlign="justify">
            At Matt Research Academic, we offer comprehensive working and
            training programs designed to help academic researchers build
            critical publishing skills. Our training services are tailored to
            meet the unique needs of each researcher, guiding them through the
            complexities of academic publishing.
            <br />
            <br />
            Researchers often face challenges such as understanding publication
            standards, manuscript formatting, and navigating the peer review
            process. With Matt Research Academic's expert guidance, these
            obstacles can be overcome, improving your chances of success in
            high-impact journals.
            <br />
            <br />
            Common questions from researchers include: "How can Matt Research
            Academic help me improve my publishing skills?" and "What are the
            key benefits of professional training in academic publishing?" We
            answer these questions by providing personalized sessions that
            address each stage of the publication process, from manuscript
            submission to post-publication.
            <br />
            <br />
            With a team of experienced professionals, we ensure that our
            researchers not only gain a deeper understanding of academic
            publishing but also acquire practical skills that can be applied to
            future research projects. Matt Research Academic is committed to
            providing quality training that sets you up for success in your
            academic journey.
          </Text>
        </Box>

        {/* Right Section: Image */}
        <Box flex="1">
          <Image
            src="/6206973.jpg"
            alt="Our approach to excellence"
            borderRadius="md"
            // boxShadow="md"
          />
        </Box>
      </Flex>
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
        color="white"
        textAlign="left"
        transition="height 0.3s ease, opacity 0.3s ease"
        height={isHovered ? "auto" : "3rem"}
        opacity={isHovered ? 1 : 0.9}
      >
        <Text fontWeight="bold" color={"white"} fontSize={"2xl"} mb={3}>
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

const WorkshopTrainingServices = () => {
  return (
    <Box
      textAlign="center"
      py={10}
      p={{
        base: " 0px 8px",
        md: "0",
      }}
    >
      <Heading
        as="h2"
        size="lg"
        mb={8}
        alignItems={"center"}
        justifyContent={"center"}
      >
        Workshops and Training with Matt Research Academic Elevate Your Research
        Skills
      </Heading>
      <Flex justify="center" gap={4} wrap="wrap">
        <PublicationCards
          title="Research Writing Workshops"
          description="Matt Research Academic offers expert-led research writing workshops designed to enhance your academic writing skills. These workshops cover essential aspects like structuring your research paper, understanding journal requirements, and improving your chances of publication in high-impact journals. Our focus is on **research paper writing workshops** that will elevate your writing to meet the highest standards."
          imageSrc="/premium.avif" // replace with relevant image URL
        />
        <PublicationCards
          title="Data Analysis Training"
          description="Gain hands-on experience with **data analysis techniques** in our training sessions. Matt Research Academic guides you through statistical methods, data interpretation, and visualization tools, ensuring you can analyze research data effectively. Our training focuses on the tools and techniques needed for effective **data analysis for research** to meet journal submission standards."
          imageSrc="/plag service10.jpg" // replace with relevant image URL
        />
        <PublicationCards
          title="Journal Submission Process Training"
          description="Understand the complexities of the **journal submission process** with Matt Research Academic's specialized training. Our workshops cover manuscript formatting, journal selection, and submission strategies to improve your chances of acceptance. Learn how to navigate the process with confidence, ensuring your submission aligns with academic **journal publishing standards**."
          imageSrc="/Journal-Submission.avif" // replace with relevant image URL
        />
      </Flex>
      <Flex justify="center" gap={4} wrap="wrap" mt={8}>
        <PublicationCards
          title="Research Ethics and Integrity Workshops"
          description="Matt Research Academic offers workshops on **research ethics and academic integrity**, teaching best practices for conducting ethical research, avoiding plagiarism, and ensuring compliance with publishing standards. These workshops are essential for any researcher committed to maintaining the highest ethical standards in their work."
          imageSrc="/Research-Ethics.avif" // replace with relevant image URL
        />
        <PublicationCards
          title="PhD Research Guidance"
          description="Our PhD research guidance workshops at Matt Research Academic provide expert mentorship on **research methodology**, topic selection, and academic writing. These workshops help you navigate your PhD journey with a focus on producing high-quality, publishable research. Learn the essentials of **PhD research training** to guide your academic success."
          imageSrc="/PhD-Research.avif" // replace with relevant image URL
        />
        <PublicationCards
          title="Grant Writing and Proposal Workshops"
          description="Master the art of **grant writing** with Matt Research Academic. Our workshops teach you how to write compelling grant proposals, align them with funding agency requirements, and increase your chances of securing research funding. These workshops are essential for researchers seeking financial support for their projects, with a focus on **successful grant writing strategies**."
          imageSrc="/Grant-Writing.avif" // replace with relevant image URL
        />
      </Flex>
    </Box>
  );
};

const WorkshopsAndTrainingSEO = () => {
  return (
    <Box p={5} maxW="1200px" mx="auto">
      {/* Main Heading */}
      <Heading
        as="h2"
        textAlign="center"
        mb={6}
        fontSize={{ base: "2xl", md: "3xl" }}
      >
        Enhancing Research Skills Through Tailored Workshops
      </Heading>

      {/* Grid Layout for Workshops */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
        {/* First Row - Subheading 1 and Subheading 2 */}
        <Box>
          {/* Subheading 1 */}
          <Heading
            as="h3"
            textAlign="center"
            mt={8}
            mb={4}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Mastering Research Techniques for Impactful Results
          </Heading>
          {/* Paragraph 1 */}
          <Text lineHeight="1.8" fontSize="md" textAlign="justify">
            Our{" "}
            <Text as="span" fontWeight="bold">
              research methodology training
            </Text>{" "}
            guides you through the process of gathering and analyzing data
            effectively. We focus on developing strong methodologies, ensuring
            that you can produce reliable and impactful research. By mastering
            these techniques, you increase the potential for higher-quality
            results that contribute to your academic field.
          </Text>
        </Box>

        <Box>
          {/* Subheading 2 */}
          <Heading
            as="h3"
            textAlign="center"
            mt={8}
            mb={4}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Writing for Publication: Achieving Academic Excellence
          </Heading>
          {/* Paragraph 2 */}
          <Text lineHeight="1.8" fontSize="md" textAlign="justify">
            Our{" "}
            <Text as="span" fontWeight="bold">
              academic writing workshops
            </Text>{" "}
            focus on the nuances of crafting research papers that stand out.
            Learn how to structure your work, integrate complex ideas, and use
            persuasive writing techniques to ensure your paper resonates with
            journal editors and peer reviewers. With a focus on clarity,
            coherence, and academic rigor, our workshops help you excel in
            academic publishing.
          </Text>
        </Box>
      </Grid>

      {/* Second Row - Subheading 3 and Subheading 4 */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} mt={8}>
        <Box>
          {/* Subheading 3 */}
          <Heading
            as="h3"
            textAlign="center"
            mt={8}
            mb={4}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Navigating the Complexities of Research Publication
          </Heading>
          {/* Paragraph 3 */}
          <Text lineHeight="1.8" fontSize="md" textAlign="justify">
            The{" "}
            <Text as="span" fontWeight="bold">
              research publication process
            </Text>{" "}
            can be overwhelming. Our workshops break down the steps of
            manuscript submission, peer review, and publication ethics. Learn
            how to select the right journal, respond to reviewer feedback, and
            ensure that your paper adheres to publication standards. We guide
            you every step of the way to help you achieve your publication
            goals.
          </Text>
        </Box>

        <Box>
          {/* Subheading 4 */}
          <Heading
            as="h3"
            textAlign="center"
            mt={8}
            mb={4}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Unlocking Funding Opportunities Through Grant Writing
          </Heading>
          {/* Paragraph 4 */}
          <Text lineHeight="1.8" fontSize="md" textAlign="justify">
            <Text as="span" fontWeight="bold">
              Grant writing workshops
            </Text>{" "}
            are essential for researchers seeking funding for their projects.
            Our workshops teach you how to write compelling grant proposals that
            stand out to funding bodies. Learn how to define research
            objectives, present budgets, and align your project with the
            priorities of grant providers, increasing your chances of receiving
            research funding.
          </Text>
        </Box>
      </Grid>

      {/* Third Row - Subheading 5 and Subheading 6 */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} mt={8}>
        <Box>
          {/* Subheading 5 */}
          <Heading
            as="h3"
            textAlign="center"
            mt={8}
            mb={4}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Research Ethics and Integrity: Upholding Standards
          </Heading>
          {/* Paragraph 5 */}
          <Text lineHeight="1.8" fontSize="md" textAlign="justify">
            In our{" "}
            <Text as="span" fontWeight="bold">
              research ethics workshops
            </Text>
            , we focus on maintaining the highest standards of integrity in your
            research process. Learn about plagiarism prevention, responsible
            data handling, and ethical considerations during data collection.
            Understanding and implementing these ethical principles is vital for
            building trust in your research and ensuring its credibility.
          </Text>
        </Box>

        <Box>
          {/* Subheading 6 */}
          <Heading
            as="h3"
            textAlign="center"
            mt={8}
            mb={4}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Enhance Your Career with Specialized Training in Academic Publishing
          </Heading>
          {/* Paragraph 6 */}
          <Text lineHeight="1.8" fontSize="md" textAlign="justify">
            Our{" "}
            <Text as="span" fontWeight="bold">
              academic publishing training
            </Text>{" "}
            goes beyond the basics, providing researchers with specialized
            knowledge that accelerates their academic career. Learn the nuances
            of academic publishing, from submission strategies to editorial
            processes, and gain the skills necessary to publish in high-impact
            journals. With our expert guidance, you’ll be ready to make your
            mark in the academic world.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

const FullProcessComponent = () => {
  return (
    <Box>
      <ThesisWritingServiceComponent />
      <CenteredHeadingWithTextAndImage />
      <WorkshopsAndTrainingSEO />
      <WorkshopTrainingServices />
    </Box>
  );
};

export default FullProcessComponent;
