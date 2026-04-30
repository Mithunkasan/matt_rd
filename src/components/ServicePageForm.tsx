

import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useToast, Box, FormControl, FormLabel, Input, Textarea, Button, Stack, Text, Heading, keyframes } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

// API function to submit form data
const sendContactForm = async (values: Record<string, string>) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form');
  }

  return response.json();
};

// Validation schema
const EnquirySchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  mobno: Yup.string().required('Phone number is required'),
  message: Yup.string().notRequired(),
});

const ContactUsed: React.FC = () => {
  const toast = useToast();

     const blink = keyframes`
     0% { opacity: 1; }
     50% { opacity: 0; }
     100% { opacity: 1; }
   `;

  return (
     <Box
       borderRadius="xl"
       mt={{ base: 8, md: 5 }}
       position="relative"
       bg="white"
       color="gray.800"
       p={6}
       rounded="md"
       boxShadow="xl"
       opacity={0.9}
       maxW={{ base: '100%', sm: '80%', md: '70%', lg: '100%' }}
       zIndex={1}
       textAlign="center"
       ml={{ lg: 16 }}
     >
       <Heading
         as="h3"
         fontSize={{ base: 'lg', sm: 'xl' }}
         color="#02428d"
         mb={4}
         animation={`${blink} 2s linear infinite`}
       >
         FILL THE FORM TO GET FREE ASSISTANCE
       </Heading>
      <Formik
        initialValues={{
          name: '',
          email: '',
          mobno: '',
          message: '',
        }}
        validationSchema={EnquirySchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await sendContactForm(values);
            toast({
              title: 'Success!',
              description: 'Your message has been sent.',
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
            resetForm();
          } catch (error) {
            toast({
              title: 'Error!',
              description: 'Something went wrong. Please try again.',
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          }
        }}
      >
        {({ handleSubmit, isSubmitting, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              {/* Name Field */}
              <FormControl isInvalid={!!errors.name && touched.name}>
                <FormLabel>Name</FormLabel>
                <Field
                  as={Input}
                  name="name"
                  placeholder="Enter your name"
                />
                {errors.name && touched.name && <Text color="red.500">{errors.name}</Text>}
              </FormControl>

              {/* Email Field */}
              <FormControl isInvalid={!!errors.email && touched.email}>
                <FormLabel>Email</FormLabel>
                <Field
                  as={Input}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                {errors.email && touched.email && <Text color="red.500">{errors.email}</Text>}
              </FormControl>

              {/* Mobile Number Field */}
              <FormControl isInvalid={!!errors.mobno && touched.mobno}>
                <FormLabel>Phone Number</FormLabel>
                <Field
                  as={Input}
                  name="mobno"
                  placeholder="Enter your phone number"
                />
                {errors.mobno && touched.mobno && <Text color="red.500">{errors.mobno}</Text>}
              </FormControl>

              {/* Message Field */}
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Field
                  as={Textarea}
                  name="message"
                  placeholder="Enter your message"
                />
              </FormControl>

              {/* Submit Button */}
                <Button
                 type="submit"
                 isLoading={isSubmitting}
                 bg="#ecc94b"
                 color="black"
                 size="lg"
                 width="full"
                 leftIcon={<FaWhatsapp />}
                 mt={4}
                 isDisabled={isSubmitting}
               >
                 Get A Free Writing Guide
               </Button>
            </Stack>
          </form>
        )}
      </Formik>
    </Box>
    
  );
};

export default ContactUsed;
