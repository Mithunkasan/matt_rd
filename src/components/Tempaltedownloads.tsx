import React from 'react';
import { Box, Center, Text, Flex, Icon, Link } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const AboutUsComponent: React.FC = () => {
  return (
    <Box position="relative" h="60vh" mb={10}>
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
          opacity: 0.5, // Apply opacity only to the overlay color
          zIndex: 2,
        }}
      />
      <Box position="relative" zIndex={2} p={20} color="white">
        <Center>
          <Text fontSize="3xl" fontWeight="bold" mt={20} color="white">
          Templates & Downloads
          </Text>
        </Center>
        <Flex alignItems="center" justifyContent="center" mt={3}>
          <Link href="/" fontSize="lg" mr={2} color="white">
            Home
          </Link>
          <Icon as={ArrowForwardIcon} boxSize={5} />
          <Text fontSize="lg" ml={2} color="white">
          Templates & Downloads
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUsComponent;
