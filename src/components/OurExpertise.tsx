import { Box, Text, Link, Stack, Heading, Container, SimpleGrid } from "@chakra-ui/react";
import Styles from "./Carousel.module.css";
import useScrollTransition from "../templates/usescrolltransition";

const HoverCard = ({ title, text, link }) => {
  useScrollTransition()
  return (
    <Box
    
      bg="white"
      border="1px solid #E2E8F0"
      p={5} 
      rounded="md"
      // className='component'
      className={Styles.anu}
      textAlign="center"
      boxShadow="lg"
      width="100%"
      transition="transform 0.3s, box-shadow 0.3s"
      transform="scale(1.05) rotateX(10deg) rotateY(-10deg)"
      _hover={{
        transform: "scale(1.05) rotateX(10deg) rotateY(10deg)",
        boxShadow: "2xl",
      }}
      
    >
      <Text fontSize="xl" fontWeight="bold" color="#02428d" className='component'>
        {title}
      </Text>
      <Text mt={4} mb={4} fontSize={['md', 'lg', 'xl']} textAlign={'center'} className='component'>
        {text}      </Text>
      <Link href="/" color="#02428d" fontWeight="bold" fontSize={['md', 'lg', 'xl']} className='component1'>
        Click Here →
        {/* <a className="chakra-link css-1poxbv9">Click Here →</a> */}
      </Link>
    </Box>
  );
};

const App = () => {
  return (
    <Box p={4} mt={8} id="specialized">
      <Stack spacing={4} as={Container} maxW={['100%', '90%', '75%']} textAlign="center">
        <Heading className='component'>We Are Specialized</Heading>
        <Text color="gray.600" fontSize={['lg', 'lg', 'xl']} className='component' justifyContent="stretch">
          We specialize in providing <strong>high-quality PhD services </strong> that cater to the specific needs of
          our clients. Our team of experts consists of seasoned professionals with extensive
          experience in various fields, who are dedicated to <strong> helping students achieve their academic
          goals.</strong> 
        </Text>
      </Stack>

      {/* Card Section 1 */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 4 }} // 1 column for base (mobile), 2 for md (tablets), 4 for large screens
        spacing={6}
        p={{base:'6', md:'8',lg:'10',}}
        justifyContent="center"
        // alignContent={'center'}
        textAlign={'justify'}
        // fontSize={['', 'lg', 'xl'  ]}
      >
        <HoverCard
          title="Artificial intelligence"
          text=" Our Company offer advanced AI solutions including machine learning, automation, and predictive analytics to enhance business efficiency and innovation. Our custom AI services are designed to optimize operations. "
          link="#"
        />
        <HoverCard
          title="Machine learning"
          text="Our company offer advanced machine learning solutions that leverage predictive modeling, data analysis, and algorithm optimization to drive business growth. Our custom machine learning services help businesses unlock valuable. "
          link="#"
        />
        <HoverCard
          title="Management Studies"
          text=" Our Company expert management studies to optimize business performance, leadership, and strategic growth, driving innovation, efficiency, and long-term success through tailored solutions and actionable."
          link="#"
        />
        <HoverCard
          title="Arts & Science"
          text="Our company provide innovative Arts & Science solutions to enhance creativity, learning, and academic excellence. Our services empower students and professionals, driving success across various fields,fostering research,."
          link="#"
        />
      </SimpleGrid>

      {/* Card Section 2 */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 4 }} // Similar grid for the second section
        spacing={6}
        p={{base:'6', md:'8',lg:'10',}}
        justifyContent="center"
        textAlign={'justify'}
      >
        <HoverCard
          title="MBA & Marketing"
          text="Our Company offer cutting-edge MBA & Marketing solutions to enhance business strategies, leadership, and brand growth. Our services are designed to optimize marketing efforts, boost ROI, and drive success in competitive markets."
          link="#"
        />
        <HoverCard
          title="Electrical & Electronics"
          text="Our company provide advanced Electrical & Electronics solutions to optimize performance, innovation, and efficiency in the industry. Our services are designed to drive technological advancements, improve system reliability."
          link="#"
        />
        <HoverCard
          title="Mechanical engineering"
          text="Our Company offer innovative Mechanical Engineering solutions to enhance design, efficiency, and performance across industries. Our services are tailored to optimize product development, streamline manufacturing processes."
          link="#"
        />
        <HoverCard
          title="Civil Enigneering"
          text="Our company provide advanced Civil Engineering solutions to enhance infrastructure development, design, and construction efficiency. Our services are tailored to ensure sustainable growth, improve project outcomes."
          link="#"
        />
      </SimpleGrid>
    </Box>
  );
};

export default App;
