
import { Box, Flex, Heading, Text, Image, Stack, Icon, List, ListItem, ListIcon, Link, Button } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FaHeadphones } from "react-icons/fa";
import { useState } from "react";



const CompanyIntroComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => setIsExpanded((prev) => !prev);
  return (
    <Flex 
      direction={{ base: "column", md: "column", lg: "row" }} 
      p={{ base: 2, md: 6, lg: 8 }} 
      alignItems={{ base: "center", lg: "flex-start" }}

      bg="white" 
      m={{ base: "30px 20px", md: "50px 40px", lg: " 75px 50px 40px 100px" }}
    >
      {/* Left Section - Main Image and Overlay Text */}
      <Box 
      className="component"
        position="relative" 
        
        flex="1" 
        mr={{ base: 0, lg: 10 }} 
        mb={{ base: 8, lg: 0 }}
      >
        {/* Overlay Box for "Years of Experience" */}
        <Box 
          position="absolute" 
          top={{base:'-7', md:"-20"}} 
          left={{base:'-5', md:"-20"}}  
          bg="#02428d" 
          w={{ base: "120px", md: "150px", lg: "200px" }} 
          h={{ base: "120px", md: "150px", lg: "200px" }} 
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          justifyContent="center" 
          zIndex="1" 
          opacity={0.9}
        >
          <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" color="white" mb={0} lineHeight="1">
            10+
          </Text>
          <Text fontSize={{ base: "xs", md: "md" }} color="white" mt="2" textAlign="center">
            Years Of Experience
          </Text>
        </Box>

        {/* Main Image */}
        <Image
          src="companyphoto8.jpg"
          alt="Main Image"
          borderRadius="md"
          boxShadow="lg"
          boxSize={{ base: "250px", md: "350px", lg: "450px" }}
          zIndex="0"
        />

        {/* Small Overlapping Image */}
        <Image
          src="/companyphotos9.jpg"
          alt="Small Overlapping Image"
          position="absolute"
          right={{ base: "-50px", md: "-60px", lg: "-70px" }}
          bottom={{ base: "-40px", md: "-50px", lg: "-60px" }}
          w={{ base: "120px", md: "150px", lg: "190px" }}
          h={{ base: "120px", md: "150px", lg: "190px" }}
          objectFit="cover"
          borderRadius="md"
          border="4px solid white"
          boxShadow="md"
        />
      </Box>

      {/* Right Section - Text and Details */}
      <Box flex="2" ml={{ base: 0, md: 6, lg: 70 }} className="component1">
        <Text fontSize="lg" color="#02428d" fontWeight="bold" mb={2} mt={{base:'5',md:'0'}}>
          About Our Company
        </Text>
        <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} color="blue.900" mb={2}>
        "End-to-End PhD Support Services for Research, Writing, and Data Analysis"
        </Heading>
        <Box>
        <Text fontSize={{ base: "sm", md: "md" }} mb={4} p={0}>
          Established in 2014, <strong>Matt Research Academy</strong> specializes in providing <strong>end-to-end PhD support services, </strong>
          assisting scholars at every stage of their research journey. With a team of over <strong>60 dedicated professionals,</strong> we offer personalized 
          services including <strong>research proposal writing, data analysis, thesis writing, </strong>and <strong>publication support.</strong> Our goal is to ensure that every
          PhD candidate receives expert guidance and achieves academic success....

  {isExpanded && (
    <>
    <Text fontSize={{ base: "sm", md: "md" }} m={0} p={0}>
      Our head office is located in<strong> Nagercoil,</strong> with branches in<strong> Kochi, Kerala,</strong> and at the <strong>DMI Engineering College Campus, Aralvaimozhi,</strong> 
      as well as in <strong>Thuckalay, Nagercoil.</strong> As a subsidiary of <strong>Matt Research Solutions,</strong> we bring a strong foundation of expertise and
      innovation to our clients, offering comprehensive solutions that cater to their unique research needs.</Text>
      <Text fontSize={{ base: "sm", md: "md" }} m={0} p={0}>At Matt Research Academy, we pride ourselves on our commitment to quality, timely delivery, and academic excellence, helping 
       PhD scholars turn their research into successful submissions and publications</Text>
    </>
  )}
  <Button
  size="sm"
  onClick={toggleContent}
  color={'black'}
  variant="link"
  mt={1}
  fontWeight={'bold'}
  textDecoration='none'

>
  {isExpanded ? "Read Less" : "Read More"}
</Button>
</Text>

    </Box>

        <Flex alignItems="center" mb={2}>
        <Image
        src="/Matt Image111.jpg" // Ensure this image is in the public folder
        alt="Circular Image"
        style={{
          borderRadius: '50%',
          objectFit: 'cover',
          boxShadow: 'var(--chakra-shadows-sm)', // Chakra shadow applied
        }}
        width={150} // Match the largest size to avoid layout shifts
        height={150} // Disables Next.js image optimization
      />
          <Box>
            <Heading as="h3" fontSize={{ base: "md", md: "lg" }} color="#02428d">
            Specialized Research Services
            </Heading>
            <Text fontSize={{ base: "xs", md: "sm" }} mb={0} color="gray.600">
            Providing tailored solutions for research design, data analysis, and academic writing to support scholars and professionals.
            </Text>
            <Flex alignItems="center" color="#02428d" fontWeight="bold" mt={2}>
              <Icon as={FaHeadphones} color="#ecc94b" mr={2} />
              Get Support
            </Flex>
          </Box>
        </Flex>

        <List spacing={3} color="gray.700" p={0}>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={CheckIcon} color="#02428d" />
            <Text fontSize={{ base: "md", md: "lg" }} as="span" mb={0}>
              Learn about our team{" "}
              <Link color="#ecc94b" href="/whychooseus">
                Why Choose Us
              </Link>{" "}
              or explore our methodology for further details.
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="#02428d" mb={0}/>
            <Text fontSize={{ base: "md", md: "lg" }} as="span">
              Discover more about{" "}
              <Link color="#ecc94b" href="/whatwedo">
                Who We Are
              </Link>{" "}
              or visit our{" "}
              <Link color="#ecc94b" href="/ourprocesses">
                Our Process
              </Link>{" "}
              to learn more.
            </Text>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default CompanyIntroComponent;
