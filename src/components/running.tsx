

import { Box, Flex, Text, Image, Heading } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

// Keyframe for left-to-right scrolling (top text)
const scrollLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

// Keyframe for right-to-left scrolling (bottom text)
const scrollRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const ScrollingText = () => {
  return (
    <Flex direction="column" align="center" justify="center" bg="" color="" h="" overflow="hidden">
      {/* Top Scrolling Text - Left to Right */}
      <Box w="100%" overflow="hidden" whiteSpace="nowrap" mb={4}>
        <Heading
          as="span"
          display="inline-block"
          // fontSize="5xl"
          fontWeight="bold"
          color='black'
          textTransform={'uppercase'}
          animation={`${scrollLeft} 40s linear infinite`} // Ensure animation time is the same for both top and bottom
        >
          Expertise &nbsp;
          <Image src="/qqqq.png" alt="Arrow" display="inline-block" boxSize="24px" rounded={'full'} bg={''} mr={15} />
          Timely delivery &nbsp;
          <Image src="/qqqq.png" alt="Arrow" display="inline-block" boxSize="24px" mr={15} />
          Affordable prices &nbsp;
          <Image src="/qqqq.png" alt="Arrow" display="inline-block" boxSize="24px" mr={15} />
          Customized Solutions &nbsp;
          <Image src="/qqqq.png" alt="Arrow" display="inline-block" boxSize="24px" mr={15} />
          Customized Solutions &nbsp;
          <Image src="/qqqq.png" alt="Arrow" display="inline-block" boxSize="24px" mr={15} />
          Excellent customer support &nbsp;
         
          

        </Heading>
      </Box>

      {/* Bottom Scrolling Text - Right to Left */}
      <Box w="100%" overflow="hidden" whiteSpace="nowrap">
        <Heading
        bgGradient="linear(to-l,cyan.300,blue.400,pink.600)" bgClip="text"
          as="span"
          display="inline-block"

          // fontSize="5xl"
          textTransform={'uppercase'}
          fontWeight="bold"
          color='black'
          animation={`${scrollRight} 40s linear infinite`} // Ensure animation time is the same for both top and bottom
        >
          Excellent customer support &nbsp;
          <Image src="/qqqq.png" alt="Arrow" display="inline-block" boxSize="24px" mr={15} />
          Customized Solutions &nbsp;
          <Image src="/qqqq.png" alt="Arrow" display="inline-block" boxSize="24px" mr={15} />
          Customized Solutions &nbsp;
          <Image src="/qqqq.png" alt="Arrow" display="inline-block" boxSize="24px" mr={15} />
          Affordable prices &nbsp;
          <Image src="/qqqq.png" alt="Arrow" display="inline-block" boxSize="24px" mr={15} />
          Timely delivery &nbsp;
          <Image src="/qqqq.png" alt="Arrow" display="inline-block" boxSize="24px" mr={15} />
          Expertise &nbsp;
          
          
        
        </Heading>
      </Box>
    </Flex>
  );
};

export default ScrollingText;

