import React from 'react';
import { Box, Flex, Text, Link, Icon, Tooltip, useBreakpointValue } from '@chakra-ui/react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from 'react-icons/fa';

const HeaderComponent = () => {
  // Responsive values
  const contactLayout = useBreakpointValue<"row" | "column">({
    base: "column",
    sm: "row"
  }) ?? "column"; // <-- Fix: provide a default value
  
  const contactSpacing = useBreakpointValue({
    base: 0,
    sm: 6
  });
  
  const iconSize = useBreakpointValue({
    base: 3,
    sm: 4
  });
  
  const textSize = useBreakpointValue({
    base: 'xs',
    sm: 'sm'
  });
  
  const socialSpacing = useBreakpointValue({
    base: 0,
    sm: 4
  });

  return (
    
    <Box 
      bg="#02428d" 
      color="white" 
      py={2} 
      px={4}
      display={{ base: 'none', sm: 'block' }} // Hidden on mobile, shown on sm and up
    >
      <Flex 
        justify="space-between" 
        align="center" 
        maxW="1200px" 
        mx="auto"
        direction={{ sm: 'row' }}
        gap={{ base: 0, sm: 0 }}
      >
        {/* Left side - Contact Info */}
        <Flex 
          align="center" 
          gap={contactSpacing}
          direction={contactLayout as "row" | "column"} // <-- Fix: cast to correct type
          wrap="wrap"
          justify={{ base: 'center', sm: 'flex-start' }}
        >
          <Flex align="center" gap={2}>
            <Icon as={FaEnvelope} boxSize={iconSize} />
            <Text fontSize={textSize} fontWeight="medium" color="white">
              info@mattengg.com
            </Text>
          </Flex>
          
          <Flex align="center" gap={2}>
            <Icon as={FaPhone} boxSize={iconSize} />
            <Text fontSize={textSize} fontWeight="medium" color="white">
              +91 7305197833
            </Text>
          </Flex>
        </Flex>

        {/* Right side - Social Media Icons */}
        <Flex 
          align="center" 
          gap={socialSpacing}
          mt={{ base: 0, sm: 0 }}
        >
          <Tooltip label="Facebook" bg="gray.800" color="white" fontSize="sm" borderRadius="md">
            <Link 
              href="#" 
              p={2}
              borderRadius="full"
              transition="all 0.3s ease"
              _hover={{ 
                bg: "#e0a72b",
                color: "white",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
              }}
              aria-label="Facebook"
            >
              <Icon as={FaFacebookF} boxSize={iconSize} />
            </Link>
          </Tooltip>
          
          <Tooltip label="Twitter" bg="gray.800" color="white" fontSize="sm" borderRadius="md">
            <Link 
              href="#" 
              p={2}
              borderRadius="full"
              transition="all 0.3s ease"
              _hover={{ 
                bg: "#e0a72b",
                color: "white",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
              }}
              aria-label="Twitter"
            >
              <Icon as={FaTwitter} boxSize={iconSize} />
            </Link>
          </Tooltip>
          
          <Tooltip label="Instagram" bg="gray.800" color="white" fontSize="sm" borderRadius="md">
            <Link 
              href="#" 
              p={2}
              borderRadius="full"
              transition="all 0.3s ease"
              _hover={{ 
                bg: "#e0a72b",
                color: "white",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
              }}
              aria-label="Instagram"
            >
              <Icon as={FaInstagram} boxSize={iconSize} />
            </Link>
          </Tooltip>
          
          <Tooltip label="LinkedIn" bg="gray.800" color="white" fontSize="sm" borderRadius="md">
            <Link 
              href="#" 
              p={2}
              borderRadius="full"
              transition="all 0.3s ease"
              _hover={{ 
                bg: "#e0a72b",
                color: "white",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
              }}
              aria-label="LinkedIn"
            >
              <Icon as={FaLinkedinIn} boxSize={iconSize} />
            </Link>
          </Tooltip>
          
          <Tooltip label="YouTube" bg="gray.800" color="white" fontSize="sm" borderRadius="md">
            <Link 
              href="#" 
              p={2}
              borderRadius="full"
              transition="all 0.3s ease"
              _hover={{ 
                bg: "#e0a72b",
                color: "white",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
              }}
              aria-label="YouTube"
            >
              <Icon as={FaYoutube} boxSize={iconSize} />
            </Link>
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderComponent;