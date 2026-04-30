import React from "react";
import { Box, Grid, Heading, Text, Image } from "@chakra-ui/react";

const CourseCategories = () => {
  
  const categories = [
    {
      title: "1.2 Millions",
      description: "Completed Orders.",
      icon: "/images_icon3.png",
    },
    {
      title: "2000+",
      description: "Subjects Experts.",
      icon: "/images_icon2.png",
    },
    {
      title: "163K+",
      description: "Customers Worldwide.",
      icon: "/images_icon1.png",
    },
    {
      title: "99.99%",
      description: "Satisfaction.",
      icon: "/images_icon4.png",
    },
  ];

  return (
    <Box padding={{ base: "20px", sm: "20px" }} ml={{base:'0px',lg:'30px'}} bg="white">
      <Heading textAlign="center" mb={{ base: "10px", md: "20px" }} className='component1'>
        We Are The Partner Excellence in Doctoral Writing
      </Heading>
      <Text
        textAlign={"center"}
        mx={{ base: "20px", md: "40px" }}
        mb={{ base: "15px", md: "25px" }}
        className='component1'
      >
        To see is to believe. We are a well-established PhD dissertation-writing
        agency, helping students ace their degrees since 2003. We have a lot of
        achievements that no other dissertation writing agency can claim. The
        stats below will speak for the most prominent ones:
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
        mx={{ base: "10px", sm: "40px", md: "108px" }}
        className='component1'
      >
        {categories.map((category) => (
          <Box
            key={category.title}
            borderWidth="1px"
            borderRadius="lg"
            padding={{ base: "40px", md: "40px" }}
            textAlign="center"
            bg="gray.50"
            className='component1'
            display="grid"
            justifyItems="center"
            position="relative"
            _hover={{
              "&::before": {
                width: "100%",
                height: "2px",
              },
              "&::after": {
                height: "100%",
                width: "2px",
              },
              "& .top-left, & .bottom-right": {
                width: "100%",
              },
              "& .top-right, & .bottom-left": {
                height: "100%",
              },
              boxShadow: "lg",
            }}
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            transform="scale(1)"
            _before={{
              content: '""',
              position: "absolute",
              top: "0",
              left: "0",
              width: "0",
              height: "2px",
              bg: "#02428d",
              transition: "width 0.4s ease-out",
            }}
            _after={{
              content: '""',
              position: "absolute",
              bottom: "0",
              right: "0",
              width: "2px",
              height: "0",
              bg: "#02428d",
              transition: "height 0.4s ease-out 0.4s",
            }}
          >
            {/* Additional borders for top-left and bottom-right */}
            <Box
              className="top-left"
              position="absolute"
              top="0"
              left="0"
              
              width="0"
              height="2px"
              bg="#02428d"
              transition="width 0.4s ease-out"
            />
            <Box
              className="bottom-right"
              position="absolute"
              bottom="0"
              right="0"
              width="0"
              height="2px"
              bg="#02428d"
              transition="width 0.4s ease-out 0.4s"
            />
            {/* Borders for left and right */}
            <Box
              className="top-right"
              position="absolute"
              top="0"
              right="0"
              width="2px"
              height="0"
              bg="#02428d"
              transition="height 0.4s ease-out"
            />
            <Box
              className="bottom-left"
              position="absolute"
              bottom="0"
              left="0"
              width="2px"
              height="0"
              bg="#02428d"
              transition="height 0.4s ease-out"
            />

            <Image
              src={category.icon}
              alt={`${category.title} icon`}
              boxSize={{ base: "80px", md: "100px" }}
              mb="15px"
            />
            <Heading size="md" mb="2px">
              {category.title}
            </Heading>
            <Text>{category.description}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseCategories;
