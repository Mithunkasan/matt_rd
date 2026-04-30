
// import React, { useState } from 'react';
// import { Box, Heading, SimpleGrid, VStack, Text, Icon } from '@chakra-ui/react';
// import { FaShieldAlt, FaClock, FaChartLine } from 'react-icons/fa';

// type ServiceCardProps = {
//   icon: any;
//   title: string;
//   description: string;
//   isDefault?: boolean;
//   isHovered: boolean;
//   onMouseEnter: () => void;
//   onMouseLeave: () => void;
// };

// const ServiceCard: React.FC<ServiceCardProps> = ({
//   icon,
//   title,
//   description,
//   isDefault = false,
//   isHovered,
//   onMouseEnter,
//   onMouseLeave,
// }) => {
//   const isActive = isDefault && !isHovered; // Show default color only if it's the default card and no other card is hovered

//   return (
//     <VStack
//       bg={isActive ? '#02428d' : 'white'}
//       color={isActive ? 'white' : 'black'}
//       borderRadius="lg"
//       p={6}
//       align="start"
//       spacing={4}
//       transition="all 0.3s ease"
//       onMouseEnter={onMouseEnter} // Add hover handlers here
//       onMouseLeave={onMouseLeave}
//       _hover={{
//         bg: '#02428d',
//         color: 'white',
//         transform: 'translateY(-10px)',
//       }}
//     >
//       <Box 
//         bg={isActive ? 'rgba(255, 255, 255, 0.2)' : 'blue.100'}
//         p={4} 
//         borderRadius="full"
//         transition="all 0.3s ease"
//       >
//         <Icon as={icon} boxSize={8} color="blue.500" />
//       </Box>
//       <Heading 
//         fontSize="xl" 
//         color="inherit"
//         _hover={{ color: 'white' }}
//       >
//         {title}
//       </Heading>
//       <Text fontSize="lg" color="inherit">
//         {description}
//       </Text>
//     </VStack>
//   );
// };

// const ServiceTopicses = () => {
//   const [hoveredCard, setHoveredCard] = useState<string | null>(null);

//   return (
//     <Box mb={{ base: 8, md: 16 }} mt={{ base: '20px', md: '50px' }} p={{ base: 4, md: 8 }}>
//       <Heading mt={5} mb={{ base: 10, md: 20 }} textAlign="center">
//         Custom Research Paper Writing Services
//       </Heading>

//       <SimpleGrid 
//         columns={{ base: 1, sm: 2, md: 3, lg: 4 }} 
//         spacing={{ base: 4, md: 6, lg: 8 }} 
//         mt={0}
//         mx={{ base: '10px', md: '40px', lg: '80px' }}
//       >
//         <ServiceCard
//           icon={FaShieldAlt} 
//           title="Artificial intelligence" 
//           description="We specialize in the simulation of human intelligence processes by computer systems, including problem-solving, perception, and language understanding." 
          
//           isHovered={hoveredCard !== null}
//           onMouseEnter={() => setHoveredCard('Artificial intelligence')}
//           onMouseLeave={() => setHoveredCard(null)}
//         />
//         <ServiceCard 
//           icon={FaClock} 
//           title="Management Studies" 
//           description="Become a certified project manager with industry-recognized courses, equipping you with essential skills for effective project execution." 
//           isHovered={hoveredCard !== null}
//           onMouseEnter={() => setHoveredCard('Management Studies')}
//           onMouseLeave={() => setHoveredCard(null)}
//         />
//         <ServiceCard 
//           icon={FaChartLine} 
//           title="Arts & Science" 
//           description="The fusion of Arts & Science creates a unique landscape for innovation and creativity, fostering a deeper understanding of both fields and their impact on society." 
//           isHovered={hoveredCard !== null}
//           isDefault={true}
//           onMouseEnter={() => setHoveredCard('Arts & Science')}
//           onMouseLeave={() => setHoveredCard(null)}
//         />
//           <ServiceCard 
//            icon={FaClock} 
//            title="Social Science & Humanities" 
//            description="Professionals in Social Science & Humanities play a vital role in addressing social challenges, promoting cultural awareness, and contributing to community development." 
//            isHovered={hoveredCard !== null}
//            onMouseEnter={() => setHoveredCard('Arts & Science')}
//            onMouseLeave={() => setHoveredCard(null)}
//          />

//          <ServiceCard 
//            icon={FaShieldAlt} 
//            title="Electrical & Electronics" 
//            description="Electrical & Electronics engineering encompasses the study of electrical systems, electronics, and telecommunications, shaping modern technology and infrastructure."          
//            isHovered={hoveredCard !== null}
//            onMouseEnter={() => setHoveredCard('Arts & Science')}
//            onMouseLeave={() => setHoveredCard(null)}         />
//          <ServiceCard 
//            icon={FaClock} 
//            title="MBA & Marketing" 
//            description="An MBA in marketing can significantly enhance your career prospects, opening doors to various roles in brand management, market research, and digital marketing." 
//            isHovered={hoveredCard !== null}
//            onMouseEnter={() => setHoveredCard('Arts & Science')}
//            onMouseLeave={() => setHoveredCard(null)}
//          />
//          <ServiceCard 
//            icon={FaChartLine} 
//            title="Allied Health Science" 
//            description="Educational programs in Allied Health Science provide hands-on training and knowledge in various specialties, preparing students for fulfilling careers in healthcare." 
//            isHovered={hoveredCard !== null}
//            onMouseEnter={() => setHoveredCard('Arts & Science')}
//            onMouseLeave={() => setHoveredCard(null)}
//          />
//          <ServiceCard 
//            icon={FaClock} 
//            title="Machine Learning" 
//            description="Looking to implement machine learning in your business? Our expert insights guide you through leveraging machine learning for enhanced decision-making." 
//            isHovered={hoveredCard !== null}
//            onMouseEnter={() => setHoveredCard('Arts & Science')}
//            onMouseLeave={() => setHoveredCard(null)}
//          />
//         {/* Add more ServiceCard components as needed */}
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default ServiceTopicses;


import React from 'react';
import { Box, Heading, SimpleGrid, VStack, Text, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaShieldAlt, FaClock, FaChartLine } from 'react-icons/fa';

type ServiceCardProps = {
  icon: any;
  title: string;
  description: string;
  isActive: boolean;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  isActive,
}) => {
  return (
    <VStack
      bg={isActive ? '#02428d' : 'white'}
      color={isActive ? 'white' : 'black'}
      borderRadius="lg"
      p={4}
      align="start"
      spacing={4}
      transition="all 0.3s ease"
      _hover={{
        bg: '#02428d',
        color: 'white',
        transform: 'translateY(-10px)',
      }}
    >
      <Box 
        bg={isActive ? 'rgba(255, 255, 255, 0.2)' : 'blue.100'}
        p={4} 
        borderRadius="full"
        transition="all 0.3s ease"
      >
        <Icon as={icon} boxSize={8} color="blue.500" />
      </Box>
      <Heading 
        fontSize="xl" 
        color="inherit"
        _hover={{ color: 'white' }}
      >
        {title}
      </Heading>
      <Text fontSize="lg" color="inherit">
        {description}
      </Text>
    </VStack>
  );
};

const ServiceTopicses = () => {
  // Determine if the current view is mobile using Chakra UI's breakpoint value
  const isMobile = useBreakpointValue({ base: true, md: false });

  const cardData = [
    {
      icon: FaShieldAlt,
      title: "Artificial Intelligence",
      description: "We specialize in the simulation of human intelligence processes by computer systems, including problem-solving, perception, and language understanding.",
      isDefault: false, // Adjust this for the card that should show as default active on larger screens
    },
    {
      icon: FaClock,
      title: "Management Studies",
      description: "Become a certified project manager with industry-recognized courses, equipping you with essential skills for effective project execution.",
      isDefault: true, // This card will show the active state by default on larger screens
    },
    {
      icon: FaChartLine,
      title: "Arts & Science",
      description: "The fusion of Arts & Science creates a unique landscape for innovation and creativity, fostering a deeper understanding of both fields and their impact on society.",
      isDefault: false,
    },
    {
      icon: FaClock,
      title: "Social Science & Humanities",
      description: "Professionals in Social Science & Humanities play a vital role in addressing social challenges, promoting cultural awareness, and contributing to community development.",
      isDefault: false,
    },
    {
      icon: FaShieldAlt,
      title: "Electrical & Electronics",
      description: "Electrical & Electronics engineering encompasses the study of electrical systems, electronics, and telecommunications, shaping modern technology and infrastructure.",
      isDefault: false,
    },
    {
      icon: FaClock,
      title: "MBA & Marketing",
      description: "An MBA in marketing can significantly enhance your career prospects, opening doors to various roles in brand management, market research, and digital marketing.",
      isDefault: false,
    },
    {
      icon: FaChartLine,
      title: "Allied Health Science",
      description: "Educational programs in Allied Health Science provide hands-on training and knowledge in various specialties, preparing students for fulfilling careers in healthcare.",
      isDefault: false,
    },
    {
      icon: FaClock,
      title: "Machine Learning",
      description: "Looking to implement machine learning in your business? Our expert insights guide you through leveraging machine learning for enhanced decision-making.",
      isDefault: false,
    },
  ];

  return (
    <Box mb={{ base: 8, md: 16 }} mt={{ base: '20px', md: '50px' }} p={{ base: 4, md: 8 }}>
      <Heading mt={5} mb={{ base: 10, md: 20 }} textAlign="center">
        Custom Research Paper Writing Services
      </Heading>

      <SimpleGrid 
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }} 
        spacing={{ base: 4, md: 6, lg: 8 }} 
        mt={0}
        mx={{ base: '10px', md: '40px', lg: '80px' }}
      >
        {cardData.map((card) => (
          <ServiceCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
            isActive={isMobile || card.isDefault} // All cards are active on mobile, one is active by default on larger screens
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ServiceTopicses;
