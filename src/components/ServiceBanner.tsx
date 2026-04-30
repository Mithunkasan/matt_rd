// import React, { useState } from 'react';
// import { Formik, Field } from 'formik';
// import * as Yup from 'yup';
// import { useRouter } from 'next/router';
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   VStack,
//   Text,
//   Container,
//   FormErrorMessage,
//   useBreakpointValue,
//   keyframes,
//   useToast,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   ModalFooter,
//   useDisclosure
// } from '@chakra-ui/react';
// import { sendContactForm } from '../lib/api';

// const EnquirySchema = Yup.object().shape({
//   name: Yup.string().required('Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
//   mobno: Yup.string().required('Required'),
//   country: Yup.string().required('Required'),
//   service: Yup.string().required('Required'),
// });

// const ContactUs: React.FC = () => {
//   const router = useRouter();
//   const toast = useToast();
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const blink = keyframes`
//     0% { opacity: 1; }
//     50% { opacity: 0; }
//     100% { opacity: 1; }
//   `;

//   const handleToast = (status: 'success' | 'error', title: string) => {
//     toast({
//       title,
//       status,
//       duration: 3000,
//       isClosable: true,
//     });
//   };




//   return (
//     <Box
//       bgImage="url('/service-banner.png')"
//       bgSize="cover"
//       bgPosition="center"
//       h="100%"
//       py={4}
//     >
//       <Container
//         maxW="6xl"
//         p={{ base: 4, md: 8 }}
//       >
//         {/* Service Description */}
//         <Box mb={5}>
//           <Text
//             color="white"
//             fontSize="sm"
//             fontWeight="bold"
//             mb={2}
//             display="inline-block"
//             border="2px dotted #e0a72b"
//             p={2}
//             borderRadius="md"
//           >
//             Research Article Writing
//           </Text>

//           <Heading
//             as="h2"
//             fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}
//             mb={4}
//             color="white"
//           >
//             Comprehensive PhD Support – From Research Planning to Final Submission
//           </Heading>
//           <Text
//             fontSize={{ base: 'md', md: 'lg' }}
//             color="white"
//             maxW={{ base: '100%', md: '80%' }}
//             lineHeight="1.6"
//           >
//             Even the most talented of research professionals struggle with getting their work and findings down in the form of a high-quality research article or paper. Pursuing publication in top, high-impact scientific journals is also something that the vast majority of these professionals find daunting and tough.
//             </Text>
//           </Box>

//         {/* Button to open modal */}
//         <Button
//           bgColor="#e0a72b"
//           color="white"
//           size="lg"
//           mt={6}
//           borderRadius="full"
//           _hover={{ bgColor: '#02428d' }}
//           w={{ base: 'full', md: 'auto' }}
//           onClick={onOpen}
//         >
//           Talk to a PhD Expert Now
//         </Button>

//         {/* Modal/Popup Form */}
//         <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'full', md: 'xl' }}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader bg="#02428d" color="white">
//               <Heading
//                 fontSize="25px"
//                 color="white"
//                 animation={`${blink} 2s linear infinite`}
//               >
//                 ENQUIRY FORM
//               </Heading>
//             </ModalHeader>
//             <ModalCloseButton color="white" />
//             <ModalBody>
//               <Formik
//                 initialValues={{
//                   name: '',
//                   email: '',
//                   mobno: '',
//                   country: '',
//                   service: '',
//                 }}
//                 validationSchema={EnquirySchema}
//                 onSubmit={async (values, { setSubmitting, resetForm }) => {
//                   try {
//                     await sendContactForm(values);
//                     resetForm();
//                     onClose();
//                     handleToast('success', 'Successfully submitted. Our team will respond within a couple of hours.');
//                     router.push('/thankyou');
//                   } catch (error) {
//                     console.error(error);
//                     handleToast('error', 'An error occurred. Please try again.');
//                   } finally {
//                     setSubmitting(false);
//                   }
//                 }}
//               >
//                 {({ handleSubmit, isSubmitting, errors, touched }) => (
//                   <Box
//                     as="form"
//                     onSubmit={handleSubmit}
//                     color="black"
//                     pt={4}
//                   >
//                     <VStack spacing={4}>
//                       <FormControl isInvalid={!!errors.name && touched.name}>
//                         <FormLabel>Your Name :</FormLabel>
//                         <Field
//                           as={Input}
//                           name="name"
//                           placeholder="Your Name"
//                           variant="filled"
//                           bgColor="gray.100"
//                           color="black"
//                         />
//                         {errors.name && touched.name && <Box color="red.500">{errors.name}</Box>}
//                       </FormControl>

//                       <FormControl isInvalid={!!errors.email && touched.email}>
//                         <FormLabel>Your Email :</FormLabel>
//                         <Field
//                           as={Input}
//                           name="email"
//                           type="email"
//                           placeholder="Your Email"
//                           variant="filled"
//                           bgColor="gray.100"
//                           color="black"
//                         />
//                         {errors.email && touched.email && <Box color="red.500">{errors.email}</Box>}
//                       </FormControl>

//                       <FormControl isInvalid={!!errors.mobno && touched.mobno}>
//                         <FormLabel>Phone Number :</FormLabel>
//                         <Field
//                           as={Input}
//                           name="mobno"
//                           placeholder="e.g., +1 (555) 555-5555"
//                           variant="filled"
//                           bgColor="gray.100"
//                           color="black"
//                         />
//                         {errors.mobno && touched.mobno && <Box color="red.500">{errors.mobno}</Box>}
//                       </FormControl>

//                       <FormControl isInvalid={!!errors.country && touched.country}>
//                         <FormLabel>Select a Country</FormLabel>
//                         <Field
//                           as={Select}
//                           name="country"
//                           placeholder="-- Select Country --"
//                           bgColor="white"
//                           color="black"
//                           variant="filled"
//                         >
//                           {countries.map((country) => (
//                             <option key={country.value} value={country.value}>
//                               {country.name}
//                             </option>
//                           ))}
//                         </Field>
//                         <FormErrorMessage>{errors.country}</FormErrorMessage>
//                       </FormControl>

//                       <FormControl isInvalid={!!errors.service && touched.service}>
//                         <FormLabel>Select a Service :</FormLabel>
//                         <Field
//                           as={Select}
//                           name="service"
//                           placeholder="-- Service Required --"
//                           bgColor="gray.100"
//                           color="black"
//                           variant="filled"
//                         >
//                           <option value="review_writing">Review Article Writing/ Editing</option>
//                           <option value="research_writing">Research Article Writing/ Editing</option>
//                           <option value="plagiarism_free">Plagiarism Free Writing</option>
//                           <option value="proofreading">Proofreading</option>
//                           <option value="projects_development">Projects Development and Implementation</option>
//                           <option value="content_writing">Content Writing / Editing</option>
//                           <option value="data_analysis">Survey / Data Analysis</option>
//                           <option value="translation">Article Translation</option>
//                         </Field>
//                         {errors.service && touched.service && <Box color="red.500">{errors.service}</Box>}
//                       </FormControl>
//                     </VStack>
//                     <ModalFooter>
//                       <Button
//                         type="submit"
//                         isLoading={isSubmitting}
//                         bg="#02428d"
//                         color="white"
//                         width="full"
//                         fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
//                         _hover={{ bg: '#e0a72b', color: 'black' }}
//                       >
//                         Send Message
//                       </Button>
//                     </ModalFooter>
//                   </Box>
//                 )}
//               </Formik>
//             </ModalBody>
//           </ModalContent>
//         </Modal>
//       </Container>
//     </Box>
//   );
// };

// export default ContactUs;

import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
  Text,
  Container,
  FormErrorMessage,
  useToast,
  keyframes,
} from '@chakra-ui/react';
import { sendContactForm } from '../lib/api';

// Dummy countries array (if not defined elsewhere)


  const countries = [
    { value: 'af', name: 'Afghanistan' },
    { value: 'al', name: 'Albania' },
    { value: 'dz', name: 'Algeria' },
    { value: 'ad', name: 'Andorra' },
    { value: 'ao', name: 'Angola' },
    { value: 'ag', name: 'Antigua and Barbuda' },
    { value: 'ar', name: 'Argentina' },
    { value: 'am', name: 'Armenia' },
    { value: 'au', name: 'Australia' },
    { value: 'at', name: 'Austria' },
    { value: 'az', name: 'Azerbaijan' },
    { value: 'bs', name: 'Bahamas' },
    { value: 'bh', name: 'Bahrain' },
    { value: 'bd', name: 'Bangladesh' },
    { value: 'bb', name: 'Barbados' },
    { value: 'by', name: 'Belarus' },
    { value: 'be', name: 'Belgium' },
    { value: 'bz', name: 'Belize' },
    { value: 'bj', name: 'Benin' },
    { value: 'bt', name: 'Bhutan' },
    { value: 'bo', name: 'Bolivia' },
    { value: 'ba', name: 'Bosnia and Herzegovina' },
    { value: 'bw', name: 'Botswana' },
    { value: 'br', name: 'Brazil' },
    { value: 'bn', name: 'Brunei' },
    { value: 'bg', name: 'Bulgaria' },
    { value: 'bf', name: 'Burkina Faso' },
    { value: 'bi', name: 'Burundi' },
    { value: 'cv', name: 'Cabo Verde' },
    { value: 'kh', name: 'Cambodia' },
    { value: 'cm', name: 'Cameroon' },
    { value: 'ca', name: 'Canada' },
    { value: 'cf', name: 'Central African Republic' },
    { value: 'td', name: 'Chad' },
    { value: 'cl', name: 'Chile' },
    { value: 'cn', name: 'China' },
    { value: 'co', name: 'Colombia' },
    { value: 'km', name: 'Comoros' },
    { value: 'cd', name: 'Congo, Democratic Republic of the' },
    { value: 'cg', name: 'Congo, Republic of the' },
    { value: 'cr', name: 'Costa Rica' },
    { value: 'hr', name: 'Croatia' },
    { value: 'cu', name: 'Cuba' },
    { value: 'cy', name: 'Cyprus' },
    { value: 'cz', name: 'Czech Republic' },
    { value: 'dk', name: 'Denmark' },
    { value: 'dj', name: 'Djibouti' },
    { value: 'dm', name: 'Dominica' },
    { value: 'do', name: 'Dominican Republic' },
    { value: 'ec', name: 'Ecuador' },
    { value: 'eg', name: 'Egypt' },
    { value: 'sv', name: 'El Salvador' },
    { value: 'gq', name: 'Equatorial Guinea' },
    { value: 'er', name: 'Eritrea' },
    { value: 'ee', name: 'Estonia' },
    { value: 'sz', name: 'Eswatini' },
    { value: 'et', name: 'Ethiopia' },
    { value: 'fj', name: 'Fiji' },
    { value: 'fi', name: 'Finland' },
    { value: 'fr', name: 'France' },
    { value: 'ga', name: 'Gabon' },
    { value: 'gm', name: 'Gambia' },
    { value: 'ge', name: 'Georgia' },
    { value: 'de', name: 'Germany' },
    { value: 'gh', name: 'Ghana' },
    { value: 'gr', name: 'Greece' },
    { value: 'gd', name: 'Grenada' },
    { value: 'gt', name: 'Guatemala' },
    { value: 'gn', name: 'Guinea' },
    { value: 'gw', name: 'Guinea-Bissau' },
    { value: 'gy', name: 'Guyana' },
    { value: 'ht', name: 'Haiti' },
    { value: 'hn', name: 'Honduras' },
    { value: 'hu', name: 'Hungary' },
    { value: 'is', name: 'Iceland' },
    { value: 'in', name: 'India' },
    { value: 'id', name: 'Indonesia' },
    { value: 'ir', name: 'Iran' },
    { value: 'iq', name: 'Iraq' },
    { value: 'ie', name: 'Ireland' },
    { value: 'il', name: 'Israel' },
    { value: 'it', name: 'Italy' },
    { value: 'jm', name: 'Jamaica' },
    { value: 'jp', name: 'Japan' },
    { value: 'jo', name: 'Jordan' },
    { value: 'kz', name: 'Kazakhstan' },
    { value: 'ke', name: 'Kenya' },
    { value: 'ki', name: 'Kiribati' },
    { value: 'kp', name: 'Korea, North' },
    { value: 'kr', name: 'Korea, South' },
    { value: 'kw', name: 'Kuwait' },
    { value: 'kg', name: 'Kyrgyzstan' },
    { value: 'la', name: 'Laos' },
    { value: 'lv', name: 'Latvia' },
    { value: 'lb', name: 'Lebanon' },
    { value: 'ls', name: 'Lesotho' },
    { value: 'lr', name: 'Liberia' },
    { value: 'ly', name: 'Libya' },
    { value: 'li', name: 'Liechtenstein' },
    { value: 'lt', name: 'Lithuania' },
    { value: 'lu', name: 'Luxembourg' },
    { value: 'mg', name: 'Madagascar' },
    { value: 'mw', name: 'Malawi' },
    { value: 'my', name: 'Malaysia' },
    { value: 'mv', name: 'Maldives' },
    { value: 'ml', name: 'Mali' },
    { value: 'mt', name: 'Malta' },
    { value: 'mh', name: 'Marshall Islands' },
    { value: 'mr', name: 'Mauritania' },
    { value: 'mu', name: 'Mauritius' },
    { value: 'mx', name: 'Mexico' },
    { value: 'fm', name: 'Micronesia' },
    { value: 'md', name: 'Moldova' },
    { value: 'mc', name: 'Monaco' },
    { value: 'mn', name: 'Mongolia' },
    { value: 'me', name: 'Montenegro' },
    { value: 'ma', name: 'Morocco' },
    { value: 'mz', name: 'Mozambique' },
    { value: 'mm', name: 'Myanmar' },
    { value: 'na', name: 'Namibia' },
    { value: 'nr', name: 'Nauru' },
    { value: 'np', name: 'Nepal' },
    { value: 'nl', name: 'Netherlands' },
    { value: 'nz', name: 'New Zealand' },
    { value: 'ni', name: 'Nicaragua' },
    { value: 'ne', name: 'Niger' },
    { value: 'ng', name: 'Nigeria' },
    { value: 'mk', name: 'North Macedonia' },
    { value: 'no', name: 'Norway' },
    { value: 'om', name: 'Oman' },
    { value: 'pk', name: 'Pakistan' },
    { value: 'pw', name: 'Palau' },
    { value: 'ps', name: 'Palestine' },
    { value: 'pa', name: 'Panama' },
    { value: 'pg', name: 'Papua New Guinea' },
    { value: 'py', name: 'Paraguay' },
    { value: 'pe', name: 'Peru' },
    { value: 'ph', name: 'Philippines' },
    { value: 'pl', name: 'Poland' },
    { value: 'pt', name: 'Portugal' },
    { value: 'qa', name: 'Qatar' },
    { value: 're', name: 'Reunion' },
    { value: 'ro', name: 'Romania' },
    { value: 'ru', name: 'Russia' },
    { value: 'rw', name: 'Rwanda' },
    { value: 'sa', name: 'Saudi Arabia' },
    { value: 'sn', name: 'Senegal' },
    { value: 'rs', name: 'Serbia' },
    { value: 'sg', name: 'Singapore' },
    { value: 'sk', name: 'Slovakia' },
    { value: 'si', name: 'Slovenia' },
    { value: 'sb', name: 'Solomon Islands' },
    { value: 'za', name: 'South Africa' },
    { value: 'es', name: 'Spain' },
    { value: 'lk', name: 'Sri Lanka' },
    { value: 'sd', name: 'Sudan' },
    { value: 'sr', name: 'Suriname' },
    { value: 'sz', name: 'Sweden' },
    { value: 'ch', name: 'Switzerland' },
    { value: 'sy', name: 'Syria' },
    { value: 'tw', name: 'Taiwan' },
    { value: 'tz', name: 'Tanzania' },
    { value: 'th', name: 'Thailand' },
    { value: 'tg', name: 'Togo' },
    { value: 'tk', name: 'Tokelau' },
    { value: 'to', name: 'Tonga' },
    { value: 'tt', name: 'Trinidad and Tobago' },
    { value: 'tn', name: 'Tunisia' },
    { value: 'tr', name: 'Turkey' },
    { value: 'tm', name: 'Turkmenistan' },
    { value: 'tv', name: 'Tuvalu' },
    { value: 'ug', name: 'Uganda' },
    { value: 'ua', name: 'Ukraine' },
    { value: 'ae', name: 'United Arab Emirates' },
    { value: 'gb', name: 'United Kingdom' },
    { value: 'us', name: 'United States' },
    { value: 'uy', name: 'Uruguay' },
    { value: 'uz', name: 'Uzbekistan' },
    { value: 'vu', name: 'Vanuatu' },
    { value: 've', name: 'Venezuela' },
    { value: 'vn', name: 'Vietnam' },
    { value: 'ye', name: 'Yemen' },
    { value: 'zm', name: 'Zambia' },
    { value: 'zw', name: 'Zimbabwe' },
  ];

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

  const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  `;

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
      bgImage="url('/service-banner.png')"
      bgSize="cover"
      bgPosition="center"
      py={4}
    >
      <Container maxW="6xl" p={{ base: 4, md: 8 }}>
        <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
          {/* Left Content */}
          <Box flex="1">
            <Text
              color="white"
              fontSize="sm"
              fontWeight="bold"
              mb={2}
              display="inline-block"
              border="2px dotted #e0a72b"
              p={2}
              borderRadius="md"
            >
              Research Article Writing
            </Text>

            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl' }}
              mb={4}
              color="white"
            >
              Research Article Writing Assistance & Publication Support
            </Heading>
            <Text fontSize={{ base: 'md', sm: 'lg', md: 'xl', lg: '2xl', xl: 'lg' }}
color="white" lineHeight="1.6">
              Even the most talented of research professionals struggle with getting their work and findings down in the form of a high-quality research article or paper. Pursuing publication in top, high-impact scientific journals is also something that the vast majority of these professionals find daunting and tough.
            </Text>
            <Button
           bgColor="#e0a72b"
           color="white"
           size="lg"
           mt={6}
           borderRadius="full"
           _hover={{ bgColor: '#02428d' }}
           w={{ base: 'full', md: 'auto' }}
            >
              Explore Services
            </Button>
          </Box>

          {/* Right Enquiry Form */}
          <Box
          width={{ base: '90%', md: '40%'}}
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="lg"
            flex={{ base: '1', md: '0.5' }}
          >
            <Heading
              fontSize="25px"
              color="#02428d"
              textAlign="center"
              animation={`${blink} 2s linear infinite`}
              mb={4}
            >
              ENQUIRY FORM
            </Heading>

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
                  await sendContactForm(values);
                  resetForm();
                  handleToast('success', 'Successfully submitted. Our team will respond within a couple of hours.');
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
                <Box as="form" onSubmit={handleSubmit} color="black">
                  <VStack spacing={4}>
                    <FormControl isInvalid={!!errors.name && touched.name}>
                      <FormLabel>Your Name :</FormLabel>
                      <Field
                        as={Input}
                        name="name"
                        placeholder="Your Name"
                        variant="filled"
                        bgColor="gray.100"
                      />
                      <FormErrorMessage>{errors.name}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.email && touched.email}>
                      <FormLabel>Your Email :</FormLabel>
                      <Field
                        as={Input}
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        variant="filled"
                        bgColor="gray.100"
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.mobno && touched.mobno}>
                      <FormLabel>Phone Number :</FormLabel>
                      <Field
                        as={Input}
                        name="mobno"
                        placeholder="e.g., +1 (555) 555-5555"
                        variant="filled"
                        bgColor="gray.100"
                      />
                      <FormErrorMessage>{errors.mobno}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.country && touched.country}>
                      <FormLabel>Select a Country</FormLabel>
                      <Field
                        as={Select}
                        name="country"
                        placeholder="-- Select Country --"
                        bgColor="white"
                        variant="filled"
                      >
                        {countries.map((country) => (
                          <option key={country.value} value={country.value}>
                            {country.name}
                          </option>
                        ))}
                      </Field>
                      <FormErrorMessage>{errors.country}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.service && touched.service}>
                      <FormLabel>Select a Service :</FormLabel>
                      <Field
                        as={Select}
                        name="service"
                        placeholder="-- Service Required --"
                        bgColor="gray.100"
                        variant="filled"
                      >
                        <option value="review_writing">Review Article Writing/ Editing</option>
                        <option value="research_writing">Research Article Writing/ Editing</option>
                        <option value="plagiarism_free">Plagiarism Free Writing</option>
                        <option value="proofreading">Proofreading</option>
                        <option value="projects_development">Projects Development and Implementation</option>
                        <option value="content_writing">Content Writing / Editing</option>
                        <option value="data_analysis">Survey / Data Analysis</option>
                        <option value="translation">Article Translation</option>
                      </Field>
                      <FormErrorMessage>{errors.service}</FormErrorMessage>
                    </FormControl>

                    <Button
                      type="submit"
                      isLoading={isSubmitting}
                      bg="#02428d"
                      color="white"
                      width="full"
                      fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                      _hover={{ bg: '#e0a72b', color: 'black' }}
                      mt={4}
                    >
                      Send Message
                    </Button>
                  </VStack>
                </Box>
              )}
            </Formik>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactUs;
