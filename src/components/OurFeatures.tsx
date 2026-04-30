
import React from "react";
import {
  Box,
  Grid,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  Stack,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import ContactUs from '../components/Contactpagefrom'
import useScrollTransition from "../templates/usescrolltransition";

const PhDServices = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const services = [
    {
      title: "Expertise",
      description:
        "We have a team of experts who have years of experience in their respective fields. They have the knowledge and skills to provide high-quality services to our clients.",
      icon: "/experties.png",
    },
    {
      title: "Timely delivery",
      description:
        "We understand the importance of deadlines and make sure to deliver our services within the stipulated time. We work efficiently to ensure that our clients receive their work on time",
      icon: "/image.png",
    },
    {
      title: "Affordable prices",
      description:
        "We offer our services at reasonable prices that are affordable to our clients. We believe in providing high-quality services at a fair price.",
      icon: "/afforodable.png",
    },
    {
      title: "Excellent customer support",
      description:
        "We provide excellent customer support to our clients. Our team is always available to answer any questions and provide support throughout the process.",
      icon: "/excellent.png",
    },
    {
      title: "Customized Solutions",
      description:
        "We provide customized solutions to our clients based on their specific needs and requirements. We understand that every client is unique, so we tailor our services accordingly.",
      icon: "/customer.png",
    },
    {
      title: "Confidentiality",
      description:
        "We understand the importance of confidentiality and maintain strict confidentiality of our clients' information. We take all necessary measures to ensure that our clients' data is secure and protected.",
      icon: "/confidential.png",
    },
  ];

  return (
    <Box p={{ base: 2, md: 5 }} id="features" mt={{ base: "7px", md: "20px" }}>
      <Box p={{ base: 0, md: 4 }} id="feature" mt={{ base: "0px", md: "0px" }}>
        <Stack spacing={4} as={Container} maxW={"6xl"} textAlign={"center"}>
          <Heading className='component'>Why You Choose Us</Heading >
          <Text pb="0" color={"gray.600"} fontSize={{ base: "lg", md: "xl" }} className='component1' mb={5}>
            At <strong>Matt Research Solutions,</strong> we are committed to providing
            high-quality services to our clients. We believe in building
            long-term relationships with our clients and providing them with the
            best possible service.
          </Text>
        </Stack>

        <Box padding={{ base: "20px", md: "0px" }} bg="white" margin={{base:'0px', md: '0px 10px'}}>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={8}
            mb={8}
            className='component1'
          >
            {services.map((service) => (
              <Box
                key={service.title}
                borderWidth="1px"
                borderRadius="lg"
                padding="20px"
                bg="white"
                boxShadow="md"
                borderColor="gray.200"
                _hover={{
                  borderColor: "green.300",
                  boxShadow: "lg",
                }}
              >
                <Flex
                  direction={{ base: "column", md: "row" }}
                  align={{ base: "center", md: "flex-start" }}
                  textAlign={{ base: "center", md: "left" }}
                  mb={4}
                >
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    boxSize={{ base: "60px", md: "60px" }}
                    mb={{ base: 4, md: 0 }}
                    mr={{ md: 4 }}
                  />
                  <Flex direction="column" align={{ base: "center", md: "flex-start" }}>
                    <Heading
                      size="md"
                      color="blue.800"
                      mb={2}
                      fontSize={{ base: "lg", md: "md" }}
                    >
                      {service.title}
                    </Heading>
                    <Text fontSize={{ base: "sm", md: "md" }}>
                      {service.description}
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </Grid>
          <Flex justify="center" gap="15px">
            <Button
            className='component'
            onClick={() => window.open('https://wa.me/+918825735141', '_self')}
              size="lg"
              bg="#ecc94b"
              color="black"
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              _hover={{ bg: "#02428d", color: "white"}}
            >
              WhatsApp Now
            </Button>
            <>
      <Button
        size="lg"
        className='component'
        bg="#02428d"
        color="white"
        fontSize={{ base: "md", md: "lg", lg: "xl" }}
        _hover={{ bg: "#ecc94b", color: "black" }}
        onClick={onOpen} // Open the modal on button click
      >
        Place An Order Now
      </Button>

      {/* Modal component triggered by the button */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <ContactUs /> {/* This is where your ContactForm component is rendered */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default PhDServices;

