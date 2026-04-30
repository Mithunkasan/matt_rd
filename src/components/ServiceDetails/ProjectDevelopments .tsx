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
} from "@chakra-ui/react";
import {
  FaWhatsapp,
  FaShieldAlt,
  FaUserShield,
  FaClock,
  FaThumbsUp,
  FaCheckCircle,
  FaSmile,
  FaUsers,
  FaInfoCircle,
  FaRupeeSign,
  FaLayerGroup,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaLock,
  FaPiggyBank,
  FaGlobe,
  FaRegMoneyBillAlt,
  FaClipboard,
  FaFlask,
  FaEdit,
  FaChartBar,
  FaPen,
  FaBook,
  FaMicroscope,
  FaUniversity,
  FaCogs,
  FaRegFileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { CheckIcon, CheckCircleIcon } from "@chakra-ui/icons";
import React from "react";
import ContactForm from "../ServicePageForm";
import Head from "next/head";

export const ThesisWritingServiceComponent = () => {
  const handleClick = () => {
    // Navigate to WhatsApp link immediately
    window.location.href = "https://wa.me/+918825735141";
  };
  return (
    <>
      <Head>
        {/* <title>
          Implementation Support for Research Projects | MATT Solutions
        </title> */}
        <meta name="title" content="Implementation Support for Research Projects | MATT Solutions" />
        <meta
          name="description"
          content="Expert guidance on implementing research methodologies and technologies. Achieve your PhD goals with MATT Solutions."
        />
        <meta
          name="keywords"
          content="implementation support, research methodologies, PhD goals, MATT Solutions, project development"
        />
        <meta charSet="UTF-8" />
      </Head>
      <Flex
        position="relative"
        color="white"
        py={{ base: 8, sm: 10, md: 12, lg: 20 }}
        px={{ base: 4, sm: 6, md: 10, lg: 20 }}
        direction={{ base: "column", lg: "row" }}
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
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgColor: "#02428d",
            opacity: 0.5, // Apply opacity to the overlay color
            zIndex: 2,
          }}
        />

        {/* Left Content - Heading and Features */}
        <Box
          flex="1"
          maxW={{ base: "100%", sm: "80%", md: "70%", lg: "50%" }}
          textAlign={{ base: "center", lg: "left" }}
          zIndex={1}
        >
          <Heading
            as="h1"
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            mb={4}
          >
            Professional <br />
            <Text as="span" color="yellow.400">
              Project Development / Implementation
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "md", sm: "lg", lg: "2xl" }}
            mb={6}
            color="white"
          >
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
            bg={"#ecc94b"}
            color={"black"}
            leftIcon={<FaWhatsapp />}
            size={{ base: "md", md: "lg" }}
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
const CustomComponent: React.FC = () => {
  return (
    <Box p={{ base: 4, md: 6 }} maxW="100%" mt={{ base: 4, md: 5 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="start"
        justify="space-between"
        mr={{ base: 0, md: 4 }}
        ml={{ base: 0, md: 4 }}
      >
        {/* Right Side Content */}
        <Box flex="1" mr={{ base: 0, md: 5 }}>
          {/* Title */}
          <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={4}>
            Project Development & Implementation:
          </Heading>

          {/* Paragraphs */}
          <VStack align="start" spacing={4} alignSelf="flex-start">
            <Text>
              At <strong>Matt Research Solutions</strong>, we specialize in
              comprehensive project implementation, ensuring that every phase of
              development is meticulously planned and executed. Our team
              supports clients by transforming innovative ideas into fully
              functional and actionable project frameworks.
            </Text>
            <Text>
              Effective project implementation is crucial for successful
              research outcomes. By meticulously designing each step,{" "}
              <strong>Matt Research Solutions</strong> ensures that the project
              aligns with the research goals and delivers the desired impact.
            </Text>
            <Text>
              Our experts at <strong>Matt Research Solutions</strong> emphasize
              selecting the best methodologies and tools for every project
              phase. This approach allows us to overcome potential challenges,
              streamline workflows, and deliver high-quality results within the
              project timeline.
            </Text>
          </VStack>
        </Box>

        {/* Left Side Image */}
        <Image
          src="/Matt Image1.jpg"
          alt="Matt Research Solutions Project Implementation"
          boxSize={{ base: "100%", md: "40%" }}
          objectFit="cover"
          ml={{ base: 0, md: 6 }}
          boxShadow="-9px 7px 7px 2px #02428d"
          mb={{ base: 4, md: 0 }}
        />
      </Flex>

      {/* Full-width Box with Additional Paragraph */}
      <Box mt={3} p={4} bg="white" borderRadius="md" width="100%">
        <Text>
          At <strong>Matt Research Solutions</strong>, project implementation is
          a structured process that utilizes advanced data analysis techniques
          and efficient project management strategies. By focusing on critical
          success factors, we deliver insights that drive project impact and
          ensure that outcomes align with research objectives.
        </Text>
        <Text mt={4}>
          <strong>Matt Research Academic,</strong> supports project
          implementation with a hands-on approach that combines innovation with
          industry best practices. From feasibility analysis to risk assessment,
          our team offers end-to-end solutions that guarantee successful project
          delivery, helping researchers achieve their goals effectively and
          efficiently. Our project development process involves continuous
          monitoring, quality assurance, and feedback integration.{" "}
          <strong>Matt Research Solutions</strong> prioritizes adaptive
          solutions, refining each phase based on real-time data to optimize
          research impact and outcomes.
        </Text>
        <Text mt={4}>
          With a deep understanding of research complexities,{" "}
          <strong>Matt Research Solutions</strong> ensures each project is
          customized to fit specific objectives, offering personalized support
          through every stage of the project journey, from initial concept to
          final execution. Partnering with{" "}
          <strong>Matt Research Academic,</strong> means gaining access to a
          dedicated team that values precision, reliability, and results. Our
          project implementation services are designed to empower researchers
          with the tools, insights, and strategic support needed to succeed.
        </Text>
      </Box>

      <Box
        mt={6}
        p={{ base: "0", md: "4" }}
        pl={{ base: "5", md: "0" }}
        bg="white"
        borderRadius="md"
        width="100%"
        textAlign={"left"}
        m={{ base: "0px 0px", md: "0px 100px" }}
      >
        <Heading as="h3" size="lg" mb={4} fontWeight={500} lineHeight={1.1}>
          Why Choose Matt Research Academic for Your Research Journey?
        </Heading>
        <Text mt={4} mb={4} fontSize={{ base: "md", lg: "lg" }}>
          Matt Research Academic is committed to providing{" "}
          <strong>comprehensive support</strong> for PhD scholars at every step
          of their <strong>research journey.</strong> Our team of{" "}
          <strong>expert researchers</strong> offers unparalleled guidance,
          tailored to the unique demands of <strong>PhD research</strong> across
          various fields. We deliver <strong>end-to-end assistance,</strong>{" "}
          from formulating your <strong>research design</strong> and conducting
          data analysis to <strong>thesis writing</strong> and journal
          publication. With a focus on{" "}
          <strong>high-quality, original research</strong> that meets rigorous{" "}
          <strong>academic standards,</strong> we ensure your work stands out.
          Our <strong>dedicated client support</strong> team is available around
          the clock to answer questions and provide guidance.
        </Text>

        <Heading as="h3" size="lg" mb={4} fontWeight={500} lineHeight={1.1}>
          End-to-End PhD Assistance for Coding, Dissertation Writing & Journal
          Publication
        </Heading>
        <Text fontSize={{ base: "md", lg: "lg" }}>
          We provide comprehensive support to <strong>PhD candidates,</strong>{" "}
          from coding and data analysis to dissertation writing and journal
          paper submission.{" "}
          <strong>Our expert team ensures high-quality,</strong> original
          research that meets academic standards. With tailored assistance, we
          guide you through each step of <strong>your PhD journey,</strong>{" "}
          making complex tasks easier and more manageable. Trust us to help you
          achieve success in publishing and completing your doctoral studies
          efficiently.
        </Text>
      </Box>
    </Box>
  );
};

const WhyChooseUs = () => {
  return (
    <Box bg="#02428d" py={10} px={5}>
      <Heading as="h2" size="xl" color="white" mb={5} textAlign="center">
        Why Choose Our Support?
      </Heading>
      <GridItem
        bg="#02428d"
        borderRadius="md"
        m={{ base: "0px", md: "15px 100px" }}
        p={5}
        mb={{ base: "5", md: "5" }}
        boxShadow="-0px 4px 4px 4px #ecc94b"
        _hover={{
          boxShadow: "0px 6px 6px 6px #ecc94b",
          transform: "scale(1.05)",
        }}
      >
        <Flex direction="column" align="center">
          <Icon
            as={FaChalkboardTeacher}
            w={12}
            h={12}
            color="#ecc94b"
            mb={4}
            aria-label="Reliable PhD Support Experts"
          />
          <Text fontSize="lg" fontWeight="bold" color="white">
            Reliable PhD Support Experts
          </Text>
          <Text color="white">
            Our technical experts are friendly, approachable, and ready to
            assist you at every stage of your PhD journey.
          </Text>
        </Flex>
      </GridItem>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
        gap={6}
        m={{ base: "0px", md: "0px 100px" }}
        justifyContent="center"
      >
        <GridItem
          bg="#02428d"
          borderRadius="md"
          p={5}
          boxShadow="-0px 4px 4px 4px #ecc94b"
          _hover={{
            boxShadow: "0px 6px 6px 6px #ecc94b",
            transform: "scale(1.05)",
          }}
        >
          <Flex direction="column" align="center">
            <Icon
              as={FaHandsHelping}
              w={12}
              h={12}
              color="#ecc94b"
              mb={4}
              aria-label="Confidentiality and Secure Service"
            />
            <Text fontSize="lg" fontWeight="bold" color="white">
              Confidentiality and Secure Service
            </Text>
            <Text color="white">
              We ensure your project remains confidential and secure, respecting
              your privacy and trust.
            </Text>
          </Flex>
        </GridItem>
        <GridItem
          bg="#02428d"
          borderRadius="md"
          p={5}
          boxShadow="-0px 4px 4px 4px #ecc94b"
          _hover={{
            boxShadow: "0px 6px 6px 6px #ecc94b",
            transform: "scale(1.05)",
          }}
        >
          <Flex direction="column" align="center">
            <Icon
              as={FaLock}
              w={12}
              h={12}
              color="#ecc94b"
              mb={4}
              aria-label="Affordable Research Assistance"
            />
            <Text fontSize="lg" fontWeight="bold" color="white">
              Affordable Research Assistance
            </Text>
            <Text color="white">
              Our services are cost-effective, providing high-quality support at
              a reasonable price.
            </Text>
          </Flex>
        </GridItem>
        <GridItem
          bg="#02428d"
          borderRadius="md"
          p={5}
          boxShadow="-0px 4px 4px 4px #ecc94b"
          _hover={{
            boxShadow: "0px 6px 6px 6px #ecc94b",
            transform: "scale(1.05)",
          }}
        >
          <Flex direction="column" align="center">
            <Icon
              as={FaPiggyBank}
              w={12}
              h={12}
              color="#ecc94b"
              mb={4}
              aria-label="Professional Research Mentorship"
            />
            <Text fontSize="lg" fontWeight="bold" color="white">
              Professional Research Mentorship
            </Text>
            <Text color="white">
              Our experienced professionals provide expert mentorship tailored
              to your research needs.
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

const implement = keyframes`
 0% { transform: translateX(0); }
  50% { transform: translateX(20px); }  // Move 20px to the right
  100% { transform: translateX(0); }     // Return to the starting position
;`;

const ResearchImplementationServices = () => {
  return (
    <Box bg="white" p={8} maxW="1300px" mx="auto">
      <Heading
        as="h2"
        size="lg"
        textAlign="center"
        color="black"
        m={{ base: "0px 0px", md: "7px 100px" }}
        px={{ base: "0", md: "4" }}
        py={{ base: "0", md: "2" }}
      >
        Network and Model-Based Research Implementation - MATLAB, NS2, NS3,
        Simulink
      </Heading>

      <Text
        color="gray.600"
        fontSize="lg"
        textAlign="justify"
        mb={{ base: 4, md: 6 }}
      >
        Most of the universities and colleges don’t support the scholars with
        the tools required for research and the installation process of the
        research tool for the research implementation. Similarly for a research
        implementation lab or environment seeker, installing OS, Linux and other
        platforms is a big hurdle in most of the universities. The cost of
        purchasing software with a license is too expensive, which is also
        problematic to scholars who wish the implementation of their research.
        Every research for research implementation requires comprehending both
        programming skill and installation, bug fixing work, spending all the
        scholar’s precious time to get the desired research outputs.
      </Text>

      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
      >
        {/* Left Side Image */}
        <Image
          mt={5}
          src="/Matt Image4.jpg"
          alt="Matt Research Solutions Project Implementation"
          boxSize={{ base: "100%", sm: "70%", md: "40%" }}
          objectFit="cover"
          ml={{ md: 3 }}
          boxShadow="-9px 7px 7px 2px #02428d"
          mb={{ base: 4, md: 0 }}
          animation={`${implement} 3s ease-in-out infinite`}
        />

        <List
          spacing={3}
          color="gray.700"
          fontSize="lg"
          pl={{ base: "0", md: "6" }}
          ml={{ md: 6 }}
          mt={{ base: 4, md: 0 }}
        >
          {[
            "MATLAB Development for Research Projects",
            "Model-Based Research Implementation with Simulink",
            "Xilinx FPGA Research Solutions",
            "Network Research Implementation with NS2/NS3",
            "Java-Based Research Solutions for Scientific Projects",
            "Python Research Solutions for Data Analysis",
            "Advanced Research and Simulation with CADENCE",
            "Advanced Statistical Analysis and Research Implementation services",
            "Weka Data Mining and Research Solutions",
          ].map((service, index) => (
            <ListItem
              key={index}
              display="flex"
              alignItems="center"
              _hover={{ bg: "gray.200", cursor: "pointer" }}
            >
              <ListIcon as={FaGlobe} color="#02428d" boxSize={6} />
              {service}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

const implemented = keyframes`
 0% { transform: translateX(0); }
  50% { transform: translateX(20px); }  // Move 20px to the right
  100% { transform: translateX(0); }     // Return to the starting position
;`;

const OurStrengths = () => {
  return (
    <Box
      p={8}
      pt={{ base: "0", md: "5" }}
      pb={{ base: "0", md: "0" }}
      borderRadius="md"
    >
      <Text
        fontSize={{ base: "2xl", sm: "3xl" }}
        lineHeight={1.1}
        fontWeight="600"
        mb={6}
        textAlign="center"
      >
        Top Reasons to Work with Us
      </Text>

      <Flex wrap="wrap" justify="center" mb={2}>
        {/* Strength 1 */}
        <Box
          textAlign="center"
          width={{ base: "100%", sm: "48%", md: "20%" }}
          p={2}
          boxShadow="-0px 4px 4px 4px #02428d"
          mb={6}
        >
          <Icon as={FaRegMoneyBillAlt} boxSize={8} color="#ecc94b" mb={2} />
          <Text fontSize="lg" fontWeight="semibold">
            Cost-Effective Solutions
          </Text>
        </Box>

        {/* Strength 2 */}
        <Box
          textAlign="center"
          width={{ base: "100%", sm: "48%", md: "23%" }}
          p={2}
          mb={6}
          boxShadow="-0px 4px 4px 4px #02428d"
        >
          <Icon as={FaClock} boxSize={8} color="#ecc94b" mb={2} />
          <Text fontSize="lg" fontWeight="semibold">
            Timely Delivery
          </Text>
        </Box>

        {/* Strength 3 */}
        <Box
          textAlign="center"
          width={{ base: "100%", sm: "48%", md: "23%" }}
          p={2}
          mb={6}
          boxShadow="-0px 4px 4px 4px #02428d"
        >
          <Icon as={FaSmile} boxSize={8} color="#ecc94b" mb={2} />
          <Text fontSize="lg" fontWeight="semibold">
            100% Client Satisfaction
          </Text>
        </Box>

        {/* Strength 4 */}
        <Box
          textAlign="center"
          width={{ base: "100%", sm: "48%", md: "23%" }}
          p={2}
          mb={6}
          boxShadow="-0px 4px 4px 4px #02428d"
        >
          <Icon as={FaLock} boxSize={8} color="#ecc94b" mb={2} />
          <Text fontSize="lg" fontWeight="semibold">
            Secure & Confidential
          </Text>
        </Box>
      </Flex>

      <Flex wrap="wrap" justify="center" gap={2}>
        {/* Strength 5 */}
        <Box
          textAlign="center"
          width={{ base: "100%", sm: "48%", md: "23%" }}
          p={2}
          mb={6}
          boxShadow="-0px 4px 4px 4px #02428d"
        >
          <Icon as={FaCheckCircle} boxSize={8} color="#ecc94b" mb={2} />
          <Text fontSize="lg" fontWeight="semibold">
            Well-Qualified Experts
          </Text>
        </Box>

        {/* Strength 6 */}
        <Box
          textAlign="center"
          width={{ base: "100%", sm: "48%", md: "23%" }}
          p={2}
          mb={6}
          boxShadow="-0px 4px 4px 4px #02428d"
        >
          <Icon as={FaUsers} boxSize={8} color="#ecc94b" mb={2} />
          <Text fontSize="lg" fontWeight="semibold">
            Free Technical Consultation
          </Text>
        </Box>
      </Flex>

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
        gap={{ base: "0", md: "6" }}
        justifyContent="center"
        m={{ base: "0px", md: "0px 150px" }}
      >
        {/* First GridItem with Text and Icons */}
        <GridItem p={{ base: "0", md: "5" }} gap={7}>
          <Flex direction="column" align="center" alignItems="flex-start" p={5}>
            <Flex align="center" mb={6}>
              <Icon as={FaClipboard} w={6} h={6} mr={2} color="#02428d" />
              <Text fontSize="lg" fontWeight="semibold" m={0}>
                Survey Instrument
              </Text>
            </Flex>
            <Flex align="center" mb={6}>
              <Icon as={FaFlask} w={6} h={6} mr={2} color="#02428d" />
              <Text fontSize="lg" fontWeight="semibold" m={0}>
                Experimental Study
              </Text>
            </Flex>
            <Flex align="center" mb={6}>
              <Icon as={FaEdit} w={6} h={6} mr={2} color="#02428d" />
              <Text fontSize="lg" fontWeight="semibold" m={0}>
                Academic Paper Editing
              </Text>
            </Flex>
            <Flex align="center" mb={6}>
              <Icon as={FaChartBar} w={6} h={6} mr={2} color="#02428d" />
              <Text fontSize="lg" fontWeight="semibold" m={0}>
                Quantitative Data Assessment
              </Text>
            </Flex>
            <Flex align="center" mb={6}>
              <Icon as={FaPen} w={6} h={6} mr={2} color="#02428d" />
              <Text fontSize="lg" fontWeight="semibold" m={0}>
                Content Creation
              </Text>
            </Flex>
          </Flex>
        </GridItem>

        {/* GridItem with Image */}
        <GridItem>
          <Image
            src="/Matt Image10.jpg"
            alt="Research image"
            borderRadius="md"
            boxShadow="-0px 4px 4px 4px #ecc94b"
            objectFit="cover"
            m={{ base: "0px 0", md: "40px 0px 0px 30px" }}
            boxSize={{ base: "90%", md: "80%" }}
            animation={`${implemented} 3s ease-in-out infinite`}
          />
        </GridItem>

        {/* Second GridItem with Text and Icons */}
        <GridItem p={{ base: "0", md: "5" }}>
          <Flex direction="column" align="center" alignItems="flex-start" p={5}>
            <Flex align="center" mb={6}>
              <Icon as={FaBook} w={6} h={6} mr={3} color="#02428d" />
              <Text fontSize="lg" fontWeight="semibold" m={0}>
                Research Journal Submission
              </Text>
            </Flex>
            <Flex align="center" mb={6}>
              <Icon as={FaMicroscope} w={6} h={6} mr={3} color="#02428d" />
              <Text fontSize="lg" fontWeight="semibold" m={0}>
                Concept Refinement
              </Text>
            </Flex>
            <Flex align="center" mb={6}>
              <Icon as={FaRegFileAlt} w={6} h={6} mr={3} color="#02428d" />
              <Text fontSize="lg" fontWeight="semibold" m={0}>
                IEEE Research Manuscript
              </Text>
            </Flex>
            <Flex align="center" mb={6}>
              <Icon as={FaUniversity} w={6} h={6} mr={3} color="#02428d" />
              <Text fontSize="lg" fontWeight="semibold" m={0}>
                Academic Formatting
              </Text>
            </Flex>
            <Flex align="center" mb={6}>
              <Icon as={FaCogs} w={6} h={6} mr={3} color="#02428d" />
              <Text fontSize="lg" fontWeight="semibold" m={0}>
                Research Framework Design
              </Text>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

const FullProcessComponent = () => {
  return (
    <Box>
      <ThesisWritingServiceComponent />
      <CustomComponent />
      <WhyChooseUs />
      <ResearchImplementationServices />
      <OurStrengths />
    </Box>
  );
};

export default FullProcessComponent;
