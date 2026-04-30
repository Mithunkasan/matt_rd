
import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  keyframes,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import router from 'next/router';

const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

   const handleClick = () => {
     router.push('/featuredproject');
   };

const cards = [
  {
    imageSrc: '/Thesis Support.webp',
    title: 'Thesis Support in Machine Learning for Medical Imaging',
    description:
      'Assisted a PhD candidate with a thesis on deep learning models in radiology, leading to successful publication in a top-tier medical journal.',
  },
  {
    imageSrc: '/Innovative Research.webp',
    title: 'Innovative Research Proposal for Climate Change Mitigation',
    description:
      'Developed a comprehensive proposal on sustainable urban planning to mitigate climate impacts, receiving funding from a renowned environmental organization.',
  },
  {
    imageSrc: '/Dissertation Guidance.webp',
    title: 'Dissertation Guidance on Social Media Psychology',
    description:
      'Provided end-to-end dissertation support, exploring the impact of social media on adolescent mental health, resulting in successful defense and graduation.',
  },
  {
    imageSrc: '/Systematic Review.webp',
    title: 'Systematic Review on AI in Education',
    description:
      'Conducted a systematic review of artificial intelligence applications in education, helping secure publication in a leading educational technology journal.',
  },
  {
    imageSrc: '/Proofreading and Editing.webp',
    title: 'Proofreading and Editing for High-Impact Publication',
    description:
      'Proofread and edited a complex manuscript on quantum computing, leading to acceptance in a prestigious physics journal.',
  },
  {
    imageSrc: '/Data Analysis.webp',
    title: 'Data Analysis Consultation for Economic Thesis',
    description:
      'Guided statistical analysis for a thesis on the economic impact of renewable energy, resulting in positive feedback and successful thesis approval.',
  },
];



// const ServiceSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [animate, setAnimate] = useState(false);

//   const visibleCards = cards.slice(currentIndex, currentIndex + 3);

//   const handlePrev = () => {
//     setAnimate(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex - 3 < 0 ? Math.max(cards.length - 3, 0) : prevIndex - 3
//       );
//       setAnimate(false);
//     }, 300);
//   };

//   const handleNext = () => {
//     setAnimate(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex + 3 >= cards.length ? 0 : prevIndex + 3
//       );
//       setAnimate(false);
//     }, 300);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       handleNext();
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, [currentIndex]);

//   return (
//     <Box bg="white" w="100%" pt={8} pb={4} px={{ base: 4, sm: 6, md: 8 }}>
//       <Box textAlign="center" mt={5}>
//         <Heading as="h3" size="xl" mb={4}>
//           Featured Projects
//         </Heading>
//         <Text
//           fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
//           color="gray.600"
//           mx={{ base: 4, sm: 6, md: 12 }}
//         >
//           Our featured projects span a wide range of fields, demonstrating our
//           ability to deliver top-quality results that meet the highest standards. <strong>Matt Research Solutions</strong> is at the forefront of these endeavors, showcasing our{' '}
//           <strong>ability to tackle</strong> complex challenges and deliver exceptional outcomes.
//         </Text>
//       </Box>

//       <Box bg="#f4f4f4" py={{ base: 8, sm: 10, md: 12 }} width="100%">
//         <Flex
//           direction="row"
//           justify="center"
//           align="center"
//           maxW="1200px"
//           mx="auto"
//           position="relative"
//         >
//           {/* Left Navigation Button */}
//           <IconButton
//             aria-label="Previous"
//             icon={<ChevronLeftIcon />}
//             position="absolute"
//             left={{ base: '10px', sm: '20px', md: '10px' }}
//             top="50%"
//             transform="translateY(-50%)"
//             bg="#02428d"
//             color="white"
//             borderRadius="full"
//             boxShadow="lg"
//             zIndex={1}
//             onClick={handlePrev}
//             _hover={{ bg: '#ecc94b', color: 'black' }}
//           />

//           <Flex
//             justify="center"
//             align="center"
//             wrap="wrap"
//             gap={4}
//             px={4}
//             mx="auto"
//             width="100%"
//             overflow="hidden"
//             animation={animate ? 'slideAnimation 0.3s ease-in-out' : 'none'}
//           >
//             {visibleCards.map((card, index) => (
//               <Box
//                 key={index}
//                 bg="white"
//                 borderRadius="lg"
//                 overflow="hidden"
//                 width={{ base: '100%', sm: '48%', md: '30%' }}
//                 maxW="sm"
//                 boxShadow="lg"
//                 textAlign="center"
//                 mb={{ base: 4, sm: 6 }}
//               >
//                 <Image
//                   src={card.imageSrc}
//                   alt={card.title}
//                   objectFit="cover"
//                   width="100%"
//                   height={{ base: '200px', sm: '250px', md: '300px' }}
//                 />
//                 <Box bg="#02428d" p={4}>
//                   <Text
//                     fontWeight="bold"
//                     color="white"
//                     mb={2}
//                     fontSize={{ base: 'sm', sm: 'lg' }}
//                   >
//                     {card.title}
//                   </Text>
//                   <Text color="white" fontSize="sm">
//                     {card.description}
//                   </Text>
//                 </Box>
//               </Box>
//             ))}
//           </Flex>

//           {/* Right Navigation Button */}
//           <IconButton
//             aria-label="Next"
//             icon={<ChevronRightIcon />}
//             position="absolute"
//             right={{ base: '10px', sm: '20px', md: '10px' }}
//             top="50%"
//             transform="translateY(-50%)"
//             bg="#02428d"
//             color="white"
//             borderRadius="full"
//             boxShadow="lg"
//             zIndex={1}
//             onClick={handleNext}
//             _hover={{ bg: '#ecc94b', color: 'black' }}
//           />
//         </Flex>

//         <Box display="flex" justifyContent="center" alignItems="center" mt={8}>
//           <Button
//             onClick={handleClick}
//             bg="#02428d"
//             color="white"
//             _hover={{ bg: '#ecc94b', color: 'black' }}
//             fontSize={{ base: 'sm', sm: 'md' }}
//             py={{ base: 2, sm: 3 }}
//             px={{ base: 6, sm: 8 }}
//           >
//             View All
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ServiceSection;



const ServiceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const visibleCards = cards.slice(currentIndex, currentIndex + 3);

  const handlePrev = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 3 < 0 ? Math.max(cards.length - 3, 0) : prevIndex - 3
      );
      setAnimate(false);
    }, 300);
  };

  const handleNext = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 3 >= cards.length ? 0 : prevIndex + 3
      );
      setAnimate(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <Box bg="white" w="100%" pt={8} pb={4} px={{ base: 4, sm: 6, md: 8 }}>
      <Box textAlign="center" mt={5}>
        <Heading as="h3" size="xl" mb={4}>
          Featured Projects
        </Heading>
        <Text
          fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
          color="gray.600"
          mx={{ base: 4, sm: 6, md: 12 }}
        >
          Our featured projects span a wide range of fields, demonstrating our
          ability to deliver top-quality results that meet the highest standards. <strong>Matt Research Solutions</strong> is at the forefront of these endeavors, showcasing our{' '}
          <strong>ability to tackle</strong> complex challenges and deliver exceptional outcomes.
        </Text>
      </Box>

      <Box bg="#f4f4f4" py={{ base: 8, sm: 10, md: 12 }} width="100%">
        <Flex
          direction="row"
          justify="center"
          align="center"
          maxW="1200px"
          mx="auto"
          position="relative"
        >
          {/* Left Navigation Button */}
          <IconButton
            aria-label="Previous"
            icon={<ChevronLeftIcon />}
            position="absolute"
            left={{ base: '5px', sm: '20px', md: '30px', lg: '40px' }}
            top="50%"
            transform="translateY(-50%)"
            bg="#02428d"
            color="white"
            borderRadius="full"
            boxShadow="lg"
            zIndex={1}
            onClick={handlePrev}
            _hover={{ bg: '#ecc94b', color: 'black' }}
          />

          <Flex
            justify="center"
            align="center"
            wrap="wrap"
            gap={{ base: 2, sm: 4, md: 6 }}
            px={{ base: 2, sm: 4, md: 8 }}
            mx="auto"
            width="100%"
            overflow="hidden"
            animation={animate ? 'slideAnimation 0.3s ease-in-out' : 'none'}
          >
            {visibleCards.map((card, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="lg"
                overflow="hidden"
                width={{
                  base: '100%', // Full width for phones
                  sm: '48%', // Two cards in a row for small screens
                  md: '30%', // Three cards in a row for tablets and laptops
                  lg: '28%', // Smaller cards for larger screens
                }}
                maxW="sm"
                boxShadow="lg"
                textAlign="center"
                mb={{ base: 4, sm: 6 }}
              >
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  objectFit="cover"
                  width="100%"
                  height={{
                    base: '180px', // Adjust height for smaller screens
                    sm: '220px',
                    md: '250px',
                    lg: '280px', // Larger height for laptops
                  }}
                />
                <Box bg="#02428d" p={4}>
                  <Text
                    fontWeight="bold"
                    color="white"
                    mb={2}
                    fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
                  >
                    {card.title}
                  </Text>
                  <Text color="white" fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}>
                    {card.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </Flex>

          {/* Right Navigation Button */}
          <IconButton
            aria-label="Next"
            icon={<ChevronRightIcon />}
            position="absolute"
            right={{ base: '5px', sm: '20px', md: '30px', lg: '40px' }}
            top="50%"
            transform="translateY(-50%)"
            bg="#02428d"
            color="white"
            borderRadius="full"
            boxShadow="lg"
            zIndex={1}
            onClick={handleNext}
            _hover={{ bg: '#ecc94b', color: 'black' }}
          />
        </Flex>

        <Box display="flex" justifyContent="center" alignItems="center" mt={8}>
          <Button
            onClick={handleClick}
            bg="#02428d"
            color="white"
            _hover={{ bg: '#ecc94b', color: 'black' }}
            fontSize={{ base: 'sm', sm: 'md' }}
            py={{ base: 2, sm: 3 }}
            px={{ base: 6, sm: 8 }}
          >
            View All
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceSection;
