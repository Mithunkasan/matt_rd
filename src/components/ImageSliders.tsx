import { Box, Button, Center, Heading, ListItem, OrderedList, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FcLock } from 'react-icons/fc'
import { DarkModeSwitch } from './DarkModeSwitch'
import Footer from './Footer'
import Navbar from './Navbar'
import StickyHeader from './StickyHeader'

const TermsandConditions = () => {
    return (
        <div>
            <StickyHeader />
            <Navbar />
            <>

            </>
            <Center  >

                <Stack p="4" boxShadow="lg" m="4" borderRadius="sm" >
                    <Stack direction="row" alignItems="center" maxW={'xl'}>
                        <Heading as='h3' size='lg'>Terms and Conditions</Heading>

                    </Stack>

                    <Box>
                        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}> Welcome to Matt Engineering Solutions! By using our services, you agree to the following terms and conditions:</Text>
                        <OrderedList fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
                            <ListItem>Acceptance of Terms: By accessing our website, you agree to be bound by these Terms and Conditions, as well as any additional terms, guidelines, or rules posted on our website. If you do not agree to these terms, you should not use our services.</ListItem>
                            <ListItem>Our Services: We provide software solutions, PhD assistance, tech support, academic solutions, hardware solutions, and digital marketing services to our customers.</ListItem>
                            <ListItem>Intellectual Property: The content on our website, including but not limited to, text, graphics, logos, images, and software, is the property of Matt Engineering Solutions and is protected by copyright and other laws. You may not use or reproduce any of our content without our prior written consent.</ListItem>
                            <ListItem>Privacy: We respect your privacy and are committed to protecting your personal information. Please refer to our Privacy Policy for more information on how we collect, use, and protect your information.</ListItem>
                            <ListItem>Third-Party Websites: Our website may contain links to third-party websites that are not owned or operated by Matt Engineering Solutions. We are not responsible for the content, products, or services offered on these websites.</ListItem>
                            <ListItem>Disclaimer of Warranties: We make no warranties or representations about the accuracy, reliability, completeness, or timeliness of the content on our website or the services we provide. We disclaim all warranties, express or implied, including but not limited to, implied warranties of merchantability and fitness for a particular purpose.</ListItem>
                            <ListItem>Limitation of Liability: Matt Engineering Solutions shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of our website or the services we provide.</ListItem>
                            <ListItem>Indemnification: You agree to indemnify and hold Matt Engineering Solutions, its affiliates, officers, agents, and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your use of our website or the services we provide.</ListItem>
                            <ListItem> Governing Law: These Terms and Conditions shall be governed by and construed in accordance with the laws of the Indian government, without giving effect to any principles of conflicts of law.</ListItem>
                            <ListItem>Changes to Terms and Conditions: We reserve the right to modify or amend these Terms and Conditions at any time without prior notice. Your continued use of our website or services constitutes your acceptance of the updated Terms and Conditions.</ListItem>
                        </OrderedList>
                        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}> If you have any questions about these Terms and Conditions, please contact us at info@mattenggg.com.</Text>

                        {/* <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>Data Security We take appropriate technical and organizational measures to ensure the security of your personal information. We store your personal information on secure servers and restrict access to it to authorized personnel only.</Text>
                        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>Use of Cookies We use cookies to improve your browsing experience on our website. Cookies are small text files that are placed on your device when you visit our website. They help us to recognize your device and remember your preferences.</Text>
                        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'} >Third-Party Websites Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these websites. We encourage you to review their privacy policies before providing them with any personal information.
                            Changes to this Privacy Policy We reserve the right to make changes to this Privacy Policy at any time. Any changes we make will be posted on this page.</Text>
                        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>  Contact Us If you have any questions or concerns about our Privacy Policy or the way we handle your personal information, please contact us at <a color='blue'>matt@mattengg.com </a>.
                            By using our website and services, you consent to the terms of this Privacy Policy.</Text> */}
                        {/* <Stack direction={{ base: 'column', md: 'row' }}>
                        <Button variant="outline" colorScheme="green">
                            Cookie Preferences
                        </Button>
                        <Button colorScheme="green">OK</Button>
                    </Stack> */}
                    </Box>
                </Stack>
            </Center>
            <Footer />
            <DarkModeSwitch />
        </div>
    )
}
export default TermsandConditions 