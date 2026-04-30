import React from 'react';
import { Box, Center, Text, Flex, Icon, Link, Heading, Image, Stack  } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useState } from "react";



const AboutUsComponent: React.FC = () => {
  return (
    <Box position="relative" h={{ base: "40vh", md: "50vh", lg: "60vh" }} mb={10}>
      <Box
        backgroundImage="url('abous.png')" // Replace with your image URL
        backgroundSize="cover"
        backgroundPosition="center"
        h="100%"
        w="100%"
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgColor: '#02428d',
          opacity: 0.5, // Overlay opacity
          zIndex: 2,
        }}
      />
      <Box position="relative" zIndex={2} p={{ base: 4, md: 20 }} color="white">
        <Center>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mt={{ base: 10, md: 20 }} color="white">
            Pulished Researchs
          </Text>
        </Center>
        <Flex alignItems="center" justifyContent="center" mt={3}>
          <Link href="/" fontSize={{ base: "sm", md: "lg" }} mr={2} color="white">
            Home
          </Link>
          <Icon as={ArrowForwardIcon} boxSize={{ base: 4, md: 5 }} />
          <Text fontSize={{ base: "sm", md: "lg" }} ml={2} color="white">
            Pulished Researchs
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};


const CenteredHeadingWithTextAndImage = () => {
  return (
    <Box p={5} maxW="1200px" mx="auto">
      {/* Centered Heading */}
      <Heading as="h2" textAlign="center" mb={6} fontSize={{ base: '2xl', md: '4xl' }}>
      Publishing services for academic researchers
      </Heading>

      {/* Content Section */}
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
        {/* Left Section: Paragraph */}
        <Box flex="1" pr={{ base: 0, md: 8 }} mb={{ base: 6, md: 0 }}>
          <Text lineHeight="1.8" fontSize="md" textAlign="justify">
          Benefits of Publishing Services Explain the advantages of using publishing services, such as faster publication, 
          compliance with journal guidelines, and improved chances of acceptance.
          Discuss common obstacles researchers face in publishing and how professional services can help overcome these issues.
            <br /><br />
            Address typical questions researchers might have about academic publishing services, like "How do publishing services increase my chances of acceptance?"
             or "What should I look for in a publishing service?".Outline the steps involved in publishing a research paper, and highlight how professional services can simplify each step.

            <br /><br />
            Our experts bring a wealth of knowledge from diverse backgrounds, ensuring a multi-faceted approach
            to each project. We aim to not only meet industry standards but to set new ones through our innovative
            approach and commitment to quality.
          </Text>
        </Box>

        {/* Right Section: Image */}
        <Box flex="1">
          <Image
            src="6206973.jpg"
            alt="Our approach to excellence"
            borderRadius="md"
            // boxShadow="md"
          />
        </Box>
      </Flex>
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
    <Box textAlign="center" py={10} >
      <Heading as="h2" size="lg" mb={8}>
        Our Publication Services
      </Heading>
      <Flex justify="center" gap={4} wrap="wrap">
        <PublicationCards
          title="UGC Journal Support"
          description="Get expert support for publishing in UGC-approved journals. We guide you through the process, from manuscript preparation to submission, ensuring compliance with UGC standards. "
          imageSrc="UGC.avif" // replace with UGC image URL
        />
        <PublicationCards
          title="Scopus Publishing Help"
          description="Maximize your chances of publishing in SCOPUS-indexed journals with our expert guidance. We offer tailored support for manuscript preparation, journal selection, and submission, ensuring your work meets SCOPUS standards."
          imageSrc="Scopus.avif" // replace with Web of Science image URL
        />
        <PublicationCards
          title="Web of Science Assistance"
          description="Enhance your chances of publishing in Web of Science-indexed journals with our dedicated support. From manuscript development to submission, we ensure compliance with Web of Science standards."
          imageSrc="web science.png" // replace with Scopus image URL
        />
      </Flex>
      <Flex justify="center" gap={4} wrap="wrap" mt={8}>
        <PublicationCards
          title="Q1 Journal Submissions"
          description="Increase your chances of success with Q1 journal submissions through our specialized support. We assist with manuscript refinement, journal selection, and compliance with top-tier standards."
          imageSrc="Q1Journal.png " // replace with UGC image URL
        />
        <PublicationCards
          title="Academic Journal Formatting"
          description="Ensure your manuscript meets academic journal formatting standards with our expert services. We handle layout, citation style, and structure, aligning with your target journal’s guidelines. Streamline your submission process with precise, professional formatting support."
          imageSrc="journal.png" // replace with Web of Science image URL
        />
        <PublicationCards
          title="Research Paper Submission"
          description="Streamline your research paper submission with our comprehensive support. From final edits to compliance with journal guidelines, we ensure a smooth submission process. Maximize your paper's acceptance potential with our expert assistance."
          imageSrc="rchsub.png" // replace with Scopus image URL
        />
      </Flex>
    </Box>
  );
};



const FullProcessComponent = () => {
  return (
    <Box>
      <AboutUsComponent/>    
      <CenteredHeadingWithTextAndImage />
      <PublicationServices />
      {/* <PublicationCards/> */}
    </Box>
  );
};

export default FullProcessComponent;