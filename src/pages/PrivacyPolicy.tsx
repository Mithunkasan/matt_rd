import { Box, Button, Center, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FcLock } from 'react-icons/fc'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import Footer from '../components/Footer'

import Navbar from '../components/Navbar'
import StickyHeader from '../components/StickyHeader'

const PrivacyPolicy = () => {
    return (
        <div>
            <StickyHeader />
            <Navbar />
            <>

            </>
            <Center  >

                <Stack p="4" boxShadow="lg" m="4" borderRadius="sm" >
                    <Stack direction="row" alignItems="center" maxW={'xl'}>
                        <Heading as='h3' size='lg'>Privacy Policy</Heading>
                        <FcLock />
                        {/* <Text fontWeight="semibold">Your Privacy</Text> */}
                    </Stack>

                    <Box>
                        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
                            At Matt Engineering Solutions, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your personal data in accordance with applicable data protection laws and regulations.
                            Collection of Personal Information We may collect personal information from you when you visit our website or use our services. This information may include your name, email address, phone number, company name, job title, and any other information that you voluntarily provide to us.
                            Use of Personal Information We may use your personal information to provide you with our services, respond to your inquiries, send you marketing communications, and to comply with applicable laws and regulations.
                            Sharing of Personal Information We do not share your personal information with any third parties except as required by law or as necessary to provide you with our services. We may share your personal information with our service providers who assist us in providing our services to you.</Text>
                        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>Data Security We take appropriate technical and organizational measures to ensure the security of your personal information. We store your personal information on secure servers and restrict access to it to authorized personnel only.</Text>
                        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>Use of Cookies We use cookies to improve your browsing experience on our website. Cookies are small text files that are placed on your device when you visit our website. They help us to recognize your device and remember your preferences.</Text>
                        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'} >Third-Party Websites Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these websites. We encourage you to review their privacy policies before providing them with any personal information.
                            Changes to this Privacy Policy We reserve the right to make changes to this Privacy Policy at any time. Any changes we make will be posted on this page.</Text>
                        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>  Contact Us If you have any questions or concerns about our Privacy Policy or the way we handle your personal information, please contact us at <a color='blue'>info@mattengg.com </a>.
                            By using our website and services, you consent to the terms of this Privacy Policy.</Text>
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
export default PrivacyPolicy