
import React from 'react';
import { Box, Button, Text, HStack, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import ContactForm from "./Contactpagefrom";


const OfferBanner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="#ecc94b"
      p={{ base: 4, sm: 6, md: 8, lg: 9 }} // Padding changes for different breakpoints
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }} // Stack vertically on mobile, horizontally on tablets and up
      justifyContent="space-around"
      alignItems="center"
      color="black"
      className='component1'
    >
      {/* Left text area */}
      <Text fontSize={{ base: "xl", sm: "xl", md: "2xl" }} fontWeight="bold" textAlign={{ base: 'center', md: 'left' }} className='component1'>
        Exclusive Offer! Save 20% on Your First Order! <br />
        <Text as="span" fontSize={{ base: "lg", sm: "lg", md: "xl" }} fontWeight="medium" className='component1'>
          Our 500+ professional UK writers are ready to give you a hand-made assignment.
        </Text>
      </Text>

      {/* Buttons */}
      <HStack
        spacing={{ base: 2, md: 4 }}
        mt={{ base: 4, md: 0 }} // Add margin top on mobile and tablets
        flexDirection={{ base: 'column', sm: 'row' }} // Stack buttons vertically on mobile, horizontally on larger
      >
        <Button
          onClick={() => window.open('https://wa.me/+918825735141', '_self')}
          bg="#02428d"
          color="white"
          _hover={{ bg: 'white', textColor:'black'}}
          width={{ base: '100%', sm: 'auto' }}
          className='component1' // Full width button on mobile
        >
          WhatsApp
        </Button>
        <>
            <Button
              bg="green"
              color="white"
              fontSize={{ base: "md", md: "lg", lg: "lg" }}
              _hover={{ bg: "white", color: "black" }}
              onClick={onOpen} 
              className='component1'// Open the modal on button click
            >
              Place An Order Now
            </Button>

            {/* Modal component triggered by the button */}
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                  <ContactForm /> {/* Contact form component inside the modal */}
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
      </HStack>
    </Box>
  );
};

export default OfferBanner;

