import React from 'react';
import { Box, Flex, Image, VStack, Text, Button } from '@chakra-ui/react';
import router from 'next/router';
import useScrollTransition from '../templates/usescrolltransition';

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

export default CustomLayoutComponent;
