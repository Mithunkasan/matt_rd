
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Text,
//   Flex,
//   Image,
//   Heading,
//   Button,
//   Icon,
//   useMediaQuery,
// } from "@chakra-ui/react";
// import { CheckCircleIcon } from "@chakra-ui/icons";

// interface Feature {
//   id: number;
//   icon: typeof CheckCircleIcon;
//   title: string;
// }

// interface Service {
//   icon: string;
//   photo: string;
//   title: string;
//   text: string;
//   features: Feature[];
// }

//   const services = [
//        {
//          icon: "re.png",
//          photo: "research-service1.jpg",
//          title: "Research article writing",
//          text: "Writing a research article is a crucial part of the academic process, and publishing it in reputed journals can significantly contribute to one's career growth. At the same time, getting a research article published in top journals such as UGC, SCOPUS, SCI, and Web of Science is essential for academic recognition.",
//          features: [
//            {
//              id: 1,
//              icon: CheckCircleIcon,
//              title: "Impact of Artificial Intelligence on Modern Healthcare Systems",
//            },
//            {
//              id: 2,
//              icon: CheckCircleIcon,
//              title: "Innovative Approaches to Enhancing Energy Efficiency",
//            },
//            {
//              id: 3,
//              icon: CheckCircleIcon,
//              title:
//                "Examining the transformative role of AI in modern medical practices.",
//            },
//            {
//              id: 4,
//              icon: CheckCircleIcon,
//              title:
//                "Exploring breakthrough technologies for sustainable and efficient energy solutions.",
//            },
//          ],
//        },
//        {
//          icon: "cs.webp",
//          photo: "thesis service3.jpg",
//          title: "Thesis/Dissertation writing",
//          text: "At MATT, we understand the challenges and stresses that come with writing a thesis or dissertation, which is why we offer a comprehensive range of services to support you throughout the process Our team of experienced writers and editors have helped.",
//          features: [
//            {
//              id: 1,
//              icon: CheckCircleIcon,
//              title: " Comprehensive Support from Research to Final Submission.",
//            },
//            {
//              id: 2,
//              icon: CheckCircleIcon,
//              title: "Crafting Well-Researched, High-Quality Work.",
//            },
//            {
//              id: 3,
//              icon: CheckCircleIcon,
//              title:
//                "End-to-End Dissertation Assistance Structured, Clear, and Polished Content.",
//            },
//            {
//              id: 4,
//              icon: CheckCircleIcon,
//              title: "Professional Writing and Editing for Academic Success.",
//            },
//          ],
//        },
//        {
//          icon: "support.avif",
//          photo: "phd service5.jpg",
//          title: "Publication support",
//          text: "At MATT, we understand that publication in high-impact journals is crucial for researchers and scholars who want to advance their careers and make a meaningful contribution to their fields. Thats why we offer comprehensive publication support services that are needs of researchers.",
//          features: [
//            {
//              id: 1,
//              icon: CheckCircleIcon,
//              title:
//                "Professional Editing and Formatting for High-Quality Submissions",
//            },
//            {
//              id: 2,
//              icon: CheckCircleIcon,
//              title:
//                "Publication Success Comprehensive Assistance for Academic Journals",
//            },
//            {
//              id: 3,
//              icon: CheckCircleIcon,
//              title: "Enhancing Your Work for Impactful Journals.",
//            },
//            {
//              id: 4,
//              icon: CheckCircleIcon,
//              title:
//                "Expert Publication Guidance From Manuscript Preparation to Submission.",
//            },
//          ],
//        },
//        {
//          icon: "phd.png",
//          photo: "phd-assistance-service7.jpg",
//          title: "Phd end to end assistance",
//          text: "MATT is a company that provides end-to-end assistance to Ph.D. students. Our goal is to help students navigate the complexities of the doctoral process, from research design and data analysis to manuscript preparation and defense. We recognize that the Ph.D. journey.",
//          features: [
//            {
//              id: 1,
//              icon: CheckCircleIcon,
//              title: " Full-Scope Support for Every Stage of Your Doctorate",
//            },
//            {
//              id: 2,
//              icon: CheckCircleIcon,
//              title: "Expert Support from Proposal to Dissertation",
//            },
//            {
//              id: 3,
//              icon: CheckCircleIcon,
//              title:
//                "PhD Success Path Comprehensive Guidance from Research to Defense.",
//            },
//            {
//              id: 4,
//              icon: CheckCircleIcon,
//              title:
//                "Complete PhD Aid End-to-End Assistance for Your Academic Journey.",
//            },
//          ],
//        },
//        {
//          icon: "review.png",
//          photo: "proposal service6.jpg",
//          title: "Proposal writing/Editing",
//          text: "Our team of experienced Ph.D. writers and editors has a deep understanding of the standards and expectations of academic institutions, and we are committed to helping you craft a proposal that stands out from the competition Whether you need assistance.",
//          features: [
//            {
//              id: 1,
//              icon: CheckCircleIcon,
//              title:
//                "Winning Proposals Crafting Compelling, Fundable Research Proposals",
//            },
//            {
//              id: 2,
//              icon: CheckCircleIcon,
//              title: "Proposal Mastery Expert Guidance for Strong, Clear Submissions",
//            },
//            {
//              id: 3,
//              icon: CheckCircleIcon,
//              title:
//                "Proposal Perfection Professional Writing and Editing for Success.",
//            },
//            {
//              id: 4,
//              icon: CheckCircleIcon,
//              title:
//                "Polished Proposals Transforming Ideas into Persuasive Proposals.",
//            },
//          ],
//        },
//        {
//          icon: "stock.webp",
//          photo: "plag service10.jpg",
//          title: "Plagiarism free writing/Editing",
//          text: "MATT is a professional writing and editing company dedicated to providing high-quality, plagiarism-free content to clients across various industries. We understand the importance of original and authentic content and we take pride in ensuring that all of our work is completely.",
//          features: [
//            {
//              id: 1,
//              icon: CheckCircleIcon,
//              title: "Original Writing 100% plagiarism-free, crafted from scratch.",
//            },
//            {
//              id: 2,
//              icon: CheckCircleIcon,
//              title: "Authentic Editing Refined and unique content, plagiarism-free.",
//            },
//            {
//              id: 3,
//              icon: CheckCircleIcon,
//              title: "Unique Content Editing that preserves originality and clarity.",
//            },
//            {
//              id: 4,
//              icon: CheckCircleIcon,
//              title:
//                "Plagiarism-Proof Guaranteed original writing with thorough checks.",
//            },
//          ],
//        },
//        {
//          icon: "inin.webp",
//          photo: "proof-read-service8.jpg",
//          title: "Proofreading services",
//          text: "MATT is a professional proofreading service provider that is dedicated to helping individuals, businesses, and organizations ensure that their written content is error-free and polished to perfection.We understand the importance of clear, concise, and grammatically correct writing in fast-paced digital world.",
//          features: [
//            {
//              id: 1,
//              icon: CheckCircleIcon,
//              title: "Perfect Proofreading Eliminating Mistakes with Care",
//            },
//            {
//              id: 2,
//              icon: CheckCircleIcon,
//              title: "Polishing Every Detail for Professional and Perfect Results.",
//            },
//            {
//              id: 3,
//              icon: CheckCircleIcon,
//              title: "Enhancing Clarity, Accuracy, and Readability in Your Writing.",
//            },
//            {
//              id: 4,
//              icon: CheckCircleIcon,
//              title:
//                "Eliminating Errors and Improving Quality for a Polished Finish.",
//            },
//          ],
//        },

//      // ... other services ...
//   ];


// const ServiceComponent: React.FC = () => {
//   const [active, setActive] = useState<number | null>(0);
//   const [hovered, setHovered] = useState<number | null>(null);
//   const [selectedService, setSelectedService] = useState<Service>(services[0]);
//   const [isLargerThanSmallLaptop] = useMediaQuery("(min-width: 1200px)");
//   const [isTablet] = useMediaQuery("(min-width: 768px) and (max-width: 991px)");
//   const [isMobile] = useMediaQuery("(max-width: 767px)");

//   useEffect(() => {
//     if (active !== null) {
//       setSelectedService(services[active]);
//     }
//   }, [active]);

//   const handleClick = (index: number) => {
//     setActive(active === index ? null : index);
//     setSelectedService(services[index]);
//   };

//   const handleMouseEnter = (index: number) => {
//     if (active === null) {
//       setHovered(index);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (active === null) {
//       setHovered(null);
//     }
//   };

//   return (
//     <Flex
//       direction="column"
//       p={isMobile ? "4" : isTablet ? "7" : "9"}
//       color="white"
//       h={isMobile ? "100vh" : isTablet ? 'auto' :'100vh'}
//       overflow="hidden"
//       mt="0px"
//     >
//       <Box mb={6}>
//         <Heading fontSize={isMobile ? "2xl" : "3xl"} textAlign="center" mb="16px" color="black">
//           Our Services
//         </Heading>
//         <Text
//           color="black"
//           justifyContent="center"
//           textAlign="center"
//           fontSize={isMobile ? "md" : isTablet ? "lg" : "20px"}
//         >
//           Our team of professionals delivers expert solutions, focused on quality and client satisfaction.
//         </Text>
//       </Box>

//       <Flex
//         direction={isMobile ? "column" : "row"}
//         h="100%"
//         alignItems={isMobile ? "center" : "flex-start"}
//       >
//         <Flex
//           direction="column"
//           w={isMobile ? "100%" : isTablet ? "40%" : "30%"}
//           pr={isMobile ? "0" : "4"}
//           h={isMobile ? "auto" : "100vh"}
//           overflowY="auto"
//           sx={{
//             "::-webkit-scrollbar": {
//               width: "8px",
//               backgroundColor: "#1a202c",
//             },
//             "::-webkit-scrollbar-thumb": {
//               backgroundColor: "#2d3748",
//               borderRadius: "6px",
//             },
//             "::-webkit-scrollbar-thumb:hover": {
//               backgroundColor: "#4a5568",
//             },
//           }}
//           mb={isMobile ? "4" : "0"}
//         >
//             {services.map((service, index) => (
//               <Box
//                 key={index}
//                 p="4"
//                 cursor="pointer"
//                 onClick={() => handleClick(index)}
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={handleMouseLeave}
//                 borderRadius="md"
//                 mb="2"
//                 bg={active === index ? "blue.400" : hovered === index ? "blue.100" : ""}
//               >
//                 <Flex alignItems="center">
//                   <Image
//                     src={service.icon}
//                     alt={service.title}
//                     boxSize={isTablet ? "30px" : "40px"}
//                     borderRadius="full"
//                     mr="3"
//                   />
//                   <Text fontWeight="bold" fontSize={isMobile ? "md" : isTablet ? "sm" : "xl"} color="black">
//                     {service.title}
//                   </Text>
//                 </Flex>
//               </Box>
//             ))}
//           </Flex>

//           <Flex
//             w={isMobile ? "100%" : isTablet ? "60%" : "70%"}
//             h="100%"
//             position="relative"
//             overflow="hidden"
//             direction={isMobile ? "column" : "row"}
//           >
//             <Flex
//               w="100%"
//               h="100%"
//               p={isMobile ? "2" : isTablet ? "2" : "5"}
//               justifyContent="space-between"
//               alignItems={isMobile ? "center" : "flex-start"}
//               transition="all 0.5s ease"
//               opacity={1}
//               zIndex={1}
//             >
//               <Box
//                 w={isMobile ? "100%" : isTablet ? "100%" : "60%"}
//                 display="flex"
//                 flexDirection="column"
//                 justifyContent="flex-start"
//                 alignItems="center"
//                 borderRadius="md"
//                 p="1"
//               >
//                 <Image
//                   src={selectedService.photo}
//                   alt={selectedService.title}
//                   borderRadius="md"
//                   width={isMobile ? "60%" : isTablet ? "20%" : "40%"}
//                   height="auto"
//                   mb="2"
//                 />
//                 <Text fontSize={isTablet ? 'sm' : 'lg'} fontWeight="bold" textTransform="uppercase">
//                   {selectedService.title}
//                 </Text>
//                 <Text textAlign="center" mb="0" fontSize={isTablet ? 'sm' : 'lg'} >
//                   {selectedService.text}
//                 </Text>
//                 {/* <Flex direction="row" wrap="wrap" mb="0" w="100%" justifyContent="space-between">
//                   {selectedService.features.map((feature) => (
//                     <Box
//                       key={feature.id}
//                       w={isMobile ? "100%" : isTablet ? "0%" : "48%"}
//                       mb={isMobile ? "2" : "0"}
//                       p="0"
//                       borderRadius="md"
//                       display="flex"
//                       alignItems="center"
//                     >
//                       <Icon as={feature.icon} color="blue.400" boxSize="6" mr="3" />
//                       <Box>
//                         <Text fontSize="md" fontWeight="semibold" color="gray.700">
//                           {feature.title}
//                         </Text>
//                       </Box>
//                     </Box>
//                   ))}
//                 </Flex> */}
//                 <Flex direction="row" wrap="wrap" mb="0" w="100%" justifyContent="space-between">
//   {/* Wrapper for the first two features */}
//   <Box
//     w={isMobile ? "100%" : isTablet ? "48%" : "48%"}
//     display="flex"
//     flexDirection="column"
//     p="0"
//   >
//     {selectedService.features.slice(0, 2).map((feature) => (
//       <Box
//         key={feature.id}
//         w="100%" // Full width for each feature inside this div
//         mb="2"
//         p="0"
//         borderRadius="md"
//         display="flex"
//         alignItems="center"
//       >
//         <Icon as={feature.icon} color="blue.400" boxSize={isTablet ? '4' : '6'} mr={isTablet ? '1' : '3'} />
//         <Box>
//           <Text fontSize={isTablet ? 'sm' : 'lg'} fontWeight="semibold" color="gray.700">
//             {feature.title}
//           </Text>
//         </Box>
//       </Box>
//     ))}
//   </Box>

//   {/* Wrapper for the next two features */}
//   <Box
//     w={isMobile ? "100%" : isTablet ? "48%" : "48%"}
//     display="flex"
//     flexDirection="column"
//     p="0"
//   >
//     {selectedService.features.slice(2, 4).map((feature) => (
//       <Box
//         key={feature.id}
//         w="100%" // Full width for each feature inside this div
//         mb="2"
//         p="0"
//         borderRadius="md"
//         display="flex"
//         alignItems="center"
//       >
//         <Icon as={feature.icon} color="blue.400" boxSize={isTablet ? '4' : '6'} mr={isTablet ? '1' : '3'} />
//         <Box>
//           <Text fontSize={isTablet ? 'sm' : 'lg'} fontWeight="semibold" color="gray.700">
//             {feature.title}
//           </Text>
//         </Box>
//       </Box>
//     ))}
//   </Box>
// </Flex>

//               </Box>

//             {!isTablet && (
//                     <Box
//                       w={isMobile ? "100%" : isTablet ? "0%" : "40%"}
//                       display="flex"
//                       flexDirection="column"
//                       justifyContent="flex-start"
//                       p="4"
//                     >
//                       <Flex direction="column" w="100%" mb="3">
//                         {[
//                           {
//                             id: 1,
//                             imgSrc: "/stress.png",
//                             title: "Less Stress",
//                             description: "Assist in prioritizing revisions based on urgency or importance.",
//                           },
//                           {
//                             id: 2,
//                             imgSrc: "/top.png",
//                             title: "Top Quality",
//                             description: "Regularly enhance work quality and maintain integrity.",
//                           },
//                           {
//                             id: 3,
//                             imgSrc: "/clock.png",
//                             title: "Time Saver",
//                             description: "Manage paperwork and deadlines to keep projects moving smoothly.",
//                           },
//                         ].map((card) => (
//                           <Box
//                             key={card.id}
//                             p="3"
//                             mb="2"
//                             borderRadius="md"
//                             boxShadow="lg"
//                             display="flex"
//                             alignItems="center"
//                           >
//                             <Image src={card.imgSrc} alt={card.title} boxSize="9" w="15%" mr="3" />
//                             <Box>
//                               <Text fontWeight="bold">{card.title}</Text>
//                               <Text>{card.description}</Text>
//                             </Box>
//                           </Box>
//                         ))}
//                       </Flex>
//                       <Flex justifyContent="center" mt="0" width="full" direction="column">
//                         <Button bgColor="blue" color="white" size={isMobile ? "md" : "lg"} mb={3} _hover={{ bgColor: "blue" }}>
//                           Learn More
//                         </Button>
//                         <Button bgColor="gold" color="white" size={isMobile ? "md" : "lg"} _hover={{ bgColor: "gold" }}>
//                           Enquiry Form
//                         </Button>
//                       </Flex>
//                     </Box>
//                   )}

//           </Flex>
//         </Flex>
//       </Flex>
//     </Flex>
//   );
// };

// export default ServiceComponent;



// import { Box, Flex, Text, Button, Image, Heading, Grid, GridItem } from '@chakra-ui/react';

// interface ServiceCardProps {
//   imageUrl: string;
//   title: string;
//   description: string;
// }

// const ServiceCard = ({ imageUrl, title, description }: ServiceCardProps) => {
//   return (
//     <Flex
//       direction="column"
//       align="center"
//       justify="space-between"
//       bg="white"
//       borderRadius="20% 50% / 40% 10%"
//       border="1px solid #02428d"
//       boxShadow="md"
//       p={6}
//       w="100%"
//       maxW="250px" // Restrict max width to prevent overflow
//       h="350px"
//       _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
//     >
//       <Image src={imageUrl} boxSize="50px" mb={1} alt={`${title} image`} />
//       <Text
//         fontSize="xl"
//         fontWeight="bold"
//         color="blue.800"
//         textAlign="center"
//         overflowWrap="break-word" // Ensure text doesn't overflow
//         whiteSpace="normal"
//         mb={0}
//       >
//         {title}
//       </Text>
//       <Text
//         fontSize="sm"
//         color="gray.600"
//         textAlign="center"
//         my={2}
//         noOfLines={0} // Limit description lines to prevent overflow
//       >
//         {description}
//       </Text>
//       <Button bg={'#02428d'} color={'white'} variant="solid" size="sm" _hover={{ bg: '#ecc94b', color: 'black' }}>
//         Read More
//       </Button>
//     </Flex>
//   );
// };

// const ServicesSection = () => {
//   return (
//     <Box bg="#" py={10} px={8}>
//       <Heading as="h1" mb={4} textAlign="center">
//         Our Services
//       </Heading>
//       <Text mb={10} textAlign="center">
//         Our team of professionals delivers expert solutions, focused on quality and client satisfaction.
//       </Text>
//       <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={6} ml={20}>
//         <GridItem>
//           <ServiceCard
//             title="Research Article Writing"
//             description="Writing a research article is crucial, and publishing in reputed journals like SCOPUS and SCI can contribute significantly to career growth."
//             imageUrl="service-article.png" // Replace with actual image URL
//           />
//         </GridItem>
//         <GridItem>
//           <ServiceCard
//             title="Thesis/Dissertation Writing"
//             description="Receive comprehensive support for structuring and methodology in thesis and dissertation writing for academic success."
//             imageUrl="service-thesis.png" // Replace with actual image URL
//           />
//         </GridItem>
//         <GridItem>
//           <ServiceCard
//             title="Publication Support"
//             description="Enhance acceptance chances in SCOPUS or SCI-indexed journals with journal selection, submission guidance, and peer review management."
//             imageUrl="service-articles.png" // Replace with actual image URL
//           />
//         </GridItem>
//         <GridItem>
//           <ServiceCard
//             title="Ph.D. End-to-End Assistance"
//             description="Receive support at every stage of your Ph.D. journey, from thesis writing to proposal editing and research guidance."
//             imageUrl="service-publication.png" // Replace with actual image URL
//           />
//         </GridItem>
//         <GridItem>
//           <ServiceCard
//             title="Plagiarism-Free Writing/Editing"
//             description="Ensure your work is unique and submission-ready with our reliable plagiarism-free editing services."
//             imageUrl="service-plagram.png" // Replace with actual image URL
//           />
//         </GridItem>
//         <GridItem>
//           <ServiceCard
//             title="Proposal Writing/Editing"
//             description="Get comprehensive support for research design, content refinement, and clarity in proposal writing and editing."
//             imageUrl="service-proposal.png" // Replace with actual image URL
//           />
//         </GridItem>
//         <GridItem>
//           <ServiceCard
//             title="Workshops and Training"
//             description="Enhance your skills through expert-led workshops covering research methodologies, data analysis, and academic writing."
//             imageUrl="service-journal.png" // Replace with actual image URL
//           />
//         </GridItem>
//         <GridItem>
//           <ServiceCard
//             title="Project Implementation"
//             description="Our team ensures each project phase is managed, providing custom project development tailored to your needs."
//             imageUrl="service-project.png" // Replace with actual image URL
//           />
//         </GridItem>
//       </Grid>
//     </Box>
//   );
// };

// export default ServicesSection;


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

const services = [
  {
    title: 'Research Article Writing',
    description: 'Writing a research article is crucial, and publishing in reputed journals like SCOPUS and SCI can contribute significantly to career growth.',
    imageUrl: 'service-article.png', // Replace with actual image URL
  },
  {
    title: 'Thesis/Dissertation Writing',
    description: 'Receive comprehensive support for structuring and methodology in thesis and dissertation writing for academic success.',
    imageUrl: 'service-thesis.png', // Replace with actual image URL
  },
  {
    title: 'Publication Support',
    description: 'Enhance acceptance chances in SCOPUS or SCI-indexed journals with journal selection, submission guidance, and peer review management.',
    imageUrl: 'service-articles.png', // Replace with actual image URL
  },
  {
    title: 'Ph.D. End-to-End Assistance',
    description: 'Receive support at every stage of your Ph.D. journey, from thesis writing to proposal editing and research guidance.',
    imageUrl: 'service-publication.png', // Replace with actual image URL
  },
  {
    title: 'Plagiarism-Free Writing/Editing',
    description: 'Ensure your work is unique and submission-ready with our reliable plagiarism-free editing services.',
    imageUrl: 'service-plagram.png', // Replace with actual image URL
  },
  {
    title: 'Proposal Writing/Editing',
    description: 'Get comprehensive support for research design, content refinement, and clarity in proposal writing and editing.',
    imageUrl: 'service-proposal.png', // Replace with actual image URL
  },
  {
    title: 'Workshops and Training',
    description: 'Enhance your skills through expert-led workshops covering research methodologies, data analysis, and academic writing.',
    imageUrl: 'service-journal.png', // Replace with actual image URL
  },
  {
    title: 'Project Implementation',
    description: 'Our team ensures each project phase is managed, providing custom project development tailored to your needs.',
    imageUrl: 'service-project.png', // Replace with actual image URL
  },
];

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <Box
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
      padding={4}
      bg="white"
      position="relative"
    >
      <Center position="relative" top="-30px" mb={0} zIndex={1}>
        <Box position="relative" width="70px" height="80px" zIndex={2}>
          {/* Hexagon Shape */}
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
            top="-15px" // Adjusts the hexagon position to partially overlap the card
            zIndex={3}
          >
            <Image src={imageUrl} boxSize={10} alt={title} />
          </Box>
        </Box>
      </Center>
      <Heading size="md" mb={2}>{title}</Heading>
      <Text mb={4} color="gray.500" fontSize="sm">
        {description}
      </Text>
      <Button color="white" bg={'#02428d'} variant="solid" size="md" _hover={{
        bg :'#ecc94b',
        color:'black'
      }}>
        LEARN MORE
      </Button>
    </Box>
  );
};

const WhatWeDo = () => {
  return (
    <Box textAlign="center" py={10} px={5} bg="gray.100">
      <Text fontSize="sm" color="blue.600" letterSpacing="widest">
        OUR SERVICES
      </Text>
      <Heading mb={6} fontSize="3xl">
        What We Do
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WhatWeDo;
