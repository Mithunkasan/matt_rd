


import { useState } from 'react';
import { Box, Button, Flex, Text, VStack, Collapse, Icon, Heading } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const ResearchAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'PhD Proposal and Research Topic Assistance',
      content: (
        <>
          <Text>• Research Topic Selection: Assist PhD candidates in identifying a research-worthy topic that aligns with their academic interests and current trends in their field.</Text>
          <Text>• Research Proposal Writing: Help candidates prepare a well-structured and compelling research proposal, which includes defining the research problem, objectives, methodology, literature review, and expected outcomes.</Text>
          <Text>• Feasibility Study: Evaluate the feasibility of the research in terms of time, resources, and methodology.</Text>
          <Text>• Proposal Review and Editing: Provide expert feedback and revision services to refine the research proposal to meet academic standards.</Text>
        </>
      ),
    },
    {
      title: 'Literature Review and Research Design',
      content: (
        <>
          <Text>• Comprehensive Literature Review: Conduct a thorough review of existing literature related to the research topic and help synthesize the findings to identify research gaps.</Text>
          <Text>• Research Design and Methodology: Assist in designing the research framework, including choosing the appropriate research methodology (qualitative, quantitative, or mixed methods), and defining data collection methods (e.g., surveys, experiments, case studies).</Text>
          <Text>• Hypothesis Formulation: Help in formulating research hypotheses and research questions.</Text>
          <Text>• Reference Management: Provide support in managing references using tools like EndNote, Mendeley, or Zotero.</Text>
        </>
      ),
    },
    {
      title: 'Data Collection and Analysis',
      content: (
        <>
          <Text>• Data Collection Assistance: Assist in designing data collection strategies such as surveys, interviews, or experiments, and ensure ethical guidelines are followed.</Text>
          <Text>• Data Entry and Cleaning: Help candidates organize and clean their data to prepare it for analysis.</Text>
          <Text>• Statistical Analysis: Offer analysis options including descriptive, inferential, and AI-based techniques.</Text>
          <Text>• Qualitative Data Analysis: Help in analyzing qualitative data using thematic or content analysis with tools like NVivo.</Text>
          <Text>• Data Visualization: Create clear and informative graphs, charts, and dashboards.</Text>
        </>
      ),
    },
    {
      title: 'Implementation and Model Development',
      content: (
        <>
          <Text>• Algorithm and Model Development: Provide assistance in creating machine learning algorithms, simulations, or mathematical models.</Text>
          <Text>• Code Development and Testing: Support for coding and model implementation in Python, R, MATLAB, or Java.</Text>
          <Text>• Software Implementation: Guide usage of research software like MATLAB, Simulink, or SAS.</Text>
          <Text>• Simulation Studies: Help run simulations and experiments for scientific research.</Text>
          <Text>• Optimization and Tuning: Assist in optimizing models for performance and accuracy.</Text>
        </>
      ),
    },
    {
      title: 'Thesis Writing and Editing Services',
      content: (
        <>
          <Text>• Thesis Writing: Provide comprehensive thesis writing services, including chapter drafting (introduction, literature review, methodology, results, discussion, conclusion).</Text>
          <Text>• Proofreading and Editing: Offer thorough proofreading and editing services to ensure clarity, coherence, academic tone, and grammatical accuracy.</Text>
          <Text>• Formatting and Styling: Assist in formatting the thesis according to university-specific guidelines (e.g., APA, MLA, Chicago style).</Text>
          <Text>• Plagiarism Checking and Reduction: Use tools like Turnitin to check for plagiarism and help reduce plagiarism by rephrasing and citing correctly.</Text>
          <Text>• Bibliography and Reference Management: Assist in compiling the bibliography and properly formatting citations according to the required style.</Text>
        </>
      ),
    },
    {
      title: 'Publication Support',
      content: (
        <>
          <Text>• Journal Selection: Help identify and select suitable journals for publishing research papers based on the research area and scope.</Text>
          <Text>• Manuscript Writing and Submission: Assist in writing high-quality research papers, formatting them according to journal requirements, and submitting them to selected journals.</Text>
          <Text>• Peer Review Assistance: Provide support in responding to peer review comments and revising manuscripts accordingly.</Text>
          <Text>• Pre-Print Submission: Assist in submitting the research to pre-print servers like arXiv, SSRN, or bioRxiv for early dissemination.</Text>
          <Text>• Impact Factor and Indexing Guidance: Offer guidance on selecting journals with good impact factors and indexing in databases like Scopus, Web of Science, etc.</Text>
          <Text>• Conference Paper Preparation: Help prepare papers, posters, and presentations for academic conferences.</Text>
        </>
      ),
    },
    {
      title: 'PhD Defense Preparation',
      content: (
        <>
          <Text>• Viva/Defense Preparation: Help PhD candidates prepare for their viva voce or thesis defense by conducting mock sessions and providing feedback.</Text>
          <Text>• Presentation Preparation: Assist in designing and structuring an effective thesis defense presentation.</Text>
          <Text>• Question Preparation: Anticipate potential questions from examiners and guide the candidate in developing strong answers.</Text>
        </>
      ),
    },
    {
      title: 'Research Proposal for Funding',
      content: (
        <>
         <Text>•	Grant Writing: Assist in writing research grant proposals to secure funding from academic, governmental, or private institutions.</Text>
         <Text>•	Research Funding Advice: Provide advice on where to apply for research funding based on the candidate’s topic and area of study.</Text>
         <Text>•	Proposal Submission: Help with submission procedures and ensuring the proposal meets the funding organization’s requirements.</Text>

        </>
      ),
    },
    {
      title: 'Specialized Consultation Services',
      content: (
        <>
          <Text>•	Research Methodology Workshops: Conduct workshops on advanced research methods, data collection techniques, or statistical analysis.</Text>
          <Text>•	Writing and Publishing Workshops: Provide workshops on effective academic writing, thesis preparation, or the publication process.</Text>
          <Text>•	Data Analysis Workshops: Offer training in using statistical software (SPSS, R, Python) and machine learning tools for research purposes.</Text>

        </>
      ),
    },
  ];

  return (
    <Box px={{ base: "4", md: "10" }} py="5" mx="auto" mt={{ base: 4, md: 10 }} maxW={{ base: "95%", md: "90%", lg: "75%" }}>
      <Heading as="h2" size={{ base: "md", md: "lg" }} mb="4" textAlign="center" className='component1'>
        Our PhD Support Services
      </Heading>
      <Text mb="8" textAlign="center" fontSize={{ base: "sm", md: "md" }} className='component'>
      Our Matt PhD journey with expert support services tailored to every stage of research. From proposal drafting to final dissertation writing, we offer end-to-end assistance, ensuring quality, originality, and timely progress.
      </Text>

      <Flex mb="10" justifyContent="center" gap="4" flexDirection={{ base: "column", sm: "row" }} className='component1'>
        <Button variant="solid" bg="#ecc94b" color="black" borderRadius="md" px="6" py="3" fontWeight="bold" boxShadow="md" _hover={{bg:'#ecc94b'}}>
          Research Edition
        </Button>
        <Button variant="outline" colorScheme="gray" bg="gray.100" color="gray.700" borderRadius="md" px="6" py="3" fontWeight="bold" boxShadow="md" _hover={{bg:'#ecc94b'}}>
          Research Review
        </Button>
        <Button variant="outline" colorScheme="gray" bg="gray.100" color="gray.700" borderRadius="md" px="6" py="3" fontWeight="bold" boxShadow="md" _hover={{bg:'#ecc94b'}}>
          Research Implementation
        </Button>
      </Flex>

      <VStack spacing="0" align="stretch" maxW={{ base: "full", md: "80%", lg: "100%" }} mx="auto" className='component1'>
        {sections.map((section, index) => (
          <Box key={index} borderRadius="md" overflow="hidden" boxShadow="md" mb="4">
            <Flex
              align="center"
              bg="#02428d"
              color="white"
              px={{ base: "4", md: "6" }}
              py={{ base: "3", md: "4" }}
              cursor="pointer"
              onClick={() => toggleIndex(index)}
              _hover={{ bg: 'blue.800' }}
            >
              <Text fontWeight="semibold" flex="1" fontSize={{ base: "sm", md: "md" }} color="white" m={0}>
                {section.title}
              </Text>
              <Icon as={openIndex === index ? MinusIcon : AddIcon} boxSize={{ base: 4, md: 5 }} />
            </Flex>
            <Collapse in={openIndex === index} animateOpacity>
              <Box bg="gray.50" color="gray.700" borderTopWidth="1px" borderColor="gray.200" px={{ base: "4", md: "6" }} py={{ base: "3", md: "4" }}>
                {section.content}
              </Box>
            </Collapse>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ResearchAccordion;
