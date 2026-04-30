


import React, { useState } from "react";
import { Box, Grid, Text, Icon, Button, VStack, Collapse, Flex, IconButton } from "@chakra-ui/react";
import { FaUniversity, FaClipboardList, FaPen, FaFileAlt, FaClipboardCheck, FaLightbulb, FaEdit, FaHome, FaCheckCircle, FaAward, FaBook, FaUserGraduate, FaArrowDown, FaDollarSign, FaUsers, FaHandshake, FaNewspaper, FaChartLine, FaHourglassHalf, FaFont, FaTrophy, FaFastForward, FaClock, FaSearch, FaChalkboardTeacher, FaThumbsUp } from "react-icons/fa";
import GridCard from "./GridCard";
import useScrollTransition from "../templates/usescrolltransition";

const PhDResearchWorks = () => {
  useScrollTransition();
  const [isContentVisible, setIsContentVisible] = useState(false); // State to toggle content visibility

  const handleToggle = () => {
    setIsContentVisible(!isContentVisible); // Toggle the visibility state
  };

  return (
    <Box  p={{ base: 6, md: 10 }} textAlign="center" minHeight="100vh" display="flex" flexDirection="column" className="component">
      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={8} className="component1">
      Achievements & Milestones
      </Text>
      <Text   fontSize={{ base: "sm", md: "lg" }}textAlign={'center'} className="component1">"At <strong>Matt Research Solutions,</strong> achievements and milestones reflect innovation, dedication, and excellence. Each <strong>milestone</strong> is a step toward unparalleled success with us!"</Text>
      <Grid templateColumns={{base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)",lg: "repeat(3, 1fr)",}} gap={6} mt={5} className="component1">
        <GridCard color={"#02428d"} text={"98% Client Satisfaction Rate"} supportText={"Achieved a 98% satisfaction rate based on client feedback for quality, timeliness, and professionalism."} RAJESH={"WHITE"} SIVA={"ORANGE"} icon={FaHome}/>
        <GridCard  text={"Over 200 Research Proposals Approved"} supportText={"Supported the development and approval of more than 200 research proposals across various disciplines."} icon={FaAward} SIVA={"#02428d"}/>
        <GridCard  color={"#02428d"} text={"80% Publication Success Rate in Top-Tier Journals"} supportText={"Helped clients achieve an 80% acceptance rate for research articles in high-impact journals."} RAJESH={"WHITE"} icon={FaBook}/>
        <GridCard  text={"Assisted 150+ PhD Candidates from Proposal to Defense"} supportText={"Provided end-to-end support for over 150 PhD candidates, helping them successfully complete their research and defend their dissertations."} icon={ FaUserGraduate} SIVA={"#02428d"}/>
        <GridCard  color={"#02428d"}text={"400+ Research Papers Proofread and Edited"} supportText={"Enhanced clarity and professionalism in over 400 manuscripts, resulting in improved readability and acceptance rates."} RAJESH={"WHITE"} icon={FaEdit}/>
        <GridCard  text={"Reduced Review Revisions by 50%"} supportText={"Our editing services helped reduce the need for revisions by half, expediting the review process for journal submissions."} icon={FaChartLine} SIVA={"#02428d"}/>
        <GridCard  color={"#02428d"}text={"Successful Funding for 30+ Grant Proposals"} supportText={"Helped researchers secure funding for over 30 projects, supporting initiatives in fields like healthcare, environmental science, and technology."} RAJESH={"WHITE"} icon={ FaHandshake}/>
        <GridCard  text={"85% Repeat Client Rate"} supportText={"Maintained a high level of client retention, with 85% of clients returning for additional support on academic and research projects."}  icon={ FaUsers} SIVA={"#02428d"}/>
        <GridCard  color={"#02428d"} text={"70+ Theses Published in Peer-Reviewed Journals"} supportText={"Assisted clients in developing thesis work that resulted in peer-reviewed publications, expanding academic recognition."} RAJESH={"WHITE"} icon={ FaNewspaper}/>
        </Grid>

      {/* Collapse content */}
      <Collapse in={isContentVisible}>
      <Grid templateColumns={{base: "repeat(1, 1fr)",sm: "repeat(2, 1fr)",lg: "repeat(3, 1fr)",}} gap={6} mt={5} className="component1">
        <GridCard  text={"Average 2-Week Turnaround Time for Research Articles"} supportText={"Efficiently handled research articles with an average turnaround time of two weeks, helping clients meet submission deadlines."}  SIVA={"#02428d"}icon={FaHourglassHalf}/>
        <GridCard  color={"#02428d"} text={"Published Over 500,000 Words in Academic Journals"} supportText={"Supported the publication of more than half a million words across various academic journals, showcasing expertise in academic writing."} RAJESH={"WHITE"} icon={FaFont} />
        <GridCard  text={"90% Success Rate in PhD Proposal Approvals"} supportText={"Guided PhD candidates with a 90% success rate in securing proposal approvals from academic committees."} SIVA={"#02428d"} icon={FaTrophy}/>
        <GridCard  color={"#02428d"} text={"Reduced Editing Time by 40% for Conference Papers"} supportText={"Streamlined the editing process, reducing completion time by 40%, helping clients meet tight conference submission deadlines."} RAJESH={"WHITE"} icon={FaFastForward} />
        <GridCard  text={"Helped Publish 100+ Review Articles in International Journals"} supportText={"Provided comprehensive support in the development of over 100 review articles that were accepted in international journals."} SIVA={"#02428d"} icon={FaFileAlt} />
        <GridCard  color={"#02428d"}text={"95% On-Time Delivery Rate for All Projects"} supportText={"Consistently delivered projects on or ahead of schedule, maintaining a 95% on-time delivery rate."} RAJESH={"WHITE"} icon={ FaClock}  />
        <GridCard  text={"Supported Over 300 Literature Reviews Across Disciplines"} supportText={"Enhanced academic work by conducting in-depth literature reviews for more than 300 projects across diverse fields."} SIVA={"#02428d"} icon={FaSearch}/>
        <GridCard  color={"#02428d"}text={"Enabled 40+ Clients to Present at International Conferences"} supportText={"Assisted clients in preparing research that led to successful presentations at global academic and industry conferences."} RAJESH={"WHITE"} icon={FaChalkboardTeacher}  />
        <GridCard  text={"90% Recommendation Rate by Clients"} supportText={"Earned a 90% recommendation rate from clients who endorse our services for academic and research support."} SIVA={"#02428d"} icon={ FaThumbsUp}/>
        </Grid>
      </Collapse>

      {/* Normal Button placed at the bottom */}
      <Flex justifyContent={'center'}>
      <Box mt={10}>
        <Button size="md" onClick={handleToggle}  width={{ base: "100%", md: "auto" }} bg={'#02428d'} color={'white'} _hover={{bg:'#ecc94b',color:'black'}}>
          Read More
        </Button>
      </Box>
      </Flex>
    </Box>
  );
};

export default PhDResearchWorks;


