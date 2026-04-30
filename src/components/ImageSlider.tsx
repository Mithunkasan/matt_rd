import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Heading,
  useBreakpointValue,

} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Research() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isSmallMobile = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
  });

  // State to control the active slide
  const [selectedSlide, setSelectedSlide] = useState(0);

  // Effect to randomly select a slide on mount
  useEffect(() => {
    const randomSlide = Math.floor(Math.random() * 5); // Randomly choose a slide (0, 1, or 2)
    setSelectedSlide(randomSlide);
  }, []);

  // Effect to cycle through slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedSlide((prev) => (prev + 1) % 5); // Change the slide every 3 seconds
    }, 3000); // Adjust the time (in milliseconds) as needed

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);



  return (
    <>
                 <Head>
              <meta name="title" content="PhD Research Support & Thesis Writing | MATT Research Solutions" />
              <meta
                name="description"
                content="MATT Research Solutions offers expert PhD assistance, thesis writing services, SCOPUS journal support, and training for researchers. Explore top-notch research guidance today!"
              />
              <meta
                name="keywords"
                content="PhD assistance, thesis writing, SCOPUS journal support, research training, MATT Research Solutions"
              />
              <meta charSet="UTF-8" />
            </Head>
      <Box
        w="100%"
        h={isSmallMobile ? "250px" : isMobile ? "300px" : "500px"}
        position="relative"
        bg="gray.800"
        className="component"
      >
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          selectedItem={selectedSlide} // Set the selected slide
          onChange={(index) => setSelectedSlide(index)} // Update selectedSlide on manual change
        >
          {/* Slide 1 */}
          <Box
            h={isSmallMobile ? "250px" : isMobile ? "300px" : "500px"}
            w="100%"
            bgImage="url('/companyphotos11.jpg')"
            bgSize="cover"
            bgPos="center"
          >
            <VStack
              margin={isSmallMobile ? "0 0px" : isMobile ? "0 0px" : "0 0px"}
              align="flex-start"
              justify="center"
              spacing={isSmallMobile ? 3 : isMobile ? 4 : 6}
              bg="rgba(0, 0, 0, 0.5)"
              p={isSmallMobile ? 5 : isMobile ? 4 : 8}
              h="100%"
              color="white"
              mb={5}
            >
              <Button
                colorScheme="white"
                size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                backgroundColor="gray"

              >
                PhD Journey Support
              </Button>
              <Heading
                size="xl"
                fontSize={isSmallMobile ? "lg" : isMobile ? "xl" : "200%"}
              >
                “Comprehensive PhD Support from Proposal to Thesis Submission”
              </Heading>
              <Text
                fontSize={isSmallMobile ? "sm" : isMobile ? "md" : "lg"}
                color="white"
                textAlign="left"
              >
                “End-to-end services including research design, data analysis,
                writing, and publication support.”
              </Text>
              <HStack spacing={isSmallMobile ? 1 : isMobile ? 2 : 4}>
                <Button
                  color="white"
                  bg={"#02428d"}
                  size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                  _hover={{
                    bg: "#ecc94b",
                    color: "black",
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  colorScheme="whiteAlpha"
                  size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                >
                  Explore Our Services
                </Button>
              </HStack>
            </VStack>
          </Box>

          {/* Slide 2 */}
          <Box
            h={isSmallMobile ? "250px" : isMobile ? "300px" : "500px"}
            w="100%"
            bgImage="url('/researchs.jpg')"
            bgSize="cover"
            bgPos="center"
            width="100%"
            height="100%"
            objectFit="cover"
            filter="brightness(1.1) contrast(0.9) saturate(0.8)"
          >
            <VStack
              align="flex-start"
              justify="center"
              spacing={isSmallMobile ? 1 : isMobile ? 4 : 6}
              bg="rgba(0, 0, 0, 0.5)"
              p={isSmallMobile ? 5 : isMobile ? 4 : 8}
              h="100%"
              color="white"
            >
              <Button
                colorScheme="white"
                size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                backgroundColor="gray"
              >
                Expert Thesis Writing and Editing
              </Button>
              <Heading
                size="xl"
                fontSize={isSmallMobile ? "18px " : isMobile ? "xl" : "200%"}
                textAlign={"left"}
              >
                “Professional Thesis Writing & Editing Services”
              </Heading>
              <Text
                fontSize={isSmallMobile ? "sm" : isMobile ? "md" : "lg"}
                color="white"
                textAlign="left"
              >
                “Ensure your thesis is polished and ready for submission with
                our expert editing, formatting, and plagiarism-check services.”
              </Text>
              <HStack spacing={isSmallMobile ? 1 : isMobile ? 2 : 4}>
                <Button
                  color="white"
                  bg={"#02428d"}
                  size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                  _hover={{
                    bg: "#ecc94b",
                    color: "black",
                  }}
                >
                  Learn More
                </Button>
                <Button
                  variant="outline"
                  colorScheme="whiteAlpha"
                  size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                >
                  Start Your Thesis
                </Button>
              </HStack>
            </VStack>
          </Box>

          {/* Slide 3 */}
          <Box
            h={isSmallMobile ? "250px" : isMobile ? "300px" : "500px"}
            w="100%"
            bgImage="url('/research2.jpg')"
            bgSize="cover"
            bgPos="center"
            objectFit={"contain"}
          >
            <VStack
              align="flex-start"
              justify="center"
              spacing={isSmallMobile ? 3 : isMobile ? 4 : 6}
              bg="rgba(0, 0, 0, 0.5)"
              p={isSmallMobile ? 3 : isMobile ? 4 : 8}
              h="100%"
              color="white"
            >
              <Button
                colorScheme="white"
                size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                backgroundColor="gray"
              >
                Research Proposal Writing
              </Button>
              <Heading
                size="xl"
                fontSize={isSmallMobile ? "lg" : isMobile ? "xl" : "200%"}
                textAlign="left"
              >
                “Struggling to Find the Right Research Topic?”
              </Heading>
              <Text
                fontSize={isSmallMobile ? "sm" : isMobile ? "md" : "lg"}
                color="white"
                textAlign="left"
              >
                “We’ll help you choose a strong, research-worthy topic and draft
                a compelling proposal that stands out.”
              </Text>
              <HStack spacing={isSmallMobile ? 1 : isMobile ? 2 : 4}>
                <Button
                  color="white"
                  bg={"#02428d"}
                  size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                  _hover={{
                    bg: "#ecc94b",
                    color: "black",
                  }}
                >
                  Get Help with Your Proposal
                </Button>
                <Button
                  variant="outline"
                  colorScheme="whiteAlpha"
                  size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                >
                  Request a Consultation
                </Button>
              </HStack>
            </VStack>
          </Box>

          {/* Slide 4 */}
          <Box
            h={isSmallMobile ? "250px" : isMobile ? "300px" : "500px"}
            w="100%"
            bgImage="url('/research3.jpg')"
            bgSize="cover"
            bgPos="center"
          >
            <VStack
              align="flex-start"
              justify="center"
              spacing={isSmallMobile ? 1 : isMobile ? 4 : 6}
              bg="rgba(0, 0, 0, 0.5)"
              p={isSmallMobile ? 5 : isMobile ? 4 : 8}
              h="100%"
              color="white"
            >
              <Button
                colorScheme="white"
                size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                backgroundColor="gray"
              >
                Data Analysis & Implementation Support
              </Button>
              <Heading
                size="xl"
                fontSize={isSmallMobile ? "lg" : isMobile ? "xl" : "200%"}
                textAlign="left"
              >
                “Advanced Data Analysis and Research Implementation”
              </Heading>
              <Text
                fontSize={isSmallMobile ? "sm" : isMobile ? "md" : "lg"}
                color="white"
                textAlign="left"
              >
                “From data collection to analysis and implementation, we provide
                expert support using tools like SPSS, Python, R, and MATLAB.”
              </Text>
              <HStack spacing={isSmallMobile ? 1 : isMobile ? 2 : 4}>
                <Button
                  color="white"
                  bg={"#02428d"}
                  size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                  _hover={{
                    bg: "#ecc94b",
                    color: "black",
                  }}
                >
                  Discover How We Can Help
                </Button>
                <Button
                  variant="outline"
                  colorScheme="whiteAlpha"
                  size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                >
                  Explore Data Services
                </Button>
              </HStack>
            </VStack>
          </Box>
          {/* Slide 5 */}
          <Box
            h={isSmallMobile ? "250px" : isMobile ? "300px" : "500px"}
            w="100%"
            bgImage="url('/phds.jpg')"
            bgSize="cover"
            bgPos="center"
          >
            <VStack
              align="flex-start"
              justify="center"
              spacing={isSmallMobile ? 1 : isMobile ? 4 : 6}
              bg="rgba(0, 0, 0, 0.5)"
              p={isSmallMobile ? 5 : isMobile ? 4 : 8}
              h="100%"
              color="white"
            >
              <Button
                colorScheme="white"
                size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                backgroundColor="gray"
              >
                Journal Publication Support
              </Button>
              <Heading
                size="xl"
                fontSize={isSmallMobile ? "lg" : isMobile ? "xl" : "200%"}
                textAlign="left"
              >
                “Get Your Research Published in Top Journals”
              </Heading>
              <Text
                fontSize={isSmallMobile ? "sm" : isMobile ? "md" : "lg"}
                color="white"
                textAlign="left"
              >
                “Our team will help you craft a high-quality manuscript,
                identify the right journal, and navigate the submission
                process.”
              </Text>
              <HStack spacing={isSmallMobile ? 1 : isMobile ? 2 : 4}>
                <Button
                  color="white"
                  bg={"#02428d"}
                  size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                  _hover={{
                    bg: "#ecc94b",
                    color: "black",
                  }}
                >
                  Learn More
                </Button>
                <Button
                  variant="outline"
                  colorScheme="whiteAlpha"
                  size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                >
                  Submit Your Manuscript
                </Button>
              </HStack>
            </VStack>
          </Box>
          {/* Slide 6 */}
          {/* <Box
          h={isSmallMobile ? "250px" : isMobile ? "300px" : "500px"}
          w="100%"
          bgImage="url('/data-banner.png')"
          bgSize="cover"
          bgPos="center"
        >
          <VStack
            align="flex-start"
            justify="center"
            spacing={isSmallMobile ? 3 : isMobile ? 4 : 6}
            bg="rgba(0, 0, 0, 0.5)"
            p={isSmallMobile ? 5 : isMobile ? 4 : 8}
            h="100%"
            color="white"
          >
            <Button
              colorScheme="white"
              size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
              backgroundColor="gray"
            >
             Mock Defense & PhD Viva Preparation 
            </Button>
            <Heading
              size="xl"
              fontSize={isSmallMobile ? "lg" : isMobile ? "xl" : "200%"}
              textAlign="left"
            >
              “Ace Your PhD Defense with Confidence”
            </Heading>
            <Text
              fontSize={isSmallMobile ? "sm" : isMobile ? "md" : "lg"}
              color="white"
              textAlign="left"
            >
             “Prepare for your viva with our mock defense sessions, presentation coaching, and expert feedback.”            </Text>
            <HStack spacing={isSmallMobile ? 1 : isMobile ? 2 : 4}>
              <Button
                color="white"
                bg={"#02428d"}
                size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                _hover={{
                  bg: "#ecc94b",
                  color: "black",
                }}
              >
               Book Your Mock Defense
              </Button>
              <Button
                variant="outline"
                colorScheme="whiteAlpha"
                size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
              >
              Prepare for Viva
              </Button>
            </HStack>
          </VStack>
        </Box>
        {/* Slide 7 */}
          {/* <Box
          h={isSmallMobile ? "250px" : isMobile ? "300px" : "500px"}
          w="100%"
          bgImage="url('/data-banner.png')"
          bgSize="cover"
          bgPos="center"
        >
          <VStack
            align="flex-start"
            justify="center"
            spacing={isSmallMobile ? 3 : isMobile ? 4 : 6}
            bg="rgba(0, 0, 0, 0.5)"
            p={isSmallMobile ? 5 : isMobile ? 4 : 8}
            h="100%"
            color="white"
          >
            <Button
              colorScheme="white"
              size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
              backgroundColor="gray"
            >
            Data Visualization & Presentation Support 
            </Button>
            <Heading
              size="xl"
              fontSize={isSmallMobile ? "lg" : isMobile ? "xl" : "200%"}
              textAlign="left"
            >
              “Data Visualization & Presentation for Your Research”
            </Heading>
            <Text
              fontSize={isSmallMobile ? "sm" : isMobile ? "md" : "lg"}
              color="white"
              textAlign="left"
            >
              “We help you present your data with clear, impactful visuals and slides that effectively communicate your findings.”MATLAB.”
            </Text>
            <HStack spacing={isSmallMobile ? 1 : isMobile ? 2 : 4}>
              <Button
                color="white"
                bg={"#02428d"}
                size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                _hover={{
                  bg: "#ecc94b",
                  color: "black",
                }}
              >
               Create Powerful Visuals
              </Button>
              <Button
                variant="outline"
                colorScheme="whiteAlpha"
                size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
              >
               View Our Work
              </Button>
            </HStack>
          </VStack>
        </Box> */}
          {/* Slide 8 */}
          {/* <Box
          h={isSmallMobile ? "250px" : isMobile ? "300px" : "500px"}
          w="100%"
          bgImage="url('/data-banner.png')"
          bgSize="cover"
          bgPos="center"
        >
          <VStack
            align="flex-start"
            justify="center"
            spacing={isSmallMobile ? 3 : isMobile ? 4 : 6}
            bg="rgba(0, 0, 0, 0.5)"
            p={isSmallMobile ? 5 : isMobile ? 4 : 8}
            h="100%"
            color="white"
          >
            <Button
              colorScheme="white"
              size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
              backgroundColor="gray"
            >
             Tailored PhD Workshops & Training
            </Button>
            <Heading
              size="xl"
              fontSize={isSmallMobile ? "lg" : isMobile ? "xl" : "200%"}
              textAlign="left"
            >
              “PhD Workshops: Research Methodologies, Writing, and More”
            </Heading>
            <Text
              fontSize={isSmallMobile ? "sm" : isMobile ? "md" : "lg"}
              color="white"
              textAlign="left"
            >
             “Join our workshops to sharpen your skills in academic writing, data analysis, and thesis preparation.”
            </Text>
            <HStack spacing={isSmallMobile ? 1 : isMobile ? 2 : 4}>
              <Button
                color="white"
                bg={"#02428d"}
                size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
                _hover={{
                  bg: "#ecc94b",
                  color: "black",
                }}
              >
               View Workshop Calendar
              </Button>
              <Button
                variant="outline"
                colorScheme="whiteAlpha"
                size={isSmallMobile ? "xs" : isMobile ? "sm" : "lg"}
              >
               Join a Workshop
              </Button>
            </HStack>
          </VStack>
        </Box>*/}
        </Carousel>
      </Box>
    </>
  );
}
