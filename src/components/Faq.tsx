
import { Box, Center, Text, Flex, Icon, Link,Button,Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,VStack,useDisclosure,} from '@chakra-ui/react';
import { ArrowForwardIcon ,
  ChevronRightIcon, 
  ChevronUpIcon }
  from '@chakra-ui/icons';
  import React, { useState } from 'react';

  const AboutUsComponent: React.FC = () => {
    return (
      <Box position="relative" h={{ base: "40vh", md: "50vh", lg: "60vh" }} mb={10}>
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
            opacity: 0.5, // Overlay opacity
            zIndex: 2,
          }}
        />
        <Box position="relative" zIndex={2} p={{ base: 4, md: 20 }} color="white">
          <Center>
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mt={{ base: 10, md: 20 }} color="white">
             Faq
            </Text>
          </Center>
          <Flex alignItems="center" justifyContent="center" mt={0}>
            <Link href="/" fontSize={{ base: "sm", md: "lg" }} mr={2} color="white">
              Home
            </Link>
            <Icon as={ArrowForwardIcon} boxSize={{ base: 4, md: 5 }} />
            <Text fontSize={{ base: "sm", md: "lg" }} ml={2} m={0} color="white">
              Faq
            </Text>
          </Flex>
        </Box>
      </Box>
    );
  };
  




const FaqComponents = () => {
  // State to keep track of the selected section
  const [selectedSection, setSelectedSection] = useState(0);

  // Sidebar sections and their respective FAQ questions and answers
  const sections = [
    {
      title: 'General questions',
      questions: [
        {
          question: 'What services does Matt Solutions offer?',
          answer: 'Matt Solutions is a platform offering dissertation services to students.',
        },
        {
          question: 'What is your order revision policy?',
          answer: 'We offer free revisions to ensure you are fully satisfied with the final product. Revisions can be requested within a specified period after receiving the completed work.',
        },
        {
          question: 'Are order revisions free?',
          answer: 'Yes, revisions are included at no additional cost within the revision policy period. Our goal is to provide a final product that meets all your expectations, and we’re committed to making necessary adjustments until you’re satisfied.',
        },
        {
          question: 'What are the circumstances under which I can request a refund?',
          answer: 'Refunds may be requested if our work fails to meet the original project requirements or if there is a significant issue in terms of quality. Each refund request is evaluated individually, and our team works closely with clients to resolve concerns. Please see our refund policy for complete details.',
        },
        {
          question: 'How does it work?',
          answer: 'You can order a dissertation by filling out a form on our website.',
        },
      ],
    },
    {
      title: 'Discounts and Promotions',
      questions: [
        {
          question: 'What is a limited-time offer?',
          answer: 'A limited-time offer is a promotional deal available for a short period, creating a sense of urgency for customers to take advantage of the discount before it expires.',
        },
        {
          question: 'Can I combine discounts and promotions?',
          answer: ' It depends on the retailers policy. Some retailers allow combining multiple discounts, while others only permit one discount per purchase. Always check the terms and conditions.',
        },
        {
          question: 'How can I promote my discounts effectively?',
          answer: 'Promote discounts effectively by using social media, email marketing, website banners, and collaborations with influencers to reach a broader audience.',
        },
        {
          question: 'Is there a refund policy?',
          answer: 'Yes, we have a refund policy under certain conditions.',
        },
      ],
    },
    {
      title: 'Qaulity',
      questions: [
        {
          question: 'How do you ensure quality in your products/services?',
          answer: ' In our company, quality means consistently meeting or exceeding customer expectations through meticulous attention to detail and adherence to industry standards. ',
        },
        {
          question: 'Do you have a quality guarantee?',
          answer: 'Yes, we offer a quality guarantee on our products/services, ensuring that if you are not satisfied, we will work with you to resolve any issues.',
        },
        {
          question: 'Why is quality important for your customers?',
          answer: ' Quality is essential for our customers because it directly impacts their satisfaction and trust in our brand, ensuring they receive value and reliability from our products/services.',
        },
        {
          question: 'What does quality mean in Our Matt Solutions?',
          answer: 'In our company, quality means consistently meeting or exceeding customer expectations through meticulous attention to detail and adherence to industry standards.',
        },
      ],
    },
    {
      title: 'Working Process',
      questions: [
        {
          question: 'What is your working process?',
          answer: 'Our working process consists of several key steps: initial consultation, project planning, execution, quality assurance, and final delivery, ensuring that we meet our clients needs at every stage.  ',
        },
        {
          question: 'What happens during the planning phase?',
          answer: 'During the planning phase, we outline the project scope, set timelines, allocate resources, and establish clear communication channels to ensure alignment with our clients expectations.',
        },
        {
          question: 'How do you ensure quality throughout the process?',
          answer: ' We ensure quality through continuous monitoring and evaluation at each stage, conducting regular check-ins and using feedback to make necessary adjustments.',
        },
        {
          question: 'What sets your working process apart from others?',
          answer: 'Our working process is unique due to our emphasis on collaboration, flexibility, and continuous improvement, ensuring that we adapt to our clients needs and deliver the best results.',
        },
      ],
    },
    {
      title: 'Our Team',
      questions: [
        {
          question: 'What qualifications do your team members have?',
          answer: 'Our team members hold various qualifications, including degrees in their respective fields, industry certifications, and years of hands-on experience.',
        },
        {
          question: 'How does your team collaborate on projects?',
          answer: 'Our team collaborates through regular meetings, shared project management tools, and open communication channels to ensure seamless execution of projects.',
        },
        {
          question: 'What is the experience level of your team?',
          answer: 'Our team boasts a wealth of experience, with many members having over a decade of expertise in their fields, contributing to our overall success.',
        },
        {
          question: 'Can I meet your team?',
          answer: 'Yes! We frequently host webinars and events where you can meet our team members and learn more about our services and expertise.',
        },
      ],
    },
    // Add more sections with questions and answers as needed
  ];

  return (
    <Box p={8}>
      <Text fontSize="2xl" fontWeight="bold" mb={2} textAlign="center">
        Frequently Asked Questions
      </Text>
      <Text fontSize="md" color="gray.500" mb={6} textAlign="center">
        Get to know more about Matt solutions
      </Text>

      <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems="start">
        {/* Sidebar */}
        <VStack
          spacing={4}
          align="stretch"
          w={{ base: '100%', md: '25%' }}
          mb={{ base: 8, md: 0 }}
        >
          {sections.map((section, index) => (
            <Button
              key={index}
              justifyContent="space-between"
              variant={selectedSection === index ? 'solid' : 'ghost'}
              colorScheme={selectedSection === index ? 'blue' : 'gray'}
              borderRadius="md"
              rightIcon={<ChevronRightIcon />}
              fontWeight="medium"
              color={selectedSection === index ? 'white' : 'gray.600'}
              bg={selectedSection === index ? 'blue.900' : 'gray.100'}
              _hover={{ bg: selectedSection === index ? 'blue.700' : 'gray.200' }}
              onClick={() => setSelectedSection(index)}
            >
              {section.title}
            </Button>
          ))}
        </VStack>

        {/* FAQ Content */}
        <Box flex="1" pl={{ md: 8 }}>
          {selectedSection !== null && sections[selectedSection] ? (
            <Accordion allowToggle defaultIndex={0}>
              {sections[selectedSection].questions.map((faq, index) => (
                <AccordionItem key={index} borderBottom="1px solid" borderColor="gray.200">
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton _expanded={{ bg: 'gray.100' }}>
                          <Box flex="1" textAlign="left" fontWeight="medium" fontSize="lg">
                            {faq.question}
                          </Box>
                          <Icon as={isExpanded ? ChevronUpIcon : ChevronRightIcon} />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        {faq.answer}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <Text fontSize="lg" color="gray.600">
              Select a category to view FAQs.
            </Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
};





const FullProcessComponent = () => {
  return (
    <Box>
      <AboutUsComponent />
      <FaqComponents />

    </Box>
  );
};

export default FullProcessComponent;