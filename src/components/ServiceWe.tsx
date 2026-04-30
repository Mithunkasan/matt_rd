
import { Box, Image, Text, Stack, List, ListItem, ListIcon, Heading } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const ResearchHighlights = () => {
  return (
    <Box mt={4} id="hooseuses">
      <Heading
        mt={4}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign="center"
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
      >
        Why Choose Us
      </Heading>
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        p={{ base: 4, md: 8 }}
        m={{ base: '20px', md: '0px 50px', lg: '0px 100px' }}
      >
        <Box
          borderRadius="full"
          overflow="hidden"
          w={{ base: '250px', md: '300px', lg: '350px' }}
          h={{ base: '250px', md: '300px', lg: '320px' }}
          mx={{ base: 'auto', md: 0 }}
          mb={{ base: 4, md: 0 }}
        >
          <Image src="/whychoose.jpg" alt="Research Paper Illustration" objectFit="cover" />
        </Box>

        <Stack ml={{ base: 0, md: 8 }} spacing={4} mt={{ base: 4, md: 0 }}>
          <List spacing={3} m={{ base: '0px 10px', md: '0px 20px', lg: '0px 50px' }}>
            <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              Our dedicated team consists of over 547 highly skilled professionals specializing in Engineering, Science & Technology, Management, and other fields.
            </ListItem>
            <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              We guarantee the delivery of high-quality articles that meet SCOPUS and SCI standards, complete with a comprehensive plagiarism report.
            </ListItem>
            <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              Before delivering your paper, our team will meticulously review and assess its overall quality, technical accuracy, and language clarity.            </ListItem>
            <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              We offer the option for a conference call or meeting to address your questions and provide expert assistance tailored to your needs.            </ListItem>
            <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              We will assist you in publishing your research articles in well-respected international journals, including SCOPUS and SCI.            </ListItem>
            <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              Our services include guidance on writing research articles, as well as proofreading and editing to ensure your work is publication-ready.             </ListItem>
            <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              Guidance & Assistance will be provided for research article writing with publications, proof reading and editing etc.
            </ListItem>
            <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <ListIcon as={FaCheckCircle} color="#02428d" />
              We are available for inquiries around the clock, ensuring you receive the support you need whenever you need it.
            </ListItem>
          </List>
        </Stack>
      </Box>
    </Box>
  );
};

export default ResearchHighlights;
