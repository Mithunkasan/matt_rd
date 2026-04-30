import React, { useEffect, useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Stack,
  Badge,
  Button,
  useColorModeValue,
  Center,
  Spinner
} from '@chakra-ui/react'
import Link from 'next/link'

interface Blog {
  id: string
  title: string
  category: string
  readTime: string
  introduction: string
  imageUrl: string
  generatedAt: string
}

const HomeBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        // Only show the top 3 latest blogs on the homepage
        setBlogs((data.blogs || []).slice(0, 3))
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch blogs', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <Center py={20}>
        <Spinner size="xl" color="#02428d" thickness="4px" />
      </Center>
    )
  }

  // If no blogs exist, don't show the section on the homepage
  if (blogs.length === 0) {
    return null
  }

  return (
    <Box py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="7xl">
        <Box textAlign="center" mb={12}>
          <Heading color="#02428d" mb={4} fontSize={{ base: '3xl', md: '4xl' }} fontWeight="bold">
            Our Latest Research Insights
          </Heading>
          <Text color="gray.600" fontSize="lg" maxW="2xl" mx="auto">
            Stay updated with our latest articles, guides, and insights on academic research and publishing.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {blogs.map((blog) => (
            <Box
              key={blog.id}
              bg={useColorModeValue('white', 'gray.800')}
              rounded="2xl"
              shadow="xl"
              overflow="hidden"
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-8px)', shadow: '2xl' }}
              display="flex"
              flexDirection="column"
              border="1px solid"
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            >
              <Box h="240px" overflow="hidden" position="relative">
                <Image
                  src={blog.imageUrl || 'https://via.placeholder.com/600x400'}
                  alt={blog.title}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  transition="transform 0.5s"
                  _hover={{ transform: 'scale(1.05)' }}
                />
                <Badge 
                  position="absolute" 
                  top={4} 
                  left={4} 
                  bg="#e0a72b"
                  color="#fff"
                  px={3}
                  py={1}
                  rounded="full"
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize="xs"
                  boxShadow="md"
                >
                  {blog.category}
                </Badge>
              </Box>
              
              <Stack p={6} flex={1} spacing={4}>
                <Stack direction="row" justify="space-between" align="center" fontSize="sm" color="gray.500" fontWeight="500">
                  <Text>{new Date(blog.generatedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
                  <Text>{blog.readTime}</Text>
                </Stack>
                
                <Heading as="h3" size="md" lineHeight="1.4" color="#02428d">
                  {blog.title}
                </Heading>
                
                <Text color="gray.600" fontSize="sm" noOfLines={3} flex={1} lineHeight="1.6">
                  {blog.introduction}
                </Text>
                
                <Link href={`/blog/${blog.id}`} passHref>
                  <Button 
                    mt={2}
                    w="full"
                    bg="transparent"
                    color="#02428d" 
                    border="2px solid"
                    borderColor="#02428d"
                    _hover={{ bg: '#02428d', color: 'white' }}
                    rounded="full"
                    fontWeight="bold"
                    transition="all 0.2s"
                  >
                    Read More
                  </Button>
                </Link>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>

        <Center mt={12}>
          <Link href="/blog" passHref>
            <Button 
              size="lg"
              bg="#e0a72b"
              color="white"
              _hover={{ bg: '#c8911a', transform: 'scale(1.05)' }}
              rounded="full"
              px={8}
              shadow="md"
            >
              View All Blogs
            </Button>
          </Link>
        </Center>
      </Container>
    </Box>
  )
}

export default HomeBlogs
