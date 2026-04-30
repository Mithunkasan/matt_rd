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
    Wrap,
    WrapItem,
    List, 
    keyframes,
    ListItem,
    UnorderedList
  }
  from '@chakra-ui/react';
  import { FaWhatsapp, FaShieldAlt, FaUserShield, FaClock, } from 'react-icons/fa';
  import { StarIcon,CheckCircleIcon } from "@chakra-ui/icons";
  import { FiSearch } from 'react-icons/fi';
  import { MdArrowForward } from "react-icons/md";
import { useState } from 'react'; 
import ContactForm from '../ServicePageForm';
import Head from 'next/head';

  
  
  export const ThesisWritingServiceComponents = () => {
    const handleClick = () => {
      // Navigate to WhatsApp link immediately
      window.location.href = 'https://wa.me/+918825735141';
    };
    return (

      <>
      <Head>
              <title>SCOPUS & Journal Publication Support | MATT Solutions</title>
              <meta
                name="description"
                content="Get your research published in high-impact journals with MATT Solutions. Expert SCOPUS publication support and peer-reviewed guidance."
              />
              <meta
                name="keywords"
                content="SCOPUS publication, journal support, research publication, peer-reviewed journals, MATT Solutions"
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
            Publication & Journal Support
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
            fontSize={{base:'md',md:'lg'}}
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

  const ResearchSection = () => {
    return (
      <Box textAlign="center" py={5} mt={3}>
        {/* Title Section */}
        <Heading as="h2" size="xl" lineHeight={1.1} fontWeight={500} mb={4}>
        Publication & Journal Support
        </Heading>
        
        {/* Paragraph Section */}
        <Text fontSize="lg" maxW="1300px" mx="auto" p={{base:'0px 30px',md:'0'}} textAlign={'justify'}>
        Our <strong> Publication & Journal Support </strong>services are designed to assist researchers and academics in navigating the complexities of publishing their work in high-impact journals. We offer comprehensive support, from selecting the right journal to manuscript preparation, submission, and revision. With a focus on improving the quality and presentation of your research, we ensure your work meets the standards required by top-tier journals. Our expert team also provides guidance on addressing reviewer comments and enhancing the chances of acceptance. Whether you’re aiming for a<strong> SCOPUS or SCI indexed journal,</strong> our tailored services help you achieve your publication goals with confidence and professionalism.        </Text>
      </Box>
    );
  };

  
const JournalPublicationSupport = () => {
  return (
    <Box
      p={{ base: 4, md: 6, lg: 8 }} // Padding changes across breakpoints
      borderRadius="md"
      m={{ base: '0 16px', md: '0 60px', lg: '0 120px' }} // Margins adjusted for screen sizes
    >
      {/* Heading with responsive font size and alignment */}
      <Heading
        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} // Font size adjustments for each breakpoint
        mb={{ base: 3, md: 5 }} // Margins to create spacing from text below
        textAlign="center" // Center alignment for all screen sizes
      >
        Comprehensive Assistance for Journal Publication
      </Heading>
      
      {/* Description Text with responsive font size and alignment */}
      <Text
        fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} // Font sizes adjusted for readability on each screen
        mb={{ base: 4, md: 6 }} // Spacing between description and button section
        textAlign={{ base: 'left', md: 'justify' }} // Text aligned left for small, justified for medium and up
      >
        Whether you're submitting your first paper or preparing a complex study for publication, we provide comprehensive assistance for all aspects of your journal publication process. At <strong>Matt Research Solutions</strong>, our expert team offers tailored guidance through each step—from manuscript preparation and journal selection to peer review and final submission. We specialize in ensuring your research meets the highest academic standards, helping you navigate the intricacies of journal requirements, formatting, and submission protocols. With our expertise, you can streamline the publication process and increase the likelihood of acceptance in reputable journals. Trust <strong>Matt Research Solutions</strong> for reliable, efficient, and professional assistance in every aspect of your publication journey.
      </Text>

      {/* Button Wrap section for responsiveness and centered alignment */}
      <Wrap
        spacing={{ base: 4, md: 3, lg: 4 }} // Adjust spacing between buttons for different screens
        justify="center" // Centered buttons for all screen sizes
      >
        {/* Each button wrapped in WrapItem for responsiveness */}
        {['SCOPUS', 'Q1', 'ANNEXURE', 'WOS', 'UGC', 'SCI'].map((type) => (
          <WrapItem key={type}>
            <Button
              as="a"
              href="#"
              color="white"
              bg="#02428d"
              _hover={{ bg: '#ecc94b' }}
              size={{ base: 'sm', md: 'md', lg: 'lg' }} // Adjust button size for small to large screens
              variant="solid"
              w={{ base: 'full', md: 'auto' }} // Full width on small screens, auto width on medium and up
              boxShadow="-2px 7px 7px 0px #ecc94b"
            >
              {type} JOURNAL PUBLICATION
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

  const FinancialInstitutionCard = () => {
    const logos = [
      '/scopus.png',
      '/cross.png',
      '/ESCi.png',
      '/SCi.png',
    ];
  
    return (
      <Box textAlign="center" mt={8} mb={8} px={{ base: 4, md: 8 }} >
        <Heading as="h2" size="lg" mb={10}>
          Publication Assistant
        </Heading>
        <SimpleGrid
          columns={{ base: 2, sm: 2, md: 3, lg: 4, xl: 4 }} // Adjusted for better mobile experience
          spacing={{ base: 4, md: 6 }} 
          ml={50}// Spacing can also vary based on screen size
        >
          {logos.map((logo, index) => (
            <Flex
              key={index}
              justifyContent="center"
              alignItems="center"
              p={4}
              borderRadius="md"
              bg="white"
              ml={{base: "0px", md : "40px"}}
              _hover={{ boxShadow:"-2px 7px 7px 0px #02428d"}}
            >
              <Image 
                src={logo} 
                alt={`Logo ${index + 1}`} 
                boxSize={{ base: '80px', md: '120px', lg: '150px' }} // Responsive logo sizes
              />
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    );
  };
  
  const PublicationCards = ({ title, description, imageSrc }: { title: string; description: string; imageSrc: string }) => {
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
          <Text fontWeight="bold" color={'white'} fontSize={'2xl'}>{title}</Text>
          {isHovered && (
            <Text fontSize="sm" mt={1}  color={'white'} >
              {description}
            </Text>
          )}
        </Box>
      </Box>
    );
  };
  
  const PublicationServices = () => {
    return (
      <Box textAlign="center" py={{base:'5', md:'10'}}   p={{
        base:' 0px 1px',md:'0'
      }}>
        <Heading as="h2" size="lg" mb={8}>
          Our Publication Services
        </Heading>
        <Flex justify="center" gap={4} wrap="wrap" p={{
          base:'3',md:'0'
        }}>
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
        <Flex justify="center" gap={4} wrap="wrap" mt={{base:'0',md:'8'}} p={{
          base:'0px 10px',md:'0'
        }}>
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


  const JournalPublicationComponent = () => {
    return (
      <Box maxW="1200px" mx="auto" py={10} px={6} position="relative">
        {/* Main Heading */}
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          What is <span style={{ color: '#ecc94b' }}>Journal Paper Publication?</span>
        </Heading>
  
        {/* Content Grid */}
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gap={10}
          mt={8}
          alignItems="start"
        >
          {/* Left Section: Description */}
          <Box>
            <Text fontSize="md" color="gray.700">
              In Scholar Paper, Publication is a scholastic work that is generally distributed in a scholastic journal. It contains unique exploration results or audits existing outcomes you can publish your journal papers - like Springer, IEEE, Wiley, Elsevier, SCI, Scopus, and more. Publishing with Ondezx requires some tips. First, find out more about a journal, read more on preparing your paper, read more on how to submit and revise, in case of any problems contact the Support Center, read more about the article tracking service, read more on sharing your research.
            </Text>
          </Box>
  
          {/* Right Section: Publication Procedure */}
          <Box>
            <Heading as="h3" size="md" mb={4}>
              Journal Paper Publication Procedure
            </Heading>
            <Stack spacing={3} align="flex-start">
              <Flex align="center" m={0} p={0}>
                <Icon as={CheckCircleIcon} color="green.500" mr={2} />
                <Text>Prepare Your Manuscript with good quality</Text>
              </Flex>
              <Flex align="center" m={0} p={0}>
                <Icon as={CheckCircleIcon} color="green.500" mr={2} />
                <Text>Check your article whether it has plagiarism in software</Text>
              </Flex>
              <Flex align="center" m={0} p={0}>
                <Icon as={CheckCircleIcon} color="green.500" mr={2} />
                <Text>Change your article to journal Format</Text>
              </Flex>
            </Stack>
          </Box>
        </Grid>
  
        {/* Academic Resources Section with Bottom Image Inside */}
        <Box mt={10} textAlign="center" position="relative">
          <Heading as="h3" size="lg" mb={4}>
            Academic Resources for Journal Publication
          </Heading>
          <Grid
            templateColumns={{ base: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }}
            gap={6}
            mt={4}
            justifyContent="center"
            textAlign="center"
          >
            {/* Column 1 */}
            <Box>
              <Stack spacing={3} align="flex-start">
                <Flex align="center">
                  <Icon as={CheckCircleIcon} color="green.500" mr={2} />
                  <Text fontWeight="bold">Writing</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={CheckCircleIcon} color="green.500" mr={2} />
                  <Text fontWeight="bold">Checking</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={CheckCircleIcon} color="green.500" mr={2} />
                  <Text fontWeight="bold">Grammar</Text>
                </Flex>
              </Stack>
            </Box>
  
            {/* Column 2 */}
            <Box>
              <Stack spacing={3} align="flex-start">
                <Flex align="center">
                  <Icon as={CheckCircleIcon} color="green.500" mr={2} />
                  <Text fontWeight="bold">Manuscript</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={CheckCircleIcon} color="green.500" mr={2} />
                  <Text fontWeight="bold">Preparation</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={CheckCircleIcon} color="green.500" mr={2} />
                  <Text fontWeight="bold">Journal Submissions</Text>
                </Flex>
              </Stack>
            </Box>
  
            {/* Column 3 */}
            <Box>
              <Stack spacing={3} align="flex-start">
                <Flex align="center">
                  <Icon as={CheckCircleIcon} color="green.500" mr={2} />
                  <Text fontWeight="bold">Editing</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={CheckCircleIcon} color="green.500" mr={2} />
                  <Text fontWeight="bold">Formatting</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={CheckCircleIcon} color="green.500" mr={2} />
                  <Text fontWeight="bold">Proofreading</Text>
                </Flex>
              </Stack>
            </Box>
          </Grid>
        </Box>
      </Box>
    );
  };

  const FullProcessComponent = () => {
    return (
      <Box>
         <ThesisWritingServiceComponents />
         <ResearchSection />
         <JournalPublicationSupport />
         <PublicationServices />
         <FinancialInstitutionCard />
         <JournalPublicationComponent />
      </Box>
    );
  };
  
  export default FullProcessComponent;