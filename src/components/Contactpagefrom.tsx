


import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
  Text,
  keyframes,
  useToast
} from '@chakra-ui/react';
import { sendContactForm } from '../lib/api'; // Adjust path if needed

// Validation schema using Yup
const EnquirySchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  mobno: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  service: Yup.string().required('Required'),
});

const ContactUs: React.FC = () => {
  const router = useRouter();
  const toast = useToast();

  // Simple blinking animation for the heading
  const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  `;

  // Toast message handler
  const handleToast = (status: 'success' | 'error', title: string) => {
    toast({
      title,
      status,
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      borderRadius="lg"
      // maxW={{ base: '90%', md: '70%', lg: '100%' }}
      color="white"
      // padding={8}
      // pl={8}
      mt={{ base: 8, md: 5 }}
      position="relative"
    >
      <Formik
        initialValues={{
          name: '',
          email: '',
          mobno: '',
          country: '',
          service: '',
        }}
        validationSchema={EnquirySchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await sendContactForm(values); // Sends form data to your API
            resetForm();
            handleToast('success', 'Successfully submitted. Our team will respond shortly.');
            router.push('/thankyou');
          } catch (error) {
            console.error(error);
            handleToast('error', 'An error occurred. Please try again.');
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ handleSubmit, isSubmitting, errors, touched }) => (
          <Box as="form" onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch">
              <Heading fontSize="2xl" color="#ecc94b" mb={0} textAlign="center" animation={`${blink} 2s linear infinite`}>
                ENQUIRY FORM
              </Heading>

              {/* Name Field */}
              <FormControl isInvalid={!!errors.name && touched.name}>
                <FormLabel color="white">Your Name</FormLabel>
                <Field as={Input} name="name" placeholder="Your Name" variant="filled" bg="gray.100" color="black" />
                {errors.name && touched.name && <Box color="red.500">{errors.name}</Box>}
              </FormControl>

              {/* Email Field */}
              <FormControl isInvalid={!!errors.email && touched.email}>
                <FormLabel color="white">Your Email</FormLabel>
                <Field as={Input} name="email" type="email" placeholder="Your Email" variant="filled" bg="gray.100" color="black" />
                {errors.email && touched.email && <Box color="red.500">{errors.email}</Box>}
              </FormControl>

              {/* Phone Number Field */}
              <FormControl isInvalid={!!errors.mobno && touched.mobno}>
                <FormLabel color="white">Phone Number</FormLabel>
                <Field as={Input} name="mobno" placeholder="e.g., +1 (555) 555-5555" variant="filled" bg="gray.100" color="black" />
                {errors.mobno && touched.mobno && <Box color="red.500">{errors.mobno}</Box>}
              </FormControl>

              {/* Country Field */}
              <FormControl isInvalid={!!errors.country && touched.country}>
                <FormLabel color="white">Select Country</FormLabel>
                <Field as={Select} name="country" placeholder="-- Select Country --" variant="filled" bg="gray.100" color="black">
                  <option value="us">United States</option>
                  <option value="in">India</option>
                  {/* Add more countries as needed */}
                </Field>
                {errors.country && touched.country && <Box color="red.500">{errors.country}</Box>}
              </FormControl>

              {/* Service Field */}
              <FormControl isInvalid={!!errors.service && touched.service}>
                <FormLabel color="white">Select a Service</FormLabel>
                <Field as={Select} name="service" placeholder="-- Service Required --" variant="filled" bg="gray.100" color="black">
                  <option value="review_writing">Review Article Writing/Editing</option>
                  <option value="research_writing">Research Article Writing/Editing</option>
                  <option value="plagiarism_free">Plagiarism-Free Writing</option>
                  <option value="proofreading">Proofreading</option>
                  <option value="projects_development">Project Development and Implementation</option>
                  <option value="content_writing">Content Writing/Editing</option>
                  <option value="data_analysis">Survey/Data Analysis</option>
                  <option value="translation">Article Translation</option>
                </Field>
                {errors.service && touched.service && <Box color="red.500">{errors.service}</Box>}
              </FormControl>

              {/* Submit Button */}
              <Button
                type="submit"
                isLoading={isSubmitting}
                color="black"
                bg="#ecc94b"
                fontSize="lg"
                _hover={{ bg: '#ecc94b' }}
                w="50%"
                mx="auto"
                mb={{
                  base:'3',md:'5'
                }}
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default ContactUs;
