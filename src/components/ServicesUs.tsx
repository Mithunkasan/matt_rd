
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
const steps = [
  {
    id: 1,
    title: 'Research Article Writing',
    description: 'Looking for research article writing? Our expert writers provide top-notch research articles, tailored for your needs ensuring clarity, precision, and adherence to academic standards to the required guidelines.',
    icon: 'service-article.png',
  },
  {
    id: 2,
    title: 'Thesis/Dissertation Writing',
    description: 'With our professional thesis/dissertation writing service, you can focus on your research while we handle the writing and formatting for a polished final product to university guidelines.',
    icon: 'service-thesis.png',
  },
  {
         id: 3,
         title: 'Review Article Writing/Editing',
         description: 'From literature reviews to systematic reviews, our experts offer tailored support for writing and editing review articles, ensuring they are ready for submission to top-tier journals.',
         icon: 'service-articles.png',
       },
       {
         id: 4,
         title: 'Publication Support',
         description: 'Get comprehensive publication support services, including manuscript preparation, journal selection, and submission guidance. Achieve your publication goals with our expert assistance.',
         icon: 'service-publication.png',
       },
       {
         id: 5,
         title: 'Project Development / Implementation',
         description: 'Get expert project development and implementation services for your business. We offer tailored solutions to ensure efficient project delivery and successful outcomes.',
         icon: 'service-project.png',
       },
       {
         id: 6,
         title: 'Proposal Writing/Editing',
         description: 'Whether you need help drafting a new proposal or refining an existing one, our team provides comprehensive support for all types of proposals, including research proposals, business plans, and grant applications.',
         icon: 'service-proposal.png',
       },
       {
         id: 7,
         title: ' Proofreading Services',
         description: 'Our proofreading services are designed to help students, researchers, authors, and businesses perfect their writing. We catch grammar errors, typos, and to ensure your work is polished and publication-ready.',
         icon: 'service-proofreading.png',
       },
       {
         id: 8,
         title: 'PhD End to End Assistance',
         description: 'Our PhD end to end assistance services are designed to support doctoral candidates at every stage of their research journey. From research design to data analysis, we provide to ensure a smooth.',
         icon: 'service-phd.png',
       },
       {
         id: 9,
         title: 'Plagiarism free Writing/Editing',
         description: 'Get plagiarism-free writing and editing services to ensure original and high-quality content. Our experts deliver customized writing and thorough editing, ensuring zero plagiarism meet academic and professional standards.',
         icon: 'service-plagram.png',
       },
       {
         id: 10,
         title: 'Serve Data Analysis',
         description: 'Get professional data analysis services to uncover insights and drive informed decision-making. Our experts provide tailored  you make data-driven decisions analysis solutions for businesses and  you make data-driven decisions research.',
         icon: 'service-date.png',
       },
       {
         id: 11,
         title: 'Journal Publication Support ',
         description: 'Our journal publication services are designed to assist researchers and academics in getting their work published in high-impact journals. From manuscript editing to navigating the submission process, we are  support.',
         icon: 'service-journal.png',
       },
       {
         id: 12,
         title: 'Article Translation Services',
         description: 'Our article translation services are designed to help authors, businesses, and researchers communicate effectively across language barriers. We provide accurate translations that preserve the original meaning and context.',
         icon: 'service-translate.png',
       },
  // ...other steps
];

const ProcessSteps = () => {
  return (
    <Box mb={6} mt={{ base: '20px', md: '50px' }} id='abouts'>
      <Heading
        fontSize={{ base: '2xl', md: '3xl' }}
        textAlign="center"
        mb={{ base: '10px', md: '15px' }}
        color="black"
      >
        Our Services
      </Heading>
      <Text
        color="black"
        textAlign="center"
        fontSize={{ base: 'md', md: 'lg' }}
        mx={{ base: '10px', md: '90px' }}
      >
        Our expert team offers top-notch research article writing services across all fields. We ensure your paper stands out, helping you achieve publication in prestigious journals like SCOPUS, SCI, and more quality-driven writing support.
      </Text>

      <Flex
        justify="space-between"
        wrap="wrap"
        gap={{ base: 4, md: 10 }}
        p={{ base: 4, md: 10 }}
        mx={{ base: '10px', md: '30px' }}
      >
        {steps.map((step) => (
          <Box
            key={step.id}
            bg="white"
            boxShadow="2xl"
            p={{ base: 6, md: 8 }}
            borderRadius="lg"
            textAlign="center"
            flex="1"
            minW={{ base: '100%', sm: '300px' }}
            maxW={{ base: '100%', md: '350px' }}
          >
            <Text
              fontSize={{ base: '4xl', md: '6xl' }}
              fontWeight="bold"
              color="blue"
              mb={4}
              style={{
                WebkitTextStroke: '1px blue', // Adds the outlined effect for the number
                color: 'transparent', // Makes the fill transparent, leaving only the outline
              }}
            >
              {step.id < 10 ? `0${step.id}` : step.id}
            </Text>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color="gray.800" mb={2}>
              {step.title}
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.500" mb={4}>
              {step.description}
            </Text>
            <Image src={step.icon} alt={step.title} boxSize={{ base: '50px', md: '70px' }} mx="auto" />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ProcessSteps;
