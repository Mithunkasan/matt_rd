import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Stack,
  Badge,
  useColorModeValue,
  Divider,
  Icon,
  Flex,
  Button
} from '@chakra-ui/react'
import { CheckCircleIcon, WarningTwoIcon, InfoOutlineIcon, ArrowBackIcon } from '@chakra-ui/icons'
import Navbar from '../../../components/Navbar'
import Footereds from '../../../components/Servicefooter'
import fs from 'fs'
import path from 'path'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string }

  try {
    const { prisma } = await import('../../../lib/prisma')
    const dbBlog = await prisma.blog.findUnique({
      where: { id: id as string }
    })

    if (!dbBlog) {
      return { notFound: true }
    }

    let blog: any = null
    try {
      blog = JSON.parse(dbBlog.content)
    } catch (e) {
      return { notFound: true }
    }

    if (!blog) {
      return { notFound: true }
    }

    return { props: { blog } }
  } catch (err) {
    console.error('Error fetching blog details:', err)
    return { notFound: true }
  }
}

const AdminPreviewPage = ({ blog }: { blog: any }) => {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <Box bg={bg} minH="100vh">
      <Head>
        <title>PREVIEW: {blog.title} | Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <Navbar />

      <Container maxW="1400px" py={{ base: 10, md: 16 }}>
        <Box mb={8}>
          <Link href="/admin/blog" passHref>
            <Button leftIcon={<ArrowBackIcon />} colorScheme="blue" variant="outline" rounded="full">
              Back to Dashboard
            </Button>
          </Link>
          <Badge ml={4} colorScheme={blog.status === 'published' ? 'green' : blog.status === 'scheduled' ? 'yellow' : 'gray'}>
            PREVIEW MODE: {blog.status?.toUpperCase() || 'PUBLISHED'}
          </Badge>
        </Box>

        <Stack spacing={8}>
          <Box textAlign="center">
            <Badge bg="#e0a72b" color="#fff" px={4} py={1} rounded="full" mb={6} fontSize="sm">
              {blog.category}
            </Badge>
            <Heading as="h1" size="2xl" color="#02428d" lineHeight="1.3" mb={4}>
              {blog.title}
            </Heading>
            <Text fontSize="xl" color="gray.500" fontStyle="italic" mb={6}>
              {blog.subtitle}
            </Text>
            
            <Stack direction="row" justify="center" spacing={4} color="gray.500" fontSize="sm">
              <Text>Generated on {new Date(blog.generatedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
              <Text>•</Text>
              <Text>{blog.readTime}</Text>
            </Stack>
          </Box>

          <Box w="100%" h={{ base: '300px', md: '500px', lg: '600px' }} rounded="2xl" overflow="hidden" shadow="xl">
            <Image 
              src={blog.imageUrl} 
              alt={blog.title} 
              w="100%" 
              h="100%" 
              objectFit="cover" 
            />
          </Box>

          <Box bg={cardBg} p={{ base: 6, md: 10 }} rounded="2xl" shadow="md">
            <Text fontSize="lg" lineHeight="1.8" color={useColorModeValue('gray.700', 'gray.300')} mb={8}>
              {blog.introduction}
            </Text>

            {blog.overview && (
              <Box mb={10}>
                <Heading as="h2" size="lg" color="#02428d" mb={4}>{blog.overview.heading}</Heading>
                {blog.overview.content.split('\n').filter(Boolean).map((p: string, i: number) => (
                  <Text key={i} mb={4} fontSize="md" lineHeight="1.8" color={useColorModeValue('gray.700', 'gray.300')}>
                    {p}
                  </Text>
                ))}
              </Box>
            )}

            {blog.sections?.map((sec: any, i: number) => (
              <Box key={i} mb={10}>
                <Heading as="h3" size="md" color="#02428d" mb={4}>{sec.heading}</Heading>
                {sec.content.split('\n').filter(Boolean).map((p: string, j: number) => (
                  <Text key={j} mb={4} fontSize="md" lineHeight="1.8" color={useColorModeValue('gray.700', 'gray.300')}>
                    {p}
                  </Text>
                ))}
              </Box>
            ))}

            <Divider my={10} />

            {/* Key Points */}
            {blog.keyPoints?.length > 0 && (
              <Box mb={10} bg={useColorModeValue('white', 'gray.800')} p={8} rounded="xl" borderWidth="1px" borderColor={useColorModeValue('gray.200', 'gray.700')} borderTopWidth="4px" borderTopColor="#e0a72b" shadow="sm">
                <Heading as="h3" size="md" color="#02428d" mb={6} display="flex" alignItems="center">
                  <Icon as={InfoOutlineIcon} mr={3} color="#e0a72b" /> Key Insights
                </Heading>
                <Stack spacing={5}>
                  {blog.keyPoints.map((kp: any, i: number) => (
                    <Flex key={i} gap={4}>
                      <Box mt={1}>
                        <Icon as={CheckCircleIcon} color="#e0a72b" w={4} h={4} />
                      </Box>
                      <Box>
                        <Text fontWeight="bold" color="#02428d" mb={1}>{kp.point}</Text>
                        <Text color={useColorModeValue('gray.600', 'gray.400')} fontSize="md" lineHeight="1.6">{kp.description}</Text>
                      </Box>
                    </Flex>
                  ))}
                </Stack>
              </Box>
            )}

            {/* Best Practices & Challenges */}
            <Flex direction={{ base: 'column', lg: 'row' }} gap={8} mb={10}>
              {blog.bestPractices?.length > 0 && (
                <Box flex={1} bg={useColorModeValue('gray.50', 'gray.800')} p={8} rounded="xl" borderWidth="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}>
                  <Heading as="h4" size="md" color="#02428d" mb={6} display="flex" alignItems="center">
                    <Icon as={CheckCircleIcon} mr={3} color="#02428d" /> Best Practices
                  </Heading>
                  <Stack spacing={5}>
                    {blog.bestPractices.map((bp: any, i: number) => (
                      <Box key={i} bg={useColorModeValue('white', 'gray.700')} p={4} rounded="md" shadow="sm" borderLeftWidth="3px" borderLeftColor="#02428d">
                        <Text fontWeight="bold" fontSize="md" color="#02428d" mb={2}>{bp.title}</Text>
                        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} lineHeight="1.6">{bp.description}</Text>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}

              {blog.challenges?.length > 0 && (
                <Box flex={1} bg={useColorModeValue('gray.50', 'gray.800')} p={8} rounded="xl" borderWidth="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}>
                  <Heading as="h4" size="md" color="#02428d" mb={6} display="flex" alignItems="center">
                    <Icon as={WarningTwoIcon} mr={3} color="#e0a72b" /> Challenges
                  </Heading>
                  <Stack spacing={5}>
                    {blog.challenges.map((ch: any, i: number) => (
                      <Box key={i} bg={useColorModeValue('white', 'gray.700')} p={4} rounded="md" shadow="sm" borderLeftWidth="3px" borderLeftColor="#e0a72b">
                        <Text fontWeight="bold" fontSize="md" color="#02428d" mb={2}>{ch.title}</Text>
                        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} lineHeight="1.6">{ch.description}</Text>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}
            </Flex>

            {/* Conclusion */}
            {blog.conclusion && (
              <Box mt={10}>
                <Heading as="h3" size="md" color="#e0a72b" mb={4}>Conclusion</Heading>
                <Text fontSize="lg" lineHeight="1.8" color={useColorModeValue('gray.700', 'gray.300')}>
                  {blog.conclusion}
                </Text>
              </Box>
            )}
          </Box>
        </Stack>
      </Container>
      
      <Footereds />
    </Box>
  )
}

export default AdminPreviewPage
