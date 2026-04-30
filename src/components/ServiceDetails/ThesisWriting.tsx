


import { Flex, Box, VStack, Heading, Text, Image,keyframes,useBreakpointValue ,Card,CardBody,CardHeader, List, ListItem, ListIcon,SimpleGrid, Icon,Button,Stack,Input,Textarea, Grid, GridItem, Circle,Divider,Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { FaWhatsapp, FaShieldAlt, FaUserShield, FaClock,FaThumbsUp, FaCheckCircle,FaSmile,   } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {CheckIcon} from '@chakra-ui/icons'
import React from 'react';
import ContactForm from "../ServicePageForm";
import Head from "next/head";


export const ThesisWritingServiceComponent = () => {
  const handleClick = () => {
    // Navigate to WhatsApp link immediately
    window.location.href = 'https://wa.me/+918825735141';
  };
  return (
    <>
    <Head>
              <title>Thesis Writing Services for PhDs | MATT Research Solutions</title>
              <meta
                name="description"
                content="End-to-end thesis writing services for PhD students. Get professional assistance in creating impactful dissertations with MATT Solutions."
              />
              <meta
                name="keywords"
                content="thesis writing, dissertation writing, PhD assistance, MATT Solutions, academic support"
              />
              <meta charSet="UTF-8" />
            </Head>
    
    


    <Flex
      position="relative"
      color="white"
      py={{ base: 8, sm: 10, md: 12, lg: 20 }}
      px={{ base: 4, sm: 6, md: 10, lg: 20 }}
      direction={{ base: 'column', lg: 'row' }}
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
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgColor: '#02428d',
          opacity: 0.5, // Apply opacity to the overlay color
          zIndex: 2,
        }}
      />

      {/* Left Content - Heading and Features */}
      <Box
        flex="1"
        maxW={{ base: '100%', sm: '80%', md: '70%', lg: '50%' }}
        textAlign={{ base: 'center', lg: 'left' }}
        zIndex={1}
      >
        <Heading as="h1" fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} mb={4}>
          Professional <br />
          <Text as="span" color="yellow.400">
            Thesis Dissertation/Writing
          </Text>
        </Heading>
        <Text fontSize={{ base: 'md', sm: 'lg', lg: '2xl' }} mb={6} color="white">
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
          bg={'#ecc94b'}
          color={'black'}
          leftIcon={<FaWhatsapp />}
          size={{ base: 'md', sm: 'md', md: 'lg', lg: 'lg' }}
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

// const MyComponent: React.FC = () => {
//     return (
//       <Stack spacing={{ base: 4, md: 5 }} mt={{ base: 8, md: 10 }}>
//         <Box as={'header'} display={'flex'} justifyContent={'center'}>
//           <Heading
//             color="black"
//             lineHeight={1.1}
//             fontWeight={600}
//             fontSize={{ base: '2xl', sm: '3xl', lg: '3xl' }}
//             textAlign="center"
//           >
//             Thesis/Dissertation Writing
//           </Heading>
//         </Box>
        
//         <Text
//           justifyContent={'center'}
//           align={'center'}
//           m={{ base: '0 20px', md: '0 100px' }}
//           fontSize={{ base: 'md', lg: 'lg' }}
//         >
//           We Matt research's professional thesis and dissertation writing services designed to help Master’s and Ph.D. students achieve their academic goals. Our team of expert writers offers comprehensive support throughout the entire thesis writing process, from research proposal development to custom thesis writing and dissertation editing.
//         </Text>
  
//         <Flex
//           direction={{ base: 'column', md: 'row' }}
//           align="center"
//           justify="space-between"
//           p={{ base: 4, md: 5 }}
//           borderRadius="lg"
//           wrap="wrap"
//         >
//           {/* Left Side - Card */}
//           <Box
//             w={{ base: '100%', md: '40%' }}
//             h={{ base: 'auto', md: '63vh' }}
//             bg="yellow.200"
//             color="gray.800"
//             p={6}
//             ml={{ base: 0, md: 20 }}
//             mb={{ base: 5, md: 0 }}
//             borderRadius="md"
//             boxShadow="md"
//             textAlign="center"
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//           >
//             {/* Small Image */}
//             <Image
//               src="/phd.png"
//               boxSize="100px"
//               mb={4}
//               alt="Small image"
//               mx="auto"
//             />
  
//             {/* Title */}
//             <Heading as="h3" size="md" mb={3}>
//               Thesis Dissertation Writing
//             </Heading>
  
//             {/* Paragraph */}
//             <Text mb={4} fontSize={'lg'}>
//               Our Matt Research Team specialize in offering thesis writing services and expert academic assistance for Master’s and Ph.D. students. We offer personalized support tailored to help you achieve your academic goals and succeed in your research journey.
//             </Text>
  
//             {/* Button */}
//             <Button colorScheme="blue" variant="solid" mx="auto">
//               Learn More
//             </Button>
//           </Box>
  
//           {/* Right Side - Image */}
//           <Box
//             w={{ base: '100%', md: '50%' }}
//             p={4}
//             display="flex"
//             justifyContent="center"
//           >
//             <Image
//               src="/Matt Image5.jpg"
//               alt="Right side image"
//               borderRadius="md"
//               boxShadow="lg"
//               objectFit="cover"
//               width={{ base: '100%', md: '85%' }}
//               height="auto"
//             />
//           </Box>
//         </Flex>
//       </Stack>
//     );
//   };

const MyComponent: React.FC = () => {
  return (
    <Stack spacing={{ base: 4, md: 5 }} mt={{ base: 8, md: 10 }}>
      {/* Header Section */}
      <Box as="header" display="flex" justifyContent="center">
        <Heading
          color="black"
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', lg: '4xl', xl: '5xl' }}
          textAlign="center"
        >
          Thesis/Dissertation Writing
        </Heading>
      </Box>

      {/* Description Text */}
      <Text
        textAlign="center"
        m={{ base: '0 20px', md: '0 60px', lg: '0 80px', xl: '0 120px' }}
        fontSize={{ base: 'md', sm: 'lg', md: 'lg', lg: 'xl' }}
      >
        We Matt Research’s professional thesis and dissertation writing services are designed to help Master’s and Ph.D. students achieve their academic goals. Our expert writers provide support from research proposal development to custom thesis writing and dissertation editing.
      </Text>

      {/* Flex Container for Card and Image */}
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        align="center"
        justify="space-between"
        p={{ base: 4, md: 5, lg: 6 }}
        borderRadius="lg"
        wrap="wrap"
      >
        {/* Left Side - Card */}
        <Box
          w={{ base: '100%', md: '80%', lg: '40%' }}
          h={{ base: 'auto', lg: '65vh' }}
          bg="yellow.200"
          color="gray.800"
          p={{ base: 4, md: 6 }}
          ml={{ base: 0, lg: 8 }}
          mb={{ base: 5, lg: 0 }}
          borderRadius="md"
          boxShadow="md"
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {/* Small Image */}
          <Image
            src="/phd.png"
            boxSize={{ base: '80px', sm: '100px', md: '120px' }}
            mb={4}
            alt="Small image"
            mx="auto"
          />

          {/* Card Title */}
          <Heading as="h3" size="md" mb={3} fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}>
            Thesis Dissertation Writing
          </Heading>

          {/* Card Paragraph */}
          <Text mb={4} fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
            Our Matt Research Team specializes in offering thesis writing services and academic assistance for Master’s and Ph.D. students, tailored to help you succeed in your research journey.
          </Text>

          {/* Card Button */}
          <Button colorScheme="blue" variant="solid" mx="auto">
            Learn More
          </Button>
        </Box>

        {/* Right Side - Image */}
        <Box
          w={{ base: '100%', md: '80%', lg: '50%' }}
          p={4}
          display="flex"
          justifyContent="center"
        >
          <Image
            src="/Matt Image5.jpg"
            alt="Right side image"
            borderRadius="md"
            boxShadow="lg"
            objectFit="cover"
            width={{ base: '100%', md: '90%', lg: '85%' }}
            height="auto"
          />
        </Box>
      </Flex>
    </Stack>
  );
};


  const PhDThesisSteps: React.FC = () => {
    const steps = [
      { id: 1, title: 'Drawing the conclusion' },
      { id: 2, title: 'Research design' },
      { id: 3, title: 'Interpreting data results' },
      { id: 4, title: 'Choice of methodology' },
      { id: 5, title: 'Relevant literature search' },
      { id: 6, title: 'Introduction and background of study' },
      { id: 7, title: 'Data collection' },
      { id: 8, title: 'Analysing the data ' },
      { id: 9, title: 'Writing review of literature' },
      { id: 10, title: 'Discussion of data results' },
      { id: 11, title: 'Developing the rationale of study' },
    ];
    
    return (
      <Box p={8} bg="#02428d" borderRadius="md" boxShadow="lg">
        <Heading as="h2" size="xl" mb={9} textAlign="center" lineHeight={1.1} fontWeight={600} color={'white'}>
          Matt Research's Steps to a Successful PhD Thesis Development
        </Heading>
        <Grid
          templateColumns={{ base: 'repeat(1, 2fr)', md: 'repeat(3, 2fr)' }} // One column on mobile, 3 columns on desktop
          gap={4}
        >
          {steps.map((step) => (
            <GridItem key={step.id}>
              <Flex direction="column" align="center">
                <Circle size="50px" bg="#ecc94b" color="black" mb={2}>
                  <Text fontSize="xl" fontWeight="bold" m={0} p={0}>{`${step.id}`}</Text>
                </Circle>
                <Text textAlign="center" fontSize="lg" fontWeight="semibold" color={'white'}>
                  {step.title}
                </Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    );
  };

const slideAnimation = keyframes`

  0% { transform: translateX(0); }
  50% { transform: translateX(20px); }  // Move 20px to the right
  100% { transform: translateX(0); }     // Return to the starting position
`;

const AboutUsComponentes = () => {
return (
    <Flex
      direction={{ base: 'column', md: 'row' }} // Stack vertically on mobile, horizontally on desktop
      align="center"
      justifyContent="space-between"
      py={{ base: 6, md: 10 }} // Adjust padding for small and large screens
      px={{ base: 4, md: 6 }} // Adjust padding for small and large screens
      width="100%"
    >
      {/* Left side content: Title and paragraphs */}
      <Box
        flex={{ base: '1', md: '3' }} // Flexible width: 1 for mobile, 3 for desktop
        mb={{ base: 6, md: 0 }} // Margin bottom for mobile
        gap={4}
        m={{ base: '0 20px', md: '0 70px' }} // Adjust margin for small and large screens
      >
        <Heading as="h2" size="2xl" lineHeight={1.1} fontWeight={600} mb={4}>
          What is thesis writing?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Thesis writing is the process of creating an in-depth academic paper that presents a researcher's original contributions to 
          a specific field of study. It typically involves several key components, including an introduction, literature review, 
          methodology, results, discussion, and conclusion. A thesis showcases the student's ability to conduct independent research, 
          analyze data, and present findings in a structured and coherent manner.
        </Text>
        <Text fontSize="lg" mb={4}>
          The first step in thesis writing is selecting a relevant and engaging research topic. A well-chosen topic not only interests
          the writer but also contributes to the academic field. The topic should be specific, researchable, and aligned with current trends in the discipline.
        </Text>
        <Text fontSize="lg">
          A successful thesis is built on comprehensive research. This involves collecting data, analyzing previous studies, and identifying
          gaps in the existing literature. Researchers must use credible sources such as academic journals, books, and scholarly databases.
          Thesis writing involves drafting, revising, and editing. It’s important to present ideas clearly and logically, ensuring coherence throughout the document. 
        </Text>
      </Box>

      {/* Right side content: Image */}
      <Box
        flex={{ base: '1', md: '1' }} // Image takes up equal width on mobile and desktop
        display="flex"
        justifyContent="center"
        alignItems="center"
        mr={{ base: 0, md: 30 }} // Margin right for larger screens
      >
        <Image
          src="/thesisresearch.png"
          alt="Thesis Research Image"
          boxSize="100%" // Ensures the image takes up 100% of the Box width
          objectFit="cover" // Makes the image cover the available area
          borderRadius="md"
          animation={`${slideAnimation} 3s ease-in-out infinite`}
        />
      </Box>
    </Flex>
  );
};



const ThesisWritingStages = () => {
  return (
    <Box p={8} textAlign="center" maxW="1200px" mx="auto">
      {/* Title */}
      <Heading as="h2" size="lg" lineHeight={1.1} fontWeight={600} mb={8} color="#02428d">
      Methodology Section in Thesis Writing
      </Heading>

      {/* Stages Section */}
      <Flex justify="center" gap={2} wrap="wrap" mb={10}>
        {[
          "Data Analysis",
          "Drafting",
          "Choosing a Topic",
          "Revising",
          "Writing a Proposal",
          "Data Collection",
        ].map((stage, index) => (
          <Box
            key={index}
            p={4}
            boxShadow="-2px 7px 7px 0px #02428d"
            borderRadius="md"
            bg="white"
            textAlign="center"
            w="160px"
            h="100px"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <Text fontSize="2xl" fontWeight="bold" color="gray.700">
              {index + 1}.
            </Text>
            <Text fontSize="md" color="gray.600">
              {stage}
            </Text>
          </Box>
        ))}
      </Flex>

      {/* Thesis Ready Message */}
      <Box
        my={6}
        p={4}
          boxShadow="-2px 7px 7px 0px #02428d"
        borderRadius="md"
        bg="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="fit-content"
        mx="auto"
      >
        <Icon as={FaThumbsUp} boxSize={5} color="#ecc94b" mr={2}  />
        <Text fontSize="lg" fontWeight="medium" color="#02428d">
        Your Thesis is Submission-Ready
        </Text>
      </Box>

      {/* Features Section */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4} justifyItems="center" mt={8}>
        {[
          { icon: FaCheckCircle, text: "100% Client Confidentiality" },
          { icon: FaClock, text: "100% Customer Happiness Guarantee" },
          { icon: FaShieldAlt, text: "Guaranteed Timely Completion" },
          { icon: FaSmile, text: "24/7 Customer Assistance" },
        ].map((item, index) => (
          <Box
            key={index}
            p={6}
            boxShadow="-2px 7px 7px 0px #02428d"
            borderRadius="md"
            bg="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            // w="390px"
            w={{ base: '380px', sm: '380px', md: '390px', lg: 'xl' }}
          >
            <Icon as={item.icon} boxSize={6} color="#ecc94b" mr={3} />
            <Text fontSize="md" color="gray.700" fontWeight="medium">
              {item.text}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};


const ThesisWritingFormat = () => {
  return (
    <Box py={8} px={8} borderRadius="md">
      <Heading as="h2" textAlign="center" fontSize="3xl" lineHeight={1.1} fontWeight={600}  mb={4}>
      Essential Guidelines and Our Expert Services and How We Will Serve?
      </Heading>
      <Text textAlign="center" fontSize="lg" color="gray.500" mb={{base:"5",md:'10'}}>
       Our Matt Research Writing Format
      </Text>

      <Flex direction="column" align="center" justify="center">
        <Box
          p={8}
          maxW="900px"
          bg="white"
          borderRadius="xl"
         
          boxShadow="-0px 4px 4px 4px #02428d"
          border="1px solid #e2e8f0"
        >
          {/* Vertical Divider with Styled List */}
          <Stack direction={["column", "row"]} spacing={8}>
            <Box width={["100%", "48%"]}>
              <List spacing={4}>
                <ListItem fontSize="lg" color="gray.800" display="flex" alignItems="center">
                  <ListIcon as={CheckIcon} color="#ecc94b" />
                  Title Page
                </ListItem>
                <ListItem fontSize="lg" color="gray.800" display="flex" alignItems="center">
                  <ListIcon as={CheckIcon} color="#ecc94b" />
                  Abstract
                </ListItem>
                <ListItem fontSize="lg" color="gray.800" display="flex" alignItems="center">
                  <ListIcon as={CheckIcon} color="#ecc94b" />
                  Table of Contents
                </ListItem>
                <ListItem fontSize="lg" color="gray.800" display="flex" alignItems="center">
                  <ListIcon as={CheckIcon} color="#ecc94b" />
                  List of Figures & Tables
                </ListItem>
              </List>
            </Box>

            <Box width={["100%", "48%"]}>
              <List spacing={4}>
                <ListItem fontSize="lg" color="gray.800" display="flex" alignItems="center">
                  <ListIcon as={CheckIcon} color="#ecc94b" />
                  Introduction, Methods, Results, Discussion, Conclusions
                </ListItem>
                <ListItem fontSize="lg" color="gray.800" display="flex" alignItems="center">
                  <ListIcon as={CheckIcon} color="#ecc94b" />
                  Recommendations, Acknowledgments
                </ListItem>
                <ListItem fontSize="lg" color="gray.800" display="flex" alignItems="center">
                  <ListIcon as={CheckIcon} color="#ecc94b" />
                  References
                </ListItem>
                <ListItem fontSize="lg" color="gray.800" display="flex" alignItems="center">
                  <ListIcon as={CheckIcon} color="#ecc94b" />
                  Appendices
                </ListItem>
              </List>
            </Box>
          </Stack>

          {/* Adding a horizontal divider to give it a more structured layout */}
          <Divider my={8} borderColor="gray.200" />
        </Box>
      </Flex>
    </Box>
  );
};


const SkillsComponent = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box py={8} px={8} bg="#">
      <Heading as="h2" textAlign="center" fontSize="3xl" fontWeight={'600'} lineHeight={1.1} color="black">
      How Our Quality Process Guarantees a Perfect Thesis
      </Heading>
      <Text m={{ base: '20px 0px', md: '30px 130px' }} align='justify'>
        Our Matt Research Solutions carefully crafted quality process ensures that every thesis we work on meets the highest academic standards, providing you with a flawless, well-researched, and professionally written thesis.
      </Text>


      <Grid
        templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)"}
        gap={3}
        justifyContent="center"
      >
        {/* Column 1 */}
        <GridItem>
          <Card>
            <CardHeader>
              <Heading size="md" color="black">
              Publication support
              </Heading>
            </CardHeader>
            <CardBody>
              <Text color="gray.600">
               Matt Research, we understand that publication in high-impact journals is crucial for researchers and scholars who want to advance their careers and make a meaningful contribution to their fields.
              </Text>
            </CardBody>
          </Card>
          <Divider my={4} />
          <Card>
            <CardHeader>
              <Heading size="md" color="black">
              Proposal writing/Editing
              </Heading>
            </CardHeader>
            <CardBody>
              <Text color="gray.600">
              Our team of experienced Ph.D. writers and editors has a deep understanding of the standards and expectations of academic institutions, and we are committed to helping you craft a proposal .
              </Text>
            </CardBody>
          </Card>
          <Divider my={4} />
          <Card>
            <CardHeader >
              <Heading size="md" color="black">
              Plagiarism free writing/Editing
              </Heading>
            </CardHeader>
            <CardBody>
              <Text color="gray.600">
              MATT is a professional writing and editing company dedicated to providing high-quality, plagiarism-free content to clients across various industries. We understand the importance of original and authentic content.
              </Text>
            </CardBody>
          </Card>
        </GridItem>

        {/* Column 2 */}
        <GridItem>
          <Card>
            <CardHeader>
              <Heading size="md" color="black">
              Phd end to end assistance
              </Heading>
            </CardHeader>
            <CardBody>
              <Text color="gray.600">
              MATT is a company that provides end-to-end assistance to Ph.D. students. Our goal is to help students navigate the complexities of the doctoral process,research design and data analysis manuscript preparation defense.
              </Text>
            </CardBody>
          </Card>
          <Divider my={4} />
          <Card>
            <CardHeader>
              <Heading size="md" color="black">
              Proofreading services
              </Heading>
            </CardHeader>
            <CardBody>
              <Text color="gray.600">
              Matt Research is a professional proofreading service provider that is dedicated to helping individuals, businesses, and organizations ensure that their written content is error-free and polished to perfection.
              </Text>
            </CardBody>
          </Card>
          <Divider my={4} />
          <Card>
            <CardHeader>
              <Heading size="md" color="black">
              Research article writing
              </Heading>
            </CardHeader>
            <CardBody>
              <Text color="gray.600">
                AWriting a research article is a crucial part of the academic process, and publishing it in reputed journals can significantly contribute to one's career growth. At the same time, getting a research article published.
              </Text>
            </CardBody>
          </Card>
        </GridItem>

        {/* Column 3 */}
        <GridItem>
          <Card>
            <CardHeader>
              <Heading size="md" color="black">
              Project Development / Implementation
              </Heading>
            </CardHeader>
            <CardBody>
              <Text color="gray.600">
              MATT is a technology company that specializes in project development and implementation for PhD students. Our company provides cutting-edge solutions that help students achieve their academic .
              </Text>
            </CardBody>
          </Card>
          <Divider my={4} />
          <Card>
            <CardHeader>
              <Heading size="md" color="black">
              Ensure timely submission
              </Heading>
            </CardHeader>
            <CardBody>
              <Text color="gray.600">
              Understand the importance of adhering to submission deadlines and how it can impact your grades and overall academic performance actionable advice on how to stay organized and submit your research.
              </Text>
            </CardBody>
          </Card>
          <Divider my={4} />
          <Card>
            <CardHeader>
              <Heading size="md" color="black">
              Review Article Writing/Editing
              </Heading>
            </CardHeader>
            <CardBody>
              <Text color="gray.600">
              At MATT, we understand that publishing a review article in a reputed journal is a critical milestone for any researcher or academic. Our team of experienced writersd edicated to helping you achieve your goal.
              </Text>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Box>
 );
};



const FAQ = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight={'600'} lineHeight={1.1} mb="4" position="relative" color={'black'}>
        Frequently Asked Questions
      </Text>
      <Box
        width={{ base: '100%', md: '700px' }} // Ensure it takes up 100% on small screens and 700px on larger ones
        bg="white"
        p="6"
        borderRadius="md"
        textAlign="center"
        boxShadow="lg"
      >
        <Accordion allowToggle>
          {/* Repeat for each AccordionItem */}
          <AccordionItem border="none">
            <AccordionButton py="4" px="4" bg="#ecc94b" borderRadius="md" mb="2" _hover={{ bg: "#02428d" }}>
              <Box flex="1" textAlign="left" color="white" fontSize="md">
                Do thesis writing services guarantee confidentiality and privacy?
              </Box>
              <AccordionIcon color="white" />
            </AccordionButton>
            <AccordionPanel pb="4">
              Yes, reputable thesis writing services maintain strict confidentiality and privacy policies to protect client information.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="none">
            <AccordionButton py="4" px="4" bg="#ecc94b" borderRadius="md" mb="2" _hover={{ bg: "#02428d" }}>
              <Box flex="1" textAlign="left" color="white" fontSize="md">
                Are thesis writing services legal?
              </Box>
              <AccordionIcon color="white" />
            </AccordionButton>
            <AccordionPanel pb="4">
              Yes, they are legal. However, clients are encouraged to use the service responsibly and follow academic guidelines.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="none">
            <AccordionButton py="4" px="4" bg="#ecc94b" borderRadius="md" mb="2" _hover={{ bg: "#02428d" }}>
              <Box flex="1" textAlign="left" color="white" fontSize="md">
                Is there any guarantee that my work will be delivered on time?
              </Box>
              <AccordionIcon color="white" />
            </AccordionButton>
            <AccordionPanel pb="4">
              Many services offer a delivery guarantee and provide updates throughout the writing process to ensure timely completion.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="none">
            <AccordionButton py="4" px="4" bg="#ecc94b" borderRadius="md" mb="2" _hover={{ bg: "#02428d" }}>
              <Box flex="1" textAlign="left" color="white" fontSize="md">
                Is there a possibility of content plagiarism?
              </Box>
              <AccordionIcon color="white" />
            </AccordionButton>
            <AccordionPanel pb="4">
              Reputable services check for plagiarism and ensure original content, often providing a plagiarism report if requested.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="none">
            <AccordionButton py="4" px="4" bg="#ecc94b" borderRadius="md" mb="2" _hover={{ bg: "#02428d" }}>
              <Box flex="1" textAlign="left" color="white" fontSize="md">
                Are there any hidden fees or additional costs?
              </Box>
              <AccordionIcon color="white" />
            </AccordionButton>
            <AccordionPanel pb="4">
              Reputable services are transparent about their pricing and disclose any additional costs upfront.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Button
          mt="6"
          bg="#02428d"
          color="white"
          borderRadius="md"
          _hover={{ bg: "#02428d" }} // Prevent hover effect by keeping the background color the same
        >
          Request A Quote
        </Button>
      </Box>
    </Box>
  );
};
  
const FullProcessComponent = () => {
    return (
      <Box>
         <ThesisWritingServiceComponent />
        <MyComponent/>
        <AboutUsComponentes />
        <PhDThesisSteps />
        <ThesisWritingStages />
        <SkillsComponent />
        <ThesisWritingFormat />
        <FAQ />
        
      </Box>
    );
  };
  
  export default FullProcessComponent;
