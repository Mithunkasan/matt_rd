

import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Select,
  VStack,
  HStack,
  Text,
  Icon,
  Image,
  keyframes,
  useToast,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, InfoIcon } from "@chakra-ui/icons";
import { sendContactForm } from "../lib/api"; // Ensure this path is correct


const EnquirySchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  mobno: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  service: Yup.string().required("Required"),
});

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


const ContactUs: React.FC = () => {
  const router = useRouter();
  const toast = useToast();

  const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  `;

  const handleToast = (status: "success" | "error", title: string) => {
    toast({
      title,
      status,
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      p={{ base: 4, md: 8 }}
      borderRadius="lg"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      gap={8}
      
      margin={{ base: "20px", md: "90px" }}
      className='component1'
    >
      {/* Left side content */}
      <Box width={{ base: "100%", md: "40%" }} ml={{base:'0',md:'5%'}}>
        <Heading
          textTransform="uppercase"
          fontWeight="bold"
          fontSize="3xl"
          mb={3}
          
          className='component1'
          
        >
          Contact Us
        </Heading>
        <Heading as="h2" size="xl" mb={6} fontWeight="bold" className='component1'>
          Get In Touch With Us
        </Heading>
        <Text mb={6} className='component1'>
          Today To Learn More About Our Services And How We Can Assist You In
          Your Academic Pursuits.
        </Text>

        {/* Location */}
        <VStack align="start" spacing={2} mb={1}>
          <HStack>
            <HStack position="relative" padding={7} bg="#02428d" borderRadius={5}>
              <Icon
                as={InfoIcon}
                w={5}
                h={5}
                position="absolute"
                right={4}
                className='component1'
                color="#ecc94b"
              />
            </HStack>
            <Text fontWeight="bold" className='component1'>Our Location</Text>
          </HStack>
          <Text className='component1'>
            3rd Floor, Pillar Gate, <br /> Vadasery, Kanyakumari Dist, <br />{" "}
            Tamil Nadu
          </Text>
        </VStack>

        {/* Phone */}
        <VStack align="start" spacing={3} mb={2}>
          <HStack>
            <HStack position="relative" padding={7} bg="#02428d" borderRadius={5}>
              <Icon
                as={PhoneIcon}
                w={5}
                h={5}
                position="absolute"
                right={4}
                className='component1'
                color="#ecc94b"
              />
            </HStack>
            <Text fontWeight="bold" className='component1'>Phone Number</Text>
          </HStack>
          <Text className='component1'>
            +91 7339585868
          </Text>
        </VStack>

        {/* Email */}
        <VStack align="start" spacing={2}>
          <HStack>
            <HStack position="relative" padding={7} bg="#02428d" borderRadius={5}>
              <Icon
                as={EmailIcon}
                w={5}
                className='component1'
                h={5}
                position="absolute"
                right={4}
                color="#ecc94b"
              />
            </HStack>
            <Text fontWeight="bold" className='component1'>Email</Text>
          </HStack>
          <Text className='component1'>info@mattengg.com</Text>
        </VStack>
      </Box>

      {/* Right side form */}
      <Formik
        initialValues={{
          name: "",
          email: "",
          mobno: "",
          country: "",
          service: "",
        }}
        validationSchema={EnquirySchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await sendContactForm(values);
            resetForm();
            handleToast(
              "success",
              "Successfully submitted. Our team will respond within a couple of hours."
            );
            router.push("/thankyou");
          } catch (error) {
            console.error(error);
            handleToast("error", "An error occurred. Please try again.");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ handleSubmit, isSubmitting, errors, touched }) => (
          <Box
            as="form"
            onSubmit={handleSubmit}
            bgColor="#02428d"
            color="white"
            p={8}
            className='component1'
            boxShadow="xl"
            borderRadius="lg"
            width={{ base: "100%", md: "35%" }}
            ml={{ base: "0", md: "13%" }}
            position="relative"
          >
            <Image
              src="/dotted2.png"
              alt="Decorative dots"
              position="absolute"
              zIndex="-1"
              top="-6"
              left="-9"
              boxSize="100px"
            />
            <Image
              src="/dotted2.png"
              alt="Decorative dots"
              position="absolute"
              zIndex="-1"
              bottom="-8"
              right="-8"
              boxSize="100px"
            />

            <VStack spacing={4} className='component1'>
              <Heading
                fontSize="25px"
                mb={5}
                color="#ecc94b"
                animation={`${blink} 2s linear infinite`}
              >
                ENQUIRY FORM
              </Heading>

              <FormControl isInvalid={!!errors.name && touched.name}>
                <FormLabel >UserName</FormLabel>
                <Field
                  as={Input}
                  name="name"
                  placeholder="Your Name"
                  variant="filled"
                  bgColor="white"
                  color="black"
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.email && touched.email}>
                <FormLabel>UserEmail</FormLabel>
                <Field
                  as={Input}
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  variant="filled"
                  bgColor="white"
                  color="black"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.mobno && touched.mobno}>
                <FormLabel>Phone Number</FormLabel>
                <Field
                  as={Input}
                  name="mobno"
                  placeholder="eg: +1 (555) 555-5555"
                  variant="filled"
                  bgColor="white"
                  color="black"
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
                  color="black"
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
                <FormLabel>Select Required</FormLabel>
                <Field
                  as={Select}
                  name="service"
                  placeholder="-- Service Required --"
                  bgColor="white"
                  color="black"
                  variant="filled"
                >
                  <option value="review_writing">
                    Review Article Writing/ Editing
                  </option>
                  <option value="research_writing">
                    Research Article Writing/ Editing
                  </option>
                  <option value="plagiarism_free">
                    Plagiarism Free Writing
                  </option>
                  <option value="proofreading">Proofreading</option>
                  <option value="projects_development">
                    Projects Development and Implementation
                  </option>
                  <option value="content_writing">
                    Content Writing / Editing
                  </option>
                  <option value="data_analysis">Survey / Data Analysis</option>
                  <option value="translation">Article Translation</option>
                </Field>
                <FormErrorMessage>{errors.service}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                isLoading={isSubmitting}
                color="white"
                bg="#ecc94b"
                width="45%"
                fontSize={{ base: "sm", md: "lg", lg: "xl" }}
                _hover={{ bg: "#ecc94b" }}
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
