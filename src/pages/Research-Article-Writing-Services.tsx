

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script"; // Import Script from next/script
import useScrollTransition from "../templates/usescrolltransition";
import ResearchArticleComponent from "../components/ServiceBanner";


import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";


const ResearchArticleWriting: React.FC = (props) => {
  useScrollTransition()
  return (
    <div>
      <Head>
        <title>Research Article Writing Service</title>
        <meta
          name="description"
          content="Get professional research article writing services with end-to-end support, including data analysis, plagiarism-free content, and publication assistance."
        />
        <meta
          name="keywords"
          content="Research Article Writing, SCOPUS, SCI, Research Support, Publication Assistance, Data Analysis"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KBBT6T97');
          `,
          }}
        />
        {/* Google Tag Manager - noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KBBT6T97"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </Head>
      <HeaderComponent/>
      <LandingNavbar />
      <ResearchArticleComponent />

     <CourseCategories/>
     <TestimonialSection/>
      <ProcessSteps />

      

      <PhDServices/>
      {/* <ResearchHighlights /> */}
      <DissertationServiceComponent/> 
      <PhDResearchWorks />
      <ServiceSection />
      <CustomLayoutComponent />
      <WorkshopsPage/>
      {/* <ServiceTopicses /> */}
      <FinancialInstitutionCard />
      <FeatureBanner />
        {/* <ContactUs /> */}
      <FAQComponent />
      {/* <TestimonialContent /> */}
      <Footereds />
    </div>
  );
};

export default ResearchArticleWriting;

import {
  IconButton,
  Collapse,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
// import logo from '../assets/logo.jpg'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import router, { useRouter } from "next/router";
import Footered from "../components/Servicefooter";
import Footereds from "../components/Servicefooter";
import {
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import DissertationServiceComponent from "../components/WhyChooseUsSection";
import WorkshopsPage from "../components/WorkshopsPage";
import PhDResearchWorks from "../components/Achivements";
import ServiceSection from "../components/projected";
import HeaderComponent from "../components/TopNavbar";
import FAQComponent from "../components/askingquestion";
import PhDServices from "../components/OurFeatures";
import CourseCategories from "../components/carditems";
import TestimonialSection from "../components/Testominals1";
import ContactUs from "../components/ContactUss";
import FeatureBanner from "../components/FeatureBanner";

const LandingNavbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const { asPath } = router;
  const NAV_ITEMS = getNavItems(asPath);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          setIsScrolled(window.scrollY > 50); // Adjust the threshold as needed
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Box            
    position="sticky"
    top={0}
    left={0}
    right={0}
    zIndex={10}
    // boxShadow={isScrolled ? 'lg' : 'none'}
    bg={isScrolled ? useColorModeValue('white', 'gray.600'):'white'}
    transition="background-color 0.3s ease">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={{ base: "60px", md: "80px", lg: "100px" }}
        py={{ base: 2, md: 3, lg: 4 }}
        px={{ base: 4, md: 6, lg: 8 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justify={{base:"",md:'space-between'}}
      >
        <Flex display={{ base: "flex", md: "none" }} ml={{ base: 0 }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <HStack align={"center"} spacing={{ base: 2, md: 0 }}>
          <Link href="/">
            <Image src="/MattLogo.png" alt="matt logo"
            width={{ base: "40px",sm: "50px",md: "70px",lg: "90px",xl: "110px","2xl": "80px",}}
                            height={{
                                base: "40px",
                                sm: "50px",
                                md: "70px",
                                lg: "90px",
                                xl: "100px",
                                "2xl": "80px",
                            }} />
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <Heading
              m={0}
              as="h3"
              fontSize={{
                base: "18px",
                sm: "23x",
                md: "20px",
                lg: "14px",
                xl: "22px",
                "2xl": "24px",
              }}
            >
              MATT RESEARCH SOLUTIONS
            </Heading>
          </Link>
        </HStack>

        <Flex display={{ base: "none", md: "flex" }} ml={4}>
          <DesktopNav navItems={NAV_ITEMS} />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
};

const DesktopNav = ({ navItems }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={6} ml={{base:'0',md:'0'}} alignItems={"center"}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                // fontSize={useBreakpointValue({
                //   base: "sm",
                //   md: "md",
                //   lg: "lg",
                // })}
                fontSize={{
                  base: "12px",
                  sm: "14px",
                  md: "13px",
                  lg: "12px",
                  xl: "20px",
                  "2xl": "22px",
                }}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Text fontWeight={500}>{label}</Text>
        <Icon
          as={ChevronRightIcon}
          w={5}
          h={5}
          opacity={0}
          _groupHover={{ opacity: 1 }}
        />
      </Stack>
    </Link>
  );
};

const MobileNav = ({ navItems }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
      spacing={4}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{ textDecoration: "none" }}
      >
        <Text fontWeight={600}>{label}</Text>
        {children && (
          <Icon
            as={ChevronRightIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"gray.200"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const getNavItems = (currentUrl) => {
  return [
    {
      label: "Home",
    },

    {
      label: "Services",
      href: currentUrl === "/" ? "#abouts" : "#abouts",
    },

    {
      label: "Why Choose Us",
      href: currentUrl === "/" ? "#service" : "#service",
    },
    {
      label: "We Are Specialized",
      href: currentUrl === "/" ? "#serve" : "#serve",
    },
    {
      label: "FAQ",
      href: currentUrl === "/" ? "#specialized" : "#specialized",
    },
    // {
    //   label: "Contact Us",
    //   href: currentUrl === "/" ? "#contact " : "#contact",
    // },
  ];
};

// Why Choose Us//

const ResearchHighlights = () => {
  useScrollTransition()
  return (
    <Box mt={4} id="service"className="componet" >
      <Heading
        mt={4}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign="center"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
      >
        Why Choose Us
      </Heading>
      <Box
      className="component1"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        p={{ base: 4, md: 8 }}
        m={{ base: "0px", md: "0px 50px", lg: "0px 100px" }}
      >
        <Box
          borderRadius="full"
          overflow="hidden"
          w={{ base: "250px", md: "300px", lg: "350px" }}
          h={{ base: "250px", md: "300px", lg: "320px" }}
          mx={{ base: "auto", md: 0 }}
          mb={{ base: 4, md: 0 }}
        >
          <Image
            src="/whychoose.jpg"
            alt="Research Paper Illustration"
            objectFit="cover"
          />
        </Box>

        <Stack ml={{ base: 0, md: 8 }} spacing={4} mt={{ base: 4, md: 0 }} className="component">
          <List
            spacing={3}
            m={{ base: "0px 10px", md: "0px 20px", lg: "0px 50px" }}
            pl={{ base: "0px ", md: "0", lg: "2rem" }}
          >
            <ListItem fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              Our dedicated team consists of over 547 highly skilled
              professionals specializing in Engineering, Science & Technology,
              Management, and other fields.
            </ListItem>
            <ListItem fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              We guarantee the delivery of high-quality articles that meet
              SCOPUS and SCI standards, complete with a comprehensive plagiarism
              report.
            </ListItem>
            <ListItem fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              Before delivering your paper, our team will meticulously review
              and assess its overall quality, technical accuracy, and language
              clarity.{" "}
            </ListItem>
            <ListItem fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              We offer the option for a conference call or meeting to address
              your questions and provide expert assistance tailored to your
              needs.{" "}
            </ListItem>
            <ListItem fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              We will assist you in publishing your research articles in
              well-respected international journals, including SCOPUS and SCI.{" "}
            </ListItem>
            <ListItem fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              Our services include guidance on writing research articles, as
              well as proofreading and editing to ensure your work is
              publication-ready.{" "}
            </ListItem>
            <ListItem fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              Guidance & Assistance will be provided for research article
              writing with publications, proof reading and editing etc.
            </ListItem>
            <ListItem fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              We are available for inquiries around the clock, ensuring you
              receive the support you need whenever you need it.
            </ListItem>
          </List>
        </Stack>
      </Box>
    </Box>
  );
};

//        Custom Research Paper Writing Services//

type ServiceCardProps = {
  icon: any;
  title: string;
  description: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  isActive,
  onHover,
  onLeave,
}) => {
  return (
    <VStack
      bg={isActive ? "#02428d" : "white"}
      color={isActive ? "white" : "black"}
      borderRadius="lg"
      p={6}
      align="start"
      spacing={4}
      transition="all 0.3s ease"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Box
        bg={isActive ? "rgba(255, 255, 255, 0.2)" : "blue.100"}
        p={4}
        borderRadius="full"
        transition="all 0.3s ease"
      >
        <Icon as={icon} boxSize={8} color="blue.500" />
      </Box>
      <Heading fontSize="xl" color="inherit">
        {title}
      </Heading>
      <Text fontSize="lg" color="inherit">
        {description}
      </Text>
    </VStack>
  );
};

const ServiceTopicses = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardData = [
    {
      icon: FaShieldAlt,
      title: "Artificial Intelligence",
      description:
        "We specialize in the simulation of human intelligence processes by computer systems, including problem-solving, perception, and language understanding.",
      isDefault: false,
    },
    {
      icon: FaClock,
      title: "Management Studies",
      description:
        "Become a certified project manager with industry-recognized courses, equipping you with essential skills for effective project execution.",
      isDefault: true,
    },
    {
      icon: FaChartLine,
      title: "Arts & Science",
      description:
        "The fusion of Arts & Science creates a unique landscape for innovation and creativity, fostering a deeper understanding of both fields and their impact on society.",
      isDefault: false,
    },
    {
      icon: FaClock,
      title: "Social Science & Humanities",
      description:
        "Professionals in Social Science & Humanities play a vital role in addressing social challenges, promoting cultural awareness, and contributing to community development.",
      isDefault: false,
    },
    {
      icon: FaShieldAlt,
      title: "Electrical & Electronics",
      description:
        "Electrical & Electronics engineering encompasses the study of electrical systems, electronics, and telecommunications, shaping modern technology and infrastructure.",
      isDefault: false,
    },
    {
      icon: FaClock,
      title: "MBA & Marketing",
      description:
        "An MBA in marketing can significantly enhance your career prospects, opening doors to various roles in brand management, market research, and digital marketing.",
      isDefault: false,
    },
    {
      icon: FaChartLine,
      title: "Allied Health Science",
      description:
        "Educational programs in Allied Health Science provide hands-on training and knowledge in various specialties, preparing students for fulfilling careers in healthcare.",
      isDefault: false,
    },
    {
      icon: FaClock,
      title: "Machine Learning",
      description:
        "Looking to implement machine learning in your business? Our expert insights guide you through leveraging machine learning for enhanced decision-making.",
      isDefault: false,
    },
  ];

  return (
    <Box
      mb={{ base: 8, md: 16 }}
      mt={{ base: "20px", md: "50px" }}
      p={{ base: 4, md: 8 }}
      id="serve"
    >
      <Heading mt={5} mb={{ base: 10, md: 20 }} textAlign="center">
        Custom Research Paper Writing Services
      </Heading>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 4, "2xl": 4 }}
        spacing={{ base: 4, md: 6, lg: 8 }}
        mt={0}
        mx={{
          base: "10px",
          sm: "20px",
          md: "40px",
          lg: "50px",
          xl: "60px",
          "2xl": "80px",
        }}
      >
        {cardData.map((card, index) => (
          <ServiceCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
            isActive={
              isMobile ||
              hoveredIndex === index ||
              (!isMobile && card.isDefault && hoveredIndex === null)
            }
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

//testimonials//

// const slideInRight = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(100%);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// const slideOutLeft = keyframes`
//   from {
//     opacity: 1;
//     transform: translateX(0);
//   }
//   to {
//     opacity: 0;
//     transform: translateX(-100%);
//   }
// `;

// // Dynamic Testimonial Content component
// const TestimonialContent = ({ isSlidingOut, testimonial }) => (
//   <Box
//     animation={isSlidingOut ? `${slideOutLeft} 0.5s forwards` : `${slideInRight} 0.5s forwards`}
//     textAlign="center" // Center text in the box
//     p={0} // Padding to prevent overflow
//   >
//     {/* Testimonial Image */}
//     <Box position="relative" display="flex" justifyContent="center" mb={4}>
//       <Image
//         src={testimonial.image}
//         alt={testimonial.name}
//         borderRadius="full"
//         boxSize={{ base: "50px", md: "100px" }} // Responsive image size
//         objectFit="cover" // Ensures the image covers the area
//       />
//       {/* Quote Icon */}
//       <Icon
//         as={FaQuoteLeft}
//         boxSize={8}
//         color="blackAlpha.600"
//         position="absolute"
//         top={{ base: "60px", md : "60px"}}
//         left={10}
//       />
//     </Box>
//     <Flex align="center" justify="center"> {/* Centering the flex items */}
//       <VStack align="center" spacing={4} mt={2}>
//         <Text fontSize={{ base: "md", md: "lg" }} color="black" position="relative" px={4}>
//           {testimonial.text}
//           <Icon
//             as={FaQuoteLeft}
//             boxSize={6}
//             color="blackAlpha.600"
//             position="absolute"
//             bottom={{base : "-1", md : "-5"}}
//             right={'10'}
//           />
//         </Text>
//       </VStack>
//     </Flex>
//     {/* Author */}
//     <VStack display="flex" flexDirection="column" justifyContent="center" mt={6} textAlign="center">
//       <Heading as="h4" size="md" color="black">{testimonial.name}</Heading>
//       <Text fontSize="sm" color="gray.400">{testimonial.title}</Text>
//     </VStack>
//   </Box>
// );

// const Testimonial = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isSlidingOut, setIsSlidingOut] = useState(false);

//   // Array of testimonials with dynamic content
//   const testimonials = [
//     {
//       image: "https://optolite.mattengg.com/images/testmonial_kastuba.jpeg",  // Change this to any image URL or path
//       name: "Kashtua Tubqaz",
//       title: "Project Manager, Almohiet company",
//       text: "I had the pleasure of working with this company on a recent project, One of the things that stood out to me the most was the exceptional level of customer service that Matt Engineering Solutions provided. They were always available to answer any questions or concerns that I had, and they were proactive in keeping me updated on the progress of the project."
//     },
//     {
//       image: "https://i.pravatar.cc/150?img=32", // Change to actual image path
//       name: "Mohamed Irfan P.M",
//       title: "Asst. Operations Manager, RANCO Group of Companies",
//       text: "I am happy to provide a testimonial for Matt Engineering Solutions. My experience with this company has been exceptional, and I highly recommend them to anyone looking for top-notch engineering solutions. They are dedicated to ensuring that their clients are completely satisfied with their work, and they go above and beyond to ensure that everything is done right."
//     },
//     {
//       image: "https://optolite.mattengg.com/images/testi_3.jpeg", // Change to actual image path
//       name: "Abdulhamid Omar",
//       title: "Lecturer, Alfurat National University Agthabiya",
//       text: "I recently worked with Matt Engineering Solutions on a complex engineering project and I was thoroughly impressed by their professionalism and expertise. The team was highly knowledgeable and dedicated to delivering high-quality results within our project timelines. Exceptional level of customer service that exceeds expectations, leaving the recipient amazed or deeply impressed."
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsSlidingOut(true);
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//         setIsSlidingOut(false);
//       }, 500); // Wait for the slide-out animation before switching
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   return (
//     <Box m={{ base: "20px", md: "50px" }}> {/* Responsive margins */}
//       <Text
//         fontSize={{ base: "2xl", md: "3xl" }} // Responsive font size
//         color="black"
//         fontWeight="bold"
//         mb={6}
//         textAlign="center" // Center text on all screens
//       >
//         Testimonials
//       </Text>
//       <Box
//         bg="white" // Background color for contrast
//         color="black"
//         p={0} // Reduced padding to prevent overflow
//         borderRadius="lg"
//         maxW={{ base: "100%", md: "80%" }} // Responsive max width
//         mx="auto" // Centering the box
//         overflow="hidden" // Prevents overflow of child elements
//       >
//         {/* Keep the container static */}
//         <Box key={currentIndex}>
//           <TestimonialContent
//             isSlidingOut={isSlidingOut}
//             testimonial={testimonials[currentIndex]}
//           />
//         </Box>
//         {/* Dot Navigation */}
//         <HStack spacing={2} justify="center" mt={4}>
//           {testimonials.map((_, index) => (
//             <Box
//               key={index}
//               height="10px"
//               width="10px"
//               borderRadius="full"
//               bg={currentIndex === index ? "blue.500" : "gray.300"}
//               transition="background-color 0.3s"
//             />
//           ))}
//         </HStack>
//       </Box>
//     </Box>
//   );
// };

//imagesection

const CustomLayoutComponent = () => {

  const handleClick = () => {
      router.push('/clienttestimonials');
    };
return (
  <Box>
  <Flex 
    p={8} 
    direction={{ base: 'column', md: 'row' }} 
    justifyContent="center" 
    maxWidth={1400} 
    gap={4}  // Adjust gap here for spacing
    m={{ base: '0', md: '0px 100px' }}
  >
    {/* Left-side Full-Width Image */}
    <Box flex="1" display="flex" justifyContent="center" className='component'>
      <Image
        src="/companyphotos7.jpg" // Replace with your actual image URL
        alt="Main image on the left"
        borderRadius="md"
        objectFit="cover"
        width="100%" // You can adjust this width as needed
        height="auto"
        _hover={{ opacity: 0.7 }} // Opacity change on hover
        transition="opacity 0.3s ease" // Smooth transition effect
      />
    </Box>

    {/* Right-side Column Layout */}
    <VStack flex="2" spacing={4} align="stretch" className='component1'>
      {/* Top Section with Two Images of Specific Widths */}
      <Flex gap={4}>
        <Box width="55%" height="auto" display="flex" justifyContent="center">
          <Text
            bg="#02428d"
            color="white"
            borderRadius="md"
            width="100%"
            height="190px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            fontSize="lg"
          >
           Our Gallery <br />"Here, we partner with other businesses."
          </Text>
        </Box>
        <Box width="35%" display="flex" justifyContent="center">
          <Image
            src="/companyphotos18.jpg" // Replace with your actual image URL
            alt="Top right small image"
            borderRadius="md"
            objectFit="cover"
            width="100%"
            height="190px" // Set consistent height for alignment
            _hover={{ opacity: 0.7 }} // Opacity change on hover
            transition="opacity 0.3s ease" // Smooth transition effect
          />
        </Box>
      </Flex>

      {/* Bottom Section with Two Images of Specific Widths */}
      <Flex gap={4}>
        <Box width="45%" display="flex" justifyContent="center">
          <Image
            src="/companyphoto11.jpg" // Replace with your actual image URL
            alt="Bottom left small image"
            borderRadius="md"
            objectFit="cover"
            width="100%"
            height="190px" // Set consistent height
            _hover={{ opacity: 0.7 }} // Opacity change on hover
            transition="opacity 0.3s ease" // Smooth transition effect
          />
        </Box>
        <Box width="45%" display="flex" justifyContent="center">
          <Image
            src="/companyphotos13.jpg" // Replace with your actual image URL
            alt="Bottom right small image"
            borderRadius="md"
            objectFit="cover"
            width="100%"
            height="190px" // Set consistent height for alignment
            _hover={{ opacity: 0.7 }} // Opacity change on hover
            transition="opacity 0.3s ease" // Smooth transition effect
          />
        </Box>
      </Flex>
    </VStack>
  </Flex>
  <Box display={'flex'} justifyContent={'center'} alignItems={'center'} className='component1'>
      <Button onClick={handleClick} bg={'#02428d'} color={'white'}
      _hover={{bg:'#ecc94b',color:'black'}}>
          VIEW ALL
      </Button>
      </Box>
  </Box>
);
};

// Our Services//

const steps = [
  {
    id: 1,
    title: "Research Article Writing",
    description:
      "Looking for research article writing? Our expert writers provide top-notch research articles, tailored for your needs ensuring clarity, precision, and adherence to academic standards to the required guidelines.",
    icon: "service-article.png",
  },
  {
    id: 2,
    title: "Thesis/Dissertation Writing",
    description:
      "With our professional thesis/dissertation writing service, you can focus on your research while we handle the writing and formatting for a polished final product to university guidelines.",
    icon: "service-thesis.png",
  },
  {
    id: 3,
    title: "Review Article Writing/Editing",
    description:
      "From literature reviews to systematic reviews, our experts offer tailored support for writing and editing review articles, ensuring they are ready for submission to top-tier journals.",
    icon: "service-articles.png",
  },
  {
    id: 4,
    title: "Publication Support",
    description:
      "Get comprehensive publication support services, including manuscript preparation, journal selection, and submission guidance. Achieve your publication goals with our expert assistance.",
    icon: "service-publication.png",
  },
  {
    id: 5,
    title: "Project Development / Implementation",
    description:
      "Get expert project development and implementation services for your business. We offer tailored solutions to ensure efficient project delivery and successful outcomes.",
    icon: "service-project.png",
  },
  {
    id: 6,
    title: "Proposal Writing/Editing",
    description:
      "Whether you need help drafting a new proposal or refining an existing one, our team provides comprehensive support for all types of proposals, including research proposals, business plans, and grant applications.",
    icon: "service-proposal.png",
  },
  {
    id: 7,
    title: " Proofreading Services",
    description:
      "Our proofreading services are designed to help students, researchers, authors, and businesses perfect their writing. We catch grammar errors, typos, and to ensure your work is polished and publication-ready.",
    icon: "service-proofreading.png",
  },
  {
    id: 8,
    title: "PhD End to End Assistance",
    description:
      "Our PhD end to end assistance services are designed to support doctoral candidates at every stage of their research journey. From research design to data analysis, we provide to ensure a smooth.",
    icon: "service-phd.png",
  },
  {
    id: 9,
    title: "Plagiarism free Writing/Editing",
    description:
      "Get plagiarism-free writing and editing services to ensure original and high-quality content. Our experts deliver customized writing and thorough editing, ensuring zero plagiarism meet academic and professional standards.",
    icon: "service-plagram.png",
  },
  {
    id: 10,
    title: "Serve Data Analysis",
    description:
      "Get professional data analysis services to uncover insights and drive informed decision-making. Our experts provide tailored  you make data-driven decisions analysis solutions for businesses and  you make data-driven decisions research.",
    icon: "service-date.png",
  },
  {
    id: 11,
    title: "Journal Publication Support ",
    description:
      "Our journal publication services are designed to assist researchers and academics in getting their work published in high-impact journals. From manuscript editing to navigating the submission process, we are  support.",
    icon: "service-journal.png",
  },
  {
    id: 12,
    title: "Article Translation Services",
    description:
      "Our article translation services are designed to help authors, businesses, and researchers communicate effectively across language barriers. We provide accurate translations that preserve the original meaning and context.",
    icon: "service-translate.png",
  },
  // ...other steps
];

const ProcessSteps = () => {
  useScrollTransition()
  return (
    <Box mb={6} mt={{ base: "20px", md: "50px" }} id="abouts" className="component">
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        textAlign="center"
        mb={{ base: "10px", md: "15px" }}
        color="black"
        className="component1"
      >
        Our Services
      </Heading>
      <Text
        color="black"
        textAlign="center"
        fontSize={{ base: "md", md: "lg" }}
        mx={{ base: "10px", md: "90px" }}
        className="component1"
      >
        Our expert team offers top-notch research article writing services
        across all fields. We ensure your paper stands out, helping you achieve
        publication in prestigious journals like SCOPUS, SCI, and more
        quality-driven writing support.
      </Text>

      <Flex
        justify="space-between"
        wrap="wrap"
        gap={{ base: 4, md: 10 }}
        p={{ base: 4, md: 10 }}
        mx={{ base: "10px", md: "30px" }}
      >
        {steps.map((step) => (
          <Box
            key={step.id}
            bg="white"
            boxShadow="2xl"
            p={{ base: 0, md: 8 }}
            borderRadius="lg"
            textAlign="center"
            flex="1"
            minW={{ base: "100%", sm: "300px" }}
            maxW={{ base: "100%", md: "350px" }}
          >
            <Text
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              color="#02428d"
              mb={4}
              style={{
                WebkitTextStroke: "1px #02428d", // Adds the outlined effect for the number
                color: "transparent", // Makes the fill transparent, leaving only the outline
              }}
            >
              {step.id < 10 ? `0${step.id}` : step.id}
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              color="gray.800"
              mb={2}
              className="component1"
            >
              {step.title}
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} color="gray.500" mb={4} className="component1">
              {step.description}
            </Text>
            <Image
              src={step.icon}
              alt={step.title}
              boxSize={{ base: "50px", md: "70px" }}
              mx="auto"
              className="component1"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

// Contact Information//

// const ContactComponent = () => {
//   useScrollTransition();
//   const cardData = [
//     {
//       title: "Contact Details",
//       details: [
//         { label: "Country", value: "india" },
//         { label: "City", value: "Kanyakumari" },
//         {
//           label: "Street",
//           value: "3rd floor,Pillars gate, Vadasery, Tamil Nadu 629001",
//         },
//       ],
//     },
//     {
//       title: "Contact Info",
//       details: [
//         {
//           label: "HeadOffice",
//           value: "Pillar Gate,Vadasery Kanyakumari Dist,Tamil Nadu",
//         },
//         {
//           label: "BranchOffice",
//           value: "HMT Junction,Kalamassery,Ernakulam-683104",
//         },
//       ],
//     },
//     {
//       title: "Support Information",
//       details: [
//         { label: "Email", value: "info@mattengg.com" },
//         { label: "Office", value: " 7305197833" },
//         { label: "Personal", value: "9486178103" },
//       ],
//     },
//   ];

//   return (
//     <Box bg="#02428d" id="contact">
//       <Box
//         color="white"
//         className="component"
//         p={{ base: 0, md: 8 }}
//         m={{ base: "15px", md: "40px 80px" }}
//       >
//         <Heading
//           as="h2"
//           size="xl"
//           mt={10}
//           mb={6}
//           textAlign={{ base: "center", md: "left" }}
//           className="component1"
//         >
//           Contact Information
//         </Heading>
//         <SimpleGrid
//           columns={{ base: 1, md: 3 }}
//           spacing={{ base: 6, md: 10 }}
//           textAlign="center"
//         >
//           {cardData.map((card, index) => (
//             <Box
//               key={index}
//               bg="white"
//               p={6}
//               borderRadius="md"
//               boxShadow="lg"
//               className="component1"
//               color="black"
//               textAlign="center" // This ensures the text is centered within each box
//               display="flex"
//               flexDirection="column" // Aligns the content vertically
//               alignItems="center" // Centers items horizontally
//             >
//               <Heading as="h2" size="lg" mb={4} className="component1">
//                 {card.title}
//               </Heading>
//               {card.details.map((detail, idx) => (
//                 <Text mb={2} key={idx} textAlign="center" className="component1">
//                   {" "}
//                   {/* Ensures each detail is centered */}
//                   {detail.label}: <strong>{detail.value}</strong>
//                 </Text>
//               ))}
//             </Box>
//           ))}
//         </SimpleGrid>

//         {/* Contact Form */}
//         <Box mt={16} mb={4} className="component">
//           <Heading
//             as="h2"
//             size="xl"
//             mb={6}
//             textAlign={{ base: "center", md: "left" }}
//             className="component1"
//           >
//             Get in Touch
//           </Heading>
//           <Flex
//             direction={{ base: "column", md: "row" }}
//             gap={{ base: 4, md: 8 }}
//             className="component1"
//           >
//             {/* Left Side - Form */}
//             <Box flex="1">
//               <Input
//                 placeholder="Name"
//                 mb={5}
//                 bg="white"
//                 color="black"
//                 width="100%"
//               />
//               <Input
//                 placeholder="Email"
//                 mb={5}
//                 bg="white"
//                 color="black"
//                 width="100%"
//               />
//               <Input
//                 placeholder="Phone Number"
//                 mb={5}
//                 bg="white"
//                 color="black"
//                 width="100%"
//               />
//               <Textarea
//                 placeholder="Message"
//                 mb={5}
//                 bg="white"
//                 color="black"
//                 width="100%"
//                 resize="none"
//               />
//               <Button
//                 colorScheme="yellow"
//                 size="lg"
//                 width={{ base: "100%", md: "50%" }}
//                 className="component1"
//               >
//                 Send Message
//               </Button>
//             </Box>

//             {/* Right Side - Google Maps iFrame */}
//             <Box
//               flex="1"
//               display="flex"
//               justifyContent="center"
//               alignItems="center"
//               className="component1"
//             >
//               <Box width="100%" height={{ base: "300px", md: "450px" }}>
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15796.338235398931!2d77.4234810396794!3d8.194236858160197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f12c4c0c91c5%3A0xedce33c89801651!2sVadasery%2C%20Tamil%20Nadu%20629001!5e0!3m2!1sen!2sin!4v1729260315764!5m2!1sen!2sin"
//                   width="100%"
//                   height="90%"
//                   style={{ border: "none", borderRadius: "8px" }}
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </Box>
//             </Box>
//           </Flex>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

//Publication Assistant//

const FinancialInstitutionCard = () => {
  const logos = ["scopus.png", "cross.png", "ESCi.png", "SCi.png"];
  useScrollTransition();
  return (
    <Box
      textAlign="center"
      mt={8}
      mb={8}
      px={{ base: 4, md: 8 }}
      id="specialized"
      className="component"
    >
      <Heading as="h2" size="lg" mb={10} className="component1">
        Publication Assistant
      </Heading>
      <SimpleGrid
        columns={{ base: 2, sm: 2, md: 3, lg: 4, xl: 4 }} // Adjusted for better mobile experience
        spacing={{ base: 4, md: 5 }}
        className="component1" // Spacing can also vary based on screen size
      >
        {logos.map((logo, index) => (
          <Flex
            key={index}
            justifyContent="center"
            alignItems="center"
            p={4}
            borderRadius="md"
            bg="white"
            ml={{ base: "0px", md: "40px" }}
            _hover={{ boxShadow: "lg" }}
          >
            <Image
              src={logo}
              objectFit={"contain"}
              alt={`Logo ${index + 1}`}
              boxSize={{ base: "80px", md: "120px", lg: "130px" }} // Responsive logo sizes
            />
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};
