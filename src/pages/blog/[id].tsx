import React, { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
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
  SimpleGrid,
  Button,
  Collapse,
  List,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'
import { CheckCircleIcon, WarningTwoIcon, InfoOutlineIcon, ChevronDownIcon, ChevronUpIcon, StarIcon, QuestionOutlineIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footereds from '../../components/Servicefooter'
import fs from 'fs'
import path from 'path'

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { prisma } = await import('../../lib/prisma')
    const dbBlogs = await prisma.blog.findMany({
      where: {
        published: true
      }
    })
    
    // Also consider scheduled ones
    const allDbBlogs = await prisma.blog.findMany()
    const validBlogs = allDbBlogs.map(dbBlog => {
      try {
        return JSON.parse(dbBlog.content)
      } catch (e) {
        return null
      }
    }).filter(b => b && (b.status === 'published' || (b.status === 'scheduled' && new Date(b.publishedAt).getTime() <= new Date().getTime())))
    
    const paths = validBlogs.map((b: any) => ({ params: { id: b.id } }))
    
    return { paths, fallback: 'blocking' }
  } catch (err) {
    console.error('Error in getStaticPaths:', err)
    return { paths: [], fallback: 'blocking' }
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string }

  try {
    const { prisma } = await import('../../lib/prisma')
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
    
    if (!blog || !(blog.status === 'published' || (blog.status === 'scheduled' && new Date(blog.publishedAt).getTime() <= new Date().getTime()))) {
      return { notFound: true }
    }

    return { 
      props: { blog },
      revalidate: 60 // Revalidate every 60 seconds
    }
  } catch (err) {
    console.error('Error fetching blog details:', err)
    return { notFound: true }
  }
}

const SingleBlogPage = ({ blog }: { blog: any }) => {
  const [showMore, setShowMore] = useState(false)
  const bg = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <Box bg={bg} minH="100vh">
      <Head>
        <title>{blog.title} | Matt Research Solutions</title>
        <meta name="description" content={blog.introduction} />
      </Head>
      
      <Navbar />

      <Container maxW="1400px" py={{ base: 8, md: 12, lg: 16 }} px={{ base: 4, md: 8, lg: 12 }}>
        <Stack spacing={{ base: 6, md: 8 }}>
          <Box textAlign="center">
            <Badge bg="#e0a72b" color="#fff" px={4} py={1} rounded="full" mb={{ base: 4, md: 6 }} fontSize={{ base: "xs", md: "sm" }}>
              {blog.category}
            </Badge>
            <Heading as="h1" size={{ base: 'xl', md: '2xl' }} color="#02428d" lineHeight="1.3" mb={4}>
              {blog.title}
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.500" fontStyle="italic" mb={6}>
              {blog.subtitle}
            </Text>
            
            <Stack direction={{ base: 'column', md: 'row' }} justify="center" alignItems="center" spacing={{ base: 2, md: 4 }} color="gray.500" fontSize={{ base: "xs", md: "sm" }}>
              <Text>Published on {new Date(blog.publishedAt || blog.generatedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
              <Text display={{ base: 'none', md: 'block' }}>•</Text>
              <Text>{blog.readTime}</Text>
            </Stack>
          </Box>

          <Box w="100%" h={{ base: '250px', md: '450px', lg: '600px' }} rounded="2xl" overflow="hidden" shadow="xl">
            <Image 
              src={blog.imageUrl} 
              alt={blog.title} 
              w="100%" 
              h="100%" 
              objectFit="cover" 
            />
          </Box>

          <Box bg={cardBg} p={{ base: 5, md: 8, lg: 10 }} rounded="2xl" shadow="md">
            <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8" color={useColorModeValue('gray.700', 'gray.300')} mb={{ base: 6, md: 8 }}>
              {blog.introduction}
            </Text>

            {blog.overview && (
              <Box mb={{ base: 8, md: 10 }}>
                <Heading as="h2" size={{ base: 'md', md: 'lg' }} color="#02428d" mb={4}>{blog.overview.heading}</Heading>
                {blog.overview.content.split('\n').filter(Boolean).map((p: string, i: number) => (
                  <Text key={i} mb={4} fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.8" color={useColorModeValue('gray.700', 'gray.300')}>
                    {p}
                  </Text>
                ))}
              </Box>
            )}

            {blog.sections?.map((sec: any, i: number) => (
              <Box key={i} mb={{ base: 8, md: 10 }}>
                <Heading as="h3" size={{ base: 'sm', md: 'md' }} color="#02428d" mb={4}>{sec.heading}</Heading>
                {sec.content.split('\n').filter(Boolean).map((p: string, j: number) => (
                  <Text key={j} mb={4} fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.8" color={useColorModeValue('gray.700', 'gray.300')}>
                    {p}
                  </Text>
                ))}
              </Box>
            ))}

            <Divider my={{ base: 8, md: 10 }} />

            {/* Key Points */}
            {blog.keyPoints?.length > 0 && (
              <Box mb={{ base: 8, md: 10 }} bg={useColorModeValue('white', 'gray.800')} p={{ base: 6, md: 8 }} rounded="xl" borderWidth="1px" borderColor={useColorModeValue('gray.200', 'gray.700')} borderTopWidth="4px" borderTopColor="#e0a72b" shadow="sm">
                <Heading as="h3" size={{ base: 'sm', md: 'md' }} color="#02428d" mb={{ base: 4, md: 6 }} display="flex" alignItems="center">
                  <Icon as={InfoOutlineIcon} mr={3} color="#e0a72b" /> Key Insights
                </Heading>
                <Stack spacing={5}>
                  {blog.keyPoints.map((kp: any, i: number) => (
                    <Flex key={i} gap={4}>
                      <Box mt={1}>
                        <Icon as={CheckCircleIcon} color="#e0a72b" w={4} h={4} />
                      </Box>
                      <Box>
                        <Text fontWeight="bold" color="#02428d" mb={1} fontSize={{ base: 'sm', md: 'md' }}>{kp.point}</Text>
                        <Text color={useColorModeValue('gray.600', 'gray.400')} fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.6">{kp.description}</Text>
                      </Box>
                    </Flex>
                  ))}
                </Stack>
              </Box>
            )}

            {/* Best Practices & Challenges */}
            <Flex direction={{ base: 'column', lg: 'row' }} gap={{ base: 6, md: 8 }} mb={{ base: 8, md: 12 }}>
              {blog.bestPractices?.length > 0 && (
                <Box flex={1} bg={useColorModeValue('rgba(2,66,141,0.03)', 'rgba(2,66,141,0.1)')} p={{ base: 5, md: 8 }} rounded="2xl" borderWidth="1px" borderColor={useColorModeValue('rgba(2,66,141,0.15)', 'rgba(2,66,141,0.3)')}>
                  <Heading as="h4" size={{ base: 'sm', md: 'md' }} color="#02428d" mb={{ base: 6, md: 8 }} display="flex" alignItems="center" pb={4} borderBottomWidth="2px" borderBottomColor={useColorModeValue('rgba(2,66,141,0.2)', 'rgba(2,66,141,0.5)')}>
                    <Icon as={CheckCircleIcon} mr={3} color="#02428d" w={{ base: 5, md: 6 }} h={{ base: 5, md: 6 }} /> Best Practices
                  </Heading>
                  <Stack spacing={{ base: 4, md: 6 }}>
                    {blog.bestPractices.map((bp: any, i: number) => (
                      <Box 
                        key={i} 
                        bg={useColorModeValue('white', 'gray.800')} 
                        p={{ base: 4, md: 6 }} 
                        rounded="xl" 
                        shadow="sm" 
                        borderLeftWidth="4px" 
                        borderLeftColor="#02428d"
                        transition="all 0.3s ease"
                        _hover={{ transform: 'translateY(-3px)', shadow: 'md' }}
                      >
                        <Flex gap={{ base: 3, md: 4 }}>
                          <Box bg="rgba(2,66,141,0.1)" color="#02428d" w={{ base: 6, md: 8 }} h={{ base: 6, md: 8 }} rounded="full" display="flex" alignItems="center" justifyContent="center" fontWeight="bold" flexShrink={0} fontSize={{ base: 'sm', md: 'md' }}>
                            {i + 1}
                          </Box>
                          <Box>
                            <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }} color={useColorModeValue('gray.800', 'white')} mb={2}>{bp.title}</Text>
                            <Text fontSize={{ base: 'sm', md: 'md' }} color={useColorModeValue('gray.600', 'gray.400')} lineHeight="1.7">{bp.description}</Text>
                          </Box>
                        </Flex>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}

              {blog.challenges?.length > 0 && (
                <Box flex={1} bg={useColorModeValue('rgba(224,167,43,0.05)', 'rgba(224,167,43,0.1)')} p={{ base: 5, md: 8 }} rounded="2xl" borderWidth="1px" borderColor={useColorModeValue('rgba(224,167,43,0.25)', 'rgba(224,167,43,0.3)')}>
                  <Heading as="h4" size={{ base: 'sm', md: 'md' }} color="#c8911a" mb={{ base: 6, md: 8 }} display="flex" alignItems="center" pb={4} borderBottomWidth="2px" borderBottomColor={useColorModeValue('rgba(224,167,43,0.3)', 'rgba(224,167,43,0.5)')}>
                    <Icon as={WarningTwoIcon} mr={3} color="#e0a72b" w={{ base: 5, md: 6 }} h={{ base: 5, md: 6 }} /> Challenges
                  </Heading>
                  <Stack spacing={{ base: 4, md: 6 }}>
                    {blog.challenges.map((ch: any, i: number) => (
                      <Box 
                        key={i} 
                        bg={useColorModeValue('white', 'gray.800')} 
                        p={{ base: 4, md: 6 }} 
                        rounded="xl" 
                        shadow="sm" 
                        borderLeftWidth="4px" 
                        borderLeftColor="#e0a72b"
                        transition="all 0.3s ease"
                        _hover={{ transform: 'translateY(-3px)', shadow: 'md' }}
                      >
                        <Flex gap={{ base: 3, md: 4 }}>
                          <Box bg="rgba(224,167,43,0.15)" color="#c8911a" w={{ base: 6, md: 8 }} h={{ base: 6, md: 8 }} rounded="full" display="flex" alignItems="center" justifyContent="center" fontWeight="bold" flexShrink={0} fontSize={{ base: 'sm', md: 'md' }}>
                            {i + 1}
                          </Box>
                          <Box>
                            <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }} color={useColorModeValue('gray.800', 'white')} mb={2}>{ch.title}</Text>
                            <Text fontSize={{ base: 'sm', md: 'md' }} color={useColorModeValue('gray.600', 'gray.400')} lineHeight="1.7">{ch.description}</Text>
                          </Box>
                        </Flex>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}
            </Flex>

            {/* Conclusion */}
            {blog.conclusion && (
              <Box mt={{ base: 8, md: 10 }}>
                <Heading as="h3" size={{ base: 'sm', md: 'md' }} color="#e0a72b" mb={4}>Conclusion</Heading>
                <Text fontSize={{ base: 'sm', md: 'lg' }} lineHeight="1.8" color={useColorModeValue('gray.700', 'gray.300')}>
                  {blog.conclusion}
                </Text>
              </Box>
            )}

            {/* Read More Section for Current Blog */}
            {(blog.expertInsight || (blog.didYouKnow && blog.didYouKnow.length > 0) || blog.caseStudy || (blog.faq && blog.faq.length > 0) || (blog.furtherReading && blog.furtherReading.length > 0)) && (
              <Box mt={{ base: 8, md: 12 }} textAlign="center">
                <Button 
                  onClick={() => setShowMore(!showMore)} 
                  rightIcon={showMore ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  colorScheme="blue" 
                  variant="outline" 
                  rounded="full" 
                  size={{ base: 'md', md: 'lg' }}
                  px={{ base: 6, md: 8 }}
                >
                  {showMore ? 'Show Less' : 'Read More Details'}
                </Button>
                
                <Collapse in={showMore} animateOpacity>
                  <Box mt={{ base: 8, md: 10 }} textAlign="left" bg={useColorModeValue('gray.50', 'gray.800')} p={{ base: 5, md: 10 }} rounded="2xl" borderWidth="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}>
                    
                    {blog.expertInsight && (
                      <Box mb={{ base: 8, md: 10 }}>
                        <Heading as="h3" size={{ base: 'sm', md: 'md' }} color="#02428d" mb={4} display="flex" alignItems="center">
                          <Icon as={StarIcon} mr={3} color="#e0a72b" w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} /> Expert Insight
                        </Heading>
                        <Text fontSize={{ base: 'md', md: 'lg' }} color={useColorModeValue('gray.700', 'gray.300')} lineHeight="1.8" fontStyle="italic" pl={4} borderLeftWidth="4px" borderLeftColor="#e0a72b">
                          "{blog.expertInsight}"
                        </Text>
                      </Box>
                    )}

                    {blog.caseStudy && (
                      <Box mb={{ base: 8, md: 10 }}>
                        <Heading as="h3" size={{ base: 'sm', md: 'md' }} color="#02428d" mb={4} display="flex" alignItems="center">
                          <Icon as={InfoOutlineIcon} mr={3} color="#02428d" w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} /> Case Study: {blog.caseStudy.title}
                        </Heading>
                        <Box bg={useColorModeValue('white', 'gray.700')} p={{ base: 5, md: 6 }} rounded="xl" shadow="sm">
                          <Text fontSize={{ base: 'sm', md: 'md' }} color={useColorModeValue('gray.700', 'gray.300')} lineHeight="1.8">
                            {blog.caseStudy.body}
                          </Text>
                        </Box>
                      </Box>
                    )}

                    {blog.didYouKnow && blog.didYouKnow.length > 0 && (
                      <Box mb={{ base: 8, md: 10 }}>
                        <Heading as="h3" size={{ base: 'sm', md: 'md' }} color="#02428d" mb={{ base: 4, md: 6 }} display="flex" alignItems="center">
                          <Icon as={QuestionOutlineIcon} mr={3} color="#e0a72b" w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} /> Did You Know?
                        </Heading>
                        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 4, md: 6 }}>
                          {blog.didYouKnow.map((fact: string, i: number) => (
                            <Box key={i} bg={useColorModeValue('white', 'gray.700')} p={{ base: 4, md: 5 }} rounded="xl" shadow="sm" borderLeftWidth="4px" borderLeftColor="#02428d">
                              <Text fontSize={{ base: 'sm', md: 'md' }} color={useColorModeValue('gray.700', 'gray.300')}>{fact}</Text>
                            </Box>
                          ))}
                        </SimpleGrid>
                      </Box>
                    )}

                    {blog.faq && blog.faq.length > 0 && (
                      <Box mb={{ base: 8, md: 10 }}>
                        <Heading as="h3" size={{ base: 'sm', md: 'md' }} color="#02428d" mb={{ base: 4, md: 6 }} display="flex" alignItems="center">
                          <Icon as={QuestionOutlineIcon} mr={3} color="#02428d" w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} /> Frequently Asked Questions
                        </Heading>
                        <Accordion allowMultiple>
                          {blog.faq.map((item: any, i: number) => (
                            <AccordionItem key={i} border="none" mb={4} bg={useColorModeValue('white', 'gray.700')} rounded="lg" shadow="sm">
                              <h2>
                                <AccordionButton _expanded={{ color: '#02428d', fontWeight: 'bold' }} rounded="lg" p={{ base: 4, md: 4 }}>
                                  <Box flex="1" textAlign="left" fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }}>
                                    {item.q}
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4} pt={0} px={{ base: 4, md: 4 }} color={useColorModeValue('gray.600', 'gray.400')} fontSize={{ base: 'sm', md: 'md' }}>
                                {item.a}
                              </AccordionPanel>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </Box>
                    )}

                    {blog.furtherReading && blog.furtherReading.length > 0 && (
                      <Box>
                        <Heading as="h3" size={{ base: 'sm', md: 'md' }} color="#02428d" mb={{ base: 4, md: 6 }} display="flex" alignItems="center">
                          <Icon as={ExternalLinkIcon} mr={3} color="#e0a72b" w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} /> Further Reading
                        </Heading>
                        <List spacing={{ base: 3, md: 4 }}>
                          {blog.furtherReading.map((resource: any, i: number) => (
                            <ListItem key={i} bg={useColorModeValue('white', 'gray.700')} p={{ base: 4, md: 4 }} rounded="xl" shadow="sm" display="flex" alignItems="flex-start">
                              <ListIcon as={CheckCircleIcon} color="#02428d" mt={1} />
                              <Box>
                                <Text fontWeight="bold" color="#02428d" mb={1} fontSize={{ base: 'sm', md: 'md' }}>{resource.title}</Text>
                                <Text fontSize={{ base: 'xs', md: 'sm' }} color={useColorModeValue('gray.600', 'gray.400')}>{resource.description}</Text>
                              </Box>
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    )}
                  </Box>
                </Collapse>
              </Box>
            )}
          </Box>
        </Stack>
      </Container>
      
      <Footereds />
    </Box>
  )
}

export default SingleBlogPage
