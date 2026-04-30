
import {
  Flex,
  Box,
  Text,
  Heading,
  SimpleGrid,
  Icon,
  Stack,
  Button,
  Textarea,
  Input,
  Image,
  Grid,
  VStack,
  GridItem,
  ListIcon,
  List, 
  keyframes,
  ListItem,
  UnorderedList
}
from '@chakra-ui/react';
import { FaWhatsapp, FaShieldAlt, FaUserShield, FaClock, } from 'react-icons/fa';
import { StarIcon } from "@chakra-ui/icons";
import { FiSearch } from 'react-icons/fi';
import { MdArrowForward } from "react-icons/md";
import Head from "next/head"


export const ThesisWritingServiceComponents = () => {
  const handleClick = () => {
    // Navigate to WhatsApp link immediately
    window.location.href = 'https://wa.me/+918825735141';
  };
  return (
    <>
     <Head>
        <meta name="title" content="Research Proposal Writing Services | Expert PhD Help" />
        <meta
          name="description"
          content="Get professional assistance in crafting a compelling and well-structured research proposal. Tailored support for PhD candidates at MATT Solutions."
        />
        <meta
          name="keywords"
          content="research proposal writing, PhD support, professional assistance, MATT Solutions"
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
            Research Proposal Writing
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
          size="lg"
          mt={4}
          fontSize={{base:'md',md:'lg'}} 
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

const slideAnimation = keyframes`
  0% { transform: translateX(-50px); }
  50% { transform: translateX(0); }
  100% { transform: translateX(-50px); }
`;
const AboutUsComponenteds = () => {
  return (
    <Box as="header" justifyContent="center" mt={6} p={{ base: 4, md: 8 }}>
      <Heading
        color="black"
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '4xl', xl: '5xl' }}
        textAlign="center"
        mb={4}
      >
        Research Proposal Writing
      </Heading>

      <Text
        m={{ base: '20px 0px', md: '30px 60px', lg: '30px 80px', xl: '30px 110px' }}
        fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
        textAlign="center"
      >
        Research Proposal Writing Services tailored to help researchers, students, and professionals present their research ideas effectively. Whether you are crafting a PhD research proposal, a proposal for a Master's thesis, or a grant submission, our team is equipped to ensure your ideas are conveyed in a structured, persuasive manner.
      </Text>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        p={2}
        gap={10}
        m={{ base: '0px 0px', md: '0px 40px', lg: '0px 80px', xl: '0px 100px' }}
      >
        {/* Left side with title and paragraphs */}
        <Box flex="1">
          <Text mb={3} fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
            Research proposal writing is a crucial step in the academic journey, as it sets the foundation for any research project.
            A well-written research proposal not only outlines the research question but also presents a clear methodology, objectives,
            and potential outcomes. Our professional research proposal writing services are designed to help students, researchers, and
            academic professionals craft compelling proposals that stand out in competitive environments.
          </Text>
          <Text mb={3} fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
            We understand the significance of a strong research proposal in securing funding, approval, and support for your research project.
            Whether you're working on a thesis, dissertation, or grant proposal, our team of experts offers comprehensive support,
            including writing, editing, and structuring your proposal to meet the highest standards.
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
            Choosing professional help for research proposal writing can make a significant difference in the success of your project.
            Our team is committed to delivering high-quality work within deadlines, with attention to detail and adherence to academic
            standards. Whether it's a research proposal for PhD, grant writing, or preparing a proposal for journal submission,
            we are here to provide expert guidance every step of the way.
          </Text>
        </Box>

        {/* Right side with image */}
        <Box flex="1" display="flex" justifyContent="center" alignItems={{base:'flex-end',md:'center'}}>
          <Image
            src="/companyphoto6.jpg"
            alt="Research proposal illustration"
            borderRadius="md"
            boxSize={{ base: '250px', sm: '300px', md: '350px', lg: '400px', xl: '500px' }}
            objectFit="cover"
            animation={`${slideAnimation} 3s ease-in-out infinite`}
          />
        </Box>
      </Flex>
    </Box>
  );
};


const slideAnimations = keyframes`
  0% { transform: translateX(-20px); }
  50% { transform: translateX(0); }
  100% { transform: translateX(-20px); }
`;

const ResearchProposalComponent = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      p={{ base: 3, md: 5 }}
      gap={6}
      m={{ base: '0px 20px', md: '0px 50px', lg: '0px 100px' }}
    >
      {/* Left side with image */}
      <Box flex="1" display="flex" justifyContent="center" mb={{ base: 6, md: 0 }}>
        <Image
          src="/companyphoto3.jpg"
          alt="Research proposal image"
          borderRadius="md"
          mt={{ base: 8, md: 20 }}
          width={{ base: "100%", md: "500px" }}
          height={{ base: "auto", md: "400px" }}
          objectFit="cover"
          animation={`${slideAnimations} 5s ease-in-out infinite`}
          />
      </Box>

      {/* Right side with title, description, and topics */}
      <Box flex="1">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={4}
          lineHeight={1.2}
          fontWeight={600}
        >
          Research Proposal Topics
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={4}>
          Explore some impactful research topics that can serve as a foundation for innovative projects.
        </Text>

        {/* List of research proposal topics */}
        <List spacing={3} p={0} m={0}>
          <ListItem>
            <ListIcon as={StarIcon} color="#02428d" />
            The Impact of Artificial Intelligence on Future Workforce Dynamics
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} color="#02428d" />
            Mental Health Effects of Social Media Usage Among Adolescents
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} color="#02428d" />
            Sustainable Energy Solutions for Urban Environments
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} color="#02428d" />
            Genetic Engineering and Disease Prevention Using CRISPR Technology
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} color="#02428d" />
            Climate Change Adaptation Strategies for Coastal Cities
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} color="#02428d" />
            Addressing Education Inequality through Digital Learning Access
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} color="#02428d" />
            Cybersecurity Challenges in a Digitally Connected World
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} color="#02428d" />
            Impact of Dietary Habits on Childhood Cognitive Development
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} color="#02428d" />
            Economic Implications of the Shift to Remote Work Post-COVID-19
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} color="#02428d" />
            Public Policy’s Role in Promoting Sustainable Agriculture Practices
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

const ResearchComponent = () => {
  return (
    <Box textAlign="center" p={{ base: 4, md: 8 }}>
      {/* Section Heading */}
      <Text fontSize={{ base: '2xl', md: '3xl' }} color="black" mb={8} lineHeight={1.1} fontWeight={600}>
        Writing a Successful Research Proposal..?
      </Text>

      {/* Grid of Cards */}
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)' }}
        gap={6}
        justifyItems="center"
        m={{ base: '0px 20px', sm: '0px 40px', md: '0px 120px' }}
      >
        {[
          'Title page',
          'Summary',
          'Introduction',
          'Literature review',
          'Methodology',
          'Timeline',
          'Reference Section',
          'Appendices',
        ].map((item, index) => (
          <GridItem
            key={index}
            w="100%"
            maxW="200px"
            p={4}
            bg="white"
            borderRadius="md"
            boxShadow="-2px 7px 7px 0px #02428d"
            textAlign="center"
          >
            <Flex direction="column" align="center">
              <Icon as={FiSearch} color="green.500" boxSize={5} mb={2} />
              <Text fontSize="md" fontWeight="semibold">
                {item}
              </Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

const ProposalStructure = () => {
  return (
    <Box bg="#02428d" p={6} borderRadius="lg" boxShadow="md" m="10px 0px">
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        textAlign="center"
        color="white"
        mb={10}
        mt={5}
        lineHeight={1.1}
        fontWeight={500}
      >
        Proposal of the Structure
      </Text>

      {/* Grid layout for the cards */}
      <Grid
        templateColumns={{ base: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" }}
        gap={6}
        m={{ base: '0 0px', md: '0 50px', lg: '0 100px' }}
        // p="0 20px"
        p={{base:'0',md:'0px 20px'}}
      >
        {/* Card 1 */}
        <GridItem>
          <Flex direction="column" bg="#ecc94b" p={4} borderRadius="15px 50px 30px" h="250px">
            <Text fontSize="xl" fontWeight="bold" color="black">Introduction and Contribution</Text>
            <Text mt={{base:'0',md:'2'}} color="blue.700">
              "In this section, we state the research problem and aims as well as the objectives of the study. The contribution clearly defines the novelty and the important objectives."
            </Text>
          </Flex>
        </GridItem>
        
        {/* Card 2 */}
        <GridItem>
          <Flex direction="column" bg="#ecc94b" p={4} borderRadius="15px 50px" h="250px">
            <Text fontSize="xl" fontWeight="bold" color="black">Abstract</Text>
            <Text mt={{base:'0',md:'2'}} color="blue.700">
              "The abstract includes an overview of the whole research project. The goal of the research is clearly stated in the abstract, which should be clear and concise."
            </Text>
          </Flex>
        </GridItem>
        
        {/* Card 3 */}
        <GridItem>
          <Flex direction="column" bg="#ecc94b" p={4} borderRadius="15px 50px" h="250px">
            <Text fontSize="xl" fontWeight="bold" color="black">Research Question and Literature Review</Text>
            <Text mt={{base:'0',md:'2'}}color="blue.700">
              "This section discusses the findings and limitations of existing studies in the relevant field, and reviews the methodologies and theories that support the research."
            </Text>
          </Flex>
        </GridItem>

        {/* Card 4 */}
        <GridItem>
          <Flex direction="column" bg="#ecc94b" p={4} borderRadius="15px 50px 30px" h="250px">
            <Text fontSize="xl" fontWeight="bold" color="black">Methodology and Timeline of the Project</Text>
            <Text mt={{base:'0',md:'2'}}color="blue.700">
              "In the methodology part, the overall approach of the study is explained along with the timeline and justification for the chosen methodology."
            </Text>
          </Flex>
        </GridItem>
        
        {/* Card 5 */}
        <GridItem>
          <Flex direction="column" bg="#ecc94b" p={4} borderRadius="15px 50px 30px" h="250px">
            <Text fontSize="xl" fontWeight="bold" color="black">Bibliography</Text>
            <Text mt={{base:'0',md:'2'}}color="blue.700">
              "In the bibliographical section, mention the list of sources used as the reference for the writing of the proposal. Avoid overstuffing the content to give reviewers a guide to the timeline."
            </Text>
          </Flex>
        </GridItem>

        {/* Card 6 */}
        <GridItem>
          <Flex direction="column" bg="#ecc94b" p={4} borderRadius="15px 50px" h="250px">
            <Text fontSize="xl" fontWeight="bold" color="black">Timeline</Text>
            <Text mt={2} color="blue.700">
              "In this part of the proposal, include the timeline needed to complete the research project."
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};



const slideAnimatione = keyframes`
  0% { transform: translateY(-70px); }
  50% { transform: translateX(0); }
  100% { transform: translateY(-70px); }
`;

const ProposalFactors = () => {
  return (
    <Box p={8} maxW="1200px" mx="auto" my={10}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={8}
      >
        {/* Left Section - Text content */}
        <Box flex="1" p={{ base: 0, md: 6 }}>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={500} mb={6} color="blue.800">
            What are the factors included in the proposals?
          </Text>
          <VStack align="flex-start" spacing={4} color="blue.400">
            <Flex align="center">
              <Icon as={MdArrowForward} boxSize={5} color="blue.300" mr={3} />
              <Text fontSize="md" textAlign="justify">
                It describes the research area, scope, and purpose of the research and draws the aim and contribution of the research in the innovation-evolving world.
              </Text>
            </Flex>
            <Flex align="center">
              <Icon as={MdArrowForward} boxSize={5} color="blue.300" mr={3} />
              <Text fontSize="md" textAlign="justify">
                Through the proposal, we can conclude the estimate of the result and timeline of the research project.
              </Text>
            </Flex>
            <Flex align="center">
              <Icon as={MdArrowForward} boxSize={5} color="blue.300" mr={3} />
              <Text fontSize="md" textAlign="justify">
                With the proposal of the research project, we can evaluate the financial requirement of the research study.
              </Text>
            </Flex>
            <Flex align="center">
              <Icon as={MdArrowForward} boxSize={5} color="blue.300" mr={3} />
              <Text fontSize="md" textAlign="justify">
                The proposal is structured in the format of summarizing the expected results and outcome.
              </Text>
            </Flex>
            <Flex align="center">
              <Icon as={MdArrowForward} boxSize={5} color="blue.300" mr={3} />
              <Text fontSize="md" textAlign="justify">
                In the structure of the proposal, include the bibliography of the relevant resources.
              </Text>
            </Flex>
          </VStack>
        </Box>

        {/* Right Section - Image */}
        <Box flex="1" display="flex" justifyContent="center">
          <Image
            src="/Matt Image13.jpg" // Update with your actual image path
            alt="Proposal Image"
            borderRadius="md"
            objectFit="cover"
            boxSize={{ base: "300px", md: "400px" }}
            animation={`${slideAnimation} 3s ease-in-out infinite`}
          />
        </Box>
      </Flex>
    </Box>
  );
};

import { FiHelpCircle } from 'react-icons/fi';

const slideAnimationed = keyframes`
  0% { transform: translateX(-30px); }
  50% { transform: translateX(0); }
  100% { transform: translateX(-30px); }
`;

const ResearchProposalBenefits = () => {
  return (
    <Box
      p={{ base: 4, sm: 6, md: 8 }}  // Adjust padding for smaller screens
      bg="white"
      borderRadius="md"
      alignItems="start"
      m={{ base: "0px 20px", sm: "0px 30px", md: "0px 150px" }}  // Adjust margins for responsiveness
    >
      <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
        {/* Left Column - Text Content and Image */}
        <Box flex="1" pr={{ base: 0, md: 8 }}>
          <Heading as="h2" size="lg" mb={6} color="blue.700">
            How Do You Get Benefit from Research Proposal Help?
          </Heading>

          <Box display="flex" flexDirection={{base:"column", md:'row' }} justifyContent={{ base: 'center', md: 'flex-end' }} flex={'wrap'} gap={5}>
            {/* Image */}
            <Box mt={{ base: 3, md: 0 }} textAlign="center">
              <Image
                src="/Matt Image14.jpg"
                alt="Illustration of Research Proposal Help"
                boxSize={{ base: '80%', sm: '70%', md: '60%' }}  // Adjust size for different screens
                mt={5}
                objectFit="contain"
                mx="auto"
                animation={`${slideAnimationed} 3s ease-in-out infinite `}
              />
            </Box>

            {/* Text Content */}
            <Box mr={{ base: 0, md: 5 }}>
              <Text mb={4} fontSize={{ base: 'sm', md: 'md' }} color="gray.700">
                A task well begun is half done. This suits me perfectly for research proposal writing. 
                Choosing an idea for research is not a matter of simple importance. The topic that you 
                choose should be unique, it should offer a solution to a problem, present a good scope 
                for gathering data and you should be able to deliver the intended results that have a 
                scope for further research too. A <strong>research proposal writing service</strong> 
                will assure you that all these important aspects of a research proposal are met 
                professionally.
              </Text>

              <Text mb={4} fontSize={{ base: 'sm', md: 'md' }} color="gray.700">
                Besides, when you take the help of an expert team for your research proposal, you can 
                enjoy the following benefits:
              </Text>
            </Box>
          </Box>
        </Box>
        </Flex>
        {/* Right Column - Unordered List of Benefits */}
        <Box flex="1" mt={{ base: 6, md: 0 }}>
          <UnorderedList spacing={2} pl={5} color="gray.600" m={0}>
            <ListItem>
              You can stay assured of the <strong>research proposal</strong> idea that it is unique and 
              convince your professors.
            </ListItem>
            <ListItem>
              Expert services show you a plethora of options to choose from when you explain to them 
              your intended area of research.
            </ListItem>
            <ListItem>
              You can submit your research proposal with confidence that it is free from plagiarism.
            </ListItem>
            <ListItem>
              You get round-the-clock assistance during your entire tenure of research which gives you 
              the ultimate confidence.
            </ListItem>
            <ListItem>
              Your work comes from the brains of experts of subject matters and the best in field 
              writers and editors, which adds charm to your research.
            </ListItem>
          </UnorderedList>
        </Box>
    
    </Box>
  );
};
import { FaComments, FaClipboardList, FaUndoAlt, FaFileContract, FaHeadset, FaLock, FaThumbsUp } from 'react-icons/fa';
import { mdxCompile } from 'next/dist/build/swc/generated-native';
import ContactForm from '../ServicePageForm';

const ServiceFeatures = () => {
  return (
    <Box p={{ base: 4, md: 8 }} bg="gray.50">
      <Heading
        display="flex"
        justifyContent="center"
        fontWeight="600"
        lineHeight={1.1}
        textAlign="center"
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
      >
        Research Proposal Support with Guarantees
      </Heading>
      <Text
        align="center"
        m={{ base: '20px', md: '30px 100px' }}
        fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
      >
        If you're looking for <strong>Research Proposal Support With Guarantees,</strong> our <strong>MAtt Research expert team</strong> provides comprehensive assistance to ensure your proposal meets the highest standards.
      </Text>
      
      {/* Main Grid for Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 4, md: 6 }}
        m={{ base: '0px 10px', md: '0px 50px', lg: '0px 100px' }}
      >
        <Box bg="white" boxShadow="md" borderRadius="md" p={6} h="100%">
          <Flex align="center" mb={4}>
            <Icon as={FaComments} color="#02428d" boxSize={{ base: 5, md: 6 }} mr={2} />
            <Heading as="h3" size="md" fontSize={{ base: "md", lg: "lg" }}>
              Online chat with your expert
            </Heading>
          </Flex>
          <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
            Once you make an order, you are granted access to a 24/7 live chat with the assigned research proposal writer and can communicate with them directly...
          </Text>
        </Box>

        <Box bg="white" boxShadow="md" borderRadius="md" p={6} h="100%">
          <Flex align="center" mb={4}>
            <Icon as={FaShieldAlt} color="#02428d" boxSize={{ base: 5, md: 6 }} mr={2} />
            <Heading as="h3" size="md" fontSize={{ base: "md", lg: "lg" }}>
              100% data privacy
            </Heading>
          </Flex>
          <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
            We provide research proposal help services following DMCA regulations enforcing strict privacy policy. A secure encryption system protects...
          </Text>
        </Box>

        <Box bg="white" boxShadow="md" borderRadius="md" p={6} h="100%">
          <Flex align="center" mb={4}>
            <Icon as={FaClock} color="#02428d" boxSize={{ base: 5, md: 6 }} mr={2} />
            <Heading as="h3" size="md" fontSize={{ base: "md", lg: "lg" }}>
              Delivery according to your deadline
            </Heading>
          </Flex>
          <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
            Our vast background and time-efficient internal processes allow us to offer writing help within flexible time frames. Whether you choose a delivery time...
          </Text>
        </Box>
      </SimpleGrid>

      {/* Second Grid for Additional Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 4, md: 6 }}
        m={{ base: '0px 10px', md: '0px 50px', lg: '0px 100px' }}
        mt={{base:'0', md:'6'}}
      >
        <Box bg="white" boxShadow="md" borderRadius="md" p={6} h="100%" mt={{base:'4',md:'4'}}>
          <Flex align="center" mb={4}>
            <Icon as={FaClipboardList} color="#02428d" boxSize={{ base: 5, md: 6 }} mr={2} />
            <Heading as="h3" size="md" fontSize={{ base: "md", lg: "lg" }}>
              Following your custom instructions
            </Heading>
          </Flex>
          <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
            Following instructions consistently, we guarantee compliance with formatting, spacing, and other requirements to meet the varying needs of our clients...
          </Text>
        </Box>

        <Box bg="white" boxShadow="md" borderRadius="md" p={6} h="100%" mt={{base:'2',md:'4'}}>
          <Flex align="center" mb={4}>
            <Icon as={FaUndoAlt} color="#02428d" boxSize={{ base: 5, md: 6 }} mr={2} />
            <Heading as="h3" size="md" fontSize={{ base: "md", lg: "lg" }}>
              Refund policy
            </Heading>
          </Flex>
          <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
            Customer satisfaction is a No.1 priority when providing help. Every order is done by a subject professional with a corresponding PhD degree...
          </Text>
        </Box>
      </SimpleGrid>

      {/* Row of Smaller Icons with Text */}
      <Flex justify="center" mt={{base:'10', md:'20'}} gap={6} wrap="wrap">
        <Flex align="center" m={3}>
          <Icon as={FaFileContract} color="#02428d" boxSize={{ base: 8, lg: 10 }} mr={2} />
          <Text fontWeight="bold" fontSize={{ base: 'sm', lg: 'md' }}>NDA with Content Writers</Text>
        </Flex>
        
        <Flex align="center" m={3}>
          <Icon as={FaHeadset} color="#02428d" boxSize={{ base: 8, lg: 10 }} mr={2} />
          <Text fontWeight="bold" fontSize={{ base: 'sm', lg: 'md' }}>24/7 Help Desk</Text>
        </Flex>
        
        <Flex align="center" m={3}>
          <Icon as={FaLock} color="#02428d" boxSize={{ base: 8, lg: 10 }} mr={2} />
          <Text fontWeight="bold" fontSize={{ base: 'sm', lg: 'md' }}>Payment Security</Text>
        </Flex>
        
        <Flex align="center" m={3}>
          <Icon as={FaThumbsUp} color="#02428d" boxSize={{ base: 8, lg: 10 }} mr={2} />
          <Text fontWeight="bold" fontSize={{ base: 'sm', lg: 'md' }}>Top 98% Rank</Text>
        </Flex>
      </Flex>
    </Box>
  );
};



const InfoComponent = () => {
  return (
    <Box textAlign="center" p={{ base: 4, md: 8 }} maxW="1000px" mx="auto">
      {/* Main Title and Intro Paragraph */}
      <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="600" lineHeight={1.1} mb={2}>
        What is Research Proposal?
      </Text>
      <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" mb={6}>
        Our <strong>MAtt Research Proposal</strong> is a detailed plan that outlines a proposed research project. It serves as a blueprint for the study <strong>PhD journey</strong>, explaining what the researcher intends to investigate, why it is important, and how they plan to carry it out.
      </Text>

      {/* Box with Title, Paragraph, and Image */}
      <Flex
        bg="white"
        p={{ base: 4, md: 6 }}
        borderRadius="md"
        boxShadow="-1px 7px 7px 2px #02428d"
        align="center"
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: 4, md: 6 }}
      >
        {/* Left Side: Title and Paragraph */}
        <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" lineHeight={1.1} mb={4}>
            How do I write the methodology section in a research proposal?
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600">
            It begins with explaining the <strong>Matt Research</strong> design, including whether the study will be qualitative, quantitative, or mixed methods, and why this approach is appropriate for answering the research questions. <strong>Data collection methods, such as surveys, interviews, or experiments, are also detailed,</strong> along with the tools or instruments used for gathering data. The methodology includes a description of the sampling technique, whether random, purposive, or convenience sampling, and provides a rationale for the sample size chosen.
          </Text>
        </Box>

        {/* Right Side: Image Box */}
        <Box flex="1" display="flex" justifyContent="center">
          <Image
            src="/Matt Image6.jpg" // Replace with your image URL
            alt="Research Image"
            borderRadius="md"
            boxShadow="-2px 7px 7px 4px #ecc94b"
            maxW={{ base: '150px', sm: '200px', md: '250px', lg: '300px' }}
          />
        </Box>
      </Flex>
    </Box>
  );
};


const FullProcessComponent = () => {
  return (
    <Box>
       <ThesisWritingServiceComponents />
       <AboutUsComponenteds />
       <ResearchProposalComponent />
       <InfoComponent />
       <ResearchComponent /> 
       <ProposalStructure />
       
       <ProposalFactors />
       <ResearchProposalBenefits />
       <ServiceFeatures />

    </Box>
  );
};

export default FullProcessComponent;
