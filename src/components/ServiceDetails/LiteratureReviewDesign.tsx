
// import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { MdCheckCircle, MdLocalShipping } from 'react-icons/md';
// import EngineeringService from '../Banners/ResearchArtBnr';
// import StaticEnquiry from '../StaticEnquiry';

// export default function ReviewWriting() {
//     return (
//         <>
//             <EngineeringService />
//             <Container maxW={'6xl'}>
//                 <SimpleGrid
//                     // columns={{ base: 1, lg: 2 }}
//                     spacing={{ base: 8, md: 10 }}
//                     py={{ base: 18, md: 14 }}>

//                     <Stack spacing={{ base: 4, md:10 }}>
//                         <Box as={'header'}>
//                             <Heading
//                              color='blue.800'
//                                 lineHeight={1.1}
//                                 fontWeight={600}
//                                 fontSize={{ base: '2xl', sm: '3xl', lg: '3xl' }}>
//                                 Literature Review & Research Design:
//                             </Heading>
//                         </Box>
//                         <Flex direction={'row'} justifyContent='space-between' flexWrap={'wrap'} gap={3}>
//                         <Stack
//                            width={{base:'xs', sm:'lg', lg:'lg'}}
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
//                                     Writing a review article is a crucial part of the academic process,
//                                     and publishing it in reputed journals can significantly contribute to one's career growth.
//                                 </Text>
//                                 <Text align={'justify'}>
//                                 At MATT, we understand that publishing a review article in a reputed journal is a critical milestone for any researcher or academic. Our team of experienced writers and editors is dedicated to helping you achieve your goal by providing high-quality review article writing services that are tailored to your specific requirements. Whether you need a literature review, a systematic review, or a meta-analysis, we can help you synthesize and analyze the existing literature in your field, identify key knowledge gaps, and provide insights and recommendations that can inform future research. </Text>
//                                 <Text align={'justify'}>
//                                 Our team is well-versed in the latest trends and best practices in academic publishing, and we can help you navigate the complex submission and review process to ensure that your article receives the attention and recognition it deserves. With our proven track record of success, you can trust us to help you achieve your academic and professional goals.
//                                 </Text>

//                                 <Text align={'justify'} fontSize={'lg'} >

//                                 In terms of points to include on your website, you could highlight the following features and benefits of your review article writing services:

//                                 </Text>
//                                <List>
//                                 <ListItem fontSize={'lg'} >
//                                     <ListIcon as={MdCheckCircle} color='blue.600'/>
//                                     A team of experienced and qualified writers and editors who are experts in their respective fields
//                                 </ListItem>
//                                 <ListItem fontSize={'lg'}>
//                                     <ListIcon as={MdCheckCircle} color='blue.600'/>
//                                     Customized solutions that are tailored to your specific needs and requirements
//                                 </ListItem>
//                                 <ListItem fontSize={'lg'}>
//                                     <ListIcon as={MdCheckCircle} color='blue.600'/>
//                                     A range of review article types, including literature reviews, systematic reviews, and meta-analyses
//                                 </ListItem>
//                                 <ListItem fontSize={'lg'}>
//                                     <ListIcon as={MdCheckCircle} color='blue.600'/>
//                                     A comprehensive and rigorous review process that ensures the quality and relevance of your review article
//                                 </ListItem>
//                                 <ListItem fontSize={'lg'}>
//                                     <ListIcon as={MdCheckCircle} color='blue.600'/>
//                                     Assistance with manuscript preparation, submission, and revisions to ensure successful publication in reputed journals
//                                 </ListItem>
//                                 <ListItem fontSize={'lg'}>
//                                     <ListIcon as={MdCheckCircle} color='blue.600'/>
                                    
//                                     A commitment to on-time delivery and complete customer satisfaction

//                                 </ListItem>
//                                 <ListItem fontSize={'lg'}>
//                                     <ListIcon as={MdCheckCircle} color='blue.600'/>
                                    
//                                     Competitive pricing and flexible payment options to suit your budget and preferences.

//                                 </ListItem>
//                                </List>
                               
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
                         
//                          <StaticEnquiry/>
//                          </Stack>
//                        </Flex>
//                     </Stack>
//                 </SimpleGrid>
//             </Container>
//         </>
//     );
// }



import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    HStack,
    Input,
    Icon,
    Textarea,
    Button,
    Heading,
    Grid,
    GridItem,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    keyframes,
    ListItem,
    ListIcon,
} from '@chakra-ui/react';
import { FaWhatsapp, FaShieldAlt, FaUserShield, FaClock,FaThumbsUp, FaCheckCircle,FaSmile,} from 'react-icons/fa';
import { motion } from 'framer-motion';
import {CheckIcon,CheckCircleIcon} from '@chakra-ui/icons'
import React from 'react';
import ContactUsed from '../ServicePageForm';
import ContactForm from '../ServicePageForm';
import Head from "next/head"



export const ThesisWritingServiceComponent = () => {
  const handleClick = () => {
    // Navigate to WhatsApp link immediately
    window.location.href = 'https://wa.me/+918825735141';
  };
  return (
    <>
    <Head>
              <title>Literature Review & Research Design Services | MATT Solutions</title>
              <meta
                name="description"
                content="Our experts provide detailed literature reviews and robust research design support for PhD projects. Elevate your research with MATT Solutions."
              />
              <meta
                name="keywords"
                content="literature review, research design, PhD projects, MATT Solutions, research support"
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
          Literature Review & Research Design
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
          fontSize={{base:'md',lg:'lg'}}
          width="auto"
        >
          Share Your Requirement On WhatsApp
        </Button>
      </Box>

      {/* Contact Form - Right Side */}
      
      <Box
        >
       <ContactForm />
     </Box>
    </Flex>
    </> 
  );
};

const slideAnimation = keyframes`

  0% { transform: translateX(0); }
  50% { transform: translateX(20px); }  // Move 20px to the right
  100% { transform: translateX(0); }     // Return to the starting position
`;
const ContentBox = () => {
    return (
      <Box p={{base:'2',md:'8'}} pt={{base:'6',md:'0'}} maxW="1500px" m={{base:'0px 5%',md:'0px 10%'}}>
        {/* Main Content Area with Title and Paragraph */}
        <VStack spacing={4} align="center" textAlign="center">
          <Heading as="h2" size="lg" lineHeight={1.1} fontWeight={600} mt={{base:'2',md:'5'}}>
            Literature Review & Research Design
          </Heading>
          <Text fontSize="lg" mx={{ base: '0', md: '40px' }}>
            The <strong>literature review and research design</strong> are fundamental elements that shape the direction and depth of a research project.
            The literature review surveys existing studies and scholarly work on the topic, identifying knowledge gaps and contextualizing
            the study within the broader academic landscape.
          </Text>
        </VStack>
  
        {/* Left-side box with more content */}
        <Box mt={8}>
          <Heading fontSize="3xl" lineHeight={1.1} fontWeight={600} mb={8} textAlign={{ base: 'center', md: 'left' }}>
            Why Choose Matt Research Solutions?
          </Heading>
          <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={10}>
            <Box flex="1" maxW="400px">
              <Image src="/Matt Image7.jpg" alt="Description of image" boxSize="100%" borderRadius="md"
              animation={`${slideAnimation} 3s ease-in-out infinite `} />
            </Box>
            <VStack spacing={1} flex="2" align="start" textAlign="left">
              <Text fontSize="md">At Matt Research Solutions, we provide expert support tailored to meet the unique needs of researchers. Our <strong> "PHD RESEARCH" </strong> team is dedicated to helping you achieve excellence by offering customized, comprehensive solutions that enhance every stage of your research journey. </Text>
              <Text fontSize="md">With a focus on accuracy, integrity, and innovation, we guide you through complex research challenges with efficient, results-oriented strategies. From proposal writing and data analysis to publication support and compliance with ethical standards, we’re here to ensure your research stands out with credibility and precision.</Text>
              <Text fontSize="md">Choose <strong> "Matt Research Solutions" </strong>for expertise you can trust and support you can rely on at every step of your research journey. Our team is committed to delivering personalized guidance that aligns with your specific goals and academic standards, ensuring your research progresses smoothly from concept to completion.</Text>
              {/* Add more paragraphs as needed */}
            </VStack>
          </Flex>
        </Box>
      </Box>
  );
}

// const MotionBox = motion(Box);

// const TypesOfLiteratureReview = () => {
//   return (
//     <Box as='div' p={8} maxW="1000px" mx="auto" pt={20}>
//       <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8}>
       

//         {/* Right Side - Title and Cards */}
//         <VStack align="start" spacing={5}>
//           <Heading fontWeight={600} lineHeight={1.1} fontSize="3xl" mb={4}>
//             Types of Literature Review
//           </Heading>
//           <Grid templateColumns="repeat(2, 1fr)" gap={4}>
//             <GridItem>
//               <Box bg="white" boxShadow="-1px 7px 7px 2px #02428d" borderRadius="md" p={4} textAlign="center" position="relative">
//                 <Text fontWeight="bold" m={0}>Conceptual Framework</Text>
//                 <Box
//                   position="absolute"
//                   bottom="0"
//                   left="0"
//                   right="0"
//                   h="5px"
//                   bg="#ecc94b"
//                   borderRadius="md"
//                 />
//               </Box>
//             </GridItem>
//             <GridItem>
//               <Box bg="white" boxShadow="-1px 7px 7px 2px #02428d" borderRadius="md" p={4} textAlign="center" position="relative">
//                 <Text fontWeight="bold" m={0}>References Collection</Text>
//                 <Box
//                   position="absolute"
//                   bottom="0"
//                   left="0"
//                   right="0"
//                   h="5px"
//                   bg="#ecc94b"
//                   borderRadius="md"
//                 />
//               </Box>
//             </GridItem>
//             <GridItem>
//               <Box bg="white" boxShadow="-1px 7px 7px 2px #02428d"borderRadius="md" p={{base:'4', md:'8'}} textAlign="center" position="relative">
//                 <Text fontWeight="bold" m={0}>Gap Identification</Text>
//                 <Box
//                   position="absolute"
//                   bottom="0"
//                   left="0"
//                   right="0"
//                   h="5px"
//                   bg="#ecc94b"
//                   borderRadius="md"
//                 />
//               </Box>
//             </GridItem>
//             <GridItem>
//               <Box bg="white"boxShadow="-1px 7px 7px 2px #02428d" borderRadius="md" p={4} textAlign="center" position="relative">
//                 <Text fontWeight="bold" m={0}>Annotated Bibliography</Text>
//                 <Box
//                   position="absolute"
//                   bottom="0"
//                   left="0"
//                   right="0"
//                   h="5px"
//                   bg="#ecc94b"
//                   borderRadius="md"
//                 />
//               </Box>
//             </GridItem>
//             <GridItem>
//               <Box bg="white" boxShadow="-1px 7px 7px 2px #02428d" borderRadius="md" p={4} textAlign="center" position="relative">
//                 <Text fontWeight="bold" m={0}>Theorem Development</Text>
//                 <Box
//                   position="absolute"
//                   bottom="0"
//                   left="0"
//                   right="0"
//                   h="5px"
//                   bg="#ecc94b"
//                   borderRadius="md"
//                 />
//               </Box>
//             </GridItem>
//             <GridItem>
//               <Box bg="white" boxShadow="-1px 7px 7px 2px #02428d" borderRadius="md" p={4} textAlign="center" position="relative">
//                 <Text fontWeight="bold" m={0}>Theoretical Framework</Text>
//                 <Box
//                   position="absolute"
//                   bottom="0"
//                   left="0"
//                   right="0"
//                   h="5px"
//                   bg="#ecc94b"
//                   borderRadius="md"
//                 />
//               </Box>
//             </GridItem>
//           </Grid>
//         </VStack>
//          {/* Left Side - Animated Image */}
//          <MotionBox
//           position="relative"
//           animation="dancingAnimation 3s ease-in-out infinite"
//           maxW="400px"
//           mx="auto"
        
//         >
//           <Image src="/Matt Image6.jpg" alt="Literature review illustration" width={500} height={300} m={3}/>
//         </MotionBox>
//       </Flex>

//       {/* Add keyframes for animation */}
//       <style jsx>{`
//         @keyframes dancingAnimation {
//           0%, 100% {
//             transform: translate(0, 0);
//           }
//           25% {
//             transform: translate(10px, -10px);
//           }
//           50% {
//             transform: translate(0, -15px);
//           }
//           75% {
//             transform: translate(-10px, -10px);
//           }
//         }
//       `}</style>
//     </Box>
//   );
// };


const TypesOfLiteratureReview = () => {
  return (
    <Box as='div' p={8} maxW="1000px" mx="auto" pt={20}>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8}>
        {/* Right Side - Title and Cards */}
        <VStack align="start" spacing={5}>
          <Heading fontWeight={600} lineHeight={1.1} fontSize="3xl" mb={4}>
            Types of Literature Review
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem>
              <Box bg="white" boxShadow="-1px 7px 7px 2px #02428d" borderRadius="md" p={4} textAlign="center" position="relative">
                <Text fontWeight="bold" m={0}>Conceptual Framework</Text>
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  h="5px"
                  bg="#ecc94b"
                  borderRadius="md"
                />
              </Box>
            </GridItem>
            <GridItem>
              <Box bg="white" boxShadow="-1px 7px 7px 2px #02428d" borderRadius="md" p={4} textAlign="center" position="relative">
                <Text fontWeight="bold" m={0}>References Collection</Text>
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  h="5px"
                  bg="#ecc94b"
                  borderRadius="md"
                />
              </Box>
            </GridItem>
            <GridItem>
              <Box bg="white" boxShadow="-1px 7px 7px 2px #02428d"borderRadius="md" p={{base:'4', md:'8'}} textAlign="center" position="relative">
                <Text fontWeight="bold" m={0}>Gap Identification</Text>
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  h="5px"
                  bg="#ecc94b"
                  borderRadius="md"
                />
              </Box>
            </GridItem>
            <GridItem>
              <Box bg="white"boxShadow="-1px 7px 7px 2px #02428d" borderRadius="md" p={4} textAlign="center" position="relative">
                <Text fontWeight="bold" m={0}>Annotated Bibliography</Text>
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  h="5px"
                  bg="#ecc94b"
                  borderRadius="md"
                />
              </Box>
            </GridItem>
            <GridItem>
              <Box bg="white" boxShadow="-1px 7px 7px 2px #02428d" borderRadius="md" p={4} textAlign="center" position="relative">
                <Text fontWeight="bold" m={0}>Theorem Development</Text>
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  h="5px"
                  bg="#ecc94b"
                  borderRadius="md"
                />
              </Box>
            </GridItem>
            <GridItem>
              <Box bg="white" boxShadow="-1px 7px 7px 2px #02428d" borderRadius="md" p={4} textAlign="center" position="relative">
                <Text fontWeight="bold" m={0}>Theoretical Framework</Text>
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  h="5px"
                  bg="#ecc94b"
                  borderRadius="md"
                />
              </Box>
            </GridItem>
          </Grid>
        </VStack>

        {/* Left Side - Static Image */}
        <Box
          position="relative"
          maxW="400px"
          mx="auto"
        >
          <Image src="/Matt Image6.jpg" alt="Literature review illustration" width={500} height={300} m={3} />
        </Box>
      </Flex>
    </Box>
  );
};

const StepByStepComponent: React.FC = () => {
  return (
    <Box padding={5} textAlign="center" boxShadow="-9px 7px 7px 2px #02428d" m={'0px 20px'}>
      {/* Title Section */}
      <Heading as="h2" size="lg" fontWeight={500} lineHeight={1.1} mb={6}>
      Design Implementation for Research Papers
      </Heading>
      <Text fontSize="lg" mb={4} textAlign={'left'}>
      A research review is a critical and comprehensive evaluation of existing <strong> research studies,</strong><strong> methodologies, 
    </strong> and findings within a specific field. This process is essential for understanding the current state of <strong> knowledge, 
      identifying gaps,</strong> and guiding future research. 
      </Text>

      {/* Step-by-Step Section */}
      <VStack align="stretch"  spacing={2}>
        <Box  p={2}>
          <HStack spacing={2}>
            <Icon as={CheckCircleIcon} w={6} h={6} color="teal.500" />
            <Text fontSize="md" flex="1" textAlign={'left'}>
            <strong>Systematic Literature Reviews:</strong>  These reviews comprehensively search and synthesize existing research on a particular topic to identify patterns or trends.
            </Text>
          </HStack>
        </Box>
        <Box  p={2}>
          <HStack spacing={2}>
            <Icon as={CheckCircleIcon} w={6} h={6} color="teal.500" />
            <Text fontSize="md" flex="1" textAlign={'left'}>
            <strong>Meta-Analysis:</strong> This statistical technique aggregates findings from multiple studies to derive more robust conclusions.
            </Text>
          </HStack>
        </Box>
        <Box  p={2}>
          <HStack spacing={2}>
            <Icon as={CheckCircleIcon} w={6} h={6} color="teal.500" />
            <Text fontSize="md" flex="1" textAlign={'left'}>
            <strong>Narrative Reviews:</strong>A less formal review that summarizes research findings but may not follow a strict methodological framework.
            Research Review Services
            </Text>
          </HStack>
        </Box>
        <Box  p={2}>
          <HStack spacing={2}>
            <Icon as={CheckCircleIcon} w={6} h={6} color="teal.500" />
            <Text fontSize="md" flex="1" textAlign={'left'}>
            <strong>Quantitative Research Design:</strong> Quantitative research design is a research methodology focused on collecting and analyzing numerical data to identify patterns, relationships, or trends within a given population or sample. This design is primarily used when researchers seek to quantify variables and apply statistical analysis to draw conclusions.
            </Text>
          </HStack>
        </Box>
        <Box  p={2}>
          <HStack spacing={2}>
            <Icon as={CheckCircleIcon} w={6} h={6} color="teal.500" />
            <Text fontSize="md" flex="1" textAlign={'left'}>
            <strong>Mixed-Methods Research Design:</strong>Mixed-methods research design combines both quantitative and qualitative research methods in a single study to provide a comprehensive understanding of a research problem. This approach allows researchers to leverage the strengths of both approaches, collecting numerical data through quantitative methods (such as surveys or experiments) and descriptive, narrative data through qualitative methods (such as interviews or focus groups).
            </Text>
          </HStack>
        </Box>
        <Box  p={2}>
          <HStack spacing={2}>
            <Icon as={CheckCircleIcon} w={6} h={6} color="teal.500" />
            <Text fontSize="md" flex="1" textAlign={'left'}>
            <strong>Descriptive Research Design:</strong>Descriptive research design is a type of research methodology used to describe the characteristics of a phenomenon or the relationship between variables without manipulating them. It primarily focuses on "what" rather than "why" or "how," aiming to provide an accurate portrayal of the current state of affairs. 
            </Text>
          </HStack>
        </Box>
        <Box  p={2}>
          <HStack spacing={2}>
            <Icon as={CheckCircleIcon} w={6} h={6} color="teal.500" />
            <Text fontSize="md" flex="1" textAlign={'left'}>
            <strong>Experimental Research Design:</strong>A less formal review that summarizes research findings but may not follow a strict methodological framework.
            Research Review Services
            </Text>
          </HStack>
        </Box>
        
      </VStack>
    </Box>
  );
};

const FullProcessComponent = () => {
    return (
      <Box>
        <ThesisWritingServiceComponent />
        <ContentBox />
        <StepByStepComponent />
        <TypesOfLiteratureReview />
      </Box>
    );
  };
  
  export default FullProcessComponent;
