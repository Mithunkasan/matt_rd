
import { Box, Flex, Heading, Image, Text, Circle, Center,Divider, VStack,Icon,Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { url } from 'inspector';
import useScrollTransition from "../templates/usescrolltransition";

const AboutUsComponent: React.FC = () => {
  useScrollTransition();
  return (
    <Box position="relative" h={{ base: "40vh", md: "50vh", lg: "60vh" }} mb={10}>
      {/* Background Image with Overlay */}
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
          opacity: 0.5, // Apply opacity to the overlay color
          zIndex: 2,
        }}
      />
      
      {/* Text Content */}
      <Box position="relative" zIndex={2} p={{ base: 4, md: 8, lg: 20 }}>
        <Center>
          <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}  color="white" fontWeight="bold" mt={{ base: 8, md: 12, lg: 20 }}>
            Our Process
          </Text>
        </Center>
        
        {/* Breadcrumb Navigation */}
        <Flex alignItems="center" justifyContent="center" mt={4} align={'center'}>
          <Link href="/" fontSize={{ base: "sm", md: "md", lg: "lg" }} mr={2} color="white">
            Home
          </Link>
          <Icon as={ArrowForwardIcon} boxSize={{ base: 4, md: 5 }}  color="white" />
          <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} ml={2} color="white">
            Our Process
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};


const ProcessSection = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      pt="5"
      className='component1'
      m={{ base: "0px 20px", md: "0px 100px" }} // Adjust margins for smaller screens
    >
      {/* Left Side: Title and Paragraph */}
      <Box flex="1" textAlign={{ base: "center", md: "left" }} mb={{ base: 8, md: 0 }}className='component1'>
        <Heading as="h2" size="xl" mb="8" className='component1'>
          Our Process
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.6" textAlign="justify" className='component1'>
          Our process is designed to ensure a seamless and comprehensive journey
          through research. We begin with an in-depth consultation to understand
          your needs and objectives, followed by a thorough literature review.
          Our team then designs a customized research methodology, collects and
          analyzes data meticulously, and presents the findings in a structured
          format. We also provide full support for publication and future revisions,
          making sure every detail is polished and optimized for success.
        </Text>
      </Box>

      {/* Right Side: Image */}
      <Box flex="1" display="flex" justifyContent="center" mt={{ base: 8, md: 0 }} className='component1'>
        <Image
          src="ourprocess.png"
          alt="Process Illustration"
          borderRadius="md"
          boxSize={{ base: "90%", md: "70%" }} // Responsive image size
          maxW="100%"
        />
      </Box>
    </Flex>
  );
};

const ProcessStep = ({ step, title, description }: { step: number; title: string; description: string }) => (
  <Flex align="start" mb={{ base: "4", md: "6" }} flexDirection={{ base: "column", md: "row" }} w="full" >
    <Circle size="10" bg="yellow.400" color="black" fontWeight="bold" mb={{ base: 2, md: 0 }} mr={{ base: 0, md: 4 }} 
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.9), 0px 1px 3px rgba(255, 200, 100, 0.1)"
    >
      {step}
    </Circle>
    <Box>
      <Text fontWeight="bold" fontSize="lg" mb="1">
        {title}
      </Text>
      <Text fontSize="sm" color="gray.600">
        {description}
      </Text>
    </Box>
  </Flex>
);


const HowWeWork = () => {
  return (
    <Box bg="gray.50" p={{ base: "6", md: "12" }} borderRadius="md" boxShadow="md" mt="0" className='component1'>
      <Heading as={'h2'} textAlign="center" fontSize={{ base: "2xl", md: "4xl" }} mb="8" className='component1'>
        How Do We Work?
      </Heading>
      <Flex wrap="wrap" justify="center" gap={{ base: "0", md: "0" }} className='component1'>
        <VStack spacing="4" align="start" w={{ base: "100%", md: "30%" }} p="2" className='component1'>
          <ProcessStep step={1} title="Feedback Session" description="Your feedback and suggestions are encouraged and addressed to ensure your satisfaction." />
          <ProcessStep step={2} title="Preliminary Research" description="We conduct an initial analysis based on your specified research topic to identify any research gaps." />
          <ProcessStep step={3} title="Main Work Preparation" description="Crafting the main body of your work involves incorporating your feedback and meticulous revisions." />
        </VStack>
        <VStack spacing="4" align="start" w={{ base: "100%", md: "30%" }} p="2" className='component1'>     
          <ProcessStep step={4} title="Timely Delivery" description="We promptly deliver your completed work on time, meeting all specified deadlines." />
          <ProcessStep step={5} title="Placement Of Order" description="Begin by submitting your order. We meticulously examine and analyze your chosen research topic." />
          <ProcessStep step={6} title="Submission Of Rough Draft" description="We present a rough draft, providing you with an initial version of your work for your review." />
        </VStack>
        <VStack spacing="4" align="start" w={{ base: "100%", md: "30%" }} p="2" className='component1'>
          <ProcessStep step={7} title="Provide Comment" description="We value your comments as they are integral to our continuous improvement efforts." />
          <ProcessStep step={8} title="Additional Research" description="We dedicate additional time to enhancing your work through further research if needed." />
          <ProcessStep step={9} title="Quality Check Review" description="Your work is submitted to an advisory board for a comprehensive quality assessment." />
        </VStack>
      </Flex>
    </Box>
  );
};


interface CircleContent {
  imageSrc: string;
  title: string;
}

const CircleData: CircleContent[] = [
  { imageSrc: "https://via.placeholder.com/40?text=Icon1", title: "Identifying The Research Problem" },
  { imageSrc: "https://via.placeholder.com/40?text=Icon2", title: "Editing And Proofreading" },
  { imageSrc: "https://via.placeholder.com/40?text=Icon3", title: "Analysing Data Sources" },
  { imageSrc: "https://via.placeholder.com/40?text=Icon4", title: "Collecting Relevant Data" },
  { imageSrc: "https://via.placeholder.com/40?text=Icon5", title: "Crafting Your Research Paper" },
];

const CenteredComponent: React.FC = () => {
  return (
    <Center flexDirection="column" py={8} px={4} m={{ base: '0', md: '0px 150px' }} textAlign={'center'} className='component1'>
      <Heading size="lg" mb={10}className='component'>
        Matt Engineering Solution Adheres To A Meticulous <Text as="span" color="#02428d">“5 Step”</Text> Process To Precisely Craft Your Paper
      </Heading>
      
      {/* Circles with image and title inside */}
      <Flex 
        wrap="wrap" 
        justifyContent="center" 
        alignItems="center" 
        position="relative"
        gap={4} // Add spacing between circles
      >
        {CircleData.map((item, index) => (
          <Box key={index} position="relative" display="flex" alignItems="center" flexDirection="column">
            {/* Circle with Image and Title */}
            <Circle size={{ base: "120px", md: "170px" }} bg="#ecc94b" textAlign="center" color="white" borderWidth="2px" borderColor="#02428d" mx={2}>
              <VStack spacing={1}>
                <Image src={item.imageSrc} alt={item.title} boxSize="30px" />
                <Text fontSize={{ base: "xs", md: "xs" }} fontWeight="bold" color={'black'}>{item.title}</Text>
              </VStack>
            </Circle>
            {/* Connecting line */}
            {index < CircleData.length - 1 && (
              <Box width={{ base: "40px", md: "60px" }} height="2px" bg="#02428d" />
            )}
          </Box>
        ))}
      </Flex>
    </Center>
  );
};

const FullProcessComponent = () => {
  return (
    <Box>
      <AboutUsComponent />
      <ProcessSection />
      <HowWeWork />
      <CenteredComponent />
    </Box>
  );
};

export default FullProcessComponent;




// interface CircleContent {
//   imageSrc: string;
//   title: string;
// }

// const CircleData: CircleContent[] = [
//   { imageSrc: "https://via.placeholder.com/40?text=Icon1", title: "Identifying The Research Problem" },
//   { imageSrc: "https://via.placeholder.com/40?text=Icon2", title: "Editing And Proofreading" },
//   { imageSrc: "https://via.placeholder.com/40?text=Icon3", title: "Analysing Data Sources" },
//   { imageSrc: "https://via.placeholder.com/40?text=Icon4", title: "Collecting Relevant Data" },
//   { imageSrc: "https://via.placeholder.com/40?text=Icon5", title: "Crafting Your Research Paper" },
// ];

// const CenteredComponent: React.FC = () => {
//   return (
//     <Center flexDirection="column" py={8} px={4} m={'0px 150px'} textAlign={'center'}>
//       <Heading size="lg" mb={10} >
//       Matt Engineering Solution Adheres To A Meticulous <Text as="span" color="#02428d">“5 Step”</Text> Process To Precisely Craft Your Paper      </Heading>
      
//       {/* Circles with image and title inside */}
//       <Flex justifyContent="center" alignItems="center" position="relative">
//         {CircleData.map((item, index) => (
//           <Box key={index} position="relative" display="flex" alignItems="center">
//             {/* Circle with Image and Title */}
//             <Circle size="170px" bg="#02428d" textAlign="center" color="white" borderWidth="2px" borderColor="gray.400" mx={2}>
//               <VStack spacing={1}>
//                 <Image src={item.imageSrc} alt={item.title} boxSize="40px" />
//                 <Text fontSize="xs" fontWeight="bold" color={'white'}>{item.title}</Text>
//               </VStack>
//             </Circle>
//             {/* Connecting line */}
//             {index < CircleData.length -1 && (
//               <Box width="60px" height="2px" bg="teal.300" />
//             )}
//           </Box>
//         ))}
//       </Flex>
//     </Center>
//   );
// };


