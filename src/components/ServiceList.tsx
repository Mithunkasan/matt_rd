
import React from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Center,
  Image,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useScrollTransition from '../templates/usescrolltransition';

const services = [
  {
    title: 'Research Proposal Writing',
    description:
      "Writing a research article is a crucial part of the academic process, and publishing it in reputed journals can significantly contribute to one's career growth. At the same time, getting a research article published in top journals such as UGC, SCOPUS, SCI, and Web of Science is essential for academic recognition. ",
    imageUrl: 'service-article.png',
    link: '/ServiceDetail/Research-Proposal-Writing', // Static link
  },
  {
    title: 'Thesis/Dissertation Writing',
    description:
      "Writing a thesis or dissertation is a critical milestone in your academic journey, and it's essential to approach it with the right strategies and resources. Our expert thesis and dissertation writing services are designed to provide you with step-by-step support throughout the process,  academic standards.",
    imageUrl: 'service-thesis.png',
    link: '/ServiceDetail/Thesis-and-Dissertation-Writing', // Static link
  },
  {
    title: 'Publication & Journal Support',
    description:
      'Publishing your research in reputable journals is crucial for advancing your academic careers. Our Publication & Journal Support services offer expert guidance through every step of the publication process, ensuring your work is presented standards of top-tier academic journals and publication supported.',
    imageUrl: 'service-articles.png',
    link: '/ServiceDetail/Publication-Journal-Support', // Static link
  },
  {
    title: 'PhD Defense Preparation',
    description:
      'The PhD defense is one of the most crucial moments in your academic journey. Preparing thoroughly can make all the difference between success and setbacks. Our PhD Defense Preparation services are designed to help you confidently present your research, address challenging questions dissertation committee.',
    imageUrl: 'service-publication.png',
    link: '/ServiceDetail/Literature-Review-Research-Design', // Static link
  },
  {
    title: 'Grant Writing & Ethical Compliance',
    description:
      'Securing funding through grant writing is crucial for the success of any research project, but it is equally important to adhere to ethical compliance throughout the process. Our Grant Writing & Ethical Compliance services are tailored to help ensures in  your research follows ethical guidelines.',
    imageUrl: 'service-plagram.png',
    link: '/ServiceDetail/Grant-Writing-Ethical-Compliance', // Static link
  },
  {
    title: 'Data Collection & Analysis',
    description:
      "Data collection and analysis are fundamental components of any research project. Whether you are conducting qualitative or quantitative research, gathering reliable data and analyzing it accurately is crucial for drawing meaningful conclusions. Our Data Collection & Analysis services offer are's your comprehensive in our matt research solutions. ",
    imageUrl: 'service-proposal.png',
    link: '/ServiceDetail/Data-Collection-Analysis', // Static link
  },
  {
    title: 'Workshops and Training',
    description:
      "Workshops and training are essential for enhancing professional and academic skills. Whether you're an individual looking to improve your expertise or a team seeking to enhance your capabilities, our Workshops and Training services offer tailored learning experiences that empower you to achieve your goals. We design workshops and training.",
    imageUrl: 'service-journal.png',
    link: '/ServiceDetail/Wrokshops-Training', // Static link
  },
  {
    title: 'Implementation Support',
    description:
      "Effective implementation support is key to the success of any project or strategy. Whether you're rolling out new software, deploying a new research methodology, or launching an organizational change initiative, our Implementation Support services ensure that every step is executed seamlessly, from planning to completion.  ",
    imageUrl: 'service-project.png',
    link: '/ServiceDetail/Project-Development-Implementation', // Static link
  },
];

const ServiceCard = ({ title, description, imageUrl, link }) => {
  const router = useRouter(); // Use the useRouter hook to navigate

  const handleLearnMoreClick = () => {
    router.push(link); // Navigate to the respective page when button is clicked
  };

  return (
    <Box
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
      padding={4}
      bg="white"
      mb={{base:'6',md:'8'}}
      position="relative"
      className='component1'
    >
      <Center position="relative" top="-30px" mb={0} zIndex={1}>
        <Box position="relative" width="70px" height="80px" zIndex={2}>
          <Box
            position="absolute"
            width="70px"
            height="80px"
            bg="#02428d"
            clipPath="polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            boxShadow="lg"
            top="-15px"
            zIndex={3}
          >
            <Image src={imageUrl} boxSize={8} alt={title} />
          </Box>
        </Box>
      </Center>
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text mb={4} color="gray.500" fontSize="sm">
        {description}
      </Text>
      {/* Only add "Learn More" button functionality for specific services */}
      <Button
        onClick={handleLearnMoreClick} // Trigger the navigation function
        color="white"
        textDecoration="none"
        bg={' #02428d'}
        variant="solid"
        size="md"
        _hover={{
          bg: '#ecc94b',
          color: 'black',
        }}
      >
        LEARN MORE
      </Button>
    </Box>
  );
};

const WhatWeDo = () => {
  return (
    <Box textAlign="center" py={10} px={5} bg="#f9fafb">
      <Heading fontSize="4xl" color="#333" fontWeight="bold" mb={5} className='component'>
        Our Services
      </Heading>
      <Text mb={12} fontSize="lg" className='component'>
        Our team of professionals delivers expert solutions, focused on quality and client satisfaction.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            link={service.link} 
             // Pass the link to the card
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WhatWeDo;

