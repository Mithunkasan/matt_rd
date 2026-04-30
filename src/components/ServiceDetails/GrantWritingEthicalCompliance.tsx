import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Icon,
  Input,
  Textarea,
  HStack,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { FaWhatsapp, FaShieldAlt, FaUserShield, FaClock } from "react-icons/fa";
import ContactForm from "../ServicePageForm";
import Head from "next/head";

const PhdEndTOEnd = () => {
  return (
    <>
      <Head>
        <title>
          Grant Writing & Ethical Compliance Services | MATT Solutions
        </title>
        <meta
          name="description"
          content="Professional grant writing and ethical compliance support for researchers. Ensure your research meets all guidelines with MATT Solutions."
        />
        <meta
          name="keywords"
          content="grant writing, ethical compliance, research guidelines, MATT Solutions, PhD support"
        />
        <meta charSet="UTF-8" />
      </Head>

      <Container maxW="6xl" py={{ base: 10, md: 14 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {/* Left Section: Text Content */}
          <VStack align="start" spacing={6}>
            <Heading
              lineHeight={1.2}
              fontWeight="bold"
              color="black"
              fontSize={{ base: "2xl", md: "4xl" }}
            >
              Grant Writing & Ethical Compliance
            </Heading>
            <Text
              align="justify"
              color="gray.600"
              fontSize={{ base: "md", md: "lg" }}
            >
              Our specialized workshops and training sessions guide scholars in
              crafting a well-structured thesis. The thesis is an essential
              component for doctoral candidates, representing a concise, focused
              account of their original research journey. We offer thesis
              statement workshops that help scholars clearly define the main
              argument, insight, or perspective for their work, setting a strong
              foundation for logical and structured support throughout the
              thesis. Our training ensures that both the purpose and
              organization of the thesis are clear, empowering scholars to
              effectively present their research contributions.
            </Text>
            <Text
              align="justify"
              color="gray.600"
              fontSize={{ base: "md", md: "lg" }}
            >
              Mastering the fundamentals of thesis writing is crucial for any
              researcher or scholar. Our specialized workshops and training
              sessions focus on helping you understand the core elements of a
              thesis statement, how to structure your argument, and develop a
              clear, concise thesis that guides your research. Whether you're
              crafting an essay or a comprehensive dissertation, our workshops
              equip you with skills to create a compelling thesis statement that
              captures your key ideas. Gain insights into organizing your work,
              strengthening your argument, and delivering a thesis that meets
              academic standards and engages your readers.
            </Text>
          </VStack>

          {/* Right Section: Image and Text */}
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <VStack spacing={4} align="center" position="relative">
              <Box position="relative" w={{ base: "200px", md: "350px" }}>
                <Image
                  src="/thesis-image1.jpg" // Replace with the correct path to your image
                  alt="Thesis Writing Illustration"
                  boxSize={{ base: "200px", md: "350px" }}
                  objectFit="contain"
                />
              </Box>
            </VStack>
          </Flex>
        </SimpleGrid>

        {/* Additional Information Section */}
        <VStack spacing={2} mt={10} align="start">
          <Text align={"justify"} color={"black"}>
            <b>Customized support:</b>
            <Text fontSize={{ base: "md", md: "lg" }}>
              We offer personalized services to meet your specific needs,
              whether you need assistance with a single chapter or the entire
              thesis/dissertation.
            </Text>
          </Text>

          <Text align={"justify"} color={"black"}>
            <b>Experienced writers:</b>
            <Text fontSize={{ base: "md", md: "lg" }}>
              Our team of writers are experts in their respective fields, with
              years of experience writing and editing academic papers. Our team
              of experienced writers specializes in a wide range of academic
              fields, providing expert writing and editing services.
            </Text>
          </Text>

          <Text align={"justify"} color={"black"}>
            <b>Quality assurance:</b>
            <Text fontSize={{ base: "md", md: "lg" }}>
              We are committed to delivering high-quality work that meets your
              expectations and adheres to the highest academic standards.
            </Text>
          </Text>

          <Text align={"justify"} color={"black"}>
            <b>Timely delivery:</b>
            <Text fontSize={{ base: "md", md: "lg" }}>
              We understand the importance of meeting deadlines, and we strive
              to deliver your work on time, every time.
            </Text>
          </Text>

          <Text align={"justify"} color={"black"}>
            <b>Affordable pricing:</b>
            <Text fontSize={{ base: "md", md: "lg" }}>
              We provide cost-effective solutions for all your academic writing
              needs. With us, you won’t encounter any surprise fees—just
              straightforward, honest pricing.
            </Text>
          </Text>

          <Text align={"justify"} color={"black"}>
            <b>Confidentiality:</b>
            <Text fontSize={{ base: "md", md: "lg" }}>
              We value your privacy and guarantee that all of your personal and
              academic information will be kept confidential from unauthorized
              access.
            </Text>
          </Text>

          <Text align={"justify"} color={"black"}>
            <b>24/7 support:</b>
            <Text fontSize={{ base: "md", md: "lg" }}>
              We offer round-the-clock support to answer your questions and
              provide accurate and effective guidance on your project.
            </Text>
          </Text>

          <Text align={"justify"} color={"black"}>
            <b>Wrokshops & Training:</b>
            <Text fontSize={{ base: "md", md: "lg" }}>
              Our workshops and training programs are designed to empower
              students and researchers with essential skills in thesis writing
              and research presentation. From defining your research question to
              structuring your thesis effectively, our training covers each
              stage of the writing process. Participants learn practical
              strategies for developing a clear, impactful thesis statement,
              organizing their research, and refining their argument.
            </Text>
          </Text>
        </VStack>
      </Container>
    </>
  );
};

export const ThesisWritingServiceComponent = () => {
  const handleClick = () => {
    // Navigate to WhatsApp link immediately
    window.location.href = "https://wa.me/+918825735141";
  };
  return (
    <Flex
      position="relative"
      color="white"
      py={{ base: 8, lg: 20 }} // Adjusted padding for different breakpoints
      px={{ base: 4, lg: 20 }}
      direction={{ base: "column", lg: "row" }}
      alignItems={{ base: "center", lg: "flex-start" }}
      gap={{ base: 6, lg: 20 }} // Adjusted spacing for left and right sections
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
        maxW={{ base: "90%", sm: "80%", md: "70%", lg: "50%" }}
        textAlign={{ base: "center", lg: "left" }}
        zIndex={1}
      >
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          mb={4}
        >
          Professional <br />
          <Text as="span" color="yellow.400">
            Grant Writing & Ethical Compliance
          </Text>
        </Heading>
        <Text fontSize={{ base: "md", lg: "2xl" }} mb={6} color={"white"}>
          Complete Your Assignment With Trained Writers
        </Text>

        {/* Features */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mb={6}>
          <Flex align="center">
            <Icon as={FaShieldAlt} boxSize={6} color="yellow.400" mr={2} />
            <Text fontSize="xl" m={0} color={"white"}>
              100% Plagiarism Free
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={FaUserShield} boxSize={6} color="yellow.400" mr={2} />
            <Text fontSize="xl" m={0} color={"white"}>
              Security and Confidentiality
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={FaClock} boxSize={6} color="yellow.400" mr={2} />
            <Text fontSize="xl" m={0} color={"white"}>
              24/7 Support Till Acceptance
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={FaClock} boxSize={6} color="yellow.400" mr={2} />
            <Text fontSize="xl" m={0} color={"white"}>
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
          fontSize={{ base: "md", md: "lg" }}
          size={{ base: "md", md: "lg" }}
          mt={4}
        >
          Share Your Requirement On WhatsApp
        </Button>
      </Box>

      {/* Contact Form - Right Side */}
      <Box>
        <ContactForm />
      </Box>
    </Flex>
  );
};

const FullProcessComponent = () => {
  return (
    <Box>
      <ThesisWritingServiceComponent />
      <PhdEndTOEnd />
    </Box>
  );
};

export default FullProcessComponent;
